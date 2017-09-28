window.onload = function() {
    kityCreateText('parent', 'child');
    kitySetText('child', {
        contents: '키네틱',
        left: 200,
        top: 200,
        fontSize: 50,
        color: '#00B0F0'
    });

    console.log(textObjMap);
    /*
    var ret = kityStaticRotation('child', {angle: 45, goback: true});
    console.log(textObjMap);
    kitySinglePlay(ret, {delay: 0, duration: 2000, repeat: 3});
    */
    /*
    var ret = kityLine('child', {direction: 'top', length: 100, goback: true});
    kitySinglePlay(ret, {delay: 0, duration: 5000, repeat: 3});
    */
    /*
    var ret = kityStaticScale('child', {size: 2, goback: true});
    kitySinglePlay(ret, {delay: 0, duration: 2000, repeat: 3});
    */
    var ret = kityStaticOpacity('child', {opacity: 0.5, goback: true});
    kitySinglePlay(ret, {delay: 0, duration: 2000, repeat: 3});
    // TODO: shaking, circle
}
