window.onload = function() {
    const timeline = new mojs.Timeline;
    var targetDIV = "parent";


/*
    // sample 1
    // 문장 단위의 ‘헬로 키네틱’텍스트 객체가 5초 동안 오른쪽으로 200px직선 이동
    var player = KITY.getPlayer();
    var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic");
    KITY.setAnimationSpec(txtObjArr[0], {x: {0: 200, duration: 5}})
    player.add(KITY.createAnimation(txtObjArr[0]));
    player.play();
    */

    /*
    // sample 2
    // 단어 단위의 ‘헬로’,‘키네틱’텍스트 객체가 각각 1초 간격을 두고 순차적으로 4초 동안 오른쪽으로 200px직선 이동
    var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "word");
    KITY.setLayout(txtObjArr, 'topToBottom');
    var player = KITY.getPlayer();
    for (var i in txtObjArr) {
        KITY.setAnimationSpec(txtObjArr[i], {
            x: {0: 200, duration: 4, delay: i}
        });
        player.add(KITY.createAnimation(txtObjArr[i]));
    }
    player.play();
    */
    /*
    // sample 3
    // 단어 단위의 ‘헬로’,‘키네틱’텍스트 객체가
//동시에 1초 간격을 두고 역순으로 4초 동안
//제자리에서 200px이동과 동시에 글자 크기 50% 축소
    var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "word");
    KITY.setLayout(txtObjArr, 'topToBottom');
    var player = KITY.getPlayer();
    for (var i in txtObjArr) {
        KITY.setAnimationSpec(txtObjArr[i], {
            x: {0: 200},
            scale: {1: 0.5},
            delay: 1-i,
            duration: 4
        });
        player.add(KITY.createAnimation(txtObjArr[i]));
    }
    player.play();
    */

    
    // sample 4
    var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "word");
    KITY.setLayout(txtObjArr, 'topToBottom');
    var player = KITY.getPlayer();
    for (var i in txtObjArr) {
        KITY.setAnimationSpec(txtObjArr[i], {
            angleZ: {0: 180, duration: 4},
            y: 10*i
        });
        player.add(KITY.createAnimation(txtObjArr[i]));
    }
    player.play({mode:'parallel'});
    
    //const mojsPlayer = new MojsPlayer({ add: timeline });
}
/*
var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "word", {
    position: 'absolute'
});
var player = KITY.getPlayer();
for (var i in txtObjArr) {
    KITY.setAnimationSpec(txtObjArr[i], {
        angleZ: {0: 180, duration: 4},
        y: 60*i
    })
    player.add(KITY.createAnimation(txtObjArr[i]));
}
player.play({mode:'parallel'});
*/
/*
txtObjArr = kityCreateTextObj("헬로 키네틱", "text1", "word", targetDIV);
kitySetTextObjAttr(targetDIV, txtObjArr, "topToBottom");
kityExeMotionSeq(targetDIV, [0, 1], kitySinglePlay(kityCircle(txtObj, {angle : 180}),{duration: 4}), [0, 0]);
*/

/* sample1 204자
var player = KITY.getPlayer();
var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic");
KITY.setAnimationSpec(txtObjArr[0], {x: {0: 200, duration: 5}})
player.add(KITY.createAnimation(txtObjArr[0]));
player.play();
*/

/* sample2 282자
var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "word");
KITY.setLayout(txtObjArr, 'topToBottom');
var player = KITY.getPlayer();
for (var i in txtObjArr) {
    KITY.setAnimationSpec(txtObjArr[i], {
        x: {0: 200, duration: 4, delay: i}
    });
    player.add(KITY.createAnimation(txtObjArr[i]));
}
player.play();
*/

/* sample3 298자
var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "word");
KITY.setLayout(txtObjArr, 'topToBottom');
var player = KITY.getPlayer();
for (var i in txtObjArr) {
    KITY.setAnimationSpec(txtObjArr[i], {
        x: {0: 200},
        scale: {1: 0.5},
        delay: 1-i,
        duration: 4
    });
    player.add(KITY.createAnimation(txtObjArr[i]));
}
player.play();
*/