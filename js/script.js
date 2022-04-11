$('document').ready(function () {
    $('#play').click(function () {
        $(this).hide();
        var audio = {};
        audio["walk"] = new Audio();
        audio["walk"].src = "Rain.mp3"
        audio["walk"].addEventListener('load', function () {
            audio["walk"].play();
        });
    });
});   