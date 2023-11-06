let list_key = 'numeric_list_data';

function save_data_in_local_storage(form, event) {
	event.preventDefault();
	let list_data = [];
	if(localStorage.getItem(list_key) != null)
		list_data = JSON.parse(localStorage.getItem(list_key));

	list_data.push(form.elements.text.value);
	form.elements.text.value = '';
	form.elements.text.focus();
	localStorage.setItem(list_key, JSON.stringify(list_data));
}

function create_form(section) {
	section.innerHTML = `
		<form name="list-creator" onsubmit="save_data_in_local_storage(this, event);">
			<label for="text">Текст:</label>
			<input type="text" id="text" name="text" required><br>
			<input type="submit" value="Додати">
		</form>		
	`;
}

function delete_numeric_list(section, old_HTML) {
	localStorage.removeItem(list_key);
	section.innerHTML = old_HTML;
}

function display_numeric_list() {
	if(localStorage.getItem(list_key) == null)
		return;

	let section = document.querySelector('.section4');
	let old_HTML = section.innerHTML;
	section.innerHTML = `
		<ol>Елементи в localStorage:</ol>
	`;
	let list = document.querySelector('.section4 > ol');
	let list_data = JSON.parse(localStorage.getItem(list_key));
	for(let i = 0; i < list_data.length; i++) {
		let element = document.createElement('li');
		element.textContent = list_data[i];
		if(i%2==0)
			element.classList.add('even');
		else
			element.classList.add('odd');
		list.append(element);
	}

	let delition_button = document.createElement('button');
	delition_button.textContent = 'Видалити список';
	section.append(delition_button);
	delition_button.addEventListener('click', () => {delete_numeric_list(section, old_HTML);});
}

window.addEventListener('load', display_numeric_list);
