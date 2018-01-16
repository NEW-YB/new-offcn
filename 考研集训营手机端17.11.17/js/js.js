//集训营
(function(){
	
	var aA = document.getElementById('jxySSs').getElementsByTagName('a');
	var len = aA.length;
	for(var i=0;i<len;i++)
	{
		aA[i].onclick = function()
		{
			for(var i=0;i<len;i++)
			{
				aA[i].className = '';
			};
			this.className = 'active';
		};
	};
	
})();
//特色
(function(){
	
	var aCon = document.getElementsByClassName('conTabsTese');
	var aSpan = document.getElementById('kecTestab').getElementsByTagName('span');
	var len = aSpan.length;
	for(var i=0;i<len;i++)
	{
		aSpan[i].index = i;
		aSpan[i].onclick = function()
		{
			for(var i=0;i<len;i++)
			{
				aSpan[i].className = '';
				aCon[i].style.display = 'none';
			};
			this.className = 'active';
			aCon[this.index].style.display = 'block';
		};
	};
	
})();

//荣誉切换
(function(){
	
	var oNext = document.getElementsByClassName('btnRyNext')[0];
	var oPrev = document.getElementsByClassName('btnRyPrev')[0];
	var oRongyu = document.getElementsByClassName('zgRonyMa')[0];
	var data = [
		[
			{title:'中公考研获“2016年度影响力教辅品牌”两项大奖',src:'images/img1.jpg'},
			{title:'中公教育获“教育为公"特别荣誉奖',src:'images/img2.jpg'}
		],
		[
			{title:'中公教育获北京民办教育园丁奖“优秀教研团队”',src:'images/img3.jpg'},
			{title:'中公教育获“特色职业教育品牌”',src:'images/img4.jpg'}
		],
		[
			{title:'中公教育获“大学生喜爱的公考机构”金塔奖',src:'images/img5.jpg'},
			{title:'获"北京市新经济组织履行社会责任百优”企业',src:'images/img6.jpg'}
		],
		
		[
			{title:'中公教育获“百度最具影响力”奖',src:'images/img7.jpg'},
			{title:'中公教育获“百度品牌数字资产榜职业教育第一”',src:'images/img8.jpg'}
		]
	];
	
	var index = 0;
	var len = data.length;
	
	function tabs()
	{
		var str = '';
		
		str+='<li>'
			str+='<div class="mrRy">';
				str+='<img src="'+ data[index][0]['src'] +'" alt="">';
				str+='<p>'+ data[index][0]['title'] +'</p>';
			str+='</div>'
			str+='<div>'
				str+='<img src="'+ data[index][1]['src'] +'" alt="">';
				str+='<p>'+ data[index][1]['title'] +'</p>';
			str+='</div>';
		str+='</li>';
		oRongyu.innerHTML = str;
	};
	tabs();
	
	
	oPrev.onclick = function()
	{
		index--;
		if(index<0)
		{
			index = len-1;
		};
		tabs();
	};
	oNext.onclick = function()
	{
		index++;
		if(index==len)
		{
			index = 0;
		};
		tabs();
	};
	
})();

//各地集训营
(function(){
	var data = [
		{address:'北京市海淀区学清路23号汉华世纪大厦B座',tel:'010-60957897',url:'http://bj.kaoyan365.cn/'},
		{address:'大学城熙街三期2栋14楼（重师南门对面）',tel:'023—65659385',url:'http://cq.kaoyan365.cn/'},
		{address:'广州市天河区五山路371号中公教育大厦9楼',tel:'020-35641314',url:'http://gd.kaoyan365.cn/'},
		{address:'合肥市蜀山区肥西路与南一环路交口汇金大厦7楼',tel:'0551-66181887',url:'http://ah.kaoyan365.cn/'},
		{address:'武汉市洪山区鲁磨路光谷广场盈龙科技创业大厦9楼',tel:'027-59908658',url:'http://hu.kaoyan365.cn/'},
		{address:'长沙市芙蓉区五一大道800号中隆国际大厦5楼',tel:'0731-84899317',url:'http://hn.kaoyan365.cn/'},
		{address:'郑州金水区经三路与丰产路交叉口西融丰花苑C座',tel:'18530876359',url:'http://he.kaoyan365.cn/'},
		{address:'石家庄市桥西区南小街金裕商务一楼底商',tel:'0311-85239904',url:'http://hb.kaoyan365.cn/'},
		{address:'哈尔滨市南岗区西大直街374-2号中公教育',tel:'0451-86367180',url:'http://hlj.kaoyan365.cn/'},
		{address:'长春市朝阳区辽宁路2338号中公教育大厦',tel:'0431-81239613',url:'http://jl.kaoyan365.cn/'},
		{address:'南京市秦淮区中山南路8号苏豪大厦20层',tel:'025-86992962/74',url:'http://js.kaoyan365.cn/'},
		{address:'上海杨浦区大学路248号803室',tel:'021-65686563',url:'http://sh.kaoyan365.cn/'},
		{address:'和平区文化路19号金科大厦1308室',tel:'024-23881058',url:'http://ln.kaoyan365.cn/'},
		{address:'历下区历山路173-1号历山名郡C3座1层',tel:'0531-67894988',url:'http://sd.kaoyan365.cn/'},
		{address:'成都市武侯区领事馆路9号保利中心D座4楼403',tel:'028-82005799',url:'http://sc.kaoyan365.cn/'},
		{address:'内蒙古自治区呼和浩特市赛罕区东达广场702',tel:'0471-5205820',url:'http://nm.kaoyan365.cn/'},
		{address:'西安市新城区东五路48号江西大厦一楼中公教育',tel:'029-87444197',url:'http://sa.kaoyan365.cn/'},
		{address:'太原市小店区长治路226号高新动力港2层',tel:'400-6300-966',url:'http://sx.kaoyan365.cn/'},
		{address:'杭州市下沙4号大街187号时代山3楼',tel:'0571-87770205/06',url:'http://zj.kaoyan365.cn/'},
		{address:'江西省南昌市东湖区阳明路310号省出版大厦6楼',tel:'0791-87883671',url:'http://jx.kaoyan365.cn/'},
		{address:'大连市沙河口区中山路682号辰熙大厦3楼',tel:'0411-39776296',url:'http://ln.kaoyan365.cn/'},
		{address:'天津和平区卫津路云琅大厦（天大东门斜对面）',tel:'022-23355080',url:'http://tj.kaoyan365.cn/'}
	];
	
	var index = 0;
	var aA = document.getElementsByClassName('cityTabs')[0].getElementsByTagName('a');
	var ocityMcon = document.getElementsByClassName('cityMcon')[0];
	var len = aA.length;
	for(var i=0;i<len;i++)
	{
		aA[i].onclick = function()
		{
			index = this.getAttribute('cityData');
			for(var i=0;i<len;i++)
			{
				aA[i].className = '';
				this.className = 'active';
			};			
			strFn();
		};
	};
	
	function strFn()
	{
		var str = '';
		str+='<p class="cityAddress"><strong>地址：</strong>'+ data[index]['address'] +'</p>';
		str+='<p class="cityTel"><strong>电话：</strong>'+ data[index]['tel'] +'</p>';
		str+='<p class="cityUrl"><strong>网址：</strong><a href="'+ data[index]['url'] +'">'+ data[index]['url'] +'</a></p>';
		ocityMcon.innerHTML = str;
	};
	strFn();
})();

//环境
(function(){
	var data = [
		{title1:'标准化管理的直营分部',title2:'为您提供优质的课程服务',info:'公司总部位于北京，在国内31个省份、近350个地市，拥有470家直营分部和旗舰学习中心，超过30万平米的专用教学场地。标准化的办公环境给学员提供优质服务，值得信赖。',src:'images/zg_bg_1.jpg'},
		{title1:'小班教学环境',title2:'中公名师面对面辅导 个性化点评',info:'课程模式独特，讲练结合，边讲边练，有助于学员快速消化吸收理论知识。“小班制”教学模式，中公名师个性化辅导，1对1点评、答疑，与学员充分互动。',src:'images/zg_bg_2.jpg'},
		{title1:'用餐环境卫生健康',title2:'自助式就餐 饭菜可口 无忧学习',info:'宽敞洁净的就餐环境，规律有序的就餐时间，自助式就餐方式，多种菜品，营养搭配，让你享受最舒心的学习。不在选择就餐地点和“吃什么”而烦恼。',src:'images/zg_bg_3.jpg'},
		{title1:'星级酒店配置明亮温馨',title2:'标准间配备 舒适学习',info:'封闭类课程均安排在准四星级标准的酒店入住，星级住宿待遇，酒店式服务，空调开放，独立卫浴一应俱全，提供被褥及日常洗漱用品，24小时热水，专人打扫。',src:'images/zg_bg_4.jpg'}
	];
	
	var aSpan = document.getElementsByClassName('huanjingTabs')[0].getElementsByTagName('span');
	var oImg = document.getElementsByClassName('imgHjSr')[0];
	var oH2 = document.getElementsByClassName('hjTitle1')[0];
	var oH3 = document.getElementsByClassName('hjTitle2')[0];
	var oP = document.getElementsByClassName('hjInfoS')[0];
	var len = aSpan.length;
	var index = 0;
	for(var i=0;i<len;i++)
	{
		aSpan[i].onclick = function()
		{
			for(var i=0;i<len;i++)
			{
				aSpan[i].className = '';
				if(this.getAttribute('hjIndex')==len-1)
				{
					this.className = 'mr0 active';
				}
				else
				{
					this.className = 'active';
				};
			};
			
			index = this.getAttribute('hjIndex');
			oImg.src = data[index]['src'];
			oH2.innerHTML = data[index]['title1'];
			oH3.innerHTML = data[index]['title2'];
			oP.innerHTML = data[index]['info'];
		};
	};
})();

//导师
(function(){
	var aA = document.getElementsByClassName('daoshiTabs')[0].getElementsByTagName('a');
	var aCon = document.getElementsByClassName('daoshiCont');
	var len = aA.length;
	
	for(var i=0;i<aA.length;i++)
	{
		aA[i].index = i;
		aA[i].onclick = function(){
			for(var j=0;j<len;j++)
			{
				aCon[j].style.display = 'none';
				aA[j].className = '';
			};
			this.className = 'active';
			aCon[this.index].style.display = 'block';
		};
	};
	
})();

//标准集训营
(function(){
	
	var aSpan = document.getElementById('biaozTab').getElementsByTagName('span');
	var len = aSpan.length;
	var aTable = document.getElementById('tableBiaoZ').getElementsByTagName('table');
	var aJianj = $('#tableBiaoZ').find('.zgBiaoZinfo');
	
	for(var i=0;i<len;i++)
	{
		aSpan[i].index = i;
		aSpan[i].onclick = function()
		{
			for(var j=0;j<len;j++)
			{
				if(j==len-1)
				{
					aSpan[j].className = 'mr0';
				}
				else
				{
					aSpan[j].className = '';
				};
				
				aTable[j].style.display = 'none';
				aJianj[j].style.display = 'none';
			};
			if(this.index==len-1)
			{
				this.className = 'mr0 active';
			}
			else
			{
				this.className = 'active';
			};
			aTable[this.index].style.display = 'inline-table';
			aJianj[this.index].style.display = 'block';
		}; 
	};
	
})();
//四季集训营
(function(){
	
	var aSpan = document.getElementById('tabSiji').getElementsByTagName('span');
	var len = aSpan.length;
	var aTable = document.getElementById('tableSiji').getElementsByClassName('siji_change');
	
	for(var i=0;i<len;i++)
	{
		aSpan[i].index = i;
		aSpan[i].onclick = function()
		{
			for(var j=0;j<len;j++)
			{
				if(j==len-1)
				{
					aSpan[j].className = 'mr0';
				}
				else
				{
					aSpan[j].className = '';
				};
				
				aTable[j].style.display = 'none';
			};
			if(this.index==len-1)
			{
				this.className = 'mr0 active';
			}
			else
			{
				this.className = 'active';
			};
			aTable[this.index].style.display = 'block';
		}; 
	};
	
})();
//特色集训营
(function(){
	
	var aSpan = document.getElementById('tabTeSe').getElementsByTagName('span');
	var len = aSpan.length;
	var aTable = document.getElementById('tableTeSe').getElementsByClassName('tese_change');
	
	for(var i=0;i<len;i++)
	{
		aSpan[i].index = i;
		aSpan[i].onclick = function()
		{
			for(var j=0;j<len;j++)
			{
				if(j==len-1)
				{
					aSpan[j].className = 'mr0';
				}
				else
				{
					aSpan[j].className = '';
				};
				
				aTable[j].style.display = 'none';
			};
			if(this.index==len-1)
			{
				this.className = 'mr0 active';
			}
			else
			{
				this.className = 'active';
			};
			aTable[this.index].style.display = 'block';
		}; 
	};
	
})();


//定向集训营切换      
(function(){
//	一级点击
	$("#dingxSstab span").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".big_tab").hide();
		$(".big_tab").eq($(this).index()).show();
	})
//	二级点击
	$(".dingxErTabs a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parents(".big_tab").find(".erji_box").hide();
		$(this).parents(".big_tab").find(".erji_box").eq($(this).index()).show();
	})
//	三级点击
	$(".dingxSanTabs a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parent().next().find(".tab_box").hide();
		$(this).parent().next().find(".tab_box").eq($(this).index()).show();
	})
})();


var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	paginationClickable: true
});


$(function(){
	//标准集训营
	$('.zgDlbiaozhun dd').find('a').each(function(c){
		$(this).click(function(){
			$('html,body').animate({scrollTop:$('#biaozTab').offset().top}, 800);
			$('#biaozTab').find('span:eq('+c+')').addClass('active').siblings().removeClass('active');
			$('#tableBiaoZ').find('table:eq('+c+')').show().siblings().hide();
		});
	});
	//四季集训营
	$('.zgDlsiji dd').find('a').each(function(c){
		$(this).click(function(){
			$('html,body').animate({scrollTop:$('#tabSiji').offset().top}, 800);
			$('#tabSiji').find('span:eq('+c+')').addClass('active').siblings().removeClass('active');
			$('#tableSiji').find('table:eq('+c+')').show().siblings().hide();
		});
	});
	//特色集训营
	$('.zgDltese dd').find('a').each(function(c){
		$(this).click(function(){
			$('html,body').animate({scrollTop:$('#tabTeSe').offset().top}, 800);
			$('#tabTeSe').find('span:eq('+c+')').addClass('active').siblings().removeClass('active');
			$('#tableTeSe').find('table:eq('+c+')').show().siblings().hide();
		});
	});
	//定向集训营
	$('.zgDldingxiang dd').find('a').each(function(c){
		$(this).click(function(){
			$('html,body').animate({scrollTop:$('#dingxSstab').offset().top}, 800);
			$('#dingxSstab').find('span:eq('+c+')').addClass('active').siblings().removeClass('active');
			$('#dingxSstab').nextAll('.box').hide();
			$('#dingxSstab').nextAll('.box:eq('+c+')').show();
		});
	});

})