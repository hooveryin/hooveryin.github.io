$.getJSON("js/conf.json", function(json) {
	$('#conf').html('<ul class="list-group" id="list">');
	for(cite in json){
		var item = eval("json."+cite);
		$('#conf').append('<li class="list-group-item">'+item.author+', "');
		if(item.url)
			$('#conf').append('<a href="'+item.url+'">');
		$('#conf').append(item.title);
		if(item.url)
			$('#conf').append('</a>');
		$('#conf').append('," <i>'+item.booktitle+'</i>, ');
		if(item.address)
			$('#conf').append(item.address+', ');
		$('#conf').append(item.date+', pp. '+item.pages+'.</li>');
	}
	$('#conf').append('</ul>');
});

