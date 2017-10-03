window.onload = function() {
    var textObjs = KITY.createText("헬로 키네틱", "parent", "hello", "char");
    console.log(textObjs);

    var player = KITY.getPlayer();
    var container = KITY.createContainer('container');
    for (var i=0; i<textObjs.length; i++) {
        var spec = {
            y: {100: 200, delay: i, duration: 2, repeat: 1},
            opacity: {1: 0.5, delay: i, duration: 1, repeat: 1},
        }
        KITY.setAnimationSpec(textObjs[i], spec);
        console.log(textObjs[i]);
        //var animation = KITY.createAnimation(textObjs[i]);
        //player.add(animation);
        container.add(textObjs[i]);
    }
    var animation = KITY.createAnimation(container);
    //player.play({mode: 'sequence'});
}