$(document).ready(function(){
	// $.ajax({
	// 	type: "POST",
	// 	url: "compsciinfo.json",
	// 	dataType: "json",
	// 	success: parseJson,
	// });
	$.getJSON("compsciinfo.json" , parseJson);
});


function parseJson(json){
	console.log("Successfully parsed JSON.");
	$("#content").append(json.category);
	
}