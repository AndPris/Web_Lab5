let is_calculated = false;


function calculate_rhombus_square() {
	if(is_calculated)
		return;

	let d1 = 4;
	let d2 = 6;
	let square = d1*d2/2;

	let result_p_node = document.createElement('p');
	result_p_node.textContent = `Площа ромба: ${square}`;
	let section_3 = document.querySelector('.section3');

	section_3.append(result_p_node);
	is_calculated = true;
}