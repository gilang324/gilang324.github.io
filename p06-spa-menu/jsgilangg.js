
$(document).ready(function() {
    $("nav ul li a").click(function(){
        $(".saya").slideToggle("medium");

	$('nav ul li.saya').each(function(index, el) {
		var sayaID = el.id.split('_')[1];
		$('.saya#' + sayaID).hide();
	});
});

$('nav').delegate('.saya', 'click', function(event) {
	var pilihIsi = this.id.split('_')[1];
	console.log(pilihIsi);
	document.location.hash = pilihIsi;

	$('.aku:visible').fadeOut('medium', function() {
		$('.saya#' + pilihIsi).fadeIn('medium');
	});

	var $this = $(this);
	$this.removeClass('saya').addClass("rumah");
    $this.siblings().addClass('saya').removeClass('rumah');

    });
});