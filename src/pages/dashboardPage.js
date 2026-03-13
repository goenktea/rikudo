export function dashboardPage(docs){

let list=""

docs.forEach(d=>{
list += `<li><a href="/doc/${d.id}">${d.name}</a></li>`
})

return `
<html>

<head>

<title>Dashboard</title>

<style>

body{
font-family:Arial;
margin:0;
background:#f2f2f2;
}

header{
background:#222;
color:white;
padding:15px;
}

.container{
padding:20px;
}

button{
padding:8px 12px;
background:#007bff;
border:none;
color:white;
border-radius:4px;
}

</style>

</head>

<body>

<header>

<h2>RIKUDO_NET</h2>

</header>

<div class="container">

<h3>History</h3>

<ul>

${list}

</ul>

<h3>Buat Dokumen Baru</h3>

<form method="POST" action="/create-doc">

<input name="name" placeholder="contoh Januari 2026">

<button>Buat</button>

</form>

</div>

</body>

</html>
`
}
