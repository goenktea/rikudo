export async function onRequest(context) {
  const { request, env, params } = context;
  const url = new URL(request.url);
  const db = env.D1;

  // Hanya handle /api/...
  if(!url.pathname.startsWith('/api')) {
    return fetch(request); // fallback ke Pages static
  }

  const action = url.searchParams.get('action');
  
  if(action==='login'){
    const {username,password} = await request.json();
    if(username==='admin' && password==='1234') return new Response(JSON.stringify({success:true}));
    return new Response(JSON.stringify({success:false}));
  }

  if(action==='latestNote'){
    const res = await db.prepare('SELECT * FROM notes ORDER BY created_at DESC LIMIT 1').all();
    if(res.results.length===0) return new Response(JSON.stringify({success:false}));
    return new Response(JSON.stringify({success:true, note:res.results[0]}));
  }

  return new Response(JSON.stringify({success:false, msg:'action tidak dikenali'}));
}
