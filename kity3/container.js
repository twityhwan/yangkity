/**
 * Container module for kinetic typography.
 *
 * @class Container
 * @param id {String} Element id
 */

 // TODO: addById(), removeById()
function Container(id) {
    this.el = document.createElement('div');
    this.el.style.display = "inline-block";
    this.id = this.el.id = id;
    document.body.appendChild(this.el);
    this.style = {};
    this.spec = {el: '#'+id};
    var children = {};

    /**
     * Adds text object to container.
     *
     * @method add 
     */
    this.add = function(textObj) {
        var parentEl = document.getElementById(textObj.parentId);
        var childEl = document.getElementById(textObj.id);
        parentEl.removeChild(childEl);
        this.el.appendChild(childEl);
        children[textObj.id] = textObj;
    }

    /**
     * Removes text object to container.
     *
     * @method remove
     * @param textObj {Object} Text object
     */
    this.remove = function(textObj) {
        var childEl = document.getElementById(textObj.id);
        var originParentEl = document.getElementById(textObj.parentId);
        this.el.removeChild(childEl);
        originParentEl.appendChild(childEl);
        delete children[textObj.id];
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
            this.el.removeChild(childEl);
            originParentEl.appendChild(childEl);
        }
        children = {};
    }
}