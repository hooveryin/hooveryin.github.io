$('#confModal').on('show.bs.modal', function(event) {
	var cite = $(event.relatedTarget).data('cite');
	var item = eval("conf_json."+cite);
	$(this).find('.modal-title').text('Conference Paper');
	$(this).find('.modal-body #confTitle').html('<a href="'+item.url+'">'+item.title+'</a>');
	$(this).find('.modal-body #confAuthor').html(item.fullauthor);
	$(this).find('.modal-body #confName').html(item.booktitle);
	$(this).find('.modal-body #confAddress').html(item.address);
	$(this).find('.modal-body #confDate').html(item.date);
	$(this).find('.modal-body #confAbstract').html(item.abstract);
	$(this).modal('handleUpdate');
});

