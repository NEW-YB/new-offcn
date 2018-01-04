//设置foot下的当前时间
var nowtime=new Date();
var nowyear=nowtime.getFullYear();
$(".nowtime").html(nowyear);

//	表格点击预约听课出弹层
	$(".four_tab a").click(function(){
		$(".mask").show();
		$(".tc").show();
	})
	$(".cha").click(function(){
		$(".mask").hide();
		$(".tc").hide();
	})
	
	//内容五课程切换
	var xlIndex=0;
	$(".class_list").each(function(){
		$(this).find("li:first").addClass("active").siblings().removeClass("active");
	});
	$(".cont_box").each(function(){
		$(this).find(".class_cont:first").show().siblings().hide();
	})
	
	
	$(".xilie_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		xlIndex=$(this).index();
		if($(".class_list").eq(xlIndex).length){
			$(".class_box").show();
			$(".class_list").hide();
			$(".class_list").eq(xlIndex).show();
		}else{
			$(".class_box").hide();
		}		
		$(".cont_box").hide();
		$(".cont_box").eq(xlIndex).show();
	})
	
	$(".class_list li").click(function(){
		$(".class_list").eq(xlIndex).find("li").removeClass("active");
		$(this).addClass("active");
		$(".cont_box").eq(xlIndex).find(".class_cont").hide();
		$(".cont_box").eq(xlIndex).find(".class_cont").eq($(this).index()).show();
	})




//关闭悬浮窗
	$(".close").click(function(){
		$(".rightFixed").hide();
		$(".open").show();
	})
	$(".open").click(function(){
		$(".rightFixed").show();
		$(".open").hide();
	})
