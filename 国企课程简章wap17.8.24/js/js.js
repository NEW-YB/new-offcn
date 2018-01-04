// JavaScript Document
$(function(){
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
			  $(this).parent('.ejxl_kcts').find('.ckgd').hide();
			}
			autoH.apply($(this))
		  });
	
	})
	
//	二级系列
	$('.yhbs_yjxl').on("change",function(){
		var ejindex = $(this).find('option:selected').index();
		
		$('.yhbs_fbbox').eq(cityindex).find('.yhbs_yjbox').hide();
		$('.yhbs_fbbox').eq(cityindex).find('.yhbs_yjbox').eq(ejindex).show();
		
		//点击二级时重新判断特色
		var ejts1=$('.yhbs_fbbox').eq(cityindex).find('.yhbs_yjbox').eq(ejindex).find('.yhbs_ejbox .ejxl_kcts');
		ejts1.each(function() {			
            autoH.apply($(this))				
       });	
	})

	$('.yhbs_fbbox').each(function(){		
		$(this).find('.yhbs_yjbox').first().show().siblings('.yhbs_yjbox').hide;		
	})


//	$('.ejbcbox').each(function(){
//		
//		 $(this).find('.bjbox').each(function(){
//		
//			var bjsize = $(this).index();
//			// console.log(bjsize)
//			if(bjsize>1){
//				$(this).hide();
//			}
//			
//		})
//		 
//		$(this).parents('.yhbs_ejbox').find('.ejxl_gda').click(function(){
//			if($(this).hasClass('on')){
//				
//				$(this).siblings('.ejbcbox').find('.bjbox').show();
//				$(this).css('transform','rotate(180deg)');
//				$(this).removeClass('on');
//				
//			}else{
//				
//				$(this).addClass('on');
//				$(this).css('transform','rotate(0)');
//				$(this).siblings('.ejbcbox').find('.bjbox').hide();
//				$(this).siblings('.ejbcbox').find('.bjbox').eq(0).show();
//				$(this).siblings('.ejbcbox').find('.bjbox').eq(1).show();
//			}
//		}) 
//		 
//	})

	
	
	//开始时如无系列说明，则隐藏
	$(".ejxl_kcts").each(function() {
		var erxi_ts=$(this).find("p").html(); 
		if(erxi_ts==""||erxi_ts==" "){
		  $(this).hide();	
		 // $(this).parent('.zgyh_ejbt').find('.ckgd').hide();	
		}
		
		 autoH.apply($(this));
		
	  });

	//判断课程特色高度
	function autoH(){
		var ejtsh1=$(this).find('p').height();
		if(ejtsh1<=0.7*parseFloat(fs)){			
			$(this).find('div').css('height','auto');
			$(this).find('.ckgd').hide();		
		}else{			
			$(this).find('div').css('height','.7rem');
			$(this).find('.ckgd').show();
		}
	}

//	查看更多
	$('.ckgd').click(function(){
				
		if($(this).hasClass('on')){
			$(this).parent('.ejxl_kcts').find('div').css('height','auto');
			$(this).css('transform','rotate(180deg)');
			$(this).removeClass('on');
		}else{
			$(this).parent('.ejxl_kcts').find('div').css('height','.7rem');
			$(this).addClass('on');
			$(this).css('transform','rotate(0)');
			
		}
	})
		
	
	divSwitch();
//	console.log($(".yhbs_nav").offset().top);

	function divSwitch(){
		var winT= $(document).scrollTop();
		var navT=$(".yhbs_nav").offset().top;
		if( winT < navT){
			$(".yhbs_nav").find("a").eq(0).addClass("on").siblings().removeClass("on");
			$('.maodian').removeClass('zg_scFix');
//			$('.yhbs_xlxz').removeClass('yhbs_xlFix');
			$('.guding').removeClass('yhbs_xlFix');
		}else if( $(".yhms_ma2").offset().top > winT && winT >= navT){
			
			$(".yhbs_nav").find("a").eq(0).addClass("on").siblings().removeClass("on");
			$('.maodian').addClass('zg_scFix');			
		}else if( $(".yhbs_ma3").offset().top > winT && winT >= $(".yhms_ma2").offset().top ){
			$('.maodian').addClass('zg_scFix');
//			$('.yhbs_xlxz').removeClass('yhbs_xlFix');	
			$('.guding').removeClass('yhbs_xlFix');
			$(".yhbs_nav").find("a").eq(1).addClass("on").siblings().removeClass("on");
		}else if($(".yhms_ma7").offset().top>winT && winT > $(".yhbs_ma3").offset().top){
			$(".yhbs_nav").find("a").eq(2).addClass("on").siblings().removeClass("on");
			$('.maodian').removeClass('zg_scFix');
//			$('.yhbs_xlxz').addClass('yhbs_xlFix');	
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
	
	
	
	
	$('.ljkq').click(function(){$('html,body').animate({scrollTop:$('.yhms_ma1').offset().top+1}, 800);$(this).addClass('on').siblings('a').removeClass('on');});
	$('.kcxq').click(function(){$('html,body').animate({scrollTop:$('.yhms_ma2').offset().top+1}, 800);$(this).addClass('on').siblings('a').removeClass('on');});
	$('.zzfw').click(function(){$('html,body').animate({scrollTop:$('.yhbs_ma3').offset().top+1}, 800);$(this).addClass('on').siblings('a').removeClass('on');});
	$('.lxwm').click(function(){$('html,body').animate({scrollTop:$('.yhms_ma7').offset().top+1}, 800);$(this).addClass('on').siblings('a').removeClass('on');});

	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
//	底部联系方式切换
	$(".fenbu_list li").first().addClass("active").siblings().removeClass("active");
	$(".fenbu_box").first().show();
	$(".fenbu_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".fenbu_box").hide();
		$(".fenbu_box").eq($(this).index()).show();
	})
})