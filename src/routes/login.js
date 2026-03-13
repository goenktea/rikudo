import {loginPage} from "../pages/loginPage.js"

export async function loginRoute(request){

if(request.method === "POST"){

const form = await request.formData()

const u = form.get("username")
const p = form.get("password")

if(u === "admin" && p === "123456"){

const url = new URL(request.url)

return Response.redirect(url.origin + "/dashboard")

}

return new Response(loginPage("Login gagal"),{
headers:{ "content-type":"text/html" }
})

}

return new Response(loginPage(),{
headers:{ "content-type":"text/html" }
})

}
