;(function(){
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
	
	/*来源表单*/
	$(".from").val(window.location.pathname+window.location.search);	
	
	
//	悬浮窗
	$(".fixBtnOpen").click(function(){

		$(".indexFix").stop().animate({right:0},500);

		//$(".fixBtnOpen").addClass("fixBtnClose");

		$(".fixBtnOpen").hide();

		$(".fixBtnClose").show();

		});

	$(".fixBtnClose").click(function(){

		$(".fixBtnOpen").show();

		$(".fixBtnClose").hide();

		$(".indexFix").animate({right:-162},500);

	});
	

//	六大优惠动画
	var timer=null;
    $(".quan").hover(function(){ 
    	
		// 判断浏览器
		var browser=navigator.appName 
		var b_version=navigator.appVersion 
		var version=b_version.split(";"); 
		var trim_Version=version[1].replace(/[ ]/g,""); 
		if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0"){ 
			$(this).find("img").hide(); 
			$(this).find(".worder").show();
			return;
		} 
		else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0"){ 
			$(this).find("img").hide(); 
			$(this).find(".worder").show();
			return;
		} 
		else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0"){ 
			$(this).find("img").hide(); 
			$(this).find(".worder").show();
			return;
		} 
		else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE9.0"){ 
			$(this).find("img").hide(); 
			$(this).find(".worder").show();
			return; 
		} 
    	
    	
    	
        var index=$(this).index();
       	timer=setTimeout(function(){
    		$(".quan img").eq(index).hide();
    		$(".quan .worder").eq(index).show();
//  		$(".quan .worder").css("animation","").eq(index).css({"animation":"word 0.6s forwards"});
    	},800)
        $(".quan img").css("animation","").eq(index).css({"animation":"imgs 1s forwards"});
//      $(".quan .worder").css("animation","").eq(index).css({"animation":"word 0.7s 0.6s forwards","display":"block"});
    },function(){
    	clearTimeout(timer);
    	$(".quan img").show();
    	$(".quan .worder").hide();
        var index=$(this).index()
        $(".quan img").css("animation","");
        
//      $(".quan .worder").css({"animation":"","display":"none"})
    });
	
	
	
	
	
	
	
//	行业大咖切换
	imgauto();
	function imgauto(){
		
		var txt=$('.zg_imolcont ul').html();
		$('.zg_imolcont ul').append(txt);
		var sum=$('.zg_imolcont ul li').size();
		var wid=$('.zg_imolcont ul li').outerWidth(true);
		var num=0;
		$('.zg_imolcont ul').css('width',wid*sum);
		
		$('.zg_iksirg').click(function(){
			$('.zg_imolcont').find('ul').stop(true,true);
			if(num==sum/2-1){
				num=0;
				$('.zg_imolcont ul').css('left',-wid*num);
			}
			num++;
			$('.zg_imolcont ul').animate({'left':-wid*num});
		});
		$('.zg_ikslet').click(function(){
			$('.zg_imolcont').find('ul').stop(true,true);
			if(num==0){
				num=sum/2
				$('.zg_imolcont ul').css('left',-wid*num);
			}
			num--;
			$('.zg_imolcont ul').animate({'left':-wid*num});
		});
		
		$('.zg_imolcont li').click(function(){
		$('.zg_imolcont li').removeClass('on');
		$(this).addClass('on');
		if($(this).index()>sum/2-1){
			var thin=$(this).index()-7
			$('.zg_imolcont li').eq(thin).addClass('on');
		}else{
			var thin=$(this).index()
			$('.zg_imolcont li').eq(thin+7).addClass('on');
		}
				
			
			$('.zg_opso').eq(thin).show().siblings('.zg_opso').hide();
		});
		
		
	}
	
	
	
	
})();
