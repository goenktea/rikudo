export function loginPage(msg=""){

return `
<body class="login">

<h2>Login RIKUDO_NET</h2>

<p style="color:red">${msg}</p>

<form method="POST" action="/login">

<input name="username" placeholder="username"><br>

<input type="password" name="password" placeholder="password"><br>

<button>Login</button>

</form>

</body>
`
}
