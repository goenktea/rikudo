import {layout} from "../utils/layout.js"

export function docPage(doc,customers,total,totalPaid,totalRemain){

const content = `

<h3>
Daftar tagihan pelanggan wifi RIKUDO_NET bulan ${doc.name}
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

<script>

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

`

return layout(doc.name,content)

}
