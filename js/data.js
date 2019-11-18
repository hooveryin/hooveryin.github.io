var conf_json = {};
$.getJSON("js/conf.json", function(json) {
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
		code += '," <i>'+item.booktitle+'</i>, ';
		if(item.address)
			code += item.address+', ';
		code += item.date+', pp. '+item.pages+'. [<a href="#" data-toggle="modal" data-target="#confModal" data-cite="'+cite+'">details</a>]</li>';
	}
	code += '</ul>';
	$('#conf').html(code);
});

