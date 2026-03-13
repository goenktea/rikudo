export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  const db = env.DB;  // binding D1 yang benar

  if (!url.pathname.startsWith('/api')) return fetch(request);

  const action = url.searchParams.get('action') || (await request.json()).action;

  try {
    if (action === 'login') {
      const { username, password } = await request.json();
      if (username === 'admin' && password === '1234')
        return new Response(JSON.stringify({ success: true }), { status: 200 });
      return new Response(JSON.stringify({ success: false }), { status: 200 });
    }

    if (action === 'latestNote') {
      const res = await db.prepare('SELECT * FROM notes ORDER BY created_at DESC LIMIT 1').all();
      return new Response(JSON.stringify({ success: true, data: res.results }), { status: 200 });
    }

    if (action === 'getNote') {
      const id = url.searchParams.get('id');
      const res = await db.prepare('SELECT * FROM notes WHERE id=?').bind(id).first();
      return new Response(JSON.stringify({ success: true, data: res }), { status: 200 });
    }

    return new Response(JSON.stringify({ success: false, msg: 'action tidak dikenali' }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ success: false, msg: e.message }), { status: 500 });
  }
}
