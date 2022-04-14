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

});

