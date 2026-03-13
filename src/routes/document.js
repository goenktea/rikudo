import {docPage,editPage} from "../pages/docPage.js"

export async function viewDoc(id,env){

const doc = await env.DB.prepare(
"SELECT * FROM documents WHERE id=?"
).bind(id).first()

const customers = await env.DB.prepare(
"SELECT * FROM customers WHERE document_id=? LIMIT 100"
).bind(id).all()

return new Response(
docPage(doc,customers.results),
{headers:{ "content-type":"text/html;charset=UTF-8"}}
)

}

/* ADD CUSTOMER */

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

/* EDIT CUSTOMER */

export async function editCustomer(id,env){

const data = await env.DB.prepare(
"SELECT * FROM customers WHERE id=?"
).bind(id).first()

return new Response(
editPage(data),
{headers:{ "content-type":"text/html;charset=UTF-8"}}
)

}

/* UPDATE CUSTOMER */

export async function updateCustomer(request,env){

const form = await request.formData()

const id = form.get("id")

const name = form.get("name")
const address = form.get("address")
const phone = form.get("phone")

const total = Number(form.get("total"))
const paid = Number(form.get("paid"))

const remain = total - paid

await env.DB.prepare(`
UPDATE customers
SET name=?,address=?,phone=?,total_bill=?,paid=?,remaining=?
WHERE id=?
`)
.bind(name,address,phone,total,paid,remain,id)
.run()

const url = new URL(request.url)

return Response.redirect(url.origin + "/dashboard")

}

/* DELETE CUSTOMER */

export async function deleteCustomer(id,env){

await env.DB.prepare(
"DELETE FROM customers WHERE id=?"
).bind(id).run()

return new Response(
"<script>history.back()</script>",
{headers:{ "content-type":"text/html"}}
)

}
