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

function play() {
    // reset parent div
    //removeChild(parentEl);
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
    description: "\"키네틱 타이포그래피\" 텍스트가 글자 단위로 '키', '네', '틱', '타', '이', '포', '그', '래', '피'가 각각 불투명도 0에서 1로 0.5초 동안 순서대로 나타난 후 \"키네틱타이포그래피\"가 한 번에 위 0.5초 동안 불투명도가 1에서 0으로 변하면서 사라진다.",
    source: 'var targetDIV = "parent";\n'+
    'var splitType = "char";\n'+
    'var txtObjArr = KITY.createText("키네틱 타이포그래피", targetDIV, "kinetic", splitType);\n' +
        'for (var i in txtObjArr) {\n'+
        '    KITY.setAnimationSpec(txtObjArr[i], {\n'+
        '        opacity: {0:1, duration: 0.5, delay: i*0.5},\n'+
        '    });\n'+
        '    console.log(i*0.5);\n'+
        '}\n'+
    'var container = KITY.createContainer("container", "parent");\n'+
    'container.add(txtObjArr);\n'+
    'KITY.setAnimationSpec(container, {y: {0: -200}, opacity: {1: 0}, curve: "easing", duration: 0.3, delay: txtObjArr.length*0.5});\n' +
    'KITY.play([txtObjArr, container]);',
}];

/*
var targetDIV = document.getElementById("parent");
var splitType = "char";
var txtObj = kityCreateTextObj("키네틱 타이포그래피", "group", splitType, targetDIV);
kitySetTextObjAttr(targetDIV, txtObj, layout);
txt
*/
