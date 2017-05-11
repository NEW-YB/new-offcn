$(".five_list li").mouseover(function(){
	$(".newFive_list li").eq($(this).index()).show();
});
$(".newFive_list li").mouseout(function(){
	$(".newFive_list li").hide();
})

var nowtime=new Date();
var nowyear=nowtime.getFullYear();
$(".nowtime").html(nowyear)