export default async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const targetUrl = `http://open.sc198.cc${url.pathname}${url.search}`;  // 强制使用 http

  const response = await fetch(targetUrl, {
    method: req.method,
    headers: req.headers,
    body: req.body,
  });

  const headers = new Headers(response.headers);
  headers.set("X-Proxy-By", "Deno Proxy Example");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}