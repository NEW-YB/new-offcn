$(function(){
//	报考省份
	$(".bk_province").click(function(){
		$(".mask").show();
		$(".province_fix").stop().animate({
			right:"0"
		},200);
		$(".bk_xiala").removeClass("active");
	})
	$(".mask").click(function(){
		$(".mask").hide();
		$(".province_fix").stop().animate({
			right:"-3rem"
		},200)
	})
	$(".province_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".bk_province").html($(this).html());
		$(".mask").hide();
		$(".province_fix").stop().animate({
			right:"-3rem"
		},200)
	})
	
//	备考下拉框
	$(".bk_xiala").click(function(){
		$(this).toggleClass("active").siblings().removeClass("active");
		$(this).css("z-index","11").siblings(".bk_xiala").css("z-index","10");
	})
	$(".bk_xiala li").click(function(e){
		if( $(this).parents(".bk_xiala").hasClass("bk_study") ){
			$(this).parents(".bk_xiala").find("span").html($(this).html()+"付费学习");
		}else{
			$(this).parents(".bk_xiala").find("span").html($(this).html());
		}
		$(this).parents(".bk_xiala").removeClass("active");
		e.stopPropagation();
	})
	
	//	备考上拉框
	$(".bk_shangla").click(function(){
		$(this).toggleClass("active").siblings().removeClass("active");
		$(this).css("z-index","11").siblings(".bk_shangla").css("z-index","10");
	})
	$(".bk_shangla li").click(function(e){
		if( $(this).parents(".bk_shangla").hasClass("bk_study") ){
			$(this).toggleClass("active");
		}else{
			$(this).parents(".bk_shangla").find("span").html($(this).html());
			$(this).parents(".bk_shangla").removeClass("active");
		}
		
		e.stopPropagation();
	})
	
	$(".sure_btn").click(function(e){
		var str="";
		$(this).parents(".bk_study").find("li").each(function(){
			if ($(this).hasClass("active")) {
				str+=$(this).html()+"、";
			}
		})
		if(str==""){
			$(this).parents(".bk_shangla").find("span").html("选择需要复习的科目（可多选）");
		}else{
			$(this).parents(".bk_shangla").find("span").html(str.slice(0,str.length-1));
		}
		$(this).parents(".bk_shangla").removeClass("active");
		e.stopPropagation();
	})
	
//第二页多选按钮
	$(".check_list li").not(".lastli").click(function(){
		$(this).toggleClass("active");
		$(".check_list li.lastli").removeClass("active");
	})
	$(".check_list li.lastli").click(function(){
		$(this).toggleClass("active").siblings().removeClass("active");
	})

//第三页单选按钮
	$(".radio_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})

//点击下一页
	$(".next_page").first().click(function(){
		if ($(".bk_province").html()!="选择报考省份" & $(".bk_id span").html()!="选择报考身份" & $(".bk_study span").html()!="选择需要复习的科目（可多选）"){
			$(".page2").show();
			$(".page1").hide();
		}
	})
	
	$(".next_page").last().click(function(){
		$(".check_list li").each(function(){
			if ($(this).hasClass("active")) {
				$(".page3").show();
				$(".page2").hide();
			}
		})
		
	})





})