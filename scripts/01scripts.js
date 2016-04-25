/*
(1)平稳退化
(2)分离js代码
(3)向后兼容
(4)性能考虑：压缩js代码（min版本）
*/
function addEvent(fun){
	var oldfun;
	if(window.onload){
		oldfun = window.onload;
		window.onload = function(){
			oldfun();
			fun();
		}

	}else{
		window.onload = fun();
	}
}
addEvent(onload1);
//addEvent(onload2);
function onload1(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById("list").getAttribute) return false;
	var olist = document.getElementById("list");
	var aArr = olist.getElementsByTagName("a");
	
	for(var i=0;i<aArr.length;i++){
        aArr[i].onclick = function(){
        	showPic(this);
        	return false;
        }
	}


}
// function onload2(){
// 	alert("onload2");
// }

function showPic(oa){
	var src=oa.getAttribute("href");
	var title = oa.getAttribute("title");
	var oimg = document.getElementById("descri");
	var ode = document.getElementById("detail");
	var nodes = ode.childNodes;  //两种方式都可以获取第一个节点
	var first = ode.firstChild;  //
//	alert(nodes[0].nodeValue);
//	alert("first="+first.nodeValue);
	first.nodeValue = title;
	oimg.setAttribute("src",src);
}