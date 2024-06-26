var field_types = [
	{"type":"nc", "color":"primary", "name":"network coding"},
	{"type":"it", "color":"success", "name":"information theory"},
	{"type":"comm", "color":"info", "name":"networking and communication"},
	{"type":"math", "color":"warning", "name":"mathematics"},
	{"type":"crypto", "color":"secondary", "name":"cryptography"}
	{"type":"misc", "color":"light", "name":"misc"}
];

function html_encode(input) {
	const textArea = document.createElement("textarea");
	textArea.innerText = input;
	return textArea.innerHTML.split("<br>").join("\n");
}

var forthcoming_json = {};
$.getJSON("js/forthcoming.json?nocache="+(new Date()).getTime(), function(json) {
	forthcoming_json = json;
	var empty = true;
	var code = '<h4><b>Forthcoming Papers</b></h4>';
	code += '<ul class="list-group" id="list">';
	for(cite in json){
		empty = false;
		var item = json[cite];
		code += '<li class="list-group-item border-0">'+item.author+', "';
		code += item.title;
		if(item.title.slice(-1) != '!' && item.title.slice(-1) != '?')
			code += ',';
		code += '" to appear in <i>'+item.target+'</i>';
		if(item.address != undefined)
			code += ', '+item.address;
		if(item.date != undefined)
			code += ', '+item.date;
		code += '. [<a href="#" data-toggle="modal" data-target="#forthcomingModal" data-cite="'+cite+'">details</a>]</li>';
	}
	code += '</ul><br>';
	$('#forthcoming').html((empty)?'':code);
});

var journal_json = {};
$.getJSON("js/journal.json?nocache="+(new Date()).getTime(), function(json) {
	var code = '<ul class="list-group" id="list" name="journal-list">';
	for(cite in json){
		var item = json[cite];
		item.field_count = (item.field != undefined) ? item.field.split(";").length : 0;
		journal_json[cite] = item;
		code += '<li id="'+cite+'" class="list-group-item border-0">'+item.author+', "';
		if(item.url != undefined)
			code += '<a href="'+item.url+'">';
		code += item.title;
		if(item.url != undefined)
			code += '</a>';
		if(item.title.slice(-1) != '!' && item.title.slice(-1) != '?')
			code += ',';
		code += '" <i>'+item.journal+'</i>, vol. '+item.volume;
		if(item.number != undefined)
			code += ', no. '+item.number;
		if(item.date != undefined)
			code += ', '+item.date;
		if(item.pages != undefined)
			code += ', pp. '+item.pages;
		else if(item.paper != undefined)
			code += ', Art. no. '+item.paper;
		code += '. [<a href="#" data-toggle="modal" data-target="#journalModal" data-cite="'+cite+'">details</a>]';
		if(item.field_count > 0){
			var field = item.field.split(";");
			var flag = true;
			for(var i = 0; i < field_types.length; i++){
				if($.inArray(field_types[i]["type"], field) > -1){
					if(flag)
						code += '&nbsp;';
					code += '<span class="badge badge-'+field_types[i]["color"]+'">&nbsp;</span>';
					flag = false;
				}
			}
		}
		code += '</li>';
	}
	code += '</ul>';
	$('#journal').html(code);
});

var conf_json = {};
$.getJSON("js/conf.json?nocache="+(new Date()).getTime(), function(json) {
	var code = '<ul class="list-group" id="list" name="conf-list">';
	for(cite in json){
		var item = json[cite];
		item.field_count = (item.field != undefined) ? item.field.split(";").length : 0;
		conf_json[cite] = item;
		code += '<li id="'+cite+'" class="list-group-item border-0">'+item.author+', "';
		if(item.url != undefined)
			code += '<a href="'+item.url+'">';
		code += item.title;
		if(item.url != undefined)
			code += '</a>';
		if(item.title.slice(-1) != '!' && item.title.slice(-1) != '?')
			code += ',';
		code += '" <i>'+item.booktitle+'</i>, '+item.address+', '+item.date;
		if(item.pages != undefined)
			code += ', pp. '+item.pages;
		code += '. [<a href="#" data-toggle="modal" data-target="#confModal" data-cite="'+cite+'">details</a>]';
		if(item.field_count > 0){
			var field = item.field.split(";");
			var flag = true;
			for(var i = 0; i < field_types.length; i++){
				if($.inArray(field_types[i]["type"], field) > -1){
					if(flag)
						code += '&nbsp;';
					code += '<span class="badge badge-'+field_types[i]["color"]+'">&nbsp;</span>';
					flag = false;
				}
			}
		}
		code += '</li>';
	}
	code += '</ul>';
	$('#conf').html(code);
});

var preprint_json = {};
$.getJSON("js/preprint.json?nocache="+(new Date()).getTime(), function(json) {
	preprint_json = json;
	var code = '<ul class="list-group" id="list" name="preprint-list">';
	for(cite in json){
		var item = json[cite];
		item.field_count = (item.field != undefined) ? item.field.split(";").length : 0;
		code += '<li id="'+cite+'" class="list-group-item border-0">'+item.author+', "';
		if(item.url != undefined)
			code += '<a href="'+item.url+'">';
		code += item.title;
		if(item.url != undefined)
			code += '</a>';
		if(item.title.slice(-1) != '!' && item.title.slice(-1) != '?')
			code += ',';
		code += '" <i>'+item.journal+'</i>, '+item.date+'. [<a href="#" data-toggle="modal" data-target="#preprintModal" data-cite="'+cite+'">details</a>]';
		if(item.field_count > 0){
			var field = item.field.split(";");
			var flag = true;
			for(var i = 0; i < field_types.length; i++){
				if($.inArray(field_types[i]["type"], field) > -1){
					if(flag)
						code += '&nbsp;';
					code += '<span class="badge badge-'+field_types[i]["color"]+'">&nbsp;</span>';
					flag = false;
				}
			}
		}
		code += '</li>';
	}
	code += '</ul>';
	$('#preprint').html(code);
});

var dataset_json = {};
$.getJSON("js/dataset.json?nocache="+(new Date()).getTime(), function(json) {
	dataset_json = json;
	var code = '<ul class="list-group" id="list">';
	for(cite in json){
		var item = json[cite];
		code += '<li class="list-group-item border-0">'+item.author+', '+item.date+', "';
		code += '<a href="'+item.url+'">'+item.title+'</a>';
		if(item.title.slice(-1) != '!' && item.title.slice(-1) != '?')
			code += ',';
		code += '" <i>'+item.source+'</i>, <a href="'+item.url+'">'+html_encode(item.url)+'</a> [<a href="#" data-toggle="modal" data-target="#datasetModal" data-cite="'+cite+'">details</a>]</li>';
	}
	code += '</ul>';
	$('#dataset').html(code);
});

var thesis_json = {};
$.getJSON("js/thesis.json?nocache="+(new Date()).getTime(), function(json) {
	thesis_json = json;
	var code = '<ul class="list-group" id="list">';
	for(cite in json){
		var item = json[cite];
		code += '<li class="list-group-item border-0">'+item.author+', "';
		if(item.url != undefined)
			code += '<a href="'+item.url+'">';
		code += item.title;
		if(item.url != undefined)
			code += '</a>';
		if(item.title.slice(-1) != '!' && item.title.slice(-1) != '?')
			code += ',';
		code += '" '+item.type+', '+item.department+', '+item.school+', '+item.address+', '+item.date+'. [<a href="#" data-toggle="modal" data-target="#thesisModal" data-cite="'+cite+'">details</a>]</li>';
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
		code += '<li class="list-group-item border-0">'+item.author+', "';
		if(item.url != undefined)
			code += '<a href="'+item.url+'">';
		code += item.title;
		if(item.url != undefined)
			code += '</a>';
		if(item.title.slice(-1) != '!' && item.title.slice(-1) != '?')
			code += ',';
		code += '" ';
		if(item.address === "US")
			code += 'U.S. Patent ';
		else
			code += item.address+' Patent ';
		if(item.number != undefined)
			code += item.number+', issued '+item.pubDate+'. ';
		else
			code += 'App. '+item.appNumber+', filed '+item.filedDate+'. Patent Pending. ';
		code += '[<a href="#" data-toggle="modal" data-target="#patentModal" data-cite="'+cite+'">details</a>]</li>';
	}
	code += '</ul>';
	$('#patent').html(code);
});

