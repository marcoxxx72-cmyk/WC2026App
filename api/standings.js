export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');

  const key = process.env.FOOTBALL_DATA_KEY;
  if (!key) return res.status(500).json({error: 'FOOTBALL_DATA_KEY not set'});

  try {
    const r = await fetch('https://api.football-data.org/v4/competitions/2000/standings', {
      headers: {'X-Auth-Token': key}
    });
    if (!r.ok) return res.status(r.status).json({error: 'API error ' + r.status});
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({error: e.message});
  }
}
