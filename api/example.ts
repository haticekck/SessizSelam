// Vercel Serverless Function örneği
// Bu dosya, gelecekte API route'ları eklemek için bir örnektir
// 
// Kullanım:
// - Bu dosyayı silip kendi API route'larınızı oluşturabilirsiniz
// - Vercel otomatik olarak /api/* path'lerini bu fonksiyonlara yönlendirir
// - Örnek: api/users.ts -> /api/users endpoint'i olur
//
// İki format desteklenir:
// 1. Web API formatı (aşağıdaki gibi - ek paket gerekmez)
// 2. @vercel/node formatı (daha fazla özellik için: npm install @vercel/node)

export default async function handler(req: Request): Promise<Response> {
  // req.method, req.url, req.headers, req.json() gibi Web API özelliklerini kullanabilirsiniz
  const method = req.method;
  const url = new URL(req.url);
  
  return new Response(
    JSON.stringify({
      message: 'Bu bir örnek API endpoint\'idir',
      method,
      path: url.pathname,
      timestamp: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
