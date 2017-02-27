$(document).ready(function(){
	//lines is to obtain the text that wasn't placed between tags...also since there were array items that
	//were only empty spaces or full of spaces, there was an attempt (failed) to get them removed
	//lines is for the description part of the links
	var lines = $(".container:nth-child(2)").clone().children().remove().end().text().trim().split("\n");
	for (var i = 0; i < lines.length; i++){
		if (lines[i].match("[a-zA-z0-9-#()]+") == null || lines[i].includes('\U+00B7'))
			lines.splice(i,1);
	}

	var counter = 0;
	//loop is for going through each anchor and getting its title, href and description (description incomplete)
	$("a").each(function(){
		$("#jsontext").append("{<br>" + 
								"\"title\" : \"" + $(this).text().trim() + "\", <br>" +
								"\"href\" : \"" + $(this).attr("href").trim() + "\", <br>" +
								"\"desc\" : \"" + lines[counter]+ "\" <br>" +
							   "},<br>");	
							   counter++;								

	});

});