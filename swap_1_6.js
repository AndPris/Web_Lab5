function swap_1_6_text() {
	let paragraph1 = document.getElementById('par_1');
	let paragraph6 = document.getElementById('par_6');
	[paragraph1.innerHTML, paragraph6.innerHTML] = [paragraph6.innerHTML, paragraph1.innerHTML];
}