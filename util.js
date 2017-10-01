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
    console.log(options);
    var textObj = textObjMap[id];
    textObj.motion = propname;
    for (var o in options) {
        if (o in textObj.motionFunc[propname]) {
            textObj.motionFunc[propname][o] = options[o];
        }
    }
}

function getTransitionByDirection(obj, options) {
    // TODO: options.goback 처리하기
    var obj_ = {};
    var motion = obj.motionFunc.line;
    var type = typeof(motion.direction);

    if (type === 'number') { // degree
        var radian = motion.direction * (Math.PI / 180);
        var radius = motion.length;
        obj_['x'] = {};
        obj_['y'] = {};
        obj_.x[obj.left] = obj.left + (Math.cos(radian)*radius);
        obj_.y[obj.top] = obj.top + (Math.sin(radian)*radius);
    } else if (type === 'string') {
        switch(motion.direction) {
        case 'top':
            obj_['y'] = {};
            obj_.y[obj.top] = obj.top-motion.length;
            break;
        case 'down':
            obj_['y'] = {};
            obj_.y[obj.top] = obj.top+motion.length;
            break;
        case 'left':
            obj_['x'] = {};
            obj_.x[obj.left] = obj.left-motion.length;
            break;
        case 'right':
            obj_['x'] = {};
            obj_.x[obj.left] = obj.left+motion.length;
            break;
        }
    }
    return obj_;
}
