/**
 * Container module for kinetic typography.
 *
 * @class Container
 * @param id {String} Element id
 */

 // TODO: addById(), removeById()
function Container(id) {

    this.el = document.createElement('div');
    this.el.id = id;
    this.el.style = display = "inline-block";
    this.spec = { el: '#'+id};
    this.children = {};
    document.body.appendChild(this.el);
    
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
        this.children[textObj.id] = textObj;
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
        delete this.children[textObj.id];
    }

    /**
     * Clears all text objects in container.
     *
     * @method claerAll
     */
    this.clearAll = function() {
    }
}