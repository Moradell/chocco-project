let player;
const playerContainer = $(".player");

let eventsInit = () => {
  $(".player__start").click(e => {
    e.preventDefault();

    if (playerContainer.hasClass("paused")) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  });

  $(".player__playback").click(e => {
    const bar = $(e.currentTarget);
    const clickedPosition = e.originalEvent.layerX;
    const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
    const newPlaybackPositionSec = (player.getDuration() / 100) * newButtonPositionPercent;

    $(".player__playback-button").css({
      left: `${newButtonPositionPercent}%`
    });

    player.seekTo(newPlaybackPositionSec);
  });

  $(".player__volum").click(e => {
    const volumeBar = $(e.currentTarget);
    const volumeClickedPosition = e.originalEvent.layerX;
    const newVolumButtonPositionPercent = (volumeClickedPosition / volumeBar.width()) * 100;
  
    $(".player__volum-button").css({
      left: `${newVolumButtonPositionPercent}%`
    });
  
    player.setVolume(newVolumButtonPositionPercent);
  })
  

  $(".player__splash").click( e => {
    player.playVideo();
  })
};

const formatTime = timeSec => {
  const roundTime = Math.round(timeSec);

  const minutes = addZero(Math.floor(roundTime / 60));
  const seconds = addZero(roundTime - minutes * 60);

  function addZero(num) {
    return num < 10 ? `0${num}`:num;
  }

  return `${minutes}:${seconds}`;
};

const onPlayerReady = () => {
  let interval;
  const durationSec = player.getDuration();

  $(".player__duration-estimate").text(formatTime(durationSec));

  if (typeof interval != "undefined") {
    clearInterval(interval);
  }

  interval = setInterval(() => {
    const completeSec = player.getCurrentTime();
    const completePercent = (completeSec / durationSec) * 100;

    $(".player__playback-button").css({
      left: `${completePercent}%`
    });

    $(".player__duration-complited").text(formatTime(completeSec));
  }, 1000);
};

const onPlayerStateChange = event => {
      /* 
      -1 ??? ?????????????????????????????? ?????????? ???? ????????????????
      0 ??? ?????????????????????????????? ?????????? ??????????????????
      1 ??? ??????????????????????????????
      2 ??? ??????????
      3 ??? ??????????????????????
      5 ??? ?????????? ?????????????????? ?? ??????????????
    */
  switch (event.data) {
    case 1:
      playerContainer.addClass("active");
      playerContainer.addClass("paused");
      break;
    
    case 2:
      playerContainer.removeClass("active");
      playerContainer.removeClass("paused");
      break;  
  }
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: '392',
    width: '658',
    videoId: 'tgIqecROs5M',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
    playerVars: {
      controls: 0,
      disablekb: 0,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 0
    }
  });
}

eventsInit();