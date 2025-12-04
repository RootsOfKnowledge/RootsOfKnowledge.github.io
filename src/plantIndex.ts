document.getElementById('plantImg').src = document.location.hash.substring(1) + ".jpg";

const fetchIndex = async () => {
	const response = await fetch('/plantIndex.json');
	const returnValue = await response.json();
	return returnValue;
};

fetchIndex().then(index => {
	document.getElementById('plantName').innerText = index[document.location.hash].name;
	document.getElementById('plantScientific').innerText = index[document.location.hash].scientific;
	document.getElementById('plantAlias').innerText = index[document.location.hash].alias;
	document.getElementById('plantInfo').innerText = index[document.location.hash].info;
	
	document.getElementById('plantColors').innerText = index[document.location.hash].colors;
	document.getElementById('plantLifespan').innerText = index[document.location.hash].lifespan;
	document.getElementById('plantGrow').innerText = index[document.location.hash].grow;
	document.getElementById('plantCare').innerText = index[document.location.hash].care;
	document.getElementById('plantDying').innerText = index[document.location.hash].dying;
	
	document.querySelectorAll('.loading').forEach(element => {
		console.log(element.setAttribute('aria-busy', false));
	});
});