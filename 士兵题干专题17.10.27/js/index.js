;(function(){
	
//	切换课程
	$(".tab_list li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".tab_change").hide();	
		$(".tab_change").eq($(this).index()).show();
	})
	
	
	//当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
//	返回顶部
	$(".totop").click(function(){
		$("body,html").animate({"scrollTop":"0"},500)
	})
	
//	悬浮锚点
	$(".fix_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
//		var scrtop=$(".sec"+($(this).index()+1)+"").offset().top;
		var scrtop=$(".dingwei").eq($(this).index()).offset().top;
		$("body,html").animate({"scrollTop":scrtop})
	})
	
	$(document).scroll(function(){
		$(".dingwei").each(function(index){
			if($(document).scrollTop()+$(window).height()/2>$(this).offset().top){
				if(index==$(".dingwei").length-1){
					$(".fix_list li").removeClass("active");
					$(".fix_list li").eq(index).addClass("active");
					return;
				} 
				if($(document).scrollTop()<$(".dingwei").eq(index+1).offset().top){
					$(".fix_list li").removeClass("active");
					$(".fix_list li").eq(index).addClass("active");
				}			
			}
		})
	})
	
})()
