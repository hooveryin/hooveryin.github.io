$('#journalModal').on('show.bs.modal', function(event) {
	var cite = $(event.relatedTarget).data('cite');
	var item = eval("journal_json."+cite);
	$(this).find('.modal-body #journalTitle').html('<a href="'+item.url+'">'+item.title+'</a>');
	$(this).find('.modal-body #journalAuthor').html(item.fullauthor);
	$(this).find('.modal-body #journalName').html(item.journal);
	$(this).find('.modal-body #journalVolume').html(item.volume);
	$(this).find('.modal-body #journalNumber').html(item.number);
	$(this).find('.modal-body #journalDate').html(item.date);
	$(this).find('.modal-body #journalPages').html(item.pages);
	$(this).find('.modal-boby #journalDOI').html(item.doi);
	$(this).find('.modal-body #journalAbstract').html(item.abstract);
	$(this).modal('handleUpdate');
});

$('#confModal').on('show.bs.modal', function(event) {
	var cite = $(event.relatedTarget).data('cite');
	var item = eval("conf_json."+cite);
	$(this).find('.modal-body #confTitle').html('<a href="'+item.url+'">'+item.title+'</a>');
	$(this).find('.modal-body #confAuthor').html(item.fullauthor);
	$(this).find('.modal-body #confName').html(item.booktitle);
	$(this).find('.modal-body #confAddress').html(item.address);
	$(this).find('.modal-body #confDate').html(item.date);
	$(this).find('.modal-body #confPages').html(item.pages);
	$(this).find('.modal-boby #confDOI').html(item.doi);
	$(this).find('.modal-body #confAbstract').html(item.abstract);
	$(this).modal('handleUpdate');
});

