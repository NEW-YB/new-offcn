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
	
//	最近开班
	var Sca=document.getElementById('sbox');
	bbScroll( Sca );
	function bbScroll(obj){
		new ttScrollBar({
			container:obj,	//要加滚动条的对象
			isBuffer:true,				//是否开启缓冲效果
			isMouseWheel:true,   		//是否开启鼠标滚动
			isOpenKeyEvent:false,	//是否支持键盘按键
			rollScale:50,				//缓冲最小单位值
			focusObj:'scroll',			//鼠标滚轮焦点对象 可选 document,scroll,scrollBar
			scrollEventType:'mouseover', //mousedown,mouseover 两种类型
			scrollBarClass:'scrollBar',  //class
			scrollHandleClass:'scrollHandle',
			scrollDValue:0  	//滚动的差值,上下的和
		})
	
	}
	
	//内容页右侧 推荐课程
	$('.zglh_imah a').find('span').hide();
	$('.zglh_imah a').mouseover(function(){
		$(this).find('span').show();
		});	
	$('.zglh_imah a').mouseout(function(){
		$(this).find('span').hide();
		})
	
//	内容页导航栏最后一个加样式
	$('.zgmbx_nav a:last').css('color','#000000');

	
		//分页
$(".select_txt,.selet_open").hover(function(event){   
	$(".option").hide();
	$(this).siblings(".option").show();
	$(".select_box").removeClass("uiChooseActiveS");
	$(this).parent(".select_box").addClass("uiChooseActiveS");
});

$(document).click(function(event){
	var eo=$(event.target);
	if($(".select_box").is(":visible") && eo.attr("class")!="option" && !eo.parent(".option").length)
	$('.option').hide();
	$(".select_box").removeClass("uiChooseActiveS");									  
});
	
	$(".option a").click(function(){
		var value=$(this).text();
		$(this).parent().siblings(".select_txt").text(value);
		$(".select_value").val(value);
		$(".option").hide();	
		$(".select_box").removeClass("uiChooseActiveS");
	 })

	$(".option").each(function(d) {
        var optionSize=6;
		 var optionLiHeight=$(".option a").height();
		 var optionVarS=$(this).find("a").length;
		 if(optionVarS>optionSize){
			var optionSheight=128;
			$(this).height(optionSheight);
		}else{
			 var optionLiTal=optionVarS*optionLiHeight;
			$(this).height(optionLiTal);	
		};
    });
	$(".option,.uiChooseTable,.mod_select ").mouseleave(function(){
		$(".select_box").removeClass("uiChooseActiveS");
		$(".option").hide();
	});
	
	
//	底部二维码
	$('.zglh_ios').mouseover(function(){
		$(this).addClass('zglh_iosbj');
		$('.zglh_poimg01').show();
		});
	$('.zglh_ios').mouseout(function(){
		$(this).removeClass('zglh_iosbj');
		$('.zglh_poimg01').hide();
		});
	$('.zglh_andr').mouseover(function(){
		$(this).addClass('zglh_andrbj');
		$('.zglh_poimg02').show();
		});
	$('.zglh_andr').mouseout(function(){
		$(this).removeClass('zglh_andrbj');
		$('.zglh_poimg02').hide();
		});

	


})