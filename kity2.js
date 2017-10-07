var textObjMap = {};
var isTextObj = function(id) {
    return (id in textObjMap);
}

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
    if(!isValidId(targetDIV)) return null;
    var txtObjArr = [];
    // content 분리
    var textArr = splitText(text, groupName, splitType);

    for (var i=0; i<textArr.length; i++) {
        var elId = groupName+'_'+splitType+'_'+i;
        var textObj = {
            id: elId,
            content: textArr[i],
            groupName: groupName,
            splitType: splitType,
            color: 'black',
            fontSize: 10,
            top: 0,
            left: 0,
            opacity: 1,
            rotation: 0,
            scale: 1,
            currentTop: 0,
            currentLeft: 0,
            motionFunc: {
                rotation: {
                    angle: undefined, // number
                    goback: undefined, // boolean
                },
                scale: {
                    size: undefined, // number
                    goback: undefined, // boolean
                },
                opacity: {
                    opacity: undefined, // number 0~1
                    goback: undefined, // boolean
                },
                shaking: {
                    size: undefined,
                    goback: undefined, // boolean
                },
                line: {
                    direction: undefined,
                    length: undefined,
                    goback: undefined, // boolean
                },
                circle: {
                    angle: undefined,
                    radius: undefined,
                    goback: undefined, // boolean
                }
            },
            motion: undefined// last set motion
        };
        var el = createElement(targetDIV, elId, textObj.content);
        textObjMap[elId] = textObj;
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
* @method kitySetTextObjAttr
* @param {String} targetDIV Target element id
* @param {Array} txtObjs Array of text object
* @param {String} layout Arrange layout. layout := 'leftToRight'|'topToBottom'|'diagonal'|'point'|'userDef'
* @param {Object} options Text attributes
*/
var kitySetTextObjAttr = function(targetDIV, txtObjs, layout, options) {
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
            setStyle(txtObjs[i].id, options);
        }
    }
}

/**
* Executes motion animation by sequence.
*
* @method kitySetText
* @param {String} targetDIV Target element id
* @param {Array} textSet Array of text object index
* @param {String} motionFunc Default motion function
* @param {Array} timeSet Array of start(delay) time
*/
var kityExeMotionSeq = function(targetDIV, textSet, motionFunc, timeSet) {
    // TODO list
    // 1. textSet의 인덱스로 animation 순서가 정해짐.
    // 2. StartTimeSet이랑 매칭하여 애니메이션 생성.
    // 3. 모션 실행.
    const timeline = new mojs.Timeline;
    var targetEl = document.getElementById(targetDIV);
    var nodes = targetEl.childNodes;
    if (nodes.length < 1) return;
    for (var i=0; i<textSet.length; i++) {
        // TODO error handling
        var txtObj = nodes[textSet[i]].id;
        var obj = eval(motionFunc);
        obj.delay = timeSet[i]*1000;
        var animation = new mojs.Html(obj);
        timeline.add(animation);
    }
    timeline.play();
}

/**
* Plays a single motion animation.
*
* @method kitySinglePlay
* @param motionFunc {String} Default motion function
* @param options {Object} Options for delay, duration, repeat
*/
var kitySinglePlay = function(motionFunc, options) {
    // {delay, duration, repeat}
    // TODO: Animation
    var textObj = JSON.parse(motionFunc);
    var target = textObj.id;
    if (!target) {
        console.error("target is wrong!! ", target);
        return;
    }
    if (!isValidId(target) || !isTextObj(target)) return;
    var animation;

    var motion = textObj.motion;
    var obj;
    switch(motion) {
        case 'line':
            obj = getTransitionByDirection(textObj);
            break;
        case 'opacity':
            obj = getTransitionByOpacity(textObj);
            break;
        case 'scale':
            obj = getTransitionByScale(textObj);
            break;
        case 'rotation':
            obj = getTransitionByRotation(textObj);
            break;
        default:
            console.log("TODO!! "+motion);
            break;
    }

    if (!Array.isArray(obj)) {
        for (var op in options) {
            if (op === 'delay' || op === 'duration') {
                obj[op] = options[op]*1000;
            } else if (op === 'repeat') {
                obj[op] = options[op];
            }

        }
        obj['el'] = '#'+target;
        
        //animation = new mojs.Html(obj);
        //animation.replay();
        
    }
    return obj;
}

/**
* Gets a line motion function.
*
* @method kityLine
* @param id {String} Text object id
* @param options {Object} Options for direction and length
*/
var kityLine = function(id, options) {
    // direction, length
    if (!isValidId(id) || !isTextObj(id)) {
        console.error("Wrong parameter type ", id);
        return;
    }

    copyMotionOption(id, 'line', options);
    return JSON.stringify(textObjMap[id]);
}