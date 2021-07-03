function on() {
    for (var i = 1; i < 6; i++) {
        //console.log("loop",i)
        var li = document.getElementById('im'.concat(i));
        //console.log(li)
        if (li.src.match('off')) {
            li.src = 'on.jpg';
        } else {
            li.src = 'off.jpg';
        }
    }
}