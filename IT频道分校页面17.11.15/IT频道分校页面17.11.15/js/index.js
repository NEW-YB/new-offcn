// JavaScript Document

$(function(){
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
//	头部导航
	$(".zg_top_nav li.live").each(function(x){
		$(this).mouseenter(function(){
			$(".zg_top_nav li.live").removeClass("zg_nav_h");
			$(this).addClass("zg_nav_h");
			$(".zg_yy_box").hide();
			$(".zg_yy_box:eq("+x+")").show();
		})
	})
	$(".zg_top_left").mouseleave(function(){
		$(".zg_top_nav li.live").removeClass("zg_nav_h");
		$(".zg_yy_box").hide();
	})
	
	
	//logo 省份选择
	$(".zghd_city").mouseenter(function(){
		$(".zghd_city").addClass("on");
		$(".zghd_cityh").show();
	})
	$(".logo_pro").mouseleave(function(){
		$(".zghd_city").removeClass("on");
		$(".zghd_cityh").hide();
	})
	
		//	友情链接
	$('.tab_link').on('hover','a',function(){
		var self = $(this);
		var mo = self.parent().find('a');
		self.addClass('on').siblings('a').removeClass('on');
		$('.zg_itlk').eq(mo.index(self)).show().siblings('.zg_itlk').hide();
	})
	
	
	
	//学员就业 切换
	$(".zgjy_xytop a").each(function(d){
        $(this).hover(function(){
			$(".zgjy_xytop a").removeClass("on");
			$(this).addClass("on");
			$(".zgjy_botadd").hide();
			$(".zgjy_botadd:eq("+d+")").show();
		})
    });
	
	
	
		//就业指南 切换
	$('.zgkc_bt ').on('mouseover','a',function(){
		var self = $(this);
		var mo = self.parent().find('a');
		self.addClass('on').siblings('a').removeClass('on');
		$('.zgkc_ul ').eq(mo.index(self)).show().siblings('.zgkc_ul ').hide();
	})


	
//	最近开班
	var Sca=document.getElementById('sbox');
	bbScroll( Sca );
	function bbScroll(obj){
		new ttScrollBar({
			container:obj,	//要加滚动条的对象
			isBuffer:true,				//是否开启缓冲效果
			isMouseWheel:true,   		//是否开启鼠标滚动
			isOpenKeyEvent:false,	//是否支持键盘按键
			rollScale:100,				//缓冲最小单位值
			focusObj:'scroll',			//鼠标滚轮焦点对象 可选 document,scroll,scrollBar
			scrollEventType:'mouseover', //mousedown,mouseover 两种类型
			scrollBarClass:'scrollBar',  //class
			scrollHandleClass:'scrollHandle',
			scrollDValue:0  	//滚动的差值,上下的和
		})
	
	}
	

//学员故事

		//学员故事
	
		$('.zglh_jyxb').append($('.zglh_jyxb').html());
		var Wid=$('.zglh_jyxb li').width();
		var Siz=$('.zglh_jyxb li').size();
		var sm=0;
		var arr = [];
		var link='';
		
		for(var i=0;i<Siz/2; i++){
			sm=i;
			arr.push( $('zglh_jyxb li').eq(sm).find('img').attr('link') )
		}
	
		
		var oli="";
		for(var i=0; i<Siz/2; i++){
			oli+="<li></li>"
		}
		$('.zg_gsy').html(oli);
		$('.zg_gsy li').eq(0).addClass('on').siblings('on');
	
		var link_0 	=$('.zglh_jyxb li').eq(0).find('img').attr('link');
		
	
	$('.zg_gsy li').mouseover(function(){
		//初始化
		$('.zglh_jyxb li').find('iframe').remove();
		$('.zghj_mid').find('iframe').remove();
		$('.zglh_jyxb').stop(true);		
		sm=$(this).index();
		$('.zglh_jyxb').animate({left:-sm*Wid},300);
		$('.zg_gsy li').eq(sm).addClass("on").siblings().removeClass("on");	
	})	
	
		$('.zglh_jyxb').css({width:Siz*Wid});

		$('.zglh_jyxb img').click(function(){
			$('.zghj_mid').find('iframe').remove();
			$('.zglh_jyxb li').find('iframe').remove();	
			var self = $(this);
			$(this).parent().append('<iframe src="" frameborder="0"></iframe>').find('iframe').attr('src',self.attr('link'))
			
			
			
			
	})
	
	
	
	var win=$(window).width()
	if(win<=1200){
		$(".bannger_inbox").css({"width":"1200px","margin-left":"-600px"});
	}
	
	


})