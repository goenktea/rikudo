import {layout} from "../utils/html.js"

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
</tr>
`
})

const content = `

<h2>Daftar tagihan pelanggan wifi RIKUDO_NET bulan ${doc.name}</h2>

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

`

return layout("Dokumen",content)

}
