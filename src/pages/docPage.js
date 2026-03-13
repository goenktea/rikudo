export function docPage(doc,customers){

let rows=""
let total=0
let paid=0
let remain=0

customers.forEach((c,i)=>{

total+=c.total_bill
paid+=c.paid
remain+=c.remaining

rows+=`
<tr>
<td>${i+1}</td>
<td>${c.name}</td>
<td>${c.address}</td>
<td>${c.phone}</td>
<td>${c.total_bill}</td>
<td>${c.paid}</td>
<td>${c.remaining}</td>
<td><a href="/edit/${c.id}">✏</a></td>
<td><a href="/delete/${c.id}">🗑</a></td>
</tr>
`
})

return `
<html>

<head>
<meta charset="UTF-8">

<title>${doc.name}</title>

<style>

body{
font-family:Arial;
margin:0;
background:#f4f6f9;
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
background:#28a745;
color:white;
border:none;
padding:8px 12px;
border-radius:5px;
}

table{
width:100%;
border-collapse:collapse;
margin-top:20px;
background:white;
}

th,td{
border:1px solid #ddd;
padding:8px;
}

th{
background:#eee;
}

</style>

<script>

function addCustomer(){

let name=prompt("Nama pelanggan")
let address=prompt("Alamat")
let phone=prompt("HP / WhatsApp")
let total=prompt("Total tagihan")
let paid=prompt("Uang diterima")

if(name){

fetch("/add-customer",{
method:"POST",
body:new URLSearchParams({
document_id:${doc.id},
name:name,
address:address,
phone:phone,
total:total,
paid:paid
})
}).then(()=>location.reload())

}

}

</script>

</head>

<body>

<header>

<h2>RIKUDO_NET</h2>

</header>

<div class="container">

<h3>Daftar tagihan pelanggan wifi RIKUDO_NET bulan ${doc.name}</h3>

<button onclick="addCustomer()">+ Tambah pelanggan</button>

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

${rows}

</table>

<h3>Total Tagihan : ${total}</h3>
<h3>Total Uang Masuk : ${paid}</h3>
<h3>Total Sisa Tagihan : ${remain}</h3>

</div>

</body>

</html>
`
}
