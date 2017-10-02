window.onload = function() {
    kityCreateText('parent', 'child');
    kityCreateText('parent', 'child2');
    kitySetText('child', {
        contents: '키네틱',
        left: 200,
        top: 200,
        fontSize: 50,
        color: '#00B0F0'
    });
    kitySetText('child2', {
        contents: '키네틱',
        left: 200,
        top: 200,
        fontSize: 50,
        color: '#ff8080'
    });

    //var ret = kityStaticRotation('child', {angle: 45, goback: true});
    //var ret = kityLine('child', {direction: 'left', length: 100, goback: true});
    //var ret = kityLine('child', {direction: 45, length: 100, goback: true});
    /*
    var ret = kityStaticScale('child', {size: 2, goback: true});
    */
    //var ret = kityStaticShaking('child2', {size: 50});
    //kitySinglePlay(ret, {delay: 0, duration: 1000});
    /*
    var ret = kityStaticOpacity('child', {opacity: 0.5, goback: true});
    */
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
    }, {
        function: kityLine('child', {direction: 225, length: 100}),
        duration: 1000,
        delay: 0
    }, {
        function: kityStaticOpacity('child', {opacity: 0.5}),
        duration: 1000,
        delay: 0
    }, {
        function: kityStaticRotation('child', {angle: 45}),
        duration: 1000,
        delay: 0
    }, {
        function: kityStaticScale('child', {size: 0.5}),
        duration: 1000,
        delay: 0
    });
    /*
    kityPar({
        function: kityStaticScale('child', {size: 2}),
        duration: 2000,
        delay: 1000
    }, {
        function: kityStaticRotation('child2', {angle: 360, length: 100}),
        duration: 1000,
        delay: 0
    }, {
        function: kityLine('child', {direction: 'down', length: 200}),
        duration: 1000,
        delay: 0
    });
    */

    /*
    var ani = new mojs.Html({
        el: '#child',
        x: {100: 200, delay: 1000, duration: 3000},
        y: {100: 300, delay: 3000, duration: 1000},
        angleZ: {0: 360, delay: 0, duration: 3000},
        scale: {1: 0.5, delay: 0, duration: 3000},
    }).then({
        x: {200: 100, delay: 1000, duration: 2000}
    });

    var ani2 = new mojs.Html({
        el: '#child2',
        y: {100: 300, delay: 3000, duration: 1000},
        angleZ: {0: 360, delay: 0, duration: 3000},
        opacity: {1: 0.5, delay: 0, duration: 5000},
    });

    const timeline = new mojs.Timeline;
    timeline.add(ani, ani2);
    timeline.play();
    */
}
