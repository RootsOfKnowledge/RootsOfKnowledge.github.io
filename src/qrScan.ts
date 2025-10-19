// To use Html5QrcodeScanner (more info below)
import {Html5QrcodeScanner} from "html5-qrcode";


function onScanSuccess(decodedText, decodedResult) {
	//handle the scanned code as you like, for example:
	console.log(decodedText);
	const cleanedPath = decodedText.replace(/^https:\/\/RootsOfKnowledge\.github\.io\/plants/, '');
	window.location.assign(`plant/${cleanedPath}`);
	setTimeout(() => {}, 3000);
}

function onScanFailure(error) {
	// handle scan failure, usually better to ignore and keep scanning.
	// for example:
	//document. title = error;
}

let html5QrcodeScanner = new Html5QrcodeScanner(
	"reader",
	{ fps: 10, qrbox: {width: 250, height: 250} },
	/* verbose= */ false);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);

//remove the "request permissions button" and auto picks the back cam for mobile
setInterval(() => {
if (document.getElementById("html5-qrcode-button-camera-permission")){
	document.getElementById("html5-qrcode-button-camera-permission").click();
};
	
	document.querySelectorAll('select').forEach(select => {
		for (const option of select.options) {
			if (option.text.includes("facing back")) {
				select.value = option.value;
				select.dispatchEvent(new Event('change'));
				break;
			}
		}
	});
}, 500);
