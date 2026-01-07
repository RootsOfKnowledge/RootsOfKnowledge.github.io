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
	
	document.getElementById('plantKingdom').innerText = index[document.location.hash].classification.kingdom;
	document.getElementById('plantPhylum').innerText = index[document.location.hash].classification.phylum;
	document.getElementById('plantClass').innerText = index[document.location.hash].classification.class;
	document.getElementById('plantOrder').innerText = index[document.location.hash].classification.order;
	document.getElementById('plantFamily').innerText = index[document.location.hash].classification.family;
	document.getElementById('plantGenus').innerText = index[document.location.hash].classification.genus;
	document.getElementById('plantSpecies').innerText = index[document.location.hash].classification.species;
	
	document.getElementById('plantColors').innerText = index[document.location.hash].colors;
	document.getElementById('plantLifespan').innerText = index[document.location.hash].lifespan;
	document.getElementById('plantCare').innerText = index[document.location.hash].care;
	document.getElementById('plantDying').innerText = index[document.location.hash].dying;
	
	document.querySelectorAll('.loading').forEach(element => {
		console.log(element.setAttribute('aria-busy', false));
	});
});