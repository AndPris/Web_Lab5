function delete_cookies() {
	const cookies = document.cookie.split(";");

  	for (let i = 0; i < cookies.length; i++) {
	    const cookie = cookies[i];
	    const eqPos = cookie.indexOf("=");
	    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
	    document.cookie = name + "=; max-age=0";
	  }
}

window.onload = function() {
	let if_delete_cookies = true;

	if(document.cookie != '') {
		alert(document.cookie);
		if_delete_cookies = confirm("Видалити куки?");
	}

	if(if_delete_cookies)
		delete_cookies();
	else {
		alert("Куки не видалено. Потрібно оновии сторінку.");
		document.forms.checker.style.display = "none"; 
	}
}