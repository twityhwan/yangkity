/**
 * AnimationSpec module for kinetic typography.
 * 
 * AnimationSpec is animation specification and it is used when creating Animation.
 * AnimationSpec has some default motion specifications. So, You can use this.
 * You can also make custom specification by description.
 *
 * @class AnimationSpec
 */

function AnimationSpec () {

    var spec = {};

    // TODO:
    // 1) rotationX,Y,Z
    // 2) scale
    // 3) 곡선
    // 4) curve
    // move

    /**
     * Sets rotationX animation.
     *
     * @method rotationX
     * @param angle {Number|Object} Static angle or angle animation specification.
     * @return {Object} AnimationSpec object
     */
    this.rotationX = function(angle) {
        spec.angleX = angle;
        console.log(spec);
        return this;
    }

    /**
     * Sets rotationY animation.
     *
     * @method rotationY
     * @param angle {Number|Object} Static angle or angle animation specification.
     * @return {Object} AnimationSpec object
     */
    this.rotationY = function(angle) {
        spec.angleY = angle;
        return this;
    }

    /**
     * Sets rotationZ animation.
     *
     * @method rotationZ
     * @param angle {Number|Object} Static angle or angle animation specification.
     * @return {Object} AnimationSpec object
     */
    this.rotationZ = function(angle) {
        spec.angleZ = angle;
        return this;
    }

    /**
     * Sets scale animation.
     *
     * @method scale
     * @param scale {Number|Object} Static scale or scale animation specification.
     * @return {Object} AnimationSpec object
     */
    this.scale = function(scale) {
        spec.scale = scale;
        return this;
    }

    /**
     * Sets scale X animation.
     *
     * @method scaleX
     * @param scale {Number|Object} Static scale or scale animation specification.
     * @return {Object} AnimationSpec object
     */
    this.scaleX = function(scale) {
        spec.scaleX = scale;
        return this;
    }

    /**
     * Sets scale Y animation.
     *
     * @method scaleY
     * @param scale {Number|Object} Static scale or scale animation specification.
     * @return {Object} AnimationSpec object
     */
    this.scaleY = function(scale) {
        spec.scaleY = scale;
        return this;
    }

    /**
     * Gets animation specification.
     *
     * @method getSpec
     * @return {Object} Animation specification object
     */
    this.getSpec = function() {
        return spec;
    }

    /**
     * Clears all the animation specifications.
     *
     * @method clear
     * @return {Object} AnimationSpec object
     */
    this.clear = function() {
        spec = {};
        return this;
    }
}
