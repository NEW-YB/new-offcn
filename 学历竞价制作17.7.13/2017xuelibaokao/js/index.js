;(function(){
	//banner区
	function banner(){
		var index = 1;
		var len = $(".banner .list").find("li").length;
		var time;
		$(".banner .btn li").eq(0).addClass('hover');
		$(".banner .list li").eq(0).css("z-index","1");
		$(".banner .btn li").mouseover(function(){
				index = $(".banner .btn li").index(this);
				show(index);							
			})
		time = setInterval(function(){
				show(index);
				index++;
				if(index==len){index = 0}
			},5000);
		$(".banner .list li").eq(0).fadeIn(900).siblings("li").fadeOut(600);
		function show(index){
			$(".banner .btn li").eq(index).addClass('hover').siblings("li").removeClass('hover');
			$(".banner .list li").eq(index).fadeIn(900).siblings("li").fadeOut(600);
		}
		$(".list").mouseover(function(){
			clearInterval(time)
		});
		$(".list").mouseout(function(){
			time = setInterval(function(){
				show(index);
				index++;
				if(index==len){index = 0}
			},5000);
		})
	}
	banner();
	
//	关闭右侧弹窗
	$(".you_close").click(function(){
		$(".rightFix").hide();
	})
	
//	关闭左侧弹窗
	$(".zuo_close").click(function(){
		$(".leftFix").hide();
	})
	
	//当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
})()


