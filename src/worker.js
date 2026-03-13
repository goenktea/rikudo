import { loginRoute } from "./routes/login.js"
import { dashboardRoute, createDoc, deleteDoc } from "./routes/dashboard.js"
import { viewDoc, addCustomer, editCustomer, updateCustomer, deleteCustomer } from "./routes/document.js"

export default {

async fetch(request, env) {

const url = new URL(request.url)
const path = url.pathname

/* SERVE CSS */

if (path === "/style.css") {

return new Response(`

body{
font-family:Arial, sans-serif;
margin:0;
background:#f4f6f9;
}

header{
background:#2c3e50;
color:white;
padding:15px;
font-size:20px;
display:flex;
align-items:center;
gap:10px;
}

header span{
cursor:pointer;
font-size:22px;
}

.menu{
display:none;
background:#34495e;
padding:10px;
}

.menu a{
color:white;
display:block;
padding:8px;
text-decoration:none;
}

.menu a:hover{
background:#2c3e50;
}

.container{
padding:20px;
}

table{
width:100%;
border-collapse:collapse;
margin-top:20px;
background:white;
}

th,td{
border:1px solid #ddd;
padding:8px;
}

th{
background:#2c3e50;
color:white;
}

button{
background:#3498db;
border:none;
padding:10px 15px;
color:white;
cursor:pointer;
margin-top:10px;
}

button:hover{
background:#2980b9;
}

footer{
text-align:center;
padding:15px;
background:#eee;
margin-top:40px;
}

`,{
headers:{
"content-type":"text/css"
}
})

}

/* LOGIN */

if (path === "/" || path === "/login") {
return loginRoute(request)
}

/* DASHBOARD */

if (path === "/dashboard") {
return dashboardRoute(request, env)
}

/* CREATE DOCUMENT */

if (path === "/create-doc") {
return createDoc(request, env)
}

/* DELETE DOCUMENT */

if (path.startsWith("/delete-doc/")) {
const id = path.split("/")[2]
return deleteDoc(id, request, env)
}

/* VIEW DOCUMENT */

if (path.startsWith("/doc/")) {
const id = path.split("/")[2]
return viewDoc(id, env)
}

/* ADD CUSTOMER */

if (path === "/add-customer") {
return addCustomer(request, env)
}

/* EDIT CUSTOMER */

if (path.startsWith("/edit/")) {
const id = path.split("/")[2]
return editCustomer(id, env)
}

/* UPDATE CUSTOMER */

if (path === "/update-customer") {
return updateCustomer(request, env)
}

/* DELETE CUSTOMER */

if (path.startsWith("/delete/")) {
const id = path.split("/")[2]
return deleteCustomer(id, env)
}

return new Response("404 Not Found")

}

}
