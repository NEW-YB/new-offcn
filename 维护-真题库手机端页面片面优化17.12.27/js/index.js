$(function(){
	
	var json=`{
		"公务员":{
	   	"国家":"http://www.jd.com",
	   	"北京":"http://www.offcn.com",
	   	"山东":"http://hao.360.cn",
	   	"你写":"http://www.amazon.com"
	   	},
	   	"其他考试":{
	   		"国企招聘":"https://www.taobao.com/",
	   		"事业单位":"http://www.163.com/"
	   	}
	}`
	
	var data=JSON.parse(json);
	
	
	
	var orgHtml=$(".type_box").html();
	var testIndex=0;
	$(".test_box").click(function(){
		$(".type_dropdown").hide();
		if($(".test_dropdown").is(":hidden")){
			$(".mask").show();
			$(".test_dropdown").show();
		}else{
			$(".mask").hide();
			$(".test_dropdown").hide();
		}
	})
	
//	点击考试类型弹框
	$(".test_dropdown p").click(function(){		
		$(".type_box").html(orgHtml);
		$(".fast_search").attr("href","javascript:void(0)")
		$(this).addClass("active").siblings().removeClass("active");
		testIndex=$(this).index();
		$(this).parent().hide();
		$(".test_box").html($(this).html());
		$(".mask").hide();
	})
	
//	点击类型
	$(".type_box").click(function(){
		
		if($(".mask").is(":hidden")){
			$(".mask").show();
			$(".type_dropdown").eq(testIndex).show();	
		}else{
			if($(".test_dropdown").is(":hidden")){
				$(".mask").hide();
				$(".type_dropdown").eq(testIndex).hide();	
			}else{
				$(".test_dropdown").hide();
				$(".type_dropdown").eq(testIndex).show();	
			}
		}
		
	})
	
	
	
	//	点击类型弹框
	
	$(".province_list li a").click(function(){
		$(this).parents(".province_list").find("a").removeClass("active");
		$(this).addClass("active");	
		$(this).parents(".type_dropdown").hide();	
		$(".type_box").html($(this).html()+orgHtml);
		$(".mask").hide();
		
		
//		复制链接
		for(var attr in data){
			if($(".test_box").html()==attr){
				var pageObj=data[attr];
				$(".fast_search").attr("href",pageObj[$(this).html()])
			}
		}
		
		
	})
	
	
})