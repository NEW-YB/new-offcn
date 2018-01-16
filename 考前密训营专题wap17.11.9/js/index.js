$(function(){
//	第五部分切换
	$(".sec5_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".s5_change").hide();
		$(".s5_change").eq($(this).index()).show();
	})
	
	$(".yuanxiao_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".sw_box").hide();
		$(".sw_box").eq($(this).index()).show();
	})
	
})