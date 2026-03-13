import {loginRoute} from "./routes/login.js"
import {dashboardRoute,createDoc,deleteDoc} from "./routes/dashboard.js"
import {viewDoc,addCustomer,editCustomer,updateCustomer,deleteCustomer} from "./routes/document.js"

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
return dashboardRoute(request,env)
}

/* CREATE DOC */

if(path === "/create-doc"){
return createDoc(request,env)
}

/* DELETE DOC */

if(path.startsWith("/delete-doc/")){
const id = path.split("/")[2]
return deleteDoc(id,request,env)
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

/* EDIT CUSTOMER */

if(path.startsWith("/edit/")){
const id = path.split("/")[2]
return editCustomer(id,env)
}

/* UPDATE CUSTOMER */

if(path === "/update-customer"){
return updateCustomer(request,env)
}

/* DELETE CUSTOMER */

if(path.startsWith("/delete/")){
const id = path.split("/")[2]
return deleteCustomer(id,env)
}

return new Response("404 Not Found")

}

}
