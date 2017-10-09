/**
 * Player module for kinetic typography.
 *
 * @class Player
 */
var Player;
// TODO: Player constructor로 만들기
(function() {
Player = {};
Player.animations = [];
Player.timeline;

/**
 * Adds target objects to player.
 *
 * @method add
 * @param targetObj {Array|Object} Array of target object or target object
 */
Player.add = function(targetObj) {
    if (Array.isArray(targetObj)) {
        for (var o in targetObj) {
            pushAnimation(targetObj[o]);
        }
    } else {
        pushAnimation(targetObj);
    }
}

function pushAnimation(obj) {
    if (typeof obj === 'object'&& 'spec' in obj) {
        var animation = new mojs.Html(obj.spec);
        Player.animations.push(animation);
    }
}

/**
 * Plays animation in timeline.
 *
 * @method play
 * @param {Object} options Options. It can be play mode or animation object. If you input animation object, it will be played once.
 * <pre>
 *      options.mode := 'parallel' | 'sequence'
 * </pre>
 */
Player.play = function(options) {
    if (!options) options = {};
    Player.timeline = new mojs.Timeline;
    if (options.mode == 'parallel' || Object.keys(options).length === 0) {
        for (var i=0; i<Player.animations.length; i++) {
            Player.timeline.add(Player.animations[i]);
        }
    } else if (options.mode == 'sequence') {
        for (var i=0; i<Player.animations.length; i++) {
            Player.timeline.append(Player.animations[i]);
        }
    } else {
        Player.timeline.add(options);
    }
    Player.timeline.play();
}

/**
 * Replays animation in timeline.
 *
 * @method replay
 */
Player.replay = function() {
    // TODO
}

/**
 * Plays animation in timeline.
 *
 * @method play
 * @return {Object} Timeline object
 */
Player.stop = function() {
}

/**
 * Resumes animation in timeline.
 *
 * @method resume
 * @return {Object} Timeline object
 */
Player.resume = function() {
}

})();
