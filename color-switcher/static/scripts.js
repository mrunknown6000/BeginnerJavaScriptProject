currentColor = "";

function trigger(){
	// debugger;
	currentColor = document.getElementById('input').value;
	document.querySelector(".container").style.backgroundColor="#"+currentColor;
	document.querySelector(".text-container").style.color=reverseColor(currentColor)
}

function padZeros(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}

function reverseColor(hex){
	// Convert into 6-digit
	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}
	var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
	    g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
		b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
	
	return '#' + padZeros(r) + padZeros(g) + padZeros(b);
}

