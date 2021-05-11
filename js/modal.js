$('#forthcomingModal').on('show.bs.modal', function(event) {
	var cite = $(event.relatedTarget).data('cite');
	var item = forthcoming_json[cite];
	var title = item.title;
	$(this).find('.modal-body #forthcomingTitle').html(title);
	$(this).find('.modal-body #forthcomingAuthor').html(item.fullauthor);
	$(this).find('.modal-body #forthcomingName').text(item.target);
	$(this).find('.modal-body #forthcomingAddress').text((item.address != undefined)?item.address:'-');
	$(this).find('.modal-body #forthcomingDate').text((item.date != undefined)?item.date:'-');
	$(this).modal('handleUpdate');
});

$('#journalModal').on('show.bs.modal', function(event) {
	var cite = $(event.relatedTarget).data('cite');
	var item = journal_json[cite];
	var title = item.title;
	if(item.url)
		title = '<a href="'+item.url+'">'+item.title+'</a>';
	$(this).find('.modal-body #journalTitle').html(title);
	$(this).find('.modal-body #journalAuthor').html(item.fullauthor);
	$(this).find('.modal-body #journalName').text(item.journal);
	$(this).find('.modal-body #journalVolume').text(item.volume);
	$(this).find('.modal-body #journalNumber').text((item.number != undefined)?item.number:'-');
	$(this).find('.modal-body #journalDate').text((item.date != undefined)?item.date:'-');
	if(item.pages != undefined){
		$(this).find('.modal-body #journalPagesTitle').text('Pages:');
		$(this).find('.modal-body #journalPages').text(item.pages);
	}else if(item.paper != undefined){
		$(this).find('.modal-body #journalPagesTitle').text('Article Number:');
		$(this).find('.modal-body #journalPages').text(item.paper);
	}else{
		$(this).find('.modal-body #journalPagesTitle').text('Pages:');
		$(this).find('.modal-body #journalPages').text('-');
	}
	$(this).find('.modal-body #journalDoi').text((item.doi != undefined)?item.doi:'-');
	$(this).find('.modal-body #journalAbstract').html(item.abstract);
	$(this).modal('handleUpdate');
});

$('#confModal').on('show.bs.modal', function(event) {
	var cite = $(event.relatedTarget).data('cite');
	var item = conf_json[cite];
	var title = item.title;
	if(item.url)
		title = '<a href="'+item.url+'">'+item.title+'</a>';
	$(this).find('.modal-body #confTitle').html(title);
	$(this).find('.modal-body #confAuthor').html(item.fullauthor);
	$(this).find('.modal-body #confName').text(item.booktitle);
	$(this).find('.modal-body #confAddress').text(item.address);
	$(this).find('.modal-body #confDate').text(item.date);
	$(this).find('.modal-body #confPages').text((item.pages != undefined)?item.pages:'-');
	$(this).find('.modal-body #confDoi').text((item.doi != undefined)?item.doi:'-');
	$(this).find('.modal-body #confAbstract').html(item.abstract);
	$(this).modal('handleUpdate');
});

$('#preprintModal').on('show.bs.modal', function(event) {
	var cite = $(event.relatedTarget).data('cite');
	var item = preprint_json[cite];
	var title = item.title;
	if(item.url)
		title = '<a href="'+item.url+'">'+item.title+'</a>';
	$(this).find('.modal-body #preprintTitle').html(title);
	$(this).find('.modal-body #preprintAuthor').html(item.fullauthor);
	$(this).find('.modal-body #preprintName').text(item.journal);
	$(this).find('.modal-body #preprintDate').text(item.date);
	$(this).find('.modal-body #preprintAbstract').html(item.abstract);
	$(this).modal('handleUpdate');
});

$('#thesisModal').on('show.bs.modal', function(event) {
	var cite = $(event.relatedTarget).data('cite');
	var item = thesis_json[cite];
	var title = item.title;
	if(item.url)
		title = '<a href="'+item.url+'">'+item.title+'</a>';
	$(this).find('.modal-body #thesisTitle').html(title);
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

$('#patentModal').on('show.bs.modal', function(event) {
	var cite = $(event.relatedTarget).data('cite');
	var item = patent_json[cite];
	var title = item.title;
	if(item.url)
		title = '<a href="'+item.url+'">'+item.title+'</a>';
	if(item.title2)
		title = title+'<br><b>Title (English):</b> '+item.title2;
	$(this).find('.modal-body #patentTitle').html(title);
	$(this).find('.modal-body #patentAuthor').html(item.fullauthor);
	$(this).find('.modal-body #patentRegion').text(item.address);
	$(this).find('.modal-body #patentPubDate').text((item.number != undefined)?item.pubDate:'-');
	$(this).find('.modal-body #patentNumber').text((item.number != undefined)?item.number:'-');
	$(this).find('.modal-body #patentFiledDate').text(item.filedDate);
	$(this).find('.modal-body #patentAppNumber').text(item.appNumber);
	$(this).find('.modal-body #patentAbstract').html(item.abstract);
	$(this).modal('handleUpdate');
});

