import {dashboardPage} from "../pages/dashboardPage.js"

export async function dashboardRoute(env){

const docs = await env.DB.prepare(
"SELECT * FROM documents ORDER BY id DESC"
).all()

return new Response(
dashboardPage(docs.results),
{headers:{ "content-type":"text/html;charset=UTF-8"}}
)

}

/* CREATE DOC */

export async function createDoc(request,env){

const form = await request.formData()

const name = form.get("name")

await env.DB.prepare(
"INSERT INTO documents(name,created_at) VALUES(?,datetime('now'))"
).bind(name).run()

const url = new URL(request.url)

return Response.redirect(url.origin + "/dashboard")

}

/* DELETE DOC */

export async function deleteDoc(id,env){

await env.DB.prepare(
"DELETE FROM customers WHERE document_id=?"
).bind(id).run()

await env.DB.prepare(
"DELETE FROM documents WHERE id=?"
).bind(id).run()

return new Response(
"<script>location='/dashboard'</script>",
{headers:{ "content-type":"text/html"}}
)

}
