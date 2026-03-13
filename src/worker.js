import {loginRoute} from "./routes/login.js"
import {dashboardRoute,createDoc} from "./routes/dashboard.js"
import {viewDoc,addCustomer} from "./routes/document.js"

export default {

async fetch(request,env){

const url = new URL(request.url)
const path = url.pathname

/* LOGIN */

if(path === "/" || path === "/login"){
return loginRoute(request)
}

/* DASHBOARD */

if(path === "/dashboard"){
return dashboardRoute(env)
}

/* CREATE DOCUMENT */

if(path === "/create-doc"){
return createDoc(request,env)
}

/* VIEW DOCUMENT */

if(path.startsWith("/doc/")){
const id = path.split("/")[2]
return viewDoc(id,env)
}

/* ADD CUSTOMER */

if(path === "/add-customer"){
return addCustomer(request,env)
}

return new Response("404 Not Found")

}

}
