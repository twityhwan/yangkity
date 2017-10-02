var textObjMap = {}; // domId : textObj
var updatedObjMap = {};
var isTextObj = function(id) {
    return (id in textObjMap);
}


// TODO: Map에 있는지도 체크 ㅠㅠ
// TODO: 텍스트 position을 relative로 처리하도록..
// 1. 글자 생성 함수
var kityCreateText = function(targetDIV, newID) {
    if(!isValidId(targetDIV)) return null;
    if(newID in textObjMap) {
        console.log(newID + " alread exists!!");
        return textObjMap[newID];
    }

    var div = document.getElementById(targetDIV);
    var text = document.createElement('div');
    text.id = newID;
    text.style.display = "inline-block";
    text.style.position= "absolute";

    div.appendChild(text);

    var textObj = {
        id: newID,
        contents: '',
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
    textObjMap[newID] = textObj;
}

var kitySetText = function(target, options) {
    if(!isValidId(target) || !isTextObj(target)) return;
    var textObj = textObjMap[target];
    for (var o in options) {
        if (o in textObj) {
            textObj[o] = options[o];
        }
    }

    textEl = document.getElementById(target);
    for (var o in options) {
        switch(o) {
        case "contents":
            textEl.innerHTML = options.contents;
            break;
        case "color":
            textEl.style.color = options.color;
            break;
        case "fontSize":
            textEl.style.fontSize = options.fontSize;
            break;
        case "top":
            textEl.style.top = options.top;
            break;
        case "left":
            textEl.style.left = options.left;
            break;
        case "opacity":
            textEl.style.opacity = options.opacity;
            break;
        case "rotation":
            textEl.style.rotation = options.rotation;
            break;
        }
    }
}

// 2. 기본 모션 함수
// 2-1. 제자리 모션 함수
var kityStaticRotation = function(target, options) {
    // TODO: 현재 API는 Z축 회전만 지원함.
    // {angle, goback}
    if(!isValidId(target) || !isTextObj(target)) return;
    copyMotionOption(target, 'rotation', options);
    return JSON.stringify(textObjMap[target]);
}

var kityStaticScale = function(target, options) {
    // size, goback
    if(!isValidId(target) || !isTextObj(target)) return;
    copyMotionOption(target, 'scale', options);
    return JSON.stringify(textObjMap[target]);
}

var kityStaticOpacity = function(target, options) {
    // opacity, goback
    if(!isValidId(target) || !isTextObj(target)) return;
    copyMotionOption(target, 'opacity', options);
    return JSON.stringify(textObjMap[target]);
}

var kityStaticShaking = function(target, options) {
    // TODO: 현재 API는 y값 (위아래) shaking만 지원.
    // size, goback ???
    if(!isValidId(target) || !isTextObj(target)) return;
    copyMotionOption(target, 'shaking', options);
    return JSON.stringify(textObjMap[target]);
}

// 2-2. 직선모션 함수
var kityLine = function(target, options) {
    // direction, length
    if(!isValidId(target) || !isTextObj(target)) return;
    copyMotionOption(target, 'line', options);
    return JSON.stringify(textObjMap[target]);
}

// 2-3. 곡선모션 함수
var kityCircle = function(target, options) {
    // 포물선(베지어 곡선, 조절점), 곡선
    // angle, radius
    if(!isValidId(target) || !isTextObj(target)) return;
    copyMotionOption(target, 'circle', options);
    return JSON.stringify(textObjMap[target]);
}

// 2-4. 단순재생 함수
var kitySinglePlay = function(jsonString, options) {
    // {delay, duration, repeat}
    // TODO: Animation
    var textObj = JSON.parse(jsonString);
    var target = textObj.id;
    if (!target) {
        console.error("target is wrong!! ", target);
        return;
    }
    if (!isValidId(target) || !isTextObj(target)) return;
    var animation;

    var motion = textObj.motion;
    var obj = {};
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

    for (var op in options) {
        if (op === 'delay' || op === 'duration' || op === 'repeat')
            obj[op] = options[op];
    }

    obj['el'] = '#'+target;
    animation = new mojs.Html(obj);
    animation.replay();

    /*
    const timeline = new mojs.Timeline;
    timeline.add(animation);
    const player = new MojsPlayer({add: timeline});
    */

}

// 3. 복합모션 함수
// 3-1. 병렬모션 함수
var kityPar = function(options) {
    // {function, delay, duration, repeat}
}
// 3-2. 직렬모션 함수
/*
    options: Object (function, duration, delay, repeat)
*/
var kitySeq = function() {
    // {function, delay, duration, repeat}
    var aniMap = {};
    var changedTextObj;

    for (var a in arguments) {
        var obj = {};
        var textObj = JSON.parse(arguments[a].function);
        var target = textObj.id;
        var motion = textObj.motion;
        switch(motion) {
            case 'line':
                obj = getTransitionByDirection(textObj, updatedObjMap[target]);
                break;
            case 'opacity':
                obj = getTransitionByOpacity(textObj, updatedObjMap[target]);
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
        updatedObjMap[target] = textObj;

        for (var op in arguments[a]) {
            if (op === 'delay' || op === 'duration' || op === 'repeat')
                obj[op] = arguments[a][op];
        }

        if (target in aniMap) {
            aniMap[target].then(obj);
        } else {
            obj['el'] = '#'+target;
            aniMap[target] = new mojs.Html(obj);
        }
    }

    for (var target in aniMap) {
        aniMap[target].replay();
    }
}


/*
    kity = {
        'kityCreateText': kityCreateText,
        'kitySetText': kitySetText,
        'kityStaticRotation': kityStaticRotation,
        'kityStaticScale': kityStaticScale,
        'kityStaticOpacity': kityStaticOpacity,
        'kityStaticShaking': kityStaticShaking,
        'kityLine': kityLine,
        'kityCircle': kityCircle,
        'kitySinglePlay': kitySinglePlay,
        'kityPar': kityPar,
        'kitySeq': kitySeq,

    };
    */
