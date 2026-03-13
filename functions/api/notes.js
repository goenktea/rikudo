export async function onRequest(context) {

  const { DB } = context.env;

  const result = await DB
    .prepare("SELECT * FROM notes")
    .all();

  return new Response(JSON.stringify(result.results), {
    headers: {
      "content-type": "application/json"
    }
  });

}
