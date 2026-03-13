export async function deleteCustomer(id,env){

const data = await env.DB.prepare(
"SELECT document_id FROM customers WHERE id=?"
).bind(id).first()

await env.DB.prepare(
"DELETE FROM customers WHERE id=?"
).bind(id).run()

return new Response(
"<script>location='/doc/"+data.document_id+"'</script>",
{headers:{ "content-type":"text/html"}}
)

}
