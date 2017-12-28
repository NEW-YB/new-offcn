;(function(){
	
	//扫描二维码变大；
	$(".sao").hover(function(){
		$(".wx").css("transform","scale(2)");
	},function(){
		$(".wx").css("transform","scale(1)");
	})
	//当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);

	//初始化class名
	$('.class_list').each(function(){
		$(this).find('li:first').addClass('active').siblings('li').removeClass('active');
	})
	
	$(".tab_box:first").show();	
	$('.tab_box').each(function(){
		$(this).find('.xilie_tab:first').show().siblings('.xilie_tab').hide()
	})
	var cityIndex=0;
	//点击选择城市
	
	$(".site_list li").click(function(){
		$(".site_list li").removeClass("active");
		$(this).addClass("active");
		cityIndex=$(this).index();
		$(".class_list").hide();
		$(".class_list").eq(cityIndex).show();
		$(".tab_box").hide();
		$(".tab_box").eq(cityIndex).show();	
	})
	
	//点击选择城市课程系列
	$(".class_list li").click(function(){
		$(".class_list").eq(cityIndex).find("li").removeClass("active");
		$(this).addClass("active");
		$(".tab_box").eq(cityIndex).find(".xilie_tab").hide();
		$(".tab_box").eq(cityIndex).find(".xilie_tab").eq($(this).index()).show();
	})
		
	//等你来区域切换
	$(".wait_list li").click(function(){
		$(".wait_list li").removeClass("active");
		$(this).addClass("active");
		$(".wait_box").hide();
		$(".wait_box").eq($(this).index()).show();
	})
	
	
	//返回顶部
	$(".top").click(function(){$("html,body").animate({scrollTop:"0px"},800);})


	
})();
