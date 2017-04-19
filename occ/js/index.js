$(function() {

	function getWidth() {
		var wHeight = $(window).height();
		var H = wHeight - 50;
		$(".side").height(H);
	}
	getWidth();
	$(window).on("resize", getWidth);	
  	
	$(".datetime").daterangepicker({ 
		singleDatePicker: true ,
		format: 'MM/DD/YYYY'
	}, function(start, end, label) {
    	console.log(start.toISOString(), end.toISOString(), label);
  	});

	$(document).on("click", ".item-title", function() {
		var self = $(this);
		// self.toggleClass("act");\
		self.find("span").toggleClass("glyphicon-plus");
		self.find("span").toggleClass("glyphicon-minus");
		self.parent().next("ul").slideToggle();
	});

	$(".side").find("ul").each(function() {

		$(this).on("click", "li", function() {
			var self = $(this);
			// alert(self.index());
			self.siblings().find("a").removeClass("act");
			self.find("a").addClass("act");
		});
	});
	
//	console.log($(".table thead tr th:first"))
//	var tab=document.getElementsByClassName("table")[0];
//	var selAll=tab.tHead.rows[0].cells[0].getElementsByTagName("input")[0];
//	var checks=tab.tBodies[0].getElementsByTagName("input");
//	var selectAll=document.querySelector(".select-all .selectAll input");
//	
////	selAll.onclick=selectAll.onclick=function(){
////		for (var i = 0; i < checks.length; i++) {
////			if(this.checked){
////				checks[i].checked=true;
////				selectAll.checked=true;
////				selAll.checked=true;
////			}else{
////				checks[i].checked=false;
////				selectAll.checked=false;
////				selAll.checked=false;
////			}
////		}
////	}
////	for (var i = 0; i < checks.length; i++) {
////		checks[i].onclick=function(){
////			check();
////		}
////	}
////	function check(){
////		for (var i = 0; i < checks.length; i++) {
////			if(checks[i].checked == false){
////				selectAll.checked = false;
////				selAll.checked=false;
////				return;
////			}
////		}
////		selectAll.checked = true;
////		selAll.checked=true;
////	}
//	
//	selAll.onclick=selectAll.onclick=function(){
//		selAll.checked=this.checked;
//		selectAll.checked=this.checked;
//		Array.from(checks).forEach(function(item){
//			item.checked=this.checked;
//		},this)
//	}
//	Array.from(checks).forEach(function (item){
//		item.onclick = function (){
//			var bl = Array.from(checks).every(function (value){
//				return value.checked;
//			});	
//			selectAll.checked = bl;
//			selAll.checked = bl;
//		};	
//	})
//	
//	var tableHtml=`<tr>
//                  <td class="align-center">
//                      <input type="checkbox" id="inlineCheckbox3" value="option3">
//                  </td>
//                  <td class="align-center">123456</td>
//                  <td>
//                      <p>标题标标题标题标题标题标题标题标题标题</p>
//                      <p class="sub-title">
//                          <span>原价￥2000</span><span>优惠价￥1000</span><span>课时100</span><span>单课</span><span>2017年</span>
//                      </p>
//                  </td>
//                  <td>一级分类标题-二级分类标题</td>
//                  <td>
//                      2017-03-16开始<br>
//                      2017-03-16结束
//                  </td>
//                  <td class="align-center">100</td>
//                  <td class="align-center"><span class="label label-warning">下架</span></td>
//                  <td class="align-center">
//                      <a href="" class="table-btn">编辑</a>
//                      <a href="" class="table-btn">设置课件</a>
//                      <a href="" class="table-btn">学习进度</a>
//                      <a href="" class="table-btn">更多</a>
//                  </td>
//              </tr>`;
//  $(".pagenum li").on("click",function(){
//		$(".page").html("每页"+($(this).index()+1)*5+"条 <span class='caret'></span>");
//		console.log()
//		for (var i = 0; i < ($(this).index()+1)*5; i++) {
//			tableHtml+=`<tr>
//                  <td class="align-center">
//                      <input type="checkbox" id="inlineCheckbox3" value="option3">
//                  </td>
//                  <td class="align-center">123456</td>
//                  <td>
//                      <p>标题标标题标题标题标题标题标题标题标题</p>
//                      <p class="sub-title">
//                          <span>原价￥2000</span><span>优惠价￥1000</span><span>课时100</span><span>单课</span><span>2017年</span>
//                      </p>
//                  </td>
//                  <td>一级分类标题-二级分类标题</td>
//                  <td>
//                      2017-03-16开始<br>
//                      2017-03-16结束
//                  </td>
//                  <td class="align-center">100</td>
//                  <td class="align-center"><span class="label label-warning">下架</span></td>
//                  <td class="align-center">
//                      <a href="" class="table-btn">编辑</a>
//                      <a href="" class="table-btn">设置课件</a>
//                      <a href="" class="table-btn">学习进度</a>
//                      <a href="" class="table-btn">更多</a>
//                  </td>
//              </tr>`;
//		}
//		tab.tBodies[0].innerHTML=tableHtml;
//		tableHtml="";
//	})
//  for (var i = 0; i < 5; i++) {
//  	Things[i]
//  }

});