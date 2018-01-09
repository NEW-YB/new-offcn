;$(function(){
	
	//	切换
	$(".ques_answ a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parent().next().find(".change").hide();
		$(this).parent().next().find(".change").eq($(this).index()).show();
	})
	
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
	//锚点
	$(".department a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var sc_top=$(".sec"+$(this).index()+"").offset().top;
		$("body,html").animate({
			scrollTop:sc_top
		},500);
	})
	
})




