function get_triangle_sizes() {
	let form = document.forms.checker;

	let first_side = parseInt(form.elements.a.value);
	let second_side = parseInt(form.elements.b.value);
	let third_side = parseInt(form.elements.c.value);

	return [first_side, second_side, third_side];
}

function if_triangle_exists(a, b, c) {
	return ((a+b>c) && (a+c>b) && (b+c>a));
}
function write_cookies(a, b, c, exists) {
	let seconds_in_hour = 3600;
	document.cookie = document.cookie = "a="+a+"; max-age=3600";
	document.cookie = "b="+b+"; max-age="+seconds_in_hour;
	document.cookie = "c="+c+"; max-age="+seconds_in_hour;
	document.cookie = "exists="+exists+"; max-age="+seconds_in_hour;
}
function save_italic_value() {
	let form = document.forms.checker;
	localStorage.setItem('italic', form.elements.italic.checked);
}

function handle_form_input(event) {
	event.preventDefault();
	let a, b, c;
	[a, b, c] = get_triangle_sizes();
	let exists = if_triangle_exists(a, b, c);
	if(exists)
		alert("Трикутник існує!");
	else
		alert("Трикутника не існує!");

	write_cookies(a, b, c, exists);
	save_italic_value();
}

