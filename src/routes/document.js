import {docPage} from "../pages/docPage.js"

export async function viewDoc(id,env){

const doc = await env.DB.prepare(
"SELECT * FROM documents WHERE id=?"
).bind(id).first()

const customers = await env.DB.prepare(
"SELECT * FROM customers WHERE document_id=? LIMIT 100"
).bind(id).all()

return new Response(
docPage(doc,customers.results),
{headers:{ "content-type":"text/html"}}
)

}

export async function addCustomer(request,env){

const form = await request.formData()

const doc = form.get("document_id")

const name = form.get("name")
const address = form.get("address")
const phone = form.get("phone")

const total = Number(form.get("total"))
const paid = Number(form.get("paid"))

const remain = total - paid

await env.DB.prepare(`
INSERT INTO customers
(document_id,name,address,phone,total_bill,paid,remaining)
VALUES(?,?,?,?,?,?,?)
`)
.bind(doc,name,address,phone,total,paid,remain)
.run()

const url = new URL(request.url)

return Response.redirect(url.origin + "/doc/" + doc)

}
