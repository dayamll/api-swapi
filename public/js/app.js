$(document).ready(function () {
	// Filtros del input
	$('.search').keyup(function () {
		var name = $(this).val().toLowerCase();
		$('.collection').hide();

		$('.collection').each(function () { // filtro por titulo
			var search = $(this).text();
			var $title = $(this).data('title');
			if ($title.indexOf(name) !== -1) {
				$(this).show();
			}
		});
	});
});