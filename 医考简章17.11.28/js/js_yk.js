// JavaScript Document
$(function(){
	
	//课程选择
	//初始化class名
	$(".city_select a:first").addClass("active").siblings("a").removeClass("active");
	$(".xilie_box").each(function(){
		$(this).find(".xilie").each(function(index){
			if(index%2){
				$(this).addClass("xilie_oushu");
			}
		})
	})
	$(".xilie_box").each(function(){
		$(this).find(".xilie").each(function(){
			$(this).find(".kecheng_box:first").removeClass("kcaddbg").siblings(".kecheng_box").addClass("kcaddbg");
		})
	})
	$(".xilie_box:first").show();
	//	判断有无内容
	$(".kecheng_name").each(function(index,item){
		var re=/^\s*$/;
		if($(this).html()==""||re.test($(this).html())){
			$(this).parent().remove();
		}
	})
	$(".xilie_jieshao .tese").each(function(index,item){
		var re=/^\s*$/;
		if($(this).html()==""||re.test($(this).html())){
			$(this).parents(".xilie_jieshao").remove();
		}
	})
		
	//判断课程特色高度
	function autoH(){
		$(".xilie_jieshao").each(function(){
			var pH=$(this).find('p').height();
			if(pH<=60){			
				$(this).find('p').css('height','auto');
				$(this).find('.more_content').hide();		
			}else{			
				$(this).find('p').css('height','60');
				$(this).find('.more_content').show();
			}
		})
	}
	autoH();
	//查看更多
	$(".more_content").click(function(){
		if($(this).html()=="查看更多"){
			$(this).prev().css("height","auto");
			$(this).html("收起内容");
			$(this).css("background-image","url(../images/shangjian.png)");
		}else{
			$(this).prev().css("height","64");
			$(this).html("查看更多");
			$(this).css("background-image","url(../images/xiajian.png)");
		}
	})
	
	//点击城市
	var cityIndex=0;
	$(".city_select a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".xilie_box").hide();
		$(".xilie_box").eq($(this).index()).show();
		autoH();
		$(".ckkb ul").hide();
		cityIndex=$(this).index()
		$(".ckkb ul").eq(cityIndex).show();
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
			$(this).parents(".fenbu_main").find(".add_box").hide();
			$(this).parents(".fenbu_main").find(".add_box").eq($(this).index()).show();
		})
	})
	

	//返回顶部
	 $(".totop").click(function(){$("html,body").stop().animate({scrollTop:"0px"},800);})
	
	//右侧悬浮窗
	$('.zxtel dt').click(function(){
		$(this).hide();
		$('.zxtel dd').css('display','inline-block');
		$('.qqzx dd').hide(); 
		$('.qqzx dt').css('display','inline-block');;    
	})
  
  	$('.qqzx dt').click(function(){
		$(this).hide();
		$('.zxtel dd').hide();
		$('.qqzx dd').css('display','inline-block');; 
		$('.zxtel dt').css('display','inline-block');;  	  
	})
	$('.rcgb').click(function(){		
		$('.ycxfO').hide();  
	  	$('.ycxfC').css('display','inline-block')		
	})

	$('.ycxfC').click(function(){		
		$(this).hide();
		$('.ycxfO').css('display','inline-block');  		
	})
	
//	左侧悬浮窗
//	最后一个a链接加class.
	$(".bkzd dd a:last").addClass("lastdda");
//	网校 直播课程锚点
	$(".maodian").eq(0).click(function(){
		$("html,body").stop().animate({scrollTop:$(".zhibo").offset().top},800);
	})
	$(".maodian").eq(1).click(function(){
		$("html,body").stop().animate({scrollTop:$(".wangxiao").offset().top},800);
	})
	var onoff = true;
	$('.zcgb').click(function(){
		onoff = false;
		$('.zcxfO').hide();  
	  	$('.zcxfC').css('display','inline-block')	
	})
	
	$('.zcxfC').click(function(){
		onoff = true;
		$(this).hide();
		$('.zcxfO').show();  			
	})
	
	$('.bkzd dt p').click(function(){
		$('.bkzd dd').css('display','block'); 
		$('.ckkb dd').hide();
		$('.ckkb dt').css('background-image','url(../images/jiantouxia.png)');	
		$(this).css('background-image','url(../images/jiantou.png)');
	})
	$('.ckkb dt').click(function(){		
		$('.bkzd dd').hide();
		$('.bkzd dt p').css('background-image','url(../images/jiantouxia.png)');	
		$('.ckkb dd').css('display','block'); 
		$(this).css('background-image','url(../images/jiantou.png)');
		
   	})


	$('.ckkb ul').first().show().siblings('ul').hide();
	$('.ckkb ul').each(function() {       
		$(this).find('li').each(function(i) {
			var ejn=$(this).find('.ejna a').html();
			if(ejn==''){		
				$(this).find('.yjra').css('background','none');					
			}
			
//			a跳转锚点
			$(this).find(".ejna a").each(function(){
				$(this).click(function(){
					var sctop=$(".xilie_box").eq(cityIndex).find(".xilie").eq($(this).parents("li").index()).find(".kecheng_box").eq($(this).index()).offset().top;	
					$("html,body").stop().animate({scrollTop:sctop},800);
				})
			})
		
		});	           
		var ejn2=$(this).find('li:first .ejna a').html();
		if(ejn2==''){		
			$(this).find('li:first').addClass('on1').siblings('li').removeClass('on').removeClass('on1')
		}else{			
			$(this).find('li:first').addClass('on').siblings('li').removeClass('on').removeClass('on1')	
			$(this).find('li:first .ejna').show(); 
		}
		
		$(this).find("li").click(function(){
			var ejn=$(this).find('.ejna a').html();
			if(ejn==''){				
				$(this).addClass('on1').siblings('li').removeClass('on').removeClass('on1')
			}else{
				$(this).addClass('on').siblings('li').removeClass('on').removeClass('on1')	
			}
		})
    });

	
	
	
	$(window).scroll(function(){
		if($(window).scrollTop()>$('.mianshou_box').offset().top){
		//console.log("展开课表")
				$('.zcxfO').show();
				$('.zcxfC').hide();	
				$('.ckkb dd').show();
				$('.bkzd dd').hide();
				$('.bkzd dt p').css('background-image','url(../images/jiantouxia.png)');	
				$('.ckkb dt').css('background-image','url(../images/jiantou.png)');	
			  
		}else{
		//console.log("展开备考")
			$('.ckkb dd').hide();
			$('.bkzd dd').show();
			$('.ckkb dt').css('background-image','url(../images/jiantouxia.png)');	
			$('.bkzd dt p').css('background-image','url(../images/jiantou.png)');
			if(!onoff){
				$('.zcxfO').hide();
				$('.zcxfC').show();	
			}		
		}
		if($(window).scrollTop()>=$('.zhibo').offset().top){
			$('.ckkb dd').hide();
			$('.bkzd dd').show();
			$('.ckkb dt').css('background-image','url(../images/jiantouxia.png)');	
			$('.bkzd dt p').css('background-image','url(../images/jiantou.png)');
			if(!onoff){
				$('.zcxfO').hide();
				$('.zcxfC').show();	
			}
		}
		
	}) 
	
	

})