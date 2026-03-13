import { docPage } from "../pages/docPage"

export async function documentRoute(request, env){

const url = new URL(request.url)
const path = url.pathname


// CREATE DOCUMENT
if(path === "/document/create"){

const name = url.searchParams.get("name")

await env.DB
.prepare("INSERT INTO documents (name) VALUES (?)")
.bind(name)
.run()

return Response.redirect("/dashboard",302)

}


// DELETE CUSTOMER
if(path === "/document/delete"){

const id = url.searchParams.get("id")

await env.DB
.prepare("DELETE FROM customers WHERE id=?")
.bind(id)
.run()

return Response.redirect("/dashboard",302)

}


// EDIT PAGE
if(path === "/document/edit"){

const id = url.searchParams.get("id")

const data = await env.DB
.prepare("SELECT * FROM customers WHERE id=?")
.bind(id)
.first()

return new Response(
docPage(data),
{headers:{ "content-type":"text/html"}}
)

}

return new Response("document route")

}
