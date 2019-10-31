$.getJSON("js/conf.json", function(json) {
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
		code += item.date+', pp. '+item.pages+'.</li>';
	}
	code += '</ul>';
	$('#conf').html(code);
});

