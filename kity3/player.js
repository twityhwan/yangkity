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
 * Adds animation(s) to player.
 *
 * @method add
 * @param animation {Array|Object} Array of animation or animation object
 */
Player.add = function(animation) {
    if (Array.isArray(animation)) {
        Player.animations.concat(animation);
    } else if (typeof animation === 'object'
            && Object.keys(animation).length > 0) {
        Player.animations.push(animation);
    }
}

/**
 * Sets timeline to player.
 *
 * @method set
 * @return {Object} Timeline object
 */
Player.set = function(timeline) {
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
