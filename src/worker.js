import { login } from "./routes/login"
import { dashboard } from "./routes/dashboard"
import { documentRoute } from "./routes/document"

export default {

async fetch(request, env) {

const url = new URL(request.url)
const path = url.pathname


// LOGIN PAGE
if (path === "/") {
return login(request)
}


// DASHBOARD
if (path === "/dashboard") {
return dashboard(request, env)
}


// SEMUA ROUTE /doc/*
if (path.startsWith("/doc")) {
return documentRoute(request, env)
}


// CSS
if (path === "/style.css") {
return env.ASSETS.fetch(request)
}


return new Response("404 page not found", {status:404})

}

}
