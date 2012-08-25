$(document).ready(function() {
	$.each($('.unformatted_time'), function(idx, time) {
		time = $(time);

		time.text(new Date(time.attr('time')).toString('hh:mm tt'))
	});

	$.each($('.unformatted_date'), function(idx, date) {
		date = $(date);

		date.text(new Date(date.attr('date')).toString('MM-dd-yyyy'));
	});

	$.each($('.linkify'), function(idx, target) {
		target = $(target);

		target.html(linkifyUrls(target.text()));
	});
});

function linkifyUrls(text) {
  var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  return text.replace(exp, '<a href="$1" target="_blank">$1</a>');
};