/**
 * KITY module for kinetic typography.
 *
 * Usage
 * 1. Create text object.
 * 2. Set style for text. If you create text object already with style, you can skip this step.
 * 3. Set animation specification for text.
 * 4. Create animation object.
 * 5. Add object to animation object with animation specification.
 * 6. Start animation.
 *
 * @class KITY
 */
var KITY;

(function() {
KITY = {};
var objectMap = {};
var animations = [];
var timeline;

/**
* Checks if target object is valid.
* Target object should be in the internal objectMap.
*
* @method isValidObject
* @param targetObj {Object} Target object
* @return {Boolean} If target obejct is valid, returns `true`. Otherwise, returns `false`.
* @private
*/
var isValidObject = function(targetObj) {
    if (typeof targetObj !== 'object') {
        console.error("Wrong parameter type ", targetObj);
        return false;
    }

    if (objectMap[targetObj.id]) return true;

    console.error("Invalid object ", targetObj);
    return false;
}

/**
* Checks if target object id is valid.
* Target object should be in the internal objectMap.
*
* @method isValidId
* @param id {Object} Id of target object
* @return {Boolean} If target obejct is valid, returns `true`. Otherwise, returns `false`.
* @private
*/
var isValidId = function(id) {
    if (typeof id !== 'string') {
        console.error("Wrong parameter type", id);
        return false;
    }

    if (objectMap[id]) return true;

    console.error("Invalid object id", id);
    return false;
}

/**
 * Creates text object.
 * Creates new div element with `id` and adds it to div element having `targetId`.
 * If you create text with 'word' or 'char' type, each element has id like "`id`_`type`_index".
 *
 * @example
 *      var textObjs = KITY.createText("Hello", "body", "hello", 'char');
 *      // Element id of textObjs[0] is 'hello_char_0'.
 *
 * @method createText
 * @param text {String} Text string
 * @param targetId {String} Parent element id
 * @param id {String} Element id for this text
 * @param type {String} Text object type
 * @param style {Object} Style attributes
 * <pre>
 *      type := 'line' | 'word' | 'char'
 *      style.layout := 'leftToRight' | 'topToBottom' | 'diagonal' | 'point' | 'userDef'
 * </pre>
 * @return {Array} Array of text objects
 */
KITY.createText = function(text, targetId, id, type, style) {
    var txtObjArr = [];

    // content 분리
    if (!type) type = 'line';
    var textArr = splitText(text, type);

    // 텍스트 객체 생성
    for (var i=0; i<textArr.length; i++) {
        var elId = id+'_'+type+'_'+i;
        var textObj = new Text(textArr[i], elId, targetId, type, id, i);
        objectMap[elId] = textObj;
        if (style) {
            KITY.setStyle(textObj, style);
        }
        txtObjArr.push(textObj);
    }
    
    return txtObjArr;
}

/**
* Splits text by split type.
*
* @method splitText
* @param {String} text Text
* @return {String} splitType Split type
* @private
*/
var splitText = function(text, splitType) {
    var textArr = [];
    switch(splitType) {
        case 'line':
            textArr.push(text);
            break;
        case 'word':
            textArr = text.split(" ");
            break;
        case 'char':
            textArr = text.replace(" ", "").split("");
            break;
        default:
            console.error("Not Supported Type: "+splitType);
            break;
    }
    return textArr;
}

/**
 * Sets style for text object.
 *
 * @method setStyle
 * @param targetObj {Object} Target object
 * @param style {Object} Style attributes
 * @return {Object} Target object
 */
KITY.setStyle = function(targetObj, style) {
    if (!isValidObject(targetObj)) {
        return;
    }

    var el = document.getElementById(targetObj.id);
    for (var o in style) {
        el.style[o] = style[o];
    }
    extend(targetObj.style, style);
    return targetObj;
}

/**
 * Sets style for text object by id.
 *
 * @method setStyleById
 * @param id {String} Element id of target object
 * @param style {Object} Style attributes
 * @return {Object} Target object
 */
KITY.setStyleById = function(id, style) {
    if (!isValidId(id)) {
        return;
    }

    return KITY.setStyle(objectMap[id], style);
}

/**
 * Sets layout for text objects
 *
 * @method setLayout
 * @param targetObj {Array} Array of text objects or Container
 * @param layout {String} Layout mode
 * @param options {Object} Options for css style
 * <pre>
 *      layout := 'leftToRight' | 'topToBottom' | 'diagonal' | 'point' | 'userDef'
 * </pre>
 * @return {Object} Target object
 */
KITY.setLayout = function(targetObj, layout, options) {
    if ('type' in targetObj && targetObj.type == 'container') {
        console.log("container set layout!!");
        setContainerLayout(targetObj, layout, options);
    } else {
        setTextLayout(targetObj, layout, options);
    }

    return targetObj;
}

/**
 * Sets layout for Container.
 *
 * @method setContainerLayout
 * @param contObj {Object} Container object
 * @param layout {String} Layout string
 * @param options {Object} Options
 * @return {Object} Text object
 */
var setContainerLayout = function(contObj, layout, options) {
    if (contObj.type != 'container') {
        return contObj;
    }

    if (!options || typeof options != 'object') {
        options = {};
    }

    options.position = 'absolute';

    var top_ = options.top ? options.top : 0;
    var left_ = options.left ? options.left : 0;
    var length = 0;
    var children = contObj.getChildren();
    console.log(children);
    
    for (var c in children) {
        console.log(children[c]);
        //console.log(children[i]);
        /*
        switch(layout) {
            case 'leftToRight':
                if (options.length) {
                    options.left = left_ + options.length*i;
                } else {
                    options.left = left_ + length*options.fontSize;
                }
                break;
            case 'point':
                // nothing to do
                break;
            case 'topToBottom':
                options.top = top_ + i*options.fontSize;
                break;
            case 'diagonal':
                options.top = top_ + i*options.fontSize;
                if (options.length) {
                    options.left = left_ + options.length*i;
                } else {
                    options.left = left_ + length*options.fontSize;
                }
                break;
            case 'userDef':
                // TODO
                break;
        }

        // CSS 스타일 적용
        if (Object.keys(options).length > 0) {
            KITY.setStyle(contObjs[i], options);
        }
        

        length += contObjs[i].length;
        */
    }
    return contObj;
}

/**
 * Sets layout for Text.
 *
 * @method setTextLayout
 * @param textObjs {Object} Text object
 * @param layout {String} Layout string
 * @param options {Object} Options
 * @return {Object} Text object
 */
var setTextLayout = function(textObjs, layout, options) {
    if (!options || typeof options != 'object') {
        options = {fontSize: 16};
    } else if (!('fontSize' in options)) {
        options.fontSize = 16;
    }

    // layout
    /*
    switch(layout) {
        case 'leftToRight':
            //options.position = 'static';
            //break;
        case 'topToBottom':
        case 'diagonal':
        case 'point':
            //options.position = 'absolute';
            break;
        case 'userDef':
            // TODO
            break;
    }
    */
    options.position = 'relative';

    // TODO: topGap, leftGap 설정
    var top_ = options.top ? options.top : 0;
    var left_ = options.left ? options.left : 0;
    for (var i=0; i<textObjs.length; i++) {
        switch(layout) {
            case 'leftToRight':
                // nothing to do
                break;
            case 'point':
                if (i>0) {
                    options.left = left_ - length*options.fontSize;
                }
                break;
            case 'topToBottom':
                options.top = top_ + i*options.fontSize;
                if (i>0) {
                    options.left = left_ - length*options.fontSize;
                }
                break;
            case 'diagonal':
                options.top = top_ + i*options.fontSize;

                break;
            case 'userDef':
                // TODO
                break;
        }

        // CSS 스타일 적용
        if (Object.keys(options).length > 0) {
            KITY.setStyle(textObjs[i], options);
        }

        length += textObjs[i].text.length;
    }
    return textObjs
}

/**
 * Sets animation spec for object.
 *
 * @method setAnimationSpec
 * @param targetObj {Object} Target object
 * @param spec {Object} Animation specification
 * @return {Object} Text object
 */
KITY.setAnimationSpec = function(targetObj, spec) {
    // TODO: spec valid check
    if (!isValidObject(targetObj)) {
        return;
    }

    // TODO
    if ('getSpec' in spec) {
        spec = spec.getSpec();
    }

    for (var o in spec) {
        if (o === 'delay' || o === 'duration') {
            spec[o] *= 1000;
        }

        for(var o2 in spec[o]) {
            if (o2 === 'delay' || o2 === 'duration') {
                spec[o][o2] *= 1000;
            }
        }
    }

    extend(targetObj.spec, spec);
    return targetObj;
}

/**
 * Sets animation spec for object by id.
 *
 * @method setAnimationSpecById
 * @param id {String} Id of target object
 * @param spec {Object} Animation specification
 * @return {Object} Target object
 */
KITY.setAnimationSpecById = function(id, spec) {
    // TODO: spec valid check
    if (!isValidId(id)) {
        return;
    }

    return KITY.setAnimationSpec(objectMap[id], spec);
}

/**
 * Clears all the animation specifications from target object.
 *
 * @method createAnimationSpec
 * @param targetObj {Object} Target object
 * @return {Object} Target object
 */
KITY.clearAnimationSpec = function(targetObj) {
    if (!isValidObject(targetObj)) {
        return;
    }

    if ('spec' in targetObj) {
        targetObj.spec = {el: '#'+targetObj.id};
    }
    return targetObj;
}

/**
 * Clears all the animation specifications from target object by id.
 *
 * @method createAnimationSpecById
 * @param id {String} Id of target object
 * @return {Object} Target object
 */
KITY.clearAnimationSpecById = function(id) {
    if (!isValidId(id)) {
        return;
    }

    return KITY.clearAnimationSpec(objectMap[id]);
}

/**
 * Contains text objects and another container.
 *
 * @method createContainer
 * @param id {String} Element id
 * @return {Object} Container object
 */
KITY.createContainer = function(id, parentId) {
    var container = new Container(id, parentId);
    objectMap[id] = container;
    return container;
}

/**
 * Plays animation in timeline.
 *
 * @method play
 * @param targetObj {Object|Array} Target object or Array of target objects.
 * @param options {Object} Options. It can be play mode or animation object. If you input animation object, it will be played once.
 * <pre>
 *      options.mode := 'parallel' | 'sequence'
 * </pre>
 */
KITY.play = function(targetObj, options) {
    if (Array.isArray(targetObj)) {
        for (var o in targetObj) {
            pushAnimation(targetObj[o]);
        }
    } else {
        pushAnimation(targetObj);
    }

    if (!options) options = {};
    timeline = new mojs.Timeline;
    if (options.mode == 'parallel' || Object.keys(options).length === 0) {
        for (var i=0; i<animations.length; i++) {
            timeline.add(animations[i]);
        }
    } else if (options.mode == 'sequence') {
        for (var i=0; i<animations.length; i++) {
            timeline.append(animations[i]);
        }
    } else {
        timeline.add(options);
    }
    timeline.play();
}

function pushAnimation(obj) {
    if (typeof obj === 'object'&& 'spec' in obj) {
        animations.push(new mojs.Html(obj.spec));
    } else if (Array.isArray(obj)) {
        for (var o in obj) {
            pushAnimation(obj[o]);
        }
    }
}

})();
