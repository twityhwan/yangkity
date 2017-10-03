/**
 * Container module for kinetic typography.
 *
 * @class Container
 * @param id {String} Element id
 */

function Container(id) {

    this.el = document.createElement('div');
    this.el.id = id;
    this.el.style = display = "inline-block";
    this.spec = { el: '#'+id};
    document.body.appendChild(this.el);
    
    /**
     * Adds text object to container.
     *
     * @method add 
     */
    this.add = function(textObj) {
        console.log("add", textObj.id);
    }

    /**
     * Removes text object to container.
     *
     * @method remove
     * @param textObj {Object} Text object
     */
    this.remove = function(textObj) {
        
    }

    /**
     * Clears all text objects in container.
     *
     * @method claerAll
     */
    this.clearAll = function() {
    }
}