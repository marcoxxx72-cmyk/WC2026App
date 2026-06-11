export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const key = process.env.FOOTBALL_DATA_KEY;
  if (!key) return res.status(500).json({error: 'FOOTBALL_DATA_KEY not set'});

  const {status, dateFrom, dateTo} = req.query;
  let url = 'https://api.football-data.org/v4/competitions/2000/matches';
  const params = new URLSearchParams();
  if (status) params.set('status', status);
  if (dateFrom) params.set('dateFrom', dateFrom);
  if (dateTo) params.set('dateTo', dateTo);
  if (params.toString()) url += '?' + params.toString();

  const cacheAge = status === 'IN_PLAY,PAUSED,LIVE' ? 30 : 120;
  res.setHeader('Cache-Control', `s-maxage=${cacheAge}, stale-while-revalidate=${cacheAge * 2}`);

  try {
    const r = await fetch(url, {headers: {'X-Auth-Token': key}});
    if (!r.ok) return res.status(r.status).json({error: 'API error ' + r.status});
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({error: e.message});
  }
}
