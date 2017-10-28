var selectEl, textAreaEl, parentEl, descEl;
var selected;
var playing;
window.onload = function() {
    selectEl = document.getElementById("sampleList");
    textAreaEl = document.getElementById("source_area");
    parentEl = document.getElementById("parent");
    descEl = document.getElementById("description");

    for (var i in sampleList) {
        var option = document.createElement('option');
        option.value = sampleList[i].title;
        option.innerHTML = sampleList[i].title;
        selectEl.appendChild(option);
    }
    textAreaEl.value = sampleList[0].source;
    descEl.innerHTML = sampleList[0].description;
    selected = sampleList[0].title;
}

function removeChild(parentEl) {
    var length = parentEl.children.length;
    for (var i=0; i<length; i++) {
        var el = parentEl.children[0];
        if (el.children.length > 0) {
            removeChild(el);
        }
        KITY.removeById(el.id);
        parentEl.removeChild(el);
        
    }
    isPlayed = false;

}

var isPlayed = false;
function play() {
    // reset parent div
    removeChild(parentEl);
    var text = textAreaEl.value;
    text = text.replace('\n', '');
    if (!isPlayed) {
        eval(text);
        isPlayed = true;
    }
}

function onSampleSelected() {
    selected = selectEl.options[selectEl.selectedIndex].value;
    for (var i in sampleList) {
        if (sampleList[i].title === selected) {
            textAreaEl.value = sampleList[i].source;
            descEl.innerHTML = sampleList[i].description;
            break;
        }
    }
}

var sampleList = [{
        title: "sample1",
        description: "문장 단위의 ‘헬로 키네틱’텍스트 객체가 5초 동안 오른쪽으로 200px직선 이동",
        source: 'var targetDIV = "parent";\n'+
        'var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic");\n' +
        'KITY.setAnimationSpec(txtObjArr[0], {x: {0: 200, duration: 5}});\n' +
        'KITY.play(txtObjArr[0]);',
    }, {
        title: "sample2",
        description: "단어 단위의 '헬로 키네틱' 텍스트를 각 텍스트가 1초의 간격을 두고 4초 동안 오른쪽으로 200px 이동",
        source: 'var targetDIV = "parent";\n'+
        'var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "word");\n'+
        'KITY.setLayout(txtObjArr, "topToBottom");\n'+
        'for (var i in txtObjArr) {\n'+
        '    KITY.setAnimationSpec(txtObjArr[i], {\n'+
        '        x: {0: 200, duration: 4, delay: i}\n'+
        '    });\n'+
        '}\n'+
        'KITY.play(txtObjArr);'
    }, {
        title: "sample3",
        description: "단어 단위의 '헬로 키네틱' 텍스트를 각 텍스트가 1초의 간격을 두고 4초 동안 오른쪽으로 200px 직선 이동과 동시에 글자 크기 50% 축소",
        source: 'var targetDIV = "parent";\n'+
        'var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "word");\n'+
        'KITY.setLayout(txtObjArr, "topToBottom");\n'+
        'for (var i in txtObjArr) {\n'+
        '    KITY.setAnimationSpec(txtObjArr[i], {\n'+
        '        x: {0: 200},\n'+
        '        scale: {1: 0.5},\n'+
        '        delay: 1-i,\n'+
        '        duration: 4\n'+
        '    });\n'+
        '}\n'+
        'KITY.play(txtObjArr);',
    }, {
        title: "sample4",
        description: "단어 단위의 ‘헬로 키네틱’ 텍스트 객체를 4초 동안 180도 회전",
        source: 'var targetDIV = "parent";\n'+
        'var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "word");\n'+
        'KITY.setLayout(txtObjArr, "topToBottom");\n'+
        'for (var i in txtObjArr) {\n'+
        '    KITY.setAnimationSpec(txtObjArr[i], {\n'+
        '        angleZ: {0: 180, duration: 4}\n'+
        '    });\n'+
        '}\n'+
        'KITY.play(txtObjArr);',
    },  {
        title: "sample5",
        description: "글자 단위의 '헬로 키네틱' 텍스트 객체를 각 텍스트가 1초 간격으로 1초 동안 불투명도 100%에서 0%로 변화",
        source: 'var targetDIV = "parent";\n'+
        'var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "char");\n'+
        'for (var i in txtObjArr) {\n'+
        '    KITY.setAnimationSpec(txtObjArr[i], {\n'+
        '        opacity: {1: 0, duration: 1, delay: i}\n'+
        '    });\n'+
        '}\n'+
        'console.log(txtObjArr);\n'+
        'KITY.play(txtObjArr);',
    }, {
        title: "sample6",
        description: "글자 단위의 '헬로 키네틱' 텍스트 객체를 각 텍스트가 0.5초 간격으로 2초 동안 아래쪽으로 100px 직선 이동",
        source: 'var targetDIV = "parent";\n'+
        'var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "char");\n'+
        'for (var i in txtObjArr) {\n'+
        '    KITY.setAnimationSpec(txtObjArr[i], {\n'+
        '        y: {0: 100, duration: 2, delay: (txtObjArr.length-i-1)*0.5}\n'+
        '    });\n'+
        '}\n'+
        'KITY.play(txtObjArr);',
    }, {
        title: "sample7",
        description: "글자 단위의 '헬로 키네틱' 텍스트 객체를 동시에 4초 동안 오른쪽으로 200px 직선 이동",
        source: 'var targetDIV = "parent";\n'+
        'var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "char");\n'+
        'KITY.setLayout(txtObjArr, "diagonal");\n'+
        'for (var i in txtObjArr) {\n'+
        '    KITY.setAnimationSpec(txtObjArr[i], {\n'+
        '        x: {0: 200, duration: 4}\n'+
        '    });\n'+
        '}\n'+
        'KITY.play(txtObjArr);',
    }, {
        title: "sample8",
        description: "글자 단위의 '헬로 키네틱' 텍스트 객체를 각 텍스트가 0.5초 간격으로 2초 동안 아래쪽으로 100px 직선 이동",
        source: 'var targetDIV = "parent";\n'+
        'var txtObjArr = KITY.createText("헬로 키네틱", targetDIV, "kinetic", "char");\n'+
        'var randomDelay = [0, 1, 2, 1.5, 0.5];\n'+
        'for (var i in txtObjArr) {\n'+
        '    KITY.setAnimationSpec(txtObjArr[i], {\n'+
        '        y: {0: 100, duration: 2, delay: randomDelay[i]}\n'+
        '    });\n'+
        '}\n'+
        'KITY.play(txtObjArr);',
    }, {
        title: "sample2-1",
        description: "단어 단위의 '나도 어디서 꿇리진 않아' 텍스트 객체를 각 텍스트가 0.5초 간격으로 0.5초 동안 순서대로 나타난다. '꿇리지' 단어 시점에 전체 텍스트의 크기가 축소되었다가 원래 크기로 돌아온다.",
        source: 'var targetDIV = "parent";\n'+
        'var txtObjArr = KITY.createText("나도 어디서 꿇리진 않아", targetDIV, "kinetic", "word",\n'+
        '{font: "20px bold", "padding-right": 5});\n'+
        'for (var i in txtObjArr) {\n'+
        '    KITY.setAnimationSpec(txtObjArr[i], {\n'+
        '        opacity: {0:1, duration: 0.5, delay: i*0.5},\n'+
        '    });\n'+
        '}\n'+
        'var container = KITY.createContainer("container", "parent");\n'+
        'container.add(txtObjArr);\n'+
        'KITY.setAnimationSpec(container, {\n'+
        '    scaleY: {1: 0.8, duration: 0.5, delay: 1}\n'+
        '}, {\n'+
        '    scaleY: {0.8: 1, duration: 0.5}\n'+
        '});\n'+
        'KITY.play([txtObjArr, container]);\n'
    }, {
        title: "sample2-2",
        description: "'너를', '본 내 마음속에', '사랑이' 텍스트가 위에서 아래로 배치되고, '너를'은 각 글자가 불투명도 0%에서 100%로 나타난다. "+
        "'본 내 마음속에'는 각 글자가 위에서 아래로 이동하며 나타난다. '사랑이'는 회전하면서 나타난다. 각 글자의 애니메이션 시간과 간격은 1초씩이다.",
        source: 'var targetDIV = "parent";\n'+
        'var line1 = KITY.createText("너를", targetDIV, "line1", "char", {\n'+
        '    font: "75px bold", "padding": "3px", opacity: 0,\n'+
        '    "background-color": "white", color: "#33cc33"\n'+
        '});\n'+
        'var line2_1 = KITY.createText("본 내", targetDIV, "line2_1", "char", {\n'+
        '    font: "23px bold", "padding-right": "5px", opacity: 0, color: "#0059b3"\n'+
        '});\n'+
        'var line2_2 = KITY.createText("마음속에", targetDIV, "line2_2", "char", {\n'+
        '    font: "23px bold", opacity: 0, color: "#0059b3"\n'+
        '});\n'+
        'var line3 = KITY.createText("사랑이", targetDIV, "line3", "char", {\n'+
        '    font: "50px bold", opacity: 0, color: "red"\n'+
        '});\n'+
        'for (var i in line1) {\n'+
        '    KITY.setAnimationSpec(line1[i], {\n'+
        '        opacity: {0: 1, duration: 0.1, delay: 0.1}\n'+
        '    });\n'+
        '}\n\n'+
        'var line2 = line2_1.concat(line2_2);\n'+
        'for (var i in line2) {\n'+
        '    KITY.setAnimationSpec(line2[i], {\n'+
        '        opacity: {0: 1, duration: 0.1, delay: 0.1},\n'+
        '        y: {[-28]: 0, duration: 0.1, delay: 0.1}\n'+
        '    });\n'+
        '}\n\n'+
        'for (var i in line3) {\n'+
        '    KITY.setAnimationSpec(line3[i], {\n'+
        '        opacity: {0: 1, duration: 0.2, delay: 0.2},\n'+
        '        angleZ: {0: 360, duration: 0.2, delay: 0.2}\n'+
        '    });\n'+
        '}\n\n'+
        'var line2Cont = KITY.createContainer("line2Cont", targetDIV);\n'+
        'line2Cont.add(line2);\n'+
        'KITY.setStyle(line2Cont, {top: 23+5, left: -150});\n'+
        'var line3Cont = KITY.createContainer("line3Cont", targetDIV);\n'+
        'line3Cont.add(line3);\n'+
        'KITY.setStyle(line3Cont, {top: 23+55, left: -(150+148)});\n\n'+
        'KITY.play([line1, line2, line3], {mode: "sequence"});\n'
    }
];
