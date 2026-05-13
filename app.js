// ── INJECT NAV CSS ──
(function(){
  var s=document.createElement('style');
  s.textContent='#wc-nav-inner{flex-wrap:nowrap;min-width:max-content;justify-content:flex-start;width:auto;}@media(min-width:768px){#wc-nav-inner{flex-wrap:wrap;min-width:unset;justify-content:center;width:100%;}}';
  document.head.appendChild(s);
})();

var STADIUMS = [
  {name:'MetLife Stadium',city:'New York / New Jersey',country:'USA',flag:'🇺🇸',cap:82500,surface:'Grass',roof:'Open',matches:8,final:true,lat:40.8135,lng:-74.0745,
   facts:['Hosts the WC 2026 Final','Largest stadium in the tournament','Home of NY Giants & Jets']},
  {name:'SoFi Stadium',city:'Los Angeles',country:'USA',flag:'🇺🇸',cap:70240,surface:'Grass',roof:'Partial',matches:8,final:false,lat:33.9534,lng:-118.3392,
   facts:['Most expensive stadium ever built ($5.5B)','Opened in 2020','State-of-the-art technology']},
  {name:'AT&T Stadium',city:'Dallas',country:'USA',flag:'🇺🇸',cap:80000,surface:'Grass',roof:'Retractable',matches:9,final:false,lat:32.7473,lng:-97.0945,
   facts:['Retractable roof for comfort','Home of Dallas Cowboys NFL','Giant HD video screen']},
  {name:"Levi's Stadium",city:'San Francisco',country:'USA',flag:'🇺🇸',cap:68500,surface:'Grass',roof:'Open',matches:8,final:false,lat:37.4033,lng:-121.9694,
   facts:['Silicon Valley tech hub location','Home of San Francisco 49ers','Solar panels on roof']},
  {name:'Arrowhead Stadium',city:'Kansas City',country:'USA',flag:'🇺🇸',cap:76416,surface:'Grass',roof:'Open',matches:7,final:false,lat:39.0489,lng:-94.4839,
   facts:['Loudest NFL stadium ever recorded','Home of Kansas City Chiefs','Opening match venue']},
  {name:'Allegiant Stadium',city:'Las Vegas',country:'USA',flag:'🇺🇸',cap:65000,surface:'Grass',roof:'Fixed',matches:8,final:false,lat:36.0909,lng:-115.1833,
   facts:['Newest stadium in tournament','Fully enclosed domed stadium','Las Vegas Raiders home']},
  {name:'Estadio Azteca',city:'Mexico City',country:'Mexico',flag:'🇲🇽',cap:87523,surface:'Grass',roof:'Open',matches:5,final:false,lat:19.3029,lng:-99.1504,
   facts:['Only stadium to host 3 World Cups','Maradona Hand of God goal here','Iconic football cathedral']},
  {name:'Estadio Akron',city:'Guadalajara',country:'Mexico',flag:'🇲🇽',cap:49850,surface:'Grass',roof:'Partial',matches:5,final:false,lat:20.6817,lng:-103.4593,
   facts:['Modern design opened 2010','Home of Chivas de Guadalajara','Mountain views from stands']},
  {name:'Estadio BBVA',city:'Monterrey',country:'Mexico',flag:'🇲🇽',cap:53500,surface:'Grass',roof:'Open',matches:5,final:false,lat:25.6693,lng:-100.2436,
   facts:['Stunning mountain backdrop','Home of CF Monterrey','One of Mexicos finest stadiums']},
  {name:'BC Place',city:'Vancouver',country:'Canada',flag:'🇨🇦',cap:54500,surface:'Artificial',roof:'Retractable',matches:7,final:false,lat:49.2767,lng:-123.1116,
   facts:['Only Canadian stadium with retractable roof','Beautiful waterfront location','Hosted 2010 Winter Olympics events']},
  {name:'BMO Field',city:'Toronto',country:'Canada',flag:'🇨🇦',cap:30000,surface:'Grass',roof:'Open',matches:6,final:false,lat:43.6333,lng:-79.4186,
   facts:['Smallest stadium in tournament','Expansion planned for WC 2026','Home of Toronto FC MLS']},
  {name:'Stade Olympique',city:'Montreal',country:'Canada',flag:'🇨🇦',cap:61004,surface:'Artificial',roof:'Retractable',matches:6,final:false,lat:45.5597,lng:-73.5517,
   facts:['Built for 1976 Olympics','Iconic tower structure','Bilingual French-English city']}
];

var LEGENDS = [
  {name:'Pele',flag:'🇧🇷',years:'1958-1970',caps:92,goals:77,wc:3,wc_goals:12,club:'Santos',pos:'FW',
   quote:'The more difficult the victory, the greater the happiness in winning.',
   facts:['Only player to win 3 World Cups','Scored 1281 goals in career','World Cup winner at just 17 years old']},
  {name:'Diego Maradona',flag:'🇦🇷',years:'1982-1994',caps:91,goals:34,wc:1,wc_goals:8,club:'Napoli',pos:'FW',
   quote:'I am Diego, not God. But I play like God.',
   facts:['Hand of God + Goal of the Century in same game','Led Argentina to 1986 WC title','Greatest dribbler of all time']},
  {name:'Zinedine Zidane',flag:'🇫🇷',years:'1994-2006',caps:108,goals:31,wc:1,wc_goals:5,club:'Real Madrid',pos:'MF',
   quote:'I always dreamed of winning the World Cup for France.',
   facts:['World Cup winner 1998 with France','3x Champions League winner as manager','Golden Ball at 2006 WC despite red card']},
  {name:'Ronaldo R9',flag:'🇧🇷',years:'1994-2006',caps:98,goals:62,wc:2,wc_goals:15,club:'Barcelona/Inter/Real',pos:'FW',
   quote:'I am not going to be remembered for my goals but for how I played.',
   facts:['Top scorer in WC history with 15 goals','Won WC 1994 and 2002','Overcame serious injuries to reach the top']},
  {name:'Ronaldinho',flag:'🇧🇷',years:'2002-2010',caps:97,goals:33,wc:1,wc_goals:4,club:'Barcelona',pos:'FW',
   quote:'I learned all about life with a ball at my feet.',
   facts:['Ballon dOr 2004 and 2005','WC winner 2002 with Brazil','Most skillful player of his generation']},
  {name:'Franz Beckenbauer',flag:'🇩🇪',years:'1965-1977',caps:103,goals:14,wc:1,wc_goals:5,club:'Bayern Munich',pos:'DF',
   quote:'The game is simple. It is the players who make it complicated.',
   facts:['Won WC as player 1974 and manager 1990','Invented the attacking sweeper role','Der Kaiser of German football']},
  {name:'Johan Cruyff',flag:'🇳🇱',years:'1966-1977',caps:48,goals:33,wc:0,wc_goals:3,club:'Ajax/Barcelona',pos:'FW',
   quote:'Playing football is very simple, but playing simple football is the hardest thing.',
   facts:['3x Ballon dOr winner','Invented Total Football with Ajax','Never won the World Cup - biggest regret']},
  {name:'Gerd Muller',flag:'🇩🇪',years:'1966-1974',caps:62,goals:68,wc:1,wc_goals:14,club:'Bayern Munich',pos:'FW',
   quote:'I just kept putting the ball in the net.',
   facts:['Der Bomber - most prolific WC scorer of his era','Scored 365 goals for Bayern Munich','WC winner 1974 with West Germany']}
];

var WC_WEATHER = {
  'New York':     {temp_c:24,temp_f:75,condition:'Warm & Humid',icon:'⛅',rain:'40%',wind:'15 km/h',tip:'Pack light clothes, rain possible'},
  'Los Angeles':  {temp_c:27,temp_f:80,condition:'Sunny & Warm',icon:'☀️',rain:'5%',wind:'10 km/h',tip:'Perfect weather, sunscreen essential'},
  'Dallas':       {temp_c:35,temp_f:95,condition:'Very Hot',icon:'🌡️',rain:'20%',wind:'20 km/h',tip:'Extreme heat - stay hydrated!'},
  'San Francisco':{temp_c:18,temp_f:64,condition:'Cool & Foggy',icon:'🌫️',rain:'15%',wind:'25 km/h',tip:'Bring a jacket, can be cold at night'},
  'Kansas City':  {temp_c:30,temp_f:86,condition:'Hot & Sunny',icon:'☀️',rain:'25%',wind:'18 km/h',tip:'Hot summer days, thunderstorms possible'},
  'Las Vegas':    {temp_c:40,temp_f:104,condition:'Extreme Heat',icon:'🔥',rain:'2%',wind:'12 km/h',tip:'Hottest city! Avoid sun 11am-4pm'},
  'Mexico City':  {temp_c:19,temp_f:66,condition:'Mild & Pleasant',icon:'🌤️',rain:'35%',wind:'8 km/h',tip:'Altitude 2240m - acclimatize first'},
  'Guadalajara':  {temp_c:22,temp_f:72,condition:'Warm & Breezy',icon:'⛅',rain:'40%',wind:'14 km/h',tip:'Rainy season - afternoon showers likely'},
  'Monterrey':    {temp_c:34,temp_f:93,condition:'Hot & Humid',icon:'🌡️',rain:'30%',wind:'15 km/h',tip:'Very hot and humid, drink lots of water'},
  'Vancouver':    {temp_c:19,temp_f:66,condition:'Mild & Rainy',icon:'🌧️',rain:'55%',wind:'20 km/h',tip:'Classic Vancouver rain - bring waterproofs'},
  'Toronto':      {temp_c:26,temp_f:79,condition:'Warm & Sunny',icon:'☀️',rain:'30%',wind:'16 km/h',tip:'Beautiful summer weather in Toronto'},
  'Montreal':     {temp_c:25,temp_f:77,condition:'Warm & Pleasant',icon:'⛅',rain:'35%',wind:'18 km/h',tip:'French-Canadian summer at its best'}
};
var useState = React.useState;
var useEffect = React.useEffect;
var e = React.createElement;
var FDATA_KEY = '756b5806bcc542e2bd2d3a09de10d732';
var WC2026_ID = 2000;
var ONESIGNAL_APP_ID = '29a090bc-9893-46a1-87a3-e3f162e2271d';
var G = '#d4af37';
var DARK = '#08091a';
var CB = 'rgba(12,24,54,0.9)';
var BD = 'rgba(212,175,55,0.22)';

var LANGS = [{code:'en',label:'EN'},{code:'fr',label:'FR'},{code:'es',label:'ES'},{code:'pt',label:'PT'},{code:'it',label:'IT'},{code:'de',label:'DE'}];

// - TEAM DATA PER LANGUAGE -
var MY_TEAM = {
  en:{team:'England',group:'L',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',color:'rgba(0,36,125,0.4)'},
  fr:{team:'France',group:'I',flag:'🇫🇷',color:'rgba(0,35,149,0.4)'},
  es:{team:'Spain',group:'H',flag:'🇪🇸',color:'rgba(170,0,0,0.4)'},
  pt:{team:'Portugal',group:'K',flag:'🇵🇹',color:'rgba(0,102,0,0.4)'},
  it:{team:'Italy',group:null,flag:'🇮🇹',color:'rgba(0,82,156,0.4)'},
  de:{team:'Germany',group:'E',flag:'🇩🇪',color:'rgba(0,0,0,0.4)'}
};

var GROUPS = {
  A:{teams:['Mexico','South Africa','South Korea','Czechia'],host:true,hostName:'Mexico'},
  B:{teams:['Canada','Bosnia','Qatar','Switzerland'],host:true,hostName:'Canada'},
  C:{teams:['Brazil','Morocco','Haiti','Scotland']},
  D:{teams:['USA','Paraguay','Australia','Turkey'],host:true,hostName:'USA'},
  E:{teams:['Germany','Curacao','Ivory Coast','Ecuador']},
  F:{teams:['Netherlands','Japan','Sweden','Tunisia']},
  G:{teams:['Belgium','Egypt','Iran','New Zealand']},
  H:{teams:['Spain','Cape Verde','Saudi Arabia','Uruguay']},
  I:{teams:['France','Senegal','Iraq','Norway']},
  J:{teams:['Argentina','Algeria','Austria','Jordan']},
  K:{teams:['Portugal','DR Congo','Uzbekistan','Colombia']},
  L:{teams:['England','Croatia','Ghana','Panama']}
};


// - TEAM NAME TRANSLATIONS -
var TEAM_NAMES = {
  en:{
    'Mexico':'Mexico','South Africa':'South Africa','South Korea':'South Korea',
    'Czechia':'Czechia','Canada':'Canada','Bosnia':'Bosnia & Herzegovina',
    'Qatar':'Qatar','Switzerland':'Switzerland','Brazil':'Brazil','Morocco':'Morocco',
    'Haiti':'Haiti','Scotland':'Scotland','USA':'USA','Paraguay':'Paraguay',
    'Australia':'Australia','Turkey':'Turkey','Germany':'Germany','Curacao':'Curacao',
    'Ivory Coast':'Ivory Coast','Ecuador':'Ecuador','Netherlands':'Netherlands',
    'Japan':'Japan','Sweden':'Sweden','Tunisia':'Tunisia','Belgium':'Belgium',
    'Egypt':'Egypt','Iran':'Iran','New Zealand':'New Zealand','Spain':'Spain',
    'Cape Verde':'Cape Verde','Saudi Arabia':'Saudi Arabia','Uruguay':'Uruguay',
    'France':'France','Senegal':'Senegal','Iraq':'Iraq','Norway':'Norway',
    'Argentina':'Argentina','Algeria':'Algeria','Austria':'Austria','Jordan':'Jordan',
    'Portugal':'Portugal','DR Congo':'DR Congo','Uzbekistan':'Uzbekistan',
    'Colombia':'Colombia','England':'England','Croatia':'Croatia','Ghana':'Ghana',
    'Panama':'Panama'
  },
  fr:{
    'Mexico':'Mexique','South Africa':'Afrique du Sud','South Korea':'Coree du Sud',
    'Czechia':'Republique Tcheque','Canada':'Canada','Bosnia':'Bosnie-Herzegovine',
    'Qatar':'Qatar','Switzerland':'Suisse','Brazil':'Bresil','Morocco':'Maroc',
    'Haiti':'Haiti','Scotland':'Ecosse','USA':'Etats-Unis','Paraguay':'Paraguay',
    'Australia':'Australie','Turkey':'Turquie','Germany':'Allemagne','Curacao':'Curacao',
    'Ivory Coast':'Cote d Ivoire','Ecuador':'Equateur','Netherlands':'Pays-Bas',
    'Japan':'Japon','Sweden':'Suede','Tunisia':'Tunisie','Belgium':'Belgique',
    'Egypt':'Egypte','Iran':'Iran','New Zealand':'Nouvelle-Zelande','Spain':'Espagne',
    'Cape Verde':'Cap-Vert','Saudi Arabia':'Arabie Saoudite','Uruguay':'Uruguay',
    'France':'France','Senegal':'Senegal','Iraq':'Irak','Norway':'Norvege',
    'Argentina':'Argentine','Algeria':'Algerie','Austria':'Autriche','Jordan':'Jordanie',
    'Portugal':'Portugal','DR Congo':'RD Congo','Uzbekistan':'Ouzbekistan',
    'Colombia':'Colombie','England':'Angleterre','Croatia':'Croatie','Ghana':'Ghana',
    'Panama':'Panama'
  },
  es:{
    'Mexico':'Mexico','South Africa':'Sudafrica','South Korea':'Corea del Sur',
    'Czechia':'Republica Checa','Canada':'Canada','Bosnia':'Bosnia y Herzegovina',
    'Qatar':'Qatar','Switzerland':'Suiza','Brazil':'Brasil','Morocco':'Marruecos',
    'Haiti':'Haiti','Scotland':'Escocia','USA':'USA','Paraguay':'Paraguay',
    'Australia':'Australia','Turkey':'Turquia','Germany':'Alemania','Curacao':'Curacao',
    'Ivory Coast':'Costa de Marfil','Ecuador':'Ecuador','Netherlands':'Paises Bajos',
    'Japan':'Japon','Sweden':'Suecia','Tunisia':'Tunez','Belgium':'Belgica',
    'Egypt':'Egipto','Iran':'Iran','New Zealand':'Nueva Zelanda','Spain':'Espana',
    'Cape Verde':'Cabo Verde','Saudi Arabia':'Arabia Saudita','Uruguay':'Uruguay',
    'France':'Francia','Senegal':'Senegal','Iraq':'Irak','Norway':'Noruega',
    'Argentina':'Argentina','Algeria':'Argelia','Austria':'Austria','Jordan':'Jordania',
    'Portugal':'Portugal','DR Congo':'R.D. Congo','Uzbekistan':'Uzbekistan',
    'Colombia':'Colombia','England':'Inglaterra','Croatia':'Croacia','Ghana':'Ghana',
    'Panama':'Panama'
  },
  pt:{
    'Mexico':'Mexico','South Africa':'Africa do Sul','South Korea':'Coreia do Sul',
    'Czechia':'Republica Tcheca','Canada':'Canada','Bosnia':'Bosnia e Herzegovina',
    'Qatar':'Catar','Switzerland':'Suica','Brazil':'Brasil','Morocco':'Marrocos',
    'Haiti':'Haiti','Scotland':'Escocia','USA':'USA','Paraguay':'Paraguai',
    'Australia':'Australia','Turkey':'Turquia','Germany':'Alemanha','Curacao':'Curacao',
    'Ivory Coast':'Costa do Marfim','Ecuador':'Equador','Netherlands':'Paises Baixos',
    'Japan':'Japao','Sweden':'Suecia','Tunisia':'Tunisia','Belgium':'Belgica',
    'Egypt':'Egito','Iran':'Ira','New Zealand':'Nova Zelandia','Spain':'Espanha',
    'Cape Verde':'Cabo Verde','Saudi Arabia':'Arabia Saudita','Uruguay':'Uruguai',
    'France':'Franca','Senegal':'Senegal','Iraq':'Iraque','Norway':'Noruega',
    'Argentina':'Argentina','Algeria':'Algeria','Austria':'Austria','Jordan':'Jordania',
    'Portugal':'Portugal','DR Congo':'R.D. Congo','Uzbekistan':'Uzbequistao',
    'Colombia':'Colombia','England':'Inglaterra','Croatia':'Croacia','Ghana':'Gana',
    'Panama':'Panama'
  },
  it:{
    'Mexico':'Messico','South Africa':'Sudafrica','South Korea':'Corea del Sud',
    'Czechia':'Repubblica Ceca','Canada':'Canada','Bosnia':'Bosnia ed Erzegovina',
    'Qatar':'Qatar','Switzerland':'Svizzera','Brazil':'Brasile','Morocco':'Marocco',
    'Haiti':'Haiti','Scotland':'Scozia','USA':'USA','Paraguay':'Paraguay',
    'Australia':'Australia','Turkey':'Turchia','Germany':'Germania','Curacao':'Curacao',
    'Ivory Coast':'Costa d Avorio','Ecuador':'Ecuador','Netherlands':'Paesi Bassi',
    'Japan':'Giappone','Sweden':'Svezia','Tunisia':'Tunisia','Belgium':'Belgio',
    'Egypt':'Egitto','Iran':'Iran','New Zealand':'Nuova Zelanda','Spain':'Spagna',
    'Cape Verde':'Capo Verde','Saudi Arabia':'Arabia Saudita','Uruguay':'Uruguay',
    'France':'Francia','Senegal':'Senegal','Iraq':'Iraq','Norway':'Norvegia',
    'Argentina':'Argentina','Algeria':'Algeria','Austria':'Austria','Jordan':'Giordania',
    'Portugal':'Portogallo','DR Congo':'R.D. Congo','Uzbekistan':'Uzbekistan',
    'Colombia':'Colombia','England':'Inghilterra','Croatia':'Croazia','Ghana':'Ghana',
    'Panama':'Panama'
  },
  de:{
    'Mexico':'Mexiko','South Africa':'Sudafrika','South Korea':'Sudkorea',
    'Czechia':'Tschechien','Canada':'Kanada','Bosnia':'Bosnien-Herzegowina',
    'Qatar':'Katar','Switzerland':'Schweiz','Brazil':'Brasilien','Morocco':'Marokko',
    'Haiti':'Haiti','Scotland':'Schottland','USA':'USA','Paraguay':'Paraguay',
    'Australia':'Australien','Turkey':'Turkei','Germany':'Deutschland','Curacao':'Curacao',
    'Ivory Coast':'Elfenbeinkuste','Ecuador':'Ecuador','Netherlands':'Niederlande',
    'Japan':'Japan','Sweden':'Schweden','Tunisia':'Tunesien','Belgium':'Belgien',
    'Egypt':'Agypten','Iran':'Iran','New Zealand':'Neuseeland','Spain':'Spanien',
    'Cape Verde':'Kap Verde','Saudi Arabia':'Saudi-Arabien','Uruguay':'Uruguay',
    'France':'Frankreich','Senegal':'Senegal','Iraq':'Irak','Norway':'Norwegen',
    'Argentina':'Argentinien','Algeria':'Algerien','Austria':'Osterreich','Jordan':'Jordanien',
    'Portugal':'Portugal','DR Congo':'DR Kongo','Uzbekistan':'Usbekistan',
    'Colombia':'Kolumbien','England':'England','Croatia':'Kroatien','Ghana':'Ghana',
    'Panama':'Panama'
  }
};

function tn(team, lang){ return (TEAM_NAMES[lang]&&TEAM_NAMES[lang][team])||team; }

var ALL_TEAMS = Object.values(GROUPS).reduce(function(a,g){return a.concat(g.teams);},[]).sort();

// - FIXTURES -
var FIXTURES = [
  // - JUNE 11 -
  {date:'2026-06-11',time:'15:00',home:'Mexico',away:'South Africa',group:'A',stadium:'Estadio Azteca',city:'Mexico City'},
  {date:'2026-06-11',time:'22:00',home:'South Korea',away:'Czechia',group:'A',stadium:'Estadio Akron',city:'Guadalajara'},
  // - JUNE 12 -
  {date:'2026-06-12',time:'15:00',home:'Canada',away:'Bosnia',group:'B',stadium:'BMO Field',city:'Toronto'},
  {date:'2026-06-12',time:'21:00',home:'USA',away:'Paraguay',group:'D',stadium:'SoFi Stadium',city:'Los Angeles'},
  // - JUNE 13 -
  {date:'2026-06-13',time:'15:00',home:'Qatar',away:'Switzerland',group:'B',stadium:'Levis Stadium',city:'San Francisco'},
  {date:'2026-06-13',time:'18:00',home:'Brazil',away:'Morocco',group:'C',stadium:'MetLife Stadium',city:'New York'},
  {date:'2026-06-13',time:'21:00',home:'Haiti',away:'Scotland',group:'C',stadium:'Gillette Stadium',city:'Boston'},
  {date:'2026-06-14',time:'00:00',home:'Australia',away:'Turkey',group:'D',stadium:'BC Place',city:'Vancouver'},
  // - JUNE 14 -
  {date:'2026-06-14',time:'15:00',home:'Germany',away:'Curacao',group:'E',stadium:'NRG Stadium',city:'Houston'},
  {date:'2026-06-14',time:'18:00',home:'Netherlands',away:'Japan',group:'F',stadium:'AT&T Stadium',city:'Dallas'},
  {date:'2026-06-14',time:'21:00',home:'Ivory Coast',away:'Ecuador',group:'E',stadium:'Lincoln Financial',city:'Philadelphia'},
  // - JUNE 15 -
  {date:'2026-06-15',time:'00:00',home:'Sweden',away:'Tunisia',group:'F',stadium:'Estadio BBVA',city:'Monterrey'},
  {date:'2026-06-15',time:'15:00',home:'Spain',away:'Cape Verde',group:'H',stadium:'Mercedes-Benz Stadium',city:'Atlanta'},
  {date:'2026-06-15',time:'18:00',home:'Belgium',away:'Egypt',group:'G',stadium:'Lumen Field',city:'Seattle'},
  {date:'2026-06-15',time:'21:00',home:'Saudi Arabia',away:'Uruguay',group:'H',stadium:'Hard Rock Stadium',city:'Miami'},
  // - JUNE 16 -
  {date:'2026-06-16',time:'00:00',home:'Iran',away:'New Zealand',group:'G',stadium:'SoFi Stadium',city:'Los Angeles'},
  {date:'2026-06-16',time:'15:00',home:'France',away:'Senegal',group:'I',stadium:'MetLife Stadium',city:'New York'},
  {date:'2026-06-16',time:'18:00',home:'Iraq',away:'Norway',group:'I',stadium:'Gillette Stadium',city:'Boston'},
  {date:'2026-06-16',time:'21:00',home:'Argentina',away:'Algeria',group:'J',stadium:'Arrowhead Stadium',city:'Kansas City'},
  // - JUNE 17 -
  {date:'2026-06-17',time:'00:00',home:'Austria',away:'Jordan',group:'J',stadium:'Levis Stadium',city:'San Francisco'},
  {date:'2026-06-17',time:'15:00',home:'Portugal',away:'DR Congo',group:'K',stadium:'NRG Stadium',city:'Houston'},
  {date:'2026-06-17',time:'18:00',home:'England',away:'Croatia',group:'L',stadium:'AT&T Stadium',city:'Dallas'},
  {date:'2026-06-17',time:'21:00',home:'Ghana',away:'Panama',group:'L',stadium:'BMO Field',city:'Toronto'},
  // - JUNE 18 -
  {date:'2026-06-18',time:'00:00',home:'Uzbekistan',away:'Colombia',group:'K',stadium:'Estadio Azteca',city:'Mexico City'},
  {date:'2026-06-18',time:'15:00',home:'Czechia',away:'South Africa',group:'A',stadium:'Mercedes-Benz Stadium',city:'Atlanta'},
  {date:'2026-06-18',time:'18:00',home:'Switzerland',away:'Bosnia',group:'B',stadium:'SoFi Stadium',city:'Los Angeles'},
  {date:'2026-06-18',time:'21:00',home:'Canada',away:'Qatar',group:'B',stadium:'BC Place',city:'Vancouver'},
  // - JUNE 19 -
  {date:'2026-06-19',time:'00:00',home:'Mexico',away:'South Korea',group:'A',stadium:'Estadio Akron',city:'Guadalajara'},
  {date:'2026-06-19',time:'15:00',home:'USA',away:'Australia',group:'D',stadium:'Lumen Field',city:'Seattle'},
  {date:'2026-06-19',time:'18:00',home:'Scotland',away:'Morocco',group:'C',stadium:'Gillette Stadium',city:'Boston'},
  {date:'2026-06-19',time:'21:00',home:'Brazil',away:'Haiti',group:'C',stadium:'Lincoln Financial',city:'Philadelphia'},
  // - JUNE 20 -
  {date:'2026-06-20',time:'00:00',home:'Turkey',away:'Paraguay',group:'D',stadium:'Levis Stadium',city:'San Francisco'},
  {date:'2026-06-20',time:'15:00',home:'Netherlands',away:'Sweden',group:'F',stadium:'NRG Stadium',city:'Houston'},
  {date:'2026-06-20',time:'18:00',home:'Germany',away:'Ivory Coast',group:'E',stadium:'BMO Field',city:'Toronto'},
  {date:'2026-06-20',time:'21:00',home:'Ecuador',away:'Curacao',group:'E',stadium:'Arrowhead Stadium',city:'Kansas City'},
  // - JUNE 21 -
  {date:'2026-06-21',time:'00:00',home:'Tunisia',away:'Japan',group:'F',stadium:'Estadio BBVA',city:'Monterrey'},
  {date:'2026-06-21',time:'15:00',home:'Spain',away:'Saudi Arabia',group:'H',stadium:'Mercedes-Benz Stadium',city:'Atlanta'},
  {date:'2026-06-21',time:'18:00',home:'Belgium',away:'Iran',group:'G',stadium:'SoFi Stadium',city:'Los Angeles'},
  {date:'2026-06-21',time:'21:00',home:'Uruguay',away:'Cape Verde',group:'H',stadium:'Hard Rock Stadium',city:'Miami'},
  // - JUNE 22 -
  {date:'2026-06-22',time:'00:00',home:'New Zealand',away:'Egypt',group:'G',stadium:'BC Place',city:'Vancouver'},
  {date:'2026-06-22',time:'15:00',home:'Argentina',away:'Austria',group:'J',stadium:'AT&T Stadium',city:'Dallas'},
  {date:'2026-06-22',time:'18:00',home:'France',away:'Iraq',group:'I',stadium:'Lincoln Financial',city:'Philadelphia'},
  {date:'2026-06-22',time:'21:00',home:'Norway',away:'Senegal',group:'I',stadium:'MetLife Stadium',city:'New York'},
  // - JUNE 23 -
  {date:'2026-06-23',time:'00:00',home:'Jordan',away:'Algeria',group:'J',stadium:'Levis Stadium',city:'San Francisco'},
  {date:'2026-06-23',time:'15:00',home:'Portugal',away:'Uzbekistan',group:'K',stadium:'NRG Stadium',city:'Houston'},
  {date:'2026-06-23',time:'18:00',home:'England',away:'Ghana',group:'L',stadium:'Gillette Stadium',city:'Boston'},
  {date:'2026-06-23',time:'21:00',home:'Panama',away:'Croatia',group:'L',stadium:'BMO Field',city:'Toronto'},
  // - JUNE 24 -
  {date:'2026-06-24',time:'00:00',home:'Colombia',away:'DR Congo',group:'K',stadium:'Estadio Akron',city:'Guadalajara'},
  {date:'2026-06-24',time:'18:00',home:'Switzerland',away:'Canada',group:'B',stadium:'BC Place',city:'Vancouver'},
  {date:'2026-06-24',time:'18:00',home:'Bosnia',away:'Qatar',group:'B',stadium:'Lumen Field',city:'Seattle'},
  {date:'2026-06-24',time:'21:00',home:'Scotland',away:'Brazil',group:'C',stadium:'Hard Rock Stadium',city:'Miami'},
  {date:'2026-06-24',time:'21:00',home:'Morocco',away:'Haiti',group:'C',stadium:'Mercedes-Benz Stadium',city:'Atlanta'},
  // - JUNE 25 -
  {date:'2026-06-25',time:'00:00',home:'Czechia',away:'Mexico',group:'A',stadium:'Estadio Azteca',city:'Mexico City'},
  {date:'2026-06-25',time:'00:00',home:'South Africa',away:'South Korea',group:'A',stadium:'Estadio BBVA',city:'Monterrey'},
  {date:'2026-06-25',time:'18:00',home:'Curacao',away:'Ivory Coast',group:'E',stadium:'Lincoln Financial',city:'Philadelphia'},
  {date:'2026-06-25',time:'18:00',home:'Ecuador',away:'Germany',group:'E',stadium:'MetLife Stadium',city:'New York'},
  {date:'2026-06-25',time:'21:00',home:'Japan',away:'Sweden',group:'F',stadium:'AT&T Stadium',city:'Dallas'},
  {date:'2026-06-25',time:'21:00',home:'Tunisia',away:'Netherlands',group:'F',stadium:'Arrowhead Stadium',city:'Kansas City'},
  // - JUNE 26 -
  {date:'2026-06-26',time:'00:00',home:'Turkey',away:'USA',group:'D',stadium:'SoFi Stadium',city:'Los Angeles'},
  {date:'2026-06-26',time:'00:00',home:'Paraguay',away:'Australia',group:'D',stadium:'Levis Stadium',city:'San Francisco'},
  {date:'2026-06-26',time:'18:00',home:'Norway',away:'France',group:'I',stadium:'Gillette Stadium',city:'Boston'},
  {date:'2026-06-26',time:'18:00',home:'Senegal',away:'Iraq',group:'I',stadium:'BMO Field',city:'Toronto'},
  // - JUNE 27 -
  {date:'2026-06-27',time:'00:00',home:'Cape Verde',away:'Saudi Arabia',group:'H',stadium:'NRG Stadium',city:'Houston'},
  {date:'2026-06-27',time:'00:00',home:'Uruguay',away:'Spain',group:'H',stadium:'Estadio Akron',city:'Guadalajara'},
  {date:'2026-06-27',time:'03:00',home:'Egypt',away:'Iran',group:'G',stadium:'Lumen Field',city:'Seattle'},
  {date:'2026-06-27',time:'03:00',home:'New Zealand',away:'Belgium',group:'G',stadium:'BC Place',city:'Vancouver'},
  {date:'2026-06-27',time:'18:00',home:'Panama',away:'England',group:'L',stadium:'MetLife Stadium',city:'New York'},
  {date:'2026-06-27',time:'18:00',home:'Croatia',away:'Ghana',group:'L',stadium:'Lincoln Financial',city:'Philadelphia'},
  {date:'2026-06-27',time:'21:00',home:'Colombia',away:'Portugal',group:'K',stadium:'Hard Rock Stadium',city:'Miami'},
  {date:'2026-06-27',time:'21:00',home:'DR Congo',away:'Uzbekistan',group:'K',stadium:'Mercedes-Benz Stadium',city:'Atlanta'},
  // - JUNE 28 -
  {date:'2026-06-28',time:'00:00',home:'Algeria',away:'Austria',group:'J',stadium:'Arrowhead Stadium',city:'Kansas City'},
  {date:'2026-06-28',time:'00:00',home:'Jordan',away:'Argentina',group:'J',stadium:'AT&T Stadium',city:'Dallas'},
  // - ROUND OF 32 (June 28 - July 1) -
  {date:'2026-06-28',time:'15:00',home:'2nd A',away:'2nd B',group:'R32',stadium:'SoFi Stadium',city:'Los Angeles'},
  {date:'2026-06-29',time:'13:00',home:'1st C',away:'2nd F',group:'R32',stadium:'NRG Stadium',city:'Houston'},
  {date:'2026-06-29',time:'16:30',home:'1st E',away:'Best 3rd',group:'R32',stadium:'Gillette Stadium',city:'Boston'},
  {date:'2026-06-29',time:'21:00',home:'1st F',away:'2nd C',group:'R32',stadium:'Estadio BBVA',city:'Monterrey'},
  {date:'2026-06-30',time:'13:00',home:'2nd E',away:'2nd I',group:'R32',stadium:'AT&T Stadium',city:'Dallas'},
  {date:'2026-06-30',time:'17:00',home:'1st I',away:'Best 3rd',group:'R32',stadium:'MetLife Stadium',city:'New York'},
  {date:'2026-06-30',time:'21:00',home:'1st A',away:'Best 3rd',group:'R32',stadium:'Estadio Azteca',city:'Mexico City'},
  {date:'2026-07-01',time:'12:00',home:'1st L',away:'Best 3rd',group:'R32',stadium:'Mercedes-Benz Stadium',city:'Atlanta'},
  {date:'2026-07-01',time:'16:00',home:'1st G',away:'Best 3rd',group:'R32',stadium:'Lumen Field',city:'Seattle'},
  {date:'2026-07-01',time:'17:00',home:'1st D',away:'Best 3rd',group:'R32',stadium:'Levis Stadium',city:'San Francisco'},
  {date:'2026-07-02',time:'12:00',home:'2nd K',away:'2nd L',group:'R32',stadium:'BMO Field',city:'Toronto'},
  {date:'2026-07-02',time:'14:00',home:'1st H',away:'2nd J',group:'R32',stadium:'SoFi Stadium',city:'Los Angeles'},
  {date:'2026-07-03',time:'13:00',home:'1st B',away:'Best 3rd',group:'R32',stadium:'BC Place',city:'Vancouver'},
  {date:'2026-07-03',time:'15:00',home:'2nd D',away:'2nd G',group:'R32',stadium:'AT&T Stadium',city:'Dallas'},
  {date:'2026-07-03',time:'18:00',home:'1st J',away:'2nd H',group:'R32',stadium:'Hard Rock Stadium',city:'Miami'},
  {date:'2026-07-04',time:'09:30',home:'1st K',away:'Best 3rd',group:'R32',stadium:'Arrowhead Stadium',city:'Kansas City'},
  // - ROUND OF 16 (July 4-7) -
  {date:'2026-07-04',time:'13:00',home:'R16 Match 1',away:'R16 Match 1',group:'R16',stadium:'NRG Stadium',city:'Houston'},
  {date:'2026-07-04',time:'17:00',home:'R16 Match 2',away:'R16 Match 2',group:'R16',stadium:'Lincoln Financial',city:'Philadelphia'},
  {date:'2026-07-05',time:'16:00',home:'R16 Match 3',away:'R16 Match 3',group:'R16',stadium:'MetLife Stadium',city:'New York'},
  {date:'2026-07-05',time:'20:00',home:'R16 Match 4',away:'R16 Match 4',group:'R16',stadium:'Estadio Azteca',city:'Mexico City'},
  {date:'2026-07-06',time:'15:00',home:'R16 Match 5',away:'R16 Match 5',group:'R16',stadium:'AT&T Stadium',city:'Dallas'},
  {date:'2026-07-06',time:'17:00',home:'R16 Match 6',away:'R16 Match 6',group:'R16',stadium:'Lumen Field',city:'Seattle'},
  {date:'2026-07-07',time:'12:00',home:'R16 Match 7',away:'R16 Match 7',group:'R16',stadium:'Mercedes-Benz Stadium',city:'Atlanta'},
  {date:'2026-07-07',time:'16:00',home:'R16 Match 8',away:'R16 Match 8',group:'R16',stadium:'BC Place',city:'Vancouver'},
  // - QUARTER FINALS (July 9-10) -
  {date:'2026-07-09',time:'16:00',home:'QF1',away:'QF2',group:'QF',stadium:'Gillette Stadium',city:'Boston'},
  {date:'2026-07-10',time:'15:00',home:'QF3',away:'QF4',group:'QF',stadium:'SoFi Stadium',city:'Los Angeles'},
  {date:'2026-07-10',time:'19:00',home:'QF5',away:'QF6',group:'QF',stadium:'NRG Stadium',city:'Houston'},
  {date:'2026-07-11',time:'01:00',home:'QF7',away:'QF8',group:'QF',stadium:'AT&T Stadium',city:'Dallas'},
  // - SEMI FINALS (July 13-14) -
  {date:'2026-07-14',time:'19:00',home:'Semi-Final 1',away:'Semi-Final 2',group:'SF',stadium:'MetLife Stadium',city:'New York'},
  {date:'2026-07-15',time:'19:00',home:'Semi-Final 3',away:'Semi-Final 4',group:'SF',stadium:'AT&T Stadium',city:'Dallas'},
  // - 3RD PLACE + FINAL -
  {date:'2026-07-18',time:'19:00',home:'3rd Place',away:'3rd Place',group:'3P',stadium:'Hard Rock Stadium',city:'Miami'},
  {date:'2026-07-19',time:'19:00',home:'FINAL',away:'FINAL',group:'FIN',stadium:'MetLife Stadium',city:'New York / New Jersey'}
]

// - TRANSLATIONS -
var T = {
  en:{appTitle:'World Cup 2026',appSub:'USA - CANADA - MEXICO',nav:['Home','Groups','Fixtures','Predictions','Quiz','Players','Polls','Sim','Game','Fantasy','Predict'],countdown:'Countdown',timeUnits:['Days','Hours','Min','Sec'],keyInfo:['Host nations','Teams','Matches','Duration'],keyVals:['3 nations','48 teams','104 matches','Jun 11-Jul 19'],format:'Tournament Format',formatLines:['12 groups of 4 teams','1st + 2nd + 8 best 3rds = 32 teams','Round of 32 > 16 > QF > SF > Final','Opening: Estadio Azteca, Mexico City','Final: MetLife Stadium, New York'],groupsTitle:'48 TEAMS - 12 GROUPS',hostLabel:'Host',groupLabel:'Group',myTeamLabel:'My Team',pickTeam:'Pick your team',pronoSub:'Who will reach the final?',pronoWinner:'World Champion 2026',pronoFinal:'Runner-up',pronoSemi:'Semi-finalists',pronoSave:'Save',pronoSaved:'Saved!',pronoReset:'Reset',pronoChoose:'Choose...',pronoMyPick:'My pick',quizSub:'Test your knowledge!',quizScore:'Score',quizNext:'Next question',quizFinish:'See result',quizRestart:'Play again',quizPerfect:'PERFECT! You are an expert!',quizGood:'Great job!',quizAvg:'Not bad!',quizBad:'Keep studying!',starsSub:'Players',pollTitle:'Polls',pollTotal:'votes',didYouKnow:'Did you know?',facts:['Italy miss the 2026 World Cup for 2nd time','Azteca hosts its 3rd World Cup','First-ever 48-team World Cup','First edition co-hosted by 3 countries','104 matches vs 64 in 2022','New IFAB rules in effect'],shareApp:'Share',shareCopied:'Link copied!',premiumBanner:'Go PREMIUM - Predictions + Stats + No ads',premiumBtn:'Unlock',fixturesTitle:'FIXTURES & RESULTS',fixturesAll:'All matches',fixturesMy:'My team only',noFixtures:'No fixtures found'},
  fr:{appTitle:'Coupe du Monde 2026',appSub:'USA - CANADA - MEXIQUE',nav:['Accueil','Groupes','Calendrier','Pronostics','Quiz','Joueurs','Sondages','Sim','Jeu','Fantasy','Predict'],countdown:'Compte a rebours',timeUnits:['Jours','Heures','Min','Sec'],keyInfo:['Pays hotes','Equipes','Matchs','Duree'],keyVals:['3 nations','48 equipes','104 matchs','11 juin-19 juil.'],format:'Format du tournoi',formatLines:['12 groupes de 4 equipes','1er + 2e + 8 meilleurs 3es = 32 equipes','Tour des 32 > 16e > QF > SF > Finale','Ouverture: Estadio Azteca, Mexico','Finale: MetLife Stadium, New York'],groupsTitle:'48 EQUIPES - 12 GROUPES',hostLabel:'Pays hote',groupLabel:'Groupe',myTeamLabel:'Mon Equipe',pickTeam:'Choisir mon equipe',pronoSub:'Qui ira en finale?',pronoWinner:'Champion du Monde 2026',pronoFinal:'Finaliste',pronoSemi:'Demi-finales',pronoSave:'Sauvegarder',pronoSaved:'Sauvegarde!',pronoReset:'Reinitialiser',pronoChoose:'Choisir...',pronoMyPick:'Mon choix',quizSub:'Testez vos connaissances!',quizScore:'Score',quizNext:'Question suivante',quizFinish:'Voir mon resultat',quizRestart:'Rejouer',quizPerfect:'PARFAIT! Tu es un expert!',quizGood:'Tres bien!',quizAvg:'Pas mal!',quizBad:'Continue a reviser!',starsSub:'Joueurs',pollTitle:'Sondages',pollTotal:'votes',didYouKnow:'Le saviez-vous?',facts:["L Italie rate le Mondial 2026 pour la 2e fois","L Azteca accueille son 3e Mondial","1er Mondial a 48 equipes","1ere edition co-organisee par 3 pays","104 matchs contre 64 en 2022","Nouvelles regles IFAB effectives"],shareApp:'Partager',shareCopied:'Lien copie!',premiumBanner:'Passez PREMIUM - Pronostics + Stats + Sans pub',premiumBtn:'Debloquer',fixturesTitle:'CALENDRIER & RESULTATS',fixturesAll:'Tous les matchs',fixturesMy:'Mon equipe uniquement',noFixtures:'Aucun match trouve'},
  es:{appTitle:'Copa del Mundo 2026',appSub:'USA - CANADA - MEXICO',nav:['Inicio','Grupos','Calendario','Pronosticos','Quiz','Jugadores','Sondeos','Sim','Juego','Fantasy','Predict'],countdown:'Cuenta regresiva',timeUnits:['Dias','Horas','Min','Seg'],keyInfo:['Paises anfitriones','Equipos','Partidos','Duracion'],keyVals:['3 naciones','48 equipos','104 partidos','11 jun-19 jul'],format:'Formato del torneo',formatLines:['12 grupos de 4 equipos','1 + 2 + 8 mejores 3eros = 32 equipos','Ronda de 32 > 16avos > QF > SF > Final','Apertura: Estadio Azteca, Mexico','Final: MetLife Stadium, Nueva York'],groupsTitle:'48 EQUIPOS - 12 GRUPOS',hostLabel:'Anfitri',groupLabel:'Grupo',myTeamLabel:'Mi Equipo',pickTeam:'Elegir mi equipo',pronoSub:'Quien llegara a la final?',pronoWinner:'Campeon del Mundo 2026',pronoFinal:'Finalista',pronoSemi:'Semifinalistas',pronoSave:'Guardar',pronoSaved:'Guardado!',pronoReset:'Reiniciar',pronoChoose:'Elegir...',pronoMyPick:'Mi eleccion',quizSub:'Pon a prueba tus conocimientos!',quizScore:'Puntuacion',quizNext:'Siguiente',quizFinish:'Ver resultado',quizRestart:'Jugar de nuevo',quizPerfect:'Perfecto! Eres un experto!',quizGood:'Muy bien!',quizAvg:'Nada mal!',quizBad:'Sigue estudiando!',starsSub:'Jugadores',pollTitle:'Sondeos',pollTotal:'votos',didYouKnow:'Sabias que?',facts:['Italia se pierde el Mundial 2026 por 2a vez','El Azteca acoge su 3er Mundial','El primer Mundial con 48 equipos','Primera edicion organizada por 3 paises','104 partidos frente a 64 en 2022','Nuevas reglas del IFAB en vigor'],shareApp:'Compartir',shareCopied:'Enlace copiado!',premiumBanner:'Hazte PREMIUM - Pronosticos + Estadisticas + Sin anuncios',premiumBtn:'Desbloquear',fixturesTitle:'CALENDARIO Y RESULTADOS',fixturesAll:'Todos los partidos',fixturesMy:'Solo mi equipo',noFixtures:'No se encontraron partidos'},
  pt:{appTitle:'Copa do Mundo 2026',appSub:'USA - CANADA - MEXICO',nav:['Inicio','Grupos','Calendario','Palpites','Quiz','Jogadores','Enquetes','Sim','Jogo','Fantasy','Predict'],countdown:'Contagem regressiva',timeUnits:['Dias','Horas','Min','Seg'],keyInfo:['Paises anfitrioes','Selecoes','Jogos','Duracao'],keyVals:['3 nacoes','48 selecoes','104 jogos','11 jun-19 jul'],format:'Formato do torneio',formatLines:['12 grupos de 4 selecoes','1 + 2 + 8 melhores 3eiros = 32 equipes','Rodada de 32 > 16 > QF > SF > Final','Abertura: Estadio Azteca, Mexico','Final: MetLife Stadium, Nova York'],groupsTitle:'48 SELECOES - 12 GRUPOS',hostLabel:'Anfitriao',groupLabel:'Grupo',myTeamLabel:'Meu Time',pickTeam:'Escolher meu time',pronoSub:'Quem vai chegar a final?',pronoWinner:'Campeao do Mundo 2026',pronoFinal:'Vice-campeao',pronoSemi:'Semifinalistas',pronoSave:'Salvar',pronoSaved:'Salvo!',pronoReset:'Reiniciar',pronoChoose:'Escolher...',pronoMyPick:'Minha escolha',quizSub:'Teste seus conhecimentos!',quizScore:'Pontuacao',quizNext:'Proxima',quizFinish:'Ver resultado',quizRestart:'Jogar novamente',quizPerfect:'Perfeito! Voce e um expert!',quizGood:'Muito bem!',quizAvg:'Nada mal!',quizBad:'Continue estudando!',starsSub:'Jogadores',pollTitle:'Enquetes',pollTotal:'votos',didYouKnow:'Voce sabia?',facts:['A Italia perde a Copa 2026 pela 2a vez','O Azteca sedia sua 3a Copa','Primeira Copa com 48 selecoes','Primeira edicao organizada por 3 paises','104 jogos contra 64 em 2022','Novas regras do IFAB em vigor'],shareApp:'Compartilhar',shareCopied:'Link copiado!',premiumBanner:'Seja PREMIUM - Palpites + Estatisticas + Sem anuncios',premiumBtn:'Desbloquear',fixturesTitle:'CALENDARIO E RESULTADOS',fixturesAll:'Todos os jogos',fixturesMy:'Apenas meu time',noFixtures:'Nenhum jogo encontrado'},
  it:{appTitle:'Coppa del Mondo 2026',appSub:'USA - CANADA - MESSICO',nav:['Home','Gruppi','Calendario','Pronostici','Quiz','Giocatori','Sondaggi','Sim','Gioco','Fantasy','Predict'],countdown:'Conto alla rovescia',timeUnits:['Giorni','Ore','Min','Sec'],keyInfo:['Paesi ospitanti','Squadre','Partite','Durata'],keyVals:['3 nazioni','48 squadre','104 partite','11 giu-19 lug'],format:'Formato del torneo',formatLines:['12 gironi da 4 squadre','1a + 2a + 8 migliori 3e = 32 squadre','Fase a 32 > 16 > QF > SF > Finale','Apertura: Estadio Azteca, Messico','Finale: MetLife Stadium, New York'],groupsTitle:'48 SQUADRE - 12 GIRONI',hostLabel:'Sede',groupLabel:'Girone',myTeamLabel:'La Mia Squadra',pickTeam:'Scegli la tua squadra',pronoSub:'Chi arrivera in finale?',pronoWinner:'Campione del Mondo 2026',pronoFinal:'Finalista',pronoSemi:'Semifinalisti',pronoSave:'Salva',pronoSaved:'Salvato!',pronoReset:'Azzera',pronoChoose:'Scegli...',pronoMyPick:'La mia scelta',quizSub:'Metti alla prova le tue conoscenze!',quizScore:'Punteggio',quizNext:'Domanda successiva',quizFinish:'Vedi risultato',quizRestart:'Gioca ancora',quizPerfect:'Perfetto! Sei un esperto!',quizGood:'Molto bene!',quizAvg:'Niente male!',quizBad:'Continua a studiare!',starsSub:'Giocatori',pollTitle:'Sondaggi',pollTotal:'voti',didYouKnow:'Lo sapevi?',facts:["L Italia non e al Mondiale 2026 per la 2a volta","L Azteca ospita il suo 3o Mondiale","Primo Mondiale con 48 squadre","Prima edizione co-organizzata da 3 paesi","104 partite contro 64 nel 2022","Nuove regole IFAB in vigore"],shareApp:'Condividi',shareCopied:'Link copiato!',premiumBanner:'Diventa PREMIUM - Pronostici + Statistiche + Senza pub',premiumBtn:'Sblocca',fixturesTitle:'CALENDARIO E RISULTATI',fixturesAll:'Tutte le partite',fixturesMy:'Solo la mia squadra',noFixtures:'Nessuna partita trovata'},
  de:{appTitle:'Weltmeisterschaft 2026',appSub:'USA - KANADA - MEXIKO',nav:['Start','Gruppen','Spielplan','Tipps','Quiz','Spieler','Umfragen','Sim','Spiel','Fantasy','Predict'],countdown:'Countdown',timeUnits:['Tage','Stunden','Min','Sek'],keyInfo:['Gastgeberlaender','Teams','Spiele','Dauer'],keyVals:['3 Nationen','48 Teams','104 Spiele','11. Jun-19. Jul'],format:'Turnierformat',formatLines:['12 Gruppen mit je 4 Teams','1. + 2. + 8 beste 3. = 32 Teams','Runde der 32 > 16 > VF > HF > Finale','Eroeffnung: Estadio Azteca, Mexiko','Finale: MetLife Stadium, New York'],groupsTitle:'48 TEAMS - 12 GRUPPEN',hostLabel:'Gastgeber',groupLabel:'Gruppe',myTeamLabel:'Mein Team',pickTeam:'Mein Team auswaehlen',pronoSub:'Wer kommt ins Finale?',pronoWinner:'Weltmeister 2026',pronoFinal:'Finalist',pronoSemi:'Halbfinalisten',pronoSave:'Speichern',pronoSaved:'Gespeichert!',pronoReset:'Zuruecksetzen',pronoChoose:'Auswaehlen...',pronoMyPick:'Meine Wahl',quizSub:'Teste dein Wissen!',quizScore:'Punkte',quizNext:'Naechste Frage',quizFinish:'Ergebnis sehen',quizRestart:'Nochmal spielen',quizPerfect:'Perfekt! Du bist ein Experte!',quizGood:'Sehr gut!',quizAvg:'Nicht schlecht!',quizBad:'Weiter lernen!',starsSub:'Spieler',pollTitle:'Umfragen',pollTotal:'Stimmen',didYouKnow:'Wusstest du?',facts:['Italien verpasst die WM 2026 zum 2. Mal','Das Azteca beherbergt seine 3. WM','Erste WM mit 48 Teams','Erste WM von 3 Laendern gemeinsam ausgerichtet','104 Spiele gegen 64 in 2022','Neue IFAB-Regeln in Kraft'],shareApp:'Teilen',shareCopied:'Link kopiert!',premiumBanner:'PREMIUM werden - Tipps + Statistiken + Werbefrei',premiumBtn:'Freischalten',fixturesTitle:'SPIELPLAN & ERGEBNISSE',fixturesAll:'Alle Spiele',fixturesMy:'Nur mein Team',noFixtures:'Keine Spiele gefunden'}
};


// QUIZ CHAMPIONSHIP - 3 levels, 50 real WC history questions
var QUIZ_CHAMPIONSHIP = {
  easy:[
    {q:'Which country won the first FIFA World Cup in 1930?',opts:['Brazil','Argentina','Uruguay','Italy'],a:2,pts:5,cat:'History'},
    {q:'How many times has Brazil won the World Cup?',opts:['3','4','5','6'],a:2,pts:5,cat:'Winners'},
    {q:'Who is the all-time top scorer in World Cup history?',opts:['Pele','Ronaldo','Klose','Maradona'],a:2,pts:5,cat:'Records'},
    {q:'Which country hosted the 2022 World Cup?',opts:['UAE','Saudi Arabia','Qatar','Bahrain'],a:2,pts:5,cat:'Hosts'},
    {q:'Who won the 2022 World Cup?',opts:['France','Brazil','Croatia','Argentina'],a:3,pts:5,cat:'Winners'},
    {q:'How many teams in the 2026 World Cup?',opts:['32','40','48','56'],a:2,pts:5,cat:'2026'},
    {q:'Who scored the Hand of God goal in 1986?',opts:['Pele','Zidane','Maradona','Ronaldo'],a:2,pts:5,cat:'Legends'},
    {q:'Which country has won the World Cup most times?',opts:['Germany','Italy','Brazil','Argentina'],a:2,pts:5,cat:'Winners'},
    {q:'Where is the 2026 World Cup Final?',opts:['SoFi Stadium','AT&T Stadium','MetLife Stadium','Azteca'],a:2,pts:5,cat:'2026'},
    {q:'Who won the Golden Ball at 2022 World Cup?',opts:['Mbappe','Messi','Modric','Neymar'],a:1,pts:5,cat:'Awards'},
    {q:'Which country won the 2018 World Cup?',opts:['Croatia','England','France','Belgium'],a:2,pts:5,cat:'Winners'},
    {q:'Who hosted the 2014 World Cup?',opts:['Argentina','Chile','Brazil','Colombia'],a:2,pts:5,cat:'Hosts'},
    {q:'How many goals did Miroslav Klose score in WC history?',opts:['14','15','16','17'],a:2,pts:5,cat:'Records'},
    {q:'Which country won the 2010 World Cup?',opts:['Brazil','Netherlands','Germany','Spain'],a:3,pts:5,cat:'Winners'},
    {q:'Who scored the winning goal in the 2010 final?',opts:['Torres','Villa','Iniesta','Xavi'],a:2,pts:5,cat:'History'},
    {q:'How often is the World Cup held?',opts:['Every 2 years','Every 3 years','Every 4 years','Every 5 years'],a:2,pts:5,cat:'General'},
    {q:'Which stadium hosts the opening match of WC 2026?',opts:['MetLife','SoFi','AT&T','Azteca'],a:3,pts:5,cat:'2026'},
    {q:'Who won the World Cup in 1998?',opts:['Brazil','France','Italy','Germany'],a:1,pts:5,cat:'Winners'}
  ],
  medium:[
    {q:'Who scored the fastest goal in WC history (10.8 sec)?',opts:['Inzaghi','Hakan Sukur','Owen','Batistuta'],a:1,pts:10,cat:'Records'},
    {q:'Which player appeared in most WC matches (25)?',opts:['Cafu','Pele','Lothar Matthaus','Maldini'],a:2,pts:10,cat:'Records'},
    {q:'Who is the only manager to win the WC twice?',opts:['Zagallo','Alf Ramsey','Vittorio Pozzo','Beckenbauer'],a:2,pts:10,cat:'History'},
    {q:'Most goals in one WC tournament by one player?',opts:['11','12','13','14'],a:2,pts:10,cat:'Records'},
    {q:'Which country won WC in both 1934 and 1938?',opts:['Germany','Brazil','Italy','France'],a:2,pts:10,cat:'History'},
    {q:'Top scorer at 2018 WC with 6 goals?',opts:['Lukaku','Kane','Mbappe','Griezmann'],a:1,pts:10,cat:'Records'},
    {q:'Highest attendance at a WC match?',opts:['150,000','174,000','199,854','220,000'],a:2,pts:10,cat:'Records'},
    {q:'Most WC final appearances - 3 finals?',opts:['Beckenbauer','Pele','Cafu','Zidane'],a:2,pts:10,cat:'Records'},
    {q:'Most clean sheets in WC history (10)?',opts:['Buffon','Casillas','Barthez','Neuer'],a:2,pts:10,cat:'Records'},
    {q:'Which dog found the stolen Jules Rimet trophy in 1966?',opts:['Lassie','Pickles','Biscuit','Buddy'],a:1,pts:10,cat:'History'},
    {q:'Who scored a hat-trick in a WC Final (before 2022)?',opts:['Pele','Zidane','Geoff Hurst','Ronaldo'],a:2,pts:10,cat:'History'},
    {q:'Score of Germany vs Brazil at 2014 World Cup?',opts:['5-1','6-0','7-1','8-0'],a:2,pts:10,cat:'History'},
    {q:'Which instrument was banned after 2010 WC?',opts:['Trumpet','Drum','Vuvuzela','Trombone'],a:2,pts:10,cat:'History'},
    {q:'Who won Golden Ball in 2014 despite losing the final?',opts:['Robben','Messi','Muller','Neuer'],a:1,pts:10,cat:'Awards'},
    {q:'Tim Howard made record saves (16) against which team in 2014?',opts:['Germany','France','Belgium','Argentina'],a:2,pts:10,cat:'Records'},
    {q:'Who performed Waka Waka at the 2010 World Cup?',opts:['Rihanna','Shakira','Beyonce','Jennifer Lopez'],a:1,pts:10,cat:'Culture'},
    {q:'Which country was first from Africa to host the WC?',opts:['Nigeria','Egypt','Morocco','South Africa'],a:3,pts:10,cat:'Hosts'},
    {q:'First WC to use goal-line technology?',opts:['South Africa 2010','Brazil 2014','Russia 2018','Qatar 2022'],a:1,pts:10,cat:'History'}
  ],
  hard:[
    {q:'First player to receive a red card at a WC (1974)?',opts:['Montero','Carlos Caszely','Tardelli','Cruyff'],a:1,pts:20,cat:'History'},
    {q:'Roger Milla scored at WC age 42. Which team?',opts:['Brazil','Bolivia','Russia','USA'],a:2,pts:20,cat:'Legends'},
    {q:'Oleg Salenko scored 5 in one game in 1994. Against?',opts:['Mexico','Saudi Arabia','Cameroon','Bolivia'],a:2,pts:20,cat:'Records'},
    {q:'Teams in the first World Cup in 1930?',opts:['12','13','14','16'],a:1,pts:20,cat:'History'},
    {q:'Only player to win 3 World Cups?',opts:['Garrincha','Didi','Pele','Tostao'],a:2,pts:20,cat:'Legends'},
    {q:'1950 WC had no final. What decided the winner?',opts:['Penalties','Extra time','Round-robin','Coin toss'],a:2,pts:20,cat:'History'},
    {q:'Italian player headbutted by Zidane in 2006 final?',opts:['Cannavaro','Buffon','Materazzi','Totti'],a:2,pts:20,cat:'History'},
    {q:'First siblings to play for different countries at a WC?',opts:['Boatengs','Inaki & Nico Williams','De Boers','None'],a:1,pts:20,cat:'History'},
    {q:'Most consecutive WC wins (11) held by?',opts:['Germany','France','Brazil','Argentina'],a:2,pts:20,cat:'Records'},
    {q:'Name of the 1966 World Cup mascot?',opts:['Willie','Fuleco','Zakumi','Pique'],a:0,pts:20,cat:'Mascots'},
    {q:'Who scored 2 goals in the 2002 WC Final?',opts:['Ronaldinho','Rivaldo','Ronaldo R9','Roberto Carlos'],a:2,pts:20,cat:'History'},
    {q:'Italy held WC title record 16 years due to?',opts:['Dominance','Cold War','World War II','FIFA ban'],a:2,pts:20,cat:'History'},
    {q:'First WC co-hosted by two countries?',opts:['1998','2002','2006','2010'],a:1,pts:20,cat:'History'},
    {q:'Fastest red card in WC history (52 seconds)?',opts:['Batista','Caszely','Zidane','Keane'],a:0,pts:20,cat:'Records'},
    {q:'Which country withdrew from 1950 WC to play barefoot?',opts:['Haiti','Bolivia','India','Peru'],a:2,pts:20,cat:'History'},
    {q:'What is the WC Trophy made of?',opts:['Silver','Platinum','18-karat gold','Bronze'],a:2,pts:20,cat:'Trophy'},
    {q:'Highest scoring WC game ever (1954)?',opts:['Austria 7-5 Switzerland','Hungary 10-1 El Salvador','Germany 8-0 Saudi Arabia','Brazil 7-1 Sweden'],a:0,pts:20,cat:'Records'},
    {q:'Only player to score for two different nations at WC?',opts:['Zidane','Prosinecki','Suarez','Di Stefano'],a:1,pts:20,cat:'History'}
  ]
};


var QUIZ = {
  en:[{q:'How many teams in the 2026 World Cup?',opts:['32','40','48','56'],a:2},{q:'Which stadium hosts the Final?',opts:['Azteca','AT&T Stadium','MetLife Stadium','SoFi Stadium'],a:2},{q:'Which country is NOT a host?',opts:['USA','Canada','Mexico','Brazil'],a:3},{q:'Which group is ENGLAND in?',opts:['Group A','Group C','Group J','Group L'],a:3},{q:'Who won the 2024 Ballon dOr?',opts:['Mbappe','Bellingham','Rodri','Vinicius'],a:2},{q:'How many total matches?',opts:['64','80','96','104'],a:3},{q:'Which stadium hosts the opening match?',opts:['MetLife','Azteca','AT&T Stadium','BC Place'],a:1},{q:'Which country has won the most World Cups?',opts:['Germany','Italy','Brazil','Argentina'],a:2},{q:'Which country won the 2022 World Cup?',opts:['France','Brazil','Croatia','Argentina'],a:3},{q:'Which Norwegian player is a Group I star?',opts:['Odegaard','Haaland','Sorloth','King'],a:1}],
  fr:[{q:'Combien d equipes au Mondial 2026?',opts:['32','40','48','56'],a:2},{q:'Dans quel stade se joue la finale?',opts:['Azteca','AT&T Stadium','MetLife Stadium','SoFi Stadium'],a:2},{q:'Quel pays n est PAS organisateur?',opts:['Etats-Unis','Canada','Mexique','Bresil'],a:3},{q:'Dans quel groupe evolue la FRANCE?',opts:['Groupe A','Groupe C','Groupe G','Groupe I'],a:3},{q:'Qui a remporte le Ballon d Or 2024?',opts:['Mbappe','Bellingham','Rodri','Vinicius'],a:2},{q:'Combien de matchs au total?',opts:['64','80','96','104'],a:3},{q:'Quel stade accueille le match d ouverture?',opts:['MetLife','Azteca','AT&T Stadium','BC Place'],a:1},{q:'Qui est le selectionneur de la France?',opts:['Zidane','Deschamps','Blanc','Wenger'],a:1},{q:'Quel pays a remporte le Mondial 2022?',opts:['France','Bresil','Croatie','Argentine'],a:3},{q:'Quel joueur norvegien est star du groupe I?',opts:['Odegaard','Haaland','Sorloth','King'],a:1}],
  es:[{q:'Cuantos equipos en el Mundial 2026?',opts:['32','40','48','56'],a:2},{q:'En que estadio se juega la final?',opts:['Azteca','AT&T Stadium','MetLife Stadium','SoFi Stadium'],a:2},{q:'Que pais NO es organizador?',opts:['USA','Canada','Mexico','Brasil'],a:3},{q:'En que grupo esta ESPANA?',opts:['Grupo A','Grupo C','Grupo H','Grupo I'],a:2},{q:'Quien gano el Balon de Oro 2024?',opts:['Mbappe','Bellingham','Rodri','Vinicius'],a:2},{q:'Cuantos partidos en total?',opts:['64','80','96','104'],a:3},{q:'Que estadio acoge el partido inaugural?',opts:['MetLife','Azteca','AT&T Stadium','BC Place'],a:1},{q:'Quien es el seleccionador de Espana?',opts:['Enrique','De la Fuente','Valverde','Ancelotti'],a:1},{q:'Que pais gano el Mundial 2022?',opts:['Francia','Brasil','Croacia','Argentina'],a:3},{q:'Que jugador noruego es estrella del Grupo I?',opts:['Odegaard','Haaland','Sorloth','King'],a:1}],
  pt:[{q:'Quantas selecoes na Copa 2026?',opts:['32','40','48','56'],a:2},{q:'Em qual estadio e a final?',opts:['Azteca','AT&T Stadium','MetLife Stadium','SoFi Stadium'],a:2},{q:'Qual pais NAO e sede?',opts:['USA','Canada','Mexico','Brasil'],a:3},{q:'Em qual grupo esta PORTUGAL?',opts:['Grupo A','Grupo C','Grupo K','Grupo I'],a:2},{q:'Quem ganhou a Bola de Ouro 2024?',opts:['Mbappe','Bellingham','Rodri','Vinicius'],a:2},{q:'Quantos jogos no total?',opts:['64','80','96','104'],a:3},{q:'Qual estadio recebe a abertura?',opts:['MetLife','Azteca','AT&T Stadium','BC Place'],a:1},{q:'Quem e o treinador de Portugal?',opts:['Santos','Martinez','Conceicao','Mourinho'],a:1},{q:'Qual pais ganhou a Copa 2022?',opts:['Franca','Brasil','Croacia','Argentina'],a:3},{q:'Qual jogador noruegues e estrela do Grupo I?',opts:['Odegaard','Haaland','Sorloth','King'],a:1}],
  it:[{q:'Quante squadre al Mondiale 2026?',opts:['32','40','48','56'],a:2},{q:'In quale stadio si gioca la finale?',opts:['Azteca','AT&T Stadium','MetLife Stadium','SoFi Stadium'],a:2},{q:'Quale paese NON e organizzatore?',opts:['USA','Canada','Messico','Brasile'],a:3},{q:'L ITALIA e qualificata al Mondiale 2026?',opts:['Si nel Girone A','Si nel Girone B','No eliminata','Si nel Girone C'],a:2},{q:'Chi ha vinto il Pallone d Or 2024?',opts:['Mbappe','Bellingham','Rodri','Vinicius'],a:2},{q:'Quante partite in totale?',opts:['64','80','96','104'],a:3},{q:'Quale stadio ospita la partita inaugurale?',opts:['MetLife','Azteca','AT&T Stadium','BC Place'],a:1},{q:'Chi e il ct della Francia?',opts:['Zidane','Deschamps','Blanc','Wenger'],a:1},{q:'Quale paese ha vinto il Mondiale 2022?',opts:['Francia','Brasile','Croazia','Argentina'],a:3},{q:'Quale giocatore norvegese e stella del Girone I?',opts:['Odegaard','Haaland','Sorloth','King'],a:1}],
  de:[{q:'Wie viele Teams nehmen an der WM 2026 teil?',opts:['32','40','48','56'],a:2},{q:'In welchem Stadion findet das Finale statt?',opts:['Azteca','AT&T Stadium','MetLife Stadium','SoFi Stadium'],a:2},{q:'Welches Land ist KEIN Gastgeber?',opts:['USA','Kanada','Mexiko','Brasilien'],a:3},{q:'In welcher Gruppe spielt DEUTSCHLAND?',opts:['Gruppe A','Gruppe C','Gruppe E','Gruppe I'],a:2},{q:'Wer hat den Ballon d Or 2024 gewonnen?',opts:['Mbappe','Bellingham','Rodri','Vinicius'],a:2},{q:'Wie viele Spiele gibt es insgesamt?',opts:['64','80','96','104'],a:3},{q:'Welches Stadion eroffnet das Turnier?',opts:['MetLife','Azteca','AT&T Stadium','BC Place'],a:1},{q:'Wer trainiert Deutschland?',opts:['Low','Flick','Nagelsmann','Klopp'],a:2},{q:'Welches Land hat die WM 2022 gewonnen?',opts:['Frankreich','Brasilien','Kroatien','Argentinien'],a:3},{q:'Welcher norwegische Spieler ist ein Star der Gruppe I?',opts:['Odegaard','Haaland','Sorloth','King'],a:1}]
};

var POLLS = {
  en:[
    {id:'p1',q:'Who will be World Champion 2026?',opts:['England','France','Spain','Brazil','Argentina','Germany','Portugal'],votes:[1580,1240,980,1100,1420,760,890]},
    {id:'p2',q:'Who will be the best player?',opts:['Mbappe','Haaland','Bellingham','Kane','Vinicius','Rodri','Yamal'],votes:[2100,1300,980,1150,760,620,540]},
    {id:'p3',q:'Will ENGLAND reach the Final?',opts:['Yes champion','Yes finalist','Semi-final','Group stage'],votes:[1200,800,600,150]},
    {id:'p4',q:'Who will top-score in 2026?',opts:['Kane','Mbappe','Haaland','Vinicius','Ronaldo'],votes:[980,1400,1100,760,540]}
  ,
    {id:'p_goldenboot',q:'Who will win the Golden Boot?',opts:['Mbappe','Haaland','Vinicius Jr','Lamine Yamal'],votes:[0,0,0,0]},
    {id:'p_surprise',q:'Which surprise team will go furthest?',opts:['Morocco','Japan','USA','Canada'],votes:[0,0,0,0]},
    {id:'p_bestgk',q:'Best goalkeeper of the tournament?',opts:['Alisson','Martinez','Courtois','Maignan'],votes:[0,0,0,0]},
    {id:'p_youngstar',q:'Best young player of the tournament?',opts:['Lamine Yamal','Endrick','Cherki','Doue'],votes:[0,0,0,0]},
    {id:'p_final',q:'What will the final be?',opts:['France vs Brazil','Argentina vs England','Spain vs Germany','France vs Argentina'],votes:[0,0,0,0]},
    {id:'p_watch',q:'How will you watch the World Cup?',opts:['TV at home','Pub / Bar','At the stadium','Streaming'],votes:[0,0,0,0]},
    {id:'p_mvp',q:'Who will be the tournament MVP?',opts:['Mbappe','Haaland','Vinicius Jr','Rodri'],votes:[0,0,0,0]},
    {id:'p_goals',q:'How many total goals in the WC?',opts:['Less than 150','150-180','180-210','More than 210'],votes:[0,0,0,0]},
    {id:'p_var',q:'Will VAR ruin the World Cup?',opts:['Yes too much','A little bit','No it helps','No opinion'],votes:[0,0,0,0]},
    {id:'p_host',q:'Which host nation will go furthest?',opts:['USA','Mexico','Canada','None of them'],votes:[0,0,0,0]},
    {id:'p_penalty',q:'Which team is best at penalties?',opts:['Argentina','France','England','Germany'],votes:[0,0,0,0]},
    {id:'p_bestgoal',q:'Who will score the best goal?',opts:['Mbappe','Vinicius Jr','Lamine Yamal','Olise'],votes:[0,0,0,0]},
    {id:'p_stadium',q:'Best World Cup stadium?',opts:['MetLife Stadium','Azteca Stadium','Rose Bowl','AT&T Stadium'],votes:[0,0,0,0]},
    {id:'p_referee',q:'Will the referees be good enough?',opts:['Yes definitely','Mostly yes','Mostly no','Big controversy ahead'],votes:[0,0,0,0]},
    {id:'p_format',q:'Do you like the 48-team format?',opts:['Yes more teams is great','Yes but too many games','No prefer 32 teams','No opinion'],votes:[0,0,0,0]}],
  fr:[
    {id:'p1',q:'Qui sera champion du Monde 2026?',opts:['France','Argentine','Espagne','Bresil','Angleterre','Allemagne','Portugal'],votes:[1580,1420,980,1100,760,680,890]},
    {id:'p2',q:'Quel sera le meilleur joueur?',opts:['Mbappe','Haaland','Bellingham','Kane','Vinicius','Rodri','Yamal'],votes:[2400,1300,760,890,820,620,540]},
    {id:'p3',q:'La FRANCE ira-t-elle en finale?',opts:['Oui championne','Oui finaliste','Demi-finale','Phase de groupes'],votes:[1600,900,500,120]},
    {id:'p4',q:'Qui sera meilleur buteur 2026?',opts:['Mbappe','Kane','Haaland','Vinicius','Ronaldo'],votes:[1800,890,1100,760,540]}
  ,
    {id:'p_goldenboot',q:'Qui remportera le Soulier d Or ?',opts:['Mbappe','Haaland','Vinicius Jr','Lamine Yamal'],votes:[0,0,0,0]},
    {id:'p_surprise',q:'Quelle equipe surprise ira le plus loin ?',opts:['Maroc','Japon','USA','Canada'],votes:[0,0,0,0]},
    {id:'p_bestgk',q:'Meilleur gardien du tournoi ?',opts:['Alisson','Martinez','Courtois','Maignan'],votes:[0,0,0,0]},
    {id:'p_youngstar',q:'Meilleur jeune joueur du tournoi ?',opts:['Lamine Yamal','Endrick','Cherki','Doue'],votes:[0,0,0,0]},
    {id:'p_final',q:'Quelle sera la finale ?',opts:['France vs Bresil','Argentine vs Angleterre','Espagne vs Allemagne','France vs Argentine'],votes:[0,0,0,0]},
    {id:'p_watch',q:'Comment regardes-tu le Mondial ?',opts:['A la maison','Au bar/pub','Au stade','En streaming'],votes:[0,0,0,0]},
    {id:'p_mvp',q:'Qui sera le MVP du Mondial ?',opts:['Mbappe','Haaland','Vinicius Jr','Rodri'],votes:[0,0,0,0]},
    {id:'p_goals',q:'Combien de buts au total ?',opts:['Moins de 150','150-180','180-210','Plus de 210'],votes:[0,0,0,0]},
    {id:'p_var',q:'Le VAR gachera-t-il le Mondial ?',opts:['Oui trop','Un peu','Non ca aide','Pas d avis'],votes:[0,0,0,0]},
    {id:'p_host',q:'Quel pays hote ira le plus loin ?',opts:['USA','Mexique','Canada','Aucun'],votes:[0,0,0,0]},
    {id:'p_penalty',q:'Quelle equipe excelle aux tirs au but ?',opts:['Argentine','France','Angleterre','Allemagne'],votes:[0,0,0,0]},
    {id:'p_bestgoal',q:'Qui marquera le plus beau but ?',opts:['Mbappe','Vinicius Jr','Lamine Yamal','Olise'],votes:[0,0,0,0]},
    {id:'p_stadium',q:'Meilleur stade du Mondial ?',opts:['MetLife Stadium','Stade Azteca','Rose Bowl','AT&T Stadium'],votes:[0,0,0,0]},
    {id:'p_referee',q:'Les arbitres seront-ils a la hauteur ?',opts:['Oui certainement','Plutot oui','Plutot non','Grande controverse'],votes:[0,0,0,0]},
    {id:'p_format',q:'Aimez-vous le format a 48 equipes ?',opts:['Oui plus d equipes','Oui mais trop de matchs','Non je prefere 32','Sans avis'],votes:[0,0,0,0]}],
  es:[
    {id:'p1',q:'Quien sera campeon del Mundo 2026?',opts:['Espana','Argentina','Francia','Brasil','Inglaterra','Alemania','Portugal'],votes:[1800,1420,980,1100,760,680,890]},
    {id:'p2',q:'Quien sera el mejor jugador?',opts:['Mbappe','Haaland','Bellingham','Kane','Vinicius','Rodri','Yamal'],votes:[1800,1300,760,890,820,1200,980]},
    {id:'p3',q:'Llegara ESPANA a la Final?',opts:['Si campeona','Si finalista','Semifinal','Fase de grupos'],votes:[1600,900,500,120]},
    {id:'p4',q:'Quien sera el Pichichi del Mundial?',opts:['Yamal','Mbappe','Haaland','Vinicius','Kane'],votes:[980,1400,1100,760,890]}
  ],
  pt:[
    {id:'p1',q:'Quem sera campeao do Mundo 2026?',opts:['Portugal','Argentina','Franca','Brasil','Espanha','Alemanha','Inglaterra'],votes:[1800,1420,980,1350,880,680,760]},
    {id:'p2',q:'Quem sera o melhor jogador?',opts:['Mbappe','Haaland','Bellingham','Kane','Vinicius','Ronaldo','Rodri'],votes:[1800,1300,760,890,820,1100,620]},
    {id:'p3',q:'PORTUGAL chegara a Final?',opts:['Sim campeao','Sim finalista','Semifinal','Fase de grupos'],votes:[1600,900,500,120]},
    {id:'p4',q:'Quem sera artilheiro da Copa?',opts:['Ronaldo','Mbappe','Haaland','Vinicius','Kane'],votes:[1200,1400,1100,760,890]}
  ],
  it:[
    {id:'p1',q:'Chi sara campione del Mondo 2026?',opts:['Francia','Argentina','Spagna','Brasile','Inghilterra','Germania','Portogallo'],votes:[1240,1420,980,1100,760,680,890]},
    {id:'p2',q:'Chi sara il miglior giocatore?',opts:['Mbappe','Haaland','Bellingham','Kane','Vinicius','Rodri','Yamal'],votes:[1800,1300,760,890,820,620,540]},
    {id:'p3',q:'L ITALIA tornera al Mondiale 2030?',opts:['Certamente','Probabilmente','Forse','No'],votes:[1200,800,600,150]},
    {id:'p4',q:'Chi sara capocannoniere 2026?',opts:['Mbappe','Haaland','Kane','Vinicius','Ronaldo'],votes:[1400,1100,890,760,540]}
  ],
  de:[
    {id:'p1',q:'Wer wird Weltmeister 2026?',opts:['Deutschland','Argentinien','Spanien','Brasilien','England','Frankreich','Portugal'],votes:[1800,1420,980,1100,760,1240,890]},
    {id:'p2',q:'Wer wird der beste Spieler?',opts:['Mbappe','Haaland','Bellingham','Kane','Vinicius','Rodri','Yamal'],votes:[1800,1500,760,890,820,620,540]},
    {id:'p3',q:'Kommt DEUTSCHLAND ins Finale?',opts:['Ja Weltmeister','Ja Finalist','Halbfinale','Gruppenphase'],votes:[1600,900,500,120]},
    {id:'p4',q:'Wer wird Torschutzkoenig 2026?',opts:['Haaland','Mbappe','Kane','Vinicius','Muller'],votes:[1600,1400,890,760,540]}
  ]
};

var SPONSORS = {
  en:[{name:'FIFA 2026',icon:'🏆',url:'https://www.fifa.com/worldcup'},{name:'ESPN FC',icon:'📺',url:'https://www.espn.com/soccer'},{name:'Google Play',icon:'📱',url:'https://play.google.com'}],
  fr:[{name:'FIFA 2026',icon:'🏆',url:'https://www.fifa.com/worldcup'},{name:'beIN Sports',icon:'📺',url:'https://www.beinsports.com'},{name:'Google Play',icon:'📱',url:'https://play.google.com'}],
  es:[{name:'FIFA 2026',icon:'🏆',url:'https://www.fifa.com/worldcup'},{name:'DAZN',icon:'📺',url:'https://www.dazn.com'},{name:'Google Play',icon:'📱',url:'https://play.google.com'}],
  pt:[{name:'FIFA 2026',icon:'🏆',url:'https://www.fifa.com/worldcup'},{name:'Sport TV',icon:'📺',url:'https://www.sporttv.pt'},{name:'Google Play',icon:'📱',url:'https://play.google.com'}],
  it:[{name:'FIFA 2026',icon:'🏆',url:'https://www.fifa.com/worldcup'},{name:'RAI Sport',icon:'📺',url:'https://www.raisport.rai.it'},{name:'Google Play',icon:'📱',url:'https://play.google.com'}],
  de:[{name:'FIFA 2026',icon:'🏆',url:'https://www.fifa.com/worldcup'},{name:'ARD Sport',icon:'📺',url:'https://www.sportschau.de'},{name:'Google Play',icon:'📱',url:'https://play.google.com'}]
}

var STRIPE_EUR = 'https://buy.stripe.com/aFacN53uBdi18Mr8xvcjS00';
var STRIPE_GBP = 'https://buy.stripe.com/fZu6oH6GNcdX7In8xvcjS01';
function getPrice(lang){return lang==='en'?'1.99 GBP':'1,99 EUR';}
function getStripeLink(lang){return lang==='en'?STRIPE_GBP:STRIPE_EUR;}


var STARS = [
  {name:'Guillermo Ochoa',role:'',flag:'🇲🇽',club:'Las Chivas',pos:'GK',age:39,stat:'Mexico legend 5 WCs',rating:82,pac:54,sho:14,pas:62,dri:21,def_:85,phy:72},
  {name:'Luis Malagon',role:'',flag:'🇲🇽',club:'Club America',pos:'GK',age:26,stat:'Mexico No.1 2024',rating:80,pac:55,sho:13,pas:60,dri:20,def_:83,phy:70},
  {name:'Cesar Montes',role:'',flag:'🇲🇽',club:'Monterrey',pos:'DF',age:27,stat:'Mexico captain CB',rating:80,pac:72,sho:35,pas:68,dri:50,def_:79,phy:78},
  {name:'Jorge Sanchez',role:'',flag:'🇲🇽',club:'Atlas',pos:'DF',age:27,stat:'Mexico right back',rating:78,pac:79,sho:40,pas:67,dri:48,def_:75,phy:74},
  {name:'Gerardo Arteaga',role:'',flag:'🇲🇽',club:'Stade Brestois',pos:'DF',age:25,stat:'Mexico left back',rating:79,pac:78,sho:42,pas:70,dri:52,def_:77,phy:73},
  {name:'Edson Alvarez',role:'',flag:'🇲🇽',club:'West Ham',pos:'MF',age:27,stat:'Mexico anchor midfield',rating:84,pac:76,sho:60,pas:78,dri:55,def_:73,phy:80},
  {name:'Orbelin Pineda',role:'',flag:'🇲🇽',club:'AEK Athens',pos:'MF',age:28,stat:'Mexico dribbler',rating:81,pac:78,sho:66,pas:76,dri:56,def_:79,phy:68},
  {name:'Hirving Lozano',role:'RW',flag:'🇲🇽',club:'San Diego FC',pos:'FW',age:30,stat:'Mexico record scorer',rating:85,pac:91,sho:80,pas:75,dri:82,def_:45,phy:68},
  {name:'Santiago Gimenez',role:'CF',flag:'🇲🇽',club:'AC Milan',pos:'FW',age:24,stat:'WC host nation striker',rating:86,pac:82,sho:87,pas:73,dri:79,def_:41,phy:70},
  {name:'Henry Martin',role:'CF',flag:'🇲🇽',club:'Club America',pos:'FW',age:32,stat:'Liga MX top scorer',rating:80,pac:78,sho:81,pas:70,dri:76,def_:40,phy:66},
  {name:'Ronwen Williams',role:'',flag:'🇿🇦',club:'Mamelodi Sundowns',pos:'GK',age:32,stat:'SA No.1 AFCON 2023',rating:78,pac:52,sho:12,pas:58,dri:18,def_:80,phy:68},
  {name:'Veli Mothwa',role:'',flag:'🇿🇦',club:'AmaZulu',pos:'GK',age:30,stat:'Bafana Bafana backup',rating:72,pac:50,sho:11,pas:55,dri:17,def_:75,phy:65},
  {name:'Rushine De Reuck',role:'',flag:'🇿🇦',club:'Mamelodi Sundowns',pos:'DF',age:29,stat:'SA central defender',rating:76,pac:70,sho:33,pas:62,dri:47,def_:74,phy:75},
  {name:'Sifiso Hlanti',role:'',flag:'🇿🇦',club:'Kaizer Chiefs',pos:'DF',age:33,stat:'Bafana left back',rating:74,pac:72,sho:34,pas:63,dri:45,def_:72,phy:72},
  {name:'Reeve Frosler',role:'',flag:'🇿🇦',club:'Kaizer Chiefs',pos:'DF',age:27,stat:'SA right back',rating:75,pac:76,sho:35,pas:64,dri:46,def_:73,phy:71},
  {name:'Ethan Ntsham',role:'',flag:'🇿🇦',club:'Mamelodi Sundowns',pos:'MF',age:24,stat:'SA rising star',rating:76,pac:74,sho:58,pas:73,dri:52,def_:71,phy:66},
  {name:'Teboho Mokoena',role:'',flag:'🇿🇦',club:'Mamelodi Sundowns',pos:'MF',age:27,stat:'SA midfielder',rating:77,pac:74,sho:60,pas:75,dri:53,def_:72,phy:68},
  {name:'Percy Tau',role:'LW',flag:'🇿🇦',club:'Al Ahly',pos:'FW',age:30,stat:'SA best player',rating:82,pac:84,sho:76,pas:72,dri:80,def_:38,phy:62},
  {name:'Evidence Makgopa',role:'CF',flag:'🇿🇦',club:'Orlando Pirates',pos:'FW',age:24,stat:'SA striker',rating:78,pac:80,sho:79,pas:68,dri:74,def_:38,phy:65},
  {name:'Lyle Foster',role:'CF',flag:'🇿🇦',club:'Burnley',pos:'FW',age:24,stat:'SA forward',rating:79,pac:81,sho:80,pas:70,dri:76,def_:39,phy:66},
  {name:'Kim Seung-gyu',role:'',flag:'🇰🇷',club:'Vissel Kobe',pos:'GK',age:36,stat:'Korea veteran keeper',rating:79,pac:53,sho:13,pas:59,dri:19,def_:81,phy:68},
  {name:'Jo Hyeon-woo',role:'',flag:'🇰🇷',club:'Ulsan HD',pos:'GK',age:32,stat:'Korea No.2',rating:77,pac:52,sho:12,pas:57,dri:18,def_:79,phy:67},
  {name:'Kim Min-jae',role:'',flag:'🇰🇷',club:'Bayern Munich',pos:'DF',age:28,stat:'Korea best defender',rating:88,pac:76,sho:40,pas:72,dri:55,def_:85,phy:83},
  {name:'Lee Ki-je',role:'',flag:'🇰🇷',club:'Jeonbuk',pos:'DF',age:27,stat:'Korea right back',rating:76,pac:78,sho:38,pas:66,dri:47,def_:74,phy:72},
  {name:'Kim Jin-su',role:'',flag:'🇰🇷',club:'Ulsan HD',pos:'DF',age:32,stat:'Korea left back',rating:77,pac:76,sho:37,pas:68,dri:48,def_:75,phy:71},
  {name:'Jung Woo-young',role:'',flag:'🇰🇷',club:'Al Qadsiah',pos:'MF',age:34,stat:'Korea anchor',rating:78,pac:68,sho:55,pas:76,dri:58,def_:70,phy:74},
  {name:'Lee Jae-sung',role:'',flag:'🇰🇷',club:'Mainz',pos:'MF',age:31,stat:'Korea creative mid',rating:80,pac:74,sho:62,pas:78,dri:55,def_:76,phy:69},
  {name:'Son Heung-min',role:'LW',flag:'🇰🇷',club:'Tottenham',pos:'FW',age:32,stat:'Korea all-time top scorer',rating:92,pac:90,sho:86,pas:83,dri:88,def_:45,phy:72},
  {name:'Hwang Hee-chan',role:'RW',flag:'🇰🇷',club:'Wolves',pos:'FW',age:29,stat:'Korea No.9',rating:83,pac:85,sho:78,pas:73,dri:82,def_:40,phy:61},
  {name:'Cho Gue-sung',role:'CF',flag:'🇰🇷',club:'Jeonbuk',pos:'FW',age:26,stat:'Korea WC 2022 hero',rating:81,pac:79,sho:82,pas:71,dri:76,def_:40,phy:67},
  {name:'Jiri Stanek',role:'',flag:'🇨🇿',club:'Slavia Prague',pos:'GK',age:28,stat:'Czech No.1',rating:80,pac:54,sho:13,pas:60,dri:19,def_:82,phy:69},
  {name:'Matyas Vanecek',role:'',flag:'🇨🇿',club:'Bayer Leverkusen',pos:'GK',age:27,stat:'Czech backup GK',rating:78,pac:52,sho:12,pas:58,dri:18,def_:80,phy:68},
  {name:'Tomas Holes',role:'',flag:'🇨🇿',club:'Slavia Prague',pos:'DF',age:30,stat:'Czech CB',rating:77,pac:71,sho:35,pas:65,dri:48,def_:75,phy:76},
  {name:'David Zima',role:'',flag:'🇨🇿',club:'Torino',pos:'DF',age:24,stat:'Czech CB',rating:78,pac:72,sho:36,pas:66,dri:49,def_:76,phy:75},
  {name:'Jan Boril',role:'',flag:'🇨🇿',club:'Slavia Prague',pos:'DF',age:32,stat:'Czech left back',rating:75,pac:73,sho:36,pas:65,dri:47,def_:73,phy:70},
  {name:'Tomas Soucek',role:'',flag:'🇨🇿',club:'West Ham',pos:'MF',age:30,stat:'Czech box-to-box',rating:85,pac:74,sho:68,pas:78,dri:56,def_:80,phy:82},
  {name:'Lukas Provod',role:'',flag:'🇨🇿',club:'Slavia Prague',pos:'MF',age:27,stat:'Czech midfielder',rating:80,pac:76,sho:62,pas:77,dri:54,def_:75,phy:70},
  {name:'Patrik Schick',role:'CF',flag:'🇨🇿',club:'Bayer Leverkusen',pos:'FW',age:29,stat:'Czech top scorer',rating:87,pac:82,sho:88,pas:78,dri:82,def_:42,phy:71},
  {name:'Adam Hlozek',role:'RW',flag:'🇨🇿',club:'Bayer Leverkusen',pos:'FW',age:22,stat:'Czech golden boy',rating:83,pac:84,sho:79,pas:76,dri:81,def_:38,phy:65},
  {name:'Mojmir Chytil',role:'CF',flag:'🇨🇿',club:'Fiorentina',pos:'FW',age:24,stat:'Czech striker',rating:80,pac:80,sho:81,pas:72,dri:76,def_:39,phy:66},
  {name:'Maxime Crepeau',role:'',flag:'🇨🇦',club:'LA Galaxy',pos:'GK',age:30,stat:'Canada No.1',rating:79,pac:53,sho:13,pas:59,dri:19,def_:81,phy:68},
  {name:'Dayne St Clair',role:'',flag:'🇨🇦',club:'Minnesota United',pos:'GK',age:27,stat:'Canada backup',rating:77,pac:52,sho:12,pas:57,dri:18,def_:79,phy:67},
  {name:'Alistair Johnston',role:'',flag:'🇨🇦',club:'Celtic',pos:'DF',age:26,stat:'Canada right back',rating:81,pac:80,sho:40,pas:72,dri:50,def_:78,phy:73},
  {name:'Kamal Miller',role:'',flag:'🇨🇦',club:'LAFC',pos:'DF',age:27,stat:'Canada CB',rating:79,pac:72,sho:36,pas:66,dri:49,def_:77,phy:75},
  {name:'Derek Cornelius',role:'',flag:'🇨🇦',club:'Club Brugge',pos:'DF',age:27,stat:'Canada CB',rating:78,pac:71,sho:35,pas:65,dri:48,def_:76,phy:74},
  {name:'Atiba Hutchinson',role:'',flag:'🇨🇦',club:'Besiktas',pos:'MF',age:42,stat:'Canada legend',rating:79,pac:68,sho:55,pas:80,dri:58,def_:72,phy:68},
  {name:'Stephen Eustaquio',role:'',flag:'🇨🇦',club:'Porto',pos:'MF',age:28,stat:'Canada engine',rating:84,pac:76,sho:62,pas:81,dri:57,def_:77,phy:72},
  {name:'Jonathan David',role:'CF',flag:'🇨🇦',club:'Lille',pos:'FW',age:25,stat:'Canada top scorer',rating:86,pac:83,sho:87,pas:75,dri:81,def_:41,phy:68},
  {name:'Alphonso Davies',role:'LW',flag:'🇨🇦',club:'Bayern Munich',pos:'FW',age:24,stat:'Canada superstar',rating:93,pac:97,sho:80,pas:83,dri:91,def_:48,phy:74},
  {name:'Tajon Buchanan',role:'RW',flag:'🇨🇦',club:'Inter Milan',pos:'FW',age:25,stat:'Canada winger',rating:84,pac:88,sho:76,pas:76,dri:83,def_:38,phy:64},
  {name:'Ibrahim Sehic',role:'',flag:'🇧🇦',club:'Kayserispor',pos:'GK',age:35,stat:'Bosnia veteran GK',rating:77,pac:52,sho:12,pas:57,dri:18,def_:79,phy:67},
  {name:'Nikola Vasilj',role:'',flag:'🇧🇦',club:'St Pauli',pos:'GK',age:29,stat:'Bosnia No.1',rating:78,pac:53,sho:13,pas:58,dri:19,def_:80,phy:68},
  {name:'Ermin Bicakcic',role:'',flag:'🇧🇦',club:'Hoffenheim',pos:'DF',age:33,stat:'Bosnia CB',rating:76,pac:70,sho:33,pas:62,dri:47,def_:74,phy:73},
  {name:'Sead Kolasinac',role:'',flag:'🇧🇦',club:'Atalanta',pos:'DF',age:31,stat:'Bosnia left back',rating:82,pac:78,sho:40,pas:70,dri:52,def_:80,phy:78},
  {name:'Amar Dedic',role:'',flag:'🇧🇦',club:'RB Salzburg',pos:'DF',age:23,stat:'Bosnia right back',rating:80,pac:80,sho:42,pas:72,dri:50,def_:77,phy:72},
  {name:'Miralem Pjanic',role:'',flag:'🇧🇦',club:'Sharjah',pos:'MF',age:35,stat:'Bosnia legend',rating:82,pac:68,sho:55,pas:85,dri:57,def_:72,phy:66},
  {name:'Sasa Lukic',role:'',flag:'🇧🇦',club:'Fulham',pos:'MF',age:27,stat:'Bosnia mid',rating:80,pac:73,sho:60,pas:78,dri:54,def_:74,phy:70},
  {name:'Edin Dzeko',role:'CF',flag:'🇧🇦',club:'Fenerbahce',pos:'FW',age:39,stat:'Bosnia all-time top scorer',rating:82,pac:74,sho:85,pas:74,dri:78,def_:40,phy:68},
  {name:'Anel Ahmedhodzic',role:'',flag:'🇧🇦',club:'Sheffield Utd',pos:'DF',age:25,stat:'Bosnia CB',rating:79,pac:72,sho:36,pas:66,dri:49,def_:77,phy:75},
  {name:'Ermedin Demirovic',role:'CF',flag:'🇧🇦',club:'Augsburg',pos:'FW',age:26,stat:'Bosnia striker',rating:82,pac:80,sho:83,pas:73,dri:78,def_:40,phy:67},
  {name:'Meshaal Barsham',role:'',flag:'🇶🇦',club:'Al Sadd',pos:'GK',age:25,stat:'Qatar No.1',rating:77,pac:52,sho:12,pas:57,dri:18,def_:79,phy:67},
  {name:'Yousef Hassan',role:'',flag:'🇶🇦',club:'Al Arabi',pos:'GK',age:26,stat:'Qatar backup',rating:72,pac:50,sho:11,pas:54,dri:17,def_:74,phy:64},
  {name:'Bassam Al-Rawi',role:'',flag:'🇶🇦',club:'Al Gharafa',pos:'DF',age:31,stat:'Qatar CB',rating:74,pac:70,sho:33,pas:62,dri:46,def_:72,phy:73},
  {name:'Pedro Miguel',role:'',flag:'🇶🇦',club:'Al Ahli',pos:'DF',age:31,stat:'Qatar left back',rating:76,pac:73,sho:36,pas:65,dri:47,def_:74,phy:70},
  {name:'Homam Ahmed',role:'',flag:'🇶🇦',club:'Al Sadd',pos:'DF',age:24,stat:'Qatar right back',rating:75,pac:75,sho:36,pas:64,dri:46,def_:73,phy:69},
  {name:'Karim Boudiaf',role:'',flag:'🇶🇦',club:'Al Duhail',pos:'MF',age:33,stat:'Qatar captain',rating:77,pac:68,sho:55,pas:74,dri:54,def_:70,phy:72},
  {name:'Hassan Al-Haydos',role:'RW',flag:'🇶🇦',club:'Al Sadd',pos:'FW',age:33,stat:'Qatar legend',rating:79,pac:76,sho:72,pas:74,dri:76,def_:38,phy:64},
  {name:'Akram Afif',role:'LW',flag:'🇶🇦',club:'Al Sadd',pos:'FW',age:28,stat:'Qatar best player',rating:84,pac:85,sho:78,pas:74,dri:82,def_:38,phy:64},
  {name:'Almoez Ali',role:'CF',flag:'🇶🇦',club:'Al Duhail',pos:'FW',age:28,stat:'Qatar WC 2022 top scorer',rating:82,pac:80,sho:83,pas:73,dri:78,def_:39,phy:65},
  {name:'Assim Madibo',role:'',flag:'🇶🇦',club:'DC United',pos:'MF',age:25,stat:'Qatar midfielder',rating:75,pac:72,sho:57,pas:73,dri:52,def_:70,phy:68},
  {name:'Yann Sommer',role:'',flag:'🇨🇭',club:'Inter Milan',pos:'GK',age:36,stat:'Switzerland No.1',rating:88,pac:55,sho:14,pas:64,dri:21,def_:88,phy:72},
  {name:'Gregor Kobel',role:'',flag:'🇨🇭',club:'Borussia Dortmund',pos:'GK',age:27,stat:'Swiss backup',rating:86,pac:55,sho:14,pas:62,dri:20,def_:86,phy:71},
  {name:'Manuel Akanji',role:'',flag:'🇨🇭',club:'Man. City',pos:'DF',age:29,stat:'Swiss CB',rating:87,pac:80,sho:40,pas:75,dri:54,def_:85,phy:80},
  {name:'Ricardo Rodriguez',role:'',flag:'🇨🇭',club:'Torino',pos:'DF',age:32,stat:'Swiss left back',rating:80,pac:74,sho:38,pas:70,dri:50,def_:78,phy:70},
  {name:'Silvan Widmer',role:'',flag:'🇨🇭',club:'Mainz',pos:'DF',age:31,stat:'Swiss right back',rating:79,pac:78,sho:40,pas:70,dri:49,def_:76,phy:72},
  {name:'Granit Xhaka',role:'',flag:'🇨🇭',club:'Bayer Leverkusen',pos:'MF',age:33,stat:'Swiss captain',rating:86,pac:72,sho:65,pas:82,dri:60,def_:80,phy:74},
  {name:'Remo Freuler',role:'',flag:'🇨🇭',club:'Bologna',pos:'MF',age:32,stat:'Swiss midfielder',rating:82,pac:74,sho:60,pas:78,dri:56,def_:76,phy:72},
  {name:'Xherdan Shaqiri',role:'RW',flag:'🇨🇭',club:'Chicago Fire',pos:'FW',age:33,stat:'Swiss legend',rating:83,pac:83,sho:78,pas:74,dri:80,def_:40,phy:66},
  {name:'Breel Embolo',role:'CF',flag:'🇨🇭',club:'Monaco',pos:'FW',age:28,stat:'Swiss striker',rating:83,pac:81,sho:84,pas:72,dri:79,def_:40,phy:66},
  {name:'Noah Okafor',role:'LW',flag:'🇨🇭',club:'AC Milan',pos:'FW',age:25,stat:'Swiss rising star',rating:84,pac:87,sho:79,pas:76,dri:82,def_:38,phy:65},
  {name:'Alisson',role:'',flag:'🇧🇷',club:'Liverpool',pos:'GK',age:32,stat:'Brazil No.1 world class',rating:92,pac:58,sho:15,pas:66,dri:22,def_:92,phy:74},
  {name:'Ederson',role:'',flag:'🇧🇷',club:'Man. City',pos:'GK',age:31,stat:'Brazil backup star',rating:90,pac:58,sho:14,pas:65,dri:21,def_:90,phy:73},
  {name:'Marquinhos',role:'',flag:'🇧🇷',club:'PSG',pos:'DF',age:31,stat:'Brazil captain CB',rating:88,pac:76,sho:40,pas:75,dri:54,def_:87,phy:78},
  {name:'Militao',role:'',flag:'🇧🇷',club:'Real Madrid',pos:'DF',age:27,stat:'Brazil CB star',rating:87,pac:78,sho:40,pas:74,dri:54,def_:86,phy:78},
  {name:'Alex Sandro',role:'',flag:'🇧🇷',club:'Juventus',pos:'DF',age:34,stat:'Brazil left back',rating:79,pac:76,sho:38,pas:70,dri:49,def_:77,phy:70},
  {name:'Casemiro',role:'',flag:'🇧🇷',club:'Man. Utd',pos:'MF',age:33,stat:'Brazil anchor',rating:86,pac:70,sho:62,pas:78,dri:65,def_:82,phy:82},
  {name:'Lucas Paqueta',role:'',flag:'🇧🇷',club:'West Ham',pos:'MF',age:27,stat:'Brazil creative',rating:87,pac:78,sho:68,pas:84,dri:60,def_:80,phy:72},
  {name:'Vinicius Jr',role:'LW',flag:'🇧🇷',club:'Real Madrid',pos:'FW',age:24,stat:'Brazil superstar Balon dOr',rating:95,pac:96,sho:88,pas:85,dri:93,def_:44,phy:73},
  {name:'Rodrygo',role:'RW',flag:'🇧🇷',club:'Real Madrid',pos:'FW',age:24,stat:'Brazil winger UCL',rating:89,pac:90,sho:83,pas:81,dri:87,def_:42,phy:68},
  {name:'Raphinha',role:'LW',flag:'🇧🇷',club:'FC Barcelona',pos:'FW',age:28,stat:'Brazil UCL 2025',rating:87,pac:88,sho:82,pas:77,dri:86,def_:40,phy:65},
  {name:'Yassine Bounou',role:'',flag:'🇲🇦',club:'Al Hilal',pos:'GK',age:33,stat:'Morocco WC 2022 hero',rating:88,pac:55,sho:14,pas:63,dri:21,def_:88,phy:72},
  {name:'Munir El Kajoui',role:'',flag:'🇲🇦',club:'Deportivo',pos:'GK',age:30,stat:'Morocco backup',rating:78,pac:52,sho:12,pas:58,dri:19,def_:80,phy:68},
  {name:'Nayef Aguerd',role:'',flag:'🇲🇦',club:'West Ham',pos:'DF',age:28,stat:'Morocco CB',rating:84,pac:74,sho:38,pas:70,dri:52,def_:82,phy:77},
  {name:'Achraf Hakimi',role:'',flag:'🇲🇦',club:'PSG',pos:'DF',age:27,stat:'Morocco best player RB',rating:90,pac:90,sho:72,pas:82,dri:58,def_:87,phy:74},
  {name:'Noussair Mazraoui',role:'',flag:'🇲🇦',club:'Bayern Munich',pos:'DF',age:28,stat:'Morocco right back',rating:86,pac:84,sho:55,pas:78,dri:54,def_:83,phy:73},
  {name:'Sofyan Amrabat',role:'',flag:'🇲🇦',club:'Fenerbahce',pos:'MF',age:28,stat:'Morocco midfielder WC 2022',rating:86,pac:74,sho:60,pas:78,dri:62,def_:80,phy:78},
  {name:'Azzedine Ounahi',role:'',flag:'🇲🇦',club:'Marseille',pos:'MF',age:24,stat:'Morocco rising mid',rating:82,pac:78,sho:62,pas:80,dri:55,def_:76,phy:70},
  {name:'Hakim Ziyech',role:'RW',flag:'🇲🇦',club:'Galatasaray',pos:'FW',age:32,stat:'Morocco playmaker',rating:86,pac:82,sho:79,pas:78,dri:82,def_:40,phy:64},
  {name:'Youssef En-Nesyri',role:'CF',flag:'🇲🇦',club:'Fenerbahce',pos:'FW',age:28,stat:'Morocco striker WC 2022',rating:85,pac:83,sho:86,pas:74,dri:80,def_:40,phy:69},
  {name:'Soufiane Rahimi',role:'LW',flag:'🇲🇦',club:'Al Ain',pos:'FW',age:26,stat:'Morocco winger',rating:83,pac:85,sho:78,pas:75,dri:81,def_:38,phy:63},
  {name:'Josue Duverger',role:'',flag:'🇭🇹',club:'Nashville SC',pos:'GK',age:29,stat:'Haiti No.1',rating:72,pac:51,sho:11,pas:54,dri:17,def_:74,phy:65},
  {name:'James Junior Fou',role:'',flag:'🇭🇹',club:'Haiti national',pos:'GK',age:26,stat:'Haiti backup',rating:68,pac:49,sho:10,pas:52,dri:16,def_:70,phy:62},
  {name:'Andrew Jean-Baptiste',role:'',flag:'🇭🇹',club:'Nashville SC',pos:'DF',age:32,stat:'Haiti CB',rating:74,pac:70,sho:32,pas:62,dri:46,def_:72,phy:73},
  {name:'Mechack Jerome',role:'',flag:'🇭🇹',club:'Haiti national',pos:'DF',age:33,stat:'Haiti veteran DF',rating:72,pac:68,sho:31,pas:60,dri:45,def_:70,phy:71},
  {name:'Derrick Etienne',role:'RW',flag:'🇭🇹',club:'Columbus Crew',pos:'FW',age:29,stat:'Haiti right wing',rating:76,pac:80,sho:70,pas:68,dri:76,def_:35,phy:62},
  {name:'Frantzdy Pierrot',role:'CF',flag:'🇭🇹',club:'Charlotte FC',pos:'FW',age:29,stat:'Haiti striker',rating:77,pac:78,sho:78,pas:68,dri:73,def_:36,phy:64},
  {name:'Duckens Nazon',role:'LW',flag:'🇭🇹',club:'Haiti national',pos:'FW',age:31,stat:'Haiti forward',rating:75,pac:78,sho:70,pas:66,dri:74,def_:34,phy:61},
  {name:'Wilde-Donald Guerrier',role:'',flag:'🇭🇹',club:'Haiti national',pos:'MF',age:30,stat:'Haiti captain',rating:74,pac:72,sho:55,pas:71,dri:50,def_:68,phy:66},
  {name:'Steeven Saba',role:'',flag:'🇭🇹',club:'Haiti national',pos:'MF',age:27,stat:'Haiti midfielder',rating:72,pac:70,sho:53,pas:69,dri:48,def_:66,phy:64},
  {name:'Melchie Dumornay',role:'LW',flag:'🇭🇹',club:'Olympique Lyon W',pos:'FW',age:21,stat:'Haiti sensation',rating:78,pac:82,sho:72,pas:72,dri:77,def_:35,phy:60},
  {name:'Angus Gunn',role:'',flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',club:'Norwich City',pos:'GK',age:29,stat:'Scotland No.1',rating:80,pac:53,sho:13,pas:60,dri:19,def_:82,phy:69},
  {name:'Craig Gordon',role:'',flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',club:'Hearts',pos:'GK',age:41,stat:'Scotland legend',rating:79,pac:52,sho:12,pas:59,dri:18,def_:81,phy:68},
  {name:'Andrew Robertson',role:'',flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',club:'Liverpool',pos:'DF',age:31,stat:'Scotland captain LB',rating:88,pac:84,sho:55,pas:78,dri:56,def_:85,phy:74},
  {name:'Grant Hanley',role:'',flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',club:'Norwich City',pos:'DF',age:33,stat:'Scotland CB',rating:78,pac:71,sho:35,pas:65,dri:48,def_:76,phy:76},
  {name:'Liam Cooper',role:'',flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',club:'Leeds Utd',pos:'DF',age:33,stat:'Scotland CB',rating:77,pac:70,sho:34,pas:64,dri:47,def_:75,phy:75},
  {name:'Scott McTominay',role:'',flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',club:'Napoli',pos:'MF',age:28,stat:'Scotland hero',rating:85,pac:76,sho:68,pas:78,dri:58,def_:80,phy:80},
  {name:'John McGinn',role:'',flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',club:'Aston Villa',pos:'MF',age:30,stat:'Scotland captain',rating:84,pac:76,sho:65,pas:78,dri:57,def_:79,phy:76},
  {name:'Ryan Christie',role:'',flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',club:'Bournemouth',pos:'MF',age:30,stat:'Scotland midfielder',rating:81,pac:74,sho:62,pas:76,dri:54,def_:75,phy:70},
  {name:'Che Adams',role:'CF',flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',club:'Torino',pos:'FW',age:29,stat:'Scotland striker',rating:82,pac:82,sho:82,pas:74,dri:78,def_:39,phy:68},
  {name:'Ryan Fraser',role:'RW',flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',club:'Southampton',pos:'FW',age:30,stat:'Scotland winger',rating:79,pac:80,sho:73,pas:72,dri:77,def_:36,phy:62},
  {name:'Matt Turner',role:'',flag:'🇺🇸',club:'Nottm Forest',pos:'GK',age:30,stat:'USA No.1 WC 2022',rating:82,pac:54,sho:13,pas:61,dri:20,def_:84,phy:70},
  {name:'Ethan Horvath',role:'',flag:'🇺🇸',club:'Luton Town',pos:'GK',age:29,stat:'USA backup GK',rating:78,pac:52,sho:12,pas:58,dri:18,def_:80,phy:68},
  {name:'Sergiño Dest',role:'',flag:'🇺🇸',club:'PSV',pos:'DF',age:24,stat:'USA right back',rating:84,pac:86,sho:52,pas:78,dri:52,def_:80,phy:70},
  {name:'Antonee Robinson',role:'',flag:'🇺🇸',club:'Fulham',pos:'DF',age:27,stat:'USA left back',rating:83,pac:84,sho:48,pas:74,dri:51,def_:80,phy:72},
  {name:'Chris Richards',role:'',flag:'🇺🇸',club:'Crystal Palace',pos:'DF',age:25,stat:'USA CB',rating:82,pac:76,sho:40,pas:70,dri:51,def_:80,phy:76},
  {name:'Tyler Adams',role:'',flag:'🇺🇸',club:'Bournemouth',pos:'MF',age:26,stat:'USA captain',rating:85,pac:80,sho:62,pas:80,dri:62,def_:82,phy:76},
  {name:'Weston McKennie',role:'',flag:'🇺🇸',club:'Juventus',pos:'MF',age:27,stat:'USA box-to-box',rating:84,pac:78,sho:64,pas:78,dri:58,def_:80,phy:78},
  {name:'Christian Pulisic',role:'RW',flag:'🇺🇸',club:'AC Milan',pos:'FW',age:27,stat:'USA best player',rating:88,pac:88,sho:82,pas:80,dri:86,def_:44,phy:70},
  {name:'Folarin Balogun',role:'CF',flag:'🇺🇸',club:'Monaco',pos:'FW',age:24,stat:'USA striker',rating:84,pac:83,sho:85,pas:76,dri:80,def_:40,phy:67},
  {name:'Josh Sargent',role:'CF',flag:'🇺🇸',club:'Norwich City',pos:'FW',age:25,stat:'USA No.9',rating:82,pac:80,sho:83,pas:74,dri:78,def_:40,phy:66},
  {name:'Antony Silva',role:'',flag:'🇵🇾',club:'Olimpia',pos:'GK',age:36,stat:'Paraguay veteran GK',rating:77,pac:51,sho:12,pas:57,dri:18,def_:79,phy:67},
  {name:'Fernando Fernandez',role:'',flag:'🇵🇾',club:'Libertad',pos:'GK',age:28,stat:'Paraguay backup',rating:74,pac:50,sho:11,pas:55,dri:17,def_:76,phy:65},
  {name:'Gustavo Gomez',role:'',flag:'🇵🇾',club:'Palmeiras',pos:'DF',age:31,stat:'Paraguay captain CB',rating:84,pac:74,sho:38,pas:70,dri:52,def_:82,phy:79},
  {name:'Junior Alonso',role:'',flag:'🇵🇾',club:'Atletico Mineiro',pos:'DF',age:31,stat:'Paraguay CB',rating:81,pac:72,sho:36,pas:67,dri:50,def_:79,phy:77},
  {name:'Robert Rojas',role:'',flag:'🇵🇾',club:'River Plate',pos:'DF',age:28,stat:'Paraguay right back',rating:79,pac:78,sho:40,pas:70,dri:49,def_:76,phy:72},
  {name:'Miguel Almiron',role:'',flag:'🇵🇾',club:'Newcastle',pos:'MF',age:31,stat:'Paraguay star',rating:85,pac:86,sho:68,pas:80,dri:56,def_:80,phy:72},
  {name:'Richard Sanchez',role:'',flag:'🇵🇾',club:'America',pos:'MF',age:28,stat:'Paraguay midfielder',rating:79,pac:74,sho:58,pas:76,dri:52,def_:72,phy:68},
  {name:'Antonio Sanabria',role:'CF',flag:'🇵🇾',club:'Torino',pos:'FW',age:29,stat:'Paraguay striker',rating:82,pac:80,sho:83,pas:73,dri:78,def_:40,phy:67},
  {name:'Julio Enciso',role:'RW',flag:'🇵🇾',club:'Brighton',pos:'FW',age:21,stat:'Paraguay rising star',rating:83,pac:84,sho:78,pas:76,dri:81,def_:38,phy:64},
  {name:'Carlos Gonzalez',role:'CF',flag:'🇵🇾',club:'LAFC',pos:'FW',age:30,stat:'Paraguay forward',rating:80,pac:79,sho:80,pas:71,dri:76,def_:39,phy:65},
  {name:'Mat Ryan',role:'',flag:'🇦🇺',club:'Real Sociedad',pos:'GK',age:33,stat:'Australia captain GK',rating:84,pac:54,sho:13,pas:62,dri:20,def_:85,phy:70},
  {name:'Danny Vukovic',role:'',flag:'🇦🇺',club:'Levante',pos:'GK',age:38,stat:'Australia backup',rating:78,pac:52,sho:12,pas:58,dri:18,def_:80,phy:68},
  {name:'Harry Souttar',role:'',flag:'🇦🇺',club:'Leicester City',pos:'DF',age:26,stat:'Australia CB',rating:83,pac:72,sho:38,pas:68,dri:52,def_:81,phy:79},
  {name:'Aziz Behich',role:'',flag:'🇦🇺',club:'Dundee Utd',pos:'DF',age:33,stat:'Australia left back',rating:78,pac:76,sho:38,pas:68,dri:48,def_:76,phy:70},
  {name:'Nathaniel Atkinson',role:'',flag:'🇦🇺',club:'Hearts',pos:'DF',age:25,stat:'Australia right back',rating:78,pac:78,sho:38,pas:68,dri:48,def_:76,phy:71},
  {name:'Jackson Irvine',role:'',flag:'🇦🇺',club:'St Pauli',pos:'MF',age:31,stat:'Australia captain',rating:82,pac:76,sho:62,pas:78,dri:55,def_:76,phy:74},
  {name:'Aaron Mooy',role:'',flag:'🇦🇺',club:'Celtic',pos:'MF',age:34,stat:'Australia legend',rating:83,pac:72,sho:65,pas:80,dri:57,def_:76,phy:70},
  {name:'Mitchell Duke',role:'CF',flag:'🇦🇺',club:'Fagiano Okayama',pos:'FW',age:33,stat:'Australia striker',rating:79,pac:78,sho:79,pas:70,dri:74,def_:39,phy:67},
  {name:'Martin Boyle',role:'RW',flag:'🇦🇺',club:'Panathinaikos',pos:'FW',age:31,stat:'Australia winger',rating:80,pac:83,sho:74,pas:72,dri:78,def_:37,phy:63},
  {name:'Craig Goodwin',role:'LW',flag:'🇦🇺',club:'Adelaide Utd',pos:'FW',age:32,stat:'Australia forward',rating:78,pac:80,sho:72,pas:70,dri:76,def_:36,phy:62},
  {name:'Ugurcan Cakir',role:'',flag:'🇹🇷',club:'Trabzonspor',pos:'GK',age:28,stat:'Turkey No.1',rating:82,pac:54,sho:13,pas:61,dri:20,def_:84,phy:70},
  {name:'Altay Bayindir',role:'',flag:'🇹🇷',club:'Man. Utd',pos:'GK',age:26,stat:'Turkey backup',rating:80,pac:53,sho:13,pas:60,dri:19,def_:82,phy:69},
  {name:'Merih Demiral',role:'',flag:'🇹🇷',club:'Al Qadsiah',pos:'DF',age:27,stat:'Turkey CB',rating:85,pac:76,sho:40,pas:72,dri:53,def_:83,phy:80},
  {name:'Samet Akaydin',role:'',flag:'🇹🇷',club:'Real Betis',pos:'DF',age:28,stat:'Turkey CB',rating:81,pac:73,sho:37,pas:68,dri:50,def_:79,phy:77},
  {name:'Ferdi Kadioglu',role:'',flag:'🇹🇷',club:'Brighton',pos:'DF',age:25,stat:'Turkey left back',rating:84,pac:82,sho:48,pas:76,dri:52,def_:80,phy:72},
  {name:'Hakan Calhanoglu',role:'',flag:'🇹🇷',club:'Inter Milan',pos:'MF',age:31,stat:'Turkey captain',rating:88,pac:74,sho:70,pas:86,dri:60,def_:80,phy:72},
  {name:'Salih Ozcan',role:'',flag:'🇹🇷',club:'Borussia Dortmund',pos:'MF',age:26,stat:'Turkey midfielder',rating:81,pac:76,sho:60,pas:78,dri:56,def_:76,phy:72},
  {name:'Arda Guler',role:'RW',flag:'🇹🇷',club:'Real Madrid',pos:'FW',age:20,stat:'Turkey golden boy',rating:88,pac:84,sho:82,pas:84,dri:84,def_:40,phy:65},
  {name:'Baris Alper Yilmaz',role:'LW',flag:'🇹🇷',club:'Galatasaray',pos:'FW',age:25,stat:'Turkey winger',rating:84,pac:87,sho:78,pas:76,dri:82,def_:38,phy:64},
  {name:'Kerem Akturkoglu',role:'RW',flag:'🇹🇷',club:'Galatasaray',pos:'FW',age:26,stat:'Turkey forward',rating:85,pac:88,sho:79,pas:78,dri:83,def_:39,phy:65},
  {name:'Manuel Neuer',role:'',flag:'🇩🇪',club:'Bayern Munich',pos:'GK',age:39,stat:'Germany legend',rating:90,pac:57,sho:14,pas:65,dri:21,def_:90,phy:73},
  {name:'Marc-Andre ter Stegen',role:'',flag:'🇩🇪',club:'FC Barcelona',pos:'GK',age:33,stat:'Germany backup',rating:91,pac:56,sho:14,pas:65,dri:21,def_:91,phy:73},
  {name:'Antonio Rudiger',role:'',flag:'🇩🇪',club:'Real Madrid',pos:'DF',age:32,stat:'Germany CB star',rating:88,pac:80,sho:40,pas:72,dri:56,def_:87,phy:82},
  {name:'Joshua Kimmich',role:'',flag:'🇩🇪',club:'Bayern Munich',pos:'DF',age:30,stat:'Germany RB captain',rating:90,pac:84,sho:68,pas:86,dri:62,def_:87,phy:76},
  {name:'David Raum',role:'',flag:'🇩🇪',club:'RB Leipzig',pos:'DF',age:27,stat:'Germany left back',rating:84,pac:82,sho:48,pas:76,dri:52,def_:80,phy:72},
  {name:'Toni Kroos',role:'',flag:'🇩🇪',club:'Real Madrid',pos:'MF',age:35,stat:'Germany UCL legend',rating:90,pac:64,sho:72,pas:92,dri:62,def_:80,phy:70},
  {name:'Leon Goretzka',role:'',flag:'🇩🇪',club:'Bayern Munich',pos:'MF',age:30,stat:'Germany box-to-box',rating:86,pac:78,sho:68,pas:80,dri:60,def_:84,phy:80},
  {name:'Florian Wirtz',role:'RW',flag:'🇩🇪',club:'Bayer Leverkusen',pos:'FW',age:22,stat:'Germany golden boy',rating:92,pac:86,sho:84,pas:88,dri:88,def_:48,phy:70},
  {name:'Kai Havertz',role:'CF',flag:'🇩🇪',club:'Arsenal',pos:'FW',age:26,stat:'Germany striker',rating:87,pac:82,sho:84,pas:80,dri:82,def_:52,phy:74},
  {name:'Jamal Musiala',role:'LW',flag:'🇩🇪',club:'Bayern Munich',pos:'FW',age:22,stat:'Germany dribbler',rating:92,pac:88,sho:84,pas:86,dri:88,def_:46,phy:70},
  {name:'Eloy Room',role:'',flag:'🇨🇼',club:'Columbus Crew',pos:'GK',age:33,stat:'Curacao No.1',rating:77,pac:52,sho:12,pas:57,dri:18,def_:79,phy:67},
  {name:'Jasper Cillessen',role:'',flag:'🇨🇼',club:'NEC Nijmegen',pos:'GK',age:36,stat:'Curacao veteran',rating:81,pac:54,sho:13,pas:61,dri:20,def_:83,phy:70},
  {name:'Ethan Cojoro',role:'',flag:'🇨🇼',club:'Curacao national',pos:'DF',age:28,stat:'Curacao CB',rating:72,pac:70,sho:32,pas:62,dri:45,def_:70,phy:72},
  {name:'Rangelo Janga',role:'LW',flag:'🇨🇼',club:'Curacao national',pos:'FW',age:31,stat:'Curacao winger',rating:76,pac:80,sho:70,pas:68,dri:74,def_:36,phy:62},
  {name:'Cuco Martina',role:'',flag:'🇨🇼',club:'Twente',pos:'DF',age:35,stat:'Curacao veteran RB',rating:74,pac:74,sho:36,pas:64,dri:46,def_:72,phy:68},
  {name:'Leandro Bacuna',role:'',flag:'🇨🇼',club:'Birmingham',pos:'MF',age:33,stat:'Curacao captain',rating:78,pac:74,sho:58,pas:74,dri:52,def_:70,phy:70},
  {name:'Juninho Bacuna',role:'',flag:'🇨🇼',club:'Middlesbrough',pos:'MF',age:27,stat:'Curacao midfielder',rating:78,pac:75,sho:58,pas:74,dri:52,def_:72,phy:68},
  {name:'Giliano Wijnaldum',role:'CF',flag:'🇨🇼',club:'Curacao national',pos:'FW',age:29,stat:'Curacao forward',rating:76,pac:78,sho:76,pas:68,dri:73,def_:36,phy:64},
  {name:'Myron Boadu',role:'CF',flag:'🇨🇼',club:'AS Monaco',pos:'FW',age:23,stat:'Curacao striker',rating:80,pac:82,sho:80,pas:72,dri:76,def_:38,phy:65},
  {name:'Cedric van der Gut',role:'',flag:'🇨🇼',club:'Curacao national',pos:'DF',age:26,stat:'Curacao defender',rating:71,pac:70,sho:31,pas:61,dri:44,def_:69,phy:71},
  {name:'Yahia Fofana',role:'',flag:'🇨🇮',club:'Leicester City',pos:'GK',age:31,stat:'CIV AFCON hero 2024',rating:84,pac:54,sho:13,pas:62,dri:20,def_:85,phy:70},
  {name:'Badra Sangare',role:'',flag:'🇨🇮',club:'Ivory Coast national',pos:'GK',age:28,stat:'CIV backup',rating:76,pac:51,sho:12,pas:56,dri:18,def_:78,phy:66},
  {name:'Serge Aurier',role:'',flag:'🇨🇮',club:'Villarreal',pos:'DF',age:32,stat:'CIV right back',rating:83,pac:84,sho:52,pas:74,dri:50,def_:80,phy:74},
  {name:'Willy Boly',role:'',flag:'🇨🇮',club:'Nottm Forest',pos:'DF',age:33,stat:'CIV CB',rating:82,pac:72,sho:36,pas:68,dri:50,def_:80,phy:78},
  {name:'Odilon Kossounou',role:'',flag:'🇨🇮',club:'Bayer Leverkusen',pos:'DF',age:24,stat:'CIV CB',rating:83,pac:76,sho:38,pas:70,dri:52,def_:81,phy:78},
  {name:'Franck Kessie',role:'',flag:'🇨🇮',club:'Al Ahli',pos:'MF',age:28,stat:'CIV powerhouse',rating:87,pac:78,sho:65,pas:78,dri:60,def_:84,phy:82},
  {name:'Jean-Michael Seri',role:'',flag:'🇨🇮',club:'Trabzonspor',pos:'MF',age:32,stat:'CIV midfielder',rating:81,pac:74,sho:60,pas:78,dri:54,def_:76,phy:70},
  {name:'Nicolas Pepe',role:'RW',flag:'🇨🇮',club:'Trabzonspor',pos:'FW',age:29,stat:'CIV pacey winger',rating:84,pac:88,sho:78,pas:76,dri:82,def_:38,phy:64},
  {name:'Sebastien Haller',role:'CF',flag:'🇨🇮',club:'Borussia Dortmund',pos:'FW',age:30,stat:'CIV AFCON hero',rating:86,pac:80,sho:86,pas:74,dri:80,def_:40,phy:70},
  {name:'Simon Adingra',role:'LW',flag:'🇨🇮',club:'Brighton',pos:'FW',age:23,stat:'CIV AFCON 2024 winner',rating:84,pac:87,sho:78,pas:76,dri:81,def_:38,phy:63},
  {name:'Hernan Galindez',role:'',flag:'🇪🇨',club:'Aucas',pos:'GK',age:36,stat:'Ecuador veteran',rating:78,pac:52,sho:12,pas:58,dri:18,def_:80,phy:68},
  {name:'Alexander Dominguez',role:'',flag:'🇪🇨',club:'LDU Quito',pos:'GK',age:39,stat:'Ecuador legend',rating:76,pac:51,sho:12,pas:56,dri:17,def_:78,phy:66},
  {name:'Piero Hincapie',role:'',flag:'🇪🇨',club:'Bayer Leverkusen',pos:'DF',age:23,stat:'Ecuador rising CB',rating:85,pac:78,sho:40,pas:73,dri:52,def_:82,phy:76},
  {name:'William Pacho',role:'',flag:'🇪🇨',club:'PSG',pos:'DF',age:23,stat:'Ecuador CB star',rating:85,pac:76,sho:40,pas:72,dri:52,def_:83,phy:77},
  {name:'Angelo Preciado',role:'',flag:'🇪🇨',club:'Genk',pos:'DF',age:25,stat:'Ecuador right back',rating:80,pac:80,sho:42,pas:72,dri:50,def_:77,phy:72},
  {name:'Moises Caicedo',role:'',flag:'🇪🇨',club:'Chelsea',pos:'MF',age:23,stat:'Ecuador midfielder',rating:89,pac:80,sho:65,pas:82,dri:65,def_:85,phy:78},
  {name:'Carlos Gruezo',role:'',flag:'🇪🇨',club:'Augsburg',pos:'MF',age:30,stat:'Ecuador anchor',rating:80,pac:72,sho:58,pas:76,dri:58,def_:74,phy:72},
  {name:'Enner Valencia',role:'CF',flag:'🇪🇨',club:'Fenerbahce',pos:'FW',age:35,stat:'Ecuador all-time top scorer',rating:84,pac:82,sho:85,pas:74,dri:79,def_:40,phy:68},
  {name:'Michael Estrada',role:'CF',flag:'🇪🇨',club:'Cruz Azul',pos:'FW',age:29,stat:'Ecuador striker',rating:80,pac:80,sho:81,pas:71,dri:76,def_:39,phy:66},
  {name:'Jeremy Sarmiento',role:'LW',flag:'🇪🇨',club:'Brighton',pos:'FW',age:23,stat:'Ecuador winger',rating:81,pac:84,sho:75,pas:74,dri:79,def_:37,phy:63},
  {name:'Mark Flekken',role:'',flag:'🇳🇱',club:'Brentford',pos:'GK',age:31,stat:'Netherlands No.1',rating:84,pac:54,sho:13,pas:62,dri:20,def_:85,phy:70},
  {name:'Bart Verbruggen',role:'',flag:'🇳🇱',club:'Brighton',pos:'GK',age:22,stat:'Netherlands future',rating:82,pac:53,sho:13,pas:61,dri:19,def_:83,phy:69},
  {name:'Virgil van Dijk',role:'',flag:'🇳🇱',club:'Liverpool',pos:'DF',age:33,stat:'Netherlands captain',rating:92,pac:80,sho:48,pas:80,dri:60,def_:91,phy:86},
  {name:'Nathan Ake',role:'',flag:'🇳🇱',club:'Man. City',pos:'DF',age:30,stat:'Netherlands CB',rating:87,pac:78,sho:42,pas:74,dri:54,def_:85,phy:80},
  {name:'Denzel Dumfries',role:'',flag:'🇳🇱',club:'Inter Milan',pos:'DF',age:29,stat:'Netherlands right back',rating:87,pac:88,sho:60,pas:78,dri:54,def_:84,phy:78},
  {name:'Frenkie de Jong',role:'',flag:'🇳🇱',club:'FC Barcelona',pos:'MF',age:28,stat:'Netherlands deep mid',rating:89,pac:80,sho:66,pas:88,dri:64,def_:84,phy:74},
  {name:'Tijjani Reijnders',role:'',flag:'🇳🇱',club:'AC Milan',pos:'MF',age:27,stat:'Netherlands box-to-box',rating:86,pac:80,sho:65,pas:82,dri:58,def_:82,phy:74},
  {name:'Cody Gakpo',role:'LW',flag:'🇳🇱',club:'Liverpool',pos:'FW',age:26,stat:'Netherlands WC 2022',rating:86,pac:87,sho:81,pas:76,dri:85,def_:40,phy:64},
  {name:'Donyell Malen',role:'RW',flag:'🇳🇱',club:'Aston Villa',pos:'FW',age:26,stat:'Netherlands winger',rating:84,pac:86,sho:79,pas:75,dri:82,def_:39,phy:62},
  {name:'Memphis Depay',role:'LW',flag:'🇳🇱',club:'Atletico Madrid',pos:'FW',age:31,stat:'Netherlands top scorer',rating:84,pac:85,sho:79,pas:74,dri:82,def_:39,phy:62},
  {name:'Shuichi Gonda',role:'',flag:'🇯🇵',club:'Shimizu S-Pulse',pos:'GK',age:34,stat:'Japan No.1',rating:80,pac:53,sho:13,pas:60,dri:19,def_:82,phy:69},
  {name:'Zion Suzuki',role:'',flag:'🇯🇵',club:'Sint-Truiden',pos:'GK',age:22,stat:'Japan future GK',rating:78,pac:52,sho:12,pas:58,dri:18,def_:80,phy:68},
  {name:'Takehiro Tomiyasu',role:'',flag:'🇯🇵',club:'Arsenal',pos:'DF',age:26,stat:'Japan versatile DF',rating:86,pac:82,sho:48,pas:76,dri:54,def_:83,phy:74},
  {name:'Maya Yoshida',role:'',flag:'🇯🇵',club:'Como',pos:'DF',age:36,stat:'Japan veteran captain',rating:80,pac:70,sho:35,pas:68,dri:50,def_:78,phy:74},
  {name:'Ko Itakura',role:'',flag:'🇯🇵',club:'Borussia Monchengladbach',pos:'DF',age:28,stat:'Japan CB',rating:82,pac:74,sho:38,pas:70,dri:51,def_:80,phy:76},
  {name:'Wataru Endo',role:'',flag:'🇯🇵',club:'Liverpool',pos:'MF',age:31,stat:'Japan anchor',rating:84,pac:72,sho:60,pas:78,dri:62,def_:78,phy:74},
  {name:'Ao Tanaka',role:'',flag:'🇯🇵',club:'Borussia Dortmund',pos:'MF',age:26,stat:'Japan versatile mid',rating:83,pac:78,sho:62,pas:78,dri:58,def_:78,phy:72},
  {name:'Kaoru Mitoma',role:'LW',flag:'🇯🇵',club:'Brighton',pos:'FW',age:28,stat:'Japan best player',rating:85,pac:87,sho:79,pas:80,dri:84,def_:38,phy:63},
  {name:'Takumi Minamino',role:'CF',flag:'🇯🇵',club:'Monaco',pos:'FW',age:30,stat:'Japan forward',rating:83,pac:85,sho:78,pas:76,dri:82,def_:40,phy:65},
  {name:'Junya Ito',role:'RW',flag:'🇯🇵',club:'Reims',pos:'FW',age:32,stat:'Japan winger',rating:82,pac:84,sho:76,pas:74,dri:80,def_:38,phy:62},
  {name:'Robin Olsen',role:'',flag:'🇸🇪',club:'Sheffield Utd',pos:'GK',age:34,stat:'Sweden No.1',rating:82,pac:53,sho:13,pas:61,dri:20,def_:84,phy:70},
  {name:'Karl-Johan Johnsson',role:'',flag:'🇸🇪',club:'Guingamp',pos:'GK',age:33,stat:'Sweden backup',rating:78,pac:52,sho:12,pas:58,dri:18,def_:80,phy:68},
  {name:'Victor Lindelof',role:'',flag:'🇸🇪',club:'Man. Utd',pos:'DF',age:30,stat:'Sweden CB',rating:85,pac:76,sho:40,pas:73,dri:52,def_:83,phy:78},
  {name:'Isak Hien',role:'',flag:'🇸🇪',club:'Atalanta',pos:'DF',age:25,stat:'Sweden CB',rating:84,pac:76,sho:39,pas:70,dri:52,def_:82,phy:79},
  {name:'Emil Krafth',role:'',flag:'🇸🇪',club:'Newcastle',pos:'DF',age:30,stat:'Sweden right back',rating:79,pac:78,sho:40,pas:70,dri:49,def_:76,phy:72},
  {name:'Albin Ekdal',role:'',flag:'🇸🇪',club:'IFK Goteborg',pos:'MF',age:35,stat:'Sweden veteran mid',rating:78,pac:68,sho:55,pas:76,dri:56,def_:70,phy:68},
  {name:'Mattias Svanberg',role:'',flag:'🇸🇪',club:'Wolfsburg',pos:'MF',age:27,stat:'Sweden midfielder',rating:81,pac:76,sho:60,pas:78,dri:55,def_:75,phy:70},
  {name:'Alexander Isak',role:'CF',flag:'🇸🇪',club:'Newcastle',pos:'FW',age:26,stat:'Sweden top scorer',rating:90,pac:90,sho:87,pas:82,dri:87,def_:42,phy:72},
  {name:'Dejan Kulusevski',role:'RW',flag:'🇸🇪',club:'Tottenham',pos:'FW',age:25,stat:'Sweden winger',rating:87,pac:86,sho:80,pas:80,dri:84,def_:42,phy:68},
  {name:'Emil Forsberg',role:'LW',flag:'🇸🇪',club:'RB Leipzig',pos:'FW',age:33,stat:'Sweden legend',rating:83,pac:82,sho:76,pas:78,dri:80,def_:40,phy:66},
  {name:'Aymen Dahmen',role:'',flag:'🇹🇳',club:'Montpellier',pos:'GK',age:27,stat:'Tunisia No.1',rating:79,pac:52,sho:12,pas:59,dri:19,def_:81,phy:68},
  {name:'Bechir Ben Said',role:'',flag:'🇹🇳',club:'Club Africain',pos:'GK',age:32,stat:'Tunisia backup',rating:74,pac:50,sho:11,pas:55,dri:17,def_:76,phy:65},
  {name:'Dylan Bronn',role:'',flag:'🇹🇳',club:'SPAL',pos:'DF',age:29,stat:'Tunisia CB',rating:78,pac:72,sho:36,pas:66,dri:48,def_:76,phy:74},
  {name:'Montassar Talbi',role:'',flag:'🇹🇳',club:'Lorient',pos:'DF',age:26,stat:'Tunisia CB',rating:79,pac:73,sho:37,pas:67,dri:49,def_:77,phy:75},
  {name:'Ali Maaloul',role:'',flag:'🇹🇳',club:'Al Ahly',pos:'DF',age:33,stat:'Tunisia left back',rating:80,pac:76,sho:40,pas:70,dri:50,def_:77,phy:70},
  {name:'Ellyes Skhiri',role:'',flag:'🇹🇳',club:'Eintracht Frankfurt',pos:'MF',age:29,stat:'Tunisia captain',rating:84,pac:74,sho:62,pas:78,dri:58,def_:78,phy:74},
  {name:'Aissa Laidouni',role:'',flag:'🇹🇳',club:'Ferencvaros',pos:'MF',age:28,stat:'Tunisia midfielder',rating:80,pac:74,sho:58,pas:76,dri:54,def_:74,phy:70},
  {name:'Youssef Msakni',role:'LW',flag:'🇹🇳',club:'Al Arabi',pos:'FW',age:34,stat:'Tunisia legend',rating:82,pac:80,sho:75,pas:76,dri:78,def_:38,phy:62},
  {name:'Wahbi Khazri',role:'CF',flag:'🇹🇳',club:'Montpellier',pos:'FW',age:34,stat:'Tunisia top scorer',rating:82,pac:78,sho:80,pas:74,dri:76,def_:39,phy:65},
  {name:'Seifeddine Jaziri',role:'CF',flag:'🇹🇳',club:'Zamalek',pos:'FW',age:33,stat:'Tunisia striker',rating:79,pac:78,sho:79,pas:70,dri:74,def_:38,phy:66},
  {name:'Koen Casteels',role:'',flag:'🇧🇪',club:'Al Qadsiah',pos:'GK',age:32,stat:'Belgium No.1',rating:86,pac:55,sho:14,pas:63,dri:21,def_:87,phy:71},
  {name:'Simon Mignolet',role:'',flag:'🇧🇪',club:'Club Brugge',pos:'GK',age:36,stat:'Belgium veteran',rating:84,pac:54,sho:13,pas:62,dri:20,def_:85,phy:70},
  {name:'Jan Vertonghen',role:'',flag:'🇧🇪',club:'Anderlecht',pos:'DF',age:38,stat:'Belgium captain legend',rating:84,pac:72,sho:38,pas:72,dri:54,def_:82,phy:76},
  {name:'Toby Alderweireld',role:'',flag:'🇧🇪',club:'Royal Antwerp',pos:'DF',age:36,stat:'Belgium CB legend',rating:83,pac:70,sho:36,pas:70,dri:53,def_:81,phy:75},
  {name:'Timothy Castagne',role:'',flag:'🇧🇪',club:'Fulham',pos:'DF',age:29,stat:'Belgium right back',rating:83,pac:82,sho:48,pas:74,dri:52,def_:80,phy:72},
  {name:'Kevin De Bruyne',role:'',flag:'🇧🇪',club:'Man. City',pos:'MF',age:34,stat:'Belgium best player ever',rating:94,pac:76,sho:82,pas:96,dri:64,def_:82,phy:74},
  {name:'Axel Witsel',role:'',flag:'🇧🇪',club:'Atletico Madrid',pos:'MF',age:36,stat:'Belgium anchor',rating:82,pac:70,sho:58,pas:78,dri:62,def_:76,phy:74},
  {name:'Romelu Lukaku',role:'CF',flag:'🇧🇪',club:'Napoli',pos:'FW',age:32,stat:'Belgium top scorer',rating:86,pac:83,sho:87,pas:74,dri:80,def_:40,phy:68},
  {name:'Dodi Lukebakio',role:'RW',flag:'🇧🇪',club:'Sevilla',pos:'FW',age:27,stat:'Belgium winger',rating:83,pac:86,sho:77,pas:75,dri:80,def_:38,phy:63},
  {name:'Leandro Trossard',role:'LW',flag:'🇧🇪',club:'Arsenal',pos:'FW',age:30,stat:'Belgium versatile',rating:85,pac:84,sho:79,pas:78,dri:82,def_:40,phy:66},
  {name:'Mohamed El Shenawy',role:'',flag:'🇪🇬',club:'Al Ahly',pos:'GK',age:36,stat:'Egypt veteran GK',rating:81,pac:53,sho:13,pas:61,dri:20,def_:83,phy:69},
  {name:'Ahmed El Shenawy',role:'',flag:'🇪🇬',club:'Zamalek',pos:'GK',age:30,stat:'Egypt backup',rating:77,pac:51,sho:12,pas:57,dri:18,def_:79,phy:67},
  {name:'Ahmed Hegazy',role:'',flag:'🇪🇬',club:'Al Ittihad',pos:'DF',age:33,stat:'Egypt CB captain',rating:82,pac:72,sho:36,pas:68,dri:51,def_:80,phy:78},
  {name:'Mahmoud Hamdi',role:'',flag:'🇪🇬',club:'Zamalek',pos:'DF',age:29,stat:'Egypt left back',rating:77,pac:74,sho:36,pas:67,dri:47,def_:75,phy:70},
  {name:'Ahmed Fatouh',role:'',flag:'🇪🇬',club:'Al Masry',pos:'DF',age:28,stat:'Egypt right back',rating:76,pac:76,sho:36,pas:66,dri:46,def_:74,phy:70},
  {name:'Tarek Hamed',role:'',flag:'🇪🇬',club:'Al Zamalek',pos:'MF',age:34,stat:'Egypt anchor',rating:79,pac:70,sho:55,pas:74,dri:58,def_:72,phy:72},
  {name:'Omar Marmoush',role:'CF',flag:'🇪🇬',club:'Man. City',pos:'FW',age:26,stat:'Egypt rising star',rating:87,pac:86,sho:82,pas:80,dri:82,def_:42,phy:68},
  {name:'Mohamed Salah',role:'RW',flag:'🇪🇬',club:'Liverpool',pos:'FW',age:33,stat:'Egypt legend 200 goals',rating:91,pac:90,sho:85,pas:80,dri:89,def_:41,phy:68},
  {name:'Mustafa Mohamed',role:'CF',flag:'🇪🇬',club:'Galatasaray',pos:'FW',age:27,stat:'Egypt striker',rating:82,pac:79,sho:83,pas:72,dri:77,def_:39,phy:67},
  {name:'Amr El Sulaya',role:'',flag:'🇪🇬',club:'Smouha',pos:'MF',age:28,stat:'Egypt midfielder',rating:76,pac:72,sho:55,pas:73,dri:52,def_:70,phy:66},
  {name:'Hossein Hosseini',role:'',flag:'🇮🇷',club:'Esteghlal',pos:'GK',age:32,stat:'Iran No.1',rating:79,pac:52,sho:12,pas:58,dri:19,def_:81,phy:68},
  {name:'Alireza Beiranvand',role:'',flag:'🇮🇷',club:'Antwerp',pos:'GK',age:32,stat:'Iran experienced GK',rating:80,pac:53,sho:13,pas:59,dri:19,def_:82,phy:69},
  {name:'Majid Hosseini',role:'',flag:'🇮🇷',club:'Kayserispor',pos:'DF',age:26,stat:'Iran CB',rating:79,pac:74,sho:37,pas:68,dri:49,def_:77,phy:75},
  {name:'Milad Mohammadi',role:'',flag:'🇮🇷',club:'Akhmat Grozny',pos:'DF',age:31,stat:'Iran left back',rating:77,pac:75,sho:37,pas:67,dri:47,def_:75,phy:70},
  {name:'Sadegh Moharrami',role:'',flag:'🇮🇷',club:'Dinamo Zagreb',pos:'DF',age:29,stat:'Iran right back',rating:78,pac:77,sho:38,pas:68,dri:48,def_:76,phy:71},
  {name:'Saeid Ezatolahi',role:'',flag:'🇮🇷',club:'Cercle Brugge',pos:'MF',age:28,stat:'Iran anchor',rating:80,pac:72,sho:58,pas:76,dri:56,def_:72,phy:70},
  {name:'Ali Gholizadeh',role:'LW',flag:'🇮🇷',club:'Al Qadsiah',pos:'FW',age:28,stat:'Iran winger',rating:82,pac:84,sho:75,pas:75,dri:79,def_:38,phy:62},
  {name:'Mehdi Taremi',role:'CF',flag:'🇮🇷',club:'Inter Milan',pos:'FW',age:33,stat:'Iran best player',rating:87,pac:82,sho:86,pas:78,dri:80,def_:42,phy:70},
  {name:'Sardar Azmoun',role:'CF',flag:'🇮🇷',club:'Bayer Leverkusen',pos:'FW',age:30,stat:'Iran top scorer',rating:86,pac:83,sho:85,pas:78,dri:80,def_:40,phy:70},
  {name:'Alireza Jahanbakhsh',role:'RW',flag:'🇮🇷',club:'Feyenoord',pos:'FW',age:31,stat:'Iran versatile FW',rating:83,pac:84,sho:76,pas:76,dri:80,def_:38,phy:63},
  {name:'Oliver Sail',role:'',flag:'🇳🇿',club:'Karmiotissa',pos:'GK',age:30,stat:'NZ No.1',rating:74,pac:51,sho:11,pas:55,dri:17,def_:76,phy:65},
  {name:'Stefan Marinovic',role:'',flag:'🇳🇿',club:'Pafos',pos:'GK',age:35,stat:'NZ veteran GK',rating:73,pac:50,sho:11,pas:54,dri:17,def_:75,phy:64},
  {name:'Michael Boxall',role:'',flag:'🇳🇿',club:'Minnesota United',pos:'DF',age:36,stat:'NZ captain CB',rating:76,pac:70,sho:33,pas:63,dri:47,def_:74,phy:72},
  {name:'Winston Reid',role:'',flag:'🇳🇿',club:'Brentford',pos:'DF',age:36,stat:'NZ veteran CB',rating:75,pac:70,sho:32,pas:62,dri:46,def_:73,phy:71},
  {name:'Liberato Cacace',role:'',flag:'🇳🇿',club:'Empoli',pos:'DF',age:24,stat:'NZ left back',rating:78,pac:78,sho:39,pas:69,dri:48,def_:75,phy:70},
  {name:'Clayton Lewis',role:'',flag:'🇳🇿',club:'HB Koge',pos:'MF',age:26,stat:'NZ midfielder',rating:73,pac:72,sho:54,pas:71,dri:49,def_:68,phy:66},
  {name:'Joe Bell',role:'',flag:'🇳🇿',club:'Middlesbrough',pos:'MF',age:25,stat:'NZ box-to-box',rating:74,pac:73,sho:55,pas:71,dri:50,def_:70,phy:68},
  {name:'Chris Wood',role:'CF',flag:'🇳🇿',club:'Nottm Forest',pos:'FW',age:33,stat:'NZ all-time top scorer',rating:83,pac:79,sho:84,pas:72,dri:77,def_:40,phy:70},
  {name:'Myer Bevan',role:'RW',flag:'🇳🇿',club:'Hammarby',pos:'FW',age:24,stat:'NZ winger',rating:74,pac:77,sho:68,pas:68,dri:72,def_:35,phy:60},
  {name:'Matt Garbett',role:'',flag:'🇳🇿',club:'Odense',pos:'MF',age:24,stat:'NZ rising mid',rating:72,pac:70,sho:53,pas:70,dri:48,def_:66,phy:64},
  {name:'Unai Simon',role:'',flag:'🇪🇸',club:'Athletic Bilbao',pos:'GK',age:28,stat:'Spain No.1 Euro 2024',rating:88,pac:55,sho:14,pas:64,dri:21,def_:88,phy:72},
  {name:'David Raya',role:'',flag:'🇪🇸',club:'Arsenal',pos:'GK',age:30,stat:'Spain backup',rating:87,pac:55,sho:14,pas:63,dri:21,def_:87,phy:71},
  {name:'Aymeric Laporte',role:'',flag:'🇪🇸',club:'Al Nassr',pos:'DF',age:31,stat:'Spain CB',rating:87,pac:76,sho:42,pas:76,dri:55,def_:85,phy:78},
  {name:'Daniel Carvajal',role:'',flag:'🇪🇸',club:'Real Madrid',pos:'DF',age:33,stat:'Spain right back',rating:88,pac:84,sho:52,pas:80,dri:56,def_:85,phy:74},
  {name:'Marc Cucurella',role:'',flag:'🇪🇸',club:'Chelsea',pos:'DF',age:26,stat:'Spain left back',rating:84,pac:80,sho:46,pas:74,dri:52,def_:81,phy:72},
  {name:'Rodri',role:'',flag:'🇪🇸',club:'Man. City',pos:'MF',age:29,stat:'Spain Ballon dOr 2024',rating:93,pac:72,sho:72,pas:88,dri:72,def_:88,phy:80},
  {name:'Pedri',role:'',flag:'🇪🇸',club:'FC Barcelona',pos:'MF',age:23,stat:'Spain golden boy',rating:91,pac:80,sho:72,pas:90,dri:68,def_:84,phy:72},
  {name:'Lamine Yamal',role:'RW',flag:'🇪🇸',club:'FC Barcelona',pos:'FW',age:18,stat:'Spain Euro 2024 star',rating:92,pac:93,sho:87,pas:82,dri:91,def_:43,phy:70},
  {name:'Nico Williams',role:'LW',flag:'🇪🇸',club:'Athletic Bilbao',pos:'FW',age:22,stat:'Spain Euro 2024 winner',rating:88,pac:89,sho:83,pas:78,dri:86,def_:40,phy:66},
  {name:'Alvaro Morata',role:'CF',flag:'🇪🇸',club:'AC Milan',pos:'FW',age:32,stat:'Spain captain Euro 2024',rating:84,pac:80,sho:84,pas:76,dri:78,def_:42,phy:70},
  {name:'Vozinha',role:'',flag:'🇨🇻',club:'Belenenses',pos:'GK',age:35,stat:'Cape Verde GK',rating:73,pac:50,sho:11,pas:54,dri:17,def_:75,phy:64},
  {name:'Josimar Dias',role:'',flag:'🇨🇻',club:'Cape Verde national',pos:'GK',age:27,stat:'CV backup',rating:68,pac:48,sho:10,pas:51,dri:16,def_:70,phy:62},
  {name:'Roberto Lopes',role:'',flag:'🇨🇻',club:'Shamrock Rovers',pos:'DF',age:30,stat:'CV CB',rating:75,pac:71,sho:34,pas:63,dri:46,def_:73,phy:72},
  {name:'Dylan Tavares',role:'',flag:'🇨🇻',club:'Benfica',pos:'DF',age:23,stat:'CV right back',rating:78,pac:78,sho:39,pas:69,dri:48,def_:75,phy:70},
  {name:'Stopira',role:'',flag:'🇨🇻',club:'Cape Verde national',pos:'DF',age:36,stat:'CV veteran DF',rating:72,pac:70,sho:32,pas:62,dri:45,def_:70,phy:69},
  {name:'Bebeto Brito',role:'',flag:'🇨🇻',club:'Cape Verde national',pos:'MF',age:29,stat:'CV captain',rating:74,pac:72,sho:54,pas:71,dri:50,def_:68,phy:67},
  {name:'Kenny Rocha',role:'',flag:'🇨🇻',club:'Vitoria Guimaraes',pos:'MF',age:31,stat:'CV midfielder',rating:75,pac:72,sho:55,pas:73,dri:51,def_:70,phy:68},
  {name:'Julio Tavares',role:'CF',flag:'🇨🇻',club:'Dijon',pos:'FW',age:34,stat:'CV best striker',rating:78,pac:78,sho:75,pas:70,dri:73,def_:38,phy:64},
  {name:'Ryan Mendes',role:'LW',flag:'🇨🇻',club:'Al Arabi',pos:'FW',age:33,stat:'CV winger',rating:79,pac:80,sho:73,pas:72,dri:75,def_:37,phy:62},
  {name:'Garry Rodrigues',role:'RW',flag:'🇨🇻',club:'Galatasaray',pos:'FW',age:32,stat:'CV right winger',rating:80,pac:82,sho:74,pas:73,dri:77,def_:37,phy:62},
  {name:'Mohammed Al-Owais',role:'',flag:'🇸🇦',club:'Al Hilal',pos:'GK',age:32,stat:'Saudi No.1 vs Argentina',rating:83,pac:54,sho:13,pas:62,dri:20,def_:84,phy:70},
  {name:'Fawaz Al-Qarni',role:'',flag:'🇸🇦',club:'Al Shabab',pos:'GK',age:28,stat:'Saudi backup',rating:77,pac:51,sho:12,pas:57,dri:18,def_:79,phy:67},
  {name:'Ali Al-Bulaihi',role:'',flag:'🇸🇦',club:'Al Hilal',pos:'DF',age:34,stat:'Saudi captain CB',rating:80,pac:72,sho:35,pas:67,dri:50,def_:78,phy:76},
  {name:'Hassan Tambakti',role:'',flag:'🇸🇦',club:'Al Hilal',pos:'DF',age:25,stat:'Saudi CB',rating:79,pac:73,sho:36,pas:66,dri:49,def_:77,phy:75},
  {name:'Sultan Al-Ghanam',role:'',flag:'🇸🇦',club:'Al Nassr',pos:'DF',age:26,stat:'Saudi right back',rating:78,pac:78,sho:39,pas:69,dri:48,def_:75,phy:71},
  {name:'Salman Al-Faraj',role:'',flag:'🇸🇦',club:'Al Hilal',pos:'MF',age:34,stat:'Saudi captain',rating:80,pac:70,sho:60,pas:78,dri:56,def_:74,phy:70},
  {name:'Mohammed Kanno',role:'',flag:'🇸🇦',club:'Al Hilal',pos:'MF',age:28,stat:'Saudi midfielder',rating:79,pac:72,sho:58,pas:75,dri:54,def_:72,phy:68},
  {name:'Salem Al-Dawsari',role:'LW',flag:'🇸🇦',club:'Al Hilal',pos:'FW',age:32,stat:'Saudi WC 2022 vs Argentina',rating:84,pac:84,sho:78,pas:74,dri:80,def_:38,phy:63},
  {name:'Firas Al-Buraikan',role:'CF',flag:'🇸🇦',club:'Al Fateh',pos:'FW',age:24,stat:'Saudi striker',rating:80,pac:79,sho:80,pas:71,dri:75,def_:39,phy:65},
  {name:'Sami Al-Najei',role:'RW',flag:'🇸🇦',club:'Al Qadsiah',pos:'FW',age:26,stat:'Saudi winger',rating:78,pac:79,sho:72,pas:70,dri:74,def_:37,phy:62},
  {name:'Sergio Rochet',role:'',flag:'🇺🇾',club:'Nacional',pos:'GK',age:31,stat:'Uruguay No.1',rating:82,pac:54,sho:13,pas:61,dri:20,def_:83,phy:70},
  {name:'Fernando Muslera',role:'',flag:'🇺🇾',club:'Galatasaray',pos:'GK',age:38,stat:'Uruguay legend GK',rating:82,pac:53,sho:13,pas:60,dri:19,def_:82,phy:69},
  {name:'Jose Gimenez',role:'',flag:'🇺🇾',club:'Atletico Madrid',pos:'DF',age:30,stat:'Uruguay captain CB',rating:87,pac:76,sho:40,pas:72,dri:55,def_:85,phy:80},
  {name:'Ronald Araujo',role:'',flag:'🇺🇾',club:'FC Barcelona',pos:'DF',age:26,stat:'Uruguay CB star',rating:88,pac:80,sho:42,pas:72,dri:56,def_:86,phy:82},
  {name:'Mathias Olivera',role:'',flag:'🇺🇾',club:'Napoli',pos:'DF',age:27,stat:'Uruguay left back',rating:83,pac:82,sho:46,pas:74,dri:51,def_:80,phy:72},
  {name:'Federico Valverde',role:'',flag:'🇺🇾',club:'Real Madrid',pos:'MF',age:26,stat:'Uruguay dynamo',rating:92,pac:84,sho:72,pas:86,dri:66,def_:88,phy:80},
  {name:'Manuel Ugarte',role:'',flag:'🇺🇾',club:'Man. Utd',pos:'MF',age:24,stat:'Uruguay anchor',rating:87,pac:78,sho:62,pas:80,dri:68,def_:83,phy:78},
  {name:'Darwin Nunez',role:'CF',flag:'🇺🇾',club:'Liverpool',pos:'FW',age:26,stat:'Uruguay striker',rating:86,pac:84,sho:86,pas:74,dri:80,def_:40,phy:68},
  {name:'Facundo Pellistri',role:'RW',flag:'🇺🇾',club:'Panathinaikos',pos:'FW',age:23,stat:'Uruguay winger',rating:83,pac:85,sho:76,pas:76,dri:80,def_:38,phy:63},
  {name:'Luis Suarez',role:'CF',flag:'🇺🇾',club:'Penarol',pos:'FW',age:38,stat:'Uruguay legend',rating:82,pac:76,sho:84,pas:76,dri:76,def_:40,phy:68},
  {name:'Mike Maignan',role:'',flag:'🇫🇷',club:'AC Milan',pos:'GK',age:29,stat:'France No.1',rating:91,pac:57,sho:14,pas:65,dri:21,def_:91,phy:73},
  {name:'Alphonse Areola',role:'',flag:'🇫🇷',club:'West Ham',pos:'GK',age:32,stat:'France backup',rating:87,pac:55,sho:14,pas:63,dri:21,def_:87,phy:71},
  {name:'Dayot Upamecano',role:'',flag:'🇫🇷',club:'Bayern Munich',pos:'DF',age:27,stat:'France CB',rating:88,pac:82,sho:40,pas:74,dri:56,def_:86,phy:80},
  {name:'William Saliba',role:'',flag:'🇫🇷',club:'Arsenal',pos:'DF',age:24,stat:'France future CB',rating:89,pac:80,sho:40,pas:74,dri:56,def_:87,phy:80},
  {name:'Theo Hernandez',role:'',flag:'🇫🇷',club:'AC Milan',pos:'DF',age:27,stat:'France left back',rating:88,pac:88,sho:60,pas:80,dri:54,def_:85,phy:76},
  {name:'Aurelien Tchouameni',role:'',flag:'🇫🇷',club:'Real Madrid',pos:'MF',age:25,stat:'France anchor',rating:89,pac:78,sho:64,pas:82,dri:68,def_:86,phy:80},
  {name:'Antoine Griezmann',role:'CF',flag:'🇫🇷',club:'Atletico Madrid',pos:'FW',age:34,stat:'France legend',rating:89,pac:82,sho:86,pas:84,dri:82,def_:52,phy:72},
  {name:'Kylian Mbappe',role:'CF',flag:'🇫🇷',club:'Real Madrid',pos:'FW',age:27,stat:'France captain top scorer',rating:97,pac:98,sho:93,pas:88,dri:97,def_:50,phy:76},
  {name:'Ousmane Dembele',role:'RW',flag:'🇫🇷',club:'PSG',pos:'FW',age:28,stat:'France pacey winger',rating:89,pac:90,sho:82,pas:80,dri:87,def_:42,phy:67},
  {name:'Michael Olise',role:'RW',flag:'🇫🇷',club:'Bayern Munich',pos:'FW',age:23,stat:'France Bundesliga star',rating:87,pac:88,sho:82,pas:82,dri:86,def_:40,phy:65},
  {name:'Edouard Mendy',role:'',flag:'🇸🇳',club:'Al Ahli',pos:'GK',age:33,stat:'Senegal AFCON hero',rating:86,pac:55,sho:14,pas:63,dri:21,def_:86,phy:71},
  {name:'Alfred Gomis',role:'',flag:'🇸🇳',club:'Rennes',pos:'GK',age:30,stat:'Senegal backup',rating:82,pac:53,sho:13,pas:61,dri:20,def_:83,phy:70},
  {name:'Kalidou Koulibaly',role:'',flag:'🇸🇳',club:'Al Hilal',pos:'DF',age:33,stat:'Senegal captain CB',rating:88,pac:78,sho:40,pas:73,dri:57,def_:86,phy:82},
  {name:'Abdou Diallo',role:'',flag:'🇸🇳',club:'Leipzig',pos:'DF',age:28,stat:'Senegal CB',rating:84,pac:76,sho:40,pas:72,dri:52,def_:82,phy:76},
  {name:'Youssouf Sabaly',role:'',flag:'🇸🇳',club:'Real Betis',pos:'DF',age:32,stat:'Senegal right back',rating:81,pac:80,sho:44,pas:72,dri:50,def_:78,phy:72},
  {name:'Idrissa Gueye',role:'',flag:'🇸🇳',club:'Everton',pos:'MF',age:35,stat:'Senegal engine',rating:84,pac:78,sho:60,pas:78,dri:64,def_:80,phy:74},
  {name:'Pape Matar Sarr',role:'',flag:'🇸🇳',club:'Tottenham',pos:'MF',age:23,stat:'Senegal future',rating:84,pac:78,sho:62,pas:80,dri:58,def_:76,phy:70},
  {name:'Sadio Mane',role:'LW',flag:'🇸🇳',club:'Al Nassr',pos:'FW',age:33,stat:'Senegal AFCON 2022',rating:85,pac:86,sho:80,pas:76,dri:83,def_:40,phy:63},
  {name:'Ismaila Sarr',role:'RW',flag:'🇸🇳',club:'Marseille',pos:'FW',age:27,stat:'Senegal winger',rating:85,pac:88,sho:78,pas:76,dri:83,def_:38,phy:63},
  {name:'Nicolas Jackson',role:'CF',flag:'🇸🇳',club:'Chelsea',pos:'FW',age:24,stat:'Senegal striker',rating:84,pac:82,sho:84,pas:76,dri:79,def_:40,phy:67},
  {name:'Mohammed Hamid',role:'',flag:'🇮🇶',club:'Al Zawraa',pos:'GK',age:31,stat:'Iraq No.1',rating:74,pac:50,sho:11,pas:54,dri:17,def_:76,phy:65},
  {name:'Jalal Hassan',role:'',flag:'🇮🇶',club:'Al Shorta',pos:'GK',age:28,stat:'Iraq backup',rating:70,pac:49,sho:10,pas:52,dri:16,def_:72,phy:63},
  {name:'Rebin Sulaka',role:'',flag:'🇮🇶',club:'Iraq national',pos:'DF',age:27,stat:'Iraq CB',rating:72,pac:70,sho:32,pas:62,dri:45,def_:70,phy:71},
  {name:'Ali Adnan',role:'',flag:'🇮🇶',club:'Fatih Karagumruk',pos:'DF',age:32,stat:'Iraq left back',rating:77,pac:74,sho:37,pas:68,dri:48,def_:74,phy:69},
  {name:'Ahmed Ibrahim',role:'',flag:'🇮🇶',club:'Iraq national',pos:'DF',age:26,stat:'Iraq right back',rating:73,pac:73,sho:34,pas:63,dri:46,def_:71,phy:69},
  {name:'Amjed Attwan',role:'',flag:'🇮🇶',club:'Al Zawraa',pos:'MF',age:28,stat:'Iraq midfielder',rating:73,pac:70,sho:52,pas:70,dri:48,def_:66,phy:65},
  {name:'Amir Al-Ammari',role:'',flag:'🇮🇶',club:'Al Khor',pos:'MF',age:27,stat:'Iraq captain',rating:74,pac:71,sho:53,pas:71,dri:50,def_:68,phy:66},
  {name:'Mohanad Ali',role:'CF',flag:'🇮🇶',club:'Al Zawraa',pos:'FW',age:27,stat:'Iraq top scorer',rating:78,pac:78,sho:78,pas:70,dri:73,def_:38,phy:64},
  {name:'Ayman Hussein',role:'LW',flag:'🇮🇶',club:'Al Shorta',pos:'FW',age:30,stat:'Iraq winger',rating:76,pac:78,sho:70,pas:68,dri:73,def_:36,phy:62},
  {name:'Aymen Hussain',role:'RW',flag:'🇮🇶',club:'Iraq national',pos:'FW',age:26,stat:'Iraq forward',rating:74,pac:76,sho:68,pas:67,dri:71,def_:35,phy:60},
  {name:'Orjan Nyland',role:'',flag:'🇳🇴',club:'Brentford',pos:'GK',age:33,stat:'Norway No.1',rating:82,pac:53,sho:13,pas:61,dri:20,def_:83,phy:70},
  {name:'Kristoffer Klaesson',role:'',flag:'🇳🇴',club:'Valerenga',pos:'GK',age:24,stat:'Norway backup',rating:77,pac:51,sho:12,pas:57,dri:18,def_:79,phy:67},
  {name:'Leo Ostigard',role:'',flag:'🇳🇴',club:'Napoli',pos:'DF',age:25,stat:'Norway CB',rating:82,pac:74,sho:38,pas:70,dri:51,def_:80,phy:77},
  {name:'Kristoffer Ajer',role:'',flag:'🇳🇴',club:'Brentford',pos:'DF',age:27,stat:'Norway CB',rating:83,pac:76,sho:40,pas:72,dri:52,def_:81,phy:76},
  {name:'Birger Meling',role:'',flag:'🇳🇴',club:'Rennes',pos:'DF',age:30,stat:'Norway left back',rating:79,pac:76,sho:40,pas:70,dri:49,def_:76,phy:70},
  {name:'Sander Berge',role:'',flag:'🇳🇴',club:'Burnley',pos:'MF',age:27,stat:'Norway midfielder',rating:83,pac:74,sho:62,pas:79,dri:58,def_:78,phy:74},
  {name:'Martin Odegaard',role:'',flag:'🇳🇴',club:'Arsenal',pos:'MF',age:27,stat:'Norway captain',rating:91,pac:78,sho:76,pas:90,dri:66,def_:82,phy:72},
  {name:'Erling Haaland',role:'CF',flag:'🇳🇴',club:'Man. City',pos:'FW',age:25,stat:'Norway goals machine',rating:97,pac:92,sho:97,pas:85,dri:91,def_:52,phy:80},
  {name:'Antonio Nusa',role:'LW',flag:'🇳🇴',club:'Club Brugge',pos:'FW',age:20,stat:'Norway young talent',rating:83,pac:86,sho:74,pas:76,dri:80,def_:36,phy:62},
  {name:'Alexander Sorloth',role:'CF',flag:'🇳🇴',club:'Atletico Madrid',pos:'FW',age:29,stat:'Norway striker',rating:85,pac:82,sho:85,pas:76,dri:79,def_:42,phy:74},
  {name:'Emiliano Martinez',role:'',flag:'🇦🇷',club:'Aston Villa',pos:'GK',age:32,stat:'Argentina WC 2022 hero',rating:93,pac:57,sho:14,pas:66,dri:22,def_:93,phy:74},
  {name:'Geronimo Rulli',role:'',flag:'🇦🇷',club:'Ajax',pos:'GK',age:33,stat:'Argentina backup',rating:84,pac:54,sho:13,pas:62,dri:20,def_:85,phy:70},
  {name:'Cristian Romero',role:'',flag:'🇦🇷',club:'Tottenham',pos:'DF',age:27,stat:'Argentina CB',rating:88,pac:78,sho:40,pas:73,dri:56,def_:86,phy:81},
  {name:'Nicolas Otamendi',role:'',flag:'🇦🇷',club:'Benfica',pos:'DF',age:37,stat:'Argentina veteran CB',rating:85,pac:73,sho:38,pas:69,dri:54,def_:83,phy:78},
  {name:'Nicolas Tagliafico',role:'',flag:'🇦🇷',club:'Olympique Lyon',pos:'DF',age:32,stat:'Argentina left back',rating:83,pac:80,sho:44,pas:74,dri:51,def_:80,phy:72},
  {name:'Rodrigo De Paul',role:'',flag:'🇦🇷',club:'Atletico Madrid',pos:'MF',age:31,stat:'Argentina engine',rating:87,pac:78,sho:65,pas:82,dri:60,def_:82,phy:76},
  {name:'Enzo Fernandez',role:'',flag:'🇦🇷',club:'Chelsea',pos:'MF',age:25,stat:'Argentina young star',rating:88,pac:78,sho:68,pas:84,dri:62,def_:82,phy:74},
  {name:'Lionel Messi',role:'RW',flag:'🇦🇷',club:'Inter Miami',pos:'FW',age:38,stat:'Argentina GOAT WC 2022',rating:95,pac:84,sho:90,pas:93,dri:93,def_:52,phy:70},
  {name:'Lautaro Martinez',role:'CF',flag:'🇦🇷',club:'Inter Milan',pos:'FW',age:28,stat:'Argentina striker',rating:88,pac:86,sho:89,pas:78,dri:83,def_:42,phy:70},
  {name:'Julian Alvarez',role:'CF',flag:'🇦🇷',club:'Atletico Madrid',pos:'FW',age:25,stat:'Argentina WC 2022 hero',rating:89,pac:86,sho:88,pas:82,dri:84,def_:50,phy:72},
  {name:'Rais M Bolhi',role:'',flag:'🇩🇿',club:'Al Taee',pos:'GK',age:38,stat:'Algeria veteran',rating:77,pac:51,sho:12,pas:56,dri:18,def_:79,phy:66},
  {name:'Mandrea Mandrea',role:'',flag:'🇩🇿',club:'Belouizdad',pos:'GK',age:29,stat:'Algeria backup',rating:73,pac:50,sho:11,pas:54,dri:17,def_:75,phy:64},
  {name:'Djamel Benlamri',role:'',flag:'🇩🇿',club:'Al Qadsiah',pos:'DF',age:33,stat:'Algeria CB',rating:78,pac:72,sho:35,pas:66,dri:48,def_:76,phy:74},
  {name:'Aissa Mandi',role:'',flag:'🇩🇿',club:'Villarreal',pos:'DF',age:33,stat:'Algeria captain CB',rating:80,pac:73,sho:37,pas:68,dri:50,def_:78,phy:74},
  {name:'Youcef Atal',role:'',flag:'🇩🇿',club:'Nice',pos:'DF',age:28,stat:'Algeria right back',rating:82,pac:82,sho:46,pas:74,dri:50,def_:78,phy:72},
  {name:'Ismael Bennacer',role:'',flag:'🇩🇿',club:'AC Milan',pos:'MF',age:27,stat:'Algeria anchor',rating:87,pac:76,sho:64,pas:82,dri:62,def_:82,phy:74},
  {name:'Sofiane Feghouli',role:'',flag:'🇩🇿',club:'Al Ettifaq',pos:'MF',age:35,stat:'Algeria legend',rating:81,pac:78,sho:62,pas:78,dri:54,def_:74,phy:66},
  {name:'Riyad Mahrez',role:'RW',flag:'🇩🇿',club:'Al Ahli',pos:'FW',age:34,stat:'Algeria captain winger',rating:86,pac:86,sho:80,pas:76,dri:83,def_:39,phy:64},
  {name:'Baghdad Bounedjah',role:'CF',flag:'🇩🇿',club:'Al Sadd',pos:'FW',age:33,stat:'Algeria AFCON top scorer',rating:82,pac:80,sho:83,pas:72,dri:76,def_:39,phy:65},
  {name:'Youcef Belaili',role:'RW',flag:'🇩🇿',club:'Belouizdad',pos:'FW',age:32,stat:'Algeria winger',rating:81,pac:82,sho:75,pas:74,dri:78,def_:37,phy:62},
  {name:'Patrick Pentz',role:'',flag:'🇦🇹',club:'Real Betis',pos:'GK',age:27,stat:'Austria No.1',rating:82,pac:54,sho:13,pas:61,dri:20,def_:83,phy:70},
  {name:'Alexander Schlager',role:'',flag:'🇦🇹',club:'LASK',pos:'GK',age:30,stat:'Austria backup',rating:79,pac:52,sho:12,pas:58,dri:19,def_:81,phy:68},
  {name:'David Alaba',role:'',flag:'🇦🇹',club:'Real Madrid',pos:'DF',age:33,stat:'Austria captain CB',rating:89,pac:80,sho:58,pas:82,dri:58,def_:87,phy:78},
  {name:'Stefan Posch',role:'',flag:'🇦🇹',club:'Bologna',pos:'DF',age:27,stat:'Austria right back',rating:82,pac:80,sho:44,pas:72,dri:51,def_:79,phy:73},
  {name:'Philipp Mwene',role:'',flag:'🇦🇹',club:'Mainz',pos:'DF',age:30,stat:'Austria left back',rating:78,pac:76,sho:40,pas:68,dri:48,def_:75,phy:70},
  {name:'Florian Grillitsch',role:'',flag:'🇦🇹',club:'Hoffenheim',pos:'MF',age:29,stat:'Austria midfielder',rating:80,pac:72,sho:60,pas:77,dri:56,def_:74,phy:70},
  {name:'Konrad Laimer',role:'',flag:'🇦🇹',club:'Bayern Munich',pos:'MF',age:28,stat:'Austria box-to-box',rating:85,pac:82,sho:62,pas:80,dri:60,def_:82,phy:78},
  {name:'Marko Arnautovic',role:'CF',flag:'🇦🇹',club:'Inter Milan',pos:'FW',age:36,stat:'Austria captain',rating:83,pac:78,sho:82,pas:74,dri:76,def_:40,phy:68},
  {name:'Christoph Baumgartner',role:'CF',flag:'🇦🇹',club:'RB Leipzig',pos:'FW',age:25,stat:'Austria forward',rating:83,pac:82,sho:80,pas:76,dri:78,def_:40,phy:66},
  {name:'Patrick Wimmer',role:'RW',flag:'🇦🇹',club:'Wolfsburg',pos:'FW',age:24,stat:'Austria winger',rating:81,pac:83,sho:74,pas:74,dri:78,def_:37,phy:62},
  {name:'Yazeed Abo Laila',role:'',flag:'🇯🇴',club:'Al Jazeera',pos:'GK',age:29,stat:'Jordan No.1',rating:72,pac:50,sho:11,pas:53,dri:17,def_:74,phy:63},
  {name:'Mohammad Shatnawi',role:'',flag:'🇯🇴',club:'Al Faisaly',pos:'GK',age:32,stat:'Jordan backup',rating:68,pac:49,sho:10,pas:51,dri:16,def_:70,phy:62},
  {name:'Bachar Bani Yaseen',role:'',flag:'🇯🇴',club:'Al Faisaly',pos:'DF',age:27,stat:'Jordan CB',rating:70,pac:69,sho:31,pas:60,dri:44,def_:68,phy:70},
  {name:'Mohammad Al-Dmeiri',role:'',flag:'🇯🇴',club:'Al Wahdat',pos:'DF',age:28,stat:'Jordan left back',rating:71,pac:70,sho:32,pas:61,dri:45,def_:69,phy:69},
  {name:'Yazan Al-Naimat',role:'',flag:'🇯🇴',club:'Jordan national',pos:'DF',age:26,stat:'Jordan right back',rating:70,pac:70,sho:32,pas:60,dri:44,def_:68,phy:68},
  {name:'Musa Al-Taamari',role:'LW',flag:'🇯🇴',club:'Montpellier',pos:'FW',age:26,stat:'Jordan best player',rating:79,pac:80,sho:72,pas:72,dri:75,def_:37,phy:62},
  {name:'Baha Faisal',role:'',flag:'🇯🇴',club:'Al Wahdat',pos:'MF',age:30,stat:'Jordan captain',rating:72,pac:70,sho:52,pas:69,dri:49,def_:66,phy:65},
  {name:'Mohammad Rashid',role:'',flag:'🇯🇴',club:'Al Wehdat',pos:'MF',age:27,stat:'Jordan midfielder',rating:70,pac:68,sho:51,pas:68,dri:47,def_:64,phy:63},
  {name:'Zaid Al-Hamouri',role:'CF',flag:'🇯🇴',club:'Al Shahania',pos:'FW',age:26,stat:'Jordan striker',rating:73,pac:74,sho:70,pas:66,dri:69,def_:35,phy:62},
  {name:'Salam Rabi',role:'RW',flag:'🇯🇴',club:'Al Jazeera',pos:'FW',age:29,stat:'Jordan winger',rating:72,pac:74,sho:67,pas:65,dri:68,def_:34,phy:60},
  {name:'Diogo Costa',role:'',flag:'🇵🇹',club:'Porto',pos:'GK',age:25,stat:'Portugal future No.1',rating:88,pac:56,sho:14,pas:64,dri:21,def_:88,phy:72},
  {name:'Jose Sa',role:'',flag:'🇵🇹',club:'Wolves',pos:'GK',age:32,stat:'Portugal backup',rating:85,pac:54,sho:13,pas:62,dri:20,def_:85,phy:70},
  {name:'Ruben Dias',role:'',flag:'🇵🇹',club:'Man. City',pos:'DF',age:28,stat:'Portugal captain CB',rating:91,pac:78,sho:42,pas:76,dri:58,def_:89,phy:82},
  {name:'Joao Cancelo',role:'',flag:'🇵🇹',club:'FC Barcelona',pos:'DF',age:31,stat:'Portugal versatile DF',rating:88,pac:86,sho:58,pas:82,dri:56,def_:85,phy:74},
  {name:'Nuno Mendes',role:'',flag:'🇵🇹',club:'PSG',pos:'DF',age:23,stat:'Portugal left back',rating:87,pac:86,sho:52,pas:78,dri:54,def_:83,phy:72},
  {name:'Ruben Neves',role:'',flag:'🇵🇹',club:'Al Hilal',pos:'MF',age:28,stat:'Portugal anchor',rating:86,pac:72,sho:65,pas:82,dri:62,def_:80,phy:74},
  {name:'Bruno Fernandes',role:'',flag:'🇵🇹',club:'Man. Utd',pos:'MF',age:31,stat:'Portugal playmaker',rating:90,pac:76,sho:80,pas:88,dri:64,def_:82,phy:74},
  {name:'Cristiano Ronaldo',role:'CF',flag:'🇵🇹',club:'Al Nassr',pos:'FW',age:41,stat:'Portugal all-time goals record',rating:91,pac:86,sho:92,pas:80,dri:85,def_:46,phy:74},
  {name:'Bernardo Silva',role:'RW',flag:'🇵🇹',club:'Man. City',pos:'FW',age:31,stat:'Portugal maestro',rating:90,pac:82,sho:78,pas:88,dri:86,def_:54,phy:72},
  {name:'Rafael Leao',role:'LW',flag:'🇵🇹',club:'AC Milan',pos:'FW',age:26,stat:'Portugal winger',rating:90,pac:92,sho:82,pas:80,dri:88,def_:40,phy:70},
  {name:'Lionel Mpasi',role:'',flag:'🇨🇩',club:'TP Mazembe',pos:'GK',age:30,stat:'DRC No.1',rating:73,pac:50,sho:11,pas:54,dri:17,def_:75,phy:64},
  {name:'Parfait Mandanda',role:'',flag:'🇨🇩',club:'Saint Etienne',pos:'GK',age:33,stat:'DRC veteran',rating:74,pac:51,sho:11,pas:55,dri:17,def_:76,phy:65},
  {name:'Chancel Mbemba',role:'',flag:'🇨🇩',club:'Marseille',pos:'DF',age:31,stat:'DRC CB captain',rating:83,pac:75,sho:38,pas:70,dri:51,def_:81,phy:78},
  {name:'Arthur Masuaku',role:'',flag:'🇨🇩',club:'Besiktas',pos:'DF',age:31,stat:'DRC left back',rating:80,pac:78,sho:40,pas:70,dri:48,def_:77,phy:72},
  {name:'Marcel Tisserand',role:'',flag:'🇨🇩',club:'Fenerbahce',pos:'DF',age:33,stat:'DRC CB',rating:79,pac:74,sho:37,pas:66,dri:49,def_:77,phy:76},
  {name:'Jean-Marc Makusu',role:'',flag:'🇨🇩',club:'TP Mazembe',pos:'MF',age:26,stat:'DRC midfielder',rating:74,pac:72,sho:53,pas:71,dri:50,def_:68,phy:66},
  {name:'Merveille Bope',role:'LW',flag:'🇨🇩',club:'TP Mazembe',pos:'FW',age:23,stat:'DRC winger',rating:76,pac:79,sho:70,pas:70,dri:73,def_:36,phy:62},
  {name:'Cedric Bakambu',role:'CF',flag:'🇨🇩',club:'Celta Vigo',pos:'FW',age:34,stat:'DRC top scorer',rating:82,pac:80,sho:83,pas:73,dri:78,def_:39,phy:65},
  {name:'Yoane Wissa',role:'RW',flag:'🇨🇩',club:'Brentford',pos:'FW',age:28,stat:'DRC Prem winger',rating:83,pac:84,sho:78,pas:76,dri:80,def_:38,phy:63},
  {name:'Fiston Mayele',role:'CF',flag:'🇨🇩',club:'Pyramids FC',pos:'FW',age:27,stat:'DRC striker',rating:79,pac:79,sho:79,pas:71,dri:74,def_:38,phy:64},
  {name:'Utkir Yusupov',role:'',flag:'🇺🇿',club:'Lokomotiv',pos:'GK',age:29,stat:'UZB No.1',rating:72,pac:50,sho:11,pas:53,dri:17,def_:74,phy:63},
  {name:'Eldor Shomurodov',role:'CF',flag:'🇺🇿',club:'Roma',pos:'FW',age:30,stat:'UZB top scorer',rating:82,pac:81,sho:82,pas:73,dri:76,def_:39,phy:67},
  {name:'Dostonbek Khamdamov',role:'',flag:'🇺🇿',club:'Lokomotiv',pos:'DF',age:25,stat:'UZB CB',rating:72,pac:70,sho:32,pas:62,dri:45,def_:70,phy:71},
  {name:'Abbosbek Fayzullaev',role:'LW',flag:'🇺🇿',club:'Lokomotiv',pos:'FW',age:23,stat:'UZB rising star',rating:78,pac:81,sho:70,pas:72,dri:74,def_:36,phy:61},
  {name:'Odil Ahmedov',role:'',flag:'🇺🇿',club:'Al Shamal',pos:'MF',age:36,stat:'UZB legend',rating:78,pac:70,sho:56,pas:76,dri:56,def_:70,phy:68},
  {name:'Jasur Yakhshiboev',role:'',flag:'🇺🇿',club:'Lokomotiv',pos:'DF',age:27,stat:'UZB right back',rating:73,pac:73,sho:34,pas:63,dri:46,def_:71,phy:69},
  {name:'Akbar Tursunmurodov',role:'',flag:'🇺🇿',club:'Lokomotiv',pos:'DF',age:26,stat:'UZB left back',rating:72,pac:71,sho:33,pas:62,dri:45,def_:70,phy:68},
  {name:'Jamshid Iskanderov',role:'',flag:'🇺🇿',club:'Pakhtakor',pos:'MF',age:27,stat:'UZB midfielder',rating:74,pac:72,sho:54,pas:71,dri:50,def_:68,phy:66},
  {name:'Oston Urunov',role:'RW',flag:'🇺🇿',club:'Akhmat Grozny',pos:'FW',age:26,stat:'UZB forward',rating:76,pac:78,sho:70,pas:70,dri:72,def_:36,phy:61},
  {name:'Khojimat Erkinov',role:'',flag:'🇺🇿',club:'Pakhtakor',pos:'MF',age:25,stat:'UZB midfield anchor',rating:72,pac:70,sho:52,pas:70,dri:48,def_:66,phy:64},
  {name:'Camilo Vargas',role:'',flag:'🇨🇴',club:'Atlas',pos:'GK',age:33,stat:'Colombia No.1',rating:81,pac:53,sho:13,pas:60,dri:20,def_:82,phy:69},
  {name:'David Ospina',role:'',flag:'🇨🇴',club:'Al Nassr',pos:'GK',age:36,stat:'Colombia legend GK',rating:83,pac:54,sho:13,pas:62,dri:20,def_:83,phy:70},
  {name:'Davinson Sanchez',role:'',flag:'🇨🇴',club:'Galatasaray',pos:'DF',age:28,stat:'Colombia CB',rating:86,pac:78,sho:40,pas:72,dri:53,def_:84,phy:80},
  {name:'Yerri Mina',role:'',flag:'🇨🇴',club:'Atalanta',pos:'DF',age:30,stat:'Colombia CB',rating:84,pac:72,sho:38,pas:68,dri:52,def_:82,phy:80},
  {name:'Johan Mojica',role:'',flag:'🇨🇴',club:'Rayo Vallecano',pos:'DF',age:32,stat:'Colombia left back',rating:80,pac:78,sho:40,pas:70,dri:49,def_:76,phy:70},
  {name:'Wilmar Barrios',role:'',flag:'🇨🇴',club:'Zenit',pos:'MF',age:31,stat:'Colombia anchor',rating:82,pac:74,sho:58,pas:76,dri:62,def_:78,phy:74},
  {name:'James Rodriguez',role:'',flag:'🇨🇴',club:'Rayo Vallecano',pos:'MF',age:34,stat:'Colombia legend',rating:86,pac:74,sho:76,pas:86,dri:56,def_:76,phy:68},
  {name:'Luis Diaz',role:'LW',flag:'🇨🇴',club:'Liverpool',pos:'FW',age:28,stat:'Colombia star',rating:90,pac:90,sho:82,pas:80,dri:87,def_:42,phy:68},
  {name:'Jhon Duran',role:'CF',flag:'🇨🇴',club:'Aston Villa',pos:'FW',age:21,stat:'Colombia future striker',rating:84,pac:82,sho:84,pas:76,dri:78,def_:40,phy:68},
  {name:'Rafael Santos Borre',role:'CF',flag:'🇨🇴',club:'Eintracht Frankfurt',pos:'FW',age:29,stat:'Colombia striker',rating:83,pac:81,sho:83,pas:74,dri:78,def_:40,phy:67},
  {name:'Jordan Pickford',role:'',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Everton',pos:'GK',age:31,stat:'England No.1',rating:88,pac:55,sho:14,pas:63,dri:21,def_:88,phy:72},
  {name:'Aaron Ramsdale',role:'',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Southampton',pos:'GK',age:27,stat:'England backup',rating:84,pac:54,sho:13,pas:61,dri:20,def_:84,phy:70},
  {name:'John Stones',role:'',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Man. City',pos:'DF',age:31,stat:'England CB',rating:88,pac:78,sho:58,pas:78,dri:56,def_:86,phy:76},
  {name:'Marc Guehi',role:'',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Crystal Palace',pos:'DF',age:24,stat:'England CB rising',rating:85,pac:76,sho:40,pas:72,dri:52,def_:83,phy:78},
  {name:'Trent Alexander-Arnold',role:'',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Real Madrid',pos:'DF',age:27,stat:'England right back creative',rating:90,pac:82,sho:62,pas:86,dri:56,def_:85,phy:72},
  {name:'Declan Rice',role:'',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Arsenal',pos:'MF',age:27,stat:'England anchor',rating:90,pac:78,sho:68,pas:82,dri:68,def_:87,phy:78},
  {name:'Jude Bellingham',role:'',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Real Madrid',pos:'MF',age:22,stat:'England superstar',rating:93,pac:82,sho:80,pas:88,dri:70,def_:88,phy:80},
  {name:'Harry Kane',role:'CF',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Bayern Munich',pos:'FW',age:32,stat:'England all-time top scorer',rating:91,pac:88,sho:93,pas:80,dri:86,def_:46,phy:74},
  {name:'Bukayo Saka',role:'RW',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Arsenal',pos:'FW',age:24,stat:'England Euro 2024 star',rating:90,pac:90,sho:85,pas:80,dri:89,def_:42,phy:68},
  {name:'Phil Foden',role:'LW',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Man. City',pos:'FW',age:25,stat:'England creative',rating:91,pac:87,sho:84,pas:86,dri:88,def_:46,phy:70},
  {name:'Dominik Livakovic',role:'',flag:'🇭🇷',club:'Fenerbahce',pos:'GK',age:30,stat:'Croatia WC 2022 hero GK',rating:87,pac:55,sho:14,pas:63,dri:21,def_:87,phy:71},
  {name:'Ivica Ivusic',role:'',flag:'🇭🇷',club:'Osijek',pos:'GK',age:31,stat:'Croatia backup',rating:79,pac:52,sho:12,pas:58,dri:19,def_:81,phy:68},
  {name:'Josko Gvardiol',role:'',flag:'🇭🇷',club:'Man. City',pos:'DF',age:23,stat:'Croatia CB star',rating:90,pac:84,sho:52,pas:78,dri:58,def_:88,phy:80},
  {name:'Domagoj Vida',role:'',flag:'🇭🇷',club:'Besiktas',pos:'DF',age:35,stat:'Croatia veteran CB',rating:79,pac:72,sho:34,pas:66,dri:48,def_:77,phy:74},
  {name:'Josip Juranovic',role:'',flag:'🇭🇷',club:'Celtic',pos:'DF',age:29,stat:'Croatia right back',rating:82,pac:82,sho:46,pas:74,dri:50,def_:79,phy:72},
  {name:'Luka Modric',role:'',flag:'🇭🇷',club:'Real Madrid',pos:'MF',age:40,stat:'Croatia GOAT',rating:91,pac:74,sho:72,pas:90,dri:68,def_:82,phy:68},
  {name:'Marcelo Brozovic',role:'',flag:'🇭🇷',club:'Al Nassr',pos:'MF',age:32,stat:'Croatia anchor',rating:86,pac:72,sho:62,pas:82,dri:64,def_:80,phy:74},
  {name:'Ivan Perisic',role:'LW',flag:'🇭🇷',club:'Hajduk Split',pos:'FW',age:36,stat:'Croatia legend',rating:84,pac:82,sho:78,pas:78,dri:79,def_:44,phy:70},
  {name:'Bruno Petkovic',role:'CF',flag:'🇭🇷',club:'Dinamo Zagreb',pos:'FW',age:31,stat:'Croatia striker WC 2022',rating:82,pac:78,sho:82,pas:72,dri:76,def_:40,phy:66},
  {name:'Andrej Kramaric',role:'CF',flag:'🇭🇷',club:'Hoffenheim',pos:'FW',age:34,stat:'Croatia top scorer',rating:85,pac:80,sho:86,pas:76,dri:78,def_:42,phy:68},
  {name:'Lawrence Ati-Zigi',role:'',flag:'🇬🇭',club:'St Gallen',pos:'GK',age:28,stat:'Ghana No.1',rating:79,pac:52,sho:12,pas:58,dri:19,def_:81,phy:68},
  {name:'Ibrahim Danlad',role:'',flag:'🇬🇭',club:'Asante Kotoko',pos:'GK',age:22,stat:'Ghana young GK',rating:72,pac:50,sho:11,pas:53,dri:17,def_:74,phy:63},
  {name:'Daniel Amartey',role:'',flag:'🇬🇭',club:'Besiktas',pos:'DF',age:30,stat:'Ghana CB captain',rating:80,pac:73,sho:36,pas:67,dri:49,def_:78,phy:76},
  {name:'Alexander Djiku',role:'',flag:'🇬🇭',club:'Fenerbahce',pos:'DF',age:30,stat:'Ghana CB',rating:81,pac:74,sho:37,pas:68,dri:50,def_:79,phy:77},
  {name:'Tariq Lamptey',role:'',flag:'🇬🇭',club:'Brighton',pos:'DF',age:24,stat:'Ghana right back',rating:83,pac:84,sho:48,pas:74,dri:50,def_:80,phy:70},
  {name:'Thomas Partey',role:'',flag:'🇬🇭',club:'Arsenal',pos:'MF',age:32,stat:'Ghana captain',rating:87,pac:76,sho:62,pas:80,dri:64,def_:82,phy:78},
  {name:'Kudus Mohammed',role:'RW',flag:'🇬🇭',club:'West Ham',pos:'FW',age:25,stat:'Ghana superstar',rating:87,pac:86,sho:80,pas:78,dri:83,def_:40,phy:66},
  {name:'Jordan Ayew',role:'CF',flag:'🇬🇭',club:'Leicester City',pos:'FW',age:33,stat:'Ghana veteran striker',rating:82,pac:80,sho:82,pas:74,dri:78,def_:40,phy:67},
  {name:'Antoine Semenyo',role:'RW',flag:'🇬🇭',club:'Bournemouth',pos:'FW',age:25,stat:'Ghana winger',rating:83,pac:85,sho:76,pas:76,dri:80,def_:38,phy:64},
  {name:'Inaki Williams',role:'CF',flag:'🇬🇭',club:'Athletic Bilbao',pos:'FW',age:31,stat:'Ghana striker',rating:85,pac:88,sho:80,pas:76,dri:82,def_:40,phy:68},
  {name:'Orlando Mosquera',role:'',flag:'🇵🇦',club:'Cali',pos:'GK',age:29,stat:'Panama No.1',rating:73,pac:50,sho:11,pas:54,dri:17,def_:75,phy:64},
  {name:'Luis Mejia',role:'',flag:'🇵🇦',club:'Estudiantes de Merida',pos:'GK',age:31,stat:'Panama backup',rating:70,pac:49,sho:10,pas:52,dri:16,def_:72,phy:63},
  {name:'Harold Cummings',role:'',flag:'🇵🇦',club:'San Jose Earthquakes',pos:'DF',age:31,stat:'Panama CB captain',rating:76,pac:72,sho:34,pas:64,dri:46,def_:74,phy:74},
  {name:'Eric Davis',role:'',flag:'🇵🇦',club:'Panama national',pos:'DF',age:36,stat:'Panama veteran CB',rating:74,pac:70,sho:32,pas:62,dri:45,def_:72,phy:71},
  {name:'Roderick Miller',role:'',flag:'🇵🇦',club:'Club Atletico Independiente',pos:'DF',age:33,stat:'Panama right back',rating:73,pac:72,sho:33,pas:62,dri:45,def_:71,phy:70},
  {name:'Anibal Godoy',role:'',flag:'🇵🇦',club:'Nashville SC',pos:'MF',age:36,stat:'Panama captain',rating:77,pac:70,sho:54,pas:73,dri:54,def_:70,phy:70},
  {name:'Cesar Yanis',role:'',flag:'🇵🇦',club:'Charlotte FC',pos:'MF',age:27,stat:'Panama midfielder',rating:75,pac:72,sho:54,pas:71,dri:51,def_:69,phy:67},
  {name:'Rolando Blackburn',role:'CF',flag:'🇵🇦',club:'Al Ittifaq',pos:'FW',age:30,stat:'Panama striker',rating:78,pac:78,sho:78,pas:70,dri:73,def_:38,phy:64},
  {name:'Alberto Quintero',role:'LW',flag:'🇵🇦',club:'Universitario',pos:'FW',age:35,stat:'Panama veteran winger',rating:75,pac:76,sho:68,pas:68,dri:71,def_:36,phy:61},
  {name:'Gabriel Torres',role:'CF',flag:'🇵🇦',club:'Panama national',pos:'FW',age:37,stat:'Panama legend striker',rating:76,pac:75,sho:75,pas:68,dri:70,def_:37,phy:62}
];


// - FIFA CARD STYLE - World Cup 2026 -
function PlayerAvatar(props){
  var s=props.star;
  var isGold=s.rating>=96;
  var isSilver=s.rating>=94&&s.rating<96;
  var isBronze=s.rating>=92&&s.rating<94;
  var cardBg=isGold?'linear-gradient(160deg,#f5e06e,#d4af37,#b8963e)':
             isSilver?'linear-gradient(160deg,#e8e8e8,#c0c0c0,#a8a8a8)':
             isBronze?'linear-gradient(160deg,#e8a857,#cd7f32,#a86520)':
             'linear-gradient(160deg,#2a5ab8,#1a3a6b,#0f2040)';
  var textColor=isGold||isSilver||isBronze?'#0a0a1a':'#ffffff';
  var borderColor=isGold?'rgba(255,240,100,0.8)':isSilver?'rgba(255,255,255,0.6)':isBronze?'rgba(255,180,80,0.6)':'rgba(100,150,255,0.3)';
  var cardLabel=isGold?'GOLD WC':isSilver?'SILVER WC':isBronze?'BRONZE WC':'WORLD CUP';
  return e('div',{style:{width:72,height:98,borderRadius:10,background:cardBg,flexShrink:0,display:'flex',flexDirection:'column',alignItems:'center',padding:'5px 4px 4px',boxShadow:'0 6px 20px rgba(0,0,0,0.6)',position:'relative',border:'2px solid '+borderColor}},
    e('div',{style:{fontSize:6,color:textColor,opacity:0.75,letterSpacing:0.5,marginBottom:1,fontWeight:'bold'}},cardLabel),
    e('div',{style:{fontSize:22,fontWeight:'bold',color:textColor,lineHeight:1}},s.rating),
    e('div',{style:{fontSize:8,color:textColor,opacity:0.9,marginBottom:2,fontWeight:'bold'}},s.pos),
    e('div',{style:{fontSize:20,marginBottom:2}},s.flag),
    e('div',{style:{width:'80%',height:1,background:textColor,opacity:0.25,marginBottom:2}}),
    e('div',{style:{fontSize:7,fontWeight:'bold',color:textColor,textAlign:'center',lineHeight:1.3,maxWidth:68,overflow:'hidden'}},s.name.split(' ').slice(-1)[0].toUpperCase()),
    e('div',{style:{fontSize:6,color:textColor,opacity:0.7,marginTop:1}},s.club.substring(0,12)),
    isGold&&e('div',{style:{position:'absolute',top:2,right:3,fontSize:9}},'★')
  );
}


// - TEAM STRENGTHS FOR SIMULATOR -

// - TEAM NAME TRANSLATIONS -

// Helper to translate team name

// Phase labels per language
var PHASE_LABELS = {
  en:{group:'Group',R32:'Round of 32',R16:'Round of 16',QF:'Quarter-Final',SF:'Semi-Final','3P':'3rd Place',FIN:'Final'},
  fr:{group:'Groupe',R32:'Tour des 32',R16:'Huitiemes',QF:'Quart de Finale',SF:'Demi-Finale','3P':'3eme Place',FIN:'Finale'},
  es:{group:'Grupo',R32:'Ronda de 32',R16:'Octavos',QF:'Cuarto de Final',SF:'Semifinal','3P':'3er Puesto',FIN:'Final'},
  pt:{group:'Grupo',R32:'Rodada de 32',R16:'Oitavas',QF:'Quarta de Final',SF:'Semifinal','3P':'3o Lugar',FIN:'Final'},
  it:{group:'Girone',R32:'Turno dei 32',R16:'Ottavi',QF:'Quarto di Finale',SF:'Semifinale','3P':'3o Posto',FIN:'Finale'},
  de:{group:'Gruppe',R32:'Runde der 32',R16:'Achtelfinale',QF:'Viertelfinale',SF:'Halbfinale','3P':'Platz 3',FIN:'Finale'}
};

function phaseLabel(phase, lang){
  return (PHASE_LABELS[lang]&&PHASE_LABELS[lang][phase])||phase;
}


var TEAM_STRENGTH = {
  'France':92,'England':90,'Spain':91,'Brazil':90,'Argentina':91,
  'Germany':88,'Portugal':87,'Netherlands':86,'Belgium':84,'Uruguay':82,
  'USA':78,'Mexico':79,'Canada':76,'Japan':80,'Morocco':79,
  'South Korea':78,'Senegal':79,'Norway':80,'Croatia':82,'Denmark':82,
  'Switzerland':80,'Austria':77,'Algeria':75,'Colombia':80,'Ecuador':74,
  'Peru':73,'Chile':74,'Bolivia':65,'Paraguay':72,'Australia':74,
  'Tunisia':72,'Egypt':73,'Ivory Coast':77,'Cameroon':73,'Ghana':74,
  'South Africa':68,'Nigeria':75,'DR Congo':70,'Uzbekistan':68,
  'Jordan':65,'Iraq':67,'Saudi Arabia':72,'Iran':73,'Qatar':65,
  'Cape Verde':66,'Haiti':60,'Scotland':76,'Bosnia':70,
  'Czechia':76,'Czechia':76,'Turkey':78,'New Zealand':65,
  'Panama':64,'Cuba':58,'Sweden':79,'Finland':72,'Slovakia':74,
  'Slovenia':74,'Albania':68,'Serbia':78,'Poland':77,'Romania':72,
  'Iceland':73,'Ireland':70,'Wales':76,'Northern Ireland':65,
  'Belarus':62,'Kosovo':63
};

function getStrength(team){return TEAM_STRENGTH[team]||70;}

// ── OFFICIAL TV BROADCAST RIGHTS - FIFA WORLD CUP 2026 ──────────
// Source: FIFA official media partners, confirmed deals
var TV_INFO = {
  en:{
    free:['BBC','ITV'],
    paid:['BBC iPlayer','ITVX'],
    note:'All 104 matches FREE on BBC & ITV. No subscription needed!',
    stream:'BBC iPlayer / ITVX'
  },
  fr:{
    free:['M6'],
    paid:['beIN Sports'],
    note:'54 matchs gratuits sur M6 dont tous les matchs France. Reste sur beIN Sports.',
    stream:'6play (gratuit) / beIN CONNECT'
  },
  es:{
    free:['RTVE / La 1'],
    paid:['Mediapro','DAZN'],
    note:'Todos los partidos de Espana gratis en RTVE. Cobertura completa en DAZN.',
    stream:'RTVE Play (gratis) / DAZN'
  },
  pt:{
    free:['Sport TV Portugal'],
    paid:['Livemode'],
    note:'Cobertura completa na Sport TV Portugal. Streaming na app Sport TV.',
    stream:'Sport TV App'
  },
  it:{
    free:['RAI 1','RAI 2'],
    paid:['DAZN'],
    note:'28 partite gratis su RAI (apertura, QF, SF, Finale). Tutte le partite su DAZN.',
    stream:'RaiPlay (gratis) / DAZN'
  },
  de:{
    free:['ARD','ZDF'],
    paid:['MagentaTV'],
    note:'Ausgewahlte Spiele gratis auf ARD/ZDF. Alle 104 Spiele in 4K auf MagentaTV.',
    stream:'ARD Mediathek / ZDF Mediathek / MagentaTV'
  }
};

// Team-specific broadcast channel per country
var TEAM_TV = {
  'England':  {en:'BBC/ITV',  fr:'beIN Sports', es:'DAZN',     pt:'Sport TV', it:'DAZN',     de:'MagentaTV'},
  'France':   {en:'BBC/ITV',  fr:'M6',          es:'RTVE',     pt:'Sport TV', it:'RAI 1',    de:'ARD/ZDF'},
  'Spain':    {en:'BBC/ITV',  fr:'M6',          es:'RTVE La 1',pt:'Sport TV', it:'RAI 1',    de:'ARD'},
  'Germany':  {en:'BBC/ITV',  fr:'beIN Sports', es:'RTVE',     pt:'Sport TV', it:'DAZN',     de:'ARD/ZDF'},
  'Portugal': {en:'BBC/ITV',  fr:'beIN Sports', es:'DAZN',     pt:'Sport TV', it:'DAZN',     de:'MagentaTV'},
  'Brazil':   {en:'BBC/ITV',  fr:'M6',          es:'DAZN',     pt:'Sport TV', it:'RAI 1',    de:'ARD/ZDF'},
  'Argentina':{en:'BBC/ITV',  fr:'M6',          es:'RTVE',     pt:'Sport TV', it:'RAI 1',    de:'ARD/ZDF'},
  'Mexico':   {en:'BBC/ITV',  fr:'beIN Sports', es:'RTVE',     pt:'Sport TV', it:'DAZN',     de:'MagentaTV'},
  'USA':      {en:'BBC/ITV',  fr:'beIN Sports', es:'DAZN',     pt:'Sport TV', it:'DAZN',     de:'ARD/ZDF'},
  'Morocco':  {en:'BBC/ITV',  fr:'beIN Sports', es:'DAZN',     pt:'Sport TV', it:'DAZN',     de:'MagentaTV'},
  'Senegal':  {en:'BBC/ITV',  fr:'M6',          es:'DAZN',     pt:'Sport TV', it:'DAZN',     de:'MagentaTV'},
  'Norway':   {en:'BBC/ITV',  fr:'beIN Sports', es:'DAZN',     pt:'Sport TV', it:'DAZN',     de:'ARD/ZDF'},
  'Croatia':  {en:'BBC/ITV',  fr:'beIN Sports', es:'DAZN',     pt:'Sport TV', it:'RAI',      de:'MagentaTV'},
  'default':  {en:'BBC/ITV',  fr:'M6/beIN',     es:'RTVE/DAZN',pt:'Sport TV', it:'RAI/DAZN', de:'ARD/MagentaTV'}
};

function getTV(team, lang){
  var ch=TEAM_TV[team]||TEAM_TV['default'];
  return ch[lang]||'';
}

function getTVInfo(lang){
  return TV_INFO[lang]||TV_INFO['en'];
}

function Card(props){
  return e('div',{style:Object.assign({background:props.gold?'linear-gradient(135deg,rgba(212,175,55,0.14),rgba(184,150,62,0.07))':CB,border:'1px solid '+(props.gold?G:BD),borderRadius:14,padding:16},props.style||{})},props.children);
}

function App(){
  var s1=useState(0);var tab=s1[0];var setTab=s1[1];
  var s2=useState('en');var lang=s2[0];var setLang=s2[1];
  var s3=useState('A');var selGroup=s3[0];var setSelGroup=s3[1];
  var s4=useState(false);var premium=s4[0];var setPremium=s4[1];
  var s5=useState(false);var shareCopied=s5[0];var setShareCopied=s5[1];
  var s6=useState('');var winner=s6[0];var setWinner=s6[1];
  var s7=useState('');var finalist=s7[0];var setFinalist=s7[1];
  var s8=useState('');var semi1=s8[0];var setSemi1=s8[1];
  var s9=useState('');var semi2=s9[0];var setSemi2=s9[1];
  var s10=useState(false);var pronoSaved=s10[0];var setPronoSaved=s10[1];
  var s11=useState(0);var qIdx=s11[0];var setQIdx=s11[1];
  var s12=useState(null);var selected=s12[0];var setSelected=s12[1];
  var s13=useState(0);var score=s13[0];var setScore=s13[1];
  var s14=useState(false);var quizDone=s14[0];var setQuizDone=s14[1];
  var s15=useState(false);var answered=s15[0];var setAnswered=s15[1];
  var s16=useState({});var pollVotes=s16[0];var setPollVotes=s16[1];
  var s17=useState({});var pollCounts=s17[0];var setPollCounts=s17[1];
  var s18=useState({days:0,hours:0,minutes:0,seconds:0});var cd=s18[0];var setCd=s18[1];
  var s19=useState(null);var myTeam=s19[0];var setMyTeam=s19[1];
  var s20=useState(false);var fixtureMyOnly=s20[0];var setFixtureMyOnly=s20[1];
  var s21=useState(false);var showPickTeam=s21[0];var setShowPickTeam=s21[1];

  var sA=useState('');var manTeam1=sA[0];var setManTeam1=sA[1];
  var sB=useState('');var manTeam2=sB[0];var setManTeam2=sB[1];
  var sC=useState(null);var manResult=sC[0];var setManResult=sC[1];
  var s27=useState(null);var tournament=s27[0];var setTournament=s27[1];
  var sG1=useState('idle');var gamePhase=sG1[0];var setGamePhase=sG1[1];
  var sG2=useState(0);var gameScore=sG2[0];var setGameScore=sG2[1];
  var sG3=useState(0);var gameMiss=sG3[0];var setGameMiss=sG3[1];
  var sG4=useState(null);var shotDir=sG4[0];var setShotDir=sG4[1];
  var sG5=useState(null);var keeperDir=sG5[0];var setKeeperDir=sG5[1];
  var sG6=useState(null);var shotResult=sG6[0];var setShotResult=sG6[1];
  var sG7=useState(5);var shotsLeft=sG7[0];var setShotsLeft=sG7[1];
  var sG8=useState([]);var shotHistory=sG8[0];var setShotHistory=sG8[1];
  var sG9=useState(3);var timer=sG9[0];var setTimer=sG9[1];
  var sG10=useState(0);var combo=sG10[0];var setCombo=sG10[1];
  var sG11=useState(null);var timerRef=sG11[0];var setTimerRef=sG11[1];
  var sQ1=useState(0);var qcIdx=sQ1[0];var setQcIdx=sQ1[1];
  var sQ2=useState(0);var qcScore=sQ2[0];var setQcScore=sQ2[1];
  var sQ3=useState(null);var qcSelected=sQ3[0];var setQcSelected=sQ3[1];
  var sQ4=useState(false);var qcAnswered=sQ4[0];var setQcAnswered=sQ4[1];
  var sQ5=useState(false);var qcDone=sQ5[0];var setQcDone=sQ5[1];
  var sQ6=useState(1);var qcRound=sQ6[0];var setQcRound=sQ6[1];
  var sQ7=useState(null);var qcOpponent=sQ7[0];var setQcOpponent=sQ7[1];
  var sQ8=useState('idle');var qcPhase=sQ8[0];var setQcPhase=sQ8[1];
  var sQ9=useState([]);var leaderboard=sQ9[0];var setLeaderboard=sQ9[1];
  var sQ10=useState('');var playerName=sQ10[0];var setPlayerName=sQ10[1];
  var sQ11=useState(false);var showLeaderboard=sQ11[0];var setShowLeaderboard=sQ11[1];
  var sP1=useState(0);var proTab=sP1[0];var setProTab=sP1[1];
  var sLive=useState([]);var liveScores=sLive[0];var setLiveScores=sLive[1];
  var sLiveLoad=useState(false);var liveLoading=sLiveLoad[0];var setLiveLoading=sLiveLoad[1];
  var sStand=useState([]);var standings=sStand[0];var setStandings=sStand[1];
  var sP2=useState(null);var selectedStadium=sP2[0];var setSelectedStadium=sP2[1];
  var sP3=useState(null);var selectedLegend=sP3[0];var setSelectedLegend=sP3[1];
  var sP4=useState('');var favTeam=sP4[0];var setFavTeam=sP4[1];
  var sP5=useState(null);var compareTeam1=sP5[0];var setCompareTeam1=sP5[1];
  var sP6=useState(null);var compareTeam2=sP6[0];var setCompareTeam2=sP6[1];
  var sF1=useState([]);var fantasyTeam=sF1[0];var setFantasyTeam=sF1[1];
  var sF2=useState(null);var fantasyPos=sF2[0];var setFantasyPos=sF2[1];
  var sF3=useState(false);var fantasyDone=sF3[0];var setFantasyDone=sF3[1];
  var sM1=useState({});var predictions=sM1[0];var setPredictions=sM1[1];
  var sM2=useState(false);var predSaved=sM2[0];var setPredSaved=sM2[1];
  // Interactive tournament state
  var s30=useState('idle');var iPhase=s30[0];var setIPhase=s30[1]; // idle|groups|r32|r16|qf|sf|final|done
  var s31=useState({});var iGroupStandings=s31[0];var setIGroupStandings=s31[1];
  var s32=useState([]);var iMatches=s32[0];var setIMatches=s32[1];
  var s33=useState(null);var iChampion=s33[0];var setIChampion=s33[1];
  var s34=useState('A');var iSelGroup=s34[0];var setISelGroup=s34[1];
  var s28=useState(false);var tournLoading=s28[0];var setTournLoading=s28[1];
  var s29=useState('bracket');var simView=s29[0];var setSimView=s29[1];

  var t=T[lang];
  var defaultTeam=MY_TEAM[lang];
  var activeTeam=myTeam||defaultTeam;
  var filteredFixtures=fixtureMyOnly?FIXTURES.filter(function(f){return f.home===activeTeam.team||f.away===activeTeam.team;}):FIXTURES;
  var questions=QUIZ[lang];
  var polls=POLLS[lang];
  var sponsors=SPONSORS[lang];

  useEffect(function(){
    function calc(){
      var d=new Date('2026-06-11T20:00:00')-new Date();
      if(d<=0){setCd({days:0,hours:0,minutes:0,seconds:0});return;}
      setCd({days:Math.floor(d/86400000),hours:Math.floor((d%86400000)/3600000),minutes:Math.floor((d%3600000)/60000),seconds:Math.floor((d%60000)/1000)});
    }
    calc();var id=setInterval(calc,1000);return function(){clearInterval(id);};
  },[]);

  useEffect(function(){
    if('serviceWorker' in navigator){navigator.serviceWorker.register('/sw.js').catch(function(){});}
  },[]);

  // OneSignal push notifications
  useEffect(function(){
    if(typeof window!=='undefined'&&window.OneSignal){
      window.OneSignal.init({appId:ONESIGNAL_APP_ID,allowLocalhostAsSecureOrigin:true});
    }
  },[]);

  // Fetch live scores
  function fetchLiveScores(){
    setLiveLoading(true);
    fetch('https://api.football-data.org/v4/competitions/'+WC2026_ID+'/matches?status=IN_PLAY,PAUSED,LIVE',{
      headers:{'X-Auth-Token':FDATA_KEY}
    })
    .then(function(r){return r.json();})
    .then(function(data){
      if(data.matches&&data.matches.length>0){
        setLiveScores(data.matches);
      } else {
        var today=new Date().toISOString().split('T')[0];
        fetch('https://api.football-data.org/v4/competitions/'+WC2026_ID+'/matches?dateFrom='+today+'&dateTo='+today,{
          headers:{'X-Auth-Token':FDATA_KEY}
        })
        .then(function(r){return r.json();})
        .then(function(d){if(d.matches)setLiveScores(d.matches);setLiveLoading(false);})
        .catch(function(){setLiveLoading(false);});
        return;
      }
      setLiveLoading(false);
    })
    .catch(function(){setLiveLoading(false);});
  }

  // Fetch standings
  function fetchStandings(){
    fetch('https://api.football-data.org/v4/competitions/'+WC2026_ID+'/standings',{
      headers:{'X-Auth-Token':FDATA_KEY}
    })
    .then(function(r){return r.json();})
    .then(function(data){if(data.standings)setStandings(data.standings);})
    .catch(function(){});
  }

  // Auto-fetch every 60s live, every 5min standings
  useEffect(function(){
    fetchLiveScores();
    fetchStandings();
    var i1=setInterval(fetchLiveScores,60000);
    var i2=setInterval(fetchStandings,300000);
    return function(){clearInterval(i1);clearInterval(i2);};
  },[]);

  // Reset game when switching tabs
  useEffect(function(){
    if(tab!==8){
      setGamePhase('idle');
      setShotDir(null);setKeeperDir(null);setShotResult(null);
      setShotsLeft(5);setShotHistory([]);setCombo(0);setTimer(3);
      if(timerRef){clearInterval(timerRef);setTimerRef(null);}
    }
  },[tab]);

  function changeLang(code){setLang(code);setQIdx(0);setSelected(null);setScore(0);setQuizDone(false);setAnswered(false);setMyTeam(null);}
  function handleAnswer(i){if(answered)return;setSelected(i);setAnswered(true);if(i===questions[qIdx].a)setScore(function(s){return s+1;});}
  function nextQ(){if(qIdx<questions.length-1){setQIdx(function(q){return q+1;});setSelected(null);setAnswered(false);}else setQuizDone(true);}
  function resetQuiz(){setQIdx(0);setSelected(null);setScore(0);setQuizDone(false);setAnswered(false);}
  function getMsg(sc){if(sc===questions.length)return t.quizPerfect;if(sc>=questions.length*0.7)return t.quizGood;if(sc>=questions.length*0.4)return t.quizAvg;return t.quizBad;}
  function handleVote(pid,oi,votes){if(pollVotes[pid]!==undefined)return;var nc=Object.assign({},pollCounts);nc[pid]=votes.map(function(v,i){return i===oi?v+1:v;});setPollCounts(nc);var nv=Object.assign({},pollVotes);nv[pid]=oi;setPollVotes(nv);}
  function getPV(pid,dv){return pollCounts[pid]||dv;}
  function savePronto(){setPronoSaved(true);setTimeout(function(){setPronoSaved(false);},2000);}
  function handleShare(){if(navigator.share){navigator.share({title:'World Cup 2026',url:window.location.href});}else if(navigator.clipboard){navigator.clipboard.writeText(window.location.href);setShareCopied(true);setTimeout(function(){setShareCopied(false);},2000);}}
  function pad(n){return String(n||0).padStart(2,'0');}

  function formatFullDate(dateStr,langCode){
    if(!dateStr)return '';
    var dt=new Date(dateStr+'T12:00:00');
    var days={
      en:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
      fr:['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
      es:['Dom','Lun','Mar','Mie','Jue','Vie','Sab'],
      pt:['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
      it:['Dom','Lun','Mar','Mer','Gio','Ven','Sab'],
      de:['So','Mo','Di','Mi','Do','Fr','Sa']
    };
    var months={
      en:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      fr:['Jan','Fev','Mar','Avr','Mai','Juin','Juil','Aout','Sep','Oct','Nov','Dec'],
      es:['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
      pt:['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
      it:['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'],
      de:['Jan','Feb','Mar','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez']
    };
    var d=days[langCode]||days['en'];
    var m=months[langCode]||months['en'];
    return d[dt.getDay()]+' '+dt.getDate()+' '+m[dt.getMonth()];
  }

  // - MANUAL SIMULATOR -
  function runManual(){
    if(!manTeam1||!manTeam2)return;
    var s1=getStrength(manTeam1);
    var s2=getStrength(manTeam2);
    function g(str){
      var r=Math.random();
      if(r<0.15)return 0;
      if(r<0.38)return 1;
      if(r<0.62)return 2;
      if(r<0.78)return 3;
      if(r<0.90)return 4;
      return 5;
    }
    var g1=g(s1);var g2=g(s2);
    // slight advantage to stronger team
    var rand=Math.random();
    if(rand<0.22&&Math.abs(g1-g2)===1){if(g1>g2)g2=g1;else g1=g2;}
    var winner=g1>g2?manTeam1:g2>g1?manTeam2:null;
    var poss1=Math.round(40+(s1-s2)*0.35+Math.random()*10);
    poss1=Math.max(35,Math.min(65,poss1));
    setManResult({team1:manTeam1,team2:manTeam2,g1:g1,g2:g2,winner:winner,poss1:poss1,poss2:100-poss1,str1:s1,str2:s2});
  }

  // - INTERACTIVE TOURNAMENT -
  function initInteractive(){
    // Build all group matches
    var matches=[];
    Object.entries(GROUPS).forEach(function(entry){
      var g=entry[0];var data=entry[1];var teams=data.teams;
      for(var i=0;i<teams.length;i++){
        for(var j=i+1;j<teams.length;j++){
          matches.push({id:g+i+j,phase:'group',group:g,home:teams[i],away:teams[j],goalsHome:null,goalsAway:null,played:false});
        }
      }
    });
    setIMatches(matches);
    setIGroupStandings({});
    setIPhase('groups');
    setIChampion(null);
    setISelGroup('A');
  }

  function setMatchScore(matchId, gh, ga){
    setIMatches(function(prev){
      var updated=prev.map(function(m){
        if(m.id!==matchId)return m;
        return Object.assign({},m,{goalsHome:gh,goalsAway:ga,played:true});
      });
      // Recalculate group standings from played matches
      var standings={};
      Object.keys(GROUPS).forEach(function(g){
        var pts={};var gd={};var gf={};
        GROUPS[g].teams.forEach(function(t){pts[t]=0;gd[t]=0;gf[t]=0;});
        updated.filter(function(m){return m.group===g&&m.played;}).forEach(function(m){
          var diff=m.goalsHome-m.goalsAway;
          gf[m.home]+=m.goalsHome;gf[m.away]+=m.goalsAway;
          gd[m.home]+=diff;gd[m.away]-=diff;
          if(diff>0){pts[m.home]+=3;}
          else if(diff<0){pts[m.away]+=3;}
          else{pts[m.home]+=1;pts[m.away]+=1;}
        });
        var sorted=GROUPS[g].teams.slice().sort(function(a,b){
          if(pts[b]!==pts[a])return pts[b]-pts[a];
          if(gd[b]!==gd[a])return gd[b]-gd[a];
          return gf[b]-gf[a];
        });
        standings[g]={teams:sorted,pts:pts,gd:gd,gf:gf};
      });
      setIGroupStandings(standings);
      return updated;
    });
  }

  function quickSimGroup(g){
    setIMatches(function(prev){
      var updated=prev.map(function(m){
        if(m.group!==g||m.played)return m;
        var s1=getStrength(m.home);var s2=getStrength(m.away);
        function rg(s){var r=Math.random();if(r<0.18)return 0;if(r<0.42)return 1;if(r<0.65)return 2;if(r<0.82)return 3;if(r<0.93)return 4;return 5;}
        var gh=rg(s1);var ga=rg(s2);
        return Object.assign({},m,{goalsHome:gh,goalsAway:ga,played:true});
      });
      // Recalc standings
      var standings={};
      Object.keys(GROUPS).forEach(function(g2){
        var pts={};var gd={};var gf={};
        GROUPS[g2].teams.forEach(function(t){pts[t]=0;gd[t]=0;gf[t]=0;});
        updated.filter(function(m){return m.group===g2&&m.played;}).forEach(function(m){
          var diff=m.goalsHome-m.goalsAway;
          gf[m.home]+=m.goalsHome;gf[m.away]+=m.goalsAway;
          gd[m.home]+=diff;gd[m.away]-=diff;
          if(diff>0)pts[m.home]+=3;
          else if(diff<0)pts[m.away]+=3;
          else{pts[m.home]+=1;pts[m.away]+=1;}
        });
        var sorted=GROUPS[g2].teams.slice().sort(function(a,b){
          if(pts[b]!==pts[a])return pts[b]-pts[a];
          return gd[b]-gd[a];
        });
        standings[g2]={teams:sorted,pts:pts,gd:gd,gf:gf};
      });
      setIGroupStandings(standings);
      return updated;
    });
  }

  function allGroupsComplete(matches){
    return Object.keys(GROUPS).every(function(g){
      return matches.filter(function(m){return m.group===g;}).every(function(m){return m.played;});
    });
  }

  function buildKnockout(standings, phase){
    if(phase!=='r32')return [];
    // - OFFICIAL FIFA 2026 ROUND OF 32 BRACKET -
    // Source: ESPN / FIFA official schedule
    // Best 8 third-place teams - ranked by pts, gd, gf
    var allThirds=Object.entries(standings).map(function(e){
      var g=e[0];var s=e[1];var t=s.teams[2];
      return {team:t,group:g,pts:s.pts[t]||0,gd:s.gd[t]||0,gf:s.gf[t]||0};
    }).sort(function(a,b){
      if(b.pts!==a.pts)return b.pts-a.pts;
      if(b.gd!==a.gd)return b.gd-a.gd;
      return b.gf-a.gf;
    });
    var best8thirds=allThirds.slice(0,8).map(function(x){return x.team;});
    function w(g){return standings[g]?standings[g].teams[0]:'TBD';}
    function ru(g){return standings[g]?standings[g].teams[1]:'TBD';}
    function t3(i){return best8thirds[i]||'TBD';}

    // Official R32 matchups per FIFA/ESPN:
    var pairs=[
      // Match 73: 2nd A vs 2nd B
      {home:ru('A'),away:ru('B'),label:'2nd A vs 2nd B'},
      // Match 74: 1st E vs Best 3rd (A/B/C/D/F)
      {home:w('E'),away:t3(0),label:'1st E vs Best 3rd'},
      // Match 75: 1st F vs 2nd C
      {home:w('F'),away:ru('C'),label:'1st F vs 2nd C'},
      // Match 76: 1st C vs 2nd F
      {home:w('C'),away:ru('F'),label:'1st C vs 2nd F'},
      // Match 77: 1st I vs Best 3rd (C/D/F/G/H)
      {home:w('I'),away:t3(1),label:'1st I vs Best 3rd'},
      // Match 78: 2nd E vs 2nd I
      {home:ru('E'),away:ru('I'),label:'2nd E vs 2nd I'},
      // Match 79: 1st A vs Best 3rd (C/E/F/H/I)
      {home:w('A'),away:t3(2),label:'1st A vs Best 3rd'},
      // Match 80: 1st L vs Best 3rd (E/H/I/J/K)
      {home:w('L'),away:t3(3),label:'1st L vs Best 3rd'},
      // Match 81: 1st D vs Best 3rd (B/E/F/I/J)
      {home:w('D'),away:t3(4),label:'1st D vs Best 3rd'},
      // Match 82: 1st G vs Best 3rd (A/E/H/I/J)
      {home:w('G'),away:t3(5),label:'1st G vs Best 3rd'},
      // Match 83: 2nd K vs 2nd L
      {home:ru('K'),away:ru('L'),label:'2nd K vs 2nd L'},
      // Match 84: 1st H vs 2nd J
      {home:w('H'),away:ru('J'),label:'1st H vs 2nd J'},
      // Match 85: 1st B vs Best 3rd (E/F/G/I/J)
      {home:w('B'),away:t3(6),label:'1st B vs Best 3rd'},
      // Match 86: 1st J vs 2nd H
      {home:w('J'),away:ru('H'),label:'1st J vs 2nd H'},
      // Match 87: 1st K vs Best 3rd (D/E/I/J/L)
      {home:w('K'),away:t3(7),label:'1st K vs Best 3rd'},
      // Match 88: 2nd D vs 2nd G
      {home:ru('D'),away:ru('G'),label:'2nd D vs 2nd G'},
    ];
    return pairs.map(function(p,i){
      return {id:'r32_'+i,phase:'r32',home:p.home,away:p.away,label:p.label,played:false,goalsHome:null,goalsAway:null};
    });
  }

  function progressToNextPhase(currentMatches, nextPhase){
    var winners=currentMatches.filter(function(m){return m.played;}).map(function(m){
      if(m.goalsHome>m.goalsAway)return m.home;
      if(m.goalsAway>m.goalsHome)return m.away;
      // Draw - penalty shootout simulation
      return Math.random()>0.5?m.home:m.away;
    });
    var newMatches=[];
    for(var i=0;i<winners.length;i+=2){
      if(winners[i]&&winners[i+1]){
        newMatches.push({id:nextPhase+i,phase:nextPhase,home:winners[i],away:winners[i+1],played:false,goalsHome:null,goalsAway:null});
      }
    }
    return newMatches;
  }

  function advancePhase(){
    if(iPhase==='groups'){
      // Build R32 from group standings
      var r32=buildKnockout(iGroupStandings,'r32');
      setIMatches(r32);
      setIPhase('r32');
    } else {
      var phases={'r32':'r16','r16':'qf','qf':'sf','sf':'final'};
      var next=phases[iPhase];
      if(next==='final'){
        var sf=iMatches.filter(function(m){return m.phase==='sf';});
        var finalists=sf.map(function(m){return m.goalsHome>=m.goalsAway?m.home:m.away;});
        if(finalists.length>=2){
          setIMatches([{id:'final0',phase:'final',home:finalists[0],away:finalists[1],played:false,goalsHome:null,goalsAway:null}]);
          setIPhase('final');
        }
      } else if(next){
        var newM=progressToNextPhase(iMatches,next);
        setIMatches(newM);
        setIPhase(next);
      } else if(iPhase==='final'){
        var fin=iMatches[0];
        var champ=fin.goalsHome>=fin.goalsAway?fin.home:fin.away;
        setIChampion(champ);
        setIPhase('done');
      }
    }
  }

  function quickSimPhase(){
    setIMatches(function(prev){
      return prev.map(function(m){
        if(m.played)return m;
        var s1=getStrength(m.home);var s2=getStrength(m.away);
        function rg(){var r=Math.random();if(r<0.2)return 0;if(r<0.45)return 1;if(r<0.68)return 2;if(r<0.84)return 3;return r<0.93?4:5;}
        var gh=rg();var ga=rg();
        if(gh===ga){if(Math.random()<0.5)gh++;else ga++;}
        return Object.assign({},m,{goalsHome:gh,goalsAway:ga,played:true});
      });
    });
  }

  // - TOURNAMENT SIMULATOR -
  function simMatch(teamA, teamB){
    var sA=getStrength(teamA);
    var sB=getStrength(teamB);
    var total=sA+sB;
    var rand=Math.random()*total;
    // Add randomness factor (upsets happen!)
    var upset=Math.random()<0.18;
    if(upset){var tmp=sA;sA=sB;sB=tmp;}
    rand=Math.random()*total;
    var winner=rand<sA?teamA:teamB;
    // Generate score
    function g(str){
      var r=Math.random();
      if(r<0.15)return 0;
      if(r<0.38)return 1;
      if(r<0.62)return 2;
      if(r<0.80)return 3;
      if(r<0.92)return 4;
      return 5;
    }
    var gW=g(getStrength(winner));
    var gL=g(getStrength(winner===teamA?teamB:teamA));
    if(gW<=gL)gW=gL+1;
    return {
      home:teamA,away:teamB,
      goalsHome:winner===teamA?gW:gL,
      goalsAway:winner===teamA?gL:gW,
      winner:winner
    };
  }

  function runTournament(){
    setTournLoading(true);
    setTournament(null);

    setTimeout(function(){
      // GROUP STAGE - determine group winners and runners-up
      var groupResults={};
      Object.entries(GROUPS).forEach(function(entry){
        var g=entry[0];var data=entry[1];
        var teams=data.teams.slice();
        var points={};var gd={};
        teams.forEach(function(t){points[t]=0;gd[t]=0;});

        // Play 6 group matches
        var matches=[];
        for(var i=0;i<teams.length;i++){
          for(var j=i+1;j<teams.length;j++){
            var m=simMatch(teams[i],teams[j]);
            matches.push(m);
            var diff=m.goalsHome-m.goalsAway;
            if(diff>0){points[teams[i]]+=3;gd[teams[i]]+=diff;gd[teams[j]]-=diff;}
            else if(diff<0){points[teams[j]]+=3;gd[teams[j]]-=diff;gd[teams[i]]+=diff;}
            else{points[teams[i]]+=1;points[teams[j]]+=1;}
          }
        }

        // Sort by points then GD
        var sorted=teams.slice().sort(function(a,b){
          if(points[b]!==points[a])return points[b]-points[a];
          return gd[b]-gd[a];
        });

        groupResults[g]={
          teams:sorted,
          points:points,
          gd:gd,
          matches:matches,
          winner:sorted[0],
          runnerUp:sorted[1],
          third:sorted[2]
        };
      });

      // Best 8 third-placed teams
      var thirds=Object.values(groupResults).map(function(gr){
        return {team:gr.third,pts:gr.points[gr.third],gd:gr.gd[gr.third]};
      }).sort(function(a,b){
        if(b.pts!==a.pts)return b.pts-a.pts;
        return b.gd-a.gd;
      }).slice(0,8).map(function(x){return x.team;});

      // Round of 32 - 16 matches
      var r32Teams=[
        groupResults['A'].winner,groupResults['B'].runnerUp,
        groupResults['C'].winner,groupResults['D'].runnerUp,
        groupResults['E'].winner,groupResults['F'].runnerUp,
        groupResults['G'].winner,groupResults['H'].runnerUp,
        groupResults['I'].winner,groupResults['J'].runnerUp,
        groupResults['K'].winner,groupResults['L'].runnerUp,
        groupResults['A'].runnerUp,groupResults['B'].winner,
        groupResults['C'].runnerUp,groupResults['D'].winner,
        groupResults['E'].runnerUp,groupResults['F'].winner,
        groupResults['G'].runnerUp,groupResults['H'].winner,
        groupResults['I'].runnerUp,groupResults['J'].winner,
        groupResults['K'].runnerUp,groupResults['L'].winner,
        thirds[0],thirds[1],thirds[2],thirds[3],
        thirds[4],thirds[5],thirds[6],thirds[7]
      ];

      // Ensure we have 32 teams
      while(r32Teams.length<32)r32Teams.push('TBD');
      var r32Matches=[];
      for(var i=0;i<32;i+=2){
        r32Matches.push(simMatch(r32Teams[i],r32Teams[i+1]));
      }
      var r16Teams=r32Matches.map(function(m){return m.winner;});

      // Round of 16
      var r16Matches=[];
      for(var i=0;i<16;i+=2){
        r16Matches.push(simMatch(r16Teams[i],r16Teams[i+1]));
      }
      var qfTeams=r16Matches.map(function(m){return m.winner;});

      // Quarter Finals
      var qfMatches=[];
      for(var i=0;i<8;i+=2){
        qfMatches.push(simMatch(qfTeams[i],qfTeams[i+1]));
      }
      var sfTeams=qfMatches.map(function(m){return m.winner;});
      var sfLosers=qfMatches.map(function(m){return m.home===m.winner?m.away:m.home;});

      // Semi Finals
      var sfMatches=[
        simMatch(sfTeams[0],sfTeams[1]),
        simMatch(sfTeams[2],sfTeams[3])
      ];
      var finalists=sfMatches.map(function(m){return m.winner;});
      var thirdPlaceTeams=[
        sfMatches[0].home===sfMatches[0].winner?sfMatches[0].away:sfMatches[0].home,
        sfMatches[1].home===sfMatches[1].winner?sfMatches[1].away:sfMatches[1].home
      ];

      // 3rd Place + Final
      var thirdMatch=simMatch(thirdPlaceTeams[0],thirdPlaceTeams[1]);
      var finalMatch=simMatch(finalists[0],finalists[1]);

      setTournament({
        groups:groupResults,
        r32:r32Matches,
        r16:r16Matches,
        qf:qfMatches,
        sf:sfMatches,
        thirdPlace:thirdMatch,
        final:finalMatch,
        champion:finalMatch.winner,
        runnerUp:finalMatch.home===finalMatch.winner?finalMatch.away:finalMatch.home,
        third:thirdMatch.winner
      });
      setTournLoading(false);
    }, 800);
  }

  // - AI MATCH SIMULATOR -

  function shootPenalty(dir){
    if(gamePhase!=='shooting')return;
    if(timerRef){clearInterval(timerRef);setTimerRef(null);}
    setTimer(3);setGamePhase('animating');setShotDir(dir);
    setShotHistory(function(hist){
      var dirs=['left','center','right'];var kDir;
      if(hist.length>=2){
        var counts={left:0,center:0,right:0};
        hist.forEach(function(h){counts[h.dir]++;});
        var maxDir=Object.keys(counts).reduce(function(a,b){return counts[a]>counts[b]?a:b;});
        kDir=Math.random()<0.6?maxDir:dirs[Math.floor(Math.random()*3)];
      } else {kDir=dirs[Math.floor(Math.random()*3)];}
      setKeeperDir(kDir);
      var scored=dir!==kDir||(dir==='center'&&Math.random()<0.2);
      setTimeout(function(){
        setShotResult(scored?'goal':'saved');
        if(scored){setGameScore(function(s){return s+1;});setCombo(function(c){return c+1;});}
        else{setGameMiss(function(m){return m+1;});setCombo(0);}
        setShotsLeft(function(s){return s-1;});
        setTimeout(function(){
          setShotsLeft(function(s){
            if(s<=0)setGamePhase('done');
            else{setGamePhase('shooting');setTimer(3);}
            return s;
          });
          setShotDir(null);setKeeperDir(null);setShotResult(null);
        },1300);
      },700);
      return hist.concat([{dir:dir,scored:scored}]);
    });
  }
  function resetGame(){
    if(timerRef){clearInterval(timerRef);setTimerRef(null);}
    setGamePhase('idle');setGameScore(0);setGameMiss(0);
    setShotDir(null);setKeeperDir(null);setShotResult(null);
    setShotsLeft(5);setShotHistory([]);setCombo(0);setTimer(3);
  }
  function formatDate(d){var dt=new Date(d+'T12:00:00');return dt.toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'});}

  return e('div',{style:{minHeight:'100vh',background:'linear-gradient(160deg,'+DARK+',#0c1e44 50%,'+DARK+')',fontFamily:"'Open Sans',sans-serif",color:'#eee8d5'}},

    e('header',{style:{background:'linear-gradient(90deg,#060f24,#122860,#060f24)',borderBottom:'2px solid '+G,padding:'10px 14px'}},
      e('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}},
        e('div',{style:{display:'flex',gap:4}},
          LANGS.map(function(l){return e('button',{key:l.code,onClick:function(){changeLang(l.code);},style:{background:lang===l.code?'linear-gradient(135deg,'+G+',#b8963e)':'rgba(255,255,255,0.07)',border:lang===l.code?'none':'1px solid rgba(212,175,55,0.28)',borderRadius:7,padding:'3px 8px',cursor:'pointer',color:lang===l.code?'#0a0a1a':'#9bb0c8',fontSize:11,fontWeight:lang===l.code?'bold':'normal'}},l.label);})
        ),
        e('div',{style:{display:'flex',gap:6,alignItems:'center'}},
          e('button',{onClick:handleShare,style:{background:'rgba(255,255,255,0.07)',border:'1px solid rgba(212,175,55,0.28)',borderRadius:7,padding:'3px 10px',cursor:'pointer',color:'#9bb0c8',fontSize:11}},shareCopied?t.shareCopied:t.shareApp),
          !premium&&e('a',{href:getStripeLink(lang),target:'_blank',rel:'noopener',style:{background:'linear-gradient(135deg,'+G+',#ff9900)',border:'none',borderRadius:7,padding:'4px 10px',cursor:'pointer',color:'#0a0a1a',fontSize:11,fontWeight:'bold',textDecoration:'none',display:'inline-block'}},'PRO - '+getPrice(lang)),
          premium&&e('span',{style:{fontSize:11,color:G,fontWeight:'bold'}},'PRO')
        )
      ),
      e('div',{style:{textAlign:'center'}},
        e('div',{style:{fontSize:24}},'⚽'),
        e('div',{style:{fontSize:18,fontWeight:'bold',letterSpacing:3,textTransform:'uppercase',background:'linear-gradient(90deg,'+G+',#fff8e0,'+G+')',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}},t.appTitle),
        e('div',{style:{fontSize:10,color:'#7a96b0',letterSpacing:4,marginTop:2}},t.appSub)
      )
    ),

    !premium&&e('div',{style:{background:'linear-gradient(90deg,#1a1000,#3a2800,#1a1000)',borderBottom:'1px solid rgba(212,175,55,0.3)',padding:'7px 14px',display:'flex',justifyContent:'space-between',alignItems:'center',gap:8}},
      e('span',{style:{fontSize:11,color:G,flexShrink:1}},t.premiumBanner),
      e('a',{href:getStripeLink(lang),target:'_blank',rel:'noopener',style:{background:'linear-gradient(135deg,'+G+',#b8963e)',border:'none',borderRadius:8,padding:'5px 11px',fontSize:11,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer',whiteSpace:'nowrap',textDecoration:'none',display:'inline-block'}},t.premiumBtn+' - '+getPrice(lang))
    ),

    e('nav',{style:{position:'sticky',top:0,zIndex:20,background:'rgba(6,9,26,0.97)',backdropFilter:'blur(14px)',borderBottom:'2px solid rgba(212,175,55,0.2)',overflowX:'auto',WebkitOverflowScrolling:'touch',scrollbarWidth:'none'}},
      e('div',{id:'wc-nav-inner',style:{display:'flex',gap:4,padding:'8px 10px'}},
        t.nav.map(function(label,i){
          var TM=[
            {icon:'🏠',c1:'#1565c0',c2:'#42a5f5'},
            {icon:'🏆',c1:'#bf360c',c2:'#ff7043'},
            {icon:'📅',c1:'#1b5e20',c2:'#66bb6a'},
            {icon:'🎯',c1:'#b71c1c',c2:'#ef5350'},
            {icon:'🧠',c1:'#4a148c',c2:'#ab47bc'},
            {icon:'⚽',c1:'#01579b',c2:'#29b6f6'},
            {icon:'📊',c1:'#004d40',c2:'#26a69a'},
            {icon:'🎮',c1:'#880e4f',c2:'#f06292'},
            {icon:'🥅',c1:'#263238',c2:'#78909c'},
            {icon:'💫',c1:'#e65100',c2:'#ffd54f'},
            {icon:'👑',c1:'#7b5e00',c2:'#d4af37'}
          ];
          var m=TM[i]||{icon:'⚽',c1:'#333',c2:'#555'};
          var on=tab===i;
          return e('button',{key:i,onClick:function(){setTab(i);},style:{
            background:on?'linear-gradient(135deg,'+m.c1+','+m.c2+')':'rgba(255,255,255,0.05)',
            color:on?'#fff':'#6a86a0',
            border:'1px solid '+(on?m.c2:'rgba(255,255,255,0.08)'),
            borderRadius:10,padding:'7px 10px 6px',fontSize:9,cursor:'pointer',
            fontWeight:on?'bold':'normal',display:'flex',flexDirection:'column',
            alignItems:'center',gap:3,minWidth:50,
            transform:on?'scale(1.07)':'scale(1)',transition:'all 0.18s ease'
          }},
            e('span',{style:{fontSize:15}},m.icon),
            e('span',null,label)
          );
        })
      )
    ),

    e('main',{style:{padding:'16px 13px',maxWidth:740,margin:'0 auto'}},

      // - HOME -
      tab===0?e('div',null,
        // Pick your team banner
        e('div',{style:{background:'linear-gradient(135deg,rgba(212,175,55,0.15),rgba(184,150,62,0.08))',border:'1px solid '+G,borderRadius:14,padding:'12px 16px',marginBottom:13,display:'flex',justifyContent:'space-between',alignItems:'center'}},
          e('div',null,
            e('div',{style:{fontSize:10,color:'#6a86a0',marginBottom:3}},t.myTeamLabel),
            e('div',{style:{fontSize:16,fontWeight:'bold'}},activeTeam.flag,' ',activeTeam.team,activeTeam.group&&e('span',{style:{fontSize:11,color:G,marginLeft:8}},'Groupe ',activeTeam.group))
          ),
          e('button',{onClick:function(){setShowPickTeam(function(v){return !v;});},style:{background:'linear-gradient(135deg,'+G+',#b8963e)',border:'none',borderRadius:9,padding:'7px 14px',fontSize:11,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer'}},t.pickTeam)
        ),

        // Pick team modal
        showPickTeam&&e('div',{style:{background:CB,border:'1px solid '+G,borderRadius:14,padding:14,marginBottom:13}},
          e('div',{style:{fontSize:12,color:G,fontWeight:'bold',marginBottom:10}},'🌍 '+t.pickTeam),
          e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6,maxHeight:200,overflowY:'auto'}},
            ALL_TEAMS.map(function(team){
              var grp=null;
              Object.entries(GROUPS).forEach(function(entry){if(entry[1].teams.indexOf(team)>=0)grp=entry[0];});
              return e('button',{key:team,onClick:function(){setMyTeam({team:team,group:grp,flag:'⚽',color:'rgba(212,175,55,0.2)'});setShowPickTeam(false);},style:{background:activeTeam.team===team?'rgba(212,175,55,0.2)':CB,border:'1px solid '+(activeTeam.team===team?G:BD),borderRadius:9,padding:'7px 10px',fontSize:11,color:'#eee8d5',cursor:'pointer',textAlign:'left'}},
                tn(team,lang),grp&&e('span',{style:{fontSize:9,color:G,marginLeft:4}},'('+grp+')')
              );
            })
          )
        ),

        // Countdown
        e('div',{style:{background:'linear-gradient(135deg,rgba(10,22,54,0.97),rgba(18,45,110,0.92))',border:'1.5px solid '+G,borderRadius:18,padding:'20px 16px',textAlign:'center',marginBottom:15}},
          e('div',{style:{fontSize:10,color:G,letterSpacing:3,marginBottom:12,textTransform:'uppercase'}},t.countdown),
          e('div',{style:{display:'flex',justifyContent:'center',gap:10}},
            [cd.days,cd.hours,cd.minutes,cd.seconds].map(function(v,i){return e('div',{key:i,style:{textAlign:'center'}},e('div',{style:{background:'linear-gradient(160deg,'+G+',#b8963e)',borderRadius:10,padding:'9px 11px',fontSize:22,fontWeight:'bold',color:'#0a0a1a',minWidth:44}},pad(v)),e('div',{style:{fontSize:9,color:'#6a86a0',marginTop:4}},t.timeUnits[i]));})
          )
        ),

        // TV Channels info card
        e(Card,{style:{marginBottom:13,padding:'12px 14px'}},
          e('div',{style:{display:'flex',alignItems:'center',gap:8,marginBottom:8}},
            e('div',{style:{fontSize:16}},'📺'),
            e('div',{style:{fontSize:12,fontWeight:'bold',color:G}},
              lang==='fr'?'Ou regarder la Coupe du Monde 2026':
              lang==='es'?'Donde ver la Copa del Mundo 2026':
              lang==='pt'?'Onde assistir a Copa do Mundo 2026':
              lang==='it'?'Dove guardare la Coppa del Mondo 2026':
              lang==='de'?'Wo die WM 2026 sehen':
              'Where to Watch World Cup 2026'
            )
          ),
          e('div',{style:{display:'flex',gap:8,flexWrap:'wrap',marginBottom:6}},
            getTVInfo(lang).free.map(function(ch,i){
              return e('div',{key:i,style:{background:'rgba(40,160,40,0.2)',border:'1px solid rgba(40,200,40,0.4)',borderRadius:7,padding:'3px 10px',fontSize:11,fontWeight:'bold',color:'#90ee90'}},ch,' ✓ FREE');
            }).concat(
              getTVInfo(lang).paid.map(function(ch,i){
                return e('div',{key:'p'+i,style:{background:'rgba(212,175,55,0.12)',border:'1px solid rgba(212,175,55,0.3)',borderRadius:7,padding:'3px 10px',fontSize:11,color:G}},ch);
              })
            )
          ),
          e('div',{style:{fontSize:10,color:'#7a96b0',lineHeight:1.5}},getTVInfo(lang).note),
          e('div',{style:{fontSize:9,color:'#5a7090',marginTop:4}},'📱 Stream: ',getTVInfo(lang).stream)
        ),

        // Key stats
        e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:9,marginBottom:13}},
          t.keyInfo.map(function(label,i){return e(Card,{key:i,style:{textAlign:'center',padding:13}},e('div',{style:{fontSize:18}},['🌍','🏅','⚽','📅'][i]),e('div',{style:{fontSize:9,color:'#6a86a0',marginTop:3}},label),e('div',{style:{fontSize:13,fontWeight:'bold',color:G,marginTop:2}},t.keyVals[i]));})
        ),

        // My team group
        activeTeam.group&&e('div',{style:{background:'linear-gradient(135deg,'+activeTeam.color+',rgba(212,175,55,0.1))',border:'1.5px solid rgba(255,255,255,0.16)',borderRadius:14,padding:16,marginBottom:13}},
          e('div',{style:{fontSize:12,color:'#fff',fontWeight:'bold',marginBottom:9}},activeTeam.flag,' ',activeTeam.team,' - ',t.groupLabel,' ',activeTeam.group),
          GROUPS[activeTeam.group]&&GROUPS[activeTeam.group].teams.map(function(team,i){
            var isMyTeam=team===activeTeam.team;
            return e('div',{key:team,style:{display:'flex',alignItems:'center',gap:9,background:isMyTeam?'rgba(212,175,55,0.2)':'rgba(255,255,255,0.04)',borderRadius:8,padding:'8px 11px',marginBottom:6,border:isMyTeam?'1px solid '+G:'none'}},
              e('span',{style:{fontSize:10,color:G,minWidth:16}},i+1,'.'),
              e('span',{style:{fontSize:12,fontWeight:isMyTeam?'bold':'normal'}},tn(team,lang)),
              isMyTeam&&e('span',{style:{marginLeft:'auto',fontSize:9,color:G}},'⭐')
            );
          })
        ),

        // Italy special message
        lang==='it'&&e('div',{style:{background:'linear-gradient(135deg,rgba(0,82,156,0.3),rgba(206,43,55,0.3))',border:'1.5px solid rgba(255,255,255,0.2)',borderRadius:14,padding:16,marginBottom:13,textAlign:'center'}},
          e('div',{style:{fontSize:24,marginBottom:8}},'🇮🇹😢'),
          e('div',{style:{fontSize:13,fontWeight:'bold',color:'#fff',marginBottom:4}},"L'Italia non e al Mondiale 2026"),
          e('div',{style:{fontSize:11,color:'#aaa'}})
        ),

        // Format
        e(Card,{style:{marginBottom:13}},
          e('div',{style:{fontSize:12,color:G,fontWeight:'bold',marginBottom:9}},t.format),
          t.formatLines.map(function(line,i){return e('div',{key:i,style:{fontSize:11,color:'#b0c8d8',marginBottom:5}},line);})
        ),

        // Did you know
        e(Card,null,
          e('div',{style:{fontSize:12,color:G,fontWeight:'bold',marginBottom:9}},t.didYouKnow),
          t.facts.map(function(fact,i){return e('div',{key:i,style:{fontSize:11,color:'#a8c0d0',padding:'6px 0',borderBottom:i<t.facts.length-1?'1px solid rgba(212,175,55,0.09)':'none'}},fact);})
        )
      ):null,

      // - GROUPS -
      tab===1?e('div',null,
        e('div',{style:{fontSize:10,color:G,marginBottom:12,textAlign:'center',letterSpacing:2}},t.groupsTitle),
        e('div',{style:{display:'flex',flexWrap:'wrap',gap:5,justifyContent:'center',marginBottom:15}},
          Object.keys(GROUPS).map(function(g){return e('button',{key:g,onClick:function(){setSelGroup(g);},style:{width:32,height:32,borderRadius:7,background:selGroup===g?'linear-gradient(135deg,'+G+',#b8963e)':'rgba(10,20,50,0.88)',border:selGroup===g?'none':'1px solid rgba(212,175,55,0.24)',color:selGroup===g?'#0a0a1a':G,fontSize:12,fontWeight:'bold',cursor:'pointer'}},g);})
        ),
        // ── LIVE SCORES ──
        e('div',{style:{marginBottom:14}},
          e('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}},
            e('div',{style:{fontSize:11,fontWeight:'bold',color:G,letterSpacing:1}},
              '🔴 '+(lang==='fr'?'SCORES EN DIRECT':lang==='es'?'EN VIVO':lang==='pt'?'AO VIVO':lang==='it'?'LIVE':lang==='de'?'LIVE':'LIVE SCORES')
            ),
            e('button',{onClick:fetchLiveScores,style:{background:'rgba(212,175,55,0.1)',border:'1px solid '+G,borderRadius:8,padding:'4px 10px',fontSize:9,color:G,cursor:'pointer'}},
              liveLoading?'⏳':lang==='fr'?'🔄 Actualiser':'🔄 Refresh'
            )
          ),
          liveLoading&&e('div',{style:{textAlign:'center',padding:10,color:'#6a86a0',fontSize:11}},'⏳ Loading...'),
          !liveLoading&&liveScores.length===0&&e('div',{style:{background:'rgba(212,175,55,0.05)',border:'1px solid rgba(212,175,55,0.15)',borderRadius:10,padding:12,textAlign:'center'}},
            e('div',{style:{fontSize:20,marginBottom:4}},'⚽'),
            e('div',{style:{fontSize:10,color:'#6a86a0'}},lang==='fr'?'Pas de match en direct — Le Mondial commence le 11 juin !':lang==='es'?'Sin partidos — El Mundial empieza el 11 de junio !':lang==='pt'?'Sem jogos — O Mundial começa a 11 de junho !':lang==='de'?'Keine Spiele — WM beginnt am 11. Juni !':'No live matches — World Cup starts June 11!')
          ),
          liveScores.length>0&&e('div',null,
            liveScores.slice(0,5).map(function(match,i){
              var home=match.homeTeam.shortName||match.homeTeam.name;
              var away=match.awayTeam.shortName||match.awayTeam.name;
              var hg=match.score.fullTime.home!==null?match.score.fullTime.home:'-';
              var ag=match.score.fullTime.away!==null?match.score.fullTime.away:'-';
              var isLive=match.status==='IN_PLAY'||match.status==='PAUSED';
              var isDone=match.status==='FINISHED';
              return e('div',{key:i,style:{background:isLive?'rgba(255,0,0,0.06)':'rgba(255,255,255,0.03)',border:'1px solid '+(isLive?'rgba(255,0,0,0.25)':'rgba(212,175,55,0.1)'),borderRadius:8,padding:'8px 10px',marginBottom:5,display:'flex',alignItems:'center',justifyContent:'space-between'}},
                e('div',{style:{fontSize:10,color:'#eee',flex:1,textAlign:'right',paddingRight:6}},home),
                e('div',{style:{background:isLive?'rgba(255,0,0,0.15)':isDone?'rgba(212,175,55,0.1)':'rgba(255,255,255,0.05)',border:'1px solid '+(isLive?'rgba(255,80,80,0.4)':isDone?G:'rgba(255,255,255,0.1)'),borderRadius:6,padding:'4px 8px',textAlign:'center',minWidth:54}},
                  isLive&&e('div',{style:{fontSize:7,color:'#ff4444',fontWeight:'bold',letterSpacing:1}},'🔴 LIVE'),
                  e('div',{style:{fontSize:12,fontWeight:'bold',color:isLive?'#ff8888':isDone?G:'#6a86a0'}},hg,' - ',ag)
                ),
                e('div',{style:{fontSize:10,color:'#eee',flex:1,paddingLeft:6}},away)
              );
            })
          )
        ),

        e(Card,{style:{marginBottom:14,border:'1px solid '+G,padding:'12px 8px'}},
          e('div',{style:{fontSize:14,fontWeight:'bold',color:G,marginBottom:10,textAlign:'center',letterSpacing:1}},
            t.groupLabel,' ',selGroup,
            GROUPS[selGroup].host&&e('span',{style:{fontSize:9,color:'#6a86a0',marginLeft:8}},'(',t.hostLabel,': ',GROUPS[selGroup].hostName,')')
          ),
          // Table header
          e('div',{style:{display:'grid',gridTemplateColumns:'1fr 24px 24px 24px 24px 24px 24px 24px 28px',gap:1,alignItems:'center',padding:'4px 6px',marginBottom:4,borderBottom:'1px solid rgba(212,175,55,0.3)'}},
            e('div',{style:{fontSize:9,color:'#6a86a0',fontWeight:'bold'}},'Team'),
            e('div',{style:{fontSize:9,color:'#6a86a0',fontWeight:'bold',textAlign:'center'}},'MP'),
            e('div',{style:{fontSize:9,color:'#6a86a0',fontWeight:'bold',textAlign:'center'}},'W'),
            e('div',{style:{fontSize:9,color:'#6a86a0',fontWeight:'bold',textAlign:'center'}},'D'),
            e('div',{style:{fontSize:9,color:'#6a86a0',fontWeight:'bold',textAlign:'center'}},'L'),
            e('div',{style:{fontSize:9,color:'#6a86a0',fontWeight:'bold',textAlign:'center'}},'GF'),
            e('div',{style:{fontSize:9,color:'#6a86a0',fontWeight:'bold',textAlign:'center'}},'GA'),
            e('div',{style:{fontSize:9,color:'#6a86a0',fontWeight:'bold',textAlign:'center'}},'GD'),
            e('div',{style:{fontSize:9,color:G,fontWeight:'bold',textAlign:'center'}},'Pts')
          ),
          // Team rows
          GROUPS[selGroup].teams.map(function(team,i){
            var isMyTeam=team===activeTeam.team;
            var isQual=i<2;
            return e('div',{key:team,style:{display:'grid',gridTemplateColumns:'1fr 24px 24px 24px 24px 24px 24px 24px 28px',gap:1,alignItems:'center',padding:'6px 6px',background:isMyTeam?'rgba(212,175,55,0.14)':isQual?'rgba(40,100,40,0.12)':'rgba(255,255,255,0.03)',borderRadius:6,marginBottom:3,border:'1px solid '+(isMyTeam?G:isQual?'rgba(40,200,40,0.2)':'rgba(255,255,255,0.05)')}},
              e('div',{style:{display:'flex',alignItems:'center',gap:5}},
                e('div',{style:{width:16,height:16,borderRadius:3,background:isMyTeam?G:isQual?'rgba(40,200,40,0.5)':'rgba(212,175,55,0.15)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:8,fontWeight:'bold',color:isMyTeam?'#0a0a1a':isQual?'#fff':G,flexShrink:0}},i+1),
                e('div',{style:{fontSize:10,fontWeight:isMyTeam?'bold':'normal',color:isMyTeam?G:'#eee',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}},team,isMyTeam?' ⭐':'')
              ),
              e('div',{style:{fontSize:10,color:'#9bb0c8',textAlign:'center'}},'0'),
              e('div',{style:{fontSize:10,color:'#90ee90',textAlign:'center'}},'0'),
              e('div',{style:{fontSize:10,color:'#aaa',textAlign:'center'}},'0'),
              e('div',{style:{fontSize:10,color:'#ff8888',textAlign:'center'}},'0'),
              e('div',{style:{fontSize:10,color:'#9bb0c8',textAlign:'center'}},'0'),
              e('div',{style:{fontSize:10,color:'#9bb0c8',textAlign:'center'}},'0'),
              e('div',{style:{fontSize:10,color:'#9bb0c8',textAlign:'center'}},'0'),
              e('div',{style:{fontSize:11,fontWeight:'bold',color:G,textAlign:'center'}},'0')
            );
          }),
          // Legend
          e('div',{style:{display:'flex',gap:12,marginTop:8,paddingTop:6,borderTop:'1px solid rgba(212,175,55,0.1)'}},
            e('div',{style:{display:'flex',alignItems:'center',gap:4}},
              e('div',{style:{width:10,height:10,borderRadius:2,background:'rgba(40,200,40,0.5)'}}),
              e('span',{style:{fontSize:8,color:'#6a86a0'}},'Qualified')
            ),
            e('div',{style:{fontSize:8,color:'#6a86a0'}},'MP=Played W=Won D=Draw L=Lost GF/GA=Goals GD=Diff')
          )
        ),
        e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:7}},
          Object.entries(GROUPS).map(function(entry){var g=entry[0];var data=entry[1];var hasMyTeam=data.teams.indexOf(activeTeam.team)>=0;return e('div',{key:g,onClick:function(){setSelGroup(g);},style:{background:hasMyTeam?'rgba(212,175,55,0.12)':g===selGroup?'rgba(212,175,55,0.09)':'rgba(10,20,50,0.8)',border:'1px solid '+(hasMyTeam?G:g===selGroup?G:BD),borderRadius:10,padding:10,cursor:'pointer'}},e('div',{style:{fontSize:10,fontWeight:'bold',color:G,marginBottom:5}},t.groupLabel,' ',g,hasMyTeam&&' ⭐'),data.teams.map(function(team){return e('div',{key:team,style:{fontSize:9,color:team===activeTeam.team?G:'#90aabf',marginBottom:2,fontWeight:team===activeTeam.team?'bold':'normal'}},tn(team,lang));}));})
        )
      ):null,

      // - FIXTURES -
      tab===2?e('div',null,
        e('div',{style:{fontSize:10,color:G,marginBottom:12,textAlign:'center',letterSpacing:2}},t.fixturesTitle),
        e('div',{style:{display:'flex',gap:8,marginBottom:14,justifyContent:'center'}},
          e('button',{onClick:function(){setFixtureMyOnly(false);},style:{background:!fixtureMyOnly?'linear-gradient(135deg,'+G+',#b8963e)':'rgba(255,255,255,0.07)',border:!fixtureMyOnly?'none':'1px solid rgba(212,175,55,0.28)',borderRadius:9,padding:'7px 14px',fontSize:11,fontWeight:'bold',color:!fixtureMyOnly?'#0a0a1a':'#9bb0c8',cursor:'pointer'}},t.fixturesAll),
          e('button',{onClick:function(){setFixtureMyOnly(true);},style:{background:fixtureMyOnly?'linear-gradient(135deg,'+G+',#b8963e)':'rgba(255,255,255,0.07)',border:fixtureMyOnly?'none':'1px solid rgba(212,175,55,0.28)',borderRadius:9,padding:'7px 14px',fontSize:11,fontWeight:'bold',color:fixtureMyOnly?'#0a0a1a':'#9bb0c8',cursor:'pointer'}},activeTeam.flag+' '+t.fixturesMy)
        ),
        filteredFixtures.length===0&&e('div',{style:{textAlign:'center',color:'#6a86a0',padding:30}},t.noFixtures),
        e('div',{style:{display:'flex',flexDirection:'column',gap:8}},
          filteredFixtures.map(function(f,i){
            var isMyMatch=f.home===activeTeam.team||f.away===activeTeam.team;
            return e(Card,{key:i,style:{padding:'12px 14px',border:'1px solid '+(isMyMatch?G:BD),background:isMyMatch?'linear-gradient(135deg,rgba(212,175,55,0.12),rgba(184,150,62,0.05))':CB}},
              e('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:6}},
                e('div',{style:{fontSize:9,color:isMyMatch?G:'#6a86a0'}},formatDate(f.date),' ',f.time,' ET',f.group&&' - '+(['R32','R16','QF','SF','3P','FIN'].indexOf(f.group)>=0?phaseLabel(f.group,lang):t.groupLabel+' '+f.group)),
                isMyMatch&&e('span',{style:{fontSize:9,color:G,background:'rgba(212,175,55,0.15)',padding:'2px 6px',borderRadius:6}},'⭐ '+t.myTeamLabel)
              ),
              e('div',{style:{display:'flex',alignItems:'center',justifyContent:'space-between'}},
                e('div',{style:{flex:1,textAlign:'left',fontSize:13,fontWeight:f.home===activeTeam.team?'bold':'normal',color:f.home===activeTeam.team?G:'#eee8d5'}},tn(f.home,lang)),
                e('div',{style:{padding:'4px 12px',background:'rgba(212,175,55,0.15)',borderRadius:8,fontSize:12,fontWeight:'bold',color:G,margin:'0 8px'}},'VS'),
                e('div',{style:{flex:1,textAlign:'right',fontSize:13,fontWeight:f.away===activeTeam.team?'bold':'normal',color:f.away===activeTeam.team?G:'#eee8d5'}},tn(f.away,lang))
              ),
              f.stadium&&e('div',{style:{fontSize:9,color:'#5a7090',marginTop:6}},f.stadium,' - ',f.city,' | 📺 ',getTV(f.home,lang)||getTV(f.away,lang)),
              (f.home!=='FINAL'&&f.home!=='3rd Place')&&e('div',{style:{fontSize:9,color:'rgba(212,175,55,0.6)',marginTop:3}},'📺 ',getTV(f.home,lang)||getTV(f.away,lang)||'')
            );
          })
        )
      ):null,

      // - PREDICTIONS -
      tab===3?e('div',null,
        e('div',{style:{fontSize:10,color:G,marginBottom:14,textAlign:'center'}},t.pronoSub),
        e(Card,{gold:true,style:{marginBottom:12}},
          e('div',{style:{fontSize:13,fontWeight:'bold',color:G,marginBottom:10}},'🏆 ',t.pronoWinner),
          e('select',{value:winner,onChange:function(ev){setWinner(ev.target.value);},style:{width:'100%',background:'rgba(10,20,50,0.95)',color:'#eee8d5',border:'1px solid '+G,borderRadius:9,padding:'9px 12px',fontSize:13}},e('option',{value:''},t.pronoChoose),ALL_TEAMS.map(function(team){return e('option',{key:team,value:team},team);})),
          winner&&e('div',{style:{marginTop:8,fontSize:11,color:G}},t.pronoMyPick,': ',e('strong',null,winner))
        ),
        e(Card,{style:{marginBottom:12}},
          e('div',{style:{fontSize:13,fontWeight:'bold',color:'#c0c0c0',marginBottom:10}},'🥈 ',t.pronoFinal),
          e('select',{value:finalist,onChange:function(ev){setFinalist(ev.target.value);},style:{width:'100%',background:'rgba(10,20,50,0.95)',color:'#eee8d5',border:'1px solid rgba(192,192,192,0.3)',borderRadius:9,padding:'9px 12px',fontSize:13}},e('option',{value:''},t.pronoChoose),ALL_TEAMS.map(function(team){return e('option',{key:team,value:team},team);}))
        ),
        e(Card,{style:{marginBottom:14}},
          e('div',{style:{fontSize:13,fontWeight:'bold',color:'#cd7f32',marginBottom:10}},'🥉 ',t.pronoSemi),
          e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}},
            [[semi1,setSemi1],[semi2,setSemi2]].map(function(pair,i){return e('select',{key:i,value:pair[0],onChange:function(ev){pair[1](ev.target.value);},style:{background:'rgba(10,20,50,0.95)',color:'#eee8d5',border:'1px solid rgba(205,127,50,0.3)',borderRadius:9,padding:'8px 10px',fontSize:12}},e('option',{value:''},t.pronoChoose),ALL_TEAMS.map(function(team){return e('option',{key:team,value:team},team);}));})
          )
        ),
        e('div',{style:{display:'flex',gap:10}},
          e('button',{onClick:savePronto,style:{flex:2,background:pronoSaved?'linear-gradient(135deg,#2d7a2d,#3a9e3a)':'linear-gradient(135deg,'+G+',#b8963e)',border:'none',borderRadius:10,padding:'12px 0',fontSize:13,fontWeight:'bold',color:pronoSaved?'#fff':'#0a0a1a',cursor:'pointer'}},pronoSaved?t.pronoSaved:t.pronoSave),
          e('button',{onClick:function(){setWinner('');setFinalist('');setSemi1('');setSemi2('');},style:{flex:1,background:'rgba(255,60,60,0.12)',border:'1px solid rgba(255,60,60,0.3)',borderRadius:10,padding:'12px 0',fontSize:12,color:'#ff6b6b',cursor:'pointer'}},t.pronoReset)
        )
      ):null,

      // - QUIZ -
            tab===5?e('div',null,
        e('div',{style:{fontSize:10,color:G,marginBottom:14,textAlign:'center',letterSpacing:2}},t.starsSub),
        e('div',{style:{display:'flex',flexDirection:'column',gap:10}},
          STARS.map(function(s,i){
            return e(Card,{key:s.name,gold:i<3,style:{display:'flex',gap:14,alignItems:'center'}},
              e(PlayerAvatar,{star:s}),
              e('div',{style:{flex:1,minWidth:0}},
                e('div',{style:{display:'flex',alignItems:'center',gap:7,marginBottom:2}},
                  e('span',{style:{fontSize:13,fontWeight:'bold'}},s.name),
                  e('span',null,s.flag),
                  e('span',{style:{fontSize:9,padding:'2px 6px',borderRadius:8,background:'rgba(212,175,55,0.15)',color:G,fontWeight:'bold'}},s.pos)
                ),
                e('div',{style:{fontSize:10,color:'#6a86a0',marginBottom:4}},s.club,' - Gr.',s.group,' - ',s.age,'y'),
                e('div',{style:{fontSize:10,color:'#a0b8cc',marginBottom:6}},s.stat),
                e('div',{style:{marginTop:6}},
                  // Rating badge
                  e('div',{style:{display:'flex',alignItems:'center',gap:6,marginBottom:6}},
                    e('span',{style:{fontSize:11,color:G,fontWeight:'bold',background:'rgba(212,175,55,0.15)',padding:'2px 8px',borderRadius:8}},s.rating+' ⭐'),
                    e('span',{style:{fontSize:9,color:'#6a86a0'}},(lang==='fr'?'Note globale':lang==='es'?'Nota global':lang==='de'?'Gesamtnote':'Overall'))
                  ),
                  // Stats bars
                  s.pac&&e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'2px 10px'}},
                    [
                      {k:'PAC',label:lang==='fr'?'⚡ Vitesse':lang==='es'?'⚡ Velocidad':lang==='de'?'⚡ Tempo':'⚡ Pace',v:s.pac,color:'#90ee90'},
                      {k:'SHO',label:lang==='fr'?'🎯 Tir':lang==='es'?'🎯 Disparo':lang==='de'?'🎯 Schuss':'🎯 Shooting',v:s.sho,color:'#d4af37'},
                      {k:'PAS',label:lang==='fr'?'🔁 Passe':lang==='es'?'🔁 Pase':lang==='de'?'🔁 Pass':'🔁 Passing',v:s.pas,color:'#7ab0ff'},
                      {k:'DRI',label:lang==='fr'?'🎪 Dribble':lang==='es'?'🎪 Regate':lang==='de'?'🎪 Dribbling':'🎪 Dribbling',v:s.dri,color:'#ff9900'},
                      {k:'DEF',label:lang==='fr'?'🛡️ Defense':lang==='es'?'🛡️ Defensa':lang==='de'?'🛡️ Abwehr':'🛡️ Defence',v:s.def_,color:'#ff6b6b'},
                      {k:'PHY',label:lang==='fr'?'💪 Physique':lang==='es'?'💪 Fisico':lang==='de'?'💪 Physis':'💪 Physical',v:s.phy,color:'#9b59b6'}
                    ].map(function(stat){
                      return e('div',{key:stat.k,style:{marginBottom:3}},
                        e('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:1}},
                          e('span',{style:{fontSize:8,color:'#9bb0c8'}},stat.label),
                          e('span',{style:{fontSize:8,fontWeight:'bold',color:stat.color}},stat.v)
                        ),
                        e('div',{style:{height:3,background:'rgba(255,255,255,0.08)',borderRadius:2,overflow:'hidden'}},
                          e('div',{style:{width:stat.v+'%',height:'100%',background:stat.color,borderRadius:2,opacity:0.85}})
                        )
                      );
                    })
                  )
                )
              ),
              i===0&&e('div',{style:{position:'absolute',right:12,top:12,fontSize:16}},'🏆')
            );
          })
        )
      ):null,

      // - POLLS -
      tab===6?e('div',null,
        e('div',{style:{fontSize:10,color:G,marginBottom:14,textAlign:'center'}},t.pollTitle),
        e('div',{style:{display:'flex',flexDirection:'column',gap:14}},
          polls.map(function(poll){
            var voted=pollVotes[poll.id]!==undefined;
            var cv=getPV(poll.id,poll.votes);
            var total=cv.reduce(function(a,b){return a+b;},0);
            return e(Card,{key:poll.id,style:{padding:18}},
              e('div',{style:{fontSize:13,fontWeight:'bold',color:'#fff',marginBottom:13}},poll.q),
              !voted?e('div',{style:{display:'flex',flexDirection:'column',gap:8}},poll.opts.map(function(opt,i){return e('button',{key:i,onClick:function(){handleVote(poll.id,i,poll.votes);},style:{background:CB,border:'1px solid '+BD,borderRadius:9,padding:'10px 14px',fontSize:12,color:'#eee8d5',cursor:'pointer',textAlign:'left'}},opt);})):
              e('div',{style:{display:'flex',flexDirection:'column',gap:8}},
                poll.opts.map(function(opt,i){
                  var pct=Math.round(cv[i]/total*100);
                  var isMe=pollVotes[poll.id]===i;
                  var isWin=cv[i]===Math.max.apply(null,cv);
                  return e('div',{key:i},
                    e('div',{style:{display:'flex',justifyContent:'space-between',fontSize:11,marginBottom:4}},e('span',{style:{color:isMe?G:'#c0d0dc'}},isMe?'> ':'',opt),e('span',{style:{color:isWin?G:'#6a86a0',fontWeight:isWin?'bold':'normal'}},pct,'%')),
                    e('div',{style:{height:7,background:'rgba(255,255,255,0.07)',borderRadius:4,overflow:'hidden'}},e('div',{style:{width:pct+'%',height:'100%',background:isMe?'linear-gradient(90deg,'+G+',#ff9900)':isWin?'rgba(212,175,55,0.5)':'rgba(100,150,200,0.4)',borderRadius:4,transition:'width 0.6s'}}))
                  );
                }),
                e('div',{style:{fontSize:10,color:'#6a86a0',marginTop:4}},total.toLocaleString(),' ',t.pollTotal)
              )
            );
          })
        )
      ):null,

      // - INTERACTIVE TOURNAMENT TAB -
      tab===7?e('div',null,
        e('div',{style:{fontSize:12,color:G,fontWeight:'bold',textAlign:'center',marginBottom:12,letterSpacing:2}},('🏆 '+(lang==='fr'?'COUPE DU MONDE 2026 - TOURNOI INTERACTIF':lang==='es'?'COPA DEL MUNDO 2026 - TORNEO INTERACTIVO':lang==='pt'?'COPA DO MUNDO 2026 - TORNEIO INTERATIVO':lang==='it'?'COPPA DEL MONDO 2026 - TORNEO INTERATTIVO':lang==='de'?'WM 2026 - INTERAKTIVES TURNIER':'WORLD CUP 2026 - INTERACTIVE TOURNAMENT'))),

        // START screen
        iPhase==='idle'&&e('div',{style:{textAlign:'center',marginBottom:16}},
          e('div',{style:{fontSize:11,color:'#9bb0c8',marginBottom:14,lineHeight:1.6}},(lang==='fr'?'Simulez tout le tournoi match par match ! Entrez les scores et voyez qui se qualifie !':lang==='es'?'Simula todo el torneo partido a partido ! Introduce los marcadores y ve quien se clasifica !':lang==='pt'?'Simule todo o torneio jogo a jogo ! Insira os placares e veja quem se qualifica !':lang==='it'?'Simula tutto il torneo partita per partita ! Inserisci i risultati e scopri chi si qualifica !':lang==='de'?'Simuliere das gesamte Turnier Spiel fur Spiel ! Gib die Ergebnisse ein und sieh wer sich qualifiziert !':'Simulate the entire tournament match by match ! Enter the scores and see who qualifies !')),
          e('button',{onClick:initInteractive,style:{width:'100%',background:'linear-gradient(135deg,'+G+',#b8963e)',border:'none',borderRadius:12,padding:'14px 0',fontSize:14,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer'}},'⚽ START TOURNAMENT')
        ),

        // Active tournament
        iPhase!=='idle'&&iPhase!=='done'&&e('div',null,

          // Phase header + reset
          e('div',{style:{background:'linear-gradient(135deg,rgba(10,22,54,0.97),rgba(18,45,110,0.92))',border:'1px solid '+G,borderRadius:12,padding:'10px 14px',marginBottom:12,display:'flex',justifyContent:'space-between',alignItems:'center'}},
            e('div',{style:{fontSize:12,fontWeight:'bold',color:G}},
              iPhase==='groups'?'📊 '+t.groupLabel+'s':
              iPhase==='r32'?'⚽ '+phaseLabel('R32',lang):
              iPhase==='r16'?'🔥 '+phaseLabel('R16',lang):
              iPhase==='qf'?'🏟️ '+phaseLabel('QF',lang):
              iPhase==='sf'?'🥊 '+phaseLabel('SF',lang):
              '🏆 '+phaseLabel('FIN',lang)
            ),
            e('button',{onClick:function(){setIPhase('idle');setIMatches([]);setIGroupStandings({});setIChampion(null);},style:{background:'rgba(255,60,60,0.15)',border:'1px solid rgba(255,60,60,0.3)',borderRadius:7,padding:'4px 10px',fontSize:10,color:'#ff6b6b',cursor:'pointer'}},'x Reset')
          ),

          // GROUP STAGE
          iPhase==='groups'&&e('div',null,

            // Group selector tabs
            e('div',{style:{display:'flex',flexWrap:'wrap',gap:4,justifyContent:'center',marginBottom:12}},
              Object.keys(GROUPS).map(function(g){
                var gMatches=iMatches.filter(function(m){return m.group===g;});
                var done=gMatches.length>0&&gMatches.every(function(m){return m.played;});
                return e('button',{key:g,onClick:function(){setISelGroup(g);},style:{width:30,height:30,borderRadius:6,background:done?'rgba(40,160,40,0.3)':iSelGroup===g?'linear-gradient(135deg,'+G+',#b8963e)':'rgba(10,20,50,0.88)',border:'1px solid '+(done?'#90ee90':iSelGroup===g?G:BD),color:done?'#90ee90':iSelGroup===g?'#0a0a1a':G,fontSize:11,fontWeight:'bold',cursor:'pointer'}},g);
              })
            ),

            // Matches sorted by date - TABLE FORMAT
            e(Card,{style:{marginBottom:10,padding:'10px 8px'}},
              e('div',{style:{fontSize:11,fontWeight:'bold',color:G,marginBottom:10,paddingLeft:4}},t.groupLabel+' '+iSelGroup+' - '+t.fixturesTitle),

              // Table header
              e('div',{style:{display:'grid',gridTemplateColumns:'58px 1fr 30px 10px 30px 1fr',gap:2,padding:'4px 4px 6px',borderBottom:'1px solid rgba(212,175,55,0.3)',marginBottom:4}},
                e('div',{style:{fontSize:8,color:'#6a86a0'}},'DATE'),
                e('div',{style:{fontSize:8,color:'#6a86a0',textAlign:'right'}},'HOME'),
                e('div',{style:{fontSize:8,color:G,textAlign:'center'}},''),
                e('div',{style:{fontSize:8,color:'#6a86a0',textAlign:'center'}},'-'),
                e('div',{style:{fontSize:8,color:G,textAlign:'center'}},''),
                e('div',{style:{fontSize:8,color:'#6a86a0'}},'AWAY')
              ),

              // Matches by date
              (function(){
                var gMatches=iMatches.filter(function(m){return m.group===iSelGroup;});
                return gMatches.map(function(m){
                  var fx=FIXTURES.find(function(f){
                    return f.group===iSelGroup&&(
                      (f.home===m.home&&f.away===m.away)||
                      (f.home===m.away&&f.away===m.home)
                    );
                  });
                  return {m:m,date:fx?fx.date:'',time:fx?fx.time:''};
                }).sort(function(a,b){
                  return (a.date+a.time)<(b.date+b.time)?-1:1;
                }).map(function(item){
                  var m=item.m;
                  var dt=item.date?new Date(item.date+'T12:00:00'):null;
                  var dayStr=dt?dt.toLocaleDateString(lang==='fr'?'fr-FR':lang==='de'?'de-DE':lang==='es'?'es-ES':lang==='pt'?'pt-PT':lang==='it'?'it-IT':'en-GB',{weekday:'short',day:'numeric',month:'short'}):'';
                  var homeWin=m.played&&m.goalsHome>m.goalsAway;
                  var awayWin=m.played&&m.goalsAway>m.goalsHome;
                  var tvCh=getTV(m.home,lang)||getTV(m.away,lang);
                  return e('div',{key:m.id,style:{padding:'5px 4px',borderBottom:'1px solid rgba(255,255,255,0.06)',background:m.played?'rgba(40,160,40,0.06)':'transparent'}},
                    e('div',{style:{display:'grid',gridTemplateColumns:'58px 1fr 30px 10px 30px 1fr',gap:2,alignItems:'center'}},
                      e('div',{style:{fontSize:8,color:'#6a86a0',lineHeight:1.3}},dayStr,' ',item.time?item.time:''),
                      e('div',{style:{fontSize:10,fontWeight:homeWin?'bold':'normal',color:homeWin?G:'#eee',textAlign:'right',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}},tn(m.home,lang)),
                      e('input',{type:'number',min:0,max:9,
                        value:m.goalsHome===null?'':m.goalsHome,
                        onChange:function(ev){setMatchScore(m.id,parseInt(ev.target.value)||0,m.goalsAway===null?0:m.goalsAway);},
                        style:{width:30,height:26,textAlign:'center',background:'rgba(10,20,50,0.95)',color:G,border:'1px solid '+(m.played?'rgba(40,200,40,0.5)':G),borderRadius:5,fontSize:14,fontWeight:'bold'}}),
                      e('div',{style:{fontSize:9,color:'#6a86a0',textAlign:'center'}},'-'),
                      e('input',{type:'number',min:0,max:9,
                        value:m.goalsAway===null?'':m.goalsAway,
                        onChange:function(ev){setMatchScore(m.id,m.goalsHome===null?0:m.goalsHome,parseInt(ev.target.value)||0);},
                        style:{width:30,height:26,textAlign:'center',background:'rgba(10,20,50,0.95)',color:G,border:'1px solid '+(m.played?'rgba(40,200,40,0.5)':G),borderRadius:5,fontSize:14,fontWeight:'bold'}}),
                      e('div',{style:{fontSize:10,fontWeight:awayWin?'bold':'normal',color:awayWin?G:'#eee',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}},tn(m.away,lang))
                    ),
                    tvCh&&e('div',{style:{fontSize:8,color:'rgba(212,175,55,0.6)',marginTop:2,paddingLeft:2}},'📺 ',tvCh)
                  );
                });
              })(),

              e('button',{onClick:function(){quickSimGroup(iSelGroup);},style:{width:'100%',background:'rgba(212,175,55,0.12)',border:'1px solid rgba(212,175,55,0.3)',borderRadius:8,padding:'7px 0',fontSize:11,color:G,cursor:'pointer',marginTop:8}},'🎲 Auto-sim '+t.groupLabel+' '+iSelGroup)
            ),

            // Standings
            iGroupStandings[iSelGroup]&&e(Card,{style:{marginBottom:10,padding:'12px 14px'}},
              e('div',{style:{fontSize:11,fontWeight:'bold',color:G,marginBottom:8}},t.groupLabel+' '+iSelGroup+' - Classement'),
              e('div',{style:{display:'grid',gridTemplateColumns:'24px 1fr 36px 36px',gap:4,padding:'4px 0',borderBottom:'1px solid rgba(212,175,55,0.2)',marginBottom:4}},
                e('div',{style:{fontSize:8,color:'#6a86a0'}},'#'),
                e('div',{style:{fontSize:8,color:'#6a86a0'}},''),
                e('div',{style:{fontSize:8,color:'#6a86a0',textAlign:'center'}},'Pts'),
                e('div',{style:{fontSize:8,color:'#6a86a0',textAlign:'center'}},'GD')
              ),
              iGroupStandings[iSelGroup].teams.map(function(team,i){
                var pts=iGroupStandings[iSelGroup].pts[team];
                var gd=iGroupStandings[iSelGroup].gd[team];
                return e('div',{key:team,style:{display:'grid',gridTemplateColumns:'24px 1fr 36px 36px',gap:4,alignItems:'center',padding:'6px 0',borderBottom:i<3?'1px solid rgba(212,175,55,0.07)':'none',background:i<2?'rgba(212,175,55,0.05)':'transparent'}},
                  e('div',{style:{width:20,height:20,borderRadius:4,background:i<2?G:'rgba(212,175,55,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:9,fontWeight:'bold',color:i<2?'#0a0a1a':G}},i+1),
                  e('div',{style:{fontSize:11,color:i<2?'#eee':'#888',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}},tn(team,lang)),
                  e('div',{style:{fontSize:11,fontWeight:'bold',color:G,textAlign:'center'}},pts),
                  e('div',{style:{fontSize:10,color:'#6a86a0',textAlign:'center'}},(gd>0?'+':'')+gd)
                );
              })
            ),

            // Advance button
            allGroupsComplete(iMatches)&&e('button',{onClick:advancePhase,style:{width:'100%',background:'linear-gradient(135deg,#1a8a3a,#2ab858)',border:'none',borderRadius:12,padding:'13px 0',fontSize:13,fontWeight:'bold',color:'#fff',cursor:'pointer',marginBottom:10}},'OK '+phaseLabel('R32',lang)+' ->')
          ),

          // KNOCKOUT ROUNDS
          iPhase!=='groups'&&e('div',null,
            e(Card,{style:{marginBottom:10,padding:'12px 14px'}},
              iMatches.map(function(m,i){
                var homeWin=m.played&&m.goalsHome>m.goalsAway;
                var awayWin=m.played&&m.goalsAway>m.goalsHome;
                return e('div',{key:m.id,style:{marginBottom:10,padding:'8px 10px',background:'rgba(0,0,0,0.2)',borderRadius:9,border:'1px solid '+(m.played?'rgba(40,200,40,0.3)':BD)}},
                  m.label&&e('div',{style:{fontSize:9,color:'#6a86a0',marginBottom:4,textAlign:'center'}},m.label),
                  (m.home&&m.home!=='TBD')&&e('div',{style:{fontSize:8,color:'rgba(212,175,55,0.55)',marginBottom:5,textAlign:'center'}},'📺 ',getTV(m.home,lang)||getTV(m.away,lang)),
                  e('div',{style:{display:'grid',gridTemplateColumns:'1fr 32px 10px 32px 1fr',gap:4,alignItems:'center'}},
                    e('div',{style:{fontSize:11,fontWeight:homeWin?'bold':'normal',color:homeWin?G:'#eee',textAlign:'right',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}},tn(m.home,lang)),
                    e('input',{type:'number',min:0,max:9,
                      value:m.goalsHome===null?'':m.goalsHome,
                      onChange:function(ev){
                        var gh=parseInt(ev.target.value)||0;
                        setIMatches(function(prev){return prev.map(function(x){return x.id===m.id?Object.assign({},x,{goalsHome:gh,played:x.goalsAway!==null&&x.goalsAway!==undefined}):x;});});
                      },
                      style:{width:32,height:28,textAlign:'center',background:'rgba(10,20,50,0.95)',color:G,border:'1px solid '+G,borderRadius:6,fontSize:14,fontWeight:'bold'}}),
                    e('div',{style:{fontSize:10,color:'#6a86a0',textAlign:'center'}},'-'),
                    e('input',{type:'number',min:0,max:9,
                      value:m.goalsAway===null?'':m.goalsAway,
                      onChange:function(ev){
                        var ga=parseInt(ev.target.value)||0;
                        setIMatches(function(prev){return prev.map(function(x){return x.id===m.id?Object.assign({},x,{goalsAway:ga,played:x.goalsHome!==null&&x.goalsHome!==undefined}):x;});});
                      },
                      style:{width:32,height:28,textAlign:'center',background:'rgba(10,20,50,0.95)',color:G,border:'1px solid '+G,borderRadius:6,fontSize:14,fontWeight:'bold'}}),
                    e('div',{style:{fontSize:11,fontWeight:awayWin?'bold':'normal',color:awayWin?G:'#eee',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}},tn(m.away,lang))
                  ),
                  m.played&&m.goalsHome===m.goalsAway&&e('div',{style:{fontSize:9,color:'#ff9900',textAlign:'center',marginTop:3}},'⚠️ Nul -> vainqueur aux penalties')
                );
              })
            ),
            e('button',{onClick:quickSimPhase,style:{width:'100%',background:'rgba(212,175,55,0.12)',border:'1px solid rgba(212,175,55,0.3)',borderRadius:9,padding:'9px 0',fontSize:11,color:G,cursor:'pointer',marginBottom:10}},'🎲 Auto-sim ce tour'),
            iMatches.every(function(m){return m.played;})&&e('button',{onClick:advancePhase,style:{width:'100%',background:'linear-gradient(135deg,#1a8a3a,#2ab858)',border:'none',borderRadius:12,padding:'13px 0',fontSize:13,fontWeight:'bold',color:'#fff',cursor:'pointer',marginBottom:10}},
              iPhase==='final'?(lang==='fr'?'🎉 Proclamer le Champion !':lang==='es'?'🎉 Proclamar el Campeon !':lang==='pt'?'🎉 Proclamar o Campeao !':lang==='it'?'🎉 Proclama il Campione !':lang==='de'?'🎉 Den Champion ernennen !':'🎉 Proclaim the Champion !'):
              '>> Tour suivant ->'
            )
          )
        ),

        // CHAMPION screen
        iPhase==='done'&&e('div',{style:{textAlign:'center',marginBottom:16}},
          e('div',{style:{background:'linear-gradient(135deg,rgba(212,175,55,0.3),rgba(184,150,62,0.15))',border:'2px solid '+G,borderRadius:18,padding:'24px 16px',marginBottom:14}},
            e('div',{style:{fontSize:12,color:G,letterSpacing:3,marginBottom:8}},'🏆 WORLD CUP 2026 CHAMPION'),
            e('div',{style:{fontSize:40,marginBottom:6}},'🥇'),
            e('div',{style:{fontSize:26,fontWeight:'bold',color:G}},tn(iChampion,lang)),
            e('div',{style:{fontSize:12,color:'#eee',marginTop:6}},'WORLD CHAMPION 2026 !')
          ),
          e('button',{onClick:function(){setIPhase('idle');setIMatches([]);setIGroupStandings({});setIChampion(null);},style:{width:'100%',background:'linear-gradient(135deg,'+G+',#b8963e)',border:'none',borderRadius:12,padding:'13px 0',fontSize:14,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer'}},'🔄 Rejouer')
        )
      ):null,

      // ── TAB 8 - PENALTY GAME ──────────────────────────────────
      tab===8?e('div',{style:{paddingBottom:16}},
        e('div',{style:{textAlign:'center',marginBottom:10}},
          e('div',{style:{fontSize:13,fontWeight:'bold',color:G,letterSpacing:1}},'⚽ PENALTY GAME'),
          e('div',{style:{fontSize:10,color:'#6a86a0',marginTop:3}},
            lang==='fr'?'5 tirs - Battez Higuita !':lang==='es'?'5 penaltis - Vence a Higuita !':lang==='pt'?'5 penaltis - Venca Higuita !':lang==='it'?'5 rigori - Batti Higuita !':lang==='de'?'5 Elfmeter - Bezwinge Higuita !':'5 penalties - Beat Higuita!'
          )
        ),
        e('div',{style:{display:'flex',justifyContent:'center',gap:10,marginBottom:10}},
          e('div',{style:{textAlign:'center',background:'rgba(40,160,40,0.2)',border:'1px solid rgba(40,200,40,0.4)',borderRadius:10,padding:'7px 14px'}},
            e('div',{style:{fontSize:20,fontWeight:'bold',color:'#90ee90'}},'⚽ ',gameScore),
            e('div',{style:{fontSize:9,color:'#6a86a0'}},'GOALS')
          ),
          e('div',{style:{textAlign:'center',background:'rgba(212,175,55,0.1)',border:'1px solid '+G,borderRadius:10,padding:'7px 14px'}},
            e('div',{style:{fontSize:20,fontWeight:'bold',color:G}},shotsLeft),
            e('div',{style:{fontSize:9,color:'#6a86a0'}},'LEFT')
          ),
          e('div',{style:{textAlign:'center',background:'rgba(200,40,40,0.2)',border:'1px solid rgba(200,60,60,0.4)',borderRadius:10,padding:'7px 14px'}},
            e('div',{style:{fontSize:20,fontWeight:'bold',color:'#ff8888'}},'✗ ',gameMiss),
            e('div',{style:{fontSize:9,color:'#6a86a0'}},'SAVED')
          )
        ),
        e('div',{style:{display:'flex',justifyContent:'center',gap:5,marginBottom:10}},
          [0,1,2,3,4].map(function(i){
            var h=shotHistory[i];
            return e('div',{key:i,style:{width:26,height:26,borderRadius:'50%',background:h?(h.scored?'rgba(40,200,40,0.4)':'rgba(200,40,40,0.4)'):'rgba(255,255,255,0.1)',border:'2px solid '+(h?(h.scored?'#90ee90':'#ff8888'):'rgba(255,255,255,0.2)'),display:'flex',alignItems:'center',justifyContent:'center',fontSize:11}},h?(h.scored?'⚽':'✗'):'');
          })
        ),
        // Goal visual with Higuita SVG
        e('div',{style:{
          position:'relative',
          width:'100%',
          maxWidth:320,
          margin:'0 auto 14px',
          height:200,
          background:'linear-gradient(180deg,#0a2a0a,#1a5a1a,#2d8a2d)',
          borderRadius:10,
          overflow:'visible',
          border:'3px solid rgba(255,255,255,0.3)',
          boxShadow:'inset 0 0 20px rgba(0,0,0,0.3)'
        }},
          // Goal posts
          e('div',{style:{position:'absolute',top:10,left:'18%',right:'18%',height:90,border:'3px solid white',borderBottom:'none',background:'rgba(255,255,255,0.06)'}}),
          // Net
          e('div',{style:{position:'absolute',top:13,left:'19%',right:'19%',height:86,backgroundImage:'linear-gradient(rgba(255,255,255,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.08) 1px,transparent 1px)',backgroundSize:'18px 18px'}}),

          // ── HIGUITA SVG ──
          e('svg',{
            style:{
              position:'absolute',
              top:keeperDir==='left'?10:keeperDir==='right'?10:14,
              left:keeperDir==='left'?'12%':keeperDir==='right'?'52%':'41%',
              width:58,height:90,
              transition:'all 0.5s cubic-bezier(0.25,0.46,0.45,0.94)',
              transform:shotResult==='saved'
                ?'rotate(18deg)'
                :keeperDir==='left'?'rotate(-30deg) scaleX(-1)':keeperDir==='right'?'rotate(30deg)':'rotate(0deg)',
              filter:shotResult==='goal'?'grayscale(0.9) opacity(0.5)':shotResult==='saved'?'drop-shadow(0 0 10px #ffd700)':'',
              transformOrigin:'center center',
              zIndex:10
            },
            viewBox:'0 0 56 82',xmlns:'http://www.w3.org/2000/svg'
          },
            e('rect',{x:12,y:38,width:26,height:22,rx:4,fill:'#FCD116',stroke:'#c8a000',strokeWidth:1.5}),
            e('rect',{x:12,y:44,width:26,height:5,fill:'#CE1126'}),
            e('rect',{x:12,y:49,width:26,height:4,fill:'#003087'}),
            e('text',{x:25,y:47,textAnchor:'middle',fontSize:4,fontWeight:'bold',fill:'white'},'EL LOCO'),
            e('rect',{x:21,y:29,width:9,height:11,rx:2,fill:'#C68642'}),
            e('ellipse',{cx:25,cy:20,rx:11,ry:12,fill:'#C68642',stroke:'#a0522d',strokeWidth:1}),
            e('ellipse',{cx:25,cy:9,rx:13,ry:8,fill:'#1a0a00'}),
            e('circle',{cx:17,cy:5,r:4,fill:'#1a0a00'}),
            e('circle',{cx:22,cy:3,r:4,fill:'#1a0a00'}),
            e('circle',{cx:28,cy:3,r:4,fill:'#1a0a00'}),
            e('circle',{cx:33,cy:5,r:4,fill:'#1a0a00'}),
            e('ellipse',{cx:11,cy:18,rx:5,ry:9,fill:'#1a0a00'}),
            e('ellipse',{cx:10,cy:30,rx:5,ry:9,fill:'#1a0a00'}),
            e('ellipse',{cx:9,cy:42,rx:4,ry:8,fill:'#1a0a00'}),
            e('circle',{cx:8,cy:22,r:4,fill:'#1a0a00'}),
            e('circle',{cx:7,cy:34,r:3.5,fill:'#1a0a00'}),
            e('circle',{cx:8,cy:46,r:3,fill:'#1a0a00'}),
            e('circle',{cx:10,cy:52,r:3.5,fill:'#1a0a00'}),
            e('ellipse',{cx:39,cy:18,rx:5,ry:9,fill:'#1a0a00'}),
            e('ellipse',{cx:40,cy:30,rx:5,ry:9,fill:'#1a0a00'}),
            e('ellipse',{cx:41,cy:42,rx:4,ry:8,fill:'#1a0a00'}),
            e('circle',{cx:42,cy:22,r:4,fill:'#1a0a00'}),
            e('circle',{cx:43,cy:34,r:3.5,fill:'#1a0a00'}),
            e('circle',{cx:42,cy:46,r:3,fill:'#1a0a00'}),
            e('circle',{cx:40,cy:52,r:3.5,fill:'#1a0a00'}),
            e('ellipse',{cx:19,cy:19,rx:2.5,ry:2,fill:'white'}),
            e('ellipse',{cx:29,cy:19,rx:2.5,ry:2,fill:'white'}),
            e('circle',{cx:19,cy:19,r:1.4,fill:'#1a0a00'}),
            e('circle',{cx:29,cy:19,r:1.4,fill:'#1a0a00'}),
            e('path',{d:'M17 15 Q20 13 23 15',stroke:'#1a0a00',strokeWidth:2,fill:'none',strokeLinecap:'round'}),
            e('path',{d:'M27 15 Q30 13 33 15',stroke:'#1a0a00',strokeWidth:2,fill:'none',strokeLinecap:'round'}),
            e('path',{d:'M14 24 Q18 21 25 23 Q32 21 36 24 Q33 29 25 27 Q17 29 14 24',fill:'#1a0a00'}),
            keeperDir==='left'&&!shotResult?e('path',{d:'M12 42 L-4 28',stroke:'#FCD116',strokeWidth:8,strokeLinecap:'round'}):null,
            keeperDir==='right'&&!shotResult?e('path',{d:'M38 42 L54 28',stroke:'#FCD116',strokeWidth:8,strokeLinecap:'round'}):null,
            !shotResult&&keeperDir!=='left'&&keeperDir!=='right'?e('path',{d:'M12 46 L4 58',stroke:'#FCD116',strokeWidth:7,strokeLinecap:'round'}):null,
            !shotResult&&keeperDir!=='left'&&keeperDir!=='right'?e('path',{d:'M38 46 L46 58',stroke:'#FCD116',strokeWidth:7,strokeLinecap:'round'}):null,
            shotResult==='saved'?e('path',{d:'M12 44 L-3 56',stroke:'#FCD116',strokeWidth:8,strokeLinecap:'round'}):null,
            shotResult==='saved'?e('path',{d:'M38 44 L53 56',stroke:'#FCD116',strokeWidth:8,strokeLinecap:'round'}):null,
            !shotResult&&keeperDir==='left'?e('circle',{cx:-4,cy:27,r:6,fill:'#FF6B00',stroke:'#cc4400',strokeWidth:1.5}):null,
            !shotResult&&keeperDir==='right'?e('circle',{cx:54,cy:27,r:6,fill:'#FF6B00',stroke:'#cc4400',strokeWidth:1.5}):null,
            shotResult==='saved'?e('circle',{cx:-3,cy:56,r:6,fill:'#FF6B00',stroke:'#cc4400',strokeWidth:1.5}):null,
            shotResult==='saved'?e('circle',{cx:53,cy:56,r:6,fill:'#FF6B00',stroke:'#cc4400',strokeWidth:1.5}):null,
            !shotResult?e('rect',{x:14,y:59,width:10,height:14,rx:2,fill:'#FCD116',stroke:'#c8a000',strokeWidth:1}):null,
            !shotResult?e('rect',{x:30,y:59,width:10,height:14,rx:2,fill:'#FCD116',stroke:'#c8a000',strokeWidth:1}):null,
            !shotResult?e('ellipse',{cx:19,cy:74,rx:8,ry:4,fill:'#111'}):null,
            !shotResult?e('ellipse',{cx:35,cy:74,rx:8,ry:4,fill:'#111'}):null,
            shotResult==='saved'?e('path',{d:'M17 60 C11 56 5 47 8 36 C10 27 19 21 23 14',stroke:'#FCD116',strokeWidth:8,strokeLinecap:'round',fill:'none'}):null,
            shotResult==='saved'?e('path',{d:'M37 60 C43 56 49 47 46 36 C44 27 35 21 31 14',stroke:'#FCD116',strokeWidth:8,strokeLinecap:'round',fill:'none'}):null,
            shotResult==='saved'?e('ellipse',{cx:23,cy:12,rx:8,ry:3.5,fill:'#111',transform:'rotate(-22 23 12)'}):null,
            shotResult==='saved'?e('ellipse',{cx:31,cy:12,rx:8,ry:3.5,fill:'#111',transform:'rotate(22 31 12)'}):null,
            shotResult==='saved'?e('text',{x:27,y:6,textAnchor:'middle',fontSize:14},'🦂'):null
          ),

          // ── PENALTY SPOT ──
          e('div',{style:{position:'absolute',bottom:28,left:'48%',width:8,height:8,borderRadius:'50%',background:'white',opacity:0.7,zIndex:5}}),

          // ── BALL ⚽ always visible ──
          e('div',{style:{
            position:'absolute',
            bottom:shotResult==='goal'?(shotDir==='left'?120:shotDir==='right'?120:105):24,
            left:shotResult==='goal'?(shotDir==='left'?'22%':shotDir==='right'?'65%':'41%'):'41%',
            fontSize:38,
            lineHeight:'1',
            transition:'all 0.9s cubic-bezier(0.2,0.8,0.3,1)',
            filter:'drop-shadow(0 4px 10px rgba(0,0,0,1))',
            transform:shotResult==='goal'?'scale(1.3)':shotResult==='saved'?'scale(0.7)':'scale(1)',
            zIndex:999,
            pointerEvents:'none'
          }},'⚽'),

          // Result text
          shotResult&&e('div',{style:{
            position:'absolute',
            top:'42%',left:'50%',
            transform:'translate(-50%,-50%)',
            fontSize:20,fontWeight:'bold',
            color:shotResult==='goal'?'#ffff00':'#ff4444',
            textShadow:'0 0 20px '+(shotResult==='goal'?'rgba(255,255,0,0.9)':'rgba(255,0,0,0.9)'),
            whiteSpace:'nowrap',
            zIndex:1000
          }},shotResult==='goal'?'⚽ GOAL !!':(lang==='fr'?'🦂 ARRETE !':lang==='es'?'🦂 PARADO !':lang==='pt'?'🦂 DEFENDIDO !':lang==='it'?'🦂 PARATO !':lang==='de'?'🦂 GEHALTEN !':'🦂 SAVED !!')),

          // Crowd
          shotResult==='goal'&&e('div',{style:{position:'absolute',bottom:4,left:0,right:0,textAlign:'center',fontSize:16,zIndex:50}},'🎉🎊🎉'),
          shotResult==='saved'&&e('div',{style:{position:'absolute',bottom:4,left:0,right:0,textAlign:'center',fontSize:16,zIndex:50}},'👏🦂👏')
        )
        ,
        // Combo
        combo>=2&&e('div',{style:{textAlign:'center',marginBottom:8}},
          e('div',{style:{background:'linear-gradient(135deg,rgba(212,175,55,0.3),rgba(255,150,0,0.2))',border:'1px solid '+G,borderRadius:8,padding:'4px 16px',display:'inline-block',fontSize:12,fontWeight:'bold',color:G}},'🔥 COMBO x',combo,' !')
        ),
        gamePhase==='idle'&&e('button',{onClick:function(){setGamePhase('shooting');setTimer(3);},style:{width:'100%',background:'linear-gradient(135deg,'+G+',#b8963e)',border:'none',borderRadius:10,padding:'13px 0',fontSize:14,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer'}},
          lang==='fr'?'⚽ Commencer':lang==='es'?'⚽ Empezar':lang==='pt'?'⚽ Comecar':lang==='it'?'⚽ Inizia':lang==='de'?'⚽ Starten':'⚽ Start'
        ),
        gamePhase==='shooting'&&e('div',null,
          e('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8,padding:'0 4px'}},
            e('div',{style:{display:'flex',alignItems:'center',gap:5}},
              e('div',{style:{width:34,height:34,borderRadius:'50%',background:timer<=1?'rgba(200,40,40,0.3)':timer===2?'rgba(255,165,0,0.3)':'rgba(40,200,40,0.3)',border:'2px solid '+(timer<=1?'#ff6b6b':timer===2?'orange':'#90ee90'),display:'flex',alignItems:'center',justifyContent:'center',fontSize:15,fontWeight:'bold',color:timer<=1?'#ff6b6b':timer===2?'orange':'#90ee90'}},timer),
              e('div',{style:{fontSize:9,color:'#6a86a0'}},'sec')
            ),
            e('div',{style:{fontSize:10,color:'#6a86a0'}},lang==='fr'?'Ou tirez ?':lang==='es'?'Donde ?':lang==='pt'?'Para onde ?':lang==='it'?'Dove ?':lang==='de'?'Wohin ?':'Shoot where?')
          ),
          e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:8}},
            ['left','center','right'].map(function(dir){
              var labels={left:{en:'⬅ Left',fr:'⬅ Gauche',es:'⬅ Izq',pt:'⬅ Esq',it:'⬅ Sin',de:'⬅ Links'},center:{en:'⬆ Center',fr:'⬆ Centre',es:'⬆ Centro',pt:'⬆ Centro',it:'⬆ Centro',de:'⬆ Mitte'},right:{en:'➡ Right',fr:'➡ Droite',es:'➡ Der',pt:'➡ Dir',it:'➡ Des',de:'➡ Rechts'}};
              return e('button',{key:dir,onClick:function(){shootPenalty(dir);},style:{background:'linear-gradient(135deg,rgba(10,30,80,0.95),rgba(20,60,140,0.9))',border:'2px solid '+G,borderRadius:9,padding:'13px 4px',fontSize:12,fontWeight:'bold',color:G,cursor:'pointer'}},labels[dir][lang]||labels[dir].en);
            })
          )
        ),
        gamePhase==='animating'&&e('div',{style:{textAlign:'center',padding:'10px',color:G,fontSize:13}},'...'),
        gamePhase==='done'&&e('div',{style:{textAlign:'center'}},
          e('div',{style:{background:'linear-gradient(135deg,rgba(212,175,55,0.15),rgba(184,150,62,0.08))',border:'2px solid '+G,borderRadius:16,padding:'20px 16px',marginBottom:12}},
            e('div',{style:{fontSize:44,marginBottom:6}},gameScore===5?'🏆':gameScore===4?'🥇':gameScore===3?'⭐':gameScore===2?'👍':'😢'),
            e('div',{style:{fontSize:22,fontWeight:'bold',color:G,marginBottom:4}},gameScore,' / 5'),
            e('div',{style:{fontSize:12,color:gameScore>=4?'#90ee90':gameScore>=3?G:'#ff8888',marginBottom:4}},
              gameScore===5?(lang==='fr'?'PARFAIT ! Classe mondiale !':lang==='es'?'PERFECTO ! Clase mundial !':lang==='pt'?'PERFEITO ! Classe mundial !':lang==='it'?'PERFETTO ! Classe mondiale !':lang==='de'?'PERFEKT ! Weltklasse !':'PERFECT! World class!'):
              gameScore===4?(lang==='fr'?'Excellent ! Higuita ne peut rien !':lang==='es'?'Excelente ! Higuita sin opciones !':'Excellent! Higuita had no chance!'):
              gameScore===3?(lang==='fr'?'Pas mal ! Continue a t entrainer !':'Not bad! Keep practicing!'):
              (lang==='fr'?'Higuita a tout arrete... Revenge ?':lang==='es'?'Higuita para todo... Revancha ?':'Higuita saved everything... Revenge?')
            ),
            e('div',{style:{display:'flex',justifyContent:'center',gap:5,marginTop:8}},
              shotHistory.map(function(h,i){return e('div',{key:i,style:{width:22,height:22,borderRadius:'50%',background:h.scored?'rgba(40,200,40,0.4)':'rgba(200,40,40,0.4)',border:'1px solid '+(h.scored?'#90ee90':'#ff8888'),display:'flex',alignItems:'center',justifyContent:'center',fontSize:10}},h.scored?'⚽':'✗');})
            )
          ),
          e('button',{onClick:resetGame,style:{width:'100%',background:'linear-gradient(135deg,'+G+',#b8963e)',border:'none',borderRadius:10,padding:'12px 0',fontSize:13,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer'}},
            lang==='fr'?'🔄 Rejouer':lang==='es'?'🔄 Jugar':lang==='pt'?'🔄 Jogar':lang==='it'?'🔄 Rigioca':lang==='de'?'🔄 Nochmal':'🔄 Play Again'
          )
        ),
        e('div',{style:{height:1,background:'rgba(212,175,55,0.2)',margin:'16px 0'}}),
        e('div',{style:{textAlign:'center',marginBottom:8}},
          e('div',{style:{fontSize:11,fontWeight:'bold',color:G}},'🏆 PENALTY PRO - ANIMATED'),
          e('div',{style:{fontSize:9,color:'#6a86a0',marginTop:2}},lang==='fr'?'Version animee avec effets - PRO uniquement':lang==='es'?'Version animada - Solo PRO':lang==='pt'?'Versao animada - Apenas PRO':lang==='it'?'Versione animata - Solo PRO':lang==='de'?'Animierte Version - Nur PRO':'Animated version - PRO only')
        ),
        !premium&&e('div',{style:{background:'linear-gradient(135deg,rgba(212,175,55,0.12),rgba(184,150,62,0.06))',border:'1px solid '+G,borderRadius:12,padding:'16px',textAlign:'center'}},
          e('div',{style:{fontSize:24,marginBottom:6}},'🔒'),
          e('a',{href:getStripeLink(lang),target:'_blank',rel:'noopener',style:{background:'linear-gradient(135deg,'+G+',#ff9900)',border:'none',borderRadius:10,padding:'10px 24px',fontSize:12,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer',textDecoration:'none',display:'inline-block'}},'🏆 PRO - '+getPrice(lang))
        ),
        premium&&e('div',null,
          // PRO PENALTY GAME - Full animated version
          e('div',{style:{textAlign:'center',marginBottom:12}},
            e('div',{style:{fontSize:11,color:'#9bb0c8'}},'🎮 '+(lang==='fr'?'Version animee PRO avec effets speciaux':lang==='es'?'Version animada PRO con efectos especiales':lang==='pt'?'Versao animada PRO com efeitos especiais':lang==='it'?'Versione animata PRO con effetti speciali':lang==='de'?'Animierte PRO Version mit Spezialeffekten':'PRO Animated version with special effects'))
          ),

          // Animated pitch
          e('div',{style:{position:'relative',width:'100%',maxWidth:300,margin:'0 auto 14px',height:200,background:'linear-gradient(180deg,#0d3b0d,#1a5c1a,#2d8a2d)',borderRadius:12,overflow:'hidden',border:'2px solid rgba(255,255,255,0.3)',boxShadow:'0 0 20px rgba(0,255,0,0.1)'}},
            // Pitch markings
            e('div',{style:{position:'absolute',top:0,left:0,right:0,bottom:0,background:'repeating-linear-gradient(90deg,transparent,transparent 30px,rgba(255,255,255,0.03) 30px,rgba(255,255,255,0.03) 60px)'}}),
            // Goal
            e('div',{style:{position:'absolute',top:15,left:'15%',right:'15%',height:100,border:'3px solid white',borderBottom:'none',background:'rgba(255,255,255,0.06)',boxShadow:'inset 0 0 20px rgba(255,255,255,0.05)'}}),
            // Goal net lines
            e('div',{style:{position:'absolute',top:18,left:'16%',right:'16%',height:95,backgroundImage:'linear-gradient(rgba(255,255,255,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.08) 1px,transparent 1px)',backgroundSize:'20px 20px'}}),
            // Crowd effect top
            e('div',{style:{position:'absolute',top:0,left:0,right:0,height:15,background:'linear-gradient(180deg,rgba(255,200,100,0.15),transparent)',animation:'shimmer 2s infinite'}}),

            // HIGUITA - animated
            e('div',{style:{
              position:'absolute',
              top:shotResult==='saved'?10:keeperDir==='left'?15:keeperDir==='right'?15:25,
              left:keeperDir==='left'?'12%':keeperDir==='right'?'56%':'41%',
              fontSize:48,
              transition:'all 0.45s cubic-bezier(0.25,0.46,0.45,0.94)',
              transform:shotResult==='saved'
                ?'rotate(25deg) scaleY(-0.8)'
                :keeperDir==='left'?'rotate(-35deg) scaleX(-1)':keeperDir==='right'?'rotate(35deg)':'rotate(0deg)',
              filter:shotResult==='goal'?'grayscale(1) opacity(0.4)':shotResult==='saved'?'drop-shadow(0 0 15px gold)':'drop-shadow(0 4px 8px rgba(0,0,0,0.5))',
              lineHeight:1
            }},'🧤'),

            // Scorpion emoji when saves
            shotResult==='saved'&&e('div',{style:{position:'absolute',top:keeperDir==='left'?5:keeperDir==='right'?5:5,left:keeperDir==='left'?'16%':keeperDir==='right'?'54%':'38%',fontSize:24,animation:'spin 0.5s ease'}},'🦂'),

            // Ball with trail effect
            shotDir&&e('div',{style:{
              position:'absolute',
              bottom:shotResult?80:5,
              left:shotDir==='left'?'22%':shotDir==='right'?'64%':'40%',
              fontSize:shotResult?32:22,
              transition:'all 0.65s cubic-bezier(0.25,0.46,0.45,0.94)',
              filter:shotResult?'none':'blur(1px)',
              transform:shotResult==='goal'?'scale(1.3)':shotResult==='saved'?'scale(0.8)':'scale(1)'
            }},'⚽'),

            // GOAL flash effect
            shotResult==='goal'&&e('div',{style:{position:'absolute',top:0,left:0,right:0,bottom:0,background:'rgba(255,255,100,0.2)',borderRadius:10,animation:'shimmer 0.3s ease'}}),

            // Result banner
            shotResult&&e('div',{style:{
              position:'absolute',
              top:'45%',left:'50%',
              transform:'translate(-50%,-50%)',
              fontSize:22,fontWeight:'bold',
              color:shotResult==='goal'?'#ffff00':'#ff4444',
              textShadow:'0 0 20px '+(shotResult==='goal'?'rgba(255,255,0,0.8)':'rgba(255,0,0,0.8)'),
              letterSpacing:2,
              whiteSpace:'nowrap'
            }},
            shotResult==='goal'?'⚽ GOAL !!':(lang==='fr'?'✋ ARRETE !':lang==='es'?'✋ PARADO !':lang==='pt'?'✋ DEFENDIDO !':lang==='it'?'✋ PARATO !':lang==='de'?'✋ GEHALTEN !':'✋ SAVED !!')),

            // Crowd reaction
            shotResult==='goal'&&e('div',{style:{position:'absolute',bottom:5,left:0,right:0,textAlign:'center',fontSize:16}},'🎉🎊🎉'),
            shotResult==='saved'&&e('div',{style:{position:'absolute',bottom:5,left:0,right:0,textAlign:'center',fontSize:16}},'👏🦂👏')
          ),

          // Scoreboard PRO
          e('div',{style:{display:'flex',justifyContent:'center',gap:10,marginBottom:10}},
            e('div',{style:{textAlign:'center',background:'linear-gradient(135deg,rgba(40,160,40,0.3),rgba(40,200,40,0.1))',border:'1px solid rgba(40,200,40,0.5)',borderRadius:10,padding:'8px 14px',boxShadow:'0 0 10px rgba(40,200,40,0.1)'}},
              e('div',{style:{fontSize:22,fontWeight:'bold',color:'#90ee90'}},'⚽ ',gameScore),
              e('div',{style:{fontSize:9,color:'#6a86a0'}},'GOALS')
            ),
            e('div',{style:{textAlign:'center',background:'linear-gradient(135deg,rgba(212,175,55,0.2),rgba(184,150,62,0.05))',border:'1px solid '+G,borderRadius:10,padding:'8px 14px'}},
              e('div',{style:{fontSize:22,fontWeight:'bold',color:G}},shotsLeft),
              e('div',{style:{fontSize:9,color:'#6a86a0'}},'LEFT')
            ),
            e('div',{style:{textAlign:'center',background:'linear-gradient(135deg,rgba(200,40,40,0.3),rgba(200,60,60,0.1))',border:'1px solid rgba(200,60,60,0.5)',borderRadius:10,padding:'8px 14px'}},
              e('div',{style:{fontSize:22,fontWeight:'bold',color:'#ff8888'}},'✗ ',gameMiss),
              e('div',{style:{fontSize:9,color:'#6a86a0'}},'SAVED')
            )
          ),

          // Shot dots PRO style
          e('div',{style:{display:'flex',justifyContent:'center',gap:6,marginBottom:10}},
            [0,1,2,3,4].map(function(i){
              var h=shotHistory[i];
              return e('div',{key:i,style:{width:28,height:28,borderRadius:'50%',background:h?(h.scored?'rgba(40,200,40,0.5)':'rgba(200,40,40,0.5)'):'rgba(255,255,255,0.08)',border:'2px solid '+(h?(h.scored?'#90ee90':'#ff6666'):'rgba(255,255,255,0.15)'),display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,boxShadow:h&&h.scored?'0 0 8px rgba(40,200,40,0.4)':h?'0 0 8px rgba(200,40,40,0.4)':'none'}},h?(h.scored?'⚽':'✗'):'');
            })
          ),

          // Combo
          combo>=2&&e('div',{style:{textAlign:'center',marginBottom:8}},
            e('div',{style:{background:'linear-gradient(135deg,rgba(255,150,0,0.3),rgba(212,175,55,0.2))',border:'1px solid '+G,borderRadius:10,padding:'5px 16px',display:'inline-block',fontSize:13,fontWeight:'bold',color:G,boxShadow:'0 0 12px rgba(212,175,55,0.3)'}},'🔥 COMBO x',combo,' !')
          ),

          // PRO Controls
          gamePhase==='idle'&&e('button',{
            onClick:function(){setGamePhase('shooting');setTimer(3);},
            style:{width:'100%',background:'linear-gradient(135deg,#d4af37,#ff9900,#d4af37)',backgroundSize:'200% auto',border:'none',borderRadius:12,padding:'14px 0',fontSize:15,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer',boxShadow:'0 4px 15px rgba(212,175,55,0.4)'}
          },'⚽ '+(lang==='fr'?'LANCER LE JEU PRO':lang==='es'?'INICIAR JUEGO PRO':lang==='pt'?'INICIAR JOGO PRO':lang==='it'?'INIZIA GIOCO PRO':lang==='de'?'PRO SPIEL STARTEN':'START PRO GAME')),

          gamePhase==='shooting'&&e('div',null,
            e('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}},
              e('div',{style:{display:'flex',alignItems:'center',gap:6}},
                e('div',{style:{width:36,height:36,borderRadius:'50%',background:timer<=1?'rgba(200,40,40,0.4)':timer===2?'rgba(255,165,0,0.3)':'rgba(40,200,40,0.2)',border:'2px solid '+(timer<=1?'#ff4444':timer===2?'orange':'#90ee90'),display:'flex',alignItems:'center',justifyContent:'center',fontSize:16,fontWeight:'bold',color:timer<=1?'#ff4444':timer===2?'orange':'#90ee90',boxShadow:timer<=1?'0 0 10px rgba(255,0,0,0.3)':'none'}},timer),
                e('div',{style:{fontSize:9,color:'#6a86a0'}},'sec')
              ),
              e('div',{style:{fontSize:11,color:'#9bb0c8',fontWeight:'bold'}},lang==='fr'?'🎯 Ou tirez ?':lang==='es'?'🎯 Donde ?':lang==='pt'?'🎯 Para onde ?':lang==='it'?'🎯 Dove ?':lang==='de'?'🎯 Wohin ?':'🎯 Where?')
            ),
            e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:8}},
              ['left','center','right'].map(function(dir){
                var arrows={left:'⬅',center:'⬆',right:'➡'};
                var lbls={left:{en:'Left',fr:'Gauche',es:'Izq',pt:'Esq',it:'Sin',de:'Links'},center:{en:'Center',fr:'Centre',es:'Centro',pt:'Centro',it:'Centro',de:'Mitte'},right:{en:'Right',fr:'Droite',es:'Der',pt:'Dir',it:'Des',de:'Rechts'}};
                return e('button',{key:dir,onClick:function(){shootPenalty(dir);},style:{
                  background:'linear-gradient(135deg,rgba(20,40,100,0.95),rgba(40,80,160,0.9))',
                  border:'2px solid '+G,borderRadius:10,padding:'14px 4px',
                  fontSize:11,fontWeight:'bold',color:G,cursor:'pointer',
                  boxShadow:'0 4px 10px rgba(212,175,55,0.2)'
                }},
                  e('div',{style:{fontSize:24,marginBottom:4}},arrows[dir]),
                  e('div',{style:{fontSize:10}},lbls[dir][lang]||lbls[dir].en)
                );
              })
            )
          ),

          gamePhase==='animating'&&e('div',{style:{textAlign:'center',padding:'12px',color:G,fontSize:13,letterSpacing:2}},'• • •'),

          gamePhase==='done'&&e('div',{style:{textAlign:'center'}},
            e('div',{style:{background:'linear-gradient(135deg,rgba(212,175,55,0.25),rgba(184,150,62,0.12))',border:'2px solid '+G,borderRadius:18,padding:'22px 16px',marginBottom:12,boxShadow:'0 0 30px rgba(212,175,55,0.2)'}},
              e('div',{style:{fontSize:52,marginBottom:8}},gameScore===5?'🏆':gameScore===4?'🥇':gameScore===3?'⭐':gameScore===2?'👍':'😢'),
              e('div',{style:{fontSize:24,fontWeight:'bold',color:G,marginBottom:4}},gameScore,' / 5'),
              e('div',{style:{fontSize:12,color:gameScore>=4?'#90ee90':gameScore>=3?G:'#ff8888',marginBottom:8}},
                gameScore===5?(lang==='fr'?'🏆 PARFAIT ! Higuita capitule !':lang==='es'?'🏆 PERFECTO ! Higuita se rinde !':lang==='pt'?'🏆 PERFEITO ! Higuita se rende !':lang==='it'?'🏆 PERFETTO ! Higuita si arrende !':lang==='de'?'🏆 PERFEKT ! Higuita kapituliert !':'🏆 PERFECT! Higuita surrenders!'):
                gameScore>=4?(lang==='fr'?'Excellent ! Higuita impressionne !':'Excellent! Higuita is impressed!'):
                gameScore>=3?(lang==='fr'?'Pas mal ! Higuita a du boulot !':'Not bad! Higuita worked hard!'):
                (lang==='fr'?'🦂 Higuita fait le Scorpion et tout arrete !':'🦂 Higuita scorpion-kicked everything!')
              ),
              e('div',{style:{display:'flex',justifyContent:'center',gap:5}},
                shotHistory.map(function(h,i){return e('div',{key:i,style:{width:24,height:24,borderRadius:'50%',background:h.scored?'rgba(40,200,40,0.5)':'rgba(200,40,40,0.5)',border:'1px solid '+(h.scored?'#90ee90':'#ff6666'),display:'flex',alignItems:'center',justifyContent:'center',fontSize:11}},h.scored?'⚽':'✗');})
              )
            ),
            e('button',{onClick:resetGame,style:{width:'100%',background:'linear-gradient(135deg,'+G+',#ff9900)',border:'none',borderRadius:12,padding:'13px 0',fontSize:14,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer',boxShadow:'0 4px 15px rgba(212,175,55,0.4)'}},
              lang==='fr'?'🔄 Rejouer':lang==='es'?'🔄 Jugar':lang==='pt'?'🔄 Jogar':lang==='it'?'🔄 Rigioca':lang==='de'?'🔄 Nochmal':'🔄 Play Again'
            )
          )
          )
        ):null,

      // ── TAB 4 - QUIZ CHAMPIONSHIP ─────────────────────────────
      tab===4?e('div',null,
        e('div',{style:{textAlign:'center',marginBottom:14}},
          e('div',{style:{fontSize:14,fontWeight:'bold',color:G,letterSpacing:2}},'🏆 QUIZ CHAMPIONSHIP'),
          e('div',{style:{fontSize:10,color:'#6a86a0',marginTop:3}},
            lang==='fr'?'30 questions sur l histoire de la Coupe du Monde !':
            lang==='es'?'30 preguntas sobre la historia del Mundial !':
            lang==='pt'?'30 perguntas sobre a historia da Copa do Mundo !':
            lang==='it'?'30 domande sulla storia del Mondiale !':
            lang==='de'?'30 Fragen zur Geschichte der WM !':
            '30 questions on World Cup history!'
          )
        ),

        // IDLE - Level selection
        qcPhase==='idle'&&e('div',null,
          e('div',{style:{display:'grid',gridTemplateColumns:'1fr',gap:10,marginBottom:14}},
            [
              {level:'easy',icon:'🟢',label:{en:'BEGINNER',fr:'DEBUTANT',es:'PRINCIPIANTE',pt:'INICIANTE',it:'PRINCIPIANTE',de:'ANFANGER'},desc:{en:'10 questions - 5 pts each - 50 pts max',fr:'10 questions - 5 pts chacune - 50 pts max',es:'10 preguntas - 5 pts cada una - 50 pts max',pt:'10 perguntas - 5 pts cada - 50 pts max',it:'10 domande - 5 pts ciascuna - 50 pts max',de:'10 Fragen - je 5 Pkte - max 50 Pkte'},color:'rgba(40,160,40,0.2)',border:'rgba(40,200,40,0.5)'},
              {level:'medium',icon:'🟡',label:{en:'EXPERT',fr:'EXPERT',es:'EXPERTO',pt:'ESPECIALISTA',it:'ESPERTO',de:'EXPERTE'},desc:{en:'10 questions - 10 pts each - 100 pts max',fr:'10 questions - 10 pts chacune - 100 pts max',es:'10 preguntas - 10 pts cada una - 100 pts max',pt:'10 perguntas - 10 pts cada - 100 pts max',it:'10 domande - 10 pts ciascuna - 100 pts max',de:'10 Fragen - je 10 Pkte - max 100 Pkte'},color:'rgba(255,165,0,0.2)',border:'rgba(255,165,0,0.5)'},
              {level:'hard',icon:'🔴',label:{en:'WORLD CLASS',fr:'CLASSE MONDIALE',es:'CLASE MUNDIAL',pt:'CLASSE MUNDIAL',it:'CLASSE MONDIALE',de:'WELTKLASSE'},desc:{en:'10 questions - 20 pts each - 200 pts max',fr:'10 questions - 20 pts chacune - 200 pts max',es:'10 preguntas - 20 pts cada una - 200 pts max',pt:'10 perguntas - 20 pts cada - 200 pts max',it:'10 domande - 20 pts ciascuna - 200 pts max',de:'10 Fragen - je 20 Pkte - max 200 Pkte'},color:'rgba(200,40,40,0.2)',border:'rgba(200,60,60,0.5)'}
            ].map(function(lvl){
              return e('div',{key:lvl.level,
                onClick:function(){
                  setQcRound(lvl.level==='easy'?0:lvl.level==='medium'?1:2);
                  setQcIdx(0);setQcScore(0);setQcSelected(null);setQcAnswered(false);
                  setQcPhase('playing');
                },
                style:{background:lvl.color,border:'2px solid '+lvl.border,borderRadius:14,padding:'14px 16px',cursor:'pointer',display:'flex',alignItems:'center',gap:12}
              },
                e('div',{style:{fontSize:28}},' ',lvl.icon),
                e('div',null,
                  e('div',{style:{fontSize:13,fontWeight:'bold',color:'#eee8d5',marginBottom:3}},lvl.label[lang]||lvl.label.en),
                  e('div',{style:{fontSize:10,color:'#9bb0c8'}},(lvl.desc[lang]||lvl.desc.en))
                )
              );
            })
          ),
          // Records display
          e('div',{style:{background:CB,border:'1px solid '+BD,borderRadius:10,padding:'10px 14px'}},
            e('div',{style:{fontSize:10,color:G,fontWeight:'bold',marginBottom:6}},
              lang==='fr'?'Records de la Coupe du Monde :':
              lang==='es'?'Datos curiosos del Mundial :':
              lang==='pt'?'Curiosidades da Copa do Mundo :':
              lang==='it'?'Curiosita sul Mondiale :':
              lang==='de'?'WM Rekorde :':
              'World Cup Records:'
            ),
            [
              {en:'🥅 Most WC goals: Miroslav Klose (16)',fr:'🥅 Record buts: Miroslav Klose (16)',es:'🥅 Record goles: Miroslav Klose (16)',pt:'🥅 Record gols: Miroslav Klose (16)',it:'🥅 Record gol: Miroslav Klose (16)',de:'🥅 Rekord Tore: Miroslav Klose (16)'},
              {en:'⚡ Fastest goal: Hakan Sukur - 10.8 sec (2002)',fr:'⚡ But le plus rapide: Hakan Sukur - 10.8 sec',es:'⚡ Gol mas rapido: Hakan Sukur - 10.8 seg',pt:'⚡ Gol mais rapido: Hakan Sukur - 10.8 seg',it:'⚡ Gol piu veloce: Hakan Sukur - 10.8 sec',de:'⚡ Schnellstes Tor: Hakan Sukur - 10.8 Sek'},
              {en:'🎯 Most in one tournament: Fontaine 13 goals (1958)',fr:'🎯 Plus de buts en un tournoi: Fontaine 13 (1958)',es:'🎯 Mas goles en un torneo: Fontaine 13 (1958)',pt:'🎯 Mais gols em torneio: Fontaine 13 (1958)',it:'🎯 Piu gol in torneo: Fontaine 13 (1958)',de:'🎯 Meiste Tore in Turnier: Fontaine 13 (1958)'},
              {en:'👴 Oldest scorer: Roger Milla - 42 years (1994)',fr:'👴 Plus vieux buteur: Roger Milla - 42 ans (1994)',es:'👴 Goleador mas viejo: Roger Milla - 42 anos (1994)',pt:'👴 Goleador mais velho: Roger Milla - 42 anos (1994)',it:'👴 Marcatore piu anziano: Roger Milla - 42 anni (1994)',de:'👴 Altester Torschutze: Roger Milla - 42 Jahre (1994)'}
            ].map(function(fact,i){
              return e('div',{key:i,style:{fontSize:10,color:'#a0b8cc',padding:'4px 0',borderBottom:i<3?'1px solid rgba(255,255,255,0.05)':'none'}},fact[lang]||fact.en);
            })
          )
        ),

        // PLAYING
        qcPhase==='playing'&&e('div',null,
          (function(){
            var levelKey=qcRound===0?'easy':qcRound===1?'medium':'hard';
            var questions=(QUIZ_CHAMPIONSHIP[levelKey]||[]).slice(0,10);
            var q=questions[qcIdx];
            if(!q)return null;
            var levelColors={easy:'#90ee90',medium:'orange',hard:'#ff6b6b'};
            var levelColor=levelColors[levelKey]||G;
            return e('div',null,
              // Header
              e('div',{style:{background:CB,border:'1px solid '+BD,borderRadius:10,padding:'10px 14px',marginBottom:10,display:'flex',justifyContent:'space-between',alignItems:'center'}},
                e('div',null,
                  e('div',{style:{fontSize:9,color:levelColor,fontWeight:'bold',letterSpacing:1}},
                    levelKey==='easy'?'🟢 '+(lang==='fr'?'DEBUTANT':'BEGINNER'):
                    levelKey==='medium'?'🟡 '+(lang==='fr'?'EXPERT':'EXPERT'):
                    '🔴 '+(lang==='fr'?'CLASSE MONDIALE':'WORLD CLASS')
                  ),
                  e('div',{style:{fontSize:10,color:'#6a86a0'}},'Q ',qcIdx+1,' / 10'),
                  e('div',{style:{fontSize:9,color:'#5a7090',marginTop:2}},'📚 ',q.cat)
                ),
                e('div',{style:{textAlign:'right'}},
                  e('div',{style:{fontSize:18,fontWeight:'bold',color:G}},qcScore),
                  e('div',{style:{fontSize:9,color:'#6a86a0'}},'pts'),
                  e('div',{style:{fontSize:9,color:levelColor}},'+',q.pts,' pts')
                )
              ),
              // Progress
              e('div',{style:{height:5,background:'rgba(255,255,255,0.08)',borderRadius:3,marginBottom:12,overflow:'hidden'}},
                e('div',{style:{width:(qcIdx/10*100)+'%',height:'100%',background:'linear-gradient(90deg,'+levelColor+','+G+')',borderRadius:3,transition:'width 0.4s'}})
              ),
              // Question
              e('div',{style:{background:'linear-gradient(135deg,rgba(10,22,54,0.97),rgba(18,45,110,0.85))',border:'1px solid rgba(212,175,55,0.3)',borderRadius:14,padding:'18px 14px',marginBottom:12,textAlign:'center'}},
                e('div',{style:{fontSize:15,fontWeight:'bold',color:'#fff',lineHeight:1.5}},q.q)
              ),
              // Options
              e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:10}},
                q.opts.map(function(opt,i){
                  var bg=CB,brd=BD,col='#eee8d5';
                  if(qcAnswered){
                    if(i===q.a){bg='rgba(40,160,40,0.25)';brd='rgba(40,200,40,0.7)';col='#90ee90';}
                    else if(i===qcSelected&&i!==q.a){bg='rgba(200,40,40,0.25)';brd='rgba(200,60,60,0.7)';col='#ff8888';}
                  }
                  return e('button',{key:i,
                    onClick:function(){
                      if(qcAnswered)return;
                      setQcSelected(i);setQcAnswered(true);
                      if(i===q.a)setQcScore(function(s){return s+q.pts;});
                    },
                    style:{background:bg,border:'1px solid '+brd,borderRadius:10,padding:'13px 8px',fontSize:12,color:col,cursor:qcAnswered?'default':'pointer',fontWeight:qcAnswered&&i===q.a?'bold':'normal',textAlign:'center',lineHeight:1.4}
                  },
                  qcAnswered&&i===q.a?'✅ ':qcAnswered&&i===qcSelected&&i!==q.a?'❌ ':'',
                  opt);
                })
              ),
              // Answer feedback
              qcAnswered&&e('div',{style:{textAlign:'center',fontSize:11,marginBottom:8,color:qcSelected===q.a?'#90ee90':'#ff8888',fontWeight:'bold'}},
                qcSelected===q.a?
                  (lang==='fr'?'Excellent ! +'+q.pts+' points !':lang==='es'?'Excelente ! +'+q.pts+' puntos !':lang==='pt'?'Excelente ! +'+q.pts+' pontos !':lang==='it'?'Eccellente ! +'+q.pts+' punti !':lang==='de'?'Ausgezeichnet ! +'+q.pts+' Punkte !':'Excellent! +'+q.pts+' points!'):
                  (lang==='fr'?'Mauvaise reponse ! La bonne etait: ':lang==='es'?'Respuesta incorrecta ! La correcta era: ':lang==='pt'?'Resposta errada ! A correta era: ':lang==='it'?'Risposta sbagliata ! La corretta era: ':lang==='de'?'Falsche Antwort ! Richtig war: ':'Wrong! The answer was: ')+q.opts[q.a]
              ),
              // Next button
              qcAnswered&&e('button',{
                onClick:function(){
                  if(qcIdx<9){setQcIdx(function(n){return n+1;});setQcSelected(null);setQcAnswered(false);}
                  else{setQcPhase('done');}
                },
                style:{width:'100%',background:'linear-gradient(135deg,'+G+',#b8963e)',border:'none',borderRadius:10,padding:'12px 0',fontSize:13,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer'}
              },qcIdx<9?
                (lang==='fr'?'Question suivante →':lang==='es'?'Siguiente pregunta →':lang==='pt'?'Proxima pergunta →':lang==='it'?'Domanda successiva →':lang==='de'?'Nachste Frage →':'Next question →'):
                (lang==='fr'?'Voir mon resultat !':lang==='es'?'Ver mi resultado !':lang==='pt'?'Ver meu resultado !':lang==='it'?'Vedi il risultato !':lang==='de'?'Ergebnis sehen !':'See my result!')
              )
            );
          })()
        ),

        // DONE
        qcPhase==='done'&&e('div',null,
          (function(){
            var levelKey=qcRound===0?'easy':qcRound===1?'medium':'hard';
            var maxPts=levelKey==='easy'?50:levelKey==='medium'?100:200;
            var pct=Math.round(qcScore/maxPts*100);
            var trophy=pct>=90?'🏆':pct>=70?'🥇':pct>=50?'🥈':pct>=30?'🥉':'📚';
            return e('div',null,
              e('div',{style:{background:'linear-gradient(135deg,rgba(212,175,55,0.2),rgba(184,150,62,0.1))',border:'2px solid '+G,borderRadius:18,padding:'18px 14px',marginBottom:10,textAlign:'center'}},
                e('div',{style:{fontSize:44,marginBottom:4}},trophy),
                e('div',{style:{fontSize:22,fontWeight:'bold',color:G,marginBottom:2}},qcScore,' / ',maxPts),
                e('div',{style:{fontSize:13,color:G,marginBottom:6}},pct,'%'),
                e('div',{style:{height:7,background:'rgba(255,255,255,0.1)',borderRadius:4,marginBottom:8,overflow:'hidden'}},
                  e('div',{style:{width:pct+'%',height:'100%',background:'linear-gradient(90deg,'+G+',#ff9900)',borderRadius:4}})
                ),
                e('div',{style:{fontSize:11,color:'#eee'}},
                  pct>=90?(lang==='fr'?'CHAMPION DU MONDE !':lang==='es'?'CAMPEON DEL MUNDO !':lang==='pt'?'CAMPEAO DO MUNDO !':lang==='it'?'CAMPIONE DEL MONDO !':lang==='de'?'WELTMEISTER !':'WORLD CHAMPION!'):
                  pct>=70?(lang==='fr'?'Excellent ! Super connaissance !':'Excellent! Great knowledge!'):
                  pct>=50?(lang==='fr'?'Pas mal ! Continue !':'Not bad! Keep going!'):
                  (lang==='fr'?'Continue a apprendre !':'Keep learning!')
                )
              ),
              !showLeaderboard&&e('div',{style:{background:CB,border:'1px solid '+G,borderRadius:12,padding:10,marginBottom:10}},
                e('div',{style:{fontSize:11,color:G,fontWeight:'bold',marginBottom:7}},'🏅 '+(lang==='fr'?'Ajouter au classement':lang==='es'?'Agregar al ranking':lang==='pt'?'Adicionar ao ranking':lang==='it'?'Aggiungi alla classifica':lang==='de'?'Zur Rangliste':'Save to leaderboard')),
                e('input',{type:'text',placeholder:lang==='fr'?'Ton prenom...':lang==='es'?'Tu nombre...':lang==='pt'?'Seu nome...':lang==='it'?'Il tuo nome...':lang==='de'?'Dein Name...':'Your name...',value:playerName,onChange:function(ev){setPlayerName(ev.target.value);},style:{width:'100%',background:'rgba(10,20,50,0.95)',color:'#eee',border:'1px solid '+G,borderRadius:8,padding:'8px 11px',fontSize:13,marginBottom:7}}),
                e('button',{onClick:function(){
                  if(!playerName.trim())return;
                  var entry={name:playerName.trim(),score:qcScore,max:maxPts,pct:pct,level:levelKey==='easy'?'🟢':levelKey==='medium'?'🟡':'🔴',trophy:trophy};
                  setLeaderboard(function(lb){return lb.concat([entry]).sort(function(a,b){return b.score-a.score;}).slice(0,10);});
                  setShowLeaderboard(true);
                },style:{width:'100%',background:'linear-gradient(135deg,'+G+',#b8963e)',border:'none',borderRadius:9,padding:'9px 0',fontSize:12,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer'}},'🏅 '+(lang==='fr'?'Confirmer':lang==='es'?'Confirmar':lang==='pt'?'Confirmar':lang==='it'?'Conferma':lang==='de'?'Bestatigen':'Confirm'))
              ),
              e('div',{style:{background:CB,border:'1px solid '+G,borderRadius:12,padding:10,marginBottom:10}},
                e('div',{style:{fontSize:12,fontWeight:'bold',color:G,marginBottom:8,textAlign:'center'}},'🏆 '+(lang==='fr'?'CLASSEMENT':lang==='es'?'RANKING':lang==='pt'?'RANKING':lang==='it'?'CLASSIFICA':lang==='de'?'RANGLISTE':'LEADERBOARD')),
                leaderboard.length===0&&e('div',{style:{textAlign:'center',color:'#6a86a0',fontSize:10,padding:6}},lang==='fr'?'Sois le premier !':lang==='es'?'Se el primero !':lang==='pt'?'Seja o primeiro !':lang==='it'?'Sii il primo !':lang==='de'?'Sei der Erste !':'Be the first!'),
                leaderboard.length>0&&e('div',null,
                  e('div',{style:{display:'grid',gridTemplateColumns:'20px 1fr 40px 32px 24px',gap:3,padding:'2px 4px',borderBottom:'1px solid rgba(212,175,55,0.2)',marginBottom:4}},
                    ['#','Name','Pts','%','Lvl'].map(function(h){return e('div',{key:h,style:{fontSize:8,color:'#6a86a0',textAlign:h==='Name'?'left':'center'}},h);})
                  ),
                  leaderboard.map(function(entry,i){
                    return e('div',{key:i,style:{display:'grid',gridTemplateColumns:'20px 1fr 40px 32px 24px',gap:3,alignItems:'center',padding:'5px 4px',background:i===0?'rgba(212,175,55,0.1)':'transparent',borderRadius:5,marginBottom:2}},
                      e('div',{style:{fontSize:11,textAlign:'center'}},i===0?'🥇':i===1?'🥈':i===2?'🥉':i+1),
                      e('div',{style:{fontSize:10,fontWeight:i===0?'bold':'normal',color:i===0?G:'#eee',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}},entry.name),
                      e('div',{style:{fontSize:10,fontWeight:'bold',color:G,textAlign:'center'}},entry.score),
                      e('div',{style:{fontSize:9,color:'#9bb0c8',textAlign:'center'}},entry.pct,'%'),
                      e('div',{style:{fontSize:11,textAlign:'center'}},entry.level)
                    );
                  })
                )
              ),
              e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:6,marginBottom:7}},
                [{r:0,icon:'🟢',lbl:'Easy'},{r:1,icon:'🟡',lbl:'Expert'},{r:2,icon:'🔴',lbl:'Pro'}].map(function(lvl){
                  return e('button',{key:lvl.r,onClick:function(){setQcRound(lvl.r);setQcIdx(0);setQcScore(0);setQcSelected(null);setQcAnswered(false);setQcPhase('playing');setShowLeaderboard(false);setPlayerName('');},style:{background:CB,border:'1px solid '+BD,borderRadius:8,padding:'8px 4px',fontSize:10,color:'#9bb0c8',cursor:'pointer'}},lvl.icon,' ',lvl.lbl);
                })
              ),
              e('button',{onClick:function(){setQcPhase('idle');setQcScore(0);setQcIdx(0);setQcSelected(null);setQcAnswered(false);setShowLeaderboard(false);setPlayerName('');},style:{width:'100%',background:'rgba(255,255,255,0.05)',border:'1px solid '+BD,borderRadius:8,padding:'9px 0',fontSize:11,color:'#6a86a0',cursor:'pointer'}},'🏠 Menu')
            );
          })()
        )
      ):null,

      // ── TAB 9 - FANTASY WORLD CUP ────────────────────────────
      tab===9?e('div',null,
        e('div',{style:{textAlign:'center',marginBottom:12}},
          e('div',{style:{fontSize:13,fontWeight:'bold',color:G,letterSpacing:2}},'⭐ FANTASY WORLD CUP'),
          e('div',{style:{fontSize:10,color:'#6a86a0',marginTop:3}},
            lang==='fr'?'Composez votre equipe de reve en 4-3-3 !':
            lang==='es'?'Compone tu equipo de suenos en 4-3-3 !':
            lang==='pt'?'Monte seu time dos sonhos em 4-3-3 !':
            lang==='it'?'Componi la tua squadra dei sogni in 4-3-3 !':
            lang==='de'?'Stelle dein Traumteam in 4-3-3 auf !':
            'Build your dream team in 4-3-3!'
          )
        ),
        e('div',{style:{background:'linear-gradient(180deg,#1a5c1a,#2d8a2d)',borderRadius:14,padding:'12px 8px',marginBottom:12,position:'relative'}},
          e('div',{style:{textAlign:'center',fontSize:10,color:'rgba(255,255,255,0.6)',marginBottom:10}},'4 - 3 - 3'),
          e('div',{style:{display:'flex',justifyContent:'space-around',marginBottom:10}},
            ['LW','CF','RW'].map(function(pos){
              var pl=fantasyTeam.find(function(p){return p.pos===pos;});
              return e('div',{key:pos,onClick:function(){if(!fantasyDone)setFantasyPos(pos);},style:{textAlign:'center',cursor:'pointer'}},
                e('div',{style:{width:50,height:50,borderRadius:'50%',background:pl?'linear-gradient(135deg,'+G+',#b8963e)':'rgba(255,255,255,0.15)',border:'2px solid '+(pl?G:'rgba(255,255,255,0.3)'),display:'flex',alignItems:'center',justifyContent:'center',marginBottom:3}},
                  pl?e('div',{style:{textAlign:'center'}},e('div',{style:{fontSize:8,fontWeight:'bold',color:'#0a0a1a',lineHeight:1}},pl.name.split(' ').pop()),e('div',{style:{fontSize:9}},pl.flag)):e('div',{style:{fontSize:18,color:'rgba(255,255,255,0.4)'}},'＋')
                ),
                e('div',{style:{fontSize:8,color:'rgba(255,255,255,0.85)',fontWeight:'bold',letterSpacing:0.3}},
                  ({LW:{fr:'Ail. Gauche',en:'Left Wing',es:'Ext. Izq',pt:'Ala Esq',it:'Ala Sin',de:'LA'},
                    CF:{fr:'Avant-Centre',en:'Centre Fwd',es:'Delantero C',pt:'Centroavante',it:'Prima Punta',de:'Mittelstürmer'},
                    RW:{fr:'Ail. Droit',en:'Right Wing',es:'Ext. Der',pt:'Ala Dir',it:'Ala Des',de:'RA'},
                    LM:{fr:'Milieu G',en:'Left Mid',es:'Medio Izq',pt:'Meio Esq',it:'Mezzala Sin',de:'LM'},
                    CM:{fr:'Milieu Centre',en:'Centre Mid',es:'Medio C',pt:'Meio Centro',it:'Centrocampista',de:'ZM'},
                    RM:{fr:'Milieu D',en:'Right Mid',es:'Medio Der',pt:'Meio Dir',it:'Mezzala Des',de:'RM'},
                    LB:{fr:'Arrière G',en:'Left Back',es:'Lateral Izq',pt:'Lateral Esq',it:'Terzino Sin',de:'LV'},
                    CB:{fr:'Défenseur C',en:'Centre Back',es:'Central',pt:'Zagueiro',it:'Difensore C',de:'IV'},
                    CB1:{fr:'Défenseur C',en:'Centre Back',es:'Central',pt:'Zagueiro',it:'Difensore C',de:'IV'},
                    CB2:{fr:'Défenseur C',en:'Centre Back',es:'Central',pt:'Zagueiro',it:'Difensore C',de:'IV'},
                    RB:{fr:'Arrière D',en:'Right Back',es:'Lateral Der',pt:'Lateral Dir',it:'Terzino Des',de:'RV'},
                    GK:{fr:'Gardien',en:'Goalkeeper',es:'Portero',pt:'Goleiro',it:'Portiere',de:'Torwart'}}[pos]||{})[lang]||pos)
              );
            })
          ),
          e('div',{style:{display:'flex',justifyContent:'space-around',marginBottom:10}},
            ['LM','CM','RM'].map(function(pos){
              var subMap={LM:0,CM:1,RM:2};
              var pl=fantasyTeam.find(function(p){return p.pos===pos;});
              return e('div',{key:pos,onClick:function(){if(!fantasyDone)setFantasyPos(pos);},style:{textAlign:'center',cursor:'pointer'}},
                e('div',{style:{width:46,height:46,borderRadius:'50%',background:pl?'linear-gradient(135deg,#4a90e2,#2c5fa8)':'rgba(255,255,255,0.15)',border:'2px solid '+(pl?'#4a90e2':'rgba(255,255,255,0.3)'),display:'flex',alignItems:'center',justifyContent:'center',marginBottom:3}},
                  pl?e('div',{style:{textAlign:'center'}},e('div',{style:{fontSize:7,fontWeight:'bold',color:'#fff',lineHeight:1}},pl.name.split(' ').pop()),e('div',{style:{fontSize:8}},pl.flag)):e('div',{style:{fontSize:16,color:'rgba(255,255,255,0.4)'}},'＋')
                ),
                e('div',{style:{fontSize:8,color:'rgba(255,255,255,0.85)',fontWeight:'bold',letterSpacing:0.3}},
                  ({LW:{fr:'Ail. Gauche',en:'Left Wing',es:'Ext. Izq',pt:'Ala Esq',it:'Ala Sin',de:'LA'},
                    CF:{fr:'Avant-Centre',en:'Centre Fwd',es:'Delantero C',pt:'Centroavante',it:'Prima Punta',de:'Mittelstürmer'},
                    RW:{fr:'Ail. Droit',en:'Right Wing',es:'Ext. Der',pt:'Ala Dir',it:'Ala Des',de:'RA'},
                    LM:{fr:'Milieu G',en:'Left Mid',es:'Medio Izq',pt:'Meio Esq',it:'Mezzala Sin',de:'LM'},
                    CM:{fr:'Milieu Centre',en:'Centre Mid',es:'Medio C',pt:'Meio Centro',it:'Centrocampista',de:'ZM'},
                    RM:{fr:'Milieu D',en:'Right Mid',es:'Medio Der',pt:'Meio Dir',it:'Mezzala Des',de:'RM'},
                    LB:{fr:'Arrière G',en:'Left Back',es:'Lateral Izq',pt:'Lateral Esq',it:'Terzino Sin',de:'LV'},
                    CB:{fr:'Défenseur C',en:'Centre Back',es:'Central',pt:'Zagueiro',it:'Difensore C',de:'IV'},
                    CB1:{fr:'Défenseur C',en:'Centre Back',es:'Central',pt:'Zagueiro',it:'Difensore C',de:'IV'},
                    CB2:{fr:'Défenseur C',en:'Centre Back',es:'Central',pt:'Zagueiro',it:'Difensore C',de:'IV'},
                    RB:{fr:'Arrière D',en:'Right Back',es:'Lateral Der',pt:'Lateral Dir',it:'Terzino Des',de:'RV'},
                    GK:{fr:'Gardien',en:'Goalkeeper',es:'Portero',pt:'Goleiro',it:'Portiere',de:'Torwart'}}[pos]||{})[lang]||pos)
              );
            })
          ),
          e('div',{style:{display:'flex',justifyContent:'space-around',marginBottom:10}},
            ['LB','CB','CB','RB'].map(function(pos,idx){
              var realPos=idx===1?'CB1':idx===2?'CB2':pos;
              var pl=fantasyTeam.find(function(p){return p.pos===realPos;});
              return e('div',{key:realPos,onClick:function(){if(!fantasyDone)setFantasyPos(realPos);},style:{textAlign:'center',cursor:'pointer'}},
                e('div',{style:{width:42,height:42,borderRadius:'50%',background:pl?'linear-gradient(135deg,#e74c3c,#c0392b)':'rgba(255,255,255,0.15)',border:'2px solid '+(pl?'#e74c3c':'rgba(255,255,255,0.3)'),display:'flex',alignItems:'center',justifyContent:'center',marginBottom:3}},
                  pl?e('div',{style:{textAlign:'center'}},e('div',{style:{fontSize:7,fontWeight:'bold',color:'#fff',lineHeight:1}},pl.name.split(' ').pop()),e('div',{style:{fontSize:7}},pl.flag)):e('div',{style:{fontSize:14,color:'rgba(255,255,255,0.4)'}},'＋')
                ),
                e('div',{style:{fontSize:8,color:'rgba(255,255,255,0.8)',fontWeight:'bold'}},(function(){var pl2={GK:{fr:'GB',en:'GK',es:'PO',pt:'GL',it:'PO',de:'TW'},DF:{fr:'DEF',en:'DF',es:'DEF',pt:'DEF',it:'DIF',de:'ABW'},MF:{fr:'MIL',en:'MF',es:'MED',pt:'MEI',it:'CEN',de:'MIT'},FW:{fr:'ATT',en:'FW',es:'DEL',pt:'ATA',it:'ATT',de:'STU'}};return (pl2[pos]||{})[lang]||pos;})())
              );
            })
          ),
          e('div',{style:{display:'flex',justifyContent:'center'}},
            (function(){
              var pl=fantasyTeam.find(function(p){return p.pos==='GK';});
              return e('div',{onClick:function(){if(!fantasyDone)setFantasyPos('GK');},style:{textAlign:'center',cursor:'pointer'}},
                e('div',{style:{width:48,height:48,borderRadius:'50%',background:pl?'linear-gradient(135deg,#f39c12,#e67e22)':'rgba(255,255,255,0.15)',border:'2px solid '+(pl?'#f39c12':'rgba(255,255,255,0.3)'),display:'flex',alignItems:'center',justifyContent:'center',marginBottom:3}},
                  pl?e('div',{style:{textAlign:'center'}},e('div',{style:{fontSize:7,fontWeight:'bold',color:'#fff',lineHeight:1}},pl.name.split(' ').pop()),e('div',{style:{fontSize:8}},pl.flag)):e('div',{style:{fontSize:16,color:'rgba(255,255,255,0.4)'}},'＋')
                ),
                e('div',{style:{fontSize:9,color:'rgba(255,255,255,0.8)',fontWeight:'bold'}},lang==='fr'?'GB':lang==='es'?'PO':lang==='pt'?'GL':lang==='it'?'PO':lang==='de'?'TW':'GK')
              );
            })()
          )
        ),
        fantasyPos&&!fantasyDone&&e('div',null,
          // Saved banner
          e('div',{style:{background:'rgba(144,238,144,0.15)',border:'1px solid rgba(144,238,144,0.4)',borderRadius:10,padding:'8px 16px',marginBottom:10,textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center',gap:8}},
            e('span',null,'✅'),
            e('span',{style:{fontSize:11,color:'#90ee90',fontWeight:'bold'}},
              lang==='fr'?'Equipe sauvegardée !':lang==='es'?'Equipo guardado !':lang==='pt'?'Time salvo !':lang==='it'?'Squadra salvata !':lang==='de'?'Team gespeichert !':'Team saved !'
            )
          )),
          e('div',{style:{background:CB,border:'1px solid '+G,borderRadius:12,padding:12,marginBottom:10}},
          e('div',{style:{fontSize:11,color:G,fontWeight:'bold',marginBottom:8}},(function(){
              var posMap={LW:'FW',CF:'FW',RW:'FW',LM:'MF',CM:'MF',RM:'MF',LB:'DF',CB:'DF',CB1:'DF',CB2:'DF',RB:'DF',GK:'GK'}; var roleMap={LW:'LW',RW:'RW',CF:'CF'};
              var posLabels={
                GK:{fr:'Gardien de but',en:'Goalkeeper',es:'Portero',pt:'Goleiro',it:'Portiere',de:'Torwart'},
                DF:{fr:'Defenseur',en:'Defender',es:'Defensa',pt:'Defensor',it:'Difensore',de:'Verteidiger'},
                MF:{fr:'Milieu de terrain',en:'Midfielder',es:'Centrocampista',pt:'Meio-campista',it:'Centrocampista',de:'Mittelfeld'},
                FW:{fr:'Attaquant',en:'Forward',es:'Delantero',pt:'Atacante',it:'Attaccante',de:'Sturmer'},
                LW:{fr:'Ailier gauche',en:'Left Winger',es:'Extremo izq',pt:'Ponta esq',it:'Ala sinistra',de:'Linksaussen'},
                RW:{fr:'Ailier droit',en:'Right Winger',es:'Extremo der',pt:'Ponta dir',it:'Ala destra',de:'Rechtsaussen'},
                CF:{fr:'Avant-centre',en:'Centre Forward',es:'Delantero centro',pt:'Centroavante',it:'Prima punta',de:'Mittelstuermer'},
                LM:{fr:'Milieu gauche',en:'Left Mid',es:'Medio izq',pt:'Meio esq',it:'Centrocampista sx',de:'Linkes Mittelfeld'},
                CM:{fr:'Milieu central',en:'Central Mid',es:'Medio centro',pt:'Meio central',it:'Centrocampista',de:'Zentrales Mittelfeld'},
                RM:{fr:'Milieu droit',en:'Right Mid',es:'Medio der',pt:'Meio dir',it:'Centrocampista dx',de:'Rechtes Mittelfeld'},
                LB:{fr:'Arriere gauche',en:'Left Back',es:'Lateral izq',pt:'Lateral esq',it:'Terzino sx',de:'Linker Aussenverteidiger'},
                CB:{fr:'Defenseur central',en:'Centre Back',es:'Central',pt:'Zagueiro',it:'Difensore centrale',de:'Innenverteidiger'},
                RB:{fr:'Arriere droit',en:'Right Back',es:'Lateral der',pt:'Lateral dir',it:'Terzino dx',de:'Rechter Aussenverteidiger'}
              };
              var lbl=posLabels[fantasyPos]||posLabels[posMap[fantasyPos]]||{};
              return (lang==='fr'?'Choisir: ':lang==='es'?'Elegir: ':lang==='pt'?'Escolher: ':lang==='it'?'Scegli: ':lang==='de'?'Wahle: ':'Pick: ')+(lbl[lang]||lbl.en||fantasyPos);
            })(),
          e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:5,maxHeight:160,overflowY:'auto'}},
            STARS.filter(function(s){
              var posMap={LW:'FW',CF:'FW',RW:'FW',LM:'MF',CM:'MF',RM:'MF',LB:'DF',CB:'DF',CB1:'DF',CB2:'DF',RB:'DF',GK:'GK'};
              var needed=posMap[fantasyPos]||fantasyPos;
              var roleNeeded=fantasyPos==='LW'||fantasyPos==='RW'||fantasyPos==='CF'?fantasyPos:null;
              var notPicked=!fantasyTeam.find(function(p){return p.name===s.name;});
              if(roleNeeded){
                // Show role-matched first, then other FW
                return s.pos===needed&&notPicked;
              }
              return s.pos===needed&&notPicked;
            }).map(function(s){
              return e('button',{key:s.name,onClick:function(){
                setFantasyTeam(function(t){return t.filter(function(p){return p.pos!==fantasyPos;}).concat([{name:s.name,flag:s.flag,pos:fantasyPos,rating:s.rating}]);});
                setFantasyPos(null);
              },style:{background:CB,border:'1px solid '+BD,borderRadius:8,padding:'7px 8px',fontSize:10,color:'#eee8d5',cursor:'pointer',textAlign:'left',display:'flex',gap:5,alignItems:'center'}},
                e('span',{style:{fontSize:16}},s.flag),
                e('div',null,
                  e('div',{style:{fontSize:10,fontWeight:'bold',color:'#eee'}},s.name),
                  e('div',{style:{fontSize:8,color:'#6a86a0'}},s.club),
                  e('div',{style:{fontSize:9,color:G}},s.rating,' ⭐')
                )
              );
            })
          ),
          e('button',{onClick:function(){setFantasyPos(null);},style:{width:'100%',background:'rgba(255,60,60,0.12)',border:'1px solid rgba(255,60,60,0.3)',borderRadius:7,padding:'7px 0',fontSize:10,color:'#ff6b6b',cursor:'pointer',marginTop:6}},lang==='fr'?'Annuler':lang==='es'?'Cancelar':lang==='pt'?'Cancelar':lang==='it'?'Annulla':lang==='de'?'Abbrechen':'Cancel')
        ),
        e('div',{style:{display:'flex',gap:8,marginTop:10}},
          // Progress indicator
          e('div',{style:{width:'100%',marginBottom:8,textAlign:'center',fontSize:10,color:fantasyTeam.length>=11?'#90ee90':'#6a86a0'}},
            (lang==='fr'?'Joueurs selectionnes':lang==='es'?'Jugadores':lang==='pt'?'Jogadores':lang==='de'?'Spieler':'Players')+': '+fantasyTeam.length+'/11 '+
            (fantasyTeam.length>=11?'✅':'')
          )),
          e('div',{style:{display:'flex',gap:8}},
          e('button',{onClick:function(){
                if(fantasyTeam.length>=11){
                  setFantasyDone(true);
                  try{
                    localStorage.setItem('wc2026_fantasy_team',JSON.stringify(fantasyTeam));
                    localStorage.setItem('wc2026_fantasy_done','true');
                  }catch(e){}
                }
              },style:{flex:2,background:fantasyTeam.length>=11?'linear-gradient(135deg,'+G+',#ff9900)':'rgba(212,175,55,0.15)',border:'2px solid '+(fantasyTeam.length>=11?G:'rgba(212,175,55,0.3)'),borderRadius:12,padding:'14px 0',fontSize:13,fontWeight:'bold',color:fantasyTeam.length>=11?'#0a0a1a':'#6a86a0',cursor:fantasyTeam.length>=11?'pointer':'default',transition:'all 0.3s'}},
            fantasyTeam.length<11
              ?(lang==='fr'?'Selectionner '+fantasyTeam.length+'/11 joueurs':lang==='es'?'Selecciona '+fantasyTeam.length+'/11 jugadores':lang==='pt'?'Selecione '+fantasyTeam.length+'/11 jogadores':lang==='it'?'Seleziona '+fantasyTeam.length+'/11 giocatori':lang==='de'?'Wahle '+fantasyTeam.length+'/11 Spieler':'Select '+fantasyTeam.length+'/11 players')
              :fantasyDone
              ?'✅ '+(lang==='fr'?'Equipe sauvegardee !':lang==='es'?'Equipo guardado !':lang==='pt'?'Time salvo !':lang==='it'?'Squadra salvata !':lang==='de'?'Team gespeichert !':'Team saved !')
              :'💾 '+(lang==='fr'?'Sauvegarder mon equipe':lang==='es'?'Guardar mi equipo':lang==='pt'?'Salvar meu time':lang==='it'?'Salva la mia squadra':lang==='de'?'Team speichern':'Save my team')),
          e('button',{onClick:function(){
                setFantasyTeam([]);setFantasyPos(null);setFantasyDone(false);
                try{localStorage.removeItem('wc2026_fantasy_team');localStorage.removeItem('wc2026_fantasy_done');}catch(e){}
              },style:{flex:1,background:'rgba(255,60,60,0.12)',border:'1px solid rgba(255,60,60,0.3)',borderRadius:12,padding:'14px 0',fontSize:12,color:'#ff6b6b',cursor:'pointer',fontWeight:'bold'}},
            lang==='fr'?'🗑️ Reset':lang==='es'?'🗑️ Reset':lang==='pt'?'🗑️ Reset':lang==='it'?'🗑️ Reset':lang==='de'?'🗑️ Reset':'🗑️ Reset'
          )
        )
      )):null,

      // ── TAB 10 - MATCH PREDICTOR PRO ──────────────────────────
      tab===10?e('div',null,

        // PRO HEADER
        e('div',{style:{textAlign:'center',marginBottom:12}},
          e('div',{style:{fontSize:14,fontWeight:'bold',color:G,letterSpacing:2}},'🏆 PRO FEATURES'),
          e('div',{style:{fontSize:10,color:'#6a86a0',marginTop:3}},
            lang==='fr'?'Accès exclusif membres PRO':lang==='es'?'Acceso exclusivo miembros PRO':lang==='pt'?'Acesso exclusivo membros PRO':lang==='it'?'Accesso esclusivo membri PRO':lang==='de'?'Exklusiver PRO-Zugang':'Exclusive PRO members access'
          )
        ),

        !premium?e('div',{style:{background:'linear-gradient(135deg,rgba(212,175,55,0.15),rgba(184,150,62,0.08))',border:'2px solid '+G,borderRadius:16,padding:'24px 16px',textAlign:'center',marginBottom:12}},
          e('div',{style:{fontSize:40,marginBottom:8}},'🔒'),
          e('div',{style:{fontSize:14,fontWeight:'bold',color:G,marginBottom:8}},
            lang==='fr'?'Débloquez le PRO !':lang==='es'?'Desbloquea el PRO !':lang==='pt'?'Desbloqueie o PRO !':lang==='it'?'Sblocca il PRO !':lang==='de'?'PRO freischalten !':'Unlock PRO!'
          ),
          e('div',{style:{fontSize:11,color:'#9bb0c8',marginBottom:16,lineHeight:1.8}},
            e('div',null,'🏟️ '+(lang==='fr'?'Stades WC 2026':'WC 2026 Stadiums')),
            e('div',null,'⭐ '+(lang==='fr'?'Légendes du football':'Football Legends')),
            e('div',null,'🌤️ '+(lang==='fr'?'Météo villes hôtes':'Host cities weather')),
            e('div',null,'📊 '+(lang==='fr'?'Stats face à face':'Head-to-head stats')),
            e('div',null,'🔔 '+(lang==='fr'?'Alertes équipes favorites':'Favourite team alerts')),
            e('div',null,'🚫 '+(lang==='fr'?'Sans publicité':'Ad-free experience'))
          ),
          e('a',{href:getStripeLink(lang),target:'_blank',rel:'noopener',style:{background:'linear-gradient(135deg,'+G+',#ff9900)',border:'none',borderRadius:12,padding:'14px 32px',fontSize:14,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer',textDecoration:'none',display:'inline-block',boxShadow:'0 4px 15px rgba(212,175,55,0.4)'}},
            '🏆 PRO - '+getPrice(lang))
        ):null,

        premium?e('div',null,
          // PRO NAV TABS
          e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:6,marginBottom:12}},
            [
              {i:0,icon:'🏟️',label:{en:'Stadiums',fr:'Stades',es:'Estadios',pt:'Estadios',it:'Stadi',de:'Stadien'}},
              {i:1,icon:'⭐',label:{en:'Legends',fr:'Légendes',es:'Leyendas',pt:'Lendas',it:'Leggende',de:'Legenden'}},
              {i:2,icon:'🌤️',label:{en:'Weather',fr:'Météo',es:'Tiempo',pt:'Tempo',it:'Meteo',de:'Wetter'}}
            ].map(function(t){
              return e('button',{key:t.i,onClick:function(){setProTab(t.i);},
                style:{background:proTab===t.i?'linear-gradient(135deg,'+G+',#b8963e)':'rgba(255,255,255,0.05)',
                  border:'1px solid '+(proTab===t.i?G:BD),borderRadius:10,padding:'10px 4px',
                  fontSize:10,fontWeight:'bold',color:proTab===t.i?'#0a0a1a':G,cursor:'pointer'}},
                t.icon,' ',t.label[lang]||t.label.en);
            })
          ),
          e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:6,marginBottom:14}},
            [
              {i:3,icon:'📊',label:{en:'Head2Head',fr:'Face à face',es:'H2H',pt:'H2H',it:'H2H',de:'H2H'}},
              {i:4,icon:'🔔',label:{en:'My Team',fr:'Mon équipe',es:'Mi equipo',pt:'Meu time',it:'Mia squadra',de:'Mein Team'}},
              {i:5,icon:'🚫',label:{en:'No Ads',fr:'Sans pub',es:'Sin anuncios',pt:'Sem anúncios',it:'Senza pub',de:'Keine Werbung'}}
            ].map(function(t){
              return e('button',{key:t.i,onClick:function(){setProTab(t.i);},
                style:{background:proTab===t.i?'linear-gradient(135deg,'+G+',#b8963e)':'rgba(255,255,255,0.05)',
                  border:'1px solid '+(proTab===t.i?G:BD),borderRadius:10,padding:'10px 4px',
                  fontSize:10,fontWeight:'bold',color:proTab===t.i?'#0a0a1a':G,cursor:'pointer'}},
                t.icon,' ',t.label[lang]||t.label.en);
            })
          ),

          // ── STADIUMS ──
          proTab===0&&e('div',null,
            e('div',{style:{fontSize:11,color:G,fontWeight:'bold',marginBottom:10,textAlign:'center'}},
              '🏟️ '+(lang==='fr'?'16 STADES — COUPE DU MONDE 2026':'16 STADIUMS — WORLD CUP 2026')
            ),
            STADIUMS.map(function(s,i){
              return e('div',{key:i,
                onClick:function(){setSelectedStadium(selectedStadium===i?null:i);},
                style:{background:CB,border:'1px solid '+(selectedStadium===i?G:BD),borderRadius:12,padding:'12px 14px',marginBottom:8,cursor:'pointer'}},
                e('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center'}},
                  e('div',null,
                    e('div',{style:{fontSize:12,fontWeight:'bold',color:G}},' ',s.flag,' ',s.name),
                    e('div',{style:{fontSize:10,color:'#6a86a0',marginTop:2}},s.city,' • ',s.cap.toLocaleString(),' seats'),
                    e('div',{style:{fontSize:10,color:'#5a7090'}},s.matches,' matches',s.final?' • 🏆 FINAL':'')
                  ),
                  e('div',{style:{fontSize:18}},selectedStadium===i?'▲':'▼')
                ),
                selectedStadium===i&&e('div',{style:{marginTop:10,paddingTop:10,borderTop:'1px solid rgba(212,175,55,0.2)'}},
                  e('div',{style:{display:'flex',gap:8,flexWrap:'wrap',marginBottom:8}},
                    e('span',{style:{background:'rgba(212,175,55,0.1)',border:'1px solid rgba(212,175,55,0.3)',borderRadius:8,padding:'4px 10px',fontSize:9,color:G}},'⛳ '+s.surface),
                    e('span',{style:{background:'rgba(0,80,200,0.1)',border:'1px solid rgba(0,80,200,0.3)',borderRadius:8,padding:'4px 10px',fontSize:9,color:'#7ab0ff'}},'🏠 '+s.roof),
                    e('span',{style:{background:'rgba(40,160,40,0.1)',border:'1px solid rgba(40,160,40,0.3)',borderRadius:8,padding:'4px 10px',fontSize:9,color:'#90ee90'}},s.flag+' '+s.country)
                  ),
                  s.facts.map(function(fact,fi){
                    return e('div',{key:fi,style:{fontSize:10,color:'#a0b8cc',padding:'4px 0',borderBottom:fi<2?'1px solid rgba(255,255,255,0.05)':'none'}},'• '+fact);
                  })
                )
              );
            })
          ),

          // ── LEGENDS ──
          proTab===1&&e('div',null,
            e('div',{style:{fontSize:11,color:G,fontWeight:'bold',marginBottom:10,textAlign:'center'}},
              '⭐ '+(lang==='fr'?'LÉGENDES DU FOOTBALL MONDIAL':'FOOTBALL LEGENDS')
            ),
            LEGENDS.map(function(leg,i){
              return e('div',{key:i,
                onClick:function(){setSelectedLegend(selectedLegend===i?null:i);},
                style:{background:CB,border:'1px solid '+(selectedLegend===i?G:BD),borderRadius:12,padding:'12px 14px',marginBottom:8,cursor:'pointer'}},
                e('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center'}},
                  e('div',{style:{display:'flex',gap:12,alignItems:'center'}},
                    e('div',{style:{fontSize:36}},leg.flag),
                    e('div',null,
                      e('div',{style:{fontSize:13,fontWeight:'bold',color:G}},leg.name),
                      e('div',{style:{fontSize:10,color:'#6a86a0'}},' ',leg.pos,' • ',leg.years),
                      e('div',{style:{fontSize:10,color:'#90ee90'}},'🏆 ',leg.wc,'x WC • ⚽ ',leg.wc_goals,' WC goals')
                    )
                  ),
                  e('div',{style:{fontSize:18}},selectedLegend===i?'▲':'▼')
                ),
                selectedLegend===i&&e('div',{style:{marginTop:10,paddingTop:10,borderTop:'1px solid rgba(212,175,55,0.2)'}},
                  e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:8,marginBottom:10}},
                    e('div',{style:{textAlign:'center',background:'rgba(212,175,55,0.1)',borderRadius:8,padding:8}},
                      e('div',{style:{fontSize:16,fontWeight:'bold',color:G}},leg.caps),
                      e('div',{style:{fontSize:9,color:'#6a86a0'}},'CAPS')
                    ),
                    e('div',{style:{textAlign:'center',background:'rgba(40,160,40,0.1)',borderRadius:8,padding:8}},
                      e('div',{style:{fontSize:16,fontWeight:'bold',color:'#90ee90'}},leg.goals),
                      e('div',{style:{fontSize:9,color:'#6a86a0'}},'GOALS')
                    ),
                    e('div',{style:{textAlign:'center',background:'rgba(255,150,0,0.1)',borderRadius:8,padding:8}},
                      e('div',{style:{fontSize:16,fontWeight:'bold',color:'orange'}},leg.wc),
                      e('div',{style:{fontSize:9,color:'#6a86a0'}},'WC TITLES')
                    )
                  ),
                  e('div',{style:{background:'rgba(10,20,50,0.8)',borderRadius:10,padding:'10px 12px',marginBottom:8,fontStyle:'italic'}},
                    e('div',{style:{fontSize:10,color:'#d4af37',lineHeight:1.5}},'"',leg.quote,'"')
                  ),
                  leg.facts.map(function(fact,fi){
                    return e('div',{key:fi,style:{fontSize:10,color:'#a0b8cc',padding:'4px 0',borderBottom:fi<2?'1px solid rgba(255,255,255,0.05)':'none'}},'• '+fact);
                  })
                )
              );
            })
          ),

          // ── WEATHER ──
          proTab===2&&e('div',null,
            e('div',{style:{fontSize:11,color:G,fontWeight:'bold',marginBottom:10,textAlign:'center'}},
              '🌤️ '+(lang==='fr'?'MÉTÉO VILLES HÔTES — JUIN/JUILLET 2026':'HOST CITIES WEATHER — JUNE/JULY 2026')
            ),
            e('div',{style:{fontSize:9,color:'#6a86a0',textAlign:'center',marginBottom:10}},
              lang==='fr'?'Prévisions moyennes pour la période du Mondial':'Average forecast for World Cup period'
            ),
            Object.keys(WC_WEATHER).map(function(city,i){
              var w=WC_WEATHER[city];
              return e('div',{key:i,style:{background:CB,border:'1px solid '+BD,borderRadius:12,padding:'12px 14px',marginBottom:8}},
                e('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:6}},
                  e('div',null,
                    e('div',{style:{fontSize:12,fontWeight:'bold',color:'#eee8d5'}},city),
                    e('div',{style:{fontSize:10,color:'#6a86a0'}},w.condition)
                  ),
                  e('div',{style:{textAlign:'right'}},
                    e('div',{style:{fontSize:28}},w.icon),
                    e('div',{style:{fontSize:14,fontWeight:'bold',color:G}},w.temp_c,'°C / ',w.temp_f,'°F')
                  )
                ),
                e('div',{style:{display:'flex',gap:8,marginBottom:6}},
                  e('span',{style:{fontSize:9,color:'#7ab0ff'}},'🌧️ Rain: ',w.rain),
                  e('span',{style:{fontSize:9,color:'#90ee90'}},'💨 Wind: ',w.wind)
                ),
                e('div',{style:{fontSize:9,color:'#d4af37',fontStyle:'italic'}},'💡 ',w.tip)
              );
            })
          ),

          // ── HEAD TO HEAD ──
          proTab===3&&e('div',null,
            e('div',{style:{fontSize:11,color:G,fontWeight:'bold',marginBottom:10,textAlign:'center'}},
              '📊 '+(lang==='fr'?'FACE À FACE — COMPARAISON ÉQUIPES':'HEAD TO HEAD — TEAM COMPARISON')
            ),
            e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:12}},
              e('div',null,
                e('div',{style:{fontSize:9,color:'#6a86a0',marginBottom:4}},lang==='fr'?'Équipe 1':'Team 1'),
                e('select',{value:compareTeam1||'',onChange:function(ev){setCompareTeam1(ev.target.value);},
                  style:{width:'100%',background:CB,color:'#eee',border:'1px solid '+G,borderRadius:8,padding:'8px',fontSize:11}},
                  e('option',{value:''},'-- Select --'),
                  Object.keys(TEAM_STRENGTH).map(function(t){return e('option',{key:t,value:t},t);})
                )
              ),
              e('div',null,
                e('div',{style:{fontSize:9,color:'#6a86a0',marginBottom:4}},lang==='fr'?'Équipe 2':'Team 2'),
                e('select',{value:compareTeam2||'',onChange:function(ev){setCompareTeam2(ev.target.value);},
                  style:{width:'100%',background:CB,color:'#eee',border:'1px solid '+G,borderRadius:8,padding:'8px',fontSize:11}},
                  e('option',{value:''},'-- Select --'),
                  Object.keys(TEAM_STRENGTH).map(function(t){return e('option',{key:t,value:t},t);})
                )
              )
            ),
            compareTeam1&&compareTeam2&&compareTeam1!==compareTeam2&&e('div',null,
              (function(){
                var t1=TEAM_STRENGTH[compareTeam1]||{atk:70,mid:70,def:70,ovr:70};
                var t2=TEAM_STRENGTH[compareTeam2]||{atk:70,mid:70,def:70,ovr:70};
                var cats=[
                  {label:'Overall',key:'ovr',icon:'⭐'},
                  {label:'Attack',key:'atk',icon:'⚽'},
                  {label:'Midfield',key:'mid',icon:'🎯'},
                  {label:'Defense',key:'def',icon:'🛡️'}
                ];
                return e('div',{style:{background:CB,border:'1px solid '+G,borderRadius:12,padding:12}},
                  e('div',{style:{display:'flex',justifyContent:'space-between',marginBottom:12}},
                    e('div',{style:{textAlign:'center'}},
                      e('div',{style:{fontSize:22,fontWeight:'bold',color:G}},compareTeam1),
                      e('div',{style:{fontSize:10,color:'#6a86a0'}},'Rating: ',t1.ovr)
                    ),
                    e('div',{style:{fontSize:20,color:'#6a86a0',alignSelf:'center'}},'VS'),
                    e('div',{style:{textAlign:'center'}},
                      e('div',{style:{fontSize:22,fontWeight:'bold',color:G}},compareTeam2),
                      e('div',{style:{fontSize:10,color:'#6a86a0'}},'Rating: ',t2.ovr)
                    )
                  ),
                  cats.map(function(cat,ci){
                    var v1=t1[cat.key]||70;
                    var v2=t2[cat.key]||70;
                    var total=v1+v2;
                    var pct1=Math.round(v1/total*100);
                    var pct2=100-pct1;
                    return e('div',{key:ci,style:{marginBottom:10}},
                      e('div',{style:{display:'flex',justifyContent:'space-between',fontSize:10,color:'#9bb0c8',marginBottom:4}},
                        e('span',{style:{fontWeight:'bold',color:v1>v2?G:'#6a86a0'}},v1),
                        e('span',null,cat.icon,' ',cat.label),
                        e('span',{style:{fontWeight:'bold',color:v2>v1?G:'#6a86a0'}},v2)
                      ),
                      e('div',{style:{display:'flex',height:8,borderRadius:4,overflow:'hidden'}},
                        e('div',{style:{width:pct1+'%',background:v1>=v2?G:'rgba(255,255,255,0.2)',transition:'width 0.5s'}}),
                        e('div',{style:{width:pct2+'%',background:v2>v1?'#7ab0ff':'rgba(255,255,255,0.2)',transition:'width 0.5s'}})
                      )
                    );
                  }),
                  e('div',{style:{textAlign:'center',marginTop:12,fontSize:11,color:G,fontWeight:'bold'}},
                    t1.ovr>t2.ovr?'🏆 '+compareTeam1+' favori !':
                    t2.ovr>t1.ovr?'🏆 '+compareTeam2+' favori !':
                    '🤝 Match équilibré !'
                  )
                );
              })()
            ),
            (!compareTeam1||!compareTeam2)&&e('div',{style:{textAlign:'center',padding:20,color:'#6a86a0',fontSize:11}},
              lang==='fr'?'Sélectionne 2 équipes pour comparer !':'Select 2 teams to compare!'
            )
          ),

          // ── MY TEAM ALERTS ──
          proTab===4&&e('div',null,
            e('div',{style:{fontSize:11,color:G,fontWeight:'bold',marginBottom:10,textAlign:'center'}},
              '🔔 '+(lang==='fr'?'MON ÉQUIPE FAVORITE':'MY FAVOURITE TEAM')
            ),
            e('div',{style:{background:CB,border:'1px solid '+BD,borderRadius:12,padding:14,marginBottom:12}},
              e('div',{style:{fontSize:11,color:'#9bb0c8',marginBottom:8}},
                lang==='fr'?'Choisis ton équipe pour recevoir des alertes personnalisées :':
                'Choose your team to receive personalised match alerts:'
              ),
              e('select',{value:favTeam,onChange:function(ev){setFavTeam(ev.target.value);},
                style:{width:'100%',background:'rgba(10,20,50,0.95)',color:'#eee',border:'1px solid '+G,borderRadius:8,padding:'10px',fontSize:12,marginBottom:10}},
                e('option',{value:''},'-- '+(lang==='fr'?'Choisir mon équipe':'Choose my team')+' --'),
                Object.keys(TEAM_STRENGTH).map(function(t){return e('option',{key:t,value:t},t);})
              ),
              favTeam&&e('div',{style:{background:'rgba(212,175,55,0.1)',border:'1px solid '+G,borderRadius:10,padding:12,textAlign:'center'}},
                e('div',{style:{fontSize:28,marginBottom:6}},'🔔'),
                e('div',{style:{fontSize:13,fontWeight:'bold',color:G,marginBottom:4}},favTeam),
                e('div',{style:{fontSize:10,color:'#9bb0c8'}},
                  lang==='fr'?'Tu recevras des alertes avant chaque match de '+favTeam+' !':
                  'You will receive alerts before every '+favTeam+' match!'
                )
              )
            ),
            e('div',{style:{background:'rgba(40,160,40,0.1)',border:'1px solid rgba(40,160,40,0.3)',borderRadius:10,padding:12}},
              e('div',{style:{fontSize:10,color:'#90ee90',fontWeight:'bold',marginBottom:6}},'🔔 '+(lang==='fr'?'Notifications activées pour :':'Notifications enabled for:')),
              e('div',{style:{fontSize:10,color:'#9bb0c8'}},
                e('div',null,'• '+(lang==='fr'?'1h avant le match':'1h before match')),
                e('div',null,'• '+(lang==='fr'?'Au coup de sifflet':'At final whistle')),
                e('div',null,'• '+(lang==='fr'?'Resultats et classement':'Results and standings'))
              )
            )
          ),

          // ── NO ADS ──
          proTab===5&&e('div',{style:{textAlign:'center',padding:'20px 0'}},
            e('div',{style:{fontSize:60,marginBottom:16}},'🚫'),
            e('div',{style:{fontSize:16,fontWeight:'bold',color:G,marginBottom:8}},
              lang==='fr'?'EXPÉRIENCE SANS PUB !':lang==='es'?'SIN ANUNCIOS !':lang==='pt'?'SEM ANÚNCIOS !':lang==='it'?'SENZA PUBBLICITÀ !':lang==='de'?'KEINE WERBUNG !':'AD-FREE EXPERIENCE!'
            ),
            e('div',{style:{fontSize:11,color:'#9bb0c8',marginBottom:20,lineHeight:1.8}},
              lang==='fr'?'En tant que membre PRO, profitez d une experience sans publicite !':
              'As a PRO member, you enjoy a completely ad-free experience!'
            ),
            e('div',{style:{background:'rgba(40,160,40,0.1)',border:'1px solid rgba(40,160,40,0.3)',borderRadius:14,padding:'16px 20px',display:'inline-block'}},
              ['🚫 No banner ads','🚫 No affiliate links','✅ Pure football content','✅ Faster loading','✅ Clean interface'].map(function(item,i){
                return e('div',{key:i,style:{fontSize:11,color:i<2?'#ff8888':'#90ee90',padding:'4px 0',textAlign:'left'}},item);
              })
            )
          )
        ):null
        ):null,

    !premium&&e('div',{style:{background:'rgba(2,5,15,0.95)',borderTop:'1px solid rgba(212,175,55,0.15)',padding:'8px 14px',textAlign:'center'}},
      e('div',{style:{fontSize:8,color:'#3a5070',marginBottom:4}},'ADVERTISEMENT'),
      e('div',{style:{borderTop:'1px solid rgba(212,175,55,0.1)',padding:'10px 16px',display:'flex',justifyContent:'center',gap:10,flexWrap:'wrap'}},
        (sponsors||SPONSORS.en).map(function(s){
          return e('a',{key:s.name,href:s.url,target:'_blank',rel:'noopener',
            style:{display:'flex',alignItems:'center',gap:5,background:'rgba(255,255,255,0.04)',border:'1px solid rgba(212,175,55,0.12)',borderRadius:16,padding:'5px 12px',textDecoration:'none',color:'#6a86a0',fontSize:10}},
            e('span',null,s.icon),' ',e('span',null,s.name));
        })
      ),

    e('footer',{style:{textAlign:'center',padding:'10px',fontSize:9,color:'#2e4460',borderTop:'1px solid rgba(212,175,55,0.08)',marginTop:4}},'World Cup 2026 Fan App - ',premium?'PRO':'Free')))
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
