$(document).ready(function(){
	//get JSON data from file
	$.getJSON("compsciinfo.json" , parseJson);
});


function parseJson(json){
	console.log("Successfully parsed JSON.");
	//loop through each category to pass data to HTML page
	for	(var type in json.category){
		$("#content").append("<h3>" + "Category: " + type + "</h3>");
		for (var i = 0; i < json.category[type].length; i++){
			var title = json.category[type][i].title;
			var desc =  json.category[type][i].desc;

			$("#content").append("<a href='" + desc + "' >" + title + "</a>" +
								 	"<p>-" + desc + "</p>");
		}
	}
}