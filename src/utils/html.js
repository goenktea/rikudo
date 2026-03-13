export function layout(title,content){

return `
<html>

<head>

<title>${title}</title>

<link rel="stylesheet" href="/style.css">

</head>

<body>

<header>

<h2>RIKUDO_NET</h2>

</header>

<div class="container">

${content}

</div>

<footer>

copyright 2026 rikudo_net

</footer>

</body>

</html>
`
}
