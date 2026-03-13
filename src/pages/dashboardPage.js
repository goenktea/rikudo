export function dashboardPage(docs){

let history=""

docs.forEach(d=>{
history += `
<li>
<a href="/doc/${d.id}">${d.name}</a>
<a href="/delete-doc/${d.id}" style="color:red;margin-left:10px">✕</a>
</li>
`
})

return `
<html>

<head>
<meta charset="UTF-8">

<title>Dashboard</title>

<style>

body{
margin:0;
font-family:Arial;
background:#f4f6f9;
}

header{
background:#222;
color:white;
padding:15px;
font-size:18px;
}

.menu{
cursor:pointer;
font-size:22px;
margin-right:10px;
}

.sidebar{
width:220px;
background:#333;
color:white;
position:fixed;
top:0;
left:-220px;
height:100%;
padding-top:60px;
transition:0.3s;
}

.sidebar a{
display:block;
padding:12px;
color:white;
text-decoration:none;
}

.sidebar a:hover{
background:#444;
}

.container{
margin-left:20px;
padding:20px;
}

ul{
list-style:none;
padding:0;
}

li{
background:white;
padding:10px;
margin-bottom:5px;
border-radius:5px;
}

button{
background:#007bff;
color:white;
border:none;
padding:8px 12px;
border-radius:5px;
}

footer{
margin-top:50px;
text-align:center;
color:#666;
}

</style>

<script>

function toggleMenu(){
let s=document.getElementById("sidebar")

if(s.style.left=="0px"){
s.style.left="-220px"
}else{
s.style.left="0px"
}
}

function newDoc(){

let name=prompt("Nama dokumen contoh: Januari 2026")

if(name){
fetch("/create-doc",{
method:"POST",
body:new URLSearchParams({name:name})
}).then(()=>location.reload())
}

}

</script>

</head>

<body>

<header>

<span class="menu" onclick="toggleMenu()">☰</span>
RIKUDO_NET

</header>

<div id="sidebar" class="sidebar">

<a href="/dashboard">History</a>

<a href="#" onclick="newDoc()">Buat Dokumen Baru</a>

</div>

<div class="container">

<h2>History Tagihan</h2>

<ul>

${history}

</ul>

</div>

<footer>

© 2026 RIKUDO_NET

</footer>

</body>

</html>
`
}
