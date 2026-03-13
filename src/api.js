export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const db = env.DB;
    let action = url.searchParams.get("action");
    let body = null;
    if(request.method==="POST") body = await request.json();
    if(!action && body) action = body.action;

    try{
      if(action==="login"){
        const {username,password} = body;
        if(username==="admin" && password==="123456") return new Response(JSON.stringify({success:true}));
        return new Response(JSON.stringify({success:false}));
      }

      if(action==="latestNote"){
        const res = await db.prepare("SELECT * FROM notes ORDER BY created_at DESC LIMIT 1").all();
        const note = res.results[0]||null;
        // ambil customers
        if(note){
          const cust = await db.prepare("SELECT * FROM customers WHERE note_id=?").bind(note.id).all();
          note.customers = cust.results||[];
        }else note.customers=[];
        return new Response(JSON.stringify({success:true,data:[note]}));
      }

      if(action==="getNote"){
        const id = url.searchParams.get("id");
        const noteRes = await db.prepare("SELECT * FROM notes WHERE id=?").bind(id).first();
        if(!noteRes) return new Response(JSON.stringify({success:false,msg:"note tidak ditemukan"}));
        const custRes = await db.prepare("SELECT * FROM customers WHERE note_id=?").bind(id).all();
        noteRes.customers = custRes.results||[];
        return new Response(JSON.stringify({success:true,data:noteRes}));
      }

      return new Response(JSON.stringify({success:false,msg:"action tidak dikenali"}));
    }catch(e){
      return new Response(JSON.stringify({success:false,msg:e.message}),{status:500});
    }
  }
};
