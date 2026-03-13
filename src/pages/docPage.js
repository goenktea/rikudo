export function docPage(doc,customers){

let rows=""
let total=0
let paid=0
let remain=0

customers.forEach((c,i)=>{

total += c.total_bill
paid += c.paid
remain += c.remaining

rows += `
<tr>
<td>${i+1}</td>
<td>${c.name}</td>
<td>${c.address}</td>
<td>${c.phone}</td>
<td>${c.total_bill}</td>
<td>${c.paid}</td>
<td>${c.remaining}</td>
</tr>
`
})

return `
<html>

<head>

<title>Dokumen</title>

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
background:#f0f0f0;
}

</style>

</head>

<body>

<header>

<h2>RIKUDO_NET</h2>

</header>

<div class="container">

<h2>Daftar tagihan bulan ${doc.name}</h2>

<h3>Tambah pelanggan</h3>

<form method="POST" action="/add-customer">

<input type="hidden" name="document_id" value="${doc.id}">

<input name="name" placeholder="Nama">

<input name="address" placeholder="Alamat">

<input name="phone" placeholder="HP">

<input name="total" placeholder="Total tagihan">

<input name="paid" placeholder="Uang diterima">

<button>Simpan</button>

</form>

<table>

<tr>

<th>No</th>
<th>Nama</th>
<th>Alamat</th>
<th>HP</th>
<th>Total</th>
<th>Dibayar</th>
<th>Sisa</th>

</tr>

${rows}

</table>

<p>Total Tagihan : ${total}</p>
<p>Total Uang Masuk : ${paid}</p>
<p>Total Sisa : ${remain}</p>

</div>

</body>

</html>
`
}
