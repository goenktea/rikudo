import {loginRoute} from "./routes/login.js"
import {dashboardRoute,createDoc} from "./routes/dashboard.js"
import {viewDoc,addCustomer} from "./routes/document.js"

export default {

async fetch(request,env){

const url = new URL(request.url)
const path = url.pathname

/* ROUTE CSS */

if(path === "/style.css"){

return new Response(`

body{
font-family:Arial,Helvetica,sans-serif;
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
}

`,{
headers:{
"content-type":"text/css"
}
})

}
