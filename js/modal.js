$('#journalModal').on('show.bs.modal', function(event) {
	var cite = $(event.relatedTarget).data('cite');
	var item = journal_json[cite];
	$(this).find('.modal-body #journalTitle').html('<a href="'+item.url+'">'+item.title+'</a>');
	$(this).find('.modal-body #journalAuthor').html(item.fullauthor);
	$(this).find('.modal-body #journalName').text(item.journal);
	$(this).find('.modal-body #journalVolume').text(item.volume);
	$(this).find('.modal-body #journalNumber').text(item.number);
	$(this).find('.modal-body #journalDate').text(item.date);
	$(this).find('.modal-body #journalPages').text(item.pages);
	$(this).find('.modal-boby #journalDoi').html(item.date);
	$(this).find('.modal-body #journalAbstract').html(item.abstract);
	$(this).modal('handleUpdate');
});

$('#confModal').on('show.bs.modal', function(event) {
	var cite = $(event.relatedTarget).data('cite');
	var item = conf_json[cite];
	$(this).find('.modal-body #confTitle').html('<a href="'+item.url+'">'+item.title+'</a>');
	$(this).find('.modal-body #confAuthor').html(item.fullauthor);
	$(this).find('.modal-body #confName').text(item.booktitle);
	$(this).find('.modal-body #confAddress').text(item.address);
	$(this).find('.modal-body #confDate').text(item.date);
	$(this).find('.modal-body #confPages').text(item.pages);
	$(this).find('.modal-boby #confDoi').html(item.doi);
	$(this).find('.modal-body #confAbstract').html(item.abstract);
	$(this).modal('handleUpdate');
});

$('#preprintModal').on('show.bs.modal', function(event) {
	var cite = $(event.relatedTarget).data('cite');
	var item = preprint_json[cite];
	$(this).find('.modal-body #preprintTitle').html('<a href="'+item.url+'">'+item.title+'</a>');
	$(this).find('.modal-body #preprintAuthor').html(item.fullauthor);
	$(this).find('.modal-body #preprintName').text(item.journal);
	$(this).find('.modal-body #preprintDate').text(item.date);
	$(this).find('.modal-body #preprintAbstract').html(item.abstract);
	$(this).modal('handleUpdate');
});

$('#thesisModal').on('show.bs.modal', function(event) {
	var cite = $(event.relatedTarget).data('cite');
	var item = thesis_json[cite];
	$(this).find('.modal-body #thesisTitle').html('<a href="'+item.url+'">'+item.title+'</a>');
	$(this).find('.modal-body #thesisAuthor').html(item.fullauthor);
	$(this).find('.modal-body #thesisType').text(item.type);
	$(this).find('.modal-body #thesisDept').text(item.department);
	$(this).find('.modal-body #thesisSchool').text(item.school);
	$(this).find('.modal-body #thesisAddress').text(item.address);
	$(this).find('.modal-body #thesisDate').text(item.date);
	$(this).find('.modal-body #thesisAbstract').html(item.abstract);
	$(this).find('.modal-body #thesisAbstractChi').html(item.abstractChi);
	$(this).modal('handleUpdate');
});

