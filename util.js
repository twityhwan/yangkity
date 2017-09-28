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
    for (var o in options) {
        if (o in textObj.motionFunc[propname]) {
            textObj.motionFunc[propname][o] = options[o];
        }
    }
    console.log('@@', textObj);
}

function getTransitionByDirection(obj, option) {
    var obj_ = {};
    var type = typeof(obj.direction);
    if (type === 'number') { // degree
        // TODO
    } else if (type === 'string') {
        switch(obj.direction) {
        case 'top':
            obj_[0] = option.length;
            break;
        case 'down':
            break;
        case 'left':
            break;
        case 'right':
            break;
        }
    }
    return obj_;
}

function getRotationByAngle() {
    var obj_ = {};
    return obj_;
}

function getMojsHtml(id, options) {
    if (!isValidId(target) || !isTextObj(target)) return null;
    var textObj = textObjMap[id];
    var mf = textObj.motionFunc;
    return new mojs.Html({
        el: '#'+id,
        x: mf.line.direction ? getTransitionByDirection(mf.line, duration) : mf.left,
        y: mf.line.direction ? getTransitionByDirection(mf.line, duration) : mf.top,
        z: mf.line.direction ? getTransitionByDirection(mf.line, duration) : 0,
        angleZ: mf.rotation.angle ? getTransitionByAngle(mf.rotation, duration) : mf.rotation,
    });
}
