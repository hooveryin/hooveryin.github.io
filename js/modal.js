$('#journalModal').on('show.bs.modal', function(event) {
	var cite = $(event.relatedTarget).data('cite');
	var item = eval("journal_json."+cite);
	$(this).find('.modal-body #journalTitle').html('<a href="'+item.url+'">'+item.title+'</a>');
	$(this).find('.modal-body #journalAuthor').html(item.fullauthor);
	$(this).find('.modal-body #journalName').text(item.journal);
	$(this).find('.modal-body #journalVolume').text(item.volume);
	$(this).find('.modal-body #journalNumber').text(item.number);
	$(this).find('.modal-body #journalDate').text(item.date);
	$(this).find('.modal-body #journalPages').text(item.pages);
	$(this).find('.modal-boby #journalDOI').text(item.doi);
	$(this).find('.modal-body #journalAbstract').html(item.abstract);
	$(this).modal('handleUpdate');
});

$('#confModal').on('show.bs.modal', function(event) {
	var cite = $(event.relatedTarget).data('cite');
	var item = eval("conf_json."+cite);
	$(this).find('.modal-body #confTitle').html('<a href="'+item.url+'">'+item.title+'</a>');
	$(this).find('.modal-body #confAuthor').html(item.fullauthor);
	$(this).find('.modal-body #confName').text(item.booktitle);
	$(this).find('.modal-body #confAddress').text(item.address);
	$(this).find('.modal-body #confDate').text(item.date);
	$(this).find('.modal-body #confPages').text(item.pages);
	$(this).find('.modal-boby #confDOI').text(item.doi);
	$(this).find('.modal-body #confAbstract').html(item.abstract);
	$(this).modal('handleUpdate');
});

$('#preprintModal').on('show.bs.modal', function(event) {
	var cite = $(event.relatedTarget).data('cite');
	var item = eval("preprint_json."+cite);
	$(this).find('.modal-body #preprintTitle').html('<a href="'+item.url+'">'+item.title+'</a>');
	$(this).find('.modal-body #preprintAuthor').html(item.fullauthor);
	$(this).find('.modal-body #preprintName').text(item.journal);
	$(this).find('.modal-body #preprintDate').text(item.date);
	$(this).find('.modal-body #preprintAbstract').html(item.abstract);
	$(this).modal('handleUpdate');
});

