window.onload = function() {
    var textObjs = KITY.createText("헬로 키네틱", "parent", "hello", "char", {
        font: 'italic bold 20px arial,serif',
        color: 'blue'
    });

    var player = KITY.getPlayer();
    var container = KITY.createContainer('container');
    for (var i=0; i<textObjs.length; i++) {
        var spec = {
            y: {100: 200, delay: i, duration: 2, repeat: 1},
            opacity: {1: 0.5, delay: i, duration: 1, repeat: 1},
        }
        KITY.setAnimationSpec(textObjs[i], spec);
        var animation = KITY.createAnimation(textObjs[i]);
        player.add(animation);
        container.add(textObjs[i]);
    }
    var spec = {
        angleZ: {0: 360, delay: 0, duration: 4, repeat: 0},
        x: 200,
        y: 300,
    }
    KITY.setAnimationSpec(container, spec);
    var animation = KITY.createAnimation(container);

    player.add(animation);
    KITY.clearAnimationSpec(container);


    textObjs = KITY.createText("추석 한가위 잘 보내세요~", "parent", "chu", "word");
    KITY.setLayout(textObjs, 'diagonal');
    var aniSpec = new AnimationSpec();
    aniSpec.rotationZ({0: 30, duration: 1});
    KITY.setAnimationSpec(textObjs[0], aniSpec);
    animation = KITY.createAnimation(textObjs[0]);
    player.add(animation);
    player.play({mode: 'parallel'});
}