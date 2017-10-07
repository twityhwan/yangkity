function createElement(targetId, id, text) {
    if (!document.getElementById(targetId)) {
        console.error('Wrong target id: '+targetId);
        return;
    }
    if (document.getElementById(id)) {
        console.error('Element id('+id+') already exists!!');
        return;
    }
    var div = document.getElementById(targetId);
    var el = document.createElement('div');
    el.id = id;
    el.style.display = "inline-block";
    el.innerHTML = text;
    div.appendChild(el);
    return el;
}

function clone(obj) {
    if (obj === null || typeof(obj) !== 'object')
        return obj;

    var copy = obj.constructor();

    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) {
            copy[attr] = obj[attr];
        }
    }
    return copy;
}

var isValidId = function(id) {
    var el = document.getElementById(id);
    if (el === null) {
        console.error("Id is wrong!");
        return false;
    }
    return true;
}

function copyMotionOption(id, propname, options) {
    var textObj = textObjMap[id];
    textObj.motion = propname;
    for (var o in options) {
        if (o in textObj.motionFunc[propname]) {
            textObj.motionFunc[propname][o] = options[o];
        }
    }
}

function getTransitionByDirection(obj, changedObj, options) {
    // TODO: options.goback 처리하기. yoyo 이용?
    var obj_ = {};
    if (typeof(obj) === 'string') obj = JSON.parse(obj);
    var motion = obj.motionFunc.line;
    var type = typeof(motion.direction);

    if (!changedObj || Object.keys(changedObj).length == 0)
        changedObj = obj;

    if (type === 'number') { // degree
        var radian = motion.direction * (Math.PI / 180);
        var radius = motion.length;
        obj_['x'] = {};
        obj_['y'] = {};
        obj_.x[changedObj.currentLeft] = changedObj.currentLeft + (Math.cos(radian)*radius);
        obj_.y[changedObj.currentTop] = changedObj.currentTop + (Math.sin(radian)*radius);
    } else if (type === 'string') {
        switch(motion.direction) {
        case 'top':
            obj_['y'] = {};
            extend(obj_.y, options);
            obj_.y[changedObj.currentTop] = changedObj.currentTop-motion.length;
            obj.currentTop = changedObj.currentTop-motion.length;
            obj_['x'] = changedObj.currentLeft;
            break;
        case 'down':
            obj_['y'] = {};
            extend(obj_.y, options);
            obj_.y[changedObj.currentTop] = changedObj.currentTop+motion.length;
            obj_['x'] = changedObj.currentLeft;
            obj.currentTop = changedObj.currentTop+motion.length;
            break;
        case 'left':
            obj_['x'] = {};
            extend(obj_.x, options);
            obj_.x[changedObj.currentLeft] = changedObj.currentLeft-motion.length;
            obj_['y'] = changedObj.currentTop;
            obj.currentLeft = changedObj.currentLeft-motion.length;
            break;
        case 'right':
            obj_['x'] = {};
            extend(obj_.x, options);
            obj_.x[changedObj.currentLeft] = changedObj.currentLeft+motion.length;
            obj_['y'] = changedObj.currentTop;
            obj.currentLeft = changedObj.currentLeft+motion.length;
            break;
        }
    }


    return obj_;
}

function getTransitionByOpacity(obj, changedObj, options) {
    var obj_ = {};
    var motion = obj.motionFunc.opacity;

    if (!changedObj || Object.keys(changedObj).length == 0)
        changedObj = obj;

    obj_['opacity'] = {};
    extend(obj_.opacity, options);
    obj_.opacity[changedObj.opacity] = motion.opacity;
    obj.opacity = motion.opacity;


    return obj_;
}

function getTransitionByScale(obj, changedObj, options) {
    var obj_ = {};
    var motion = obj.motionFunc.scale;

    if (!changedObj || Object.keys(changedObj).length == 0)
        changedObj = obj;

    obj_['scale'] = {};
    extend(obj_.scale, options);
    obj_.scale[changedObj.scale] = motion.size;
    obj.scale = motion.size;


    return obj_;
}

function getTransitionByShaking(obj, changedObj, options) {
    var obj_ = [];
    var motion = obj.motionFunc.shaking;
    return obj_;
}

function getTransitionByRotation(obj, changedObj, options) {
    var obj_ = {};
    var motion = obj.motionFunc.rotation;

    if (!changedObj || Object.keys(changedObj).length == 0)
        changedObj = obj;

    // TODO : x, y, z 축에 대한 모든 rotation 처리
    obj_['angleZ'] = {};
    extend(obj_.angleZ, options);
    obj_.angleZ[changedObj.rotation] = motion.angle;
    obj.rotation = motion.angle;


    return obj_;
}

function extend(origin, copy) {
    for (var prop in copy) {
        origin[prop] = copy[prop];
    }
}

// for kity2
function getParalAnimationSpec(textObj, obj, args) {
    var motion = textObj.motion;
    var obj_ = {};
    var options = {};
    if ('duration' in args)
        options['duration'] = args.duration*1000;
    if ('delay' in args)
        options['delay'] = args.delay*1000;
    if ('repeat' in args)
        options['repeat'] = args.repeat;

    switch(motion) {
        case 'line':
            // x, y
            obj_ = getTransitionByDirection(textObj, obj, options);
            break;
        case 'opacity':
            // opacity
            obj_ = getTransitionByOpacity(textObj, obj, options);
            break;
        case 'scale':
            // scale
            obj_ = getTransitionByScale(textObj, obj, options);
            break;
        case 'rotation':
            // angleZ
            obj_ = getTransitionByRotation(textObj, obj, options);
            break;
    }
    return obj_;
}

var setStyle = function(target, options) {
    if(!isValidId(target)) return;
    textEl = document.getElementById(target);
    for (var o in options) {
        switch(o) {
        case "contents":
            textEl.innerHTML = options.contents;
            break;
        case "font":
            textEl.style.fontFamily = options.font;
            break;
        case "fontcolor":
            textEl.style.color = options.fontcolor;
            break;
        case "fontsize":
            textEl.style.fontSize = options.fontsize;
            break;
        case "top":
            textEl.style.top = options.top;
            break;
        case "left":
            textEl.style.left = options.left;
            break;
        case "fontOpacity":
            textEl.style.opacity = options.opacity;
            break;
        case "initX":
            textEl.style.initX = options.initX;
            break;
        case "initY":
            textEl.style.initY = options.initY;
            break;
        case "rotation":
            textEl.style.rotation = options.rotation;
        case "position":
            textEl.style.position = options.position;
            break;
        }
    }
}
