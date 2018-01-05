;(function(){
	//点击报名锚点
	$(".signup").click(function(){
		var choiceTop=$(".choice").offset().top;
		$("html,body").animate({scrollTop:choiceTop},500);
	})
	
	
	//	再战国考
	$(".class_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).css("z-index","3")
		var index=$(this).index();
		if(index==0){
			$(".class_list li").eq(1).css("z-index","2");
			$(".class_list li").eq(2).css("z-index","1");
		}else if(index==1){
			$(".class_list li").eq(0).css("z-index","2");
			$(".class_list li").eq(2).css("z-index","1");
		}else{
			$(".class_list li").eq(0).css("z-index","1");
			$(".class_list li").eq(1).css("z-index","2");
		}
		
		$(".xilie_box").hide();
		$(".xilie_box").eq(index).show();
	})
	
	$(".baoming").click(function(){
		$(".zg_xf").show();
	})
	$(".close").click(function(){
		$(".zg_xf").hide();
	})
	
	
	//当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
	
})()
