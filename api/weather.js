const CITIES = [
  {name:'New York',     q:'New York,US'},
  {name:'Los Angeles',  q:'Los Angeles,US'},
  {name:'Dallas',       q:'Dallas,US'},
  {name:'San Francisco',q:'San Francisco,US'},
  {name:'Kansas City',  q:'Kansas City,US'},
  {name:'Las Vegas',    q:'Las Vegas,US'},
  {name:'Miami',        q:'Miami,US'},
  {name:'Atlanta',      q:'Atlanta,US'},
  {name:'Boston',       q:'Boston,US'},
  {name:'Philadelphia', q:'Philadelphia,US'},
  {name:'Seattle',      q:'Seattle,US'},
  {name:'Mexico City',  q:'Mexico City,MX'},
  {name:'Guadalajara',  q:'Guadalajara,MX'},
  {name:'Monterrey',    q:'Monterrey,MX'},
  {name:'Vancouver',    q:'Vancouver,CA'},
  {name:'Toronto',      q:'Toronto,CA'},
  {name:'Montreal',     q:'Montreal,CA'},
];

function owmIcon(id) {
  if (id >= 200 && id < 300) return '⛈️';
  if (id >= 300 && id < 400) return '🌦️';
  if (id >= 500 && id < 600) return '🌧️';
  if (id >= 600 && id < 700) return '❄️';
  if (id >= 700 && id < 800) return '🌫️';
  if (id === 800)             return '☀️';
  if (id === 801)             return '🌤️';
  if (id <= 803)              return '⛅';
  return '☁️';
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600');

  const key = process.env.OWM_KEY;
  if (!key) return res.status(500).json({error: 'OWM_KEY not set'});

  try {
    const results = await Promise.all(
      CITIES.map(async ({name, q}) => {
        const r = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(q)}&appid=${key}&units=metric`
        );
        if (!r.ok) return null;
        const d = await r.json();
        const temp_c = Math.round(d.main.temp);
        return {
          name,
          temp_c,
          temp_f: Math.round(temp_c * 9/5 + 32),
          condition: d.weather[0].description,
          icon: owmIcon(d.weather[0].id),
          wind: Math.round((d.wind?.speed || 0) * 3.6) + ' km/h',
          humidity: d.main.humidity + '%',
          tip: null,
        };
      })
    );

    const weather = {};
    results.forEach((w, i) => {
      if (w) weather[CITIES[i].name] = w;
    });

    res.status(200).json(weather);
  } catch (e) {
    res.status(500).json({error: e.message});
  }
}
