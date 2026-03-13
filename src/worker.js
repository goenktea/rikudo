import {loginRoute} from "./routes/login.js"
import {dashboardRoute,createDoc} from "./routes/dashboard.js"
import {viewDoc,addCustomer} from "./routes/document.js"

export default {

async fetch(request,env){

const url = new URL(request.url)
const path = url.pathname

if(path==="/style.css"){
const css = await fetch(new URL("../public/style.css",import.meta.url))
return new Response(css.body,{headers:{"content-type":"text/css"}})
}

if(path==="/" || path==="/login"){
return loginRoute(request)
}

if(path==="/dashboard"){
return dashboardRoute(env)
}

if(path==="/create-doc"){
return createDoc(request,env)
}

if(path.startsWith("/doc/")){
const id = path.split("/")[2]
return viewDoc(id,env)
}

if(path==="/add-customer"){
return addCustomer(request,env)
}

return new Response("404")

}

}
