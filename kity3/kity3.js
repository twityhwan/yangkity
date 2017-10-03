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
    var textArr = splitText(text, type);

    // 텍스트 객체 생성
    for (var i=0; i<textArr.length; i++) {
        var elId = id+'_'+type+'_'+i;
        var textObj = {
            id: elId,
            parentId: targetId,
            type: type, // 'line', 'word', 'char'
            groupId: id, // 하나의 문장에서 파생됨
            index: i, // line, word, char
            text: textArr[i],
            style: { // text Style 정보
            },
            spec: {
                el: '#'+elId
            }
        }
        createElement(targetId, elId, textArr[i]);
        txtObjArr.push(textObj);
    }
    // TODO: style
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
 * Sets style for object having id.
 *
 * @method setAttributes
 * @param textObj {String|Object} Text object or element id
 * @param style {Object} Style attributes
 * @return {Object} Text object
 */
KITY.setStyle = function(textObj, style) {
}

/**
 * Sets animation spec for object.
 *
 * @method setAnimationSpec
 * @param textObj {String|Object} Text object or element id
 * @param spec {Object} Animation specification
 * @return {Object} Text object
 */
KITY.setAnimationSpec = function(textObj, spec) {
    // TODO: spec valid check

    for (var o in spec) {
        for(var o2 in spec[o]) {
            if (o2 === 'delay' || o2 === 'duration') {
                spec[o][o2] *= 1000;
            }
        }
    }

    extend(textObj.spec, spec);
    return textObj;
}

/**
 * Contains text objects and another container.
 *
 * @method createContainer
 * @param id {String} Element id
 * @return {Object} Container object
 */
KITY.createContainer = function(id) {
    return new Container(id);
}

/**
 * Creates animation object.
 *
 * @method createAnimation
 * @param {Object} object Text object or Container object
 * @return {Object} Animation object
 */
KITY.createAnimation = function(object) {
    // TODO: then 처리
    // TODO: container 처리
    return new mojs.Html(object.spec);
}

/**
 * Creates timeline.
 * Animation can be added to or removed from timeline.
 *
 * @method createTimeline
 * @return {Object} Timeline object
 */
KITY.createTimeline = function() {
    const timeline = new mojs.Timeline;
    return timeline;
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
