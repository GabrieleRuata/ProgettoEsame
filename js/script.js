$('document').ready(function () {
  const Rain = new Audio("Reference/Rain.mp3");
  const Fire = new Audio("Reference/Fire.mp3");
  const Music = new Audio("Reference/The Central Park North - All the Time.mp3");


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
});

