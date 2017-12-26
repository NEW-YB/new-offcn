;(function(){
	
//	给每个系列加序号
function add0(n){
	if(n<10){
		return "0" + n;
	}else{
		return "" + n;
	}
}
$(".cityindex_box").each(function(){
	$(this).find(".all_kc").each(function(index){
		$(this).find(".xuhao").html(add0(index+1))
	})
})
	//初始化class名
	$(".site_list li:first").addClass("active");
	
	$(".class_list:first").show();
	$('.class_list').each(function(){
		$(this).find('li:first').addClass('active').siblings('li').removeClass('active');
	})
	
	$(".cityindex_box:first").show();
	$(".wai2").each(function(index,item){
		var re=/^\s*$/;
		if($(this).html()==""||re.test($(this).html())){
			$(this).parent().parent().parent().remove();
		}
	})
	
	
	var cityIndex=0;
	//点击选择城市
	$(".site_list li").click(function(){
		$(".site_list li").removeClass("active");
		$(this).addClass("active");
		cityIndex=$(this).index();
		$(".class_list").hide();
		$(".class_list").eq(cityIndex).show();
		$(".cityindex_box").hide();
		$(".cityindex_box").eq(cityIndex).show();	
		
		$(".dizhi").html($(this).html())
		$(".zcxfOm ul").hide();
		$(".zcxfOm ul").eq(cityIndex).show();
	})
	
	//点击选择城市课程系列
	$(".class_list li").click(function(){
		$(".class_list").eq(cityIndex).find("li").removeClass("active");
		$(this).addClass("active");
		if( !$(".cityindex_box").eq(cityIndex).find(".all_kc").eq($(this).index()).html() ) return;
		$("html,body").scrollTop($(".cityindex_box").eq(cityIndex).find(".all_kc").eq($(this).index()).offset().top)
//		$(".cityindex_box").eq(cityIndex).find(".all_kc").hide();
//		$(".cityindex_box").eq(cityIndex).find(".all_kc").eq($(this).index()).show();
		
		
		
		var li1=$('.zcxfOm ul').eq(cityIndex).find("li").eq($(this).index());
		$('.zcxfOm ul').eq(cityIndex).find("li").removeClass("on1");
		li1.addClass("on1");
		if(li1.find("div a").html()==""||li1.find("div a").html()==undefined){
			$('.zcxfOm ul').eq(cityIndex).find("li").removeClass("on");
			
		}else{
			
			$('.zcxfOm ul').eq(cityIndex).find("li").removeClass("on");
			li1.addClass("on")
		}
		
		
	})
		
	//为考试保驾护航  切换
	$(".huhang_list li").click(function(){
		$(".huhang_list li").removeClass("active");
		$(this).addClass("active");
		$(".huhang_tab").hide();
		$(".huhang_tab").eq($(this).index()).show();
	})
		
	//底部地址切换
	var diquIndex=0;
	$(".diqu_list li:first").addClass("active");
	$(".fenbu_list:first").show();
	$('.fenbu_list').each(function(){
		$(this).find('li:first').addClass('active').siblings('li').removeClass('active');
	});
	$(".fb_chilist:first").show();
	$('.fb_chilist').each(function(){
		$(this).find('li:first').show().siblings('li').hide();
	});
	$(".diqu_list li").click(function(){	
		$(".diqu_list li").removeClass("active");
		$(this).addClass("active");
		diquIndex=$(this).index();
		$(".fenbu_list").hide();
		$(".fenbu_list").eq($(this).index()).show();
		$(".fb_chilist").hide();
		$(".fb_chilist").eq($(this).index()).show();		
	})
	$(".fenbu_list li").click(function(){
		$(".fenbu_list").eq(diquIndex).find("li").removeClass("active");
		$(this).addClass("active");
		$(".fb_chilist").eq(diquIndex).find("li").hide();
		$(".fb_chilist").eq(diquIndex).find("li").eq($(this).index()).show();
	})
	
	
	//右侧悬浮窗
	$('.zxtel dt').click(function(){
		$(this).hide();
		$('.zxtel dd').show();
		$('.qqzx dd').hide(); 
		$('.qqzx dt').show();  
	  
	})
  
  	$('.qqzx dt').click(function(){
		$(this).hide();
		$('.zxtel dd').hide();
		$('.qqzx dd').show(); 
		$('.zxtel dt').show();  
	  
	})
	$('.yxf_close').click(function(){		
		$('.ycxfO').hide();  
	  	$('.ycxfC').show();
		
	})

	$('.ycxfC').click(function(){
		$(this).hide();
		$('.ycxfO').show();  	
		
	})
	
//	左侧悬浮窗
//返回顶部
$(".top").click(function(){$("html,body").animate({scrollTop:"0px"},800);})
//左侧定位初始化
$(".dizhi").html($(".site_list li:first").html())
//跳转到面授课程。	
$(".zcxfOm a:first").click(function(){
	$("html,body").scrollTop($(".xuanke").offset().top)
})

	
	$('.zcxfOm ul').first().show().siblings('ul').hide();
	
	$('.zcxfOm ul').each(function() {  
		//判断是否有二级内容，加下箭头。
		$(this).find('li').each(function() {
			var ejn=$(this).find('.ejna a').html();
			if(ejn==''||ejn==undefined){		
				$(this).find('.yjra').css('background','none');					
			}				
		});	 
		$(this).find('li:first').addClass('on1').siblings('li').removeClass('on').removeClass('on1');
		var ejn2=$(this).find('li:first .ejna a').html();
		if(ejn2==''){		
			$(this).find('li:first').addClass('on1').siblings('li').removeClass('on').removeClass('on1')
		}else{			
			$(this).find('li:first').addClass('on').siblings('li').removeClass('on').removeClass('on1')	
			$(this).find('li:first .ejna').show(); 
		}
		
		$(this).find("li").click(function(){
			$(this).addClass('on1').siblings('li').removeClass('on1')
			var ejn=$(this).find('.ejna a').html();
			$(".class_list").eq(cityIndex).find("li").removeClass("active");
			$(".class_list").eq(cityIndex).find("li").eq($(this).index()).addClass("active");
			if( !$(".cityindex_box").eq(cityIndex).find(".all_kc").eq($(this).index()).html() ) return;
			$("html,body").scrollTop($(".cityindex_box").eq(cityIndex).find(".all_kc").eq($(this).index()).offset().top)
//			$(".cityindex_box").eq(cityIndex).find(".all_kc").hide();
//			$(".cityindex_box").eq(cityIndex).find(".all_kc").eq($(this).index()).show();
			console.log(ejn)
			if(ejn==''){				
				$(this).addClass('on1').siblings('li').removeClass('on').removeClass('on1')
				
			}else{
				
				$(this).addClass('on').siblings('li').removeClass('on').removeClass('on1')	
			
			}
		})
    });

	
//	关闭弹窗
	var num=1;	
	$(".guan_tc").click(function(){
		$('.mask').hide();		
		num++;
		if(num>3){
			clearInterval(dsq);
		}		
	});
	
	var dsq = setInterval(function(){		
		$('.mask').show()	
	},30000);
	
	
	
	
	
	
	
})();
