var km,m,cm;

function kilo(){
	km = parseInt(document.getElementById('km').value);
	m = km*1000;
	cm = m*100;

	document.getElementById('m').value = m;
	document.getElementById('cm').value = cm;
}

function meter(){
	m = parseInt(document.getElementById('m').value);
	km = m/1000;
	cm = m*100;

	document.getElementById('km').value = km;
	document.getElementById('cm').value = cm;
}

function centi(){
	cm = parseInt(document.getElementById('cm').value);
	m = cm/100;
	km = m/1000;

	document.getElementById('m').value = m;
	document.getElementById('km').value = km;
}