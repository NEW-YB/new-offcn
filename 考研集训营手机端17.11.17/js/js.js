//��ѵӪ
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
//��ɫ
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

//�����л�
(function(){
	
	var oNext = document.getElementsByClassName('btnRyNext')[0];
	var oPrev = document.getElementsByClassName('btnRyPrev')[0];
	var oRongyu = document.getElementsByClassName('zgRonyMa')[0];
	var data = [
		[
			{title:'�й����л�2016���Ӱ�����̸�Ʒ�ơ������',src:'images/img1.jpg'},
			{title:'�й������񡰽���Ϊ��"�ر�������',src:'images/img2.jpg'}
		],
		[
			{title:'�й������񱱾�������԰��������������Ŷӡ�',src:'images/img3.jpg'},
			{title:'�й���������ɫְҵ����Ʒ�ơ�',src:'images/img4.jpg'}
		],
		[
			{title:'�й������񡰴�ѧ��ϲ���Ĺ���������������',src:'images/img5.jpg'},
			{title:'��"�������¾�����֯����������ΰ��š���ҵ',src:'images/img6.jpg'}
		],
		
		[
			{title:'�й������񡰰ٶ����Ӱ��������',src:'images/img7.jpg'},
			{title:'�й������񡰰ٶ�Ʒ�������ʲ���ְҵ������һ��',src:'images/img8.jpg'}
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

//���ؼ�ѵӪ
(function(){
	var data = [
		{address:'�����к�����ѧ��·23�ź������ʹ���B��',tel:'010-60957897',url:'http://bj.kaoyan365.cn/'},
		{address:'��ѧ����������2��14¥����ʦ���Ŷ��棩',tel:'023��65659385',url:'http://cq.kaoyan365.cn/'},
		{address:'�������������ɽ·371���й���������9¥',tel:'020-35641314',url:'http://gd.kaoyan365.cn/'},
		{address:'�Ϸ�����ɽ������·����һ��·���ڻ�����7¥',tel:'0551-66181887',url:'http://ah.kaoyan365.cn/'},
		{address:'�人�к�ɽ��³ĥ·��ȹ㳡ӯ���Ƽ���ҵ����9¥',tel:'027-59908658',url:'http://hu.kaoyan365.cn/'},
		{address:'��ɳ��ܽ������һ���800����¡���ʴ���5¥',tel:'0731-84899317',url:'http://hn.kaoyan365.cn/'},
		{address:'֣�ݽ�ˮ������·����·��������ڷỨԷC��',tel:'18530876359',url:'http://he.kaoyan365.cn/'},
		{address:'ʯ��ׯ����������С�ֽ�ԣ����һ¥����',tel:'0311-85239904',url:'http://hb.kaoyan365.cn/'},
		{address:'���������ϸ�������ֱ��374-2���й�����',tel:'0451-86367180',url:'http://hlj.kaoyan365.cn/'},
		{address:'�����г���������·2338���й���������',tel:'0431-81239613',url:'http://jl.kaoyan365.cn/'},
		{address:'�Ͼ����ػ�����ɽ��·8���պ�����20��',tel:'025-86992962/74',url:'http://js.kaoyan365.cn/'},
		{address:'�Ϻ���������ѧ·248��803��',tel:'021-65686563',url:'http://sh.kaoyan365.cn/'},
		{address:'��ƽ���Ļ�·19�Ž�ƴ���1308��',tel:'024-23881058',url:'http://ln.kaoyan365.cn/'},
		{address:'��������ɽ·173-1����ɽ����C3��1��',tel:'0531-67894988',url:'http://sd.kaoyan365.cn/'},
		{address:'�ɶ�����������¹�·9�ű�������D��4¥403',tel:'028-82005799',url:'http://sc.kaoyan365.cn/'},
		{address:'���ɹ����������ͺ���������������㳡702',tel:'0471-5205820',url:'http://nm.kaoyan365.cn/'},
		{address:'�������³�������·48�Ž�������һ¥�й�����',tel:'029-87444197',url:'http://sa.kaoyan365.cn/'},
		{address:'̫ԭ��С��������·226�Ÿ��¶�����2��',tel:'400-6300-966',url:'http://sx.kaoyan365.cn/'},
		{address:'��������ɳ4�Ŵ��187��ʱ��ɽ3¥',tel:'0571-87770205/06',url:'http://zj.kaoyan365.cn/'},
		{address:'����ʡ�ϲ��ж���������·310��ʡ�������6¥',tel:'0791-87883671',url:'http://jx.kaoyan365.cn/'},
		{address:'������ɳ�ӿ�����ɽ·682�ų�������3¥',tel:'0411-39776296',url:'http://ln.kaoyan365.cn/'},
		{address:'����ƽ������·���Ŵ��ã������б���棩',tel:'022-23355080',url:'http://tj.kaoyan365.cn/'}
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
		str+='<p class="cityAddress"><strong>��ַ��</strong>'+ data[index]['address'] +'</p>';
		str+='<p class="cityTel"><strong>�绰��</strong>'+ data[index]['tel'] +'</p>';
		str+='<p class="cityUrl"><strong>��ַ��</strong><a href="'+ data[index]['url'] +'">'+ data[index]['url'] +'</a></p>';
		ocityMcon.innerHTML = str;
	};
	strFn();
})();

//����
(function(){
	var data = [
		{title1:'��׼�������ֱӪ�ֲ�',title2:'Ϊ���ṩ���ʵĿγ̷���',info:'��˾�ܲ�λ�ڱ������ڹ���31��ʡ�ݡ���350�����У�ӵ��470��ֱӪ�ֲ����콢ѧϰ���ģ�����30��ƽ�׵�ר�ý�ѧ���ء���׼���İ칫������ѧԱ�ṩ���ʷ���ֵ��������',src:'images/zg_bg_1.jpg'},
		{title1:'С���ѧ����',title2:'�й���ʦ����渨�� ���Ի�����',info:'�γ�ģʽ���أ�������ϣ��߽�������������ѧԱ����������������֪ʶ����С���ơ���ѧģʽ���й���ʦ���Ի�������1��1���������ɣ���ѧԱ��ֻ�����',src:'images/zg_bg_2.jpg'},
		{title1:'�òͻ�����������',title2:'����ʽ�Ͳ� ���˿ɿ� ����ѧϰ',info:'���ྻ�ľͲͻ�������������ľͲ�ʱ�䣬����ʽ�Ͳͷ�ʽ�����ֲ�Ʒ��Ӫ�����䣬�������������ĵ�ѧϰ������ѡ��Ͳ͵ص�͡���ʲô�������ա�',src:'images/zg_bg_3.jpg'},
		{title1:'�Ǽ��Ƶ�����������ܰ',title2:'��׼���䱸 ����ѧϰ',info:'�����γ̾�������׼���Ǽ���׼�ľƵ���ס���Ǽ�ס�޴������Ƶ�ʽ���񣬿յ����ţ�������ԡһӦ��ȫ���ṩ���켰�ճ�ϴ����Ʒ��24Сʱ��ˮ��ר�˴�ɨ��',src:'images/zg_bg_4.jpg'}
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

//��ʦ
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

//��׼��ѵӪ
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
//�ļ���ѵӪ
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
//��ɫ��ѵӪ
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


//����ѵӪ�л�      
(function(){
//	һ�����
	$("#dingxSstab span").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".big_tab").hide();
		$(".big_tab").eq($(this).index()).show();
	})
//	�������
	$(".dingxErTabs a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parents(".big_tab").find(".erji_box").hide();
		$(this).parents(".big_tab").find(".erji_box").eq($(this).index()).show();
	})
//	�������
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
	//��׼��ѵӪ
	$('.zgDlbiaozhun dd').find('a').each(function(c){
		$(this).click(function(){
			$('html,body').animate({scrollTop:$('#biaozTab').offset().top}, 800);
			$('#biaozTab').find('span:eq('+c+')').addClass('active').siblings().removeClass('active');
			$('#tableBiaoZ').find('table:eq('+c+')').show().siblings().hide();
		});
	});
	//�ļ���ѵӪ
	$('.zgDlsiji dd').find('a').each(function(c){
		$(this).click(function(){
			$('html,body').animate({scrollTop:$('#tabSiji').offset().top}, 800);
			$('#tabSiji').find('span:eq('+c+')').addClass('active').siblings().removeClass('active');
			$('#tableSiji').find('table:eq('+c+')').show().siblings().hide();
		});
	});
	//��ɫ��ѵӪ
	$('.zgDltese dd').find('a').each(function(c){
		$(this).click(function(){
			$('html,body').animate({scrollTop:$('#tabTeSe').offset().top}, 800);
			$('#tabTeSe').find('span:eq('+c+')').addClass('active').siblings().removeClass('active');
			$('#tableTeSe').find('table:eq('+c+')').show().siblings().hide();
		});
	});
	//����ѵӪ
	$('.zgDldingxiang dd').find('a').each(function(c){
		$(this).click(function(){
			$('html,body').animate({scrollTop:$('#dingxSstab').offset().top}, 800);
			$('#dingxSstab').find('span:eq('+c+')').addClass('active').siblings().removeClass('active');
			$('#dingxSstab').nextAll('.box').hide();
			$('#dingxSstab').nextAll('.box:eq('+c+')').show();
		});
	});

})