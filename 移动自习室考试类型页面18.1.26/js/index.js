$(function(){
	var num=0;
	$(".save_btn").html("保存("+num+")");
	$(".test_list li").not(".xia").click(function(){
		$(this).toggleClass("selected");
		num=0;
			$(".all_city").each(function(){
				num+=$(this).find("span.active").length;
			})
			num+=$(".test_list li.selected").length;
			$(".save_btn").html("保存("+num+")");
	})
	
	$(".test_list li.xia").click(function(){
		$(this).toggleClass("active");
		$(this).next().toggle();
		if($(this).find("span").html()!=0){
			$(this).find("span").show();
		}
	})
	
	$(".all_city").each(function(){
		if($(this).find("span.active").length==0){
			$(this).parent().prev().find("span").hide();
			$(this).parent().prev().find("span").html("0");
		}else{
			$(this).parent().prev().find("span").show();
			$(this).parent().prev().find("span").html($(this).find("span.active").length)
		}
	})
	
	$(".all_city").each(function(){
		$(this).find("span").click(function(){
			$(this).toggleClass("active");
			if($(this).parent().find("span.active").length==0){
				$(this).parent().parent().prev().find("span").hide();
				$(this).parent().parent().prev().find("span").html("0")
			}else{
				$(this).parent().parent().prev().find("span").show();
				$(this).parent().parent().prev().find("span").html($(this).parent().find("span.active").length)
			}
			num=0;
			$(".all_city").each(function(){
				num+=$(this).find("span.active").length;
			})
			num+=$(".test_list li.selected").length;
			$(".save_btn").html("保存("+num+")");
		})
	})
	
	
})