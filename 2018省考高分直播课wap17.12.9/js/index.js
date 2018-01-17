$(function(){
//	点击报名弹出弹框
	$(".sec2_tab2 a").click(function(){
		$(".jxj_tc").hide();
		$(".mask").show();
		$(".tab_tc").show();
	})
	
	$(".close_tab").click(function(){
		$(".mask").hide();
		$(".tab_tc").hide();
	})
	
//	奖学金规则
	$(".fuwu4_main a").click(function(){
		$(".jxj_tc").show();
	})
	
	$(".close_jxj").click(function(){
		$(".jxj_tc").hide();
	})
})