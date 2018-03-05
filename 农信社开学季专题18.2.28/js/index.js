$(function(){
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
	$(".miaosha").click(function(){
		$(".mask").show();
		$(".tc1").show();
	})
	
	$(".close_tc").click(function(){
		$(".mask").hide();
		$(this).parent().hide();
	})






//	弹幕
	var num = 0;
	function suiji(){
		num++,
		num>=$(".banposi p").length&&(num=0),$box.eq(num).css({top:Math.ceil(540*Math.random())}),$box.eq(num).animate({left:"-100%"},12e3,"linear",function(){$(this).removeAttr("style").css({top:Math.ceil(540*Math.random())})})
	}
	var num=-1,$box=$(".banposi p"),looper=setInterval(suiji,2500);


$(".guan_danmu").click(function(){
	$(".banposi p").hide();
	clearInterval(looper);
})


















	
});