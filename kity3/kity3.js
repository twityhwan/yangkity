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
 * @param parentId {String} Parent element id
 * @param id {String} Element id for this text
 * @param type {String} Text object type
 * <pre>
 *      type := 'line' | 'word' | 'char'
 * </pre>
 * @param style {Object} CSS Style attributes
 * @return {Array} Array of text objects
 */
KITY.createText = function(text, parentId, id, type, style) {
    var txtObjArr = [];

    // content 분리
    if (!type) type = 'line';
    var textArr = splitText(text, type);

    // 텍스트 객체 생성
    for (var i=0; i<textArr.length; i++) {
        var elId = id+'_'+type+'_'+i;
        var textObj = new Text(textArr[i], elId, parentId, type, id, i);
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

KITY.remove = function(targetObjs) {
    if (Array.isArray(targetObjs)) {
        for (var obj in targetObjs) {
            KITY.remove(targetObjs[obj]);
        }
    } else if (typeof targetObjs === "object") {
        if (objectMap.has(targetObjs.id)) {
            delete objectMap[elId];
        }
    }
}

KITY.removeById = function(targetId) {
    if (targetId in objectMap) {
        delete objectMap[targetId];
    }
}

/**
 * Sets style for target object.
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
 * @param textObj {Array} Array of text objects
 * @param layout {String} Layout mode
 * <pre>
 *      layout := 'leftToRight' | 'topToBottom' | 'diagonal' | 'point'
 * </pre>
 * @param options {Object} Options for css style
 * @return {Object} Target object
 */
KITY.setLayout = function(textObj, layout, options) {
    /*
    if ('type' in targetObj && targetObj.type == 'container') {
        console.log("container set layout!!");
        setContainerLayout(targetObj, layout, options);
    }*/
    setTextLayout(textObj, layout, options);

    return textObj;
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
 * @private
 */
var setTextLayout = function(textObjs, layout, options) {

    if (textObjs.length < 1) return;

    if (!options || typeof options != 'object') {
        options = {};
    }

    options.position = 'relative';
    
    // TODO: topGap, leftGap 설정
    var firstEl = document.getElementById(textObjs[0].id);
    var top_ = 0, left_ = 0;
    if (options.top) {
        top_ = options.top;
    } else {
        if (firstEl.style.top) top_ = Number.parseFloat((firstEl.style.top).replace('px',''));
    }

    if (options.left) {
        left_ = options.left;
    } else {
        if (firstEl.style.left) left_ = Number.parseFloat((firstEl.style.left).replace('px', ''));
    }

    var preEl;
    var width = 0, height = 0;
    for (var i=0; i<textObjs.length; i++) {
        switch(layout) {
            case 'leftToRight':
                // nothing to do
                break;
            case 'point':
                if (i>0) {
                    options.left = left_ - width;
                }
                break;
            case 'topToBottom':
                if (i>0) {
                    options.top = top_ + height;
                    options.left = left_ - width;
                }
                break;
            case 'diagonal':
                if (i>0) {
                    options.top = top_ + height;
                }
                break;
            case 'userDef':
                // TODO
                break;
        }

        // CSS 스타일 적용
        if (Object.keys(options).length > 0) {
            KITY.setStyle(textObjs[i], options);
        }

        preEl = document.getElementById(textObjs[i].id);
        width += preEl.clientWidth;
        height += preEl.clientHeight;
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
KITY.setAnimationSpec = function(targetObj) {
    // TODO: spec valid check
    if (!isValidObject(targetObj)) {
        return;
    }

    if (!('specs' in targetObj)) {
        targetObj.specs = [];
    }

    for (var i=1; i<arguments.length; i++) {
        var spec = arguments[i];
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
        
        targetObj.specs.push(spec);
    }

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
 * @method clearAnimationSpec
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
 * @method clearAnimationSpecById
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
 * @param parentId {String} Parent element id
 * @return {Object} Container object
 */
KITY.createContainer = function(parentId, id) {
    var container = new Container(parentId, id);
    objectMap[id] = container;
    return container;
}

/**
 * Plays animation in timeline.
 *
 * @method play
 * @param targetObj {Object|Array} Target object or Array of target objects.
 * @param mode {String} Play mode. If mode is 'parallel', animations of target objects are played in parallel.
 * If mode is 'sequence', each animation of target objects is played in sequence.
 * <pre>
 *      mode := 'parallel' | 'sequence'
 * </pre>
 */
KITY.play = function(targetObj, mode) {
    if (Array.isArray(targetObj)) {
        for (var o in targetObj) {
            pushAnimation(targetObj[o]);
        }
    } else {
        pushAnimation(targetObj);
    }

    if (!mode) mode = 'parallel';
    timeline = new mojs.Timeline;
    if (mode === 'parallel') {
        for (var i=0; i<animations.length; i++) {
            timeline.add(animations[i]);
        }
    } else if (mode === 'sequence') {
        for (var i=0; i<animations.length; i++) {
            timeline.append(animations[i]);
        }
    } else {
        // TODO
    }
    timeline.play();
}

function pushAnimation(obj) {
    if (typeof obj === "object" && 'specs' in obj) {
        var spec;
        for (var i=0; i<obj.specs.length; i++) {
            if (i==0) {
                extend(obj.specs[i], {el: '#'+obj.id});
                spec = new mojs.Html(obj.specs[i]);
            }
            else {
                spec.then(obj.specs[i]);
            }
        }
        if (obj.specs.length>0)
            animations.push(spec);
    } else if (Array.isArray(obj)) {
        for (var o in obj) {
            pushAnimation(obj[o]);
        }
    }

    
    /*
    if (typeof obj === 'object'&& 'spec' in obj) {
        var spec;
        for(var i=0; i<obj.specs.length; i++) {
            if (i==0) {
                extend(obj.specs[i], {el: '#'+obj.id})
                console.log(obj.specs[i]);
                spec = new mojs.Html(obj.specs[i]);
            }
            spec.then(obj.specs[i]);
        }
        animations.push(spec);
    } else if (Array.isArray(obj)) {
        for (var o in obj) {
            pushAnimation(obj[o]);
        }
    }
    */
}

})();
