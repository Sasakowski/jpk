function Setup(ID) {
	let _ = document.getElementById(ID);
	_ = _.getElementsByTagName("int");

	for (let elem of _) {
		let letters = [];
		if (elem.innerHTML.includes(",")) {
			letters = elem.innerHTML.split(",");
		} else {
			letters.push(elem.innerHTML);
		}

		elem.innerHTML = "";
		for (let l of letters) {
			if (l === "") { continue; }
			elem.innerHTML += `<button onclick = "Input('${l}');"><text>${l}<text></button>`;
		}
	}
}