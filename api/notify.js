// Vercel Serverless Function - Auto Match Notifications
// Called every hour by Vercel Cron

const ONESIGNAL_APP_ID = '29a090bc-9893-46a1-87a3-e3f162e2271d';
const ONESIGNAL_API_KEY = process.env.ONESIGNAL_API_KEY;

const FIXTURES = [
  {date:'2026-06-11',time:'15:00',home:'Mexico',away:'South Africa',tv:{en:'BBC/ITV',fr:'beIN Sports',es:'RTVE',pt:'Sport TV',it:'RAI 1',de:'ARD/ZDF'}},
  {date:'2026-06-11',time:'22:00',home:'South Korea',away:'Czechia',tv:{en:'BBC/ITV',fr:'beIN Sports',es:'DAZN',pt:'Sport TV',it:'DAZN',de:'MagentaTV'}},
  {date:'2026-06-12',time:'15:00',home:'Canada',away:'Bosnia',tv:{en:'BBC/ITV',fr:'beIN Sports',es:'DAZN',pt:'Sport TV',it:'DAZN',de:'MagentaTV'}},
  {date:'2026-06-12',time:'21:00',home:'USA',away:'Paraguay',tv:{en:'BBC/ITV',fr:'beIN Sports',es:'DAZN',pt:'Sport TV',it:'DAZN',de:'ARD/ZDF'}},
  {date:'2026-06-13',time:'15:00',home:'Qatar',away:'Switzerland',tv:{en:'BBC/ITV',fr:'beIN Sports',es:'DAZN',pt:'Sport TV',it:'DAZN',de:'MagentaTV'}},
  {date:'2026-06-13',time:'18:00',home:'Brazil',away:'Morocco',tv:{en:'BBC/ITV',fr:'M6',es:'DAZN',pt:'Sport TV',it:'RAI 1',de:'ARD/ZDF'}},
  {date:'2026-06-13',time:'21:00',home:'Haiti',away:'Scotland',tv:{en:'BBC/ITV',fr:'beIN Sports',es:'DAZN',pt:'Sport TV',it:'DAZN',de:'MagentaTV'}},
  {date:'2026-06-14',time:'00:00',home:'Australia',away:'Turkey',tv:{en:'BBC/ITV',fr:'beIN Sports',es:'DAZN',pt:'Sport TV',it:'DAZN',de:'MagentaTV'}},
  {date:'2026-06-14',time:'15:00',home:'Germany',away:'Curacao',tv:{en:'BBC/ITV',fr:'beIN Sports',es:'RTVE',pt:'Sport TV',it:'DAZN',de:'ARD/ZDF'}},
  {date:'2026-06-14',time:'18:00',home:'Netherlands',away:'Japan',tv:{en:'BBC/ITV',fr:'beIN Sports',es:'DAZN',pt:'Sport TV',it:'DAZN',de:'MagentaTV'}},
  {date:'2026-06-15',time:'15:00',home:'Spain',away:'Cape Verde',tv:{en:'BBC/ITV',fr:'beIN Sports',es:'RTVE La 1',pt:'Sport TV',it:'RAI 1',de:'ARD'}},
  {date:'2026-06-16',time:'15:00',home:'France',away:'Senegal',tv:{en:'BBC/ITV',fr:'M6',es:'RTVE',pt:'Sport TV',it:'RAI 1',de:'ARD/ZDF'}},
  {date:'2026-06-17',time:'15:00',home:'Portugal',away:'DR Congo',tv:{en:'BBC/ITV',fr:'beIN Sports',es:'DAZN',pt:'Sport TV',it:'DAZN',de:'MagentaTV'}},
  {date:'2026-06-17',time:'18:00',home:'England',away:'Croatia',tv:{en:'BBC/ITV',fr:'beIN Sports',es:'DAZN',pt:'Sport TV',it:'DAZN',de:'MagentaTV'}},
  {date:'2026-06-16',time:'21:00',home:'Argentina',away:'Algeria',tv:{en:'BBC/ITV',fr:'M6',es:'RTVE',pt:'Sport TV',it:'RAI 1',de:'ARD/ZDF'}},
  {date:'2026-07-14',time:'19:00',home:'Semi-Final 1',away:'Semi-Final 2',tv:{en:'BBC/ITV',fr:'M6',es:'RTVE',pt:'Sport TV',it:'RAI 1',de:'ARD/ZDF'}},
  {date:'2026-07-19',time:'19:00',home:'FINAL',away:'FINAL',tv:{en:'BBC/ITV',fr:'M6',es:'RTVE',pt:'Sport TV',it:'RAI 1',de:'ARD/ZDF'}}
];

function getMatchDateTime(f) {
  const [y,mo,d] = f.date.split('-').map(Number);
  const [h,m] = f.time.split(':').map(Number);
  return new Date(Date.UTC(y, mo-1, d, h+4, m)); // ET = UTC-4
}

async function sendPush(headings, contents) {
  await fetch('https://onesignal.com/api/v1/notifications', {
    method:'POST',
    headers:{'Content-Type':'application/json','Authorization':'Key '+ONESIGNAL_API_KEY},
    body: JSON.stringify({
      app_id: ONESIGNAL_APP_ID,
      included_segments: ['All'],
      headings, contents,
      url: 'https://wc-2026-app.vercel.app'
    })
  });
}

export default async function handler(req, res) {
  const now = new Date();
  const sent = [];

  for (const f of FIXTURES) {
    const mt = getMatchDateTime(f);
    const diff = (mt - now) / 3600000; // hours
    const h = f.home, a = f.away, tv = f.tv;

    // 24h before
    if (diff > 23 && diff <= 24) {
      await sendPush(
        {en:`⚽ Tomorrow: ${h} vs ${a}!`,fr:`⚽ Demain: ${h} vs ${a}!`,es:`⚽ Mañana: ${h} vs ${a}!`,pt:`⚽ Amanhã: ${h} vs ${a}!`,it:`⚽ Domani: ${h} vs ${a}!`,de:`⚽ Morgen: ${h} vs ${a}!`},
        {en:`${f.time} ET | 📺 ${tv.en}`,fr:`${f.time} ET | 📺 ${tv.fr}`,es:`${f.time} ET | 📺 ${tv.es}`,pt:`${f.time} ET | 📺 ${tv.pt}`,it:`${f.time} ET | 📺 ${tv.it}`,de:`${f.time} ET | 📺 ${tv.de}`}
      );
      sent.push(`24h: ${h} vs ${a}`);
    }

    // 1h before
    if (diff > 0.9 && diff <= 1.1) {
      await sendPush(
        {en:`⚽ In 1h: ${h} vs ${a}!`,fr:`⚽ Dans 1h: ${h} vs ${a}!`,es:`⚽ En 1h: ${h} vs ${a}!`,pt:`⚽ Em 1h: ${h} vs ${a}!`,it:`⚽ Tra 1h: ${h} vs ${a}!`,de:`⚽ In 1h: ${h} vs ${a}!`},
        {en:`Kick off ${f.time} ET | 📺 ${tv.en}`,fr:`Coup d'envoi ${f.time} ET | 📺 ${tv.fr}`,es:`Inicio ${f.time} ET | 📺 ${tv.es}`,pt:`Inicio ${f.time} ET | 📺 ${tv.pt}`,it:`Inizio ${f.time} ET | 📺 ${tv.it}`,de:`Anpfiff ${f.time} ET | 📺 ${tv.de}`}
      );
      sent.push(`1h: ${h} vs ${a}`);
    }

    // Kickoff
    if (diff > -0.1 && diff <= 0.1) {
      await sendPush(
        {en:`🟢 LIVE: ${h} vs ${a}`,fr:`🟢 LIVE: ${h} vs ${a}`,es:`🟢 EN VIVO: ${h} vs ${a}`,pt:`🟢 AO VIVO: ${h} vs ${a}`,it:`🟢 IN DIRETTA: ${h} vs ${a}`,de:`🟢 LIVE: ${h} vs ${a}`},
        {en:'Match started! Open app!',fr:"C'est parti! Ouvrez l'app!",es:'Ha comenzado! Abre la app!',pt:'Comecou! Abra o app!',it:"Iniziata! Apri l'app!",de:'Begonnen! App öffnen!'}
      );
      sent.push(`kickoff: ${h} vs ${a}`);
    }
  }

  res.status(200).json({ success:true, time:now.toISOString(), sent });
}
