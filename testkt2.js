window.onload = function() {
    var content = "헬로 키네틱";
    var targetDIV = 'parent';

    // 객체 생성
    var txtObj = kityCreateTextObj(content, 'group', 'char', targetDIV);

    // 객체 속성 설정
    kitySetTextObjAttr(targetDIV, txtObj, 'diagonal');

    // 텍스트 set 지정 및 시간 set 지정
    var txtSet = new Array();
    var timeSet =  new Array();
    txtSet[0] = 1, txtSet[1] = 4;
    timeSet[0] = 1, timeSet[1] = 0.5;

    // 모션 애니메이션 순차 실행
    var motionFunc = "kitySinglePlay(kityStaticScale(targetDIV.childNodes[i],"
        + " {scale: 40, duration: 0.7, goBack: true}), {delay: timeSet[i]})";
    kityExeMotionSeq(targetDIV, txtSet, motionFunc, timeSet);
}
