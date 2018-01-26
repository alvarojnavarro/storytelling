// 
// MUSIC PLAYBACK
// 
var music = document.getElementById('music'); // id for audio element
var pButton = document.getElementById('pButton'); // play button

// play button event listenter
pButton.addEventListener("click", play);


//Play and Pause
function play() {
	// start music
	if (music.paused) {
		music.play();
		// remove play, add pause
		pButton.className = "";
		pButton.className = "pause";
	} else { // pause music
		music.pause();
		// remove pause, add play
		pButton.className = "";
		pButton.className = "play";
	}
}

// 
// FIRST SCREEN
// 
$("#hero").click(function(){
	$(".hero").fadeOut(250, function(){
		$(".swiper-container").animate({
			opacity: 1
		});
	});
});

// 
// NAVIGATION SELECTION
//
$('.nav-item').on('click', function(){
	$('.nav .active').removeClass('active');
	$(this).addClass('active');
});
// detect the content by url upon load and update the nav-item accordingly
$(document).ready(function () {
	if (window.location.href.indexOf("#one") > -1) {
		$('#nav_one').addClass('active');
	} else
	if (window.location.href.indexOf("#two") > -1) {
		$('#nav_two').addClass('active');
	} else
	if (window.location.href.indexOf("#three") > -1) {
		$('#nav_three').addClass('active');
	} else
	if (window.location.href.indexOf("#four") > -1) {
		$('#nav_four').addClass('active');
	} else
	if (window.location.href.indexOf("#five") > -1) {
		$('#nav_five').addClass('active');
	} else
	if (window.location.href.indexOf("#six") > -1) {
		$('#nav_six').addClass('active');
	}
});
// detect the current slide upon arrows click and update the nav-item accordingly

$('.swiper-button').on('click', function() {
	var upcomingSlide = $('.swiper-slide-active').data("hash");
	
	//$('.nav-item[href="#'+upcomingSlide+'"]').addClass('active');

	if( $('.nav-item[href="#'+upcomingSlide+'"]') ){
		$('.nav-item').removeClass('active');
		$('.nav-item[href="#'+upcomingSlide+'"]').addClass('active');
	}
});