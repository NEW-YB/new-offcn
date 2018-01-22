// JavaScript Document
$(function(){

	$('.yhbs_yjxl').first().show().siblings('.yhbs_yjxl').hide();
	$('.yhbs_fbbox').first().show().siblings('.yhbs_fbbox').hide();
	
//	手机根字体大小
	var fs=document.documentElement.style.fontSize;
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
			autoH.apply($(this))
		});  
		
		//返回课程锚点
		$("html,body").animate({
			"scrollTop":$(".ms_tt").offset().top
		},300)
	})
	
//	二级系列
	$('.yhbs_fbbox').each(function(){		
		$(this).find('.yhbs_yjbox').first().show().siblings('.yhbs_yjbox').hide;		
	})
	$('.yhbs_yjxl').on("change",function(){
		var ejindex = $(this).find('option:selected').index();
		
		$('.yhbs_fbbox').eq(cityindex).find('.yhbs_yjbox').hide();
		$('.yhbs_fbbox').eq(cityindex).find('.yhbs_yjbox').eq(ejindex).show();
		//点击二级时重新判断特色
		var ejts1=$('.yhbs_fbbox').eq(cityindex).find('.yhbs_yjbox').eq(ejindex).find('.yhbs_ejbox .ejxl_kcts');
		ejts1.each(function() {			
            autoH.apply($(this))				
       	});	
		//返回课程锚点
		$("html,body").animate({
			"scrollTop":$(".ms_tt").offset().top
		},300)
	})

	//开始时如无系列说明，则隐藏
	$(".ejxl_kcts").each(function() {
		var erxi_ts=$(this).find("p").html(); 
		if(erxi_ts==""||erxi_ts==" "){
		  $(this).hide();	
		}
		autoH.apply($(this));
	});

	//判断课程特色高度
	function autoH(){
		var ejtsh1=$(this).find('p').height();
		if(ejtsh1<=0.8*parseFloat(fs)){			
			$(this).find('.ts_right div').css('height','auto');
			$(this).find('.ckgd').hide();		
		}else{			
			$(this).find('.ts_right div').css('height','.8rem');
			$(this).find('.ckgd').show();
		}
	}
	
	//	查看更多
	$('.ckgd').click(function(){
				
		if($(this).hasClass('on')){
			$(this).prev().css('height','0.8rem');
			$(this).removeClass('on');
		}else{
			$(this).prev().css('height','auto');
			$(this).addClass('on');
		}
	})
	
	
	
	divSwitch();

	function divSwitch(){
		var winT= $(document).scrollTop();
		if($(".yhms_ma4").offset().top>winT && winT > $(".yhbs_xlxz").offset().top){
			$('.guding').addClass('yhbs_xlFix');
		}else{
			$('.guding').removeClass('yhbs_xlFix');
		}
		

	}
	$(window).scroll(function(){
		divSwitch();
	})
	$(window).resize(function(){
		divSwitch();
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