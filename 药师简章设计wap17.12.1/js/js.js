// JavaScript Document
$(function(){
//	导航栏加样式
	$(".maodian a").first().addClass("on").siblings("a").removeClass("on");
	$(".maodian a").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		var sctop=$(".dingwei").eq($(this).index()).offset().top+1;
		$('html,body').animate({scrollTop:sctop}, 800)
	})
	
	
	$('.yhbs_yjxl').first().show().siblings('.yhbs_yjxl').hide();
	$('.yhbs_fbbox').first().show().siblings('.yhbs_fbbox').hide();
	
//	手机根字体大小
	var fs=document.documentElement.style.fontSize;
	yhbs_navH=0.61*parseFloat(fs); 
//	初始索引值
	var cityindex=0;
	
	$('.yhbs_fbxz').on("change",function(){
		var tindex = $(this).find('option:selected').index();
		cityindex=tindex;
		
		$('.yhbs_yjxl').hide();
		$('.yhbs_yjxl').eq(tindex).show();
		$('.yhbs_fbbox').hide();
		$('.yhbs_fbbox').eq(tindex).show();
		
		//点击地市时重新判断第一个显示的特色
		$('.yhbs_fbbox').eq(tindex).find(".yhbs_yjbox .ejxl_kcts").each(function() {
			var erxi_ts=$(this).find("p").html(); 
			if(erxi_ts==""||erxi_ts==" "){
			  $(this).hide();	
			}
		  });
	
	})
	
//	二级系列
	$('.yhbs_fbbox').each(function(){		
		$(this).find('.yhbs_yjbox').first().show().siblings('.yhbs_yjbox').hide;		
	})
	$('.yhbs_yjxl').on("change",function(){
		var ejindex = $(this).find('option:selected').index();
		
		$('.yhbs_fbbox').eq(cityindex).find('.yhbs_yjbox').hide();
		$('.yhbs_fbbox').eq(cityindex).find('.yhbs_yjbox').eq(ejindex).show();
		
	})

	//开始时如无系列说明，则隐藏
	$(".ejxl_kcts").each(function() {
		var erxi_ts=$(this).find("p").html(); 
		if(erxi_ts==""||erxi_ts==" "){
		  $(this).hide();	
		}
		
	  });

	
	
	divSwitch();

	function divSwitch(){
		var winT= $(document).scrollTop();
		var navT=$(".yhbs_nav").offset().top;
		if( winT < navT){
			$(".yhbs_nav").find("a").eq(0).addClass("on").siblings().removeClass("on");
			$('.maodian').removeClass('zg_scFix');
			$('.guding').removeClass('yhbs_xlFix');
		}else if( $(".dingwei").eq(1).offset().top > winT && winT >= navT){		
			$(".yhbs_nav").find("a").eq(0).addClass("on").siblings().removeClass("on");
			$('.maodian').addClass('zg_scFix');			
		}else if( $(".dingwei").eq(2).offset().top > winT && winT >= $(".dingwei").eq(1).offset().top ){
			$('.maodian').addClass('zg_scFix');
			$('.guding').removeClass('yhbs_xlFix');
			$(".yhbs_nav").find("a").eq(1).addClass("on").siblings().removeClass("on");
		}else if($(".yhbs_xlxz").offset().top>winT && winT >= $(".dingwei").eq(2).offset().top){
			$(".yhbs_nav").find("a").eq(2).addClass("on").siblings().removeClass("on");
			$('.maodian').addClass('zg_scFix');
			$('.guding').removeClass('yhbs_xlFix');
			
		}else if($(".yhms_ma4").offset().top>winT && winT > $(".yhbs_xlxz").offset().top){
			
			$('.maodian').removeClass('zg_scFix');
			$('.guding').addClass('yhbs_xlFix');
		}else{
			$(".yhbs_nav").find("a").eq(3).addClass("on").siblings().removeClass("on");
			$('.maodian').addClass('zg_scFix');
//			$('.yhbs_xlxz').removeClass('yhbs_xlFix');
			$('.guding').removeClass('yhbs_xlFix');
		}
		

	}
	$(window).scroll(function(){
		divSwitch();
	})
	$(window).resize(function(){
		divSwitch();
	})	
	
	
	
	
	


	
//	课程优势切换
	$(".ys").click(function(){
		$(".sekuai_box div").hide();
		$(".sekuai_box div").eq($(this).index()).show();
		$(".show_box p").hide();
		$(".show_box p").eq($(this).index()).show();
	})
	
	
//	底部地址切换
//	初始化class名
	$(".address_list li:first").addClass("active").siblings("li").removeClass("active");
	$(".fenbu_box:first").show();
	$(".fenbu_box").each(function(){
		$(this).find(".add_box:first").show().siblings(".add_box").hide();
		$(this).find(".fenbu_list li:first").addClass("active").siblings("li").removeClass("active");
	})
//	点击地址
	$(".address_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".fenbu_box").hide();
		$(".fenbu_box").eq($(this).index()).show();
	})
//	点击分部
	$(".fenbu_list").each(function(){
		$(this).find("li").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
			$(this).parents(".fenbu_box").find(".add_box").hide();
			$(this).parents(".fenbu_box").find(".add_box").eq($(this).index()).show();
		})
	})
	
	

	
	
})