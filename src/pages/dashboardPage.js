export function dashboardPage(doc, customers){

let rows = customers.map((c,i)=>`

<tr>

<td>${i+1}</td>
<td>${c.name}</td>
<td>${c.address}</td>
<td>${c.phone}</td>
<td>${c.total_bill}</td>
<td>${c.paid}</td>
<td>${c.total_bill - c.paid}</td>

<td>

<a href="/document/edit?id=${c.id}">✏️</a>
<a href="/document/delete?id=${c.id}">🗑</a>

</td>

</tr>

`).join("")


return `

<html>

<head>

<title>RIKUDO_NET</title>

<link rel="stylesheet" href="/style.css">

<style>

.menu{
display:none;
background:#eee;
padding:10px;
}

.menu a{
display:block;
padding:6px;
text-decoration:none;
}

</style>

</head>

<body>

<header class="header">

<div>RIKUDO_NET</div>

<div onclick="toggleMenu()" style="cursor:pointer">☰</div>

</header>


<div id="menuPanel" class="menu">

<a href="/dashboard">Dokumen Terbaru</a>

<a href="#">History</a>

<a href="#" onclick="buatDoc()">Buat Dokumen Baru</a>

</div>


<h3>

Daftar tagihan pelanggan wifi RIKUDO_NET pada bulan
<b>${doc.name}</b>

</h3>


<button>Tambah pelanggan baru</button>


<table>

<tr>

<th>No</th>
<th>Nama</th>
<th>Alamat</th>
<th>No HP</th>
<th>Total</th>
<th>Diterima</th>
<th>Sisa</th>
<th>Aksi</th>

</tr>

${rows}

</table>


<footer>

copyright 2026 rikudo_net

</footer>


<script>

function toggleMenu(){

let m=document.getElementById("menuPanel")

if(m.style.display==="block"){
m.style.display="none"
}else{
m.style.display="block"
}

}

function buatDoc(){

let name=prompt("Nama dokumen contoh: Januari 2026")

if(name){
location.href="/document/create?name="+encodeURIComponent(name)
}

}

</script>

</body>

</html>

`

}
