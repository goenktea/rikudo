import {dashboardPage} from "../pages/dashboardPage.js"

/* DASHBOARD */

export async function dashboardRoute(request,env){

const docs = await env.DB.prepare(
"SELECT * FROM documents ORDER BY id DESC"
).all()

/* jika ada dokumen langsung buka terbaru */

if(docs.results.length > 0){

const latest = docs.results[0].id

const url = new URL(request.url)

return Response.redirect(
url.origin + "/doc/" + latest,
302
)

}

/* jika belum ada dokumen tampilkan halaman history */

return new Response(
dashboardPage(docs.results),
{
headers:{
"content-type":"text/html;charset=UTF-8"
}
}
)

}

/* BUAT DOKUMEN BARU */

export async function createDoc(request,env){

const form = await request.formData()

const name = form.get("name")

await env.DB.prepare(
"INSERT INTO documents(name,created_at) VALUES(?,datetime('now'))"
).bind(name).run()

const url = new URL(request.url)

const latest = await env.DB.prepare(
"SELECT id FROM documents ORDER BY id DESC LIMIT 1"
).first()

return Response.redirect(
url.origin + "/doc/" + latest.id,
302
)

}

/* HAPUS DOKUMEN */

export async function deleteDoc(id,request,env){

await env.DB.prepare(
"DELETE FROM customers WHERE document_id=?"
).bind(id).run()

await env.DB.prepare(
"DELETE FROM documents WHERE id=?"
).bind(id).run()

const url = new URL(request.url)

return Response.redirect(
url.origin + "/dashboard",
302
)

}
