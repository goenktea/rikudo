import {dashboardPage} from "../pages/dashboardPage.js"

/* DASHBOARD */

export async function dashboardRoute(env){

/* cek dokumen terbaru */

const latest = await env.DB.prepare(
"SELECT id FROM documents ORDER BY id DESC LIMIT 1"
).first()

/* jika ada dokumen langsung buka */

if(latest){
return Response.redirect("/doc/" + latest.id)
}

/* jika belum ada tampilkan history kosong */

const docs = await env.DB.prepare(
"SELECT * FROM documents ORDER BY id DESC"
).all()

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

/* setelah buat dokumen langsung buka */

const latest = await env.DB.prepare(
"SELECT id FROM documents ORDER BY id DESC LIMIT 1"
).first()

return Response.redirect(url.origin + "/doc/" + latest.id)

}

/* HAPUS DOKUMEN */

export async function deleteDoc(id,env){

/* hapus semua pelanggan dalam dokumen */

await env.DB.prepare(
"DELETE FROM customers WHERE document_id=?"
).bind(id).run()

/* hapus dokumen */

await env.DB.prepare(
"DELETE FROM documents WHERE id=?"
).bind(id).run()

return new Response(
"<script>location='/dashboard'</script>",
{
headers:{
"content-type":"text/html;charset=UTF-8"
}
}
)

}
