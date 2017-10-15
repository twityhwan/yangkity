var selectEl, textAreaEl, parentEl, descEl;
var selected;
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

function play() {
    // reset parent div
    while(parentEl.hasChildNodes()) {
        parentEl.removeChild(parentEl.firstChild);
    }

    var text = textAreaEl.value;
    text = text.replace('\n', '');
    eval(text);
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
        description: "",
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
        description: "",
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
    }

];