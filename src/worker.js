import {loginRoute} from "./routes/login.js"
import {dashboardRoute,createDoc} from "./routes/dashboard.js"
import {viewDoc,addCustomer} from "./routes/document.js"

export default {

async fetch(request,env){

const url = new URL(request.url)
const path = url.pathname

if(path==="/style.css"){

const css = `
body{
font-family:Arial, Helvetica, sans-serif;
background:linear-gradient(135deg,#4facfe,#00f2fe);
margin:0;
height:100vh;
display:flex;
align-items:center;
justify-content:center;
}

.login-box{
background:white;
padding:35px;
width:320px;
border-radius:10px;
box-shadow:0 10px 25px rgba(0,0,0,0.2);
text-align:center;
}

.login-box h2{
margin-bottom:10px;
}

.login-box input{
width:100%;
padding:10px;
margin:8px 0;
border:1px solid #ddd;
border-radius:5px;
}

.login-box button{
width:100%;
padding:10px;
background:#007bff;
border:none;
color:white;
border-radius:5px;
cursor:pointer;
}

.login-box button:hover{
background:#0056b3;
}

.error{
color:red;
margin-bottom:10px;
}
`

return new Response(css,{
headers:{
"content-type":"text/css"
}
})

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
