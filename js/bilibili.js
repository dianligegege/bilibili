window.onscroll = function gundong() {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var d1 = document.getElementById("cedaohang");
    if (t >= 229) {
		// d1.style.display="flex";
		d1.style.top="2px";
    } else {
		d1.style.top="233px";
    }
}
