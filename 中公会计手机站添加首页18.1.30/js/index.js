$(function() {
//	����Ӧ
//	function fs(){
//		var deviceWidth = document.documentElement.clientWidth;
//		if(deviceWidth > 750) deviceWidth = 750;
//		document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
//	}
//	window.onresize=fs;
//	fs();
	
//	��ҳ��ע
	$(".follow").click(function(){
		$(".zg_daoh").hide();
		$(this).toggleClass("active");
		$(".zg_daoh_cet").toggle();
	})
//	��ҳ��ά���л�
	$(".header_layer div").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
//	��ҳ���ȫ��
	$(".all_nav").click(function(){
		$(".follow").removeClass("active");
		$(".zg_daoh_cet").hide();
		$(".zg_daoh").show();
		
	})
	$(".daoh_box a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".zg_daoh").hide();
	})
	$(".daoh_box div").click(function(){
		$(".zg_daoh").hide();
	})
	
//	��ҳ�ֲ�
	TouchSlide({ 
		slideCell:"#slideBox",
		titCell:".hd ul",
		mainCell:".bd ul",
		effect:"leftLoop",
		autoPage:true, 
		autoPlay:true,
		prevCell:".ban_prev",
		nextCell:".ban_next"
	});
	TouchSlide({ 
		slideCell:"#bm_lunbo",
		titCell:".hd ul",
		mainCell:".bd ul",
		effect:"leftLoop",
		autoPage:true, 
		autoPlay:true
	});
//	��ҳ����ʱ
	function lxfEndtime(){
		$(".days").each(function(){
	        var endtime = new Date($(this).attr("endtime")).getTime();//ȡ��������(����ֵ)
	        var nowtime = new Date().getTime();        //���������(����ֵ)
	        var youtime = endtime-nowtime;//���ж��(����ֵ)
	        var seconds = youtime/1000;
	        var minutes = Math.floor(seconds/60);
	        var hours = Math.floor(minutes/60);
	        var days = Math.floor(hours/24);
	        var CDay= days ;
	        var CHour= hours % 24;
	        var CMinute= minutes % 60;
	        var CSecond= Math.floor(seconds%60);//"%"��ȡ�����㣬�������Ϊ60��һ��ȡ������Ȼ��ֻҪ������
	        if(endtime<=nowtime){
	            $(".times").html("<span>0</span>")//�����������С�ڵ�ǰ���ھ���ʾ������
	        }else{
	        	var dayArr=days.toString().split("");
	        	var dayStr="";
	        	for (var i = 0; i < dayArr.length; i++) {
	        		dayStr+="<span>"+dayArr[i]+"</span>";
	        	}
	           	$(".times").html(dayStr);          //���������������
	        }
	  	});
	}
	setTimeout("lxfEndtime()",3600000);
	lxfEndtime();
	
	//	��ҳ�б��л�
	$(".ksxx_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parents(".test_inform").find(".ksxx_change").hide();
		$(this).parents(".test_inform").find(".ksxx_change").eq($(this).index()).show();
	})
	
	// �ײ�����
	$(".fixed").on("click", ".icon", function() {
		$(".icon").removeClass("act");
		$(this).addClass("act");
		if($(this).index()!=3){
			$(".kc_xia").hide();
		}
		$(this).find(".kc_xia").toggle();
	});
	$(".kc_xia a").click(function(e){
		$(".kc_xia").hide();
		$(this).addClass("active").siblings().removeClass("active");
		e.stopPropagation();
	})
	
	//����foot�µĵ�ǰʱ��
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);

	
//	���ʡ�ݵ�����ַѡ��
	$(".province").click(function(){
		$(this).addClass("active");
		$(".province_box").show();
		$(".mask").show();
		$("html,body").css("overflow","hidden");
	})
	$(".close_province,.province_box a").click(function(){
		$(".province").removeClass("active");
		$(".province_box").hide();
		$(".mask").hide();
		$("html,body").css("overflow","visible");
	})





//	΢�ŷ���
	$(".vxf").click(function() {
		$(".mask2").show();
	})
	$(".mask2").click(function() {
		$(this).hide();
	})
	
	// share
	window._bd_share_config = { 
		"common": { 
			"bdSnsKey": {},
			"bdText": "",
			"bdMini": "2", 
			"bdMiniList": false, 
			"bdPic": "", 
			"bdStyle": "0", 
			"bdSize": "16" 
		}, 
		"share": {}, 
	};
	// window._bd_share_config = {
 //        share : [{
 //            "bdSize" : 16
 //        }],
 //        selectShare : [{
 //            "bdselectMiniList" : ['weixin','tqq','qzone','tsina','sqq']
 //        }]
 //    }   
	with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
	
	

	
	




});