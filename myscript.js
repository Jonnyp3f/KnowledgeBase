$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "compsciinfo.json",
		dataType: "json",
		success: parseJson,
		failure: failure
	});

});

function failure(){
	console.log("Failed to parse json.");
}

function parseJson(json){
	console.log("successfully parsed json");
	console.log(json);
}