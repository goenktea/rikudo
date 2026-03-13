export function docPage(data){

return `

<html>

<head>

<title>Edit Pelanggan</title>

<link rel="stylesheet" href="/style.css">

</head>

<body>

<header>

<h2>RIKUDO_NET</h2>

</header>

<h3>Edit Pelanggan</h3>

<form method="POST" action="/doc/update">

<input type="hidden" name="id" value="${data.id}">

<input name="name" value="${data.name}" placeholder="nama">

<input name="address" value="${data.address}" placeholder="alamat">

<input name="phone" value="${data.phone}" placeholder="no hp">

<input name="total_bill" value="${data.total_bill}" placeholder="total tagihan">

<input name="paid" value="${data.paid}" placeholder="uang diterima">

<button>Simpan</button>

</form>

</body>

</html>

`
}
