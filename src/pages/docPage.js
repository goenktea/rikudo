export function docPage(data){

return `

<html>

<head>

<title>Edit Pelanggan</title>

<link rel="stylesheet" href="/style.css">

</head>

<body>

<h2>Edit Pelanggan</h2>

<form>

<input value="${data.name}" placeholder="nama">

<input value="${data.address}" placeholder="alamat">

<input value="${data.phone}" placeholder="no hp">

<input value="${data.total_bill}" placeholder="total tagihan">

<input value="${data.paid}" placeholder="uang diterima">

<button>Simpan</button>

</form>

</body>

</html>

`

}
