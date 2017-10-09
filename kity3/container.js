/**
 * Container module for kinetic typography.
 *
 * @class Container
 * @param id {String} Element id
 */

 // TODO: addById(), removeById()
function Container(id) {
    var el = document.createElement('div');
    this.id = el.id = id;
    document.body.appendChild(el);
    this.style = {};
    this.spec = {el: '#'+id};
    var children = {};

    /**
     * Adds text object to container.
     *
     * @method add
     * @param textObj {Object|Array} Text object or Array of text object
     * @return {Object} Container itself
     */
    this.add = function(textObj) {
        if (Array.isArray(textObj)) {
            for (var i in textObj) {
                changeParent(textObj[i]);
            }
        } else if (typeof textObj === 'object') {
            changeParent(textObj);
        }

        return this;
    }

    /**
     * Changes parent element of text object.
     *
     * @method changeParent
     * @param textObj {Object} Text object
     * @private
     */
    var changeParent = function(textObj) {
        var parentEl = document.getElementById(textObj.parentId);
        var childEl = document.getElementById(textObj.id);
        el.appendChild(childEl);
        children[textObj.id] = textObj;
    }

    /**
     * Returns parent element of text object.
     *
     * @method returnParent
     * @param textObj {Object} Text object
     * @private
     */
    var returnParent = function(textObj) {
        var childEl = document.getElementById(textObj.id);
        var originParentEl = document.getElementById(textObj.parentId);
        originParentEl.appendChild(childEl);
        delete children[textObj.id];
    }

    /**
     * Removes text object to container.
     *
     * @method remove
     * @param textObj {Object|Array} Text object or array of text object
     * @return {Object} Container itself
     */
    this.remove = function(textObj) {
        if (Array.isArray(textObj)) {
            for (var i in textObj) {
                returnParent(textObj[i]);
            }
        } else if (typeof textObj === 'object') {
            returnParent(textObj);
        }
        return this;
    }

    /**
     * Clears all text objects in container.
     *
     * @method claerAll
     */
    this.clearAll = function() {
        for (var o in children) {
            var textObj = children[o];
            var childEl = document.getElementById(textObj.id);
            var originParentEl = document.getElementById(textObj.parentId);
            originParentEl.appendChild(childEl);
        }
        children = {};
    }
}