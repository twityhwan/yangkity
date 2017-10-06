window.onload = function() {
    var text1 = "밤새 모니터에";
    var textObjs = KITY.createText(text1, 'parent', 'text1', 'word',/* {
        fontSize: 30,
    }*/);

    var player = KITY.getPlayer();
    var container = KITY.createContainer('container');
    for (var i=0; i<textObjs.length; i++) {
        var toX = 0;
        if (i!=0) toX = 30*textObjs[i-1].text.length;
        KITY.setStyle(textObjs[i], {fontSize: 30});
        var spec = {
            x: {0: 100+toX, delay: 0, duration: 1},
            y: 200,
            opacity: {0: 1, duration: 1}
        }
        KITY.setAnimationSpec(textObjs[i], spec);
        var animation = KITY.createAnimation(textObjs[i]);
        player.add(animation);
        container.add(textObjs[i]);
    }
    KITY.setAnimationSpec(container, {
        opacity: {1: 0, duration: 1},
        y: {0: -200, duration: 1}
    });
    KITY.setStyle(container, {
        color: 'magenta'
    });
    player.add(KITY.createAnimation(container));
    player.play({mode: 'sequence'});
}