$(document).ready(function() {
	$('aside.global > li').click(function() {
		var selectedPartner = $(this).attr('partner');

		$.each($('article.global > section[partner]'), function(idx, partnerSection) {
			var partnerSection = $(partnerSection);
			
			if (partnerSection.attr('partner') == selectedPartner) {
				partnerSection.removeClass('hidden');
			} else {
				partnerSection.addClass('hidden');
			}
		});
	});
});