export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    const action = url.searchParams.get('action') || (await req.json()).action;

    const db = env.D1; // D1 binding

    if(action==='login'){
      const {username,password} = await req.json();
      // contoh sederhana, hardcode user
      if(username==='admin' && password==='1234') return new Response(JSON.stringify({success:true}), {status:200});
      return new Response(JSON.stringify({success:false}), {status:200});
    }

    if(action==='latestNote'){
      const res = await db.prepare('SELECT * FROM notes ORDER BY created_at DESC LIMIT 1').all();
      if(res.results.length===0) return new Response(JSON.stringify({success:false}));
      return new Response(JSON.stringify({success:true, note:res.results[0]}));
    }

    if(action==='getNote'){
      const id = url.searchParams.get('id');
      const res = await db.prepare('SELECT * FROM notes WHERE id=?').bind(id).first();
      return new Response(JSON.stringify({success:true, note:res}));
    }

    // Tambah, edit, hapus catatan & customer bisa ditambah di sini
    return new Response(JSON.stringify({success:false, msg:'action tidak dikenali'}));
  }
}
