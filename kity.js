var textObjMap = {}; // domId : textObj
var isTextObj = function(id) {
    return (id in textObjMap);
}

// TODO: Map에 있는지도 체크 ㅠㅠ
// TODO: 텍스트 position을 relative로 처리하도록..
// 텍스트 div 생성할때마다 부모 div 하나 더 추가해서
// 항상 0,0을 기준으로 그려질 수 있도록!!
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
    div.appendChild(text);

    var textObj = {
        contents: '',
        color: 'black',
        fontSize: 10,
        top: 0,
        left: 0,
        opacity: 1,
        rotation: 0,
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
    /*
    var textObj = textObjMap[target];
    for (var o in options) {
        if (o in textObj.motionFunc.rotation) {
            textObj.motionFunc.rotation[o] = options[o];
        }
    }
    */
    return target;
}

var kityStaticScale = function(target, options) {
    // size, goback
    if(!isValidId(target) || !isTextObj(target)) return;
    copyMotionOption(target, 'scale', options);
    return target;
}

var kityStaticOpacity = function(target, options) {
    // opacity, goback
    if(!isValidId(target) || !isTextObj(target)) return;
    copyMotionOption(target, 'opacity', options);
    return target;
}

var kityStaticShaking = function(target, options) {
    // size, goback ???
    if(!isValidId(target) || !isTextObj(target)) return;
    copyMotionOption(target, 'shaking', options);
    return target;
}

// 2-2. 직선모션 함수
var kityLine = function(target, options) {
    // direction, length
    if(!isValidId(target) || !isTextObj(target)) return;
    copyMotionOption(target, 'line', options);
    return target;
}

// 2-3. 곡선모션 함수
var kityCircle = function(target, options) {
    // angle, radius
    if(!isValidId(target) || !isTextObj(target)) return;
    copyMotionOption(target, 'circle', options);
    return target;
}

// 2-4. 단순재생 함수
var kitySinglePlay = function(target, options) {
    // {delay, duration, repeat}
    // TODO: Animation
    console.log(target);
    if (!target) {
        console.error("target is wrong!! ", target);
        return;
    }
    if (!isValidId(target) || !isTextObj(target)) return;
    var el = document.getElementById(target);
    var textObj = textObjMap[target];
    var animation;
    console.log(textObj);
        /*
    el.style.transform = "rotate("+playInfo.motionFunc.angle+"deg)";
    el.style.transition-duration = options.duration/1000+'s';
    el.style.transition-property = 'opacity';
    el.style.transition-property = 'opacity';
    */

    var motion = textObj.motion;
    var obj = {};
    switch(motion) {
        case 'line':
            obj = getTransitionByDirection(textObj, options);
            break;
        default:
            console.log("TODO!! "+motion);
            break;
    }
    obj['el'] = '#'+target;

    animation = new mojs.Html(obj).replay();
    console.log(animation);
    /*

    animation = new mojs.Html({
        //el: '#mojs',
        el: '#'+target,
        x: 200,
        y: textObj.motionFunc.line.length ? {
            200: 200-textObj.motionFunc.line.length,
            duration: options.duration
        } : 200,
        angleZ: textObj.motionFunc.rotation.angle ? {
            0: textObj.motionFunc.rotation.angle,
            duration: options.duration
        } : 0,
        scale: textObj.motionFunc.scale.size ? {
            1 : textObj.motionFunc.scale.size,
            duration: options.duration
        } : 1,
        opacity: textObj.motionFunc.opacity.opacity ? {
            1 : textObj.motionFunc.opacity.opacity,
            duration: options.duration
        } : 1,
    }).replay();
    */
/*
    animation._o['angleZ'] = {};
    animation._o['angleZ'][textObj.rotation] = textObj.motionFunc.rotation.angle;
    animation._o['angleZ']['duration'] = options.duration;
console.log(animation);
*/

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
var kitySeq = function(options) {
    // {function, delay, duration, repeat}
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
