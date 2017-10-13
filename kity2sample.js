window.onload = function() {
    var targetDIV = 'parent';
    /*
    // 텍스트 set 지정 및 시간 set 지정
    var textSet = [0, 1, 2, 3, 4];
    var timeSet = [0, 1, 2, 3, 4];    
    var txtObjArr = kityCreateTextObj("헬로 키네틱", "text1", "char", targetDIV);
    kitySetTextObjAttr(targetDIV, txtObjArr, "leftToRight");
    kityExeMotionSeq(targetDIV, textSet,
        ("kitySinglePlay(kityLine(txtObj,{"+
        "direction :90,"+
        "length: 100}),"+
        "{duration: 2})"),
    timeSet);
    */

    /*
    // sample 1
    // 문장 단위의 ‘헬로 키네틱’텍스트 객체가 5초 동안 오른쪽으로 200px직선 이동
    var txtObjArr = kityCreateTextObj("헬로 키네틱", "text1", "line", targetDIV);
    kityExeMotionSeq(targetDIV, [0],"kitySinglePlay(kityLine(txtObj,{direction :'right',length: 200}),{duration: 5})",
    [0]);
    */

    /*
    // sample 2
    var txtObjArr = kityCreateTextObj("헬로 키네틱", "text1", "word", targetDIV);
    kitySetTextObjAttr(targetDIV, txtObjArr, "topToBottom");
    kityExeMotionSeq(targetDIV, [0, 1],"kitySinglePlay(kityLine(txtObj,{direction :'right',length: 200}),{duration: 4})",
    [0, 1]);
    */
    
    /*
    // sample 3
    var txtObjArr = kityCreateTextObj("헬로 키네틱", "text1", "word", targetDIV);
    kitySetTextObjAttr(targetDIV, txtObjArr, "topToBottom");
    var motionFunc = "kityPar({function: kityLine(txtObj, {direction:'right',length: 200}), duration: 4}, {function: kityStaticScale(txtObj, {size: 0.5}), duration: 4})";
    kityExeMotionSeq(targetDIV, [1, 0],motionFunc,[0, 1]);
    */

    /*
    // sample 4
    var txtObjArr = kityCreateTextObj("헬로 키네틱", "text1", "word", targetDIV);
    kitySetTextObjAttr(targetDIV, txtObjArr, "topToBottom");
    var motionFunc = "kitySinglePlay(kityStaticRotation(txtObj,{angle : 180}), {duration: 4})";
    kityExeMotionSeq(targetDIV, [0, 1], motionFunc, [0, 0]);
    */

    /*
    // sample 5
    var txtObjArr = kityCreateTextObj("헬로 키네틱", "text1", "char", targetDIV);
    kitySetTextObjAttr(targetDIV, txtObjArr, "leftToRight");
    var motionFunc = "kitySinglePlay(kityStaticOpacity(txtObj, {opacity: 0}), {duration: 1})";
    kityExeMotionSeq(targetDIV, [0, 1, 2, 3, 4], motionFunc, [0, 1, 2, 3, 4]);
    */

    /*
    // sample 6
    var txtObjArr = kityCreateTextObj("헬로 키네틱", "text1", "char", targetDIV);
    kitySetTextObjAttr(targetDIV, txtObjArr, "leftToRight");
    var motionFunc = "kitySinglePlay(kityLine(txtObj, {direction: 'down', length: 100}), {duration: 2})";
    kityExeMotionSeq(targetDIV, [4, 3, 2, 1, 0], motionFunc, [0, 0.5, 1, 1.5, 2]);
    */

    /*
    // sample 7
    var txtObjArr = kityCreateTextObj("헬로 키네틱", "text1", "char", targetDIV);
    kitySetTextObjAttr(targetDIV, txtObjArr, "leftToRight");
    var motionFunc = "kitySinglePlay(kityLine(txtObj, {direction: 'down', length: 100}), {duration: 2})";
    var randomDelay = [0, 1, 2, 1.5, 0.5];
    kityExeMotionSeq(targetDIV, [0, 1, 2, 3, 4], motionFunc, randomDelay);
    */

    /*
    // sample 2-1 357자
    var textArr = ["날", "한심하게", "볼 게 뻔하니"];
    var txtObjArr = [];
    for (var i in textArr) {
        txtObjArr = txtObjArr.concat(kityCreateTextObj(textArr[i], "text"+i, 'line', targetDIV));
    }
    kitySetTextObjAttr(targetDIV, txtObjArr, "diagonal", {fontOpacity: 0});
    var motionFunc = "kitySinglePlay(kityStaticOpacity(txtObj, {opacity: 1}), {duration: 1})";
    kityExeMotionSeq(targetDIV, [0, 1, 2], motionFunc, [0, 1, 2]);
    */

    var textArr = ["날", "한심하게", "볼 게 뻔하니"];
    var txtObjArr = [];
    for (var i in textArr) {
        txtObjArr = txtObjArr.concat(kityCreateTextObj(textArr[i], "text"+i, 'line', targetDIV));
    }
    kitySetTextObjAttr(targetDIV, txtObjArr, "diagonal", {fontOpacity: 0});
    var motionFunc = "kityPar({function: kityStaticOpacity(txtObj, {opacity: 1}), duration: 1},"+
        "{function: kityLine(txtObj, {direction: 'down', length: 300}), duration: 4, delay: 3})";
    kityExeMotionSeq(targetDIV, [0, 1, 2], motionFunc, [0, 1, 2]);  
}

/* sample1 182자
var txtObjArr = kityCreateTextObj("헬로 키네틱", "kinetic", "line", targetDIV);
kityExeMotionSeq(targetDIV, [0],"kitySinglePlay(kityLine(txtObj,{direction :'right',length: 200}),{duration: 5})",
[0]);
*/

/* sample 2 240자
var txtObjArr = kityCreateTextObj("헬로 키네틱", "kinetic", "word", targetDIV);
kitySetTextObjAttr(targetDIV, txtObjArr, "topToBottom");
kityExeMotionSeq(targetDIV, [0, 1],"kitySinglePlay(kityLine(txtObj,{direction :'right',length: 200}),{duration: 4})",
[0, 1]);
*/

/*
// sample 3 324자
var txtObjArr = kityCreateTextObj("헬로 키네틱", "kinetic", "word", targetDIV);
kitySetTextObjAttr(targetDIV, txtObjArr, "topToBottom");
var motionFunc = "kityPar({function: kityLine(txtObj, {direction:'right',length: 200}), duration: 4}, {function: kityStaticScale(txtObj, {size: 0.5}), duration: 4})";
kityExeMotionSeq(targetDIV, [1, 0],motionFunc,[0, 1]);
*/

/*
// sample 4 256자
var txtObjArr = kityCreateTextObj("헬로 키네틱", "kinetic", "word", targetDIV);
kitySetTextObjAttr(targetDIV, txtObjArr, "topToBottom");
var motionFunc = "kitySinglePlay(kityStaticRotation(txtObj,{angle : 180}), {duration: 4})";
kityExeMotionSeq(targetDIV, [0, 1], motionFunc, [0, 0]);
*/

/*
// sample 5 267자
var txtObjArr = kityCreateTextObj("헬로 키네틱", "kinetic", "char", targetDIV);
kitySetTextObjAttr(targetDIV, txtObjArr, "leftToRight");
var motionFunc = "kitySinglePlay(kityStaticOpacity(txtObj, {opacity: 0}), {duration:1})";
kityExeMotionSeq(targetDIV, [0, 1, 2, 3, 4], motionFunc, [0, 1, 2, 3, 4]);
*/

/*
// sample 6 280자
var txtObjArr = kityCreateTextObj("헬로 키네틱", "kinetic", "char", targetDIV);
kitySetTextObjAttr(targetDIV, txtObjArr, "leftToRight");
var motionFunc = "kitySinglePlay(kityLine(txtObj, {direction: 'down', length: 100}), {duration: 2})";
kityExeMotionSeq(targetDIV, [4, 3, 2, 1, 0], motionFunc, [0, 0.5, 1, 1.5, 2]);
*/

/*
// sample 7 274자
var txtObjArr = kityCreateTextObj("헬로 키네틱", "kinetic", "char", targetDIV);
kitySetTextObjAttr(targetDIV, txtObjArr, "diagonal");
var motionFunc = "kitySinglePlay(kityLine(txtObj, {direction: 'right', length: 200}), {duration: 4})";
kityExeMotionSeq(targetDIV, [0, 1, 2, 3, 4], motionFunc, [0, 0, 0, 0, 0]);
*/

/*
// sample 7 307자
var txtObjArr = kityCreateTextObj("헬로 키네틱", "kinetic", "char", targetDIV);
kitySetTextObjAttr(targetDIV, txtObjArr, "leftToRight");
var motionFunc = "kitySinglePlay(kityLine(txtObj, {direction: 'down', length: 100}), {duration: 2})";
var randomDelay = [0, 1, 2, 1.5, 0.5];
kityExeMotionSeq(targetDIV, [0, 1, 2, 3, 4], motionFunc, randomDelay);
*/