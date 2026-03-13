import {dashboardPage} from "../pages/dashboardPage.js"

export async function dashboardRoute(request,env){

const docs = await env.DB.prepare(
"SELECT * FROM documents ORDER BY id DESC"
).all()

if(docs.results.length > 0){

const latest = docs.results[0].id

const url = new URL(request.url)

return Response.redirect(
url.origin + "/doc/" + latest,
302
)

}

return new Response(
dashboardPage(docs.results),
{
headers:{
"content-type":"text/html;charset=UTF-8"
}
}
)

}
