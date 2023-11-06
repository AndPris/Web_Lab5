function create_form(section) {
	section.innerHTML = `
		<form name="list-creator" onsubmit="alert('sadf');">
			<label for="text">Текст:</label>
			<input type="text" id="text" name="text" required><br>
			<input type="submit" value="Додати">
		</form>		
	`;
}

