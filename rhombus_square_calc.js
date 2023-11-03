function calculate_rhombus_square() {
	let d1 = 4;
	let d2 = 6;
	let square = d1*d2/2;

	let result_text_node = document.createTextNode(square);
	let section_3 = document.querySelector('.section3');

	section_3.appendChild(result_text_node);
}

calculate_rhombus_square();