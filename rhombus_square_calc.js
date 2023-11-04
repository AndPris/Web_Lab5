function calculate_rhombus_square() {
	let d1 = 4;
	let d2 = 6;
	let square = d1*d2/2;

	let result_p_node = document.createElement('p');
	result_p_node.textContent = `Square of the rhombus: ${square}`;
	// result_p_node.style.textAlign = "right";
	let section_3 = document.querySelector('.section3');

	section_3.append(result_p_node);
}

calculate_rhombus_square();