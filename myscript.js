$(document).ready(function(){
	//get JSON data from file
	$.getJSON("compsciinfo.json",function(json){
		//populate the sidebar with category types
		addSidebar(json);
		//display relevant resources when sidebar heading is clicked
		$("#sidebar").on('click', 'ul', function(){
			loadResources(json, event);
		});

	});

	$("#btnHome").click(gotoHome);
	
	
});


function addSidebar(json){
	console.log("Successfully parsed JSON.");
	//loop through json to add content types to sidebar
	for	(var type in json.category){
		$('#sidebar').append("<ul>" + type + "</h3>");
	}

}

function loadResources(json, event){
		console.log("loadResources");
		type = $(event.target).text();
		$("#resources").html("<h3>" + "Category: " + type + "</h3>");
		for (var i = 0; i < json.category[type].length; i++){
			var title = json.category[type][i].title;
			var desc =  json.category[type][i].desc;

			$("#resources").append("<a href='" + desc + "' >" + title + "</a>" +
								 	"<p>-" + desc + "</p>");
		}
}

function gotoHome(){
	$("#resources").html("<p>Select a category for resources on a specific language.</p>");
}