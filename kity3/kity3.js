/**
 * KITY module for kinetic typography.
 *
 * Usage
 * 1. Create text object.
 * 2. Set style for text. If you create text object already with style, you can skip this step.
 * 3. Set animation specification for text.
 * 4. Create animation object.
 * 5. Add object to animation object with animation specification.
 * 6. Start animation.
 *
 * @class KITY
 */
var KITY;

(function() {
KITY = {};

/**
 * Creates text object.
 * Creates new div element with `id` and adds it to div element having `targetId`.
 * If you create text with 'word' or 'char' type, each element has id like "`id`_`type`_index".
 *
 * @example
 *      var textObjs = KITY.createText("Hello", "body", "hello", 'char');
 *      // Element id of textObjs[0] is 'hello_char_0'.
 *
 * @method createText
 * @param text {String} Text string
 * @param targetId {String} Parent element id
 * @param id {String} Element id for this text
 * @param type {String} Text object type
 * @param style {Object} Style attributes
 * <pre>
 *      type := 'line' | 'word' | 'char'
 * </pre>
 * @return {Array} Array of text objects
 */
KITY.createText = function(text, targetId, id, type, style) {
}

/**
 * Sets style for object having id.
 *
 * @method setAttributes
 * @param textObj {String|Object} Text object or element id
 * @param style {Object} Style attributes
 * @return {Object} Text object
 */
KITY.setStyle = function(textObj, style) {
}

/**
 * Sets animation spec for object.
 *
 * @method setAnimationSpec
 * @param textObj {String|Object} Text object or element id
 * @param spec {Object} Animation specification
 * @return {Object} Text object
 */
KITY.setAnimationSpec = function(textObj, spec) {
}

/**
 * Contains text objects and another container.
 *
 * @method createContainer
 * @return {Object} Container object
 */
KITY.createContainer = function() {
}

/**
 * Creates animation object.
 *
 * @method createAnimation
 * @param {Object} object Text object or Container object
 * @return {Object} Animation object
 */
KITY.createAnimation = function(object) {
}

/**
 * Creates timeline.
 * Animation can be added to or removed from timeline.
 *
 * @method createTimeline
 * @return {Object} Timeline object
 */
KITY.createTimeline = function() {
}

/**
 * Gets player. Player can control kinetic typography animation.
 *
 * @method getPlayer
 * @return {Object} Player object
 */
KITY.getPlayer = function() {
}

})();
