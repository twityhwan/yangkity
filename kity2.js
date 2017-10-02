/**
* Creates text object.
*
* @method kityCreateTextObj
* @param {String} text Text
* @param {String} groupname Group name for identifying its original text
* @param {String} splitType Split type. splitType := 'line' | 'word' | 'char'
* @param {String} targetDIV Target element id
* @return {Array} txtObjArr Array of text object
*/
var kityCreateTextObj = function(text, groupName, splitType, targetDIV) {
    var txtObjArr = [];
    var textObj = {
        textObjInfo: { // text 객체 정보
            textType: undefined,
            GroupName: undefined, // 하나의 문장에서 파생됨
            ID: undefined, // line, word, char
            Content: undefined,
        },
        textObjAttr: { // text Style 정보
            font: undefined,
            fontsize: undefined,
            fontcolor: undefined,
            fontOpacity: undefined,
            layout: undefined, // leftToRight, topToBottom, diagonal, point, userDef
            initX: undefined,
            initY: undefined
        }
    }

    var div = document.getElementById(targetDIV);
    var textEl = document.createElement('div');
    textEl.id = groupName;
    textEl.style.display = "inline-block";
    textEl.style.position= "absolute";
    div.appendChild(textEl);

    txtObjArr = splitText(text, groupName, splitType);
    return txtObjArr;
}

/**
* Splits text by split type.
*
* @method kitySetText
* @param {String} targetDIV Target element id
* @param {Object} options Options
*/
var splitText = function(text, groupName, splitType) {
    var txtObjArr = [];
    return txtObjArr;
}


/**
* Sets text attributes.
*
* @method kitySetText
* @param {String} targetDIV Target element id
* @param {Array} txtObjArr Array of text object
* @param {String} layout Arrange layout. layout := 'leftToRight'|'topToBottom'|'diagonal'|'point'|'userDef'
*/
var kitySetTextObjArr = function(targetDIV, txtObjArr, layout) {

}

/**
* Executes motion animation by sequence.
*
* @method kitySetText
* @param {String} targetDIV Target element id
* @param {Array} textSet Array of text object id
* @param {String} function Default motion function
* @param {Array} timeSet Array of delay time
*/
var kityExeMotionSeq = function(targetDIV, textSet, func, timeSet) {

}
