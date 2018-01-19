;(function(){
//	头部导航滑过效果
//	默认隐藏导航居中
	$(".nav_hua").each(function(){
		var posleft=($(this).find("span").width()-$(this).find(".yincang").width())/2;
		$(this).find("span").css("left",-posleft);
	})
	$(".nav_hua").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	$(".nav_hua").mouseout(function(){
		$(".nav_hua").removeClass("active");
	})
//	首页第一部分切换
	$(".topcen_link a").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parents(".sec_left").find(".sec_main").hide();
		$(this).parents(".sec_left").find(".sec_main").eq($(this).index()).show();
	})
  	
//	首页第三部分切换
	$(".shuju_nav a").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".shuju_change_box").hide();
		$(".shuju_change_box").eq($(this).index()).show();
	})
  	
//	友情链接切换
	$(".uj_yqlj p a").mouseover(function(){
		$(".uj_yqlj p a").removeClass("on");
		$(this).addClass("on");
		$(".uj_yqlj div").hide();
		$(".uj_yqlj div").eq($(this).index()).show();
	})
  	
  	//当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
  	
  	
  	//分页
$(".select_txt,.selet_open").hover(function(event){   
	$(".option").hide();
	$(this).siblings(".option").show();
	$(".select_box").removeClass("uiChooseActiveS");
	$(this).parent(".select_box").addClass("uiChooseActiveS");
});

$(document).click(function(event){
	var eo=$(event.target);
	if($(".select_box").is(":visible") && eo.attr("class")!="option" && !eo.parent(".option").length)
	$('.option').hide();
	$(".select_box").removeClass("uiChooseActiveS");									  
});
	
	$(".option a").click(function(){
		var value=$(this).text();
		$(this).parent().siblings(".select_txt").text(value);
		$(".select_value").val(value);
		$(".option").hide();	
		$(".select_box").removeClass("uiChooseActiveS");
	 })

	$(".option").each(function(d) {
        var optionSize=6;
		 var optionLiHeight=$(".option a").height();
		 var optionVarS=$(this).find("a").length;
		 if(optionVarS>optionSize){
			var optionSheight=128;
			$(this).height(optionSheight);
		}else{
			 var optionLiTal=optionVarS*optionLiHeight;
			$(this).height(optionLiTal);	
		};
    });
	$(".option,.uiChooseTable,.mod_select ").mouseleave(function(){
		$(".select_box").removeClass("uiChooseActiveS");
		$(".option").hide();
	});
  	

	

})();
