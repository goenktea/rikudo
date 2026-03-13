export function layout(title,content){

return `
<!DOCTYPE html>
<html>

<head>

<meta charset="UTF-8">

<title>${title}</title>

<style>

body{
font-family:Arial;
margin:0;
background:#f4f6f9;
}

header{
background:#2c3e50;
color:white;
padding:15px;
font-size:20px;
display:flex;
align-items:center;
gap:10px;
}

header span{
cursor:pointer;
font-size:22px;
}

.menu{
display:none;
background:#34495e;
padding:10px;
}

.menu a{
display:block;
color:white;
padding:8px;
text-decoration:none;
}

.menu a:hover{
background:#2c3e50;
}

.container{
padding:20px;
}

table{
width:100%;
border-collapse:collapse;
background:white;
margin-top:20px;
}

th,td{
border:1px solid #ddd;
padding:8px;
}

th{
background:#2c3e50;
color:white;
}

button{
background:#3498db;
border:none;
padding:10px 15px;
color:white;
cursor:pointer;
margin-top:10px;
}

footer{
text-align:center;
padding:15px;
margin-top:40px;
background:#eee;
}

</style>

<script>

function toggleMenu(){
const m=document.getElementById("menu")
m.style.display = m.style.display==="block" ? "none":"block"
}

</script>

</head>

<body>

<header>

<span onclick="toggleMenu()">&#9776;</span>

<b>RIKUDO_NET</b>

</header>

<div id="menu" class="menu">

<a href="/dashboard">History</a>

<form method="POST" action="/create-doc">

<input name="name" placeholder="nama dokumen (contoh: januari 2026)" required>

<button type="submit">Buat Dokumen Baru</button>

</form>

</div>

<div class="container">

${content}

</div>

<footer>

copyright 2026 rikudo_net

</footer>

</body>
</html>
`

}
