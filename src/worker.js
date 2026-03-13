import { login } from "./routes/login"
import { dashboard } from "./routes/dashboard"
import { documentRoute } from "./routes/document"

export default {

async fetch(request, env) {

const url = new URL(request.url)
const path = url.pathname


// LOGIN
if (path === "/") {
return login(request)
}


// DASHBOARD
if (path === "/dashboard") {
return dashboard(request, env)
}


// DOCUMENT ROUTE
if (path.startsWith("/document")) {
return documentRoute(request, env)
}


// CSS dari public
if (path === "/style.css") {
return new Response(await env.ASSETS.fetch(request))
}


// TEST ROUTE
if (path === "/test") {
return new Response("worker aktif")
}


return new Response("route tidak ditemukan: " + path)

}

}
