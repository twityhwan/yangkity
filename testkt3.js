window.onload = function() {
    var textObjs = KITY.createText("헬로 키네틱", "parent", "hello", "char", {
        font: 'italic bold 20px arial,serif',
        color: 'blue'
    });

    var player = KITY.getPlayer();
    var container = KITY.createContainer('container');
    for (var i=0; i<textObjs.length; i++) {
        /*
        KITY.setStyle(textObjs[i], {
            font: 'italic bold 20px arial,serif',
            color: 'blue'
        });
        */
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
    player.play({mode: 'parallel'});
}