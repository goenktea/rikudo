import { dashboardPage } from "../pages/dashboardPage"

export async function dashboard(request, env) {

const doc = await env.DB
.prepare("SELECT * FROM documents ORDER BY id DESC LIMIT 1")
.first()


if (!doc) {
return new Response("Belum ada dokumen. Buat dokumen dulu dari menu ☰")
}


const customers = await env.DB
.prepare("SELECT * FROM customers WHERE doc_id=? ORDER BY id LIMIT 100")
.bind(doc.id)
.all()


return new Response(
dashboardPage(doc, customers.results),
{
headers:{ "content-type":"text/html"}
})

}
