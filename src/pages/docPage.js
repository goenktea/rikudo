export function docPage(doc,customers,total,totalPaid,totalRemain){

return `
<!DOCTYPE html>
<html>

<head>

<meta charset="UTF-8">

<title>RIKUDO_NET</title>

<link rel="stylesheet" href="/style.css">

<script>

function toggleMenu(){
const menu=document.getElementById("menu")
menu.style.display = menu.style.display==="block" ? "none":"block"
}

function newCustomer(docId){

const name=prompt("Nama pelanggan")
if(!name)return

const address=prompt("Alamat")
const phone=prompt("No HP / WhatsApp")
const total=prompt("Total tagihan")

const form=document.createElement("form")

form.method="POST"
form.action="/add-customer"

form.innerHTML=
"<input name='doc_id' value='"+docId+"'>"+
"<input name='name' value='"+name+"'>"+
"<input name='address' value='"+address+"'>"+
"<input name='phone' value='"+phone+"'>"+
"<input name='total' value='"+total+"'>"

document.body.appendChild(form)
form.submit()

}

</script>

</head>

<body>

<header>

<span onclick="toggleMenu()" style="cursor:pointer">&#9776;</span>

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

<button onclick="newCustomer(${doc.id})">
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

<div class="totals">

<p>Total seluruh tagihan : ${total}</p>

<p>Total uang masuk : ${totalPaid}</p>

<p>Sisa tagihan : ${totalRemain}</p>

</div>

</div>

<footer>

copyright 2026 rikudo_net

</footer>

</body>
</html>
`
}
