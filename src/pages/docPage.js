export function docPage(doc,customers,total,totalPaid,totalRemain){

return `
<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">
<title>RIKUDO_NET</title>

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

function tambah(docId){

const nama=prompt("Nama pelanggan")
if(!nama) return

const alamat=prompt("Alamat")
const hp=prompt("No HP / WhatsApp")
const total=prompt("Total tagihan")

const f=document.createElement("form")

f.method="POST"
f.action="/add-customer"

f.innerHTML=
"<input name='doc_id' value='"+docId+"'>"+
"<input name='name' value='"+nama+"'>"+
"<input name='address' value='"+alamat+"'>"+
"<input name='phone' value='"+hp+"'>"+
"<input name='total' value='"+total+"'>"

document.body.appendChild(f)
f.submit()

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

<h3>
Daftar tagihan pelanggan wifi RIKUDO_NET pada bulan ${doc.name}
</h3>

<button onclick="tambah(${doc.id})">
Tambah pelanggan baru
</button>

<table>

<tr>
<th>No</th>
<th>Nama</th>
<th>Alamat</th>
<th>HP</th>
<th>Total</th>
<th>Dibayar</th>
<th>Sisa</th>
<th>Edit</th>
<th>Hapus</th>
</tr>

${customers.map((c,i)=>`

<tr>

<td>${i+1}</td>
<td>${c.name}</td>
<td>${c.address}</td>
<td>${c.phone}</td>
<td>${c.total}</td>
<td>${c.paid}</td>
<td>${c.total-c.paid}</td>

<td>
<a href="/edit/${c.id}">&#9998;</a>
</td>

<td>
<a href="/delete/${c.id}">&#128465;</a>
</td>

</tr>

`).join("")}

</table>

<p>Total seluruh tagihan : ${total}</p>
<p>Total uang masuk : ${totalPaid}</p>
<p>Sisa tagihan : ${totalRemain}</p>

</div>

<footer>

copyright 2026 rikudo_net

</footer>

</body>
</html>
`
}
