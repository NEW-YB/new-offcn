;(function(){
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
//	第九部分鼠标放上去切换
	$(".daoxiang_list li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".dx").hide();
		$(".dx").eq($(this).index()).show();
	})
	
//	第十二部分老师切换
	$(".team_list li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".team_person").hide();
		$(".team_person").eq($(this).index()).show();
	})
	
	//	第十三部分老师切换
	$(".hj_list li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".hj_box").hide();
		$(".hj_box").eq($(this).index()).show();
	})
	
	
	
	
	/*来源表单*/
	$("#from").val(window.location.pathname+window.location.search);	
	
//	左侧悬浮窗
	$(".close_l").click(function(){
		$(this).parent().hide();
	})
	
	//	点击视频
	$(".rotatebox").on("click",".play_v",function(){
		$(".iframe_box").show();
		var srcNew=$(".iframe_box").find("iframe").attr("_src");
		$(".iframe_box").find("iframe").attr("src",srcNew);
		setTimeout(function(){
			$(".iframe_box").find(".close").show();
		},1000)
	})
	$(".close").click(function(){
		$(this).parent().hide();
		$(this).prev().attr("src","");
		$(this).hide();
	})
	
	$(".ieplay").click(function(){
		$(".iframe_box").show();
		var srcNew=$(".iframe_box").find("iframe").attr("_src");
		$(".iframe_box").find("iframe").attr("src",srcNew);
		setTimeout(function(){
			$(".iframe_box").find(".close").show();
		},1000)
	})
	
	$(".rotate_left a").click(function(){
		$(".cg_box").hide();
		$(".cg_box").eq($(this).index()).show();
	})
	
	
	// 判断浏览器
	var browser=navigator.appName 
	var b_version=navigator.appVersion 
	var version=b_version.split(";"); 
	var trim_Version=version[1].replace(/[ ]/g,""); 
	if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0"){ 
		$(".normal_bro").hide();
		$(".ie_bro").show();
		return;
	} 
	else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0"){ 
		$(".normal_bro").hide();
		$(".ie_bro").show();
		return;
	} 
	else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0"){ 
		$(".normal_bro").hide();
		$(".ie_bro").show();
		return;
	} 
	else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE9.0"){ 
		$(".normal_bro").hide();
		$(".ie_bro").show();
		return; 
	} 
	
	
	
	
	
})();



