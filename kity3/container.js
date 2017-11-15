/**
 * Container module for kinetic typography.
 *
 * @class Container
 * @param id {String} Element id
 */

 // TODO: addById(), removeById()
function Container(parentId, id, width, height) {
    this.id = id;
    this.parentId = parentId;
    this.style = {
        /*
        display: "flex",
        flexWrap: "wrap",
        */
        position: 'relative',
    };

    this.type = 'container';
    this.specs = [];

    var el = createElement(parentId, id);
    extend(el.style, this.style);

    if (width) el.width = width;
    if (height) el.height = height;

    var children = {};

    var hasChildren = function(id) {
        return (id in children);
    }
    /**
     * Adds text object to container.
     *
     * @method add
     * @param textObj {Object|Array} Text object or Array of text object
     * @return {Object} Container itself
     */
    this.add = function(textObj) {
        var args = sortArgs(arguments)[0];
        
        for (var i=0; i<args.length; i++) {
            var textObj = args[i];
            add(textObj);
        }
        return this;
    }

    var add = function(textObj) {
        if (Array.isArray(textObj)) {
            for (var i in textObj) {
                add(textObj[i]);
            }
        } else if (typeof textObj === 'object') {
            if (hasChildren(textObj.id)) {
                console.error("Container has Text object already ", textObj);
                return;
            }
            changeParent(textObj);
        } else {
            console.error("Wrong arguments ", arguments);
        }
        return textObj;
    }

    this.getChildren = function() {
        return children;
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