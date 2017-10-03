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

    //var el = createElement(targetDIV, groupName);

    // content 분리
    var textArr = splitText(text, groupName, splitType);

    // 텍스트 객체 생성
    for (var i=0; i<textArr.length; i++) {
        var textObj = {
            textObjInfo: { // text 객체 정보
                textType: splitType, // 'line', 'word', 'char'
                GroupName: groupName, // 하나의 문장에서 파생됨
                ID: i, // line, word, char
                Content: textArr[i],
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
        txtObjArr.push(textObj);
    }
    return txtObjArr;
}

/**
* Splits text by split type.
*
* @method splitText
* @param {String} targetDIV Target element id
* @param {String} groupName Group name
* @return {String} splitType Split type
*/
var splitText = function(text, groupName, splitType) {
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
* Sets text attributes.
*
* @method kitySetTextAttr
* @param {String} targetDIV Target element id
* @param {Array} txtObjs Array of text object
* @param {String} layout Arrange layout. layout := 'leftToRight'|'topToBottom'|'diagonal'|'point'|'userDef'
* @param {Object} options Text attributes
*/
var kitySetTextAttr = function(targetDIV, txtObjs, layout, options) {
    // 첫번째 객체의 initX, initY에 따라 이후 객체들의 값이 자동으로 셋팅됨.
    // TODO: X, Y 좌표 매칭

    if (!options || typeof options != 'object') {
        options = {};
    }

    // layout
    switch(layout) {
        case 'leftToRight':
            options.position = 'static';
            break;
        case 'topToBottom':
        case 'diagonal':
        case 'point':
            options.position = 'absolute';
            break;
        case 'userDef':
            // TODO
            break;
    }

    var top_ = options.top ? options.top : 0;
    var left_ = options.left ? options.left : 0;
    for (var i=0; i<txtObjs.length; i++) {
        var info = txtObjs[i].textObjInfo;
        var id = info.GroupName+'_'+info.textType+'_'+info.ID;
        var el = createElement(targetDIV, id, info.Content);

        switch(layout) {
            case 'leftToRight':
            case 'point':
                // nothing to do
                break;
            case 'topToBottom':
                options.top = top_ + i*options.fontsize;
                break;
            case 'diagonal':
                options.top = top_ + i*options.fontsize;
                options.left = left_ + i*options.fontsize;
                break;
            case 'userDef':
                // TODO
                break;
        }

        // CSS 스타일 적용
        if (Object.keys(options).length > 0) {
            setStyle(id, options);
        }
    }
}

/**
* Executes motion animation by sequence.
*
* @method kitySetText
* @param {String} targetDIV Target element id
* @param {Array} textSet Array of text object id
* @param {String} motionFunc Default motion function
* @param {Array} timeSet Array of delay time
*/
var kityExeMotionSeq = function(targetDIV, textSet, motionFunc, timeSet) {

}
