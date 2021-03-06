jQuery(document).ready(function() {

var song;
var tracker = $('.tracker');
var volume = $('.volume');

function initAudio(elem) {
    var url = elem.attr('audiourl');
    var title = elem.text();
    var cover = elem.attr('cover');
    var artist = elem.attr('artist');

    $('.player .title').text(title);
    $('.player .artist').text(artist);
    $('.player .cover').css('background-image', cover);

    song = new Audio(url);
    song.addEventListener("ended", function(){
      stopAudio();

      var next = $(".playlist li.active").next();
      if (next.length == 0) {
          next = $(".playlist li:first-child");
      }
      initAudio(next);

      playAudio();

      song.addEventListener("loadedmetadata", function() {
        tracker.slider("option", "max", song.duration);
      });
    });

    song.addEventListener('timeupdate',function (){
        var curtime = parseInt(song.currentTime, 10);
        tracker.slider('value', curtime);
    });

    $('.playlist li').removeClass('active');
    elem.addClass('active');
}
function playAudio() {
    song.play();

    $('.play').addClass('hidden');
    $('.pause').addClass('visible');
}
function stopAudio() {
    song.pause();

    $('.play').removeClass('hidden');
    $('.pause').removeClass('visible');
}

$('.play').click(function (e) {
    e.preventDefault();

    playAudio();
});

$('.pause').click(function (e) {
    e.preventDefault();

    stopAudio();
});

$('.fwd').click(function (e) {
    e.preventDefault();

    stopAudio();

    var next = $('.playlist li.active').next();
    if (next.length == 0) {
        next = $('.playlist li:first-child');
    }
    $('.play').addClass('hidden');
    $('.pause').addClass('visible');

    initAudio(next);
    song.play(next);

    song.addEventListener("loadedmetadata", function() {
        tracker.slider("option", "max", song.duration);
      });

});

$('.rew').click(function (e) {
    e.preventDefault();

    stopAudio();

    var prev = $('.playlist li.active').prev();
    if (prev.length == 0) {
        prev = $('.playlist li:last-child');
    }
    $('.play').addClass('hidden');
    $('.pause').addClass('visible');

    initAudio(prev);
    song.play(prev);

    song.addEventListener("loadedmetadata", function() {
        tracker.slider("option", "max", song.duration);
      });
});

$('.pl').click(function (e) {
    e.preventDefault();

    $('.playlist').fadeIn(300);   

});

$('.playlist li').click(function () {

    stopAudio();
    initAudio($(this));
    song.play();
    $('.play').addClass('hidden');
    $('.pause').addClass('visible');
});

initAudio($('.playlist li:first-child'));

song.volume = 0.8;

volume.slider({
    range: 'min',
    min: 1,
    max: 100,
    value: 80,
    start: function(event,ui) {},
    slide: function(event, ui) {
        song.volume = ui.value / 100;
    },
    stop: function(event,ui) {},
});

tracker.slider({
    range: 'min',
    min: 0, max: 10,
    start: function(event,ui) {},
    slide: function(event, ui) {
        song.currentTime = ui.value;
    },
    stop: function(event,ui) {}
});
playAudio();

song.addEventListener("loadedmetadata", function() {
        tracker.slider("option", "max", song.duration);
      });
});
