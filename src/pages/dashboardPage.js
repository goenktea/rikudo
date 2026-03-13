import {layout} from "../utils/html.js"

export function dashboardPage(docs){

let list=""

docs.forEach(d=>{
list+=`<li><a href="/doc/${d.id}">${d.name}</a></li>`
})

const content = `

<h3>History</h3>

<ul>
${list}
</ul>

<h3>Buat Dokumen Baru</h3>

<form method="POST" action="/create-doc">

<input name="name" placeholder="contoh Januari 2026">

<button>Buat</button>

</form>

`

return layout("Dashboard",content)
}
