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
    this.textObj = {
        id: id,
        parentId: parentId,
        type: type, // 'line', 'word', 'char'
        groupId: groupId, // 하나의 문장에서 파생됨
        index: index, // line, word, char
        text: text,
        style: { // text Style 정보
        },
        spec: {
            el: '#'+id
        }
    }

    createElement(parentId, id, text);

    return this.textObj;
}