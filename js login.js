function validasi()
{
	let txtUsername = document.getELementById("uname);
	let txtPassword = document.getELementById("pwd);
	
	txtUsername = txtUsername.value.trim();
	txtPassword = txtPassword.value;
	
	if (txtUsername.length == 0) {
		alert("username must be filled")
		return false;
	}
	if (txtPassword.length < 8) {
		alert ("Password must befilled or minumum 8 characters long.")
		return false;
	}
	// 0 s/d panjang text-1 -> herry@gmail.com
	if (txtUsername.indexOf('@gmail.com') == -1) {
		alert("Username must in gmail format")
		return false
	}
	
	localStorage.setItem("ls-uname", txtUsername);
	
	// di sini berarti semuanya aman
	return true
}