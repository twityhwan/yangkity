var selectEl, textAreaEl, parentEl, descEl;
var selected;
var playing;
window.onload = function() {
    textAreaEl = document.getElementById("source_area");
    parentEl = document.getElementById("parent");

    var targetDIV = "parent";
    var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "char");
    KITY.setLayout(txtObjArr, "diagonal");
    KITY.setAnimationSpec(txtObjArr[1], {
        "font-size": {to: 40, duration: 0.7, delay: 1, goback: true},
    });
    KITY.setAnimationSpec(txtObjArr[1], {
        "font-size": {to: 40, duration: 0.7, delay: 0.5, goback: true},
    });
    KITY.playKeyframe([txtObjArr[1], txtObjArr[3]]);
}
