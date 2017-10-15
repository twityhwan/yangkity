/**
 * Text module for kinetic typography.
 *
 * @class Text
 * @param text {String} Text string
 * @param id {String} Element id
 * @param parentId {String} Parent element id
 * @param type {String} Split type
 * @param groupId {String} Group id
 * @param index {Number} Index in group
 */

function Text(text, id, parentId, type, groupId, index) {
    this.id = id;
    this.parentId = parentId;
    this.type = type; // 'line', 'word', 'char'
    this.groupId = groupId;
    this.index = index;
    this.text = text;
    this.style = {};
    this.spec = {el: '#'+id};
    this.specs = [];
    createElement(parentId, id, text);
}