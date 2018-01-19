$(function(){
//	锚点切换
	$(".nav_list li").click(function(){
		var sctop=$(".sec"+($(this).index()+1)+" .title").offset().top;
		$("html,body").animate({
			scrollTop:sctop
		},500)
	})
	
//	课程优惠切换
	$(".xy_list li").click(function(){
		
		if($(this).hasClass("active")){
			return;
		}else{
			$(this).parents(".youhui_box").find(".youhui").hide();
			$(this).parents(".youhui_box").find(".youhui").eq($(this).index()).show();
		}
	})
	
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
})