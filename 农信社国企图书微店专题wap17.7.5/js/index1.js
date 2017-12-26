;$(function(){
	//国企链接和图片
	var json=`{"安徽":{
   	"pic":["images/book1.jpg","images/ewm.png","images/ewm.png","images/ewm.png"],
   	"wangye":["http://www.jd.com","http://www.offcn.com","http://hao.360.cn","http://www.amazon.com"],
   	"biaoti":["这是安徽的第一本书的题目","这是安徽的第二本书的题目","这是安徽的第三本书的题目","这是安徽的第四本书的题目"],
   	"jiaqian":["￥30","￥20","￥10","￥0"],
   	"gqzpimg":["images/yc_zp.png","images/ewm.png","images/xiaoyou.jpg","images/xiaoyou.jpg"],
   	"gqzptitle":["烟草招聘考试专用1","烟草招聘考试专用2","烟草招聘考试专用23","烟草招聘考试专用23"],
   	"gqzplink":["http://www.zgjsks.com/?wt.bd=zg38","http://www.zgjsks.com/?wt.bd=zg38","http://www.zgjsks.com/?wt.bd=zg38","http://www.zgjsks.com/?wt.bd=zg38"]
    	
   	},
   	"北京":{
   	"pic":["images/book1.jpg","images/ewm.png","images/ewm.png","images/ewm.png"],
   	"wangye":["http://www.baidu.com","http://www.qq.com","http://www.taobao.com","http://www.suning.com"],
   	"biaoti":["这是北京的第一本书的题目","这是安徽的第二本书的题目","这是安徽的第三本书的题目","这是安徽的第四本书的题目"],
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
}`
	
	
	
	var data=JSON.parse(json);
	
//	开始进来弹窗
	//根据ip定位。
	$(document).ready(function(){
        $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js',function(){
            $(".dqdz").html(remote_ip_info.city);
            $(".suozai").html($(".dqdz").html());
            for (var attr in data) {
				if($(".suozai").html()==attr){
					$(".ty_book").each(function(index){
						$(".ty_book").eq(index).find("a").attr("href",data[attr].wangye[index]);
						$(".ty_book").eq(index).find("a img").attr("src",data[attr].pic[index]);
						$(".ty_book").eq(index).find(".price").html(data[attr].jiaqian[index]);
						$(".ty_book").eq(index).find(".book_name").html(data[attr].biaoti[index]);
					})
					
					$(".link_list li").each(function(index){
						$(this).find("a").attr("href",data[attr].gqzplink[index]);
						$(this).find("a img").attr("src",data[attr].gqzpimg[index]);
						$(this).find(".link_name a").html(data[attr].gqzptitle[index]);
					})
				}
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
		for (var attr in data) {
			if($(".suozai").html()==attr){
//				console.log(attr)
				$(".ty_book").each(function(index){
					$(".ty_book").eq(index).find("a").attr("href",data[attr].wangye[index]);
					$(".ty_book").eq(index).find("a img").attr("src",data[attr].pic[index]);
					$(".ty_book").eq(index).find(".price").html(data[attr].jiaqian[index]);
					$(".ty_book").eq(index).find(".book_name").html(data[attr].biaoti[index]);
				})
				
				$(".link_list li").each(function(index){
					
					$(this).find("a").attr("href",data[attr].gqzplink[index]);
					$(this).find("a img").attr("src",data[attr].gqzpimg[index]);
					$(this).find(".link_name a").html(data[attr].gqzptitle[index]);
				})
			}
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
	
	
	
})
