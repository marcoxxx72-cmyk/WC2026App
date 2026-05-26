export default async function handler(req, res) {
  const { url } = req.query;
  if (!url || !url.startsWith('https://upload.wikimedia.org/')) {
    return res.status(400).end();
  }
  try {
    const response = await fetch(decodeURIComponent(url), {
      headers: { 'User-Agent': 'WC2026App/1.0 (wc-2026-app.vercel.app; contact: marquito72@icloud.com)' }
    });
    if (!response.ok) return res.status(response.status).end();
    const buffer = await response.arrayBuffer();
    res.setHeader('Content-Type', response.headers.get('content-type') || 'image/jpeg');
    res.setHeader('Cache-Control', 'public, max-age=604800');
    res.status(200).send(Buffer.from(buffer));
  } catch(e) {
    res.status(500).end();
  }
}
