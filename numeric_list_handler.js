function save_data_in_local_storage(form) {
	let list_key = 'numeric_list_data';

	let list_data = [];
	if(localStorage.getItem(list_key) != null)
		list_data = JSON.parse(localStorage.getItem(list_key));

	list_data.push(form.elements.text.value);
	localStorage.setItem(list_key, JSON.stringify(list_data));
}

function create_form(section) {
	section.innerHTML = `
		<form name="list-creator" onsubmit="save_data_in_local_storage(this);">
			<label for="text">Текст:</label>
			<input type="text" id="text" name="text" required><br>
			<input type="submit" value="Додати">
		</form>		
	`;
}

