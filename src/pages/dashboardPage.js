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
<a href="/doc/edit?id=${c.id}">✏️</a>
<a href="/doc/delete?id=${c.id}">🗑</a>
</td>

</tr>

`).join("")


return `

<html>

<head>

<title>RIKUDO_NET</title>

<link rel="stylesheet" href="/style.css">

</head>

<body>

<header class="topbar">

<h2>RIKUDO_NET</h2>

<div onclick="toggleMenu()">☰</div>

</header>


<div id="menuPanel" style="display:none">

<a href="/doc/history">History</a>

<a href="#" onclick="buatDoc()">Buat Dokumen Baru</a>

</div>


<h3>
Daftar tagihan pelanggan wifi RIKUDO_NET pada bulan
${doc.name}
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

if(m.style.display=="none")
m.style.display="block"
else
m.style.display="none"

}

function buatDoc(){

let name=prompt("Nama dokumen contoh: Januari 2026")

if(name){
location.href="/doc/create?name="+encodeURIComponent(name)
}

}

</script>

</body>

</html>

`
}
