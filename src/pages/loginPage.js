export function loginPage(msg=""){

return `
<!DOCTYPE html>
<html>

<head>

<title>Login RIKUDO_NET</title>

<style>

body{
font-family:Arial,Helvetica,sans-serif;
background:linear-gradient(135deg,#4facfe,#00f2fe);
margin:0;
height:100vh;
display:flex;
align-items:center;
justify-content:center;
}

.login-box{
background:white;
padding:35px;
width:320px;
border-radius:10px;
box-shadow:0 10px 25px rgba(0,0,0,0.2);
text-align:center;
}

.login-box h2{
margin-bottom:10px;
}

.login-box input{
width:100%;
padding:10px;
margin:8px 0;
border:1px solid #ddd;
border-radius:5px;
}

.login-box button{
width:100%;
padding:10px;
background:#007bff;
border:none;
color:white;
border-radius:5px;
cursor:pointer;
}

.login-box button:hover{
background:#0056b3;
}

.error{
color:red;
margin-bottom:10px;
}

</style>

</head>

<body>

<div class="login-box">

<h2>RIKUDO_NET</h2>

<p>Login Administrator</p>

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
