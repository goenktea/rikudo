export function editPage(data){

return `
<html>

<head>

<meta charset="UTF-8">

<title>Edit Pelanggan</title>

<style>

body{
font-family:Arial;
background:#f2f2f2;
padding:30px;
}

.box{
background:white;
padding:20px;
border-radius:8px;
max-width:400px;
margin:auto;
}

input{
width:100%;
padding:8px;
margin:6px 0;
}

button{
background:#007bff;
color:white;
border:none;
padding:10px;
}

</style>

</head>

<body>

<div class="box">

<h2>Edit Pelanggan</h2>

<form method="POST" action="/update-customer">

<input type="hidden" name="id" value="${data.id}">

<input name="name" value="${data.name}">
<input name="address" value="${data.address}">
<input name="phone" value="${data.phone}">
<input name="total" value="${data.total_bill}">
<input name="paid" value="${data.paid}">

<button>Simpan</button>

</form>

</div>

</body>

</html>
`
}
