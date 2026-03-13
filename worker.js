export default {
  async fetch(request, env) {

    const result = await env.DB
      .prepare("SELECT * FROM notes")
      .all()

    return new Response(JSON.stringify(result.results), {
      headers: { "content-type": "application/json" }
    })

  }
}
