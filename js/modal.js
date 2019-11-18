$('#confModal').on('show.bs.modal', function(event) {
	var cite = $(event.relatedTarget).data('cite');
	var item = eval("conf_json"+cite);
	$(this).find('.modal-title').text('Test');
	$(this).find('.modal-body #confTitle').html('<a href="'+item.url+'">'+item.title+'</a>');
});

