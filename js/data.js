var journal_json = {};
$.getJSON("js/journal.json?nocache="+(new Date()).getTime(), function(json) {
	journal_json = json;
	var code = '<ul class="list-group" id="list">';
	for(cite in json){
		var item = eval("json."+cite);
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
		var item = eval("json."+cite);
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

