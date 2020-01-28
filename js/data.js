var forthcoming_json = {};
$.getJSON("js/forthcoming.json?nocache="+(new Date()).getTime(), function(json) {
	if(json.success){
		forthcoming_json = json;
		var code = '<h4><b>Forthcoming Papers</b></h4>';
		code += '<ul class="list-group" id="list">';
		for(cite in json){
			var item = json[cite];
			code += '<li class="list-group-item">'+item.author+', "';
			code += item.title;
			code += '," to appear in <i>'+item.target+'</i>. [<a href="#" data-toggle="modal" data-target="#forthcomingModal" data-cite="'+cite+'">details</a>]</li>';
		}
		code += '</ul><br>';
		$('#forthcoming').html(code);
	}else{
		$('#forthcoming').html('');
	}
});

var journal_json = {};
$.getJSON("js/journal.json?nocache="+(new Date()).getTime(), function(json) {
	journal_json = json;
	var code = '<ul class="list-group" id="list">';
	for(cite in json){
		var item = json[cite];
		code += '<li class="list-group-item">'+item.author+', "';
		if(item.url)
			code += '<a href="'+item.url+'">';
		code += item.title;
		if(item.url)
			code += '</a>';
		code += '," <i>'+item.journal+'</i>, vol. '+item.volume+', no. '+item.number+', '+item.date+', pp. '+item.pages+'. [<a href="#" data-toggle="modal" data-target="#journalModal" data-cite="'+cite+'">details</a>]</li>';
	}
	code += '</ul>';
	$('#journal').html(code);
});

var conf_json = {};
$.getJSON("js/conf.json?nocache="+(new Date()).getTime(), function(json) {
	conf_json = json;
	var code = '<ul class="list-group" id="list">';
	for(cite in json){
		var item = json[cite];
		code += '<li class="list-group-item">'+item.author+', "';
		if(item.url)
			code += '<a href="'+item.url+'">';
		code += item.title;
		if(item.url)
			code += '</a>';
		code += '," <i>'+item.booktitle+'</i>, '+item.address+', '+item.date+', pp. '+item.pages+'. [<a href="#" data-toggle="modal" data-target="#confModal" data-cite="'+cite+'">details</a>]</li>';
	}
	code += '</ul>';
	$('#conf').html(code);
});

var preprint_json = {};
$.getJSON("js/preprint.json?nocache="+(new Date()).getTime(), function(json) {
	preprint_json = json;
	var code = '<ul class="list-group" id="list">';
	for(cite in json){
		var item = json[cite];
		code += '<li class="list-group-item">'+item.author+', "';
		if(item.url)
			code += '<a href="'+item.url+'">';
		code += item.title;
		if(item.url)
			code += '</a>';
		code += '," <i>'+item.journal+'</i>, '+item.date+'. [<a href="#" data-toggle="modal" data-target="#preprintModal" data-cite="'+cite+'">details</a>]</li>';
	}
	code += '</ul>';
	$('#preprint').html(code);
});

var thesis_json = {};
$.getJSON("js/thesis.json?nocache="+(new Date()).getTime(), function(json) {
	thesis_json = json;
	var code = '<ul class="list-group" id="list">';
	for(cite in json){
		var item = json[cite];
		code += '<li class="list-group-item">'+item.author+', "';
		if(item.url)
			code += '<a href="'+item.url+'">';
		code += item.title;
		if(item.url)
			code += '</a>';
		code += '," '+item.type+', '+item.department+', '+item.school+', '+item.address+', '+item.date+'. [<a href="#" data-toggle="modal" data-target="#thesisModal" data-cite="'+cite+'">details</a>]</li>';
	}
	code += '</ul>';
	$('#thesis').html(code);
});

var patent_json = {};
$.getJSON("js/patent.json?nocache="+(new Date()).getTime(), function(json) {
	patent_json = json;
	var code = '<ul class="list-group" id="list">';
	for(cite in json){
		var item = json[cite];
		code += '<li class="list-group-item">'+item.author+', "';
		if(item.url)
			code += '<a href="'+item.url+'">';
		code += item.title;
		if(item.url)
			code += '</a>';
		code += '," ';
		if(item.address === "US")
			code += 'U.S. Patent ';
		else
			code += item.address+' Patent ';
		if(item.number)
			code += item.number+', issued '+item.pubDate+'. ';
		else
			code += 'App. '+item.appNumber+', filed '+item.filedDate+'. Patent Pending. ';
		code += '[<a href="#" data-toggle="modal" data-target="#patentModal" data-cite="'+cite+'">details</a>]</li>';
	}
	code += '</ul>';
	$('#patent').html(code);
});

