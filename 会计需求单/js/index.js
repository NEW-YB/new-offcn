$(".sideChange a").on("mouseover",function(){
	$(".oneSideShow").hide();
	$(".oneSideShow").eq($(this).index()).show();
});
$(".twoLink a").on("mouseover",function(){
	$(".twoLink a").removeClass("active");
	$(this).addClass("active");
	$(".twoContent").hide();
	$(".twoContent").eq($(this).index()).show();
});
$(".threeContentBottom a").hover(function(){
	$(this).toggleClass("active");
});
$(".close").click(function(){
	$(".footFixed").hide();
	setTimeout(function(){
		$(".footFixed").show();
	},5000)
});
var nowtime=new Date();
var nowyear=nowtime.getFullYear();
$(".nowtime").html(nowyear);
$(".totop").click(function(){
	$("body").animate({
		scrollTop:0
	},500);
	$("html").animate({
		scrollTop:0
	},500);
});
$(".serviceList li").hover(function(){
	$(this).toggleClass("active");
});
$(".sixList li").hover(function(){
	$(this).toggleClass("active");
});

var num=0;

$(".prev").click(function(){
	if($(".fourList").is(":animated")){		
		return;
	}
	if(num==0){
		$(".fourList").css("left",-1554);
		num=7;
	}
	num--;
	$(".fourList").animate({
		left:-222*num
	},1000)
})

$(".next").click(function(){
	if($(".fourList").is(":animated")){		
		return;
	}
	num++;
	$(".fourList").animate({
		left:-222*num
	},1000,function(){
		if(num==7){
			$(".fourList").css("left",0);
			num=0;
		}
	})
	
})

$(".address a").on("mouseover",function(){
	$(".address a").removeClass("active");
	$(this).addClass("active");
	$(".lunbo").hide();
	$(".lunbo").eq($(this).index()).show();
});



