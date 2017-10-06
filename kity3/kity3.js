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
    var textArr = type ? splitText(text, type) : splitText(text, 'line');

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

    if ('getSpec' in spec) {
        spec = spec.getSpec();
    }

    for (var o in spec) {
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
KITY.createContainer = function(id) {
    var container = new Container(id);
    objectMap[id] = container;
    return container;
}

/**
 * Creates animation object.
 *
 * @method createAnimation
 * @param targetObj {Object} Target object
 * @return {Object} Animation object
 */
KITY.createAnimation = function(targetObj) {
    // TODO: then 처리
    if (!isValidObject(targetObj)) {
        return;
    }
    return new mojs.Html(targetObj.spec);
}

/**
 * Creates animation object by id.
 *
 * @method createAnimationById
 * @param id {String} Id of target object
 * @return {Object} Animation object
 */
KITY.createAnimationById = function(id) {
    // TODO: then 처리
    if (!isValidId(id)) {
        return;
    }
    KITY.createAnimation(objectMap[id]);
}

/**
 * Gets player. Player can control kinetic typography animation.
 *
 * @method getPlayer
 * @return {Object} Player object
 */
KITY.getPlayer = function() {
    return Player;
}

})();
