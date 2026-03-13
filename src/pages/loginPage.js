export function loginPage(msg=""){

return `
<html>

<head>
<title>Login RIKUDO_NET</title>
<link rel="stylesheet" href="/style.css">
</head>

<body>

<div class="login-box">

<h2>RIKUDO_NET</h2>

<p style="color:#666">Login Administrator</p>

<p class="error">${msg}</p>

<form method="POST" action="/login">

<input name="username" placeholder="Username" required>

<input type="password" name="password" placeholder="Password" required>

<button type="submit">Login</button>

</form>

</div>

</body>

</html>
`
}
