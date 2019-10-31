$.getJSON("js/conf.json", function(json) {
	for(cite in json){
		var item = eval("json."+cite);
		$('#conf').text(item.title);
	}
    console.log(json); // this will show the info it in firebug console
});

