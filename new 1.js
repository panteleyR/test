var z= document.getElementsByClassName("top");
console.log("znach", z);

var arr=new Array();

	console.log("znach", arr.length);
	
var arr_a=new Array();	
for (x=0;x<z.length; x++){
	
	 arr[x]=z[x].getElementsByClassName("left");
	console.log("значение", arr[x]);
	arr_a[x]= arr[x][0].getElementsByTagName("a");
	
}/*получение массива left из top console.log("znach", top.z[0].getElementsByTagName("a")); */
/*console.log("значение", arr_a[1][0].href);*/


	var openedWindow;

	function openWindow(var a) {
	  openedWindow = window.open(a);
	}

	function closeOpenedWindow() {
	  openedWindow.close();
	}
	 
	 function captch(){
		 send_captcha(Math.floor(Math.random() * (4 - 1 + 1)) + 1);
		 setTimeout("Math.random()",10000);
	 }
	 
	 for(x=0;x<arr_a.length;x++){
		openWindow(arr_a[x][0].href);
		setTimeout("captch()",110000);
		closeOpenedWindow();	
	}

 
 
 
 /*
function bus(){
	openWindow();
	setTimeout("captch()",110000);
	closeOpenedWindow();
}
bus();
*/
/*getEventListeners($(‘selector’)).click[0].listener;*/
