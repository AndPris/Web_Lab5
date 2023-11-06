function set_italic() {
	let section = document.querySelector('.section2');
	for (child of section.children) {
		if(localStorage.getItem('italic') == 'true')
			child.style.fontStyle = 'italic';
		else
			child.style.removeProperty('font-style');
	}
}