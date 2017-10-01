window.onload = function() {
    kityCreateText('parent', 'child');
    kitySetText('child', {
        contents: '키네틱',
        left: 200,
        top: 200,
        fontSize: 50,
        color: '#00B0F0'
    });

    //var ret = kityStaticRotation('child', {angle: 45, goback: true});
    //var ret = kityLine('child', {direction: 'left', length: 100, goback: true});
    //var ret = kityLine('child', {direction: 45, length: 100, goback: true});
    /*
    var ret = kityStaticScale('child', {size: 2, goback: true});
    kitySinglePlay(ret, {delay: 0, duration: 2000, repeat: 3});
    */
    //var ret = kityStaticOpacity('child', {opacity: 0.5, goback: true});
    //kitySinglePlay(ret, {delay: 1000, duration: 2000, repeat: 1});
    // TODO: shaking, circle
    // TODO; kity는 duration 단위가 초(s)임.
    kitySeq({
        function: kityLine('child', {direction: 'right', length: 50}),
        duration: 2000,
        delay: 0
    }, {
        function: kityLine('child', {direction: 'down', length: 100}),
        duration: 1000,
        delay: 0
    });
}
