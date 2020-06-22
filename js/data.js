var forthcoming_json = {};
$.getJSON("js/forthcoming.json?nocache="+(new Date()).getTime(), function(json) {
	forthcoming_json = json;
	var empty = true;
	var code = '<h4><b>Forthcoming Papers</b></h4>';
	code += '<ul class="list-group" id="list">';
	for(cite in json){
		empty = false;
		var item = json[cite];
		code += '<li class="list-group-item">'+item.author+', "';
		code += item.title;
		code += '," to appear in <i>'+item.target+'</i>';
		if(item.address == undefined)
			code += ', '+item.address;
		if(item.date == undefined)
			code += ', '+item.date;
		code += '. [<a href="#" data-toggle="modal" data-target="#forthcomingModal" data-cite="'+cite+'">details</a>]</li>';
	}
	code += '</ul><br>';
	$('#forthcoming').html((empty)?'':code);
});

var journal_json = {};
$.getJSON("js/journal_nc.json?nocache="+(new Date()).getTime(), function(json) {
	var code = '<ul class="list-group" id="list">';
	for(cite in json){
		var item = json[cite];
		journal_json[cite] = item;
		code += '<li class="list-group-item">'+item.author+', "';
		if(item.url == undefined)
			code += '<a href="'+item.url+'">';
		code += item.title;
		if(item.url == undefined)
			code += '</a>';
		code += '," <i>'+item.journal+'</i>, vol. '+item.volume+', no. '+item.number+', '+item.date+', pp. '+item.pages+'. [<a href="#" data-toggle="modal" data-target="#journalModal" data-cite="'+cite+'">details</a>]</li>';
	}
	code += '</ul>';
	$('#journal_nc').html(code);
});

var conf_json = {};
$.getJSON("js/conf_nc.json?nocache="+(new Date()).getTime(), function(json) {
	var code = '<ul class="list-group" id="list">';
	for(cite in json){
		var item = json[cite];
		conf_json[cite] = item;
		code += '<li class="list-group-item">'+item.author+', "';
		if(item.url == undefined)
			code += '<a href="'+item.url+'">';
		code += item.title;
		if(item.url == undefined)
			code += '</a>';
		code += '," <i>'+item.booktitle+'</i>, '+item.address+', '+item.date;
		if(item.pages == undefined)
			code += ', pp. '+item.pages;
		code += '. [<a href="#" data-toggle="modal" data-target="#confModal" data-cite="'+cite+'">details</a>]</li>';
	}
	code += '</ul>';
	$('#conf_nc').html(code);
});

$.getJSON("js/conf_it.json?nocache="+(new Date()).getTime(), function(json) {
	var code = '<ul class="list-group" id="list">';
	for(cite in json){
		var item = json[cite];
		conf_json[cite] = item;
		code += '<li class="list-group-item">'+item.author+', "';
		if(item.url == undefined)
			code += '<a href="'+item.url+'">';
		code += item.title;
		if(item.url == undefined)
			code += '</a>';
		code += '," <i>'+item.booktitle+'</i>, '+item.address+', '+item.date;
		if(item.pages == undefined)
			code += ', pp. '+item.pages;
		code += '. [<a href="#" data-toggle="modal" data-target="#confModal" data-cite="'+cite+'">details</a>]</li>';
	}
	code += '</ul>';
	$('#conf_it').html(code);
});

var preprint_json = {};
$.getJSON("js/preprint.json?nocache="+(new Date()).getTime(), function(json) {
	preprint_json = json;
	var code = '<ul class="list-group" id="list">';
	for(cite in json){
		var item = json[cite];
		code += '<li class="list-group-item">'+item.author+', "';
		if(item.url == undefined)
			code += '<a href="'+item.url+'">';
		code += item.title;
		if(item.url == undefined)
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
		if(item.url == undefined)
			code += '<a href="'+item.url+'">';
		code += item.title;
		if(item.url == undefined)
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
		if(item.url == undefined)
			code += '<a href="'+item.url+'">';
		code += item.title;
		if(item.url == undefined)
			code += '</a>';
		code += '," ';
		if(item.address === "US")
			code += 'U.S. Patent ';
		else
			code += item.address+' Patent ';
		if(item.number == undefined)
			code += item.number+', issued '+item.pubDate+'. ';
		else
			code += 'App. '+item.appNumber+', filed '+item.filedDate+'. Patent Pending. ';
		code += '[<a href="#" data-toggle="modal" data-target="#patentModal" data-cite="'+cite+'">details</a>]</li>';
	}
	code += '</ul>';
	$('#patent').html(code);
});

