import {layout} from "../utils/layout.js"

export function dashboardPage(docs){

const content = `

<h3>History Tagihan</h3>

<ul>

${docs.map(d=>`

<li>

<a href="/doc/${d.id}">${d.name}</a>

<a href="/delete-doc/${d.id}">&#128465;</a>

</li>

`).join("")}

</ul>

`

return layout("Dashboard",content)

}
