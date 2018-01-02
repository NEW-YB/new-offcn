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
	
//	左侧悬浮窗城市选择
	$(".tc li").click(function(e){
		var self = $(this);
		var text = self.text();
		cityIndex = self.index();
		$(".city_select").text(text);
		self.addClass("active").siblings("li").removeClass("active");
		$(".site_list li").removeClass("active");
		$(".site_list li").eq(cityIndex).addClass("active"); 
		$(".main_change").hide();
		$(".main_change").eq(cityIndex).show();
		main_func();
		e.stopPropagation();
	})
	
	//点击选择城市

	$(".site_list li").click(function(){
		$(".site_list li").removeClass("active");
		$(this).addClass("active");
		cityIndex=$(this).index();
		var text = $(this).text();
		$(".city_select").text(text);
		$(".tc li").removeClass("act");
		$(".tc li").eq(cityIndex).addClass("act"); 
		$(".main_change").hide();
		$(".main_change").eq(cityIndex).show();
		main_func();
	})
	
	//点击选择城市课程系列
//	$(".class_list li").click(function(){
//		$(".class_list").eq(cityIndex).find("li").removeClass("active");
//		$(this).addClass("active");
//		$(".tab_box").eq(cityIndex).find(".xilie_tab").hide();
//		$(".tab_box").eq(cityIndex).find(".xilie_tab").eq($(this).index()).show();
//	})

	
	//等你来区域切换
	$(".wait_list li").click(function(){
		$(".wait_list li").removeClass("active");
		$(this).addClass("active");
		$(".wait_box").hide();
		$(".wait_box").eq($(this).index()).show();
	})
	
	
	
	// 底部城市选择

	$(".area_box .city li").removeClass("act");
	$(".area_box .city li").eq(0).addClass("act");
	$(".locate_box").each(function() {
		$(this).find("ul li").removeClass("act");
		$(this).find("ul li").eq(0).addClass("act");
		$(this).find(".detail_box").hide();
		$(this).find(".detail_box").eq(0).show();
	});
	$(".locate_box").hide();
	$(".locate_box").eq(0).show();
	$(".locate_box .detail_box").each(function() {
		var self = $(this);
		self.find("ul").hide();
		self.find("ul").eq(0).show();
	});
	$(".area_box .city").on("click", "li", function() {
		var self = $(this);
		index = self.index();
		self.siblings("li").removeClass("act");
		self.addClass("act");
		$(".locate_box").hide();
		$(".locate_box").eq(index).show();
	});
	$(".locate_box").on("click", "ul li", function() {
		var self = $(this);
		index = self.index();
		self.siblings("li").removeClass("act");
		self.addClass("act");
		$(".locate_box:visible .detail_box").hide();
		$(".locate_box:visible .detail_box").eq(index).show();
	});
		
	//返回顶部
	$(".top").click(function(){$("html,body").animate({scrollTop:"0px"},800);})

//	左侧悬浮窗
	$(".mao").click(function(){
		var sc_top=$(".maodian"+$(this).index(".left_fix .mao")+"").offset().top;
		$("body,html").animate({
			scrollTop:sc_top
		},500);
	})
		
	var timer=null;
	$(".mao3").hover(function(){
		clearInterval(timer);
		$(".shang,.city_tc").show();
	},function(){
		timer= setInterval(function(){
			$(".shang,.city_tc").hide();
		},200);
	})
	
	$(".close").click(function(){
		$(".left_fix").hide();
		$(".zhida").show();
	})
	$(".zhida").click(function(){
		$(this).hide();
		$(".left_fix").show();
	})
	
	
	
//	..............................................................................
	main_func();
	function main_func() {
		$('.class_list').eq(cityIndex).find("li").click(function(){
			$(this).addClass('active').siblings('li').removeClass('active');
			$('.main_change').eq(cityIndex).find(".tab_wrap").hide();
			$('.main_change').eq(cityIndex).find(".tab_wrap").eq($(this).index()).show();
		});
	  
		$('.main_change:visible').find(".tab_wrap").each(function(index, element) {
//			console.log(index)
//			var index1 = $(this).index();
		  	$(this).find('.xiaoban li').each(function(index) {			
				$(this).click(function(){				
					$(this).addClass('active').siblings('li').removeClass('active');	
//					console.log($(".main_change").eq(cityIndex))
					$(this).parents(".tab_wrap").find(".tab_box").hide();
					$(this).parents(".tab_wrap").find(".tab_box").eq($(this).index()).show();
//					$(".main_change").eq(cityIndex).find(".tab_wrap").eq(index1).find(".tab_box").hide();
//					$(".main_change").eq(cityIndex).find(".tab_wrap").eq(index1).find(".tab_box").eq($(this).index()).show();

				})	
		   });
		});
	}
	
	
})();
