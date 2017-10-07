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
    var txtObjArr = kityCreateTextObj("헬로 키네틱", "text1", "word", targetDIV);
    kitySetTextObjAttr(targetDIV, txtObjArr, "topToBottom");
    var motionFunc = "kitySinglePlay(kityStaticRotation(txtObj,{angle : 180}), {duration: 4})";
    kityExeMotionSeq(targetDIV, [0, 1], motionFunc, [0, 0]);
}

/* sample1 180자
var txtObjArr = kityCreateTextObj("헬로 키네틱", "text1", "line", targetDIV);
kityExeMotionSeq(targetDIV, [0],"kitySinglePlay(kityLine(txtObj,{direction :'right',length: 200}),{duration: 5})",
[0]);
*/

/* sample 2 238자
var txtObjArr = kityCreateTextObj("헬로 키네틱", "text1", "word", targetDIV);
kitySetTextObjAttr(targetDIV, txtObjArr, "topToBottom");
kityExeMotionSeq(targetDIV, [0, 1],"kitySinglePlay(kityLine(txtObj,{direction :'right',length: 200}),{duration: 4})",
[0, 1]);
*/

/*
// sample 3 322자
var txtObjArr = kityCreateTextObj("헬로 키네틱", "text1", "word", targetDIV);
kitySetTextObjAttr(targetDIV, txtObjArr, "topToBottom");
var motionFunc = "kityPar({function: kityLine(txtObj, {direction:'right',length: 200}), duration: 4}, {function: kityStaticScale(txtObj, {size: 0.5}), duration: 4})";
kityExeMotionSeq(targetDIV, [1, 0],motionFunc,[0, 1]);
*/