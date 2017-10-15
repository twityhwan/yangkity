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

    /*
    // sample 5 글자단위
    var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "char");
    var player = KITY.getPlayer();
    for (var i in txtObjArr) {
        KITY.setAnimationSpec(txtObjArr[i], {
            opacity: {1: 0, duration: 1},
        });
        player.add(KITY.createAnimation(txtObjArr[i]));
    }
    player.play({mode: 'sequence'});
    */

    /*
    // sample 6
    var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "char");
    var player = KITY.getPlayer();
    for (var i in txtObjArr) {
        KITY.setAnimationSpec(txtObjArr[i], {
            y: {0: 100, duration: 2, delay: (txtObjArr.length-i-1)*0.5},
        });
        player.add(KITY.createAnimation(txtObjArr[i]));
    }
    player.play();
    */

    /*
    // sample 7
    var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "char");
    KITY.setLayout(txtObjArr, 'diagonal');
    var player = KITY.getPlayer();
    for (var i in txtObjArr) {
        KITY.setAnimationSpec(txtObjArr[i], {
            x: {0: 200, duration: 4},
        });
        player.add(KITY.createAnimation(txtObjArr[i]));
    }
    player.play();
    */
    

    /*
    // sample 8
    var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "char");
    var player = KITY.getPlayer();
    var randomDelay = [0, 1, 2, 1.5, 0.5];
    for (var i in txtObjArr) {
        KITY.setAnimationSpec(txtObjArr[i], {
            y: {0: 100, duration: 2, delay: randomDelay[i]},
        });
        player.add(KITY.createAnimation(txtObjArr[i]));
    }
    player.play();
    */

    /*
    var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "char");
    var player = KITY.getPlayer();
    var randomDelay = [0, 1, 2, 1.5, 0.5];
    for (var i in txtObjArr) {
        KITY.setAnimationSpec(txtObjArr[i], {
            y: {0: 100, duration: 2, delay: randomDelay[i], easing: 'sin.out'},
        });
        player.add(KITY.createAnimation(txtObjArr[i]));
    }
    player.play();
    */

    /*
    // sample 2-1 361자
    var player = KITY.getPlayer();
    var textArr = ["날", "한심하게", "볼 게 뻔하니"];
    var txtObjArr = [];
    for (var i in textArr) {
        txtObjArr = txtObjArr.concat(KITY.createText(textArr[i], targetDIV, "text"+i));
    }
    KITY.setLayout(txtObjArr, "diagonal");
    for (var i in txtObjArr) {
        KITY.setAnimationSpec(txtObjArr[i], {
            opacity: {0: 1, duration:1, delay: i},
        })
        player.add(KITY.createAnimation(txtObjArr[i]));
    }
    player.play();
    */
    
    /*
    // sample 2-2 361자
    var textArr = ["날", "한심하게", "볼 게 뻔하니"];
    var txtObjArr = [];
    for (var i in textArr) {
        txtObjArr = txtObjArr.concat(KITY.createText(textArr[i], targetDIV, "text"+i));
    }
    KITY.setLayout(txtObjArr, "diagonal");
    var container = KITY.createContainer('container');
    container.add(txtObjArr);
    for (var i in txtObjArr) {
        KITY.setAnimationSpec(txtObjArr[i], {
            opacity: {0: 1, duration:1, delay: i},
        })
    }
    KITY.setAnimationSpec(container, {
        y: {0: -300, duration: 0.5, delay: 3}
    })
    KITY.play(txtObjArr.concat([container]));
    */
    //const mojsPlayer = new MojsPlayer({ add: timeline });

    /*
    var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "word", {opacity: 0});
    KITY.setLayout(txtObjArr, "topToBottom");
    var container = KITY.createContainer('container', targetDIV);
    for (var i in txtObjArr) {
        KITY.setAnimationSpec(txtObjArr[i], {
            opacity: {0:1, duration: 0.5, delay: i*0.5}
        });
    }

    container.add(txtObjArr);
    KITY.setAnimationSpec(container, {
        angleX: {0: 360, duration: 3},
    });
    KITY.play([txtObjArr, container], {mode: 'sequence'});
    */

    /*
    var txtObjArr = KITY.createText("춤을 추지 않나요", targetDIV, "kinetic", "word", {opacity: 0});
    KITY.setLayout(txtObjArr, "topToBottom", {align: 'center'});
    var container = KITY.createContainer('container', targetDIV, 200, 200);
    for (var i in txtObjArr) {
        KITY.setAnimationSpec(txtObjArr[i], {
            opacity: {0:1, duration: 0.5, delay: i*0.5}
        });
    }
    container.add(txtObjArr);
    KITY.setAnimationSpec(container, {
        //opacity: {1:0, duration: 0.5},
        angleZ: {0:-120, duration: 3}
    });

    KITY.setStyle(container, {backgroundColor: 'red'});

    KITY.play([txtObjArr, container], {mode: 'sequence'});
    */

    // sample2-2
    var line1 = KITY.createText("너를", targetDIV, "line1", "char", {
        font: "75px bold", "padding-right": "5px", opacity: 0,
        "background-color": "white", color: "#33cc33"
    });
    var line2_1 = KITY.createText("본 내", targetDIV, "line2_1", "char", {
        font: "23px bold", "padding-right": "5px", opacity: 0, color: "#0059b3"
    });
    var line2_2 = KITY.createText("마음속에", targetDIV, "line2_2", "char", {
        font: "23px bold", opacity: 0, color: "#0059b3"
    });
    var line3 = KITY.createText("사랑이", targetDIV, "line3", "char", {
        font: "50px bold", opacity: 0, color: "red"
    });

    for (var i in line1) {
        KITY.setAnimationSpec(line1[i], {
            opacity: {0: 1, duration: 0.1, delay: 0.1}
        });
    }

    var line2 = line2_1.concat(line2_2);
    for (var i in line2) {
        KITY.setAnimationSpec(line2[i], {
            opacity: {0: 1, duration: 0.1, delay: 0.1},
            y: {[-28]: 0, duration: 0.1, delay: 0.1}
        });
    }

    for (var i in line3) {
        KITY.setAnimationSpec(line3[i], {
            opacity: {0: 1, duration: 0.2, delay: 0.2},
            angleZ: {0: 360, duration: 0.2, delay: 0.2}
        });
    }

    var line2Cont = KITY.createContainer("line2Cont", targetDIV);
    line2Cont.add(line2);
    KITY.setStyle(line2Cont, {top: 23+5, left: -150});
    
    var line3Cont = KITY.createContainer("line3Cont", targetDIV);
    line3Cont.add(line3);
    KITY.setStyle(line3Cont, {top: 23+55, left: -(150+148)});

    KITY.play([line1, line2, line3], {mode: "sequence"});


    /*
    for (var i in txtObjArr) {
        KITY.setAnimationSpec(txtObjArr[i], {
            opacity: {0:1, duration: 0.5, delay: i*0.5},
        });
    }

    var container = KITY.createContainer('container', 'parent');
    container.add(txtObjArr);
    KITY.setAnimationSpec(container, {
        scaleY: {1: 0.8, duration: 0.5, delay: 1}
    }, {
        scaleY: {0.8: 1, duration: 0.5}
    });
    KITY.play([txtObjArr, container]);
    */

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
    player.add(txtObjArr[i]);
}
player.play({mode:'parallel'});
*/
/*
txtObjArr = kityCreateTextObj("헬로 키네틱", "text1", "word", targetDIV);
kitySetTextObjAttr(targetDIV, txtObjArr, "topToBottom");
kityExeMotionSeq(targetDIV, [0, 1], kitySinglePlay(kityCircle(txtObj, {angle : 180}),{duration: 4}), [0, 0]);
*/

/* sample1 140자
var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic");
KITY.setAnimationSpec(txtObjArr[0], {x: {0: 200, duration: 5}})
KITY.play(txtObjArr[0]);
*/

/* sample2 215자
var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "word");
KITY.setLayout(txtObjArr, 'topToBottom');
for (var i in txtObjArr) {
    KITY.setAnimationSpec(txtObjArr[i], {
        x: {0: 200, duration: 4, delay: i}
    });
}
KITY.play(txtObjArr);
*/

/* sample3 231자
var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "word");
KITY.setLayout(txtObjArr, 'topToBottom');
for (var i in txtObjArr) {
    KITY.setAnimationSpec(txtObjArr[i], {
        x: {0: 200},
        scale: {1: 0.5},
        delay: 1-i,
        duration: 4
    });
}
KITY.play(txtObjArr);
*/

/* sample4 212자
var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "word");
KITY.setLayout(txtObjArr, 'topToBottom');
for (var i in txtObjArr) {
    KITY.setAnimationSpec(txtObjArr[i], {
        angleZ: {0: 180, duration: 4}
    });
}
KITY.play(txtObjArr);
*/
/*
// sample 5 글자단위 190자
var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "char");
for (var i in txtObjArr) {
    KITY.setAnimationSpec(txtObjArr[i], {
        opacity: {1: 0, duration: 1}
    });
}
KITY.play(txtObjArr, {mode: 'sequence'});
*/

/*
// sampe 6 200자
var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "char");
for (var i in txtObjArr) {
    KITY.setAnimationSpec(txtObjArr[i], {
        y: {0: 100, duration: 2, delay: (txtObjArr.length-i-1)*0.5}
    });
}
KITY.play(txtObjArr);
*/

/*
// sample 7 204자
var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "char");
KITY.setLayout(txtObjArr, 'diagonal');
for (var i in txtObjArr) {
    KITY.setAnimationSpec(txtObjArr[i], {
        x: {0: 200, duration: 4}
    });
}
KITY.play(txtObjArr);
*/

/*
// sample 8 219자
var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "char");
var randomDelay = [0, 1, 2, 1.5, 0.5];
for (var i in txtObjArr) {
    KITY.setAnimationSpec(txtObjArr[i], {
        y: {0: 100, duration: 2, delay: randomDelay[i]}
    });
}
KITY.play(txtObjArr);
*/

/* 2-1
var txtObjArr = KITY.createText("나도 어디서 꿇리진 않아", targetDIV, "kinetic", "word",
{font: "20px bold", 'padding-right': 5});
for (var i in txtObjArr) {
    KITY.setAnimationSpec(txtObjArr[i], {
        opacity: {0:1, duration: 0.5, delay: i*0.5},
    });
}

var container = KITY.createContainer('container', 'parent');
container.add(txtObjArr);
KITY.setAnimationSpec(container, {
    scaleY: {1: 0.8, duration: 0.5, delay: 1}
}, {
    scaleY: {0.8: 1, duration: 0.5}
});
KITY.play([txtObjArr, container]);
*/

/*
    // sample2-2
    var line1 = KITY.createText("너를", targetDIV, "line1", "char", {
        font: "75px bold", "padding-right": "5px", opacity: 0,
        "background-color": "white", color: "#33cc33"
    });
    var line2_1 = KITY.createText("본 내", targetDIV, "line2_1", "char", {
        font: "23px bold", "padding-right": "5px", opacity: 0, color: "#0059b3"
    });
    var line2_2 = KITY.createText("마음속에", targetDIV, "line2_2", "char", {
        font: "23px bold", opacity: 0, color: "#0059b3"
    });
    var line3 = KITY.createText("사랑이", targetDIV, "line3", "char", {
        font: "50px bold", opacity: 0, color: "red"
    });

    for (var i in line1) {
        KITY.setAnimationSpec(line1[i], {
            opacity: {0: 1, duration: 0.1, delay: 0.1}
        });
    }

    var line2 = line2_1.concat(line2_2);
    for (var i in line2) {
        KITY.setAnimationSpec(line2[i], {
            opacity: {0: 1, duration: 0.1, delay: 0.1},
            y: {[-28]: 0, duration: 0.1, delay: 0.1}
        });
    }

    for (var i in line3) {
        KITY.setAnimationSpec(line3[i], {
            opacity: {0: 1, duration: 0.2, delay: 0.2},
            angleZ: {0: 360, duration: 0.2, delay: 0.2}
        });
    }

    var line2Cont = KITY.createContainer("line2Cont", targetDIV);
    line2Cont.add(line2);
    KITY.setStyle(line2Cont, {top: 23+5, left: -150});
    
    var line3Cont = KITY.createContainer("line3Cont", targetDIV);
    line3Cont.add(line3);
    KITY.setStyle(line3Cont, {top: 23+55, left: -(150+148)});

    KITY.play([line1, line2, line3], {mode: "sequence"});
*/
