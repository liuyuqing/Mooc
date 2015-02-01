/*
var scrollFunc=function(e){
	e=e || window.event; 
	if(e.wheelDelta){//IE/Opera/Chrome 
		if(e.whellDelta>0)$("div#topbar").hide(500);else $(topbar).show(500);
	}else if(e.detail){//Firefox 
	if(e.detail>0)$("div#topbar").hide(500);else $(topbar).show(500);
	} 
} 	
if(document.addEventListener){
	document.addEventListener('DOMMouseScroll',scrollFunc,false);
}//W3C
window.onmousewheel=document.onmousewheel=scrollFunc;	
*/
function logininfo(){
	try{
		$(loginpage).show(500);
	}
	catch(e){
		alert(e);
	}	
}
function closelogin(){
	try{
		$(loginpage).hide(500);
	}
	catch(e){
		alert(e);
	}
}