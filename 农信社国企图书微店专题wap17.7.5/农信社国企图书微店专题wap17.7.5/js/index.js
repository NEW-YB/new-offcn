;$(function(){
	//农信社链接和图片
	var json1=`{"安徽":{
   	"pic":["images/book1.jpg","images/ewm.png","images/ewm.png","images/ewm.png"],
   	"wangye":["http://www.jd.com","http://www.offcn.com","http://hao.360.cn","http://www.amazon.com"],
   	"biaoti":["这是安徽农信社的第一本书","这是安徽的第二本书的题目","这是安徽的第三本书的题目","这是安徽的第四本书的题目"],
   	"jiaqian":["￥30","￥20","￥10","￥0"]
   	},
   	"北京":{
   	"pic":["images/book1.jpg","images/ewm.png","images/ewm.png","images/ewm.png"],
   	"wangye":["http://www.baidu.com","http://www.qq.com","http://www.taobao.com","http://www.suning.com"],
   	"biaoti":["这是北京的农信社第一本书","这是北京的第二本书的题目","这是安徽的第三本书的题目","这是安徽的第四本书的题目"],
   	"jiaqian":["￥30","￥20","￥10","￥0"]
   	},
   	"重庆":{
   	"pic":["images/book1.jpg","images/ukonw_person.jpg","images/ewm.png","images/ewm.png"],
   	"wangye":["http://www.baidu.com","http://www.qq.com","http://www.taobao.com","http://www.suning.com"],
   	"biaoti":["这是重庆的第一本书的题目","这是安徽的第二本书的题目","这是安徽的第三本书的题目","这是安徽的第四本书的题目"],
   	"jiaqian":["￥30","￥20","￥10","￥0"]
   	},
   	"福建":{
   	"pic":["images/book1.jpg","images/xiaoyou.jpg","images/ewm.png","images/ewm.png"],
   	"wangye":["http://www.baidu.com","http://www.qq.com","http://www.taobao.com","http://www.suning.com"],
   	"biaoti":["这是福建的第一本书的题目","这是安徽的第二本书的题目","这是安徽的第三本书的题目","这是安徽的第四本书的题目"],
   	"jiaqian":["￥30","￥20","￥10","￥0"]
   	}
}`;


	//国企链接和图片
	var json2=`{"安徽":{
   	"pic":["images/book1.jpg","images/ewm.png","images/ewm.png","images/ewm.png"],
   	"wangye":["http://www.jd.com","http://www.offcn.com","http://hao.360.cn","http://www.amazon.com"],
   	"biaoti":["这是安徽国企的第一本书","这是安徽的第二本书的题目","这是安徽的第三本书的题目","这是安徽的第四本书的题目"],
   	"jiaqian":["￥30","￥20","￥10","￥0"],
   	"gqzpimg":["images/yc_zp.png","images/ewm.png","images/xiaoyou.jpg","images/xiaoyou.jpg"],
   	"gqzptitle":["烟草招聘考试专用1","烟草招聘考试专用2","烟草招聘考试专用23","烟草招聘考试专用23"],
   	"gqzplink":["http://www.zgjsks.com/?wt.bd=zg38","http://www.zgjsks.com/?wt.bd=zg38","http://www.zgjsks.com/?wt.bd=zg38","http://www.zgjsks.com/?wt.bd=zg38"]
    	
   	},
   	"北京":{
   	"pic":["images/book1.jpg","images/ewm.png","images/ewm.png","images/ewm.png"],
   	"wangye":["http://www.baidu.com","http://www.qq.com","http://www.taobao.com","http://www.suning.com"],
   	"biaoti":["这是北京国企的第一本书","这是安徽的第二本书的题目","这是安徽的第三本书的题目","这是安徽的第四本书的题目"],
   	"jiaqian":["￥30","￥20","￥10","￥0"],
   	"gqzpimg":["images/yc_zp.png","images/ewm.png","images/xiaoyou.jpg","images/xiaoyou.jpg"],
   	"gqzptitle":["bj烟草招聘考试专用1","烟草招聘考试专用2","烟草招聘考试专用23","烟草招聘考试专用23"],
   	"gqzplink":["http://www.zgjsks.com/?wt.bd=zg38","http://www.zgjsks.com/?wt.bd=zg38","http://www.zgjsks.com/?wt.bd=zg38","http://www.zgjsks.com/?wt.bd=zg38"]
   	},
   	"重庆":{
   	"pic":["images/book1.jpg","images/ukonw_person.jpg","images/ewm.png","images/ewm.png"],
   	"wangye":["http://www.baidu.com","http://www.qq.com","http://www.taobao.com","http://www.suning.com"],
   	"biaoti":["这是重庆的第一本书的题目","这是安徽的第二本书的题目","这是安徽的第三本书的题目","这是安徽的第四本书的题目"],
   	"jiaqian":["￥30","￥20","￥10","￥0"],
   	"gqzpimg":["images/yc_zp.png","images/ewm.png","images/xiaoyou.jpg","images/xiaoyou.jpg"],
   	"gqzptitle":["cq烟草招聘考试专用1","烟草招聘考试专用2","烟草招聘考试专用23","烟草招聘考试专用23"],
   	"gqzplink":["http://www.zgjsks.com/?wt.bd=zg38","http://www.zgjsks.com/?wt.bd=zg38","http://www.zgjsks.com/?wt.bd=zg38","http://www.zgjsks.com/?wt.bd=zg38"]
   	},
   	"福建":{
   	"pic":["images/book1.jpg","images/xiaoyou.jpg","images/ewm.png","images/ewm.png"],
   	"wangye":["http://www.baidu.com","http://www.qq.com","http://www.taobao.com","http://www.suning.com"],
   	"biaoti":["这是福建的第一本书的题目","这是安徽的第二本书的题目","这是安徽的第三本书的题目","这是安徽的第四本书的题目"],
   	"jiaqian":["￥30","￥20","￥10","￥0"],
   	"gqzpimg":["images/yc_zp.png","images/ewm.png","images/xiaoyou.jpg","images/xiaoyou.jpg"],
   	"gqzptitle":["fj烟草招聘考试专用1","烟草招聘考试专用2","烟草招聘考试专用23","烟草招聘考试专用23"],
   	"gqzplink":["http://www.zgjsks.com/?wt.bd=zg38","http://www.zgjsks.com/?wt.bd=zg38","http://www.zgjsks.com/?wt.bd=zg38","http://www.zgjsks.com/?wt.bd=zg38"]
   	}
}`;
	
	
	
	var data1=JSON.parse(json1);
	var data2=JSON.parse(json2);
	var ha=window.location.hash.substr(1);
	if(ha==""){
		ha=0;
	}
	$(".qie_box").hide();
	$(".qie_box").eq(ha).show();
	$(".type a").eq(ha).addClass("active").siblings().removeClass("active");
	
	function nxs(){
		for (var attr in data1) {
			if($(".suozai").html()==attr){
				$(".qie_box").eq(0).find(".ty_book").each(function(index){
					$(this).find("a").attr("href",data1[attr].wangye[index]);
					$(this).find("a img").attr("src",data1[attr].pic[index]);
					$(this).find(".price").html(data1[attr].jiaqian[index]);
					$(this).find(".book_name").html(data1[attr].biaoti[index]);
				})
			}
		}
	}
	
	function gq(){
		for (var attr in data2) {
			if($(".suozai").html()==attr){
				$(".qie_box").eq(1).find(".ty_book").each(function(index){
					$(this).find("a").attr("href",data2[attr].wangye[index]);
					$(this).find("a img").attr("src",data2[attr].pic[index]);
					$(this).find(".price").html(data2[attr].jiaqian[index]);
					$(this).find(".book_name").html(data2[attr].biaoti[index]);
				})
				
				$(".link_list li").each(function(index){
					$(this).find("a").attr("href",data2[attr].gqzplink[index]);
					$(this).find("a img").attr("src",data2[attr].gqzpimg[index]);
					$(this).find(".link_name a").html(data2[attr].gqzptitle[index]);
				})
			}
		}
	}
//	开始进来弹窗
	//根据ip定位。
	$(document).ready(function(){
        $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js',function(){
            $(".dqdz").html(remote_ip_info.city);
            $(".suozai").html($(".dqdz").html());
            if(ha==0){
            	nxs();
            }else if(ha==1){
            	gq();
            }
           
            //根据当前地址为切换省份的列表添加active样式   
            $(".sheng_list li").each(function(index){
		    	if($(this).html()==$(".dqdz").html()){
		    		$(".sheng_list li").removeClass("active");
					$(this).addClass("active");
		    	}
		    })
        });      
    });
    
    var timer=setTimeout(function(){
    	$(".tc").fadeOut();
		$(".mask").fadeOut();	
    },3000)
    
	//点击确定
	$(".sure").click(function(){
		$(".suozai").html($(".dqdz").html());
		//切换地址和图片
		if(ha==0){
			nxs();
		}else if(ha==1){
			gq();			
		}
		
				
		$(".tc").hide();
		$(".mask").hide();			
	})
	
	
	
	//点击切换城市
	$(".huansheng").click(function(){
		clearTimeout(timer);
		$(".sheng_tc").show();
		$(".tc").hide();
	})
	$(".sheng_list li").click(function(){
		timer=setTimeout(function(){
	    	$(".tc").fadeOut();
			$(".mask").fadeOut();	
	    },3000)
		$(".sheng_tc").hide();
		$(".tc").show();
		$(".dqdz").html($(this).html());
		$(".sheng_list li").removeClass("active");
		$(this).addClass("active");
	})
	
	$(".province").click(function(){
		$(".mask").show();
		$(".sheng_tc").show();
	})
	
	
//	各省专用版
	$(".province_list li a").click(function(){
		$(".province_list li a").removeClass("active");
		$(this).addClass("active");
	})
	
	
	//切换内容
	$(".type a").click(function(){
		$(".type a").removeClass("active");
		$(this).addClass("active");
		window.location.hash=$(this).index();
	})
	
	window.onhashchange=function(){
		ha=window.location.hash.substr(1);
		$(".qie_box").hide();
		$(".qie_box").eq(ha).show();
		$(".type a").eq(ha).addClass("active").siblings().removeClass("active");
		if(ha==0){
			nxs();
		}else if(ha==1){
			console.log(ha)
			gq();			
		};
	}
	
	
	
})
