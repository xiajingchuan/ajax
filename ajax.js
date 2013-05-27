/**
	获取跨浏览器的XMLHttpRequest对象
 */

 function getXHR() {
 	var req;
 	if (window.XMLHttpRequest) {
 		req = new XMLHttpRequest();
 	} else if (window.ActiveXobject) {
 		req = new ActiveXobject("Microsoft.XMLHTTP");
 	}
 	return req;
 }