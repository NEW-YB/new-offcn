;(function(){
	//顶部下拉
	$(".zg_top_nav li.live").each(function(x){
		$(this).mouseenter(function(){
			$(".zg_top_nav li.live").removeClass("zg_nav_h");
			$(this).addClass("zg_nav_h");
			$(".zg_yy_box").hide();
			$(".zg_yy_box:eq("+x+")").show();
		});
	});
	$(".zg_topLt").mouseleave(function(){
		$(".zg_top_nav li.live").removeClass("zg_nav_h");
		$(".zg_yy_box").hide();
	});
	
	$(".zg_topRt .icond").each(function(index) {
		$(this).hover(function(){
				$(this).addClass("on");
				$(this).find(".dropbox").show();
			
		},function(){
			$(this).removeClass("on");
			$(this).find(".dropbox").hide();	
		});

    });
	//顶部微信二维码切换
	$(".zg_qhewm a").mouseover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		$(".zg_ewmbox").hide();
		$(".zg_ewmbox").eq($(this).index()).show();
	})
	//全国分站
	$(".quan").hover(function(){
		$(this).addClass("quans");
		$(".quan_fen").show();
	});
	$(".quan_fen").hover(function(){},function(){
		$(".quan").removeClass("quans");
		$(".quan_fen").hide();
	});
	$(".youce").hover(function(){},function(){
		$(".quan").removeClass("quans");
		$(".quan_fen").hide();
	});
	
	//导航
	$('.kj_navm ul .xla').each(function(){
		$(this).hover(function(){
			$(this).addClass('on');
			$(this).find('.kj_dhxl').show();
		},function(){
			$(this).removeClass('on');
			$(this).find('.kj_dhxl').hide();
		});
	});
	
	//cfa首页第一部分右侧距离考试时间
	function lxfEndtime(){
		$(".days").each(function(){
	        var endtime = new Date($(this).attr("endtime")).getTime();//取结束日期(毫秒值)
	        var nowtime = new Date().getTime();        //今天的日期(毫秒值)
	        var youtime = endtime-nowtime;//还有多久(毫秒值)
	        var seconds = youtime/1000;
	        var minutes = Math.floor(seconds/60);
	        var hours = Math.floor(minutes/60);
	        var days = Math.floor(hours/24);
	        var CDay= days ;
	        var CHour= hours % 24;
	        var CMinute= minutes % 60;
	        var CSecond= Math.floor(seconds%60);//"%"是取余运算，可以理解为60进一后取余数，然后只要余数。
	        if(endtime<=nowtime){
	            $(".times").html("<span>0</span>")//如果结束日期小于当前日期就提示过期啦
	        }else{
	        	var dayArr=days.toString().split("");
	        	var dayStr="";
	        	for (var i = 0; i < dayArr.length; i++) {
	        		dayStr+="<span>"+dayArr[i]+"</span>";
	        	}
	           	$(".times").html(dayStr);          //输出有天数的数据
	        }
	  	});
	}
	setTimeout("lxfEndtime()",3600000);
	lxfEndtime();
	
	
	
//	首页第二部分切换
	$(".kc_type a").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".kc_list").hide();
		$(".kc_list").eq($(this).index()).show();
	})
//	首页第三部分报考流程切换
	$(".lc_type a").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parents(".lc_head").parent().find(".lc_change").hide();
		$(this).parents(".lc_head").parent().find(".lc_change").eq($(this).index()).show();
	})
	
//	首页第四部分老师切换
	$(".uscpa_team_list li").mouseover(function(){
		$(".teacher_intro").hide();
		$(".teacher_intro").eq($(this).index()).show();
	})	

	
	
	
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
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
	

	
})();
//内容页字体大小改变
$(function(){
  	var cont=14;
  	var sum=0;
  	$('.font_big').click(function(){
		if(cont >= 20){
			return false;
		} else{
			cont++;
			sum+=2;
			$('.zg_content').css({'font-size':cont,'line-height':32+sum+"px"});
			$('.zg_content p').css({'font-size':cont,'line-height':32+sum+"px"});
		  }
  	});
  $('.font_small').click(function(){
	  if(cont <= 12){
		  return false;
	  } else{
		  cont--;
		  sum-=2;
		  $('.zg_content').css({'font-size':cont,'line-height':32+sum+"px"});
		  $('.zg_content p').css({'font-size':cont,'line-height':32+sum+"px"});
	  }
  });
	
});
