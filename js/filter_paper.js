function filter_paper(btn, type){
	var state = btn.getAttribute('class').indexOf('outline');
	if(state > -1){
		btn.setAttribute('class', btn.getAttribute('class').replace("outline-", ""));
		$('ul[name="'+type+'-list"]').children().each(function(){
			var item = eval(type+"_json")[$(this).attr("id")];
			if(item.field != undefined){
				if($.inArray(btn.getAttribute('id'), item.field.split(";")) > -1){
					item.field_count++;
					if(item.field_count > 0){
						$(this).toggle(true);
					}
				}
			}
		});
	}else{
		btn.setAttribute('class', btn.getAttribute('class').replace("btn-", "btn-outline-"));
		$('ul[name="'+type+'-list"]').children().each(function(){
			var item = eval(type+"_json")[$(this).attr("id")];
			if(item.field != undefined){
				if($.inArray(btn.getAttribute('id'), item.field.split(";")) > -1){
					item.field_count--;
					if(item.field_count == 0){
						$(this).toggle(false);
					}
				}
			}
		});
	}
	$('ul[name="'+type+'-list"] li:visible').filter(':odd').css("background-color", "#F2F2F2");
	$('ul[name="'+type+'-list"] li:visible').filter(':even').css("background-color", "#FFFFFF");
}

