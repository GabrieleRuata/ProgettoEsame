$('document').ready(function () {
  const Rain = new Audio("Reference/Rain.mp3");
  const Fire = new Audio("Reference/Fire.mp3");
  const hairDryer = new Audio("Reference/hair-Dryer.mp3");
  const Seashore = new Audio("Reference/Seashore.mp3");
  const Fan = new Audio("Reference/fan.mp3");
  const Vacuum = new Audio("Reference/Vacuum.mp3");
  const Forest = new Audio("Reference/Forest.mp3");
  const Traffic = new Audio("Reference/Traffic.mp3");
  
  $('.API-Spotify').hide();
  $('#pause').hide();
  $('.exitfullscreen').hide();
  $('#VolumeIcon').attr("src","Reference/volume(1).png");

  $('#play').click(function () {
    $('#play').hide();
    $('#pause').show();
  });

  $('#pause').click(function () {
    $('#pause').hide();
    $('#play').show();
  });

  $('#volumeMusica').change(function VolumeIcon() {
    if($('#volumeMusica').val()>49){
      $('#VolumeIcon').attr("src","Reference/volume(2).png");
    }else{
      $('#VolumeIcon').attr("src","Reference/volume(1).png");
    }
    if ($('#volumeMusica').val()<1){
      $('#VolumeIcon').attr("src","Reference/mute.png");
    }
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
  
  $('#volumeHairDryer').click(function () {
      hairDryer.play();
      hairDryer.volume = $('#volumeHairDryer').val() / 100;
      hairDryer.loop=true;
  });

  $('#volumeSeashore').click(function () {
      Seashore.play();
      Seashore.volume = $('#volumeSeashore').val() / 100;
      Seashore.loop=true;
  });

  $('#volumeFan').click(function () {
      Fan.play();
      Fan.volume = $('#volumeFan').val() / 100;
      Fan.loop=true;
  });

  $('#volumeVacuum').click(function () {
      Vacuum.play();
      Vacuum.volume = $('#volumeVacuum').val() / 100;
      Vacuum.loop=true;
  });

  $('#volumeForest').click(function () {
      Forest.play();
      Forest.volume = $('#volumeForest').val() / 100;
      Forest.loop=true;
  });

  $('#volumeTraffic').click(function () {
      Traffic.play();
      Traffic.volume = $('#volumeTraffic').val() / 100;
      Traffic.loop=true;
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
        if (timedelay == 15) {    //rimetti a 15 quando hai finito
            $('.card').hide(1000);
            $('.text-card').hide(500);
            timedelay = 1;
        }
        timedelay = timedelay+1;
    }
    $(document).mousemove(function () {
        $('.card').show();
        $('.text-card').show();
        timedelay = 1;
        clearInterval(_delay);
        _delay = setInterval(delayCheck, 500);
    });

    $(document).on("touchstart click mouseenter keyup", "#note", function(){
        $('.card').show();
        $('.text-card').show();
        timedelay = 1;
        clearInterval(_delay);
        _delay = setInterval(delayCheck, 500);
    });

    _delay = setInterval(delayCheck, 500)

});