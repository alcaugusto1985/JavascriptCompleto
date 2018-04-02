(function() {
    function calculaMedia() {
        var media = arguments.length;
        var nota = 0;
        var x = 0;
        while (typeof arguments[x] === 'number') {
            nota += arguments[x];
            x++
        }
        var result = nota / media;
        result = parseFloat(result);
        console.log('media: ', result);
    }
    calculaMedia(40, 80, 20, 10);
})();