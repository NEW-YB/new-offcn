;(function(){
	//初始给表格最后一行加class名。
	$("table").each(function(){
		$(this).find("tr:last").addClass("lasttr");
	})
	//初始化class名
	$(".city_list li:first").addClass("active");
	//$(".class_list li:first").addClass("active");
	
	$(".class_list:first").show();
	$('.class_list').each(function(){
		$(this).find('li:first').addClass('active').siblings('li').removeClass('active');
	})
	
	$(".cityindex_box:first").show();
	$('.cityindex_box').each(function(){
		$(this).find('.jianzhang:first').show().siblings('.jianzhang').hide()
	})
//	$(".jianzhang:first").show();
	$(".xilie_name").each(function(index,item){
		var re=/^\s*$/;
		if($(this).html()==""||re.test($(this).html())){
			$(this).parent().remove();
		}
	})
	$(".xilie_jieshao").each(function(index,item){
		var re=/^\s*$/;
		if($(this).html()==""||re.test($(this).html())){
			$(this).parent().remove();
		}
	})
	
	$(".xilie_name").each(function(index,item){
		var re=/^\s*$/;
		if($(this).html()==""||re.test($(this).html())){
			$(this).parent().remove();
		}
	})
	$(".xilie_jieshao").each(function(index,item){
		var re=/^\s*$/;
		if($(this).html()==""||re.test($(this).html())){
			$(this).parent().remove();
		}
	})
	
	//$(a).first().show().siblings(a).hide()
	
	var cityIndex=0;
	//点击选择城市
	$(".city_list li").click(function(){
		$(".city_list li").removeClass("active");
		$(this).addClass("active");
		cityIndex=$(this).index();
		$(".class_list").hide();
		$(".class_list").eq(cityIndex).show();
		$(".cityindex_box").hide();
		$(".cityindex_box").eq(cityIndex).show();	
		
		$(".ckkb ul").hide();
		$(".ckkb ul").eq(cityIndex).show();
	})
	
	//点击选择城市课程系列
	$(".class_list li").click(function(){
		$(".class_list").eq(cityIndex).find("li").removeClass("active");
		$(this).addClass("active");
		$(".cityindex_box").eq(cityIndex).find(".jianzhang").hide();
		$(".cityindex_box").eq(cityIndex).find(".jianzhang").eq($(this).index()).show();
		
		
		
		var li1=$('.ckkb ul').eq(cityIndex).find("li").eq($(this).index());
		if(li1.find("div a").html()==""){
			$('.ckkb ul').eq(cityIndex).find("li").removeClass("on");
			li1.addClass("on1")
		}else{
			$('.ckkb ul').eq(cityIndex).find("li").removeClass("on1");
			$('.ckkb ul').eq(cityIndex).find("li").removeClass("on");
			li1.addClass("on")
		}
		
		
	})
		
	//助您成公 所以更加专业小部分切换
	$(".zhuanye_list li").click(function(){
		$(".zhuanye_list li").removeClass("active");
		$(this).addClass("active");
		$(".zhuanye_details").hide();
		$(".zhuanye_details").eq($(this).index()).show();
	})
		
	//底部地址切换
	$(".diqu_list li:first").addClass("active");
	$(".diqu_list li").click(function(){
		$(".diqu_list li").removeClass("active");
		$(this).addClass("active");
		$(".diqu_box").hide();
		$(".diqu_box").eq($(this).index()).show();
	})
	
	//返回顶部
	 $(".top").click(function(){$("html,body").animate({scrollTop:"0px"},800);})
	
	//查看更多
	$(".more_content").click(function(){
		if($(this).html()=="查看更多"){
			$(this).prev().css("height","auto");
			$(this).html("收起内容");
			$(this).css("background-image","url(../images/shangjian.png)");
		}else{
			$(this).prev().css("height","88");
			$(this).html("查看更多");
			$(this).css("background-image","url(../images/xiajian.png)");
		}
	})
	
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
	
	$('.bkzd dt').click(function(){
		
		$('.bkzd dd').css('display','inline-block'); 
		$('.ckkb dd').hide();
		$('.ckkb dt').css('background-image','url(../images/zg_xiangxia.jpg)');	
		
	})
	$('.ckkb dt').click(function(){		
		$('.bkzd dd').hide();
		$('.ckkb dd').css('display','inline-block'); 
		$(this).css('background-image','url(../images/zg_xiangsh.jpg)');
		
   	})
//	
//	$('.ckkb ul').first().show().siblings('ul').hide();
$('.ckkb ul').each(function() {       
		$(this).find('li').each(function() {
			var ejn=$(this).find('.ejna a').html();
			if(ejn==''){		
				$(this).find('.yjra').css('background','none');					
			}				
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
			$(".class_list").eq(cityIndex).find("li").removeClass("active");
			$(".class_list").eq(cityIndex).find("li").eq($(this).index()).addClass("active");
			$(".cityindex_box").eq(cityIndex).find(".jianzhang").hide();
			$(".cityindex_box").eq(cityIndex).find(".jianzhang").eq($(this).index()).show();
			if(ejn==''){				
				$(this).addClass('on1').siblings('li').removeClass('on').removeClass('on1')
				
			}else{
				
				$(this).addClass('on').siblings('li').removeClass('on').removeClass('on1')	
			
			}
		})
    });

	
	
	
	$(window).scroll(function(){
		if($(window).scrollTop()>$('.city').offset().top){
			//console.log("展开课表")
				$('.ckkb dd').show();
				$('.bkzd dd').hide();
				$('.ckkb dt').css('background-image','url(../images/zg_xiangsh.jpg)');	
			  
		}else{
		//console.log("展开备考")
			$('.ckkb dd').hide();
			$('.bkzd dd').show();
			$('.ckkb dt').css('background-image','url(../images/zg_xiangxia.jpg)');	
		}
		if($(window).scrollTop()>$('.wangxiao').offset().top){
			$('.ckkb dd').hide();
			$('.bkzd dd').show();
			$('.ckkb dt').css('background-image','url(../images/zg_xiangxia.jpg)');	
		}
	}) 
  	$(window).scroll(function(){
		//console.log(onoff)
		if($(window).scrollTop()>$('.city').offset().top){
			
			if(!$('.zcxfC').is(":hidden")){
				
				$('.zcxfO').show();
				$('.zcxfC').hide();	
			}
			
		}else{
			if(onoff){
				$('.zcxfO').show();
				$('.zcxfC').hide();	
				
			}else{
				$('.zcxfO').hide();
				$('.zcxfC').show();	
			}
			
		}
		if($(window).scrollTop()>$('.wangxiao').offset().top){
			if(onoff==false){
				$('.zcxfO').hide();
				$('.zcxfC').show();	
			
			}
		}	
	}) 
	
	
	
	
	
	
	
	
})();
