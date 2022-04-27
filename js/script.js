$('document').ready(function () {
  const Rain = new Audio("Reference/Rain.mp3");
  const Fire = new Audio("Reference/Fire.mp3");
  const Music = new Audio("Reference/The Central Park North - All the Time.mp3");

  $('.exitfullscreen').hide();


  $('#play').click(function () {
      Music.play();
      Music.loop=true;
  });

  $('#volumeMusica').click(function () {
      Music.volume = $('#volumeMusica').val() / 100;
  });

  $('#volumeRain').click(function () {
      Rain.play();
      Rain.volume = $('#volumeRain').val() / 100;
      Rain.loop=true;
  });

  $('#volumeFire').click(function () {
      Fire.play();
      Fire.volume = $('#volumeFire').val() / 100;
      Fire.loop=true;
  });

  $('#stopP').click(function () {
      Music.pause();
  });

  $('.requestfullscreen').click(function () {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
    $('.requestfullscreen').hide();
    $('.exitfullscreen').show();
  });

  $('.exitfullscreen').click(function () {
    var elem = document.documentElement;
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
    $('.exitfullscreen').hide();
    $('.requestfullscreen').show();
  });

  $('#NPClear').click(function () {
      $('#note').val('');
  });

  $('#NPSave').click(function (){
      var text = document.getElementById("note").value;
      text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
      var blob = new Blob([text], { type: "text/plain"});
      var anchor = document.createElement("a");
      anchor.download = "NotePad.txt";
      anchor.href = window.URL.createObjectURL(blob);
      anchor.target ="_blank";
      anchor.style.display = "none"; // just to be safe!
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
  });

    var timedelay = 1;
    function delayCheck() {
        console.log(timedelay);
        if (timedelay == 15) {
            $('.card').hide();
            timedelay = 1;
            console.clear();
        }
        timedelay = timedelay+1;
    }
    $(document).mousemove(function () {
        $('.card').show();
        timedelay = 1;
        clearInterval(_delay);
        _delay = setInterval(delayCheck, 500);
    });

    $(document).on("touchstart click mouseenter keyup", "#note", function(){
        $('.card').show();
        timedelay = 1;
        clearInterval(_delay);
        _delay = setInterval(delayCheck, 500);
    });

    _delay = setInterval(delayCheck, 500)

});

