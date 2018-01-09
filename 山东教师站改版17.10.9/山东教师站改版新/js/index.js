;(function(){
//	顶部滑过效果
	$(".mob_see,.mob_ewm").mouseover(function(){
		$('.mob_ewm').show();
	})
	$(".mob_ewm").mouseout(function(){
		$('.mob_ewm').hide();
	})
//	微信
	$(".top_wx,.wx_ewm").mouseover(function(){
		$('.wx_ewm').show();
	})
	$(".wx_ewm").mouseout(function(){
		$('.wx_ewm').hide();
	})
//	微博
	$(".top_wb,.wb_ewm").mouseover(function(){
		$('.wb_ewm').show();
	})
	$(".wb_ewm").mouseout(function(){
		$('.wb_ewm').hide();
	})
	
//	导航栏
	$(".jszp_list li").mouseover(function(){
		$(this).find(".zhaopin_fu").show();
	})
	$(".jszp_list li").mouseout(function(){
		$(this).find(".zhaopin_fu").hide();
	})
	
//	第一部分切换
	$(".sec1_change_box a").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".s1_change").hide();
		$(".s1_change").eq($(this).index()).show();
		
	})
	
	
//	备考资料切换
	var bkIndex=0;
	var tkIndex=0;
	$(".bkzl_box").each(function(){
		$(this).find(".bk_big_change").first().show();
	})
	$(".bk_big_change").each(function(){
		$(this).find(".bkzl_change").first().show();
	})
	
//	备考指导
	$(".bkzl_left_head .zp_zg a").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		bkIndex=$(this).index();
		$(".bkzl_box").eq(0).find(".bk_big_change").hide();
		$(".bkzl_box").eq(0).find(".bk_big_change").eq(bkIndex).show();
	})
	
	$(".bkzl_box").eq(0).find(".bkzl_left .bkzl_list").each(function(){
		$(this).find("li").mouseover(function(){
			$(this).addClass("active").siblings().removeClass("active");
			$(".bkzl_box").eq(0).find(".bk_big_change").eq(bkIndex).find(".bkzl_change").hide();
			$(".bkzl_box").eq(0).find(".bk_big_change").eq(bkIndex).find(".bkzl_change").eq($(this).index()).show();
		})
	})
//	$(".bkzl_left .bkzl_list").each(function(){
//		$(this).find("li").mouseover(function(){
//			$(this).addClass("active").siblings().removeClass("active");
//			$(".bk_big_change").eq(bkIndex).find(".bkzl_change").hide();
//			$(".bk_big_change").eq(bkIndex).find(".bkzl_change").eq($(this).index()).show();
//		})
//	})
//	考试题库
	$(".kstk_left_head .zp_zg a").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		tkIndex=$(this).index();
		$(".bkzl_box").eq(1).find(".bk_big_change").hide();
		$(".bkzl_box").eq(1).find(".bk_big_change").eq(tkIndex).show();
	})
	
	$(".bkzl_box").eq(1).find(".bkzl_left .bkzl_list").each(function(){
		$(this).find("li").mouseover(function(){
			$(this).addClass("active").siblings().removeClass("active");
			$(".bkzl_box").eq(1).find(".bk_big_change").eq(tkIndex).find(".bkzl_change").hide();
			$(".bkzl_box").eq(1).find(".bk_big_change").eq(tkIndex).find(".bkzl_change").eq($(this).index()).show();
		})
	})
	

	$(".bkzl_right").each(function(){
		$(this).find(".zp_zg a").mouseover(function(){
			$(this).addClass("active").siblings().removeClass("active");
			$(this).parents(".bkzl_right").find(".lm_enter_change").hide();
			$(this).parents(".bkzl_right").find(".lm_enter_change").eq($(this).index()).show();	
		})
	})
	
	
	$(".tsjc_left_head .zp_zg a").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".book_list").hide();
		$(".book_list").eq($(this).index()).show();
	})
//	$(".bkzl_right .zp_zg a").mouseover(function(){
//		$(this).addClass("active").siblings().removeClass("active");
//		$(".bkzl_right .lm_enter_change").hide();
//		$(".bkzl_right .lm_enter_change").eq($(this).index()).show();		
//	})
	

	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);


//	教招栏目页切换
	$(".zg_fconn1 span").mouseover(function () {
	    $(this).addClass("active").siblings().removeClass("active");
	    $(".zg_fconn2 .zg_fcon1").eq($(this).index()).css("display","block").siblings().css("display","none")
	})
	$(".zg_fconn11 span").mouseover(function () {
	    $(this).addClass("active").siblings().removeClass("active");
	    $(".zg_fconn23 .zg_fcon13").eq($(this).index()).css("display","block").siblings().css("display","none")
	})

//	内容页收藏函数
	function AddFavorite(sURL, sTitle){
		try
		{
			window.external.addFavorite(sURL, sTitle);
		}
		catch (e)
		{
			try
			{
				window.sidebar.addPanel(sTitle, sURL, "");
			}
			catch (e)
			{
				alert("加入收藏失败，请使用Ctrl+D进行添加");
			}
		}
	}
	
	$(".zg_fconneifrro4oli2").click(function(){
		AddFavorite(window.location,document.title);
	})
		
})();
