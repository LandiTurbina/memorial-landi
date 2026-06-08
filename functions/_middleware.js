const STORE_HOST = "loja.landiturbina.com.br";
const ENCONTRO_HOST = "encontro.landiturbina.com.br";
const MAIN_HOSTS = new Set(["landiturbina.com.br", "www.landiturbina.com.br"]);

const PUBLIC_FILE = /\.[^/]+$/;

const isAssetRequest = (url) =>
  url.pathname.startsWith("/assets/") ||
  url.pathname.startsWith("/audio/") ||
  url.pathname === "/favicon.ico" ||
  url.pathname === "/favicon.png" ||
  url.pathname === "/robots.txt" ||
  PUBLIC_FILE.test(url.pathname);

const redirectTo = (url, host, pathname) => {
  const target = new URL(url);
  target.protocol = "https:";
  target.hostname = host;
  target.pathname = pathname;
  return Response.redirect(target.toString(), 301);
};

const withNoIndex = async (responsePromise) => {
  const response = await responsePromise;
  const headers = new Headers(response.headers);
  headers.set("X-Robots-Tag", "noindex, follow");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const host = url.hostname.toLowerCase();

  if (host === ENCONTRO_HOST) {
    return withNoIndex(context.next());
  }

  if (!MAIN_HOSTS.has(host) || isAssetRequest(url)) {
    return context.next();
  }

  if (url.pathname === "/encontro" || url.pathname === "/encontro/") {
    return redirectTo(url, ENCONTRO_HOST, "/");
  }

  if (url.pathname.startsWith("/encontro/")) {
    return redirectTo(url, ENCONTRO_HOST, url.pathname.replace(/^\/encontro/, "") || "/");
  }

  if (url.pathname === "/novociclo" || url.pathname.startsWith("/novociclo/")) {
    return context.next();
  }

  return redirectTo(url, STORE_HOST, url.pathname);
}
