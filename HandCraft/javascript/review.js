$(document).ready(function(){
	$("#container2").hide();
	$("#test").click(function(){
		$("#container2").show("slow");
		$("#test").hide();
		$(".hide").hide();
	});
});