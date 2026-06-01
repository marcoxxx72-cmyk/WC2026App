// ── INJECT NAV CSS ──
(function(){
  var s=document.createElement('style');
  s.textContent='#wc-nav-inner{flex-wrap:nowrap;min-width:max-content;justify-content:flex-start;width:auto;}@media(min-width:768px){#wc-nav-inner{flex-wrap:wrap;min-width:unset;justify-content:center;width:100%;}}';
  document.head.appendChild(s);
})();

var STADIUMS = [
  {name:'MetLife Stadium',city:'New York / New Jersey',country:'USA',flag:'🇺🇸',cap:82500,surface:'Grass',roof:'Open',matches:8,final:true,alt:5,lat:40.8135,lng:-74.0745,
   img:'/public/stadiums/metlife.jpg',
   facts:['Hosts the WC 2026 Final','Largest stadium in the tournament','Home of NY Giants & Jets']},
  {name:'SoFi Stadium',city:'Los Angeles',country:'USA',flag:'🇺🇸',cap:70240,surface:'Grass',roof:'Partial',matches:8,final:false,alt:27,lat:33.9534,lng:-118.3392,
   img:'/public/stadiums/sofi.jpg',
   facts:['Most expensive stadium ever built ($5.5B)','Opened in 2020','State-of-the-art technology']},
  {name:'AT&T Stadium',city:'Dallas',country:'USA',flag:'🇺🇸',cap:80000,surface:'Grass',roof:'Retractable',matches:9,final:false,alt:188,lat:32.7473,lng:-97.0945,
   img:'/public/stadiums/att.jpg',
   facts:['Retractable roof for comfort','Home of Dallas Cowboys NFL','Giant HD video screen']},
  {name:"Levi's Stadium",city:'San Francisco',country:'USA',flag:'🇺🇸',cap:68500,surface:'Grass',roof:'Open',matches:8,final:false,alt:18,lat:37.4033,lng:-121.9694,
   img:'/public/stadiums/levis.jpg',
   facts:['Silicon Valley tech hub location','Home of San Francisco 49ers','Solar panels on roof']},
  {name:'Arrowhead Stadium',city:'Kansas City',country:'USA',flag:'🇺🇸',cap:76416,surface:'Grass',roof:'Open',matches:7,final:false,alt:290,lat:39.0489,lng:-94.4839,
   img:'/public/stadiums/arrowhead.jpg',
   facts:['Loudest NFL stadium ever recorded','Home of Kansas City Chiefs','Opening match venue']},
  {name:'Gillette Stadium',city:'Boston',country:'USA',flag:'🇺🇸',cap:65878,surface:'Grass',roof:'Open',matches:6,final:false,alt:30,lat:42.0909,lng:-71.2643,
   img:'/public/stadiums/gillette.jpg',
   facts:['Home of New England Patriots NFL','Located in Foxborough near Boston','Opened 2002']},
  {name:'Lincoln Financial Field',city:'Philadelphia',country:'USA',flag:'🇺🇸',cap:69796,surface:'Grass',roof:'Open',matches:6,final:false,alt:12,lat:39.9008,lng:-75.1675,
   img:'/public/stadiums/lincoln.jpg',
   facts:['Home of Philadelphia Eagles NFL','Known as The Linc','One of most passionate fanbases in NFL']},
  {name:'Lumen Field',city:'Seattle',country:'USA',flag:'🇺🇸',cap:68740,surface:'Artificial',roof:'Partial',matches:6,final:false,alt:10,lat:47.5952,lng:-122.3316,
   img:'/public/stadiums/lumen.jpg',
   facts:['Home of Seattle Seahawks & Sounders MLS','Famous 12th Man crowd noise','Pacific Northwest iconic venue']},
  {name:'NRG Stadium',city:'Houston',country:'USA',flag:'🇺🇸',cap:72220,surface:'Grass',roof:'Retractable',matches:6,final:false,alt:15,lat:29.6847,lng:-95.4107,
   img:'/public/stadiums/nrg.jpg',
   facts:['First NFL stadium with retractable roof','Home of Houston Texans','Hosted Super Bowl LI']},
  {name:'Hard Rock Stadium',city:'Miami',country:'USA',flag:'🇺🇸',cap:65326,surface:'Grass',roof:'Open',matches:6,final:false,alt:3,lat:25.9580,lng:-80.2389,
   img:'/public/stadiums/hardrock.jpg',
   facts:['Home of Miami Dolphins NFL','Tropical heat & humidity challenge for players','Hosted multiple Super Bowls']},
  {name:'Mercedes-Benz Stadium',city:'Atlanta',country:'USA',flag:'🇺🇸',cap:71000,surface:'Grass',roof:'Retractable',matches:6,final:false,alt:320,lat:33.7553,lng:-84.4006,
   img:'/public/stadiums/mercedes.jpg',
   facts:['Most sustainable NFL stadium (LEED Platinum)','Iconic petal-shaped retractable roof','Home of Atlanta Falcons & Atlanta United FC']},
  {name:'Estadio Azteca',city:'Mexico City',country:'Mexico',flag:'🇲🇽',cap:87523,surface:'Grass',roof:'Open',matches:5,final:false,alt:2240,lat:19.3029,lng:-99.1504,
   img:'/public/stadiums/azteca.jpg',
   facts:['⚠️ Altitude 2,240m — players need 48h+ acclimatisation','Only stadium to host 3 World Cups (1970, 1986, 2026)','Maradona Hand of God & Goal of the Century — 1986']},
  {name:'Estadio Akron',city:'Guadalajara',country:'Mexico',flag:'🇲🇽',cap:49850,surface:'Grass',roof:'Partial',matches:5,final:false,alt:1566,lat:20.6817,lng:-103.4593,
   img:'/public/stadiums/akron.jpg',
   facts:['⚠️ Altitude 1,566m — significant physical impact on players','Home of Chivas de Guadalajara','Modern design opened 2010 with mountain views']},
  {name:'Estadio BBVA',city:'Monterrey',country:'Mexico',flag:'🇲🇽',cap:53500,surface:'Grass',roof:'Open',matches:5,final:false,alt:537,lat:25.6693,lng:-100.2436,
   img:'/public/stadiums/bbva.jpg',
   facts:['Altitude 537m — moderate impact','Spectacular Sierra Madre mountain backdrop','Home of CF Monterrey, one of Mexico\'s finest stadiums']},
  {name:'BC Place',city:'Vancouver',country:'Canada',flag:'🇨🇦',cap:54500,surface:'Artificial',roof:'Retractable',matches:7,final:false,alt:5,lat:49.2767,lng:-123.1116,
   img:'/public/stadiums/bcplace.jpg',
   facts:['Only Canadian stadium with retractable roof','Beautiful downtown waterfront location','Hosted 2010 Winter Olympics closing ceremony']},
  {name:'BMO Field',city:'Toronto',country:'Canada',flag:'🇨🇦',cap:45000,surface:'Grass',roof:'Open',matches:6,final:false,alt:76,lat:43.6333,lng:-79.4186,
   img:'/public/stadiums/bmo.jpg',
   facts:['Expanded to 45,000 seats for WC 2026','Home of Toronto FC MLS','Only open-air stadium in Canada in tournament']}
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
   facts:['Der Bomber - most prolific WC scorer of his era','Scored 365 goals for Bayern Munich','WC winner 1974 with West Germany']},
  {name:'Lionel Messi',flag:'🇦🇷',years:'2005-2022',caps:180,goals:106,wc:4,wc_goals:13,club:'Barcelona/PSG/Inter Miami',pos:'FW',
   quote:'You have to fight to reach your dream. You have to sacrifice and work hard for it.',
   facts:['World Cup winner 2022 with Argentina','8x Ballon d\'Or — record in history','Only player with WC title, UCL, Copa America & Euros equivalent']},
  {name:'Cristiano Ronaldo CR7',flag:'🇵🇹',years:'2003-2024',caps:212,goals:133,wc:5,wc_goals:8,club:'Man Utd/Real Madrid/Juventus',pos:'FW',
   quote:'Your love makes me strong, your hate makes me unstoppable.',
   facts:['All-time international top scorer — 133 goals','5x Ballon d\'Or winner','First player to score at 5 World Cups']},
  {name:'Michel Platini',flag:'🇫🇷',years:'1976-1987',caps:72,goals:41,wc:0,wc_goals:5,club:'St-Étienne/Juventus',pos:'MF',
   quote:'Football is a team sport, but you need individuals to win games.',
   facts:['3x Ballon d\'Or winner (1983-85)','Euro 1984 winner & top scorer (9 goals)','3rd place at 1986 WC — never won the trophy']},
  {name:'Alfredo Di Stéfano',flag:'🇦🇷',years:'1947-1966',caps:31,goals:23,wc:0,wc_goals:0,club:'River Plate/Real Madrid',pos:'FW',
   quote:'Whoever invented football deserves to be worshipped as a god.',
   facts:['5x European Cup winner with Real Madrid','Won 5 consecutive European Cups 1956-60','Considered one of greatest ever despite no WC title']},
  {name:'George Best',flag:'🇬🇧',years:'1964-1982',caps:37,goals:9,wc:0,wc_goals:0,club:'Manchester United',pos:'FW',
   quote:'I spent a lot of money on booze, birds and fast cars. The rest I just squandered.',
   facts:['Ballon d\'Or 1968','European Cup winner 1968 with Man Utd','Belfast Boy — greatest Northern Irish footballer ever']},
  {name:'Bobby Charlton',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',years:'1958-1970',caps:106,goals:49,wc:1,wc_goals:4,club:'Manchester United',pos:'MF',
   quote:'The greatest compliment you can pay any player is to say he never gives the ball away.',
   facts:['World Cup winner 1966 with England','European Cup winner 1968 with Man Utd','Survived the 1958 Munich Air Disaster']},
  {name:'Bobby Moore',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',years:'1962-1973',caps:108,goals:2,wc:1,wc_goals:0,club:'West Ham/Fulham',pos:'DF',
   quote:'The greatest footballer I ever played against. — Pelé',
   facts:['World Cup winner & captain 1966 with England','Voted England\'s greatest captain ever','Pelé called him the finest defender he ever faced']},
  {name:'Roberto Baggio',flag:'🇮🇹',years:'1988-2004',caps:56,goals:27,wc:0,wc_goals:9,club:'Juventus/AC Milan/Fiorentina',pos:'FW',
   quote:'Every penalty kick is a lottery. That one just wasn\'t for me.',
   facts:['WC finalist 1994 — missed the deciding penalty','Top scorer WC 1990 & 1994 with 9 WC goals total','Il Divin Codino — the Divine Ponytail']},
  {name:'Paolo Maldini',flag:'🇮🇹',years:'1988-2002',caps:126,goals:7,wc:0,wc_goals:0,club:'AC Milan',pos:'DF',
   quote:'If I have to make a tackle then I have already made a mistake.',
   facts:['5x Champions League winner with AC Milan','Spent entire 25-year career at AC Milan','Considered the greatest defender in football history']},
  {name:'Xavi Hernández',flag:'🇪🇸',years:'2000-2014',caps:133,goals:13,wc:1,wc_goals:0,club:'FC Barcelona/Al-Sadd',pos:'MF',
   quote:'Football is about being together, sharing the ball, the space.',
   facts:['World Cup winner 2010 with Spain','3x Euro winner with Spain (2008, 2010, 2012)','Architect of the greatest tiki-taka era in history']},
  {name:'Andrés Iniesta',flag:'🇪🇸',years:'2006-2018',caps:131,goals:13,wc:1,wc_goals:1,club:'FC Barcelona/Vissel Kobe',pos:'MF',
   quote:'I always try to play the simple ball, the ball that hurts the opposition.',
   facts:['Scored the winning goal in the 2010 WC Final','3x Euro winner with Spain','Golden Ball at 2012 Euros — masterclass in midfield play']},
  {name:'Ferenc Puskás',flag:'🇭🇺',years:'1945-1956',caps:85,goals:84,wc:0,wc_goals:11,club:'Honvéd/Real Madrid',pos:'FW',
   quote:'Football is the simplest game in the world. You just have to put the ball in the net.',
   facts:['84 goals in 85 caps for Hungary — all-time record rate','WC finalist 1954 with the legendary Magical Magyars','Scored 4 goals in the 1960 European Cup Final for Real Madrid']}
];

var STORIES = [
  {year:1986,flag:'🇦🇷',emoji:'✋',
   title:{en:'Hand of God',fr:'La Main de Dieu',es:'La Mano de Dios',pt:'A Mão de Deus',it:'La Mano di Dio',de:'Die Hand Gottes'},
   sub:{en:'Argentina vs England — QF Mexico 86',fr:'Argentine vs Angleterre — Quart de finale',es:'Argentina vs Inglaterra — Cuartos de final',pt:'Argentina vs Inglaterra — Quartas de final',it:'Argentina vs Inghilterra — Quarti di finale',de:'Argentinien vs England — Viertelfinale'},
   story:{en:'In the 51st minute, Maradona punched the ball in with his left hand — the referee missed it. Four minutes later, he scored the "Goal of the Century", dribbling past five English defenders. Argentina won 2-1 and went on to lift the World Cup.',fr:"À la 51e minute, Maradona pousse le ballon au fond des filets de la main gauche — l'arbitre ne voit rien. Quatre minutes plus tard, il inscrit le \"But du Siècle\", dribblant 5 défenseurs anglais. L'Argentine s'impose 2-1 et remporte le Mondial.",es:'En el minuto 51, Maradona empujó el balón con la mano izquierda — el árbitro no lo vio. Cuatro minutos después, marcó el "Gol del Siglo", regateando a 5 defensas ingleses. Argentina ganó 2-1 y se proclamó campeona.',pt:'Ao minuto 51, Maradona empurrou a bola para a rede com a mão esquerda — o árbitro não viu. Quatro minutos depois, marcou o "Gol do Século", driblando 5 defesas ingleses. A Argentina venceu 2-1 e sagrou-se campeã do mundo.',it:"Al 51° minuto, Maradona spinse il pallone in rete con la mano sinistra — l'arbitro non se ne accorse. Quattro minuti dopo, segnò il \"Gol del Secolo\", dribblando 5 difensori inglesi. L'Argentina vinse 2-1 e conquistò il Mondiale.",de:'In der 51. Minute schob Maradona den Ball mit der linken Hand ins Netz — der Schiedsrichter sah es nicht. Vier Minuten später erzielte er das "Tor des Jahrhunderts", an fünf englischen Verteidigern vorbei. Argentinien gewann 2:1 und holte den WM-Titel.'}},
  {year:1950,flag:'🇺🇾',emoji:'💔',
   title:{en:'The Maracanazo',fr:'Le Maracanazo',es:'El Maracanazo',pt:'O Maracanazo',it:'Il Maracanazo',de:'Das Maracanazo'},
   sub:{en:'Uruguay vs Brazil — Deciding Match',fr:'Uruguay vs Brésil — Match décisif',es:'Uruguay vs Brasil — Partido decisivo',pt:'Uruguai vs Brasil — Jogo decisivo',it:'Uruguay vs Brasile — Partita decisiva',de:'Uruguay vs Brasilien — Entscheidungsspiel'},
   story:{en:'Before 200,000 fans at the Maracanã, Brazil needed only a draw to win the World Cup. Uruguay won 2-1 in the 79th minute. The stadium fell silent. It remains the greatest shock in World Cup history — a national tragedy for Brazil.',fr:"Devant 200 000 fans au Maracanã, le Brésil n'avait besoin que d'un nul pour remporter le Mondial. L'Uruguay s'impose 2-1 à la 79e minute. Le stade se tait. C'est à ce jour le plus grand choc de l'histoire de la Coupe du Monde — une tragédie nationale pour le Brésil.",es:'Ante 200.000 aficionados en el Maracaná, Brasil solo necesitaba un empate para ganar el Mundial. Uruguay ganó 2-1 en el minuto 79. El estadio quedó en silencio. Sigue siendo el mayor golpe de la historia del Mundial — una tragedia nacional para Brasil.',pt:'Diante de 200.000 adeptos no Maracanã, o Brasil só precisava de um empate para ganhar o Mundial. O Uruguai venceu 2-1 aos 79 minutos. O estádio ficou em silêncio. Continua a ser o maior choque da história do Mundial — uma tragédia nacional para o Brasil.',it:"Davanti a 200.000 tifosi al Maracanã, il Brasile aveva bisogno solo di un pareggio per vincere il Mondiale. L'Uruguay vinse 2-1 al 79° minuto. Lo stadio ammutolì. Rimane il più grande shock nella storia del Mondiale — una tragedia nazionale per il Brasile.",de:'Vor 200.000 Zuschauern im Maracanã brauchte Brasilien nur ein Unentschieden, um den WM-Titel zu gewinnen. Uruguay gewann 2:1 in der 79. Minute. Das Stadion verstummte. Es bleibt der größte Schock der WM-Geschichte — eine nationale Tragödie für Brasilien.'}},
  {year:1954,flag:'🇩🇪',emoji:'⚡',
   title:{en:'Miracle of Berne',fr:'Le Miracle de Berne',es:'El Milagro de Berna',pt:'O Milagre de Berna',it:'Il Miracolo di Berna',de:'Das Wunder von Bern'},
   sub:{en:'West Germany vs Hungary — Final',fr:"Allemagne de l'Ouest vs Hongrie — Finale",es:'Alemania vs Hungría — Final',pt:'Alemanha vs Hungria — Final',it:'Germania Ovest vs Ungheria — Finale',de:'Westdeutschland vs Ungarn — Finale'},
   story:{en:'Hungary was unbeaten for 4 years with legends like Puskás — they had already hammered Germany 8-3 in the group stage. Yet West Germany won the final 3-2. The match that rebuilt a nation after World War II.',fr:"La Hongrie était invaincu depuis 4 ans avec des légendes comme Puskás — elle avait même déjà écrasé l'Allemagne 8-3 en phase de groupes. Pourtant l'Allemagne de l'Ouest gagne la finale 3-2. Le match qui reconstruisit une nation après la Seconde Guerre Mondiale.",es:'Hungría llevaba 4 años invicta con leyendas como Puskás — ya había aplastado a Alemania 8-3 en la fase de grupos. Sin embargo, Alemania Occidental ganó la final 3-2. El partido que reconstruyó una nación tras la Segunda Guerra Mundial.',pt:'A Hungria estava invicta há 4 anos com lendas como Puskás — já tinha esmagado a Alemanha 8-3 na fase de grupos. No entanto, a Alemanha Ocidental ganhou a final 3-2. O jogo que reconstruiu uma nação após a Segunda Guerra Mundial.',it:"L'Ungheria era imbattuta da 4 anni con leggende come Puskás — aveva già strapazzato la Germania 8-3 nella fase a gironi. Eppure la Germania Ovest vinse la finale 3-2. La partita che ricostruì una nazione dopo la Seconda Guerra Mondiale.",de:'Ungarn war seit 4 Jahren ungeschlagen mit Legenden wie Puskás — und hatte Deutschland in der Gruppenphase bereits 8:3 abgefertigt. Dennoch gewann Westdeutschland das Finale mit 3:2. Das Spiel, das eine Nation nach dem Zweiten Weltkrieg wiederaufbaute.'}},
  {year:1970,flag:'🇧🇷',emoji:'🎨',
   title:{en:'Brazil 1970: The Perfect Team',fr:"Brésil 1970 : L'Équipe Parfaite",es:'Brasil 1970: El Equipo Perfecto',pt:'Brasil 1970: A Equipa Perfeita',it:'Brasile 1970: La Squadra Perfetta',de:'Brasilien 1970: Das Perfekte Team'},
   sub:{en:'The most beautiful team in WC history',fr:"La plus belle équipe de l'histoire du Mondial",es:'El equipo más bello de la historia del Mundial',pt:'A equipa mais bonita da história do Mundial',it:'La squadra più bella della storia del Mondiale',de:'Das schönste Team der WM-Geschichte'},
   story:{en:'Pelé, Jairzinho, Rivelino, Tostão, Carlos Alberto. Brazil won all 6 matches, scored 19 goals. The 4-1 final against Italy featured the greatest team goal in history — 15 passes finished by Carlos Alberto. Football as art.',fr:"Pelé, Jairzinho, Rivelino, Tostão, Carlos Alberto. Le Brésil gagne ses 6 matchs, inscrit 19 buts. La finale 4-1 contre l'Italie voit peut-être le plus beau but collectif de l'histoire — 15 passes conclues par Carlos Alberto. Le football comme art.",es:'Pelé, Jairzinho, Rivelino, Tostão, Carlos Alberto. Brasil ganó los 6 partidos, marcó 19 goles. La final 4-1 contra Italia tuvo el mejor gol colectivo de la historia — 15 pases rematados por Carlos Alberto. El fútbol como arte.',pt:'Pelé, Jairzinho, Rivelino, Tostão, Carlos Alberto. O Brasil ganhou os 6 jogos, marcou 19 golos. A final 4-1 contra a Itália teve o melhor golo coletivo da história — 15 passes concluídos por Carlos Alberto. O futebol como arte.',it:"Pelé, Jairzinho, Rivelino, Tostão, Carlos Alberto. Il Brasile vinse tutte e 6 le partite, segnando 19 gol. La finale 4-1 contro l'Italia vide il più bel gol di squadra della storia — 15 passaggi conclusi da Carlos Alberto. Il calcio come arte.",de:'Pelé, Jairzinho, Rivelino, Tostão, Carlos Alberto. Brasilien gewann alle 6 Spiele und schoss 19 Tore. Das Finale 4:1 gegen Italien zeigte das schönste Mannschaftstor der Geschichte — 15 Pässe, abgeschlossen von Carlos Alberto. Fußball als Kunst.'}},
  {year:1998,flag:'🇫🇷',emoji:'🏆',
   title:{en:"France's First World Cup",fr:'Le Premier Titre Mondial de la France',es:'El Primer Mundial de Francia',pt:'O Primeiro Mundial da França',it:'Il Primo Mondiale della Francia',de:'Frankreichs Erster WM-Titel'},
   sub:{en:'France vs Brazil — Final, Saint-Denis',fr:'France vs Brésil — Finale, Saint-Denis',es:'Francia vs Brasil — Final, Saint-Denis',pt:'França vs Brasil — Final, Saint-Denis',it:'Francia vs Brasile — Finale, Saint-Denis',de:'Frankreich vs Brasilien — Finale, Saint-Denis'},
   story:{en:"Zidane scored two headers from corner kicks. A mysterious seizure sidelined Ronaldo, who played but was a shadow of himself. France won 3-0. An entire nation erupted. Les Bleus were world champions on home soil.",fr:"Zidane marque deux fois de la tête sur coups de coin. Une mystérieuse crise écarte Ronaldo, qui joue mais n'est que l'ombre de lui-même. La France gagne 3-0. Une nation entière explose. Les Bleus sont champions du monde à domicile.",es:'Zidane marcó dos cabezazos en saques de esquina. Una misteriosa convulsión dejó sin fuerzas a Ronaldo, que jugó pero no era él mismo. Francia ganó 3-0. Una nación entera estalló. Les Bleus eran campeones del mundo en casa.',pt:'Zidane marcou dois cabeceamentos em córners. Uma misteriosa convulsão afectou Ronaldo, que jogou mas não era o mesmo. A França ganhou 3-0. Uma nação inteira explodiu. Les Bleus eram campeões do mundo em casa.',it:"Zidane segnò due gol di testa su calcio d'angolo. Una misteriosa crisi debilitò Ronaldo, che giocò ma non era sé stesso. La Francia vinse 3-0. Una nazione intera esplose. Les Bleus erano campioni del mondo in casa.",de:'Zidane köpfte zweimal nach Ecken ein. Ein mysteriöser Krampfanfall schwächte Ronaldo, der spielte, aber nicht er selbst war. Frankreich gewann 3:0. Eine ganze Nation explodierte. Les Bleus waren Weltmeister im eigenen Land.'}},
  {year:2002,flag:'🇸🇳',emoji:'🌍',
   title:{en:'Senegal Shocks the Champions',fr:'Le Séisme Sénégalais',es:'Senegal Sacude a los Campeones',pt:'Senegal Choca os Campeões',it:'Il Senegal Scuote i Campioni',de:'Senegal erschüttert die Weltmeister'},
   sub:{en:'Senegal vs France — Group Stage',fr:'Sénégal vs France — Phase de groupes',es:'Senegal vs Francia — Fase de grupos',pt:'Senegal vs França — Fase de grupos',it:'Senegal vs Francia — Fase a gironi',de:'Senegal vs Frankreich — Gruppenphase'},
   story:{en:'France were defending champions with Zidane, Henry and Vieira. Senegal, at their first ever World Cup, won 1-0. France were eliminated in the group stage without scoring a single goal. Senegal then reached the quarter-finals.',fr:"La France était championne du monde en titre avec Zidane, Henry et Vieira. Le Sénégal, à son tout premier Mondial, gagne 1-0. La France est éliminée en phase de groupes sans marquer un seul but. Le Sénégal atteindra ensuite les quarts de finale.",es:'Francia era la campeona defensora con Zidane, Henry y Vieira. Senegal, en su primer Mundial, ganó 1-0. Francia fue eliminada en la fase de grupos sin marcar un solo gol. Senegal llegó después a los cuartos de final.',pt:'A França era campeã do mundo em título com Zidane, Henry e Vieira. O Senegal, no seu primeiro Mundial, ganhou 1-0. A França foi eliminada na fase de grupos sem marcar um único golo. O Senegal chegou depois aos quartos-de-final.',it:"La Francia era campione del mondo in carica con Zidane, Henry e Vieira. Il Senegal, alla sua prima partecipazione al Mondiale, vinse 1-0. La Francia fu eliminata nella fase a gironi senza segnare un solo gol. Il Senegal raggiunse poi i quarti di finale.",de:'Frankreich war der amtierende Weltmeister mit Zidane, Henry und Vieira. Der Senegal, bei seiner allerersten WM, gewann 1:0. Frankreich schied in der Gruppenphase aus, ohne ein einziges Tor zu erzielen. Der Senegal erreichte dann das Viertelfinale.'}},
  {year:2002,flag:'🇰🇷',emoji:'🔥',
   title:{en:"South Korea's Dream Run",fr:'La Course de Rêve de la Corée du Sud',es:'La Épica Carrera de Corea del Sur',pt:'A Corrida dos Sonhos da Coreia do Sul',it:'La Corsa da Sogno della Corea del Sud',de:'Südkoreas Traumlauf'},
   sub:{en:'South Korea — World Cup 2002',fr:'Corée du Sud — Coupe du Monde 2002',es:'Corea del Sur — Copa del Mundo 2002',pt:'Coreia do Sul — Copa do Mundo 2002',it:'Corea del Sud — Coppa del Mondo 2002',de:'Südkorea — WM 2002'},
   story:{en:'As co-hosts, South Korea defeated Poland, USA, Portugal, Spain and Italy to reach the semi-finals — Asia had never gone so far. 70,000 fans in red shirts packed every stadium. Coach Guus Hiddink became a national hero, later honoured with citizenship.',fr:"En tant que co-organisateurs, la Corée du Sud bat la Pologne, les USA, le Portugal, l'Espagne et l'Italie pour atteindre les demi-finales — l'Asie n'était jamais allée aussi loin. 70 000 fans en rouge dans chaque stade. L'entraîneur Guus Hiddink est devenu un héros national, gratifié plus tard de la citoyenneté honoraire.",es:'Como coanfitriones, Corea del Sur derrotó a Polonia, EE.UU., Portugal, España e Italia para llegar a las semifinales — Asia nunca había llegado tan lejos. 70.000 aficionados de rojo en cada estadio. El entrenador Guus Hiddink se convirtió en héroe nacional y recibió la ciudadanía honoraria.',pt:'Como co-anfitriã, a Coreia do Sul derrotou Polónia, EUA, Portugal, Espanha e Itália para chegar às meias-finais — a Ásia nunca tinha chegado tão longe. 70.000 adeptos de vermelho em cada estádio. O treinador Guus Hiddink tornou-se herói nacional e recebeu a cidadania honorária.',it:"Da co-organizzatrice, la Corea del Sud sconfisse Polonia, USA, Portogallo, Spagna e Italia per raggiungere le semifinali — l'Asia non era mai arrivata così lontano. 70.000 tifosi in rosso in ogni stadio. L'allenatore Guus Hiddink divenne eroe nazionale e ricevette la cittadinanza onoraria.",de:'Als Gastgeberland besiegte Südkorea Polen, die USA, Portugal, Spanien und Italien und erreichte das Halbfinale — Asien war nie so weit gekommen. 70.000 Fans in Rot füllten jedes Stadion. Trainer Guus Hiddink wurde zum nationalen Helden und erhielt später die Ehrenbürgerschaft.'}},
  {year:2006,flag:'🇫🇷',emoji:'💥',
   title:{en:"Zidane's Headbutt",fr:'Le Coup de Boule de Zidane',es:'El Cabezazo de Zidane',pt:'A Cabeçada de Zidane',it:'La Testata di Zidane',de:'Zidanes Kopfstoß'},
   sub:{en:'France vs Italy — World Cup Final',fr:'France vs Italie — Finale du Mondial',es:'Francia vs Italia — Final del Mundial',pt:'França vs Itália — Final do Mundial',it:'Francia vs Italia — Finale del Mondiale',de:'Frankreich vs Italien — WM-Finale'},
   story:{en:"In his very last match before retirement, with France dominant at 1-1, Zidane headbutted Marco Materazzi — who had insulted his sister — and was sent off. Italy won on penalties. Zidane still won the Golden Ball. The most bizarre final in WC history.",fr:"Lors de son tout dernier match avant la retraite, la France dominant à 1-1, Zidane donne un coup de boule à Marco Materazzi — qui avait insulté sa sœur — et reçoit le carton rouge. L'Italie gagne aux tirs au but. Zidane reçoit quand même le Ballon d'Or. La finale la plus bizarre de l'histoire.",es:'En su último partido antes de retirarse, con Francia dominando a 1-1, Zidane dio un cabezazo a Marco Materazzi — que había insultado a su hermana — y fue expulsado. Italia ganó en los penales. Zidane recibió de todas formas el Balón de Oro. La final más extraña de la historia.',pt:'No seu último jogo antes de se retirar, com a França a dominar a 1-1, Zidane deu uma cabeçada a Marco Materazzi — que tinha insultado a sua irmã — e foi expulso. A Itália ganhou nos penáltis. Zidane ainda recebeu a Bola de Ouro. A final mais estranha da história.',it:"Nel suo ultimo match prima del ritiro, con la Francia dominante sull'1-1, Zidane diede una testata a Marco Materazzi — che aveva insultato sua sorella — e fu espulso. L'Italia vinse ai rigori. Zidane ricevette comunque il Pallone d'Oro. La finale più bizzarra della storia.",de:'In seinem allerletzten Spiel vor dem Rücktritt, mit Frankreich bei 1:1 dominierend, köpfte Zidane Marco Materazzi nieder — der seine Schwester beleidigt hatte — und wurde vom Platz gestellt. Italien gewann im Elfmeterschießen. Zidane erhielt trotzdem den Goldenen Ball. Das bizarrste Finale der WM-Geschichte.'}},
  {year:2014,flag:'🇩🇪',emoji:'7️⃣',
   title:{en:'Germany 7-1 Brazil: Mineirazo',fr:'Allemagne 7-1 Brésil : Le Mineirazo',es:'Alemania 7-1 Brasil: El Mineirazo',pt:'Alemanha 7-1 Brasil: O Mineirazo',it:'Germania 7-1 Brasile: Il Mineirazo',de:'Deutschland 7:1 Brasilien: Das Mineirazo'},
   sub:{en:'Brazil vs Germany — Semi-Final',fr:'Brésil vs Allemagne — Demi-finale',es:'Brasil vs Alemania — Semifinal',pt:'Brasil vs Alemanha — Meia-final',it:'Brasile vs Germania — Semifinale',de:'Brasilien vs Deutschland — Halbfinale'},
   story:{en:'Brazil hosted the World Cup. Without Neymar and Thiago Silva, they faced Germany at the Estádio Mineirão. Germany scored 5 goals in 18 minutes. Brazilian fans wept in the stands. Brazil lost 7-1 on home soil — Germany went on to win the Cup.',fr:"Le Brésil organisait le Mondial. Sans Neymar ni Thiago Silva, ils affrontent l'Allemagne à l'Estádio Mineirão. L'Allemagne marque 5 buts en 18 minutes. Des supporters brésiliens pleurent dans les tribunes. Le Brésil perd 7-1 chez lui — l'Allemagne remporte ensuite le titre.",es:'Brasil organizó el Mundial. Sin Neymar ni Thiago Silva, se enfrentaron a Alemania en el Estádio Mineirão. Alemania marcó 5 goles en 18 minutos. Los aficionados brasileños lloraron en las gradas. Brasil perdió 7-1 en casa — Alemania ganó después la Copa.',pt:'O Brasil organizou o Mundial. Sem Neymar e Thiago Silva, enfrentaram a Alemanha no Estádio Mineirão. A Alemanha marcou 5 golos em 18 minutos. Os adeptos brasileiros choraram nas bancadas. O Brasil perdeu 7-1 em casa — a Alemanha sagrou-se campeã.',it:"Il Brasile ospitò il Mondiale. Senza Neymar e Thiago Silva, affrontarono la Germania all'Estádio Mineirão. La Germania segnò 5 gol in 18 minuti. I tifosi brasiliani piansero sugli spalti. Il Brasile perse 7-1 in casa — la Germania vinse poi il Mondiale.",de:'Brasilien richtete die WM aus. Ohne Neymar und Thiago Silva trafen sie im Estádio Mineirão auf Deutschland. Deutschland erzielte 5 Tore in 18 Minuten. Brasilianische Fans weinten auf den Rängen. Brasilien verlor 7:1 auf heimischem Boden — Deutschland gewann anschließend den Titel.'}},
  {year:1994,flag:'🇮🇹',emoji:'😢',
   title:{en:"Baggio's Missed Penalty",fr:'Le Pénalty Manqué de Baggio',es:'El Penalti Fallado de Baggio',pt:'O Pênalti Perdido de Baggio',it:'Il Rigore Mancato di Baggio',de:"Baggios verschossener Elfmeter"},
   sub:{en:'Italy vs Brazil — World Cup Final',fr:'Italie vs Brésil — Finale du Mondial',es:'Italia vs Brasil — Final del Mundial',pt:'Itália vs Brasil — Final do Mundial',it:'Italia vs Brasile — Finale del Mondiale',de:'Italien vs Brasilien — WM-Finale'},
   story:{en:"After a goalless final, it went to penalties. Baggio — Italy's tournament star — stepped up last. If he scored, Italy were champions. He sent it over the bar. Brazil won. Baggio stood alone, head bowed. The defining image of USA 94.",fr:"Après une finale sans but, place aux tirs au but. Baggio — meilleur joueur d'Italie du tournoi — se présente en dernier. S'il marque, l'Italie est championne. Il envoie le ballon au-dessus de la barre. Le Brésil gagne. Baggio reste seul, la tête baissée. L'image iconique du Mondial USA 94.",es:'Tras una final sin goles, llegaron los penales. Baggio — la estrella italiana del torneo — llegó el último. Si marcaba, Italia era campeona. Lo mandó por encima del larguero. Brasil ganó. Baggio se quedó solo, con la cabeza agachada. La imagen del Mundial USA 94.',pt:'Após uma final sem golos, foram aos penáltis. Baggio — o craque italiano do torneio — foi o último. Se marcasse, a Itália era campeã. Atirou por cima da barra. O Brasil ganhou. Baggio ficou sozinho, de cabeça baixa. A imagem do Mundial USA 94.',it:"Dopo una finale senza gol, si andò ai rigori. Baggio — la stella italiana del torneo — si presentò per ultimo. Se avesse segnato, l'Italia era campione. Sparò alto. Il Brasile vinse. Baggio rimase solo, con la testa china. L'immagine del Mondiale USA 94.",de:'Nach einem torlosen Finale ging es ins Elfmeterschießen. Baggio — Italiens Turnierstern — trat als Letzter an. Wenn er traf, war Italien Weltmeister. Er schoss über die Latte. Brasilien gewann. Baggio stand allein da, den Kopf gesenkt. Das Bild der WM USA 94.'}}
];

var CITY_GUIDE = [
  {city:'New York / New Jersey',country:'USA',flag:'🇺🇸',stadium:'MetLife Stadium',cap:82500,tz:'ET (UTC-4)',airport:'JFK / Newark (EWR) / LaGuardia',
   transport:{en:'NJ Transit train from Penn Station to East Rutherford. Uber from Manhattan ~45 min.',fr:'Train NJ Transit depuis Penn Station jusqu\'à East Rutherford. Uber depuis Manhattan ~45 min.',es:'Tren NJ Transit desde Penn Station a East Rutherford. Uber desde Manhattan ~45 min.',pt:'Comboio NJ Transit de Penn Station a East Rutherford. Uber de Manhattan ~45 min.',it:'Treno NJ Transit da Penn Station a East Rutherford. Uber da Manhattan ~45 min.',de:'NJ Transit Zug von Penn Station nach East Rutherford. Uber aus Manhattan ~45 Min.'},
   tip:{en:'Stay in Midtown Manhattan (Times Square area) — best value and central location. June is warm and humid.',fr:'Loger à Midtown Manhattan (Times Square) — meilleur rapport qualité-prix et position centrale. Juin est chaud et humide.',es:'Alojarse en Midtown Manhattan (Times Square) — mejor relación calidad-precio y ubicación central. Junio es cálido y húmedo.',pt:'Ficar em Midtown Manhattan (Times Square) — melhor custo-benefício e localização central. Junho é quente e húmido.',it:'Soggiornare a Midtown Manhattan (Times Square) — miglior rapporto qualità-prezzo e posizione centrale. Giugno è caldo e umido.',de:'In Midtown Manhattan (Times Square) wohnen — bestes Preis-Leistungs-Verhältnis und zentrale Lage. Juni ist warm und feucht.'},
   food:{en:'NYC pizza by the slice, hot dogs, bagels with lox, street food in every corner.',fr:'Pizza à la part new-yorkaise, hot-dogs, bagels au saumon fumé, street food à chaque coin de rue.',es:'Pizza por porción neoyorquina, hot dogs, bagels con salmón, street food en cada esquina.',pt:'Pizza à fatia nova-iorquina, hot dogs, bagels com salmão defumado, street food em cada esquina.',it:'Pizza al trancio newyorkese, hot dog, bagel con salmone, street food ad ogni angolo.',de:'NYC Pizza am Stück, Hot Dogs, Bagels mit Lachs, Streetfood an jeder Ecke.'}},
  {city:'Los Angeles',country:'USA',flag:'🇺🇸',stadium:'SoFi Stadium',cap:70240,tz:'PT (UTC-7)',airport:'LAX (Los Angeles International)',
   transport:{en:'Rent a car — essential in LA. Rideshare also available. Stadium is in Inglewood, 15 min from LAX.',fr:'Louer une voiture — indispensable à LA. VTC également disponible. Le stade est à Inglewood, 15 min de LAX.',es:'Alquilar un coche — imprescindible en LA. También disponible transporte compartido. El estadio está en Inglewood, a 15 min de LAX.',pt:'Alugar um carro — essencial em LA. Rideshare também disponível. O estádio fica em Inglewood, 15 min do LAX.',it:'Noleggiare un\'auto — essenziale a LA. Anche rideshare disponibile. Lo stadio è a Inglewood, 15 min dall\'LAX.',de:'Auto mieten — unverzichtbar in LA. Rideshare ebenfalls verfügbar. Stadion in Inglewood, 15 Min. vom LAX.'},
   tip:{en:'Perfect sunny weather in June. Stay in Santa Monica, Hollywood or Downtown LA. Book accommodation early — city fills up fast.',fr:'Météo ensoleillée parfaite en juin. Séjourner à Santa Monica, Hollywood ou Downtown LA. Réserver tôt — la ville se remplit vite.',es:'Clima soleado perfecto en junio. Alojarse en Santa Monica, Hollywood o Downtown LA. Reservar con antelación — la ciudad se llena rápido.',pt:'Tempo ensolarado perfeito em junho. Ficar em Santa Monica, Hollywood ou Downtown LA. Reservar cedo — a cidade enche rápido.',it:'Tempo soleggiato perfetto a giugno. Soggiornare a Santa Monica, Hollywood o Downtown LA. Prenotare presto — la città si riempie rapidamente.',de:'Perfektes Sonnenwetter im Juni. In Santa Monica, Hollywood oder Downtown LA wohnen. Früh buchen — die Stadt füllt sich schnell.'},
   food:{en:'Mexican street tacos, In-N-Out Burger, Korean BBQ, fresh seafood in Santa Monica.',fr:'Tacos mexicains de rue, In-N-Out Burger, barbecue coréen, fruits de mer frais à Santa Monica.',es:'Tacos callejeros mexicanos, In-N-Out Burger, barbacoa coreana, mariscos frescos en Santa Monica.',pt:'Tacos mexicanos de rua, In-N-Out Burger, churrasco coreano, frutos do mar frescos em Santa Monica.',it:'Tacos messicani di strada, In-N-Out Burger, BBQ coreano, frutti di mare freschi a Santa Monica.',de:'Mexikanische Street Tacos, In-N-Out Burger, koreanisches BBQ, frische Meeresfrüchte in Santa Monica.'}},
  {city:'Dallas',country:'USA',flag:'🇺🇸',stadium:'AT&T Stadium',cap:80000,tz:'CT (UTC-5)',airport:'Dallas/Fort Worth (DFW) / Love Field (DAL)',
   transport:{en:'Car or rideshare essential. Stadium is in Arlington, 20 min from Dallas downtown.',fr:'Voiture ou VTC indispensable. Le stade est à Arlington, 20 min du centre de Dallas.',es:'Coche o rideshare imprescindible. El estadio está en Arlington, a 20 min del centro de Dallas.',pt:'Carro ou rideshare essencial. O estádio fica em Arlington, 20 min do centro de Dallas.',it:'Auto o rideshare essenziale. Lo stadio è ad Arlington, 20 min dal centro di Dallas.',de:'Auto oder Rideshare unverzichtbar. Stadion in Arlington, 20 Min. vom Stadtzentrum Dallas.'},
   tip:{en:'⚠️ Extreme heat — 35-40°C in June/July. Stay hydrated. Fortunately AT&T Stadium has air conditioning inside.',fr:'⚠️ Chaleur extrême — 35-40°C en juin/juillet. Restez hydraté. Heureusement, l\'AT&T Stadium est climatisé.',es:'⚠️ Calor extremo — 35-40°C en junio/julio. Mantenerse hidratado. Afortunadamente, el AT&T Stadium tiene aire acondicionado.',pt:'⚠️ Calor extremo — 35-40°C em junho/julho. Manter-se hidratado. Felizmente, o AT&T Stadium tem ar condicionado.',it:'⚠️ Caldo estremo — 35-40°C a giugno/luglio. Mantenersi idratati. Fortunatamente, l\'AT&T Stadium ha l\'aria condizionata.',de:'⚠️ Extreme Hitze — 35-40°C im Juni/Juli. Viel trinken. Glücklicherweise hat das AT&T Stadium eine Klimaanlage.'},
   food:{en:'Texas BBQ brisket, Tex-Mex, chicken-fried steak — meat lover\'s paradise.',fr:'Brisket BBQ texan, Tex-Mex, steak pané — paradis des carnivores.',es:'Brisket BBQ texano, Tex-Mex, filete empanizado — paraíso de los carnívoros.',pt:'Brisket BBQ texano, Tex-Mex, bife empanado — paraíso dos carnívoros.',it:'Brisket BBQ texano, Tex-Mex, bistecca impanata — paradiso per gli amanti della carne.',de:'Texanisches BBQ Brisket, Tex-Mex, gebratenes Steak — Paradies für Fleischliebhaber.'}},
  {city:'San Francisco / Bay Area',country:'USA',flag:'🇺🇸',stadium:"Levi's Stadium",cap:68500,tz:'PT (UTC-7)',airport:'SFO (San Francisco) / SJC (San Jose)',
   transport:{en:'VTA light rail from downtown San Jose. From SF: Caltrain to Santa Clara + shuttle. Stadium is in Santa Clara, not SF.',fr:'Tramway VTA depuis le centre de San Jose. Depuis SF : Caltrain jusqu\'à Santa Clara + navette. Le stade est à Santa Clara, pas à SF.',es:'Tren ligero VTA desde el centro de San Jose. Desde SF: Caltrain a Santa Clara + lanzadera. El estadio está en Santa Clara, no en SF.',pt:'Metro ligeiro VTA do centro de San Jose. De SF: Caltrain para Santa Clara + shuttle. O estádio fica em Santa Clara, não em SF.',it:'Tram leggero VTA dal centro di San Jose. Da SF: Caltrain a Santa Clara + navetta. Lo stadio è a Santa Clara, non a SF.',de:'VTA Stadtbahn aus der Innenstadt San Jose. Von SF: Caltrain nach Santa Clara + Shuttle. Stadion in Santa Clara, nicht in SF.'},
   tip:{en:'Cool and foggy San Francisco summers — always bring a jacket. June weather mild (~18°C). Golden Gate and Fisherman\'s Wharf a must.',fr:'Étés frais et brumeux à San Francisco — apporter toujours une veste. Météo de juin douce (~18°C). Golden Gate et Fisherman\'s Wharf incontournables.',es:'Veranos frescos y brumosos en San Francisco — llevar siempre una chaqueta. Clima de junio suave (~18°C). Golden Gate y Fisherman\'s Wharf imprescindibles.',pt:'Verões frescos e nebulosos em San Francisco — levar sempre um casaco. Clima de junho ameno (~18°C). Golden Gate e Fisherman\'s Wharf obrigatórios.',it:'Estati fresche e nebbiose a San Francisco — portare sempre una giacca. Clima di giugno mite (~18°C). Golden Gate e Fisherman\'s Wharf da non perdere.',de:'Kühle und neblige San Francisco Sommer — immer eine Jacke mitnehmen. Juni-Wetter mild (~18°C). Golden Gate und Fisherman\'s Wharf sind ein Muss.'},
   food:{en:'Sourdough bread bowl clam chowder, Mission burritos, Dungeness crab, dim sum in Chinatown.',fr:'Chaudrée de palourdes en pain au levain, burritos du quartier Mission, crabe Dungeness, dim sum en Chinatown.',es:'Sopa de almejas en pan de masa madre, burritos del Mission, cangrejo Dungeness, dim sum en Chinatown.',pt:'Sopa de mariscos em pão de fermentação natural, burritos do Mission, caranguejo Dungeness, dim sum na Chinatown.',it:'Zuppa di vongole nel pane a lievitazione naturale, burrito del Mission, granchio Dungeness, dim sum in Chinatown.',de:'Muschelsuppe im Sauerteigbrotbecher, Mission-Burritos, Dungeness-Krebs, Dim Sum in Chinatown.'}},
  {city:'Miami',country:'USA',flag:'🇺🇸',stadium:'Hard Rock Stadium',cap:65326,tz:'ET (UTC-4)',airport:'Miami International (MIA) / Fort Lauderdale (FLL)',
   transport:{en:'Uber/Lyft to stadium (no direct transit). From Miami Beach ~25 min by car. Book rideshare in advance on match days.',fr:'Uber/Lyft jusqu\'au stade (pas de transport direct). Depuis Miami Beach ~25 min en voiture. Réserver le VTC à l\'avance les jours de match.',es:'Uber/Lyft al estadio (sin transporte directo). Desde Miami Beach ~25 min en coche. Reservar rideshare con antelación los días de partido.',pt:'Uber/Lyft para o estádio (sem transporte directo). De Miami Beach ~25 min de carro. Reservar rideshare com antecedência nos dias de jogo.',it:'Uber/Lyft allo stadio (nessun trasporto diretto). Da Miami Beach ~25 min in auto. Prenotare rideshare in anticipo nei giorni di partita.',de:'Uber/Lyft zum Stadion (kein direkter Transit). Von Miami Beach ~25 Min. mit dem Auto. Rideshare an Spieltagen im Voraus buchen.'},
   tip:{en:'Very hot and humid in June (~32°C, 90% humidity). South Beach nearby for beach days. Vibrant Latin atmosphere around the stadium.',fr:'Très chaud et humide en juin (~32°C, 90% d\'humidité). South Beach à proximité pour les journées plage. Atmosphère latine vibrante autour du stade.',es:'Muy caluroso y húmedo en junio (~32°C, 90% de humedad). South Beach cercana para días de playa. Vibrante ambiente latino alrededor del estadio.',pt:'Muito quente e húmido em junho (~32°C, 90% de humidade). South Beach perto para dias de praia. Ambiente latino vibrante à volta do estádio.',it:'Molto caldo e umido a giugno (~32°C, 90% di umidità). South Beach vicina per giornate in spiaggia. Atmosfera latina vivace intorno allo stadio.',de:'Sehr heiß und feucht im Juni (~32°C, 90% Luftfeuchtigkeit). South Beach in der Nähe für Strandtage. Lebhafte lateinische Atmosphäre rund um das Stadion.'},
   food:{en:'Cuban sandwiches, stone crab claws, ceviche, empanadas — strong Latin food scene.',fr:'Sandwichs cubains, pinces de crabe de pierre, ceviche, empanadas — forte scène culinaire latine.',es:'Sándwiches cubanos, pinzas de cangrejo de piedra, ceviche, empanadas — gran escena gastronómica latina.',pt:'Sandes cubanas, tenaz de caranguejo de pedra, ceviche, empanadas — forte cena gastronómica latina.',it:'Panini cubani, chele di granchio di pietra, ceviche, empanadas — forte scena gastronomica latina.',de:'Kubanische Sandwiches, Steinkrabbe, Ceviche, Empanadas — lebhafte lateinische Küche.'}},
  {city:'Seattle',country:'USA',flag:'🇺🇸',stadium:'Lumen Field',cap:69000,tz:'PT (UTC-7)',airport:'Seattle-Tacoma (SEA-TAC)',
   transport:{en:'Link Light Rail from airport to downtown (25 min). Lumen Field is walkable from Pioneer Square station.',fr:'Link Light Rail de l\'aéroport au centre-ville (25 min). Lumen Field est accessible à pied depuis Pioneer Square.',es:'Link Light Rail del aeropuerto al centro (25 min). Lumen Field es accesible a pie desde Pioneer Square.',pt:'Link Light Rail do aeroporto ao centro (25 min). Lumen Field fica a pé da estação Pioneer Square.',it:'Link Light Rail dall\'aeroporto al centro (25 min). Lumen Field è raggiungibile a piedi da Pioneer Square.',de:'Link Light Rail vom Flughafen in die Innenstadt (25 Min.). Lumen Field ist fußläufig von Pioneer Square erreichbar.'},
   tip:{en:'Mild and pleasant summer weather. Most walkable stadium in WC 2026. Visit Pike Place Market and Space Needle nearby.',fr:'Météo estivale douce et agréable. Stade le plus accessible à pied du Mondial 2026. Visiter le Pike Place Market et la Space Needle à proximité.',es:'Clima veraniego suave y agradable. El estadio más accesible a pie del Mundial 2026. Visitar Pike Place Market y Space Needle cerca.',pt:'Clima estival ameno e agradável. O estádio mais acessível a pé do Mundial 2026. Visitar Pike Place Market e Space Needle nas proximidades.',it:'Clima estivo mite e piacevole. Lo stadio più facilmente raggiungibile a piedi del Mondiale 2026. Visitare Pike Place Market e Space Needle nelle vicinanze.',de:'Mildes und angenehmes Sommerwetter. Fußgängerfreundlichstes Stadion der WM 2026. Pike Place Market und Space Needle in der Nähe besuchen.'},
   food:{en:'Pacific salmon, seafood chowder, teriyaki, artisan coffee — Seattle is a foodie city.',fr:'Saumon du Pacifique, chaudrée de fruits de mer, teriyaki, café artisanal — Seattle est une ville gastronomique.',es:'Salmón del Pacífico, chowder de mariscos, teriyaki, café artesanal — Seattle es una ciudad gastronómica.',pt:'Salmão do Pacífico, chowder de mariscos, teriyaki, café artesanal — Seattle é uma cidade gastronómica.',it:'Salmone del Pacifico, chowder di frutti di mare, teriyaki, caffè artigianale — Seattle è una città gourmet.',de:'Pazifischer Lachs, Meeresfrüchtesuppe, Teriyaki, Handwerkskaffee — Seattle ist eine Feinschmeckerstadt.'}},
  {city:'Boston',country:'USA',flag:'🇺🇸',stadium:'Gillette Stadium',cap:65878,tz:'ET (UTC-4)',airport:'Boston Logan (BOS)',
   transport:{en:'Commuter Rail from South Station to Foxboro (~45 min, match days only). No train on regular days — plan Uber/rideshare.',fr:'Train de banlieue depuis South Station jusqu\'à Foxboro (~45 min, jours de match uniquement). Pas de train les jours normaux — prévoir Uber/VTC.',es:'Tren de cercanías desde South Station a Foxboro (~45 min, solo días de partido). Sin tren los días normales — planificar Uber/rideshare.',pt:'Comboio suburbano de South Station a Foxboro (~45 min, só dias de jogo). Sem comboio nos dias normais — planear Uber/rideshare.',it:'Treno suburbano da South Station a Foxboro (~45 min, solo giorni di partita). Nessun treno nei giorni normali — pianificare Uber/rideshare.',de:'Vorortbahn von South Station nach Foxboro (~45 Min., nur an Spieltagen). An normalen Tagen kein Zug — Uber/Rideshare einplanen.'},
   tip:{en:'Rich history — Freedom Trail, Harvard, Faneuil Hall. Warm June weather (~22°C). Boston fans are passionate but very welcoming.',fr:'Histoire riche — Freedom Trail, Harvard, Faneuil Hall. Juin chaud (~22°C). Les fans de Boston sont passionnés mais très accueillants.',es:'Rica historia — Freedom Trail, Harvard, Faneuil Hall. Junio cálido (~22°C). Los aficionados de Boston son apasionados pero muy acogedores.',pt:'História rica — Freedom Trail, Harvard, Faneuil Hall. Junho quente (~22°C). Os adeptos de Boston são apaixonados mas muito acolhedores.',it:'Storia ricca — Freedom Trail, Harvard, Faneuil Hall. Giugno caldo (~22°C). I tifosi di Boston sono appassionati ma molto accoglienti.',de:'Reiche Geschichte — Freedom Trail, Harvard, Faneuil Hall. Warmer Juni (~22°C). Boston-Fans sind leidenschaftlich aber sehr gastfreundlich.'},
   food:{en:'New England clam chowder, lobster rolls, baked beans, Sam Adams beer — classic American East Coast.',fr:'Chaudrée de palourdes de Nouvelle-Angleterre, sandwichs au homard, haricots cuits au four, bière Sam Adams — classique de la côte Est américaine.',es:'Chowder de almejas de Nueva Inglaterra, bocadillos de langosta, alubias horneadas, cerveza Sam Adams — clásico de la costa Este americana.',pt:'Chowder de amêijoas da Nova Inglaterra, rolls de lagosta, feijão cozido, cerveja Sam Adams — clássico da costa Leste americana.',it:'Chowder di vongole del New England, sandwich all\'astice, fagioli al forno, birra Sam Adams — classico della costa Est americana.',de:'New England Muschelsuppe, Hummer-Rolls, Baked Beans, Sam Adams Bier — klassische amerikanische Ostküste.'}},
  {city:'Houston',country:'USA',flag:'🇺🇸',stadium:'NRG Stadium',cap:72220,tz:'CT (UTC-5)',airport:'George Bush (IAH) / Hobby (HOU)',
   transport:{en:'Car or rideshare essential — Houston has limited public transit. NRG Stadium has a METRORail stop on the Red Line.',fr:'Voiture ou VTC indispensable — Houston a peu de transports en commun. NRG Stadium a un arrêt METRORail sur la ligne rouge.',es:'Coche o rideshare imprescindible — Houston tiene escaso transporte público. NRG Stadium tiene una parada METRORail en la línea roja.',pt:'Carro ou rideshare essencial — Houston tem transporte público limitado. NRG Stadium tem uma paragem METRORail na linha vermelha.',it:'Auto o rideshare essenziale — Houston ha scarsi mezzi pubblici. NRG Stadium ha una fermata METRORail sulla linea rossa.',de:'Auto oder Rideshare unverzichtbar — Houston hat eingeschränkten ÖPNV. NRG Stadium hat einen METRORail-Halt an der roten Linie.'},
   tip:{en:'🌟 NRG Stadium has a retractable roof with AC — games will be played in comfort despite outdoor heat of 35°C+. Most diverse city in the USA.',fr:'🌟 NRG Stadium a un toit rétractable avec climatisation — les matchs se joueront confortablement malgré 35°C+ à l\'extérieur. La ville la plus diverse des USA.',es:'🌟 El NRG Stadium tiene techo retráctil con aire acondicionado — los partidos se jugarán cómodamente pese al calor exterior de 35°C+. La ciudad más diversa de EE.UU.',pt:'🌟 O NRG Stadium tem teto retrátil com ar condicionado — os jogos serão jogados confortavelmente apesar do calor de 35°C+ lá fora. A cidade mais diversa dos EUA.',it:'🌟 L\'NRG Stadium ha un tetto apribile con aria condizionata — le partite si giocheranno comodamente nonostante il caldo esterno di 35°C+. La città più diversificata degli USA.',de:'🌟 Das NRG Stadium hat ein einfahrbares Dach mit Klimaanlage — Spiele werden komfortabel gespielt, trotz Außenhitze von 35°C+. Die vielfältigste Stadt der USA.'},
   food:{en:'Tex-Mex, Vietnamese pho, BBQ, seafood gumbo — most diverse food scene in America.',fr:'Tex-Mex, pho vietnamien, BBQ, gumbo aux fruits de mer — scène culinaire la plus diverse d\'Amérique.',es:'Tex-Mex, pho vietnamita, BBQ, gumbo de mariscos — la escena gastronómica más diversa de América.',pt:'Tex-Mex, pho vietnamita, BBQ, gumbo de mariscos — a cena gastronómica mais diversa da América.',it:'Tex-Mex, pho vietnamita, BBQ, gumbo di frutti di mare — la scena gastronomica più diversificata d\'America.',de:'Tex-Mex, vietnamesische Pho, BBQ, Meeresfrüchte-Gumbo — vielfältigste Essensszene in Amerika.'}},
  {city:'Kansas City',country:'USA',flag:'🇺🇸',stadium:'Arrowhead Stadium',cap:76416,tz:'CT (UTC-5)',airport:'Kansas City International (MCI)',
   transport:{en:'Car or rideshare only — no public transit to stadium. Parking available on site. Book rideshare in advance.',fr:'Voiture ou VTC uniquement — pas de transport en commun jusqu\'au stade. Parking disponible sur place. Réserver le VTC à l\'avance.',es:'Coche o rideshare únicamente — sin transporte público al estadio. Aparcamiento disponible in situ. Reservar rideshare con antelación.',pt:'Carro ou rideshare apenas — sem transporte público até ao estádio. Estacionamento disponível no local. Reservar rideshare com antecedência.',it:'Solo auto o rideshare — nessun mezzo pubblico fino allo stadio. Parcheggio disponibile in loco. Prenotare rideshare in anticipo.',de:'Nur Auto oder Rideshare — kein ÖPNV zum Stadion. Parkplatz vor Ort verfügbar. Rideshare im Voraus buchen.'},
   tip:{en:'Friendly, unpretentious city with a great fan atmosphere. Hot summers (~30°C). Perfect base if attending multiple nearby games.',fr:'Ville accueillante et sans prétention avec une super ambiance fan. Étés chauds (~30°C). Base idéale pour assister à plusieurs matchs dans la région.',es:'Ciudad acogedora y sin pretensiones con gran ambiente. Veranos calurosos (~30°C). Base perfecta para asistir a varios partidos cercanos.',pt:'Cidade acolhedora e sem pretensões com grande ambiente. Verões quentes (~30°C). Base perfeita para assistir a vários jogos próximos.',it:'Città accogliente e senza pretese con una grande atmosfera. Estati calde (~30°C). Base perfetta per assistere a più partite vicine.',de:'Freundliche, unkomplizierte Stadt mit toller Fan-Atmosphäre. Heiße Sommer (~30°C). Perfekte Basis für mehrere nahegelegene Spiele.'},
   food:{en:'Kansas City BBQ is world-famous — burnt ends, ribs, pulled pork. Arthur Bryant\'s and Joe\'s Kansas City are legendary.',fr:'Le BBQ de Kansas City est mondialement connu — burnt ends, côtes, porc effiloché. Arthur Bryant\'s et Joe\'s Kansas City sont légendaires.',es:'El BBQ de Kansas City es mundialmente famoso — burnt ends, costillas, cerdo desmenuzado. Arthur Bryant\'s y Joe\'s Kansas City son legendarios.',pt:'O BBQ de Kansas City é mundialmente famoso — burnt ends, costelas, porco desfiado. Arthur Bryant\'s e Joe\'s Kansas City são lendários.',it:'Il BBQ di Kansas City è famoso in tutto il mondo — burnt ends, costine, maiale sfilacciato. Arthur Bryant\'s e Joe\'s Kansas City sono leggendari.',de:'Kansas City BBQ ist weltberühmt — Burnt Ends, Ribs, Pulled Pork. Arthur Bryant\'s und Joe\'s Kansas City sind legendär.'}},
  {city:'Philadelphia',country:'USA',flag:'🇺🇸',stadium:'Lincoln Financial Field',cap:69796,tz:'ET (UTC-4)',airport:'Philadelphia International (PHL)',
   transport:{en:'SEPTA Broad Street Line subway to NRG (AT&T) station, then walk. Easy and cheap public transit from Center City.',fr:'Métro SEPTA Broad Street Line jusqu\'à la station NRG (AT&T), puis à pied. Transport public facile et bon marché depuis Center City.',es:'Metro SEPTA Broad Street Line hasta la estación NRG (AT&T), luego a pie. Transporte público fácil y barato desde Center City.',pt:'Metro SEPTA Broad Street Line até à estação NRG (AT&T), depois a pé. Transporte público fácil e barato do Center City.',it:'Metro SEPTA Broad Street Line fino alla stazione NRG (AT&T), poi a piedi. Trasporto pubblico facile ed economico da Center City.',de:'SEPTA Broad Street Line U-Bahn zur NRG (AT&T) Station, dann zu Fuß. Einfacher und günstiger ÖPNV aus der City.'},
   tip:{en:'Historic city — Liberty Bell, Independence Hall, Rocky steps at the Art Museum. Passionate sports fans. Warm June weather (~24°C).',fr:'Ville historique — Liberty Bell, Independence Hall, les marches Rocky au musée d\'art. Fans de sport passionnés. Juin chaud (~24°C).',es:'Ciudad histórica — Liberty Bell, Independence Hall, escaleras de Rocky en el museo de arte. Aficionados apasionados. Junio cálido (~24°C).',pt:'Cidade histórica — Liberty Bell, Independence Hall, degraus do Rocky no museu de arte. Adeptos apaixonados. Junho quente (~24°C).',it:'Città storica — Liberty Bell, Independence Hall, scalini di Rocky al museo d\'arte. Tifosi appassionati. Giugno caldo (~24°C).',de:'Historische Stadt — Liberty Bell, Independence Hall, Rocky-Stufen am Kunstmuseum. Leidenschaftliche Sportfans. Warmer Juni (~24°C).'},
   food:{en:'Philly cheesesteak (Pat\'s vs Geno\'s debate!), soft pretzels, hoagies, water ice — authentic Philly classics.',fr:'Cheesesteak de Philly (débat Pat\'s vs Geno\'s !), bretzels moelleux, hoagies, water ice — authentiques classiques de Philly.',es:'Cheesesteak de Philly (¡debate Pat\'s vs Geno\'s!), pretzels blandos, hoagies, water ice — auténticos clásicos de Philly.',pt:'Cheesesteak de Philly (debate Pat\'s vs Geno\'s!), pretzels macios, hoagies, water ice — autênticos clássicos de Philly.',it:'Cheesesteak di Philly (dibattito Pat\'s vs Geno\'s!), bretzel morbidi, hoagies, water ice — autentici classici di Philly.',de:'Philly Cheesesteak (Pat\'s vs Geno\'s Debatte!), weiche Brezeln, Hoagies, Water Ice — authentische Philly-Klassiker.'}},
  {city:'Atlanta',country:'USA',flag:'🇺🇸',stadium:'Mercedes-Benz Stadium',cap:71000,tz:'ET (UTC-4)',airport:'Hartsfield-Jackson (ATL) — world\'s busiest airport',
   transport:{en:'MARTA train directly to stadium (Vine City station). ATL airport has direct MARTA connection — fastest and easiest city to transit.',fr:'Train MARTA directement jusqu\'au stade (station Vine City). ATL aéroport a une connexion MARTA directe — la ville la plus facile en transport.',es:'Tren MARTA directamente al estadio (estación Vine City). El aeropuerto ATL tiene conexión MARTA directa — la ciudad más fácil en transporte.',pt:'Comboio MARTA directamente ao estádio (estação Vine City). Aeroporto ATL tem ligação MARTA directa — a cidade mais fácil em transporte.',it:'Treno MARTA direttamente allo stadio (stazione Vine City). Aeroporto ATL ha collegamento MARTA diretto — la città più facile in trasporto.',de:'MARTA-Bahn direkt zum Stadion (Vine City Station). ATL-Flughafen hat direkte MARTA-Verbindung — die einfachste Stadt für den Transit.'},
   tip:{en:'Mercedes-Benz Stadium has a retractable roof — great fan experience. Hot and humid (~33°C) but games in comfort. Centennial Olympic Park nearby.',fr:'Le Mercedes-Benz Stadium a un toit rétractable — excellente expérience fan. Chaud et humide (~33°C) mais matchs dans le confort. Centennial Olympic Park à proximité.',es:'El Mercedes-Benz Stadium tiene techo retráctil — excelente experiencia de aficionado. Caluroso y húmedo (~33°C) pero partidos en confort. Centennial Olympic Park cerca.',pt:'O Mercedes-Benz Stadium tem teto retrátil — excelente experiência de adepto. Quente e húmido (~33°C) mas jogos em conforto. Centennial Olympic Park nas proximidades.',it:'Il Mercedes-Benz Stadium ha un tetto apribile — ottima esperienza da tifoso. Caldo e umido (~33°C) ma partite in comodità. Centennial Olympic Park nelle vicinanze.',de:'Mercedes-Benz Stadium hat ein einfahrbares Dach — tolles Fan-Erlebnis. Heiß und feucht (~33°C) aber Spiele in Komfort. Centennial Olympic Park in der Nähe.'},
   food:{en:'Southern fried chicken, peach cobbler, soul food, biscuits and gravy — deep South comfort food at its finest.',fr:'Poulet frit du Sud, cobbler aux pêches, soul food, biscuits et sauce — la cuisine réconfortante du Sud profond dans toute sa splendeur.',es:'Pollo frito sureño, cobbler de melocotón, soul food, bizcochos y salsa — lo mejor de la comida reconfortante del Sur profundo.',pt:'Frango frito do Sul, cobbler de pêssego, soul food, biscoitos e molho — a melhor comida reconfortante do Sul profundo.',it:'Pollo fritto del Sud, cobbler di pesche, soul food, biscotti e sugo — il meglio della cucina confortante del Sud profondo.',de:'Südstaaten Fried Chicken, Peach Cobbler, Soul Food, Biscuits and Gravy — herzhafte Südstaatenküche vom Feinsten.'}},
  {city:'Toronto',country:'Canada',flag:'🇨🇦',stadium:'BMO Field',cap:45736,tz:'ET (UTC-4)',airport:'Toronto Pearson (YYZ)',
   transport:{en:'TTC 509 Harbourfront streetcar from Union Station to BMO Field. Very walkable from downtown core.',fr:'Tramway TTC 509 Harbourfront depuis Union Station jusqu\'à BMO Field. Très accessible à pied depuis le centre-ville.',es:'Tranvía TTC 509 Harbourfront desde Union Station hasta BMO Field. Muy accesible a pie desde el centro.',pt:'Eléctrico TTC 509 Harbourfront de Union Station até ao BMO Field. Muito acessível a pé do centro da cidade.',it:'Tram TTC 509 Harbourfront da Union Station al BMO Field. Molto raggiungibile a piedi dal centro città.',de:'TTC 509 Harbourfront Straßenbahn von Union Station zum BMO Field. Sehr fußgängerfreundlich vom Stadtzentrum.'},
   tip:{en:'Beautiful summer in Toronto (~26°C, sunny). CN Tower, Distillery District, Kensington Market. Most multicultural city in the world — incredible food diversity.',fr:'Magnifique été à Toronto (~26°C, ensoleillé). CN Tower, Distillery District, Kensington Market. La ville la plus multiculturelle au monde — diversité culinaire incroyable.',es:'Hermoso verano en Toronto (~26°C, soleado). CN Tower, Distillery District, Kensington Market. La ciudad más multicultural del mundo — increíble diversidad gastronómica.',pt:'Verão lindo em Toronto (~26°C, ensolarado). CN Tower, Distillery District, Kensington Market. A cidade mais multicultural do mundo — incrível diversidade gastronómica.',it:'Estate bellissima a Toronto (~26°C, soleggiato). CN Tower, Distillery District, Kensington Market. La città più multiculturale del mondo — incredibile diversità gastronomica.',de:'Wunderschöner Sommer in Toronto (~26°C, sonnig). CN Tower, Distillery District, Kensington Market. Multikulturellste Stadt der Welt — unglaubliche Essensvielfalt.'},
   food:{en:'Butter tarts, peameal bacon sandwich, poutine (yes, also in Toronto!), dim sum, jerk chicken — multicultural paradise.',fr:'Butter tarts, sandwich au bacon de tige de pois, poutine (oui, aussi à Toronto !), dim sum, poulet jerk — paradis multiculturel.',es:'Butter tarts, sándwich de bacon de guisante, poutine (¡sí, también en Toronto!), dim sum, pollo jerk — paraíso multicultural.',pt:'Butter tarts, sandes de bacon de ervilha, poutine (sim, também em Toronto!), dim sum, frango jerk — paraíso multicultural.',it:'Butter tarts, sandwich al bacon di piselli, poutine (sì, anche a Toronto!), dim sum, pollo jerk — paradiso multiculturale.',de:'Butter Tarts, Peameal-Bacon-Sandwich, Poutine (ja, auch in Toronto!), Dim Sum, Jerk Chicken — multikulturelles Paradies.'}},
  {city:'Vancouver',country:'Canada',flag:'🇨🇦',stadium:'BC Place',cap:54500,tz:'PT (UTC-7)',airport:'Vancouver International (YVR)',
   transport:{en:'Canada Line SkyTrain from YVR airport directly to city centre (25 min). Walk or short cab to BC Place from downtown.',fr:'SkyTrain Canada Line depuis l\'aéroport YVR directement vers le centre-ville (25 min). Marche ou courte course en taxi jusqu\'à BC Place.',es:'SkyTrain Canada Line desde el aeropuerto YVR directamente al centro (25 min). Caminata o taxi corto hasta BC Place.',pt:'SkyTrain Canada Line do aeroporto YVR directamente ao centro (25 min). A pé ou táxi curto até ao BC Place.',it:'SkyTrain Canada Line dall\'aeroporto YVR direttamente in centro (25 min). A piedi o breve taxi fino al BC Place.',de:'Canada Line SkyTrain vom YVR-Flughafen direkt ins Stadtzentrum (25 Min.). Zu Fuß oder kurze Taxifahrt zum BC Place.'},
   tip:{en:'Most stunning setting of WC 2026 — mountains AND ocean. Mild summers (~19°C) but rain is possible. Gastown, Stanley Park, Granville Island unmissable.',fr:'Le cadre le plus époustouflant du Mondial 2026 — montagnes ET océan. Étés doux (~19°C) mais pluie possible. Gastown, Stanley Park, Granville Island incontournables.',es:'El entorno más impresionante del Mundial 2026 — montañas Y océano. Veranos suaves (~19°C) pero puede llover. Gastown, Stanley Park, Granville Island imprescindibles.',pt:'O cenário mais deslumbrante do Mundial 2026 — montanhas E oceano. Verões amenos (~19°C) mas chuva possível. Gastown, Stanley Park, Granville Island imperdíveis.',it:'L\'ambientazione più mozzafiato del Mondiale 2026 — montagne E oceano. Estati miti (~19°C) ma pioggia possibile. Gastown, Stanley Park, Granville Island imperdibili.',de:'Die atemberaubendste Kulisse der WM 2026 — Berge UND Ozean. Milde Sommer (~19°C) aber Regen möglich. Gastown, Stanley Park, Granville Island dürfen nicht fehlen.'},
   food:{en:'Fresh Pacific salmon, sushi (outstanding Asian food scene), poutine, craft beer — incredibly fresh ingredients.',fr:'Saumon du Pacifique frais, sushi (scène asiatique exceptionnelle), poutine, bière artisanale — ingrédients incroyablement frais.',es:'Salmón del Pacífico fresco, sushi (escena asiática excepcional), poutine, cerveza artesanal — ingredientes increíblemente frescos.',pt:'Salmão do Pacífico fresco, sushi (cena asiática excepcional), poutine, cerveja artesanal — ingredientes incrivelmente frescos.',it:'Salmone del Pacifico fresco, sushi (scena asiatica eccezionale), poutine, birra artigianale — ingredienti incredibilmente freschi.',de:'Frischer Pazifischer Lachs, Sushi (herausragende asiatische Küche), Poutine, Craft Beer — unglaublich frische Zutaten.'}},
  {city:'Mexico City',country:'Mexico',flag:'🇲🇽',stadium:'Estadio Azteca',cap:87523,tz:'CT (UTC-5)',airport:'AICM Benito Juárez (MEX)',
   transport:{en:'Metro Line 9 to Ciudad Deportiva, then walk or bus to Azteca. Uber also widely available and cheap.',fr:'Métro Ligne 9 jusqu\'à Ciudad Deportiva, puis marche ou bus jusqu\'à l\'Azteca. Uber également très disponible et bon marché.',es:'Metro Línea 9 hasta Ciudad Deportiva, luego caminata o autobús al Azteca. Uber también ampliamente disponible y barato.',pt:'Metro Linha 9 até Ciudad Deportiva, depois a pé ou autocarro até ao Azteca. Uber também amplamente disponível e barato.',it:'Metro Linea 9 fino a Ciudad Deportiva, poi a piedi o autobus all\'Azteca. Uber anche ampiamente disponibile ed economico.',de:'Metro Linie 9 bis Ciudad Deportiva, dann zu Fuß oder Bus zum Azteca. Uber ebenfalls weit verbreitet und günstig.'},
   tip:{en:'⚠️ Altitude 2,240m — arrive 2-3 days early to acclimatize. Rainy season (afternoon showers). Amazing culture — Teotihuacán, Zócalo, Chapultepec Park.',fr:'⚠️ Altitude 2 240 m — arriver 2-3 jours à l\'avance pour s\'acclimater. Saison des pluies (averses l\'après-midi). Culture extraordinaire — Teotihuacán, Zócalo, Parc de Chapultepec.',es:'⚠️ Altitud 2.240 m — llegar 2-3 días antes para aclimatarse. Temporada de lluvias (chubascos por la tarde). Cultura asombrosa — Teotihuacán, Zócalo, Parque de Chapultepec.',pt:'⚠️ Altitude 2.240 m — chegar 2-3 dias antes para aclimatar. Época das chuvas (aguaceiros à tarde). Cultura incrível — Teotihuacán, Zócalo, Parque de Chapultepec.',it:'⚠️ Altitudine 2.240 m — arrivare 2-3 giorni prima per acclimatarsi. Stagione delle piogge (acquazzoni nel pomeriggio). Cultura straordinaria — Teotihuacán, Zócalo, Parco di Chapultepec.',de:'⚠️ Höhe 2.240 m — 2-3 Tage früher ankommen zur Akklimatisierung. Regenzeit (Nachmittagsschauer). Erstaunliche Kultur — Teotihuacán, Zócalo, Chapultepec-Park.'},
   food:{en:'Tacos al pastor, tamales, chiles en nogada, tlayudas, mezcal — one of the world\'s great food capitals.',fr:'Tacos al pastor, tamales, chiles en nogada, tlayudas, mezcal — l\'une des grandes capitales gastronomiques mondiales.',es:'Tacos al pastor, tamales, chiles en nogada, tlayudas, mezcal — una de las grandes capitales gastronómicas del mundo.',pt:'Tacos al pastor, tamales, chiles en nogada, tlayudas, mezcal — uma das grandes capitais gastronómicas do mundo.',it:'Tacos al pastor, tamales, chiles en nogada, tlayudas, mezcal — una delle grandi capitali gastronomiche del mondo.',de:'Tacos al Pastor, Tamales, Chiles en Nogada, Tlayudas, Mezcal — eine der großen Gastronomiehauptstädte der Welt.'}},
  {city:'Guadalajara',country:'Mexico',flag:'🇲🇽',stadium:'Estadio Akron',cap:49850,tz:'CT (UTC-5)',airport:'Miguel Hidalgo (GDL)',
   transport:{en:'Uber or taxi from city centre (~20 min). Light rail (Tren Ligero) also available. Easy access from GDL airport.',fr:'Uber ou taxi depuis le centre-ville (~20 min). Tramway léger (Tren Ligero) également disponible. Accès facile depuis l\'aéroport GDL.',es:'Uber o taxi desde el centro (~20 min). Tren Ligero también disponible. Fácil acceso desde el aeropuerto GDL.',pt:'Uber ou táxi do centro da cidade (~20 min). Trem Ligeiro (Tren Ligero) também disponível. Fácil acesso do aeroporto GDL.',it:'Uber o taxi dal centro città (~20 min). Treno leggero (Tren Ligero) anche disponibile. Facile accesso dall\'aeroporto GDL.',de:'Uber oder Taxi aus der Innenstadt (~20 Min.). Stadtbahn (Tren Ligero) ebenfalls verfügbar. Einfacher Zugang vom GDL-Flughafen.'},
   tip:{en:'Birthplace of mariachi, tequila and football passion. Warm and pleasant in June (~22°C). Tlaquepaque artisan district and colonial architecture nearby.',fr:'Berceau du mariachi, de la tequila et de la passion du football. Chaud et agréable en juin (~22°C). Quartier artisanal de Tlaquepaque et architecture coloniale à proximité.',es:'Cuna del mariachi, el tequila y la pasión futbolera. Cálido y agradable en junio (~22°C). Barrio artesanal de Tlaquepaque y arquitectura colonial cerca.',pt:'Berço do mariachi, da tequila e da paixão pelo futebol. Quente e agradável em junho (~22°C). Bairro artesanal de Tlaquepaque e arquitectura colonial nas proximidades.',it:'Culla del mariachi, della tequila e della passione calcistica. Caldo e piacevole a giugno (~22°C). Quartiere artigianale di Tlaquepaque e architettura coloniale nelle vicinanze.',de:'Geburtsort von Mariachi, Tequila und Fußballleidenschaft. Warm und angenehm im Juni (~22°C). Kunsthandwerksviertel Tlaquepaque und Kolonialarchitektur in der Nähe.'},
   food:{en:'Tortas ahogadas (drowned sandwiches), birria, pozole, tequila tasting — authentic Jalisco cuisine.',fr:'Tortas ahogadas (sandwichs noyés), birria, pozole, dégustation de tequila — cuisine jaliscienne authentique.',es:'Tortas ahogadas, birria, pozole, cata de tequila — auténtica cocina jalisciense.',pt:'Tortas ahogadas (sandes afogadas), birria, pozole, prova de tequila — autêntica cozinha jalisciense.',it:'Tortas ahogadas (panini affogati), birria, pozole, degustazione di tequila — autentica cucina jalisciana.',de:'Tortas Ahogadas (ertränkte Sandwiches), Birria, Pozole, Tequila-Verkostung — authentische Jalisco-Küche.'}},
  {city:'Monterrey',country:'Mexico',flag:'🇲🇽',stadium:'Estadio BBVA',cap:53500,tz:'CT (UTC-5)',airport:'General Mariano Escobedo (MTY)',
   transport:{en:'Uber or taxi from city centre (~15 min). Metrorrey metro Line 1 to Exposición, then short ride. Very accessible.',fr:'Uber ou taxi depuis le centre-ville (~15 min). Métro Metrorrey ligne 1 jusqu\'à Exposición, puis courte course. Très accessible.',es:'Uber o taxi desde el centro (~15 min). Metro Metrorrey línea 1 hasta Exposición, luego corto trayecto. Muy accesible.',pt:'Uber ou táxi do centro da cidade (~15 min). Metro Metrorrey linha 1 até Exposición, depois curta viagem. Muito acessível.',it:'Uber o taxi dal centro città (~15 min). Metro Metrorrey linea 1 fino a Exposición, poi breve corsa. Molto accessibile.',de:'Uber oder Taxi aus der Innenstadt (~15 Min.). Metrorrey Metro Linie 1 bis Exposición, dann kurze Fahrt. Sehr gut erreichbar.'},
   tip:{en:'⚠️ Very hot in June (~34°C) — stay hydrated. Stunning mountain backdrop (Cerro de la Silla). Paseo Santa Lucía riverwalk is beautiful. Industrial but vibrant city.',fr:'⚠️ Très chaud en juin (~34°C) — restez hydraté. Cadre montagneux époustouflant (Cerro de la Silla). La promenade Paseo Santa Lucía est magnifique. Ville industrielle mais vibrante.',es:'⚠️ Muy caluroso en junio (~34°C) — mantenerse hidratado. Impresionante telón de montañas (Cerro de la Silla). El Paseo Santa Lucía es precioso. Ciudad industrial pero vibrante.',pt:'⚠️ Muito quente em junho (~34°C) — manter-se hidratado. Deslumbrante pano de fundo montanhoso (Cerro de la Silla). O Paseo Santa Lucía é lindo. Cidade industrial mas vibrante.',it:'⚠️ Molto caldo a giugno (~34°C) — mantenersi idratati. Splendido sfondo montuoso (Cerro de la Silla). La passeggiata Paseo Santa Lucía è bellissima. Città industriale ma vivace.',de:'⚠️ Sehr heiß im Juni (~34°C) — viel trinken. Atemberaubender Bergblick (Cerro de la Silla). Paseo Santa Lucía Promenade ist wunderschön. Industrielle aber lebendige Stadt.'},
   food:{en:'Cabrito (roasted goat), machacado con huevo, pan de polvo, craft beer scene — norteño cuisine at its best.',fr:'Cabrito (chevreau rôti), machacado con huevo, pan de polvo, bières artisanales — cuisine norteño dans toute sa splendeur.',es:'Cabrito (cabra asada), machacado con huevo, pan de polvo, escena de cerveza artesana — cocina norteña en su máxima expresión.',pt:'Cabrito (cabra assada), machacado con huevo, pan de polvo, cenas de cerveja artesanal — culinária norteña no seu melhor.',it:'Cabrito (capretto arrosto), machacado con huevo, pan de polvo, birre artigianali — cucina norteño al suo meglio.',de:'Cabrito (gebratene Ziege), Machacado con Huevo, Pan de Polvo, Craft Beer Szene — Norteño-Küche vom Feinsten.'}}
];

var CITY_POS=[
  'center center',  // NY
  'center center',  // LA
  'center 60%',     // Dallas
  'center 50%',     // SF - Golden Gate
  'center 40%',     // Miami
  'center center',  // Seattle
  'center center',  // Boston
  'center center',  // Houston
  'center center',  // Kansas City
  'center center',  // Philadelphia
  'center center',  // Atlanta
  'center center',  // Toronto
  'center 40%',     // Vancouver
  'center 40%',     // Mexico City
  'center 40%',     // Guadalajara
  'center center'   // Monterrey
];
var CITY_IMAGES=[
  '/public/cities/newyork.jpg',
  '/public/cities/losangeles.jpg',
  '/public/cities/dallas.jpg',
  '/public/cities/sanfrancisco.jpg',
  '/public/cities/miami.jpg',
  '/public/cities/seattle.jpg',
  '/public/cities/boston.jpg',
  '/public/cities/houston.jpg',
  '/public/cities/kansascity.jpg',
  '/public/cities/philadelphia.jpg',
  '/public/cities/atlanta.jpg',
  '/public/cities/toronto.jpg',
  '/public/cities/vancouver.jpg',
  '/public/cities/mexicocity.jpg',
  '/public/cities/guadalajara.jpg',
  '/public/cities/monterrey.jpg'
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
var useRef = React.useRef;
var e = React.createElement;

// Précharger les images du jeu penalty dès le démarrage
(function(){
  ['/goalkeeper.png','/stadium_bg.png'].forEach(function(src){
    var img=new Image();img.src=src;
  });
})();

// ── PENALTY CSS GAME — version image gardien + CSS animations ────────────────
(function(){
  var s=document.createElement('style');
  s.textContent='@keyframes gk-idle{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}@keyframes gk-diveLA{0%{transform:translateX(0) translateY(0) rotate(0)}30%{transform:translateX(-50px) translateY(-60px) rotate(-40deg)}65%{transform:translateX(-110px) translateY(-40px) rotate(-70deg)}100%{transform:translateX(-160px) translateY(-10px) rotate(-78deg)}}@keyframes gk-diveLB{0%{transform:translateX(0) translateY(0) rotate(0)}30%{transform:translateX(-40px) translateY(-20px) rotate(-25deg)}65%{transform:translateX(-90px) translateY(-5px) rotate(-45deg)}100%{transform:translateX(-135px) translateY(5px) rotate(-55deg)}}@keyframes gk-diveRA{0%{transform:translateX(0) translateY(0) rotate(0)}30%{transform:translateX(50px) translateY(-60px) rotate(40deg)}65%{transform:translateX(110px) translateY(-40px) rotate(70deg)}100%{transform:translateX(160px) translateY(-10px) rotate(78deg)}}@keyframes gk-diveRB{0%{transform:translateX(0) translateY(0) rotate(0)}30%{transform:translateX(40px) translateY(-20px) rotate(25deg)}65%{transform:translateX(90px) translateY(-5px) rotate(45deg)}100%{transform:translateX(135px) translateY(5px) rotate(55deg)}}@keyframes gk-jump{0%{transform:translateY(0) scaleX(1) scaleY(1)}12%{transform:translateY(4px) scaleX(1.05) scaleY(0.92)}45%{transform:translateY(-75px) scaleX(1.2) scaleY(1)}70%{transform:translateY(-65px) scaleX(1.25) scaleY(1)}100%{transform:translateY(0) scaleX(1) scaleY(1)}}@keyframes gk-catch{0%{transform:translateY(0) rotate(0) scaleY(1)}50%{transform:translateY(6px) rotate(-15deg) scaleY(0.93)}100%{transform:translateY(10px) rotate(-25deg) scaleY(0.87)}}@keyframes gk-armL-idle{0%,100%{transform:translateY(-50%) rotate(20deg)}50%{transform:translateY(-50%) rotate(8deg)}}@keyframes gk-armR-idle{0%,100%{transform:translateY(-50%) rotate(-20deg)}50%{transform:translateY(-50%) rotate(-8deg)}}@keyframes gk-armL-diveA{0%{transform:translateY(-50%) rotate(20deg) scaleX(1)}50%{transform:translateY(-50%) rotate(70deg) scaleX(1.2)}100%{transform:translateY(-50%) rotate(120deg) scaleX(1.45)}}@keyframes gk-armL-diveB{0%{transform:translateY(-50%) rotate(20deg) scaleX(1)}50%{transform:translateY(-50%) rotate(-20deg) scaleX(1.2)}100%{transform:translateY(-50%) rotate(-60deg) scaleX(1.45)}}@keyframes gk-armR-diveA{0%{transform:translateY(-50%) rotate(-20deg) scaleX(1)}50%{transform:translateY(-50%) rotate(-70deg) scaleX(1.2)}100%{transform:translateY(-50%) rotate(-120deg) scaleX(1.45)}}@keyframes gk-armR-diveB{0%{transform:translateY(-50%) rotate(-20deg) scaleX(1)}50%{transform:translateY(-50%) rotate(20deg) scaleX(1.2)}100%{transform:translateY(-50%) rotate(60deg) scaleX(1.45)}}@keyframes gk-armR-trailA{0%{transform:translateY(-50%) rotate(-20deg)}100%{transform:translateY(-50%) rotate(-50deg)}}@keyframes gk-armR-trailB{0%{transform:translateY(-50%) rotate(-20deg)}100%{transform:translateY(-50%) rotate(-35deg)}}@keyframes gk-armL-trailA{0%{transform:translateY(-50%) rotate(20deg)}100%{transform:translateY(-50%) rotate(50deg)}}@keyframes gk-armL-trailB{0%{transform:translateY(-50%) rotate(20deg)}100%{transform:translateY(-50%) rotate(35deg)}}@keyframes gk-armL-jump{0%,100%{transform:translateY(-50%) rotate(20deg)}50%{transform:translateY(-50%) rotate(-90deg)}}@keyframes gk-armR-jump{0%,100%{transform:translateY(-50%) rotate(-20deg)}50%{transform:translateY(-50%) rotate(90deg)}}@keyframes gk-armL-catch{0%{transform:translateY(-50%) rotate(20deg) scaleX(1)}50%{transform:translateY(-50%) rotate(65deg) scaleX(1.25)}100%{transform:translateY(-50%) rotate(90deg) scaleX(1.45)}}@keyframes gk-armR-catch{0%{transform:translateY(-50%) rotate(-20deg) scaleX(1)}50%{transform:translateY(-50%) rotate(-65deg) scaleX(1.25)}100%{transform:translateY(-50%) rotate(-90deg) scaleX(1.45)}}@keyframes gk-flyL{0%{bottom:-50px;left:50%;opacity:1;transform:translateX(-50%) scale(1)}100%{bottom:185px;left:12%;opacity:.4;transform:translateX(-50%) scale(.45)}}@keyframes gk-flyC{0%{bottom:-50px;left:50%;opacity:1;transform:translateX(-50%) scale(1)}100%{bottom:205px;left:50%;opacity:.4;transform:translateX(-50%) scale(.4)}}@keyframes gk-flyClow{0%{bottom:-50px;left:50%;opacity:1;transform:translateX(-50%) scale(1)}100%{bottom:12px;left:50%;opacity:.7;transform:translateX(-50%) scale(.82)}}@keyframes gk-flyR{0%{bottom:-50px;left:50%;opacity:1;transform:translateX(-50%) scale(1)}100%{bottom:185px;left:88%;opacity:.4;transform:translateX(-50%) scale(.45)}}';
  document.head.appendChild(s);
})();

function PenaltyCSSGame(props){
  var gkRef=useRef(null);var armLRef=useRef(null);var armRRef=useRef(null);
  var ballRef=useRef(null);var flashRef=useRef(null);var busyRef=useRef(false);
  var lang=props.lang||'en';var G=props.G||'#d4af37';

  function setState(s){
    var gk=gkRef.current;var armL=armLRef.current;var armR=armRRef.current;
    if(!gk)return;
    var dur={idle:'1.6s',jump:'.5s',catch:'.4s',diveLA:'.42s',diveLB:'.42s',diveRA:'.42s',diveRB:'.42s'}[s]||'.42s';
    var fill=s==='idle'?'none':'forwards';
    var rep=s==='idle'?'infinite':'1';
    var ease=s==='idle'?'ease-in-out':s==='jump'?'ease-out':'cubic-bezier(.2,0,.4,1)';
    var body={idle:'gk-idle',diveLA:'gk-diveLA',diveLB:'gk-diveLB',diveRA:'gk-diveRA',diveRB:'gk-diveRB',jump:'gk-jump',catch:'gk-catch'};
    var al={idle:'gk-armL-idle',diveLA:'gk-armL-diveA',diveLB:'gk-armL-diveB',diveRA:'gk-armL-trailA',diveRB:'gk-armL-trailB',jump:'gk-armL-jump',catch:'gk-armL-catch'};
    var ar={idle:'gk-armR-idle',diveLA:'gk-armR-trailA',diveLB:'gk-armR-trailB',diveRA:'gk-armR-diveA',diveRB:'gk-armR-diveB',jump:'gk-armR-jump',catch:'gk-armR-catch'};
    // iOS + Android fix
    gk.style.animation='none';armL.style.animation='none';armR.style.animation='none';
    gk.style.transform='';armL.style.transform='';armR.style.transform='';
    gk.getBoundingClientRect();
    gk.style.animation=(body[s]||'')+' '+dur+' '+ease+' '+fill+' '+rep;
    armL.style.animation=(al[s]||'')+' '+dur+' ease-out '+fill+' '+rep;
    armR.style.animation=(ar[s]||'')+' '+dur+' ease-out '+fill+' '+rep;
  }

  function shoot(dir){
    if(busyRef.current)return;
    busyRef.current=true;
    var ball=ballRef.current;var flash=flashRef.current;if(!ball||!flash)return;
    var choices=['L','C','R'];
    var kDir=choices[Math.floor(Math.random()*3)];
    var variant=Math.random()<0.5?'A':'B';
    var diff=[0.45,0.58,0.70,0.82][props.roundIdx||0]||0.45;
    // IA plus difficile selon le round
    if(Math.random()<diff)kDir=dir;
    var stateMap={L:variant==='A'?'diveLA':'diveLB',C:Math.random()<0.5?'jump':'catch',R:variant==='A'?'diveRA':'diveRB'};
    var kAnim=stateMap[kDir];
    var ballAnim='gk-fly'+dir;
    if(dir==='C')ballAnim=(kDir==='C'&&kAnim==='catch')?'gk-flyClow':'gk-flyC';
    // Reset ballon
    ball.style.animation='none';ball.style.display='none';
    ball.getBoundingClientRect();
    ball.style.display='block';ball.style.animation=ballAnim+' .5s ease-in forwards';
    setState(kAnim);
    var scored=(dir!==kDir);
    setTimeout(function(){
      flash.textContent=scored?'⚽ BUT !':(lang==='fr'?'ARRÊTÉ ! 🧤':lang==='es'?'PARADO ! 🧤':'SAVED ! 🧤');
      flash.style.color=scored?'#ff4444':'#ffd700';
      flash.style.transform='translate(-50%,-50%) scale(1)';
      setTimeout(function(){flash.style.transform='translate(-50%,-50%) scale(0)';},900);
      if(props.onShotDone)props.onShotDone(scored);
    },550);
    setTimeout(function(){
      setState('idle');
      ball.style.display='none';
      busyRef.current=false;
    },1900);
  }

  useEffect(function(){setState('idle');},[]);

  var goalStyle={position:'relative',width:'100%',maxWidth:360,height:260,margin:'0 auto',
    border:'4px solid #fff',borderBottom:'none',borderRadius:'4px 4px 0 0',
    background:'linear-gradient(180deg,#0d3b0d 0%,#1a6b1a 60%,#2d8a2d 100%)',
    overflow:'hidden',
    boxShadow:'0 0 30px rgba(0,0,0,0.6)'};
  var wrapStyle={position:'absolute',bottom:0,left:'50%',transform:'translateX(-50%)',width:160,display:'flex',flexDirection:'column',alignItems:'center'};
  var armsStyle={position:'absolute',bottom:72,width:170,height:44,pointerEvents:'none'};
  var armBase={position:'absolute',width:58,height:14,background:'linear-gradient(90deg,#5bc8e8,#3aa8cc)',borderRadius:7,top:'50%'};
  var ballStyle={position:'absolute',width:34,height:34,borderRadius:'50%',background:'radial-gradient(circle at 35% 35%,#fff,#222)',bottom:-50,left:'50%',transform:'translateX(-50%)',display:'none',boxShadow:'0 4px 12px rgba(0,0,0,.5)'};
  var flashStyle={position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%) scale(0)',fontSize:28,fontWeight:900,textShadow:'0 4px 16px rgba(0,0,0,.8)',transition:'transform .18s cubic-bezier(.34,1.56,.64,1)',whiteSpace:'nowrap',pointerEvents:'none'};

  return e('div',null,
    e('div',{style:goalStyle},
      e('div',{style:wrapStyle},
        e('div',{style:armsStyle},
          e('div',{ref:armLRef,style:Object.assign({},armBase,{right:'50%',transformOrigin:'right center'})}),
          e('div',{ref:armRRef,style:Object.assign({},armBase,{left:'50%',transformOrigin:'left center'})})
        ),
        e('img',{ref:gkRef,src:'/goalkeeper.png',alt:'Gardien',style:{width:150,height:'auto',display:'block',filter:'drop-shadow(0 8px 20px rgba(0,0,0,.7))',transformOrigin:'bottom center'}})
      ),
      e('div',{ref:ballRef,style:ballStyle}),
      e('div',{ref:flashRef,style:flashStyle})
    ),
    e('p',{style:{color:'rgba(255,255,255,.5)',fontSize:11,letterSpacing:2,textTransform:'uppercase',margin:'16px 0 10px',textAlign:'center'}},
      lang==='fr'?'OÙ TIREZ-VOUS ?':lang==='es'?'¿DÓNDE TIRAS?':lang==='pt'?'ONDE CHUTAR?':lang==='it'?'DOVE TIRI?':lang==='de'?'WOHIN SCHIESST DU?':'WHERE DO YOU SHOOT?'
    ),
    e('div',{style:{display:'flex',gap:14,justifyContent:'center'}},
      e('button',{onClick:function(){shoot('L');},style:{width:70,height:70,borderRadius:'50%',border:'none',background:'linear-gradient(135deg,#e74c3c,#c0392b)',fontSize:26,cursor:'pointer',WebkitTapHighlightColor:'transparent',color:'white'}},'⬅'),
      e('button',{onClick:function(){shoot('C');},style:{width:70,height:70,borderRadius:'50%',border:'none',background:'linear-gradient(135deg,#f39c12,#e67e22)',fontSize:26,cursor:'pointer',WebkitTapHighlightColor:'transparent',color:'white'}},'⬆'),
      e('button',{onClick:function(){shoot('R');},style:{width:70,height:70,borderRadius:'50%',border:'none',background:'linear-gradient(135deg,#27ae60,#2ecc71)',fontSize:26,cursor:'pointer',WebkitTapHighlightColor:'transparent',color:'white'}},'➡')
    )
  );
}

// ── PENALTY 3D CANVAS GAME ────────────────────────────────────────────────────
function PenaltyPitch(props){
  var containerRef=useRef(null);
  var powerBarRef=useRef(null);
  var threeRef=useRef(null);
  var _ps=useState('idle');var phase=_ps[0];var setPhase=_ps[1];
  var _pr=useState(null);var result=_pr[0];var setResult=_pr[1];
  var _pfs=useState(false);var fullscreen=_pfs[0];var setFullscreen=_pfs[1];
  var _pvh=useState(window.innerHeight);var vph=_pvh[0];var setVph=_pvh[1];
  var _pready=useState(false);var ready=_pready[0];var setReady=_pready[1];
  var _pgk=useState('idle');var gkAnim=_pgk[0];var setGkAnim=_pgk[1];
  var gkAnimRef=useRef(setGkAnim);
  gkAnimRef.current=setGkAnim;
  var lang=props.lang||'en';var G=props.G||'#d4af37';var roundIdx=props.roundIdx||0;

  // Fix iOS 100vh + orientation change
  useEffect(function(){
    function onResize(){setVph(window.innerHeight);}
    window.addEventListener('resize',onResize);
    return function(){window.removeEventListener('resize',onResize);};
  },[]);

  var _audioCtx=null;
  var _audioBuffers={};
  function loadAudioBuffers(){
    var AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;
    var ctx=getAC();if(!ctx)return;
    var isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    [['goal','/crowd_goal.mp3'],['save','/crowd_save.mp3']].forEach(function(pair){
      fetch(pair[1]).then(function(r){return r.arrayBuffer();}).then(function(ab){
        ctx.decodeAudioData(ab,function(buf){_audioBuffers[pair[0]]=buf;});
      }).catch(function(){});
    });
  }
  loadAudioBuffers();
  function getAC(){
    try{
      if(!_audioCtx||_audioCtx.state==='closed'){
        var AC=window.AudioContext||window.webkitAudioContext;if(!AC)return null;
        _audioCtx=new AC();
      }
      if(_audioCtx.state==='suspended')_audioCtx.resume();
      return _audioCtx;
    }catch(ex){return null;}
  }
  function playSound(type){
    try{
      var ctx=getAC();if(!ctx)return;
      var now=ctx.currentTime;
      function tone(freq,t0,dur,vol,shape,f2){
        var o=ctx.createOscillator();var g=ctx.createGain();
        o.connect(g);g.connect(ctx.destination);o.type=shape||'sine';
        o.frequency.setValueAtTime(freq,now+t0);
        if(f2)o.frequency.exponentialRampToValueAtTime(f2,now+t0+dur);
        g.gain.setValueAtTime(vol||0.3,now+t0);
        g.gain.exponentialRampToValueAtTime(0.001,now+t0+dur);
        o.start(now+t0);o.stop(now+t0+dur+0.01);
      }
      function noise(dur,freq,Q,vol,attack,decay){
        var buf=ctx.createBuffer(1,Math.floor(ctx.sampleRate*dur),ctx.sampleRate);
        var bd=buf.getChannelData(0);for(var i=0;i<bd.length;i++)bd[i]=(Math.random()*2-1);
        var ns=ctx.createBufferSource();ns.buffer=buf;
        var f=ctx.createBiquadFilter();f.type='bandpass';f.frequency.value=freq;f.Q.value=Q||1;
        var g=ctx.createGain();
        g.gain.setValueAtTime(0,now);
        g.gain.linearRampToValueAtTime(vol,now+attack);
        g.gain.setValueAtTime(vol,now+dur-decay);
        g.gain.linearRampToValueAtTime(0,now+dur);
        ns.connect(f);f.connect(g);g.connect(ctx.destination);ns.start();
      }
      if(type==='kick'){
        tone(180,0,0.06,0.9,'sine',55);
        tone(75,0,0.3,0.6,'triangle',38);
      }
      else if(type==='goal'){
        if(_audioBuffers.goal){
          var src=ctx.createBufferSource();src.buffer=_audioBuffers.goal;
          var gv=ctx.createGain();gv.gain.value=0.35;
          src.connect(gv);gv.connect(ctx.destination);src.start(now);
        } else {
          noise(3.2,500,0.3,0.35,0.15,0.6);noise(3.2,1200,0.5,0.2,0.3,0.5);
          [0,0.1,0.22,0.36].forEach(function(t,i){tone([392,494,587,784][i],t,0.9,0.22,'triangle');});
        }
      }
      else if(type==='save'){
        if(_audioBuffers.save){
          var src2=ctx.createBufferSource();src2.buffer=_audioBuffers.save;
          var gv2=ctx.createGain();gv2.gain.value=0.85;
          src2.connect(gv2);gv2.connect(ctx.destination);src2.start(now);
        } else {
          tone(280,0,0.07,0.5,'sawtooth',90);tone(120,0.05,0.35,0.35,'triangle',60);
          noise(1.8,600,0.5,0.2,0.1,0.5);noise(1.8,300,0.6,0.15,0.2,0.4);
        }
      }
    }catch(ex){}
  }

  useEffect(function(){
    var id='gkpro-styles';
    if(document.getElementById(id))return;
    var s=document.createElement('style');
    s.id=id;
    s.textContent=[
      // ── Conteneur wrapper ──
      '.gkpro-wrap{position:fixed;pointer-events:none;z-index:10001;width:150px;height:226px;filter:drop-shadow(0 8px 20px rgba(0,0,0,.7));transform:translateX(-50%);}',
      '.gkpro-upper,.gkpro-lower{position:absolute;bottom:0;left:0;width:150px;will-change:transform;}',
      '.gkpro-upper img,.gkpro-lower img{width:150px;height:auto;display:block;}',
      // ── Clip-path : coupure à la taille ──
      '.gkpro-upper{clip-path:inset(0 0 42% 0);transform-origin:50% 58%;}',
      '.gkpro-lower{clip-path:inset(58% 0 0 0);transform-origin:50% 58%;}',
      // ── Idle sway (11.4s = 2π/0.55) ──
      '@keyframes gkpro-idle{0%,100%{transform:translateX(-50%) translateX(-14px)}25%{transform:translateX(-50%) translateX(-4px)}50%{transform:translateX(-50%) translateX(14px)}75%{transform:translateX(-50%) translateX(4px)}}',
      '.gkpro-wrap.gkpro-idle{animation:gkpro-idle 11.4s ease-in-out infinite;}',
      // ── diveLA — tout le corps glisse gauche, torse quasi horizontal ──
      '@keyframes gkpro-wrap-diveLA{0%{transform:translateX(-50%)}100%{transform:translateX(calc(-50% - 110px))}}',
      '@keyframes gkpro-upper-diveLA{0%{transform:rotate(0)}100%{transform:rotate(-82deg) translateY(-20px)}}',
      '@keyframes gkpro-lower-diveLA{0%{transform:rotate(0)}100%{transform:rotate(8deg)}}',
      '.gkpro-wrap.gkpro-diveLA{animation:gkpro-wrap-diveLA .42s cubic-bezier(.2,0,.4,1) forwards;}',
      '.gkpro-wrap.gkpro-diveLA .gkpro-upper{animation:gkpro-upper-diveLA .42s cubic-bezier(.2,0,.4,1) forwards;}',
      '.gkpro-wrap.gkpro-diveLA .gkpro-lower{animation:gkpro-lower-diveLA .42s cubic-bezier(.2,0,.4,1) forwards;}',
      // ── diveLB — plongeon bas gauche ──
      '@keyframes gkpro-wrap-diveLB{0%{transform:translateX(-50%)}100%{transform:translateX(calc(-50% - 130px))}}',
      '@keyframes gkpro-upper-diveLB{0%{transform:rotate(0)}100%{transform:rotate(-86deg)}}',
      '@keyframes gkpro-lower-diveLB{0%{transform:rotate(0)}100%{transform:rotate(6deg)}}',
      '.gkpro-wrap.gkpro-diveLB{animation:gkpro-wrap-diveLB .42s cubic-bezier(.2,0,.4,1) forwards;}',
      '.gkpro-wrap.gkpro-diveLB .gkpro-upper{animation:gkpro-upper-diveLB .42s cubic-bezier(.2,0,.4,1) forwards;}',
      '.gkpro-wrap.gkpro-diveLB .gkpro-lower{animation:gkpro-lower-diveLB .42s cubic-bezier(.2,0,.4,1) forwards;}',
      // ── diveRA — tout le corps glisse droite, torse quasi horizontal ──
      '@keyframes gkpro-wrap-diveRA{0%{transform:translateX(-50%)}100%{transform:translateX(calc(-50% + 110px))}}',
      '@keyframes gkpro-upper-diveRA{0%{transform:rotate(0)}100%{transform:rotate(82deg) translateY(-20px)}}',
      '@keyframes gkpro-lower-diveRA{0%{transform:rotate(0)}100%{transform:rotate(-8deg)}}',
      '.gkpro-wrap.gkpro-diveRA{animation:gkpro-wrap-diveRA .42s cubic-bezier(.2,0,.4,1) forwards;}',
      '.gkpro-wrap.gkpro-diveRA .gkpro-upper{animation:gkpro-upper-diveRA .42s cubic-bezier(.2,0,.4,1) forwards;}',
      '.gkpro-wrap.gkpro-diveRA .gkpro-lower{animation:gkpro-lower-diveRA .42s cubic-bezier(.2,0,.4,1) forwards;}',
      // ── diveRB — plongeon bas droite ──
      '@keyframes gkpro-wrap-diveRB{0%{transform:translateX(-50%)}100%{transform:translateX(calc(-50% + 130px))}}',
      '@keyframes gkpro-upper-diveRB{0%{transform:rotate(0)}100%{transform:rotate(86deg)}}',
      '@keyframes gkpro-lower-diveRB{0%{transform:rotate(0)}100%{transform:rotate(-6deg)}}',
      '.gkpro-wrap.gkpro-diveRB{animation:gkpro-wrap-diveRB .42s cubic-bezier(.2,0,.4,1) forwards;}',
      '.gkpro-wrap.gkpro-diveRB .gkpro-upper{animation:gkpro-upper-diveRB .42s cubic-bezier(.2,0,.4,1) forwards;}',
      '.gkpro-wrap.gkpro-diveRB .gkpro-lower{animation:gkpro-lower-diveRB .42s cubic-bezier(.2,0,.4,1) forwards;}',
      // ── jump ──
      '@keyframes gkpro-upper-jump{0%{transform:translateY(0) scaleX(1)}45%{transform:translateY(-75px) scaleX(1.15)}100%{transform:translateY(-65px) scaleX(1.2)}}',
      '@keyframes gkpro-lower-jump{0%{transform:scaleY(1)}100%{transform:scaleY(0.82)}}',
      '.gkpro-wrap.gkpro-jump .gkpro-upper{animation:gkpro-upper-jump .5s ease-out forwards;}',
      '.gkpro-wrap.gkpro-jump .gkpro-lower{animation:gkpro-lower-jump .5s ease-out forwards;}',
      // ── catch ──
      '@keyframes gkpro-upper-catch{0%{transform:rotate(0) translateY(0) scaleY(1)}100%{transform:rotate(-25deg) translateY(10px) scaleY(0.9)}}',
      '@keyframes gkpro-lower-catch{0%{transform:rotate(0)}100%{transform:rotate(12deg)}}',
      '.gkpro-wrap.gkpro-catch .gkpro-upper{animation:gkpro-upper-catch .4s cubic-bezier(.2,0,.4,1) forwards;}',
      '.gkpro-wrap.gkpro-catch .gkpro-lower{animation:gkpro-lower-catch .4s cubic-bezier(.2,0,.4,1) forwards;}',
    ].join('');
    document.head.appendChild(s);
    return function(){var el=document.getElementById(id);if(el)el.remove();};
  },[]);

  useEffect(function(){
    var THREE=window.THREE;if(!THREE)return;
    var container=containerRef.current;if(!container)return;
    var W=container.clientWidth||340;var H=container.clientHeight||220;

    function makeCanvasTex(fn,w,h){
      var cv=document.createElement('canvas');cv.width=w||512;cv.height=h||w||512;
      fn(cv.getContext('2d'),cv.width,cv.height);return new THREE.CanvasTexture(cv);
    }

    // ── Renderer ──
    var isMobile=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var renderer=new THREE.WebGLRenderer({antialias:!isMobile,powerPreference:isMobile?'default':'high-performance'});
    renderer.setSize(W,H);renderer.setPixelRatio(isMobile?1:Math.min(window.devicePixelRatio||1,2));
    renderer.shadowMap.enabled=!isMobile;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.22;
    renderer.domElement.style.cssText='display:block;width:100%;height:100%';
    container.appendChild(renderer.domElement);

    var ro=new ResizeObserver(function(){
      var thr2=threeRef.current;if(!thr2)return;
      var W2=container.clientWidth;var H2=container.clientHeight;
      if(W2>0&&H2>0){renderer.setSize(W2,H2);thr2.camera.aspect=W2/H2;thr2.camera.updateProjectionMatrix();}
    });
    ro.observe(container);

    // ── Scene ──
    var scene=new THREE.Scene();
    scene.background=new THREE.Color(0x1a90d9);
    scene.fog=new THREE.FogExp2(0x3a9fd5,0.003);

    var GZ=-3.5;
    // ── Camera — near-ground behind ball ──
    var camera=new THREE.PerspectiveCamera(72,W/H,0.1,220);
    camera.position.set(0,0.4,4.8);camera.lookAt(0,1.1,GZ);

    // ── Photometric stadium lighting ──
    scene.add(new THREE.AmbientLight(0xe8f0ff,0.55));
    var sun=new THREE.DirectionalLight(0xfff8f0,1.15);
    sun.position.set(8,24,12);sun.castShadow=true;
    sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-25;sun.shadow.camera.right=25;
    sun.shadow.camera.top=25;sun.shadow.camera.bottom=-25;sun.shadow.bias=-0.0008;
    scene.add(sun);
    var fillL=new THREE.DirectionalLight(0x6888cc,0.22);fillL.position.set(-6,5,-20);scene.add(fillL);
    function makeSpot(px,py,pz,intensity){
      var sp=new THREE.SpotLight(0xfff2d8,intensity,75,Math.PI/7,0.18,1.0);
      sp.position.set(px,py,pz);sp.target.position.set(0,0,-9.5);
      sp.castShadow=false;
      scene.add(sp);scene.add(sp.target);return sp;
    }
    var spots=[makeSpot(-19,20,-2,2.8),makeSpot(19,20,-2,2.8),makeSpot(-19,20,-20,2.4),makeSpot(19,20,-20,2.4)];

    // Sky handled by scene.background color

    // ── Grass — professional pitch with mowing stripes ──
    var grassTex=makeCanvasTex(function(ctx,sw,sh){
      // Mowed stripes — vivid green, no lighting washout (MeshBasicMaterial)
      var numStripes=24;
      for(var s=0;s<numStripes;s++){
        var light=s%2===0;
        var gradient=ctx.createLinearGradient(0,s*sh/numStripes,0,(s+1)*sh/numStripes);
        if(light){gradient.addColorStop(0,'#2db82d');gradient.addColorStop(1,'#35d435');}
        else{gradient.addColorStop(0,'#1e8c1e');gradient.addColorStop(1,'#249424');}
        ctx.fillStyle=gradient;ctx.fillRect(0,s*sh/numStripes,sw,(sh/numStripes)+1);
      }
      // Subtle texture grain
      ctx.globalAlpha=0.06;
      for(var ni=0;ni<1400;ni++){
        ctx.fillStyle=Math.random()<0.5?'#0a2d0a':'#44bb44';
        ctx.fillRect(Math.random()*sw,Math.random()*sh,1+Math.random()*2,1+Math.random()*2);
      }
      ctx.globalAlpha=1;
    },1024,1024);
    grassTex.wrapS=grassTex.wrapT=THREE.RepeatWrapping;grassTex.repeat.set(14,20);
    var maxAniso=renderer.capabilities.getMaxAnisotropy?renderer.capabilities.getMaxAnisotropy():4;
    grassTex.anisotropy=maxAniso;
    var ground=new THREE.Mesh(
      new THREE.PlaneGeometry(56,88),
      new THREE.MeshBasicMaterial({map:grassTex})  // BasicMaterial: no lighting washout
    );
    ground.rotation.x=-Math.PI/2;ground.position.z=-16;ground.receiveShadow=true;scene.add(ground);

    // Spotlight pool removed with floodlights

    // ── Pitch markings ──
    var wM=new THREE.MeshBasicMaterial({color:0xffffff,opacity:0.88,transparent:true});
    function addLine(x1,z1,x2,z2,thickness){
      var dx=x2-x1,dz=z2-z1,len=Math.sqrt(dx*dx+dz*dz);
      var m=new THREE.Mesh(new THREE.PlaneGeometry(thickness||0.072,len),wM);
      m.rotation.x=-Math.PI/2;m.rotation.z=Math.atan2(dx,dz);
      m.position.set((x1+x2)/2,0.016,(z1+z2)/2);scene.add(m);
    }
    // Penalty area
    addLine(-10.5,-9.5,10.5,-9.5);addLine(-10.5,-9.5,-10.5,-19.5);addLine(10.5,-9.5,10.5,-19.5);
    // 6-yard box
    addLine(-4.0,-9.5,-4.0,-12.8);addLine(4.0,-9.5,4.0,-12.8);addLine(-4.0,-12.8,4.0,-12.8);
    // Penalty spot
    var sM=new THREE.Mesh(new THREE.CircleGeometry(0.11,20),wM.clone());
    sM.rotation.x=-Math.PI/2;sM.position.set(0,0.017,3.2);scene.add(sM);
    // D arc
    var arcPts=[];
    for(var ai=0;ai<=Math.PI;ai+=0.07)arcPts.push(new THREE.Vector3(Math.cos(ai-Math.PI/2)*3.0,0.017,-9.5+Math.sin(ai)*3.0));
    var arcG=new THREE.BufferGeometry().setFromPoints(arcPts);
    scene.add(new THREE.Line(arcG,new THREE.LineBasicMaterial({color:0xffffff,opacity:0.88,transparent:true})));

    // ── Goal — aluminum/steel posts ──
    var GW=7.32,GH=2.44;
    var postTex=makeCanvasTex(function(ctx,sz){
      var g=ctx.createLinearGradient(0,0,sz,0);
      g.addColorStop(0,'#c0c8d0');g.addColorStop(0.35,'#f0f4f8');g.addColorStop(0.65,'#f0f4f8');g.addColorStop(1,'#8899aa');
      ctx.fillStyle=g;ctx.fillRect(0,0,sz,sz);
    },64);
    var postMat=new THREE.MeshStandardMaterial({map:postTex,metalness:0.82,roughness:0.14,color:0xffffff});
    function cyl(r,h,seg){return new THREE.CylinderGeometry(r,r,h,seg||20);}
    var lp=new THREE.Mesh(cyl(0.055,GH),postMat);lp.position.set(-GW/2,GH/2,GZ);lp.castShadow=true;scene.add(lp);
    var rp=new THREE.Mesh(cyl(0.055,GH),postMat);rp.position.set(GW/2,GH/2,GZ);rp.castShadow=true;scene.add(rp);
    var cb=new THREE.Mesh(cyl(0.055,GW+0.11),postMat);cb.rotation.z=Math.PI/2;cb.position.set(0,GH,GZ);cb.castShadow=true;scene.add(cb);
    var lpB=new THREE.Mesh(cyl(0.045,GH),postMat);lpB.position.set(-GW/2,GH/2,GZ-0.95);scene.add(lpB);
    var rpB=new THREE.Mesh(cyl(0.045,GH),postMat);rpB.position.set(GW/2,GH/2,GZ-0.95);scene.add(rpB);
    var cbB=new THREE.Mesh(cyl(0.045,GW+0.1),postMat);cbB.rotation.z=Math.PI/2;cbB.position.set(0,GH,GZ-0.95);scene.add(cbB);

    // ── Net — realistic white mesh ──
    var nV=[];var NC=28,NR=18,ND=0.95;
    function nv(x1,y1,z1,x2,y2,z2){nV.push(x1,y1,z1,x2,y2,z2);}
    for(var ni=0;ni<=NC;ni++){var nx=-GW/2+ni/NC*GW;
      nv(nx,0.02,GZ,nx,GH,GZ);nv(nx,GH,GZ,nx,GH,GZ-ND);nv(nx,0.02,GZ,nx,0.02,GZ-ND);}
    for(var nr=0;nr<=NR;nr++){var nh=nr/NR*GH;
      nv(-GW/2,nh,GZ,GW/2,nh,GZ);nv(-GW/2,nh,GZ,-GW/2,nh,GZ-ND);nv(GW/2,nh,GZ,GW/2,nh,GZ-ND);}
    for(var nd=0;nd<=10;nd++){var ndz=GZ-nd/10*ND;
      nv(-GW/2,0.02,ndz,-GW/2,GH,ndz);nv(GW/2,0.02,ndz,GW/2,GH,ndz);nv(-GW/2,GH,ndz,GW/2,GH,ndz);}
    var netGeo=new THREE.BufferGeometry();netGeo.setAttribute('position',new THREE.Float32BufferAttribute(nV,3));
    var netMat=new THREE.LineBasicMaterial({color:0xffffff,opacity:0.5,transparent:true});
    scene.add(new THREE.LineSegments(netGeo,netMat));

    // ── Stadium — Dola AI flat illustration style ──
    var cloudPlanes=[];
    (function(){
      // ─ Spectator: 2 overlapping circles (head + body) = Dola AI person icon ─
      function drawSpectator(c,cx,cy,r,jerseyColor,skinColor){
        c.fillStyle=jerseyColor;
        var headR=r*0.40;
        var bodyR=r*0.58;
        var headCY=cy-r*0.42;
        var bodyCY=cy+r*0.18;
        // Body circle (larger, lower)
        c.beginPath();c.arc(cx,bodyCY,bodyR,0,Math.PI*2);c.fill();
        // Head circle (smaller, upper) — overlaps body → seamless silhouette
        c.beginPath();c.arc(cx,headCY,headR,0,Math.PI*2);c.fill();
      }

      var BW=2048,BH=1024;
      var bc=document.createElement('canvas');bc.width=BW;bc.height=BH;
      var c=bc.getContext('2d');

      // ── Sky: blue (matching scene.background) ──
      var skyH=Math.round(BH*0.22);
      var skyG=c.createLinearGradient(0,0,0,skyH);
      skyG.addColorStop(0,'#2d8fd5');skyG.addColorStop(1,'#6ec6f0');
      c.fillStyle=skyG;c.fillRect(0,0,BW,skyH);

      // ── Arche verte courbée (polygone de segments droits) ──
      var archMidY=Math.round(skyH*1.62);
      c.fillStyle='#061402';
      c.beginPath();
      c.moveTo(0,0);c.lineTo(0,Math.round(skyH*0.52));
      var steps=24;
      for(var si=0;si<=steps;si++){
        var t=si/steps;
        var ax=t*BW;
        var ay=Math.round(skyH*0.52)+Math.round((archMidY-skyH*0.52)*4*t*(1-t));
        c.lineTo(ax,ay);
      }
      c.lineTo(BW,0);c.closePath();c.fill();
      // White trim
      c.strokeStyle='#ffffff';c.lineWidth=7;
      c.beginPath();
      for(var si=0;si<=steps;si++){
        var t=si/steps;
        var ax=t*BW;
        var ay=Math.round(skyH*0.52)+Math.round((archMidY-skyH*0.52)*4*t*(1-t));
        if(si===0)c.moveTo(ax,ay);else c.lineTo(ax,ay);
      }
      c.stroke();

      // ── Stands background: dark green ──
      var standsTop=Math.round(skyH*0.48);
      var adBoardsTop=Math.round(BH*0.84);
      c.fillStyle='#0a1a06';
      c.fillRect(0,standsTop,BW,adBoardsTop-standsTop);

      // ── Spectateurs ronds colorés (Dola AI style) ──
      var jerseys=['#c8102e','#e53e3e','#ed8936','#ecc94b','#38a169','#3182ce',
                   '#9f7aea','#f6e05e','#f56565','#4caf50','#00bcd4','#ffffff',
                   '#ff7043','#ab47bc','#2b6cb0','#ffb300','#26a69a','#e91e63'];
      var skins=['#f5cba7','#d4856b','#a0522d','#5d3a1a','#ffd5b5','#c68642'];
      var rowH=40;
      var numRows=Math.floor((adBoardsTop-standsTop-2)/rowH);
      var personR=22; // bigger — clearly visible against dark bg
      var numCols=Math.ceil(BW/(personR*2+1))+2;
      for(var row=0;row<numRows;row++){
        var rowCY=standsTop+row*rowH+personR+8;
        for(var col=0;col<numCols;col++){
          var seed=(row*97+col*53)>>>0;
          var offset=(row%2)*(personR+1);
          var cx2=col*(personR*2+2)-offset+personR;
          var jc=jerseys[((seed*31)>>>0)%jerseys.length];
          var sk=skins[((seed*13)>>>0)%skins.length];
          // Slight size variation for natural look
          var sc2=[0.82,0.9,1.0,1.1,1.18][seed%5];
          drawSpectator(c,cx2,rowCY,Math.round(personR*sc2),jc,sk);
          // Raised scarf (vertical colored bar above head)
          if(seed%8===0){
            c.fillStyle=jerseys[((seed*7)>>>0)%jerseys.length];
            c.fillRect(cx2-3,rowCY-Math.round(personR*sc2)*1.6,6,Math.round(personR*sc2)*1.0);
          }
        }
      }

      // ── Panneaux pub (bas) — rouge/jaune/vert/bleu/violet+Nike ──
      var adH=BH-adBoardsTop;
      var panels=[
        {color:'#c8102e',w:0.22},  // rouge
        {color:'#f0c000',w:0.18},  // jaune
        {color:'#7dc83e',w:0.18},  // vert clair
        {color:'#3182ce',w:0.22},  // bleu
        {color:'#5b21b6',w:0.20}   // violet (Nike)
      ];
      var xCursor=0;
      panels.forEach(function(p){
        var pw=Math.round(BW*p.w);
        c.fillStyle=p.color;
        c.fillRect(xCursor,adBoardsTop,pw,adH);
        xCursor+=pw;
      });
      // White ball circle on red panel
      c.fillStyle='#ffffff';
      c.beginPath();c.arc(Math.round(BW*0.11),adBoardsTop+Math.round(adH*0.5),Math.round(adH*0.35),0,Math.PI*2);c.fill();
      // Nike swoosh on violet panel
      (function(){
        var bx=BW*0.905,by=adBoardsTop+adH*0.5,sw2=BW*0.075,sh2=adH*0.42;
        c.fillStyle='#ffffff';
        c.beginPath();
        c.moveTo(bx-sw2*0.5,by+sh2*0.35);
        c.quadraticCurveTo(bx+sw2*0.2,by-sh2*0.5,bx+sw2*0.5,by-sh2*0.35);
        c.quadraticCurveTo(bx+sw2*0.1,by+sh2*0.1,bx-sw2*0.5,by+sh2*0.35);
        c.fill();
      })();

      // ── Higgsfield Nano Banana 2 — Dola AI style stadium ──
      // 2752x890, ratio 3.09:1 → PlaneGeometry(100,32.3)
      new THREE.TextureLoader().load('/stadium_bg.png',function(bgTex){
        var bgPlane=new THREE.Mesh(
          new THREE.PlaneGeometry(100,32.3),
          new THREE.MeshBasicMaterial({map:bgTex,depthWrite:true,color:0xbbbbbb})
        );
        bgPlane.position.set(0,16.15,GZ-22);
        scene.add(bgPlane);
      });

      // Side panels removed — background image covers full width

      // ── Nuages animés (3 plans canvas) ──
      function makeCloud(){
        var cv=document.createElement('canvas');cv.width=256;cv.height=96;
        var ctx=cv.getContext('2d');
        ctx.fillStyle='rgba(255,255,255,0.9)';
        ctx.beginPath();ctx.ellipse(128,68,108,30,0,0,Math.PI*2);ctx.fill();
        ctx.beginPath();ctx.arc(72,50,28,0,Math.PI*2);ctx.fill();
        ctx.beginPath();ctx.arc(178,46,34,0,Math.PI*2);ctx.fill();
        ctx.beginPath();ctx.arc(128,44,26,0,Math.PI*2);ctx.fill();
        var tex=new THREE.CanvasTexture(cv);
        return new THREE.Mesh(
          new THREE.PlaneGeometry(1,1),
          new THREE.MeshBasicMaterial({map:tex,transparent:true,depthWrite:false,alphaTest:0.02})
        );
      }
      [{w:24,h:7,x:-55,y:28,z:-42,sp:0.013},
       {w:18,h:5,x:15,y:25,z:-48,sp:0.009},
       {w:28,h:8,x:5,y:32,z:-52,sp:0.017}
      ].forEach(function(d){
        var m=makeCloud();
        m.scale.set(d.w,d.h,1);
        m.position.set(d.x,d.y,d.z);
        m.userData.speed=d.sp;
        m.userData.resetX=d.x-85;
        m.userData.wrapX=d.x+85;
        scene.add(m);
        cloudPlanes.push(m);
      });
    })();

    // Advertising boards — modern digital-style
    var boardTex=makeCanvasTex(function(ctx,sw,sh){
      var boards=['FIFA','ADIDAS','COCA‑COLA','QATAR','VISA','BUDWEISER','HYUNDAI','WANDA'];
      var bColors=['#c8102e','#1c3f94','#f40009','#5c0d14','#1a1f71','#c8102e','#002c5f','#e53935'];
      var nBoards=boards.length;
      for(var b=0;b<nBoards;b++){
        var bx=b*(sw/nBoards),bw=sw/nBoards;
        ctx.fillStyle=bColors[b];ctx.fillRect(bx,0,bw,sh);
        ctx.fillStyle='#ffffff';ctx.font='bold '+(sh*0.58)+'px sans-serif';
        ctx.textAlign='center';ctx.textBaseline='middle';
        ctx.fillText(boards[b],bx+bw/2,sh/2);
      }
    },1024,64);
    // No front board — ad boards are in the background canvas only
    // Side boards (facing toward camera)
    var sideBoardMat=new THREE.MeshStandardMaterial({map:boardTex,emissive:0x333333,emissiveIntensity:0.55,roughness:0.35,side:THREE.DoubleSide});
    var adMeshL=new THREE.Mesh(new THREE.PlaneGeometry(24,1.1),sideBoardMat);
    adMeshL.rotation.y=Math.PI/2;adMeshL.position.set(-14,0.22,-9);scene.add(adMeshL);
    var adMeshR=new THREE.Mesh(new THREE.PlaneGeometry(24,1.1),sideBoardMat);
    adMeshR.rotation.y=-Math.PI/2;adMeshR.position.set(14,0.22,-9);scene.add(adMeshR);

    // Floodlight towers removed

    // Functional scoreboard screen above goal
    var sbCanvas=document.createElement('canvas');sbCanvas.width=512;sbCanvas.height=256;
    var sbCtx=sbCanvas.getContext('2d');
    var sbConf=[];
    function initSbConf(){
      sbConf=[];
      var colors=['#ffe500','#ff2255','#00ddff','#00ff88','#ff8800','#ffffff','#cc44ff'];
      for(var i=0;i<55;i++){sbConf.push({x:Math.random()*512,y:Math.random()*60-80,vx:(Math.random()-0.5)*4,vy:Math.random()*3+2,w:Math.random()*10+5,h:Math.random()*6+3,rot:Math.random()*Math.PI*2,vr:(Math.random()-0.5)*0.25,color:colors[Math.floor(Math.random()*colors.length)]});}
    }
    function stepSbConf(){sbConf.forEach(function(p){p.x+=p.vx;p.y+=p.vy;p.rot+=p.vr;if(p.y>280){p.y=-10;p.x=Math.random()*512;}});}
    function updateScoreboard(goals,saves,result){
      sbCtx.fillStyle='#0a0a0a';sbCtx.fillRect(0,0,512,256);
      sbCtx.strokeStyle='#444';sbCtx.lineWidth=6;sbCtx.strokeRect(4,4,504,248);
      sbCtx.fillStyle='#1a1a2e';sbCtx.fillRect(0,0,512,48);
      sbCtx.fillStyle='#f0c000';sbCtx.font='bold 18px monospace';
      sbCtx.textAlign='center';sbCtx.fillText('FIFA WORLD CUP 2026',256,20);
      var pn=thr&&thr.playerName?thr.playerName.toUpperCase():'';
      if(pn){sbCtx.fillStyle='#ffffff';sbCtx.font='bold 15px monospace';sbCtx.fillText('⚽ '+pn,256,40);}
      if(result){
        if(sbConf.length>0){sbConf.forEach(function(p){sbCtx.save();sbCtx.translate(p.x,p.y);sbCtx.rotate(p.rot);sbCtx.fillStyle=p.color;sbCtx.fillRect(-p.w/2,-p.h/2,p.w,p.h);sbCtx.restore();});}
        sbCtx.fillStyle='rgba(0,0,0,0.3)';sbCtx.fillRect(0,52,512,204);
        sbCtx.font='bold 76px sans-serif';
        sbCtx.fillStyle=result==='goal'?'#ffe500':'#ff4466';
        sbCtx.shadowColor=result==='goal'?'rgba(255,229,0,0.9)':'rgba(255,60,80,0.9)';
        sbCtx.shadowBlur=28;
        sbCtx.fillText(result==='goal'?'⚽ GOAL!':'✋ SAVED!',256,155);
        sbCtx.shadowBlur=0;
        sbCtx.fillStyle='rgba(255,255,255,0.55)';sbCtx.font='bold 22px monospace';
        sbCtx.fillText(goals+' — '+saves,256,210);
      } else {
        sbCtx.fillStyle='#ffffff';sbCtx.font='bold 88px monospace';
        sbCtx.fillText(goals,140,175);
        sbCtx.fillStyle='#888';sbCtx.font='bold 60px monospace';
        sbCtx.fillText('-',256,170);
        sbCtx.fillStyle='#ff4444';sbCtx.font='bold 88px monospace';
        sbCtx.fillText(saves,372,175);
        sbCtx.fillStyle='#aaa';sbCtx.font='14px monospace';
        sbCtx.fillText('GOALS',140,215);sbCtx.fillText('SAVES',372,215);
      }
      sbTex.needsUpdate=true;
    }
    var sbTex=new THREE.CanvasTexture(sbCanvas);
    var sbMesh=new THREE.Mesh(
      new THREE.PlaneGeometry(20,8),
      new THREE.MeshBasicMaterial({map:sbTex,depthWrite:false})
    );
    sbMesh.position.set(0,13,GZ-20.5);
    sbMesh.renderOrder=1;
    scene.add(sbMesh);
    updateScoreboard(0,0);
    // thr assigned below — sbMesh/updateScoreboard wired up after thr init

    // ── Soccer ball — realistic PBR with hexagonal texture ──
    var ballTex=makeCanvasTex(function(ctx,sz){
      // White base
      ctx.fillStyle='#f5f5f5';ctx.fillRect(0,0,sz,sz);
      // Black panels — traditional Telstar pattern approximation
      ctx.fillStyle='#111111';
      var c=sz/2;
      function pentagon(ox,oy,r){
        ctx.beginPath();
        for(var pp=0;pp<5;pp++){var aa=pp*Math.PI*2/5-Math.PI/2;
          pp===0?ctx.moveTo(ox+Math.cos(aa)*r,oy+Math.sin(aa)*r):ctx.lineTo(ox+Math.cos(aa)*r,oy+Math.sin(aa)*r);}
        ctx.closePath();ctx.fill();
        // Panel shine
        ctx.fillStyle='rgba(255,255,255,0.18)';
        ctx.beginPath();ctx.arc(ox-r*0.22,oy-r*0.22,r*0.28,0,Math.PI*2);ctx.fill();
        ctx.fillStyle='#111111';
      }
      pentagon(c,c,sz*0.175);
      for(var op=0;op<5;op++){
        var oa=op*Math.PI*2/5-Math.PI/2;
        pentagon(c+Math.cos(oa)*sz*0.34,c+Math.sin(oa)*sz*0.34,sz*0.108);
      }
      // Ball surface sheen
      var grad=ctx.createRadialGradient(sz*0.35,sz*0.3,0,c,c,sz*0.5);
      grad.addColorStop(0,'rgba(255,255,255,0.22)');grad.addColorStop(0.6,'rgba(255,255,255,0)');
      ctx.fillStyle=grad;ctx.fillRect(0,0,sz,sz);
    },512);
    var ball=new THREE.Mesh(
      new THREE.SphereGeometry(0.115,36,36),
      new THREE.MeshStandardMaterial({map:ballTex,roughness:0.38,metalness:0.05,envMapIntensity:0.3})
    );
    ball.position.set(0,0.115,3.2);ball.castShadow=true;scene.add(ball);

    var ballShadow=new THREE.Mesh(
      new THREE.CircleGeometry(0.13,20),
      new THREE.MeshBasicMaterial({color:0x000000,opacity:0.28,transparent:true})
    );
    ballShadow.rotation.x=-Math.PI/2;ballShadow.position.set(0,0.011,3.2);scene.add(ballShadow);

    // ── Trail ──
    var TRAIL_LEN=24;
    var trailPos=new Float32Array(TRAIL_LEN*3);
    var trailGeo=new THREE.BufferGeometry();
    var trailPosAttr=new THREE.BufferAttribute(trailPos,3);
    trailGeo.setAttribute('position',trailPosAttr);
    var trailColArr=new Float32Array(TRAIL_LEN*3);
    for(var tci=0;tci<TRAIL_LEN;tci++){var tf3=tci/TRAIL_LEN;trailColArr[tci*3]=1;trailColArr[tci*3+1]=tf3*0.45;trailColArr[tci*3+2]=tf3*0.05;}
    trailGeo.setAttribute('color',new THREE.BufferAttribute(trailColArr,3));
    var trailMat=new THREE.PointsMaterial({size:0.11,sizeAttenuation:true,vertexColors:true,transparent:true,opacity:0,depthWrite:false});
    scene.add(new THREE.Points(trailGeo,trailMat));
    var trailHistory=[];

    // ── Goalkeeper — Higgsfield Photo Sprite ──
    var kSpriteMesh=new THREE.Mesh(
      new THREE.PlaneGeometry(1.4,2.1),
      new THREE.MeshBasicMaterial({transparent:true,alphaTest:0.08,side:THREE.DoubleSide,color:0xffffff})
    );
    kSpriteMesh.position.set(0,0.88,GZ+0.6);
    scene.add(kSpriteMesh);
    // Async-load photo sprite, remove white background via pixel scan
    (function(){
      var img=new Image();
      img.crossOrigin='anonymous';
      img.onload=function(){
        try{
          var cv=document.createElement('canvas');cv.width=img.width;cv.height=img.height;
          var cx2=cv.getContext('2d');cx2.drawImage(img,0,0);
          var id=cx2.getImageData(0,0,cv.width,cv.height),d=id.data;
          for(var i=0;i<d.length;i+=4){
            var r=d[i],g=d[i+1],b=d[i+2];
            var lum=r*0.299+g*0.587+b*0.114;
            var sat=Math.max(r,g,b)-Math.min(r,g,b);
            if(lum>238&&sat<22){d[i+3]=0;}
            else if(lum>215&&sat<28){d[i+3]=Math.round((255-lum)/(255-215)*255*0.6);}
          }
          cx2.putImageData(id,0,0);
          var newTex=new THREE.CanvasTexture(cv);
          newTex.needsUpdate=true;
          kSpriteMesh.material.map=newTex;
          kSpriteMesh.material.needsUpdate=true;
        }catch(e){
          var newTex2=new THREE.TextureLoader().load('/goalkeeper.png');
          kSpriteMesh.material.map=newTex2;
          kSpriteMesh.material.needsUpdate=true;
        }
        // Révéler le canvas une fois le gardien chargé
        setReady(true);
      };
      img.onerror=function(){setReady(true);};
      img.src='/goalkeeper.png';
    })();
    // Keeper ground shadow
    var kShadow=new THREE.Mesh(
      new THREE.PlaneGeometry(1.2,0.28),
      new THREE.MeshBasicMaterial({color:0x000000,transparent:true,opacity:0.32,depthWrite:false})
    );
    kShadow.rotation.x=-Math.PI/2;kShadow.position.set(0,0.008,GZ+0.6);scene.add(kShadow);

    // ── Keeper gloves — extend toward ball during dive ──
    function makeGlove(){
      var cv=document.createElement('canvas');cv.width=64;cv.height=48;
      var ctx=cv.getContext('2d');
      // Lime-green goalkeeper glove shape
      ctx.fillStyle='#78e000';
      ctx.beginPath();ctx.roundRect(4,4,56,40,10);ctx.fill();
      // Finger ridges
      ctx.fillStyle='#5ab800';
      for(var fi=0;fi<4;fi++){ctx.fillRect(10+fi*13,6,9,18);}
      // Palm highlight
      ctx.fillStyle='rgba(255,255,255,0.25)';
      ctx.beginPath();ctx.ellipse(32,32,18,8,0,0,Math.PI*2);ctx.fill();
      var tex=new THREE.CanvasTexture(cv);
      return new THREE.Mesh(
        new THREE.PlaneGeometry(0.55,0.38),
        new THREE.MeshBasicMaterial({map:tex,transparent:true,alphaTest:0.05,side:THREE.DoubleSide,depthWrite:false})
      );
    }
    var gloveL=makeGlove();var gloveR=makeGlove();
    gloveL.visible=false;gloveR.visible=false;
    scene.add(gloveL);scene.add(gloveR);

    kSpriteMesh.visible=false;
    var kSprite={
      mesh:kSpriteMesh,
      gloveL:gloveL,gloveR:gloveR,
      setDive:function(dir){
        var anim=thr.kAnim||'idle';
        if(gkAnimRef.current)gkAnimRef.current(anim);
      },
      setIdle:function(){
        if(gkAnimRef.current)gkAnimRef.current('idle');
      }
    };

    // ── Kicker — Lower-body Canvas Sprite (FIFA low-camera angle) ──
    // ── Kicker — Real 3D Mixamo GLB Model ──
    var pMesh=new THREE.Object3D();
    pMesh.position.set(0,0,3.2);
    scene.add(pMesh);
    (function(){
      function doLoad(){
        var dracoLoader=new window.DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
        var loader=new window.GLTFLoader();
        loader.setDRACOLoader(dracoLoader);
        loader.load('/kicker.glb',function(gltf){
          var model=gltf.scene;
          // Scale: bbox height=177cm → 1.8 world units
          model.scale.set(0.0101,0.0101,0.0101);
          // Back faces camera (camera z=5.5, goal z=-10)
          model.rotation.y=Math.PI;
          // Feet at ground: compute world bbox after scale, offset up
          var box=new THREE.Box3().setFromObject(model);
          model.position.y=-box.min.y;
          pMesh.add(model);
        },undefined,function(e){console.warn('kicker.glb error',e);});
      }
      if(window.GLTFLoader&&window.DRACOLoader){doLoad();}
      else{window.addEventListener('loaders-ready',doLoad,{once:true});}
    })();

        // ── Aim plane & crosshair ──
    var aimPlane=new THREE.Mesh(new THREE.PlaneGeometry(GW*2.6,GH*2.6),new THREE.MeshBasicMaterial({visible:false,side:THREE.DoubleSide}));
    aimPlane.position.set(0,GH/2,GZ);scene.add(aimPlane);
    var markerGrp=new THREE.Group();markerGrp.visible=false;scene.add(markerGrp);
    markerGrp.add(new THREE.Mesh(new THREE.SphereGeometry(0.07,12,12),new THREE.MeshBasicMaterial({color:0xffee00,transparent:true,opacity:0.9})));
    var chPts=[-0.22,0,0,0.22,0,0,0,-0.22,0,0,0.22,0];
    var chG=new THREE.BufferGeometry();chG.setAttribute('position',new THREE.Float32BufferAttribute(chPts,3));
    markerGrp.add(new THREE.LineSegments(chG,new THREE.LineBasicMaterial({color:0xffee00})));
    var rPts=[];for(var ri6=0;ri6<=40;ri6++)rPts.push(Math.cos(ri6/40*Math.PI*2)*0.2,Math.sin(ri6/40*Math.PI*2)*0.2,0);
    var rG=new THREE.BufferGeometry();rG.setAttribute('position',new THREE.Float32BufferAttribute(rPts,3));
    markerGrp.add(new THREE.Line(rG,new THREE.LineBasicMaterial({color:0xffee00,opacity:0.65,transparent:true})));

    // ── Confetti ──
    var CNUM=isMobile?80:320;
    var cPos=new Float32Array(CNUM*3);var cVel=[];var cColArr=new Float32Array(CNUM*3);
    var cPal=[[1,0.9,0.1],[0.25,0.92,0.3],[0.92,0.22,0.22],[0.6,0.65,1],[1,0.5,0.1],[0.92,0.25,0.92],[0.3,0.95,0.95]];
    for(var ci=0;ci<CNUM;ci++){cPos.set([0,GH/2,GZ],ci*3);cVel.push({x:(Math.random()-0.5)*0.28,y:Math.random()*0.18+0.05,z:(Math.random()-0.5)*0.14});cColArr.set(cPal[ci%7],ci*3);}
    var cPosAttr=new THREE.BufferAttribute(cPos,3);
    var confGeo=new THREE.BufferGeometry();confGeo.setAttribute('position',cPosAttr);confGeo.setAttribute('color',new THREE.BufferAttribute(cColArr,3));
    var confMat=new THREE.PointsMaterial({size:0.2,vertexColors:true,transparent:true,opacity:0,depthWrite:false});
    scene.add(new THREE.Points(confGeo,confMat));
    var showConf=false,confTimer=0;var camLookX=0;

    var raycaster=new THREE.Raycaster();
    var BS={x:0,y:0.115,z:3.2};// matches penalty spot position

    var thr={
      renderer,scene,camera,raycaster,aimPlane,markerGrp,
      ball,ballShadow,kSprite,kSpriteMesh,pMesh,
      GW,GH,GZ,BS,
      phase:'idle',aimPoint:null,keeperTarget:0,
      shotTarget:null,animFrame:0,totalFrames:58,
      result:null,raf:null,
      cPos,cVel,cPosAttr,confMat,
      chargeStart:0,power:0,curveAccum:0,lastMouseX:0
    };
    threeRef.current=thr;
    thr.sbMesh=sbMesh;thr.updateScoreboard=updateScoreboard;
    thr.playerName=props.playerName||'';

    function animate(){
      thr.raf=requestAnimationFrame(animate);
      var now=Date.now()*0.001;

      // Realistic spot flicker (skip on mobile to save GPU)
      if(!isMobile){var flicker=0.96+Math.sin(now*7.1)*0.022+Math.sin(now*13.3)*0.012+Math.sin(now*31)*0.006;spots.forEach(function(s){s.intensity=2.6*flicker;});}

      // Power bar update
      if(thr.phase==='charging'&&powerBarRef.current){
        var elapsed=(Date.now()-thr.chargeStart)/2000;
        thr.power=Math.min(elapsed,1);
        powerBarRef.current.style.width=(thr.power*100)+'%';
        if(thr.power>=1)fireShot();
      }

      // Keeper idle — weight-shift sway on canvas sprite
      if(thr.phase==='idle'||thr.phase==='aim'||thr.phase==='charging'){
        kSpriteMesh.position.x=Math.sin(now*0.55)*0.14+Math.sin(now*0.9)*0.04;
        kSpriteMesh.rotation.y=Math.sin(now*0.4)*0.04;
      }
      // Keeper shadow follows keeper x, slightly stretched during dive
      kShadow.position.x=kSpriteMesh.position.x;
      kShadow.scale.set(1+Math.abs(kSpriteMesh.rotation.z)*0.5,1,1);

      if(thr.phase==='animating'){
        thr.animFrame++;
        var t=Math.min(thr.animFrame/thr.totalFrames,1);
        var tgt=thr.shotTarget;var pwr=thr.power;

        // Ball trajectory — realistic parabola + Magnus curve
        var arcH=Math.max(tgt.y*0.55+0.7,0.95)*(0.75+pwr*0.5);
        var curveOffset=(tgt.curve||0)*Math.sin(t*Math.PI)*2.2;
        ball.position.x=BS.x+(tgt.x-BS.x)*t+curveOffset;
        ball.position.y=BS.y+(tgt.y-BS.y)*t+4*t*(1-t)*arcH;
        ball.position.z=BS.z+(GZ-BS.z)*t;
        // Realistic ball spin
        ball.rotation.x-=(0.16+pwr*0.32);ball.rotation.z+=(0.12+pwr*0.12);

        // Trail
        trailHistory.push(ball.position.clone());
        if(trailHistory.length>TRAIL_LEN)trailHistory.shift();
        for(var ti=0;ti<TRAIL_LEN;ti++){
          var src=trailHistory[Math.min(ti,trailHistory.length-1)];
          trailPos[ti*3]=src.x;trailPos[ti*3+1]=src.y;trailPos[ti*3+2]=src.z;
        }
        trailPosAttr.needsUpdate=true;trailMat.opacity=0.78*(1-t*0.45);

        // Ball shadow — dynamic
        ballShadow.position.set(ball.position.x,0.011,ball.position.z);
        var ss=Math.max(0.08,1.12-ball.position.y*0.62);
        ballShadow.scale.set(ss,ss,1);ballShadow.material.opacity=0.28*ss;

        // Keeper dive — dramatic sideways plunge
        if(thr.animFrame>4&&thr.animFrame<56){
          kSpriteMesh.position.x+=(thr.keeperTarget-kSpriteMesh.position.x)*0.22;
          var ds=thr.keeperTarget===0?0:(thr.keeperTarget>0?1:-1);
          var dt2=Math.min(Math.max((thr.animFrame-5)/18,0),1);
          var dts=dt2*dt2*(3-2*dt2);
          kSpriteMesh.rotation.z=ds===0?0:-ds*dts*1.25;
          kSpriteMesh.rotation.y=0;
          kSpriteMesh.scale.set(1+dts*0.45,1-dts*0.1,1);
          var shotHi=Math.max(0,(thr.shotTarget.y-1.1)*0.4);
          kSpriteMesh.position.y=0.88+shotHi*dts+Math.sin(dts*Math.PI)*(0.55+shotHi*0.4);
          if(thr.animFrame===5)kSprite.setDive(ds);

          // ── Gloves: extend leading hand toward ball ──
          if(ds!==0){
            var activeG=ds>0?gloveR:gloveL;
            var restG=ds>0?gloveL:gloveR;
            restG.visible=false;
            activeG.visible=true;
            // Leading glove shoots out from keeper body toward ball
            var armReach=dts*1.1;
            var gloveX=kSpriteMesh.position.x+ds*(0.45+armReach);
            var gloveY=kSpriteMesh.position.y+0.1+Math.sin(dts*Math.PI)*0.25;
            activeG.position.set(gloveX,gloveY,kSpriteMesh.position.z+0.05);
            // Tilt glove in dive direction
            activeG.rotation.z=-ds*dts*0.9;
            activeG.rotation.y=ds*0.35;
            activeG.scale.set(1+dts*0.4,1+dts*0.3,1);
          } else {
            gloveL.visible=false;gloveR.visible=false;
          }
        }
        // Reset scale + hide gloves after dive
        if(thr.animFrame>=56){
          kSpriteMesh.scale.set(1,1,1);
          gloveL.visible=false;gloveR.visible=false;
        }


        if(t>=1){
          thr.phase='result';
          var curveOff=(tgt.curve||0)*Math.sin(Math.PI)*2.2;
          var inGoal=Math.abs(tgt.x)<GW/2*0.97&&tgt.y>0.07&&tgt.y<GH*0.97;
          var kw=0.95;
          var keeperCY=kSpriteMesh.position.y;
          var dy=Math.abs(tgt.y-keeperCY);
          var dx2=Math.abs(tgt.x-kSpriteMesh.position.x);
          var saved=(dx2<kw&&dy<1.6)&&inGoal;
          thr.result=(saved||!inGoal)?'saved':'goal';
          trailMat.opacity=0;trailHistory=[];
          if(thr.result==='goal'){
            showConf=true;confTimer=0;confMat.opacity=1;
            var gs=(thr.sbGoals||0)+1;thr.sbGoals=gs;
            initSbConf();thr.sbResultActive='goal';
            if(thr.updateScoreboard)thr.updateScoreboard(gs,thr.sbSaves||0,'goal');
            for(var ri7=0;ri7<CNUM;ri7++){cPos[ri7*3]=tgt.x+(Math.random()-0.5)*GW*1.1;cPos[ri7*3+1]=GH*0.35+Math.random()*GH*1.5;cPos[ri7*3+2]=GZ+(Math.random()-0.5)*0.8;cVel[ri7]={x:(Math.random()-0.5)*0.28,y:Math.random()*0.14+0.05,z:(Math.random()-0.5)*0.1};}
            cPosAttr.needsUpdate=true;playSound('goal');
          } else {
            var sv=(thr.sbSaves||0)+1;thr.sbSaves=sv;
            initSbConf();thr.sbResultActive='saved';
            if(thr.updateScoreboard)thr.updateScoreboard(thr.sbGoals||0,sv,'saved');
            playSound('save');
          }
          setResult(thr.result);
          thr.resultTime=Date.now(); // timestamp — reset dans animate, pas setTimeout
        }
      }

      if(showConf){
        confTimer++;if(confTimer>90)confMat.opacity=Math.max(0,1-(confTimer-90)/65);if(confTimer>155)showConf=false;
        for(var cj=0;cj<CNUM;cj++){cPos[cj*3]+=cVel[cj].x;cPos[cj*3+1]+=cVel[cj].y;cVel[cj].y-=0.003;cPos[cj*3+2]+=cVel[cj].z;}
        cPosAttr.needsUpdate=true;
        // Net flash on goal — brief bright pulse
        if(confTimer<24)netMat.opacity=0.5+Math.abs(Math.sin(confTimer*0.52))*0.48;
        else netMat.opacity=0.5;
      } else {
        netMat.opacity=0.5;
      }
      // Camera smooth follow during shot (subtle horizontal pan)
      var camTX=(thr.phase==='animating'||thr.phase==='result')?ball.position.x*0.16:0;
      camLookX+=(camTX-camLookX)*0.07;
      camera.lookAt(camLookX,1.1,GZ);

      // Kicker kick animation — lean forward then hide
      if(thr.phase==='animating'&&pMesh.visible){
        var kf=thr.animFrame;
        if(kf<10){pMesh.rotation.x=-(kf/9)*0.4;pMesh.position.z=3.2+kf*0.04;}
        else{pMesh.visible=false;pMesh.rotation.x=0;pMesh.position.z=3.2;}
      }

      // Reset après résultat — RAF garanti, React updates différés hors RAF
      if(thr.phase==='result'&&thr.resultTime&&Date.now()-thr.resultTime>2400){
        thr.resultTime=null;
        var scored=thr.result==='goal';
        thr.sbResultActive=null;
        if(thr.updateScoreboard)thr.updateScoreboard(thr.sbGoals||0,thr.sbSaves||0);
        // Reset Three.js immédiatement
        thr.phase='idle';thr.result=null;thr.aimPoint=null;thr.animFrame=0;thr.power=0;thr.curveAccum=0;
        ball.position.set(BS.x,BS.y,BS.z);ball.rotation.set(0,0,0);
        ballShadow.position.set(BS.x,0.011,BS.z);ballShadow.scale.set(1,1,1);
        kSpriteMesh.position.set(0,0.88,GZ+0.6);kSpriteMesh.rotation.z=0;kSpriteMesh.rotation.y=0;kSpriteMesh.scale.set(1,1,1);
        gloveL.visible=false;gloveR.visible=false;kSprite.setIdle();
        pMesh.visible=true;
        markerGrp.visible=false;showConf=false;confMat.opacity=0;
        if(powerBarRef.current)powerBarRef.current.style.width='0%';
        // Différer les mises à jour React hors du contexte RAF (fix Android)
        var _scored=scored;
        window.setTimeout(function(){
          if(props.onShotDone)props.onShotDone(_scored);
          setResult(null);
          setPhase('idle');
        },0);
      }

      // Animate clouds (drift left→right like HTML nuage animation)
      cloudPlanes.forEach(function(m){
        m.position.x+=m.userData.speed;
        if(m.position.x>m.userData.wrapX)m.position.x=m.userData.resetX;
      });

      // Animate scoreboard confetti when result active
      if(thr.sbResultActive){stepSbConf();updateScoreboard(thr.sbGoals||0,thr.sbSaves||0,thr.sbResultActive);}

      try{renderer.render(scene,camera);}catch(ex){console.warn('render error',ex);}
    }
    thr.animate=animate;
    animate();
    // Watchdog — redémarre RAF si mort (fix Android/iOS)
    thr.watchdog=setInterval(function(){
      if(threeRef.current&&!threeRef.current.raf){
        threeRef.current.raf=requestAnimationFrame(animate);
      }
    },500);

    function fireShot(){
      if(!thr.aimPoint)return;
      thr.shotTarget={x:thr.aimPoint.x,y:thr.aimPoint.y,curve:Math.max(-0.5,Math.min(0.5,thr.curveAccum))};
      // Keeper AI: 3 options — left(-2.2), center(0), right(+2.2)
      var dirs=[-2.2,0,2.2];
      var cx=GW*0.13; // center threshold ±0.95 units
      var diff=[0.45,0.58,0.70,0.82][roundIdx]||0.45;
      var reaction=Math.max(0.28,Math.min(0.88,diff+(thr.power-0.5)*0.10));
      // correctSide: 0=left 1=center 2=right — matches where the shot goes
      var correctSide=thr.aimPoint.x>cx?2:thr.aimPoint.x<-cx?0:1;
      // wrongSide: keeper guesses the opposite side
      var wrongSide=correctSide===1?(Math.random()<0.5?0:2):(correctSide===2?0:2);
      thr.keeperTarget=Math.random()<reaction?dirs[correctSide]:dirs[wrongSide];
      var kDir=thr.keeperTarget<0?'L':thr.keeperTarget>0?'R':'C';
      var variant=Math.random()<0.5?'A':'B';
      var stateMap={L:variant==='A'?'diveLA':'diveLB',C:Math.random()<0.5?'jump':'catch',R:variant==='A'?'diveRA':'diveRB'};
      var kAnim=stateMap[kDir];
      thr.kAnim=kAnim;
      thr.phase='animating';thr.animFrame=0;pMesh.rotation.x=0;
      if(powerBarRef.current)powerBarRef.current.style.width='0%';
      playSound('kick');setPhase('animating');
    }
    thr.fireShot=fireShot;

    // Non-passive touch listeners — React synthetic onTouch* is passive by default
    // which blocks preventDefault() and causes page scroll during gameplay on mobile
    function onTS(ev){ev.preventDefault();var t=ev.touches[0];if(t)handleMouseDown({clientX:t.clientX,clientY:t.clientY});}
    function onTM(ev){ev.preventDefault();var t=ev.touches[0];if(t)handleMouseMove({clientX:t.clientX,clientY:t.clientY});}
    function onTE(ev){ev.preventDefault();handleMouseUp();}
    container.addEventListener('touchstart',onTS,{passive:false});
    container.addEventListener('touchmove',onTM,{passive:false});
    container.addEventListener('touchend',onTE,{passive:false});

    // visibilitychange désactivé — tuait le RAF sur Android au tap bouton
    function onVis(){}

    // iOS: recover from WebGL context loss
    renderer.domElement.addEventListener('webglcontextlost',function(ev){
      ev.preventDefault();
      if(thr.raf){cancelAnimationFrame(thr.raf);thr.raf=null;}
    },false);
    renderer.domElement.addEventListener('webglcontextrestored',function(){
      thr.raf=requestAnimationFrame(animate);
    },false);

    return function(){
      ro.disconnect();
      if(thr.watchdog)clearInterval(thr.watchdog);
      container.removeEventListener('touchstart',onTS);
      container.removeEventListener('touchmove',onTM);
      container.removeEventListener('touchend',onTE);
      if(thr.raf)cancelAnimationFrame(thr.raf);
      renderer.dispose();
      if(container.contains(renderer.domElement))container.removeChild(renderer.domElement);
      document.body.style.overflow='';
    };
  },[]);

  useEffect(function(){
    var thr=threeRef.current;if(!thr)return;
    thr.phase='idle';thr.aimPoint=null;thr.animFrame=0;thr.power=0;thr.curveAccum=0;
    setPhase('idle');setResult(null);
    if(thr.ball){thr.ball.position.set(0,0.115,3.2);thr.ball.rotation.set(0,0,0);}
    if(thr.ballShadow){thr.ballShadow.position.set(0,0.011,3.2);thr.ballShadow.scale.set(1,1,1);}
    if(thr.kSprite){thr.kSprite.mesh.position.set(0,0.88,thr.GZ+0.6);thr.kSprite.mesh.rotation.z=0;thr.kSprite.mesh.rotation.y=0;thr.kSprite.setIdle();}
    if(thr.markerGrp)thr.markerGrp.visible=false;
    if(thr.confMat)thr.confMat.opacity=0;
    if(powerBarRef.current)powerBarRef.current.style.width='0%';
  },[props.roundIdx]);

  useEffect(function(){
    var thr=threeRef.current;if(!thr)return;
    thr.playerName=props.playerName||'';
    if(thr.updateScoreboard)thr.updateScoreboard(thr.sbGoals||0,thr.sbSaves||0);
  },[props.playerName]);

  function doRaycast(clientX,clientY){
    var thr=threeRef.current;if(!thr||!thr.renderer)return null;
    var rect=thr.renderer.domElement.getBoundingClientRect();
    // Mobile-friendly: map full screen → goal coordinates (no need to tap inside cage)
    var nx=(clientX-rect.left)/rect.width;   // 0=left edge, 1=right edge
    var ny=1-(clientY-rect.top)/rect.height; // 0=bottom, 1=top
    var gx=(nx-0.5)*thr.GW*0.92;
    var gy=Math.max(0.12,Math.min(thr.GH*0.93, ny*thr.GH*1.4+0.05));
    var pt=new window.THREE.Vector3(
      Math.max(-thr.GW/2*0.92,Math.min(thr.GW/2*0.92,gx)),
      gy,
      thr.GZ
    );
    if(thr.phase==='aim'||thr.phase==='charging'){thr.markerGrp.position.copy(pt);thr.markerGrp.visible=true;}
    thr.aimPoint=pt.clone();return pt;
  }

  function handleMouseMove(ev){
    var thr=threeRef.current;if(!thr)return;
    if(thr.phase==='aim'||thr.phase==='charging'){
      doRaycast(ev.clientX,ev.clientY);
      if(thr.phase==='charging'){var dX=(ev.clientX-thr.lastMouseX)/55;thr.curveAccum=Math.max(-0.5,Math.min(0.5,thr.curveAccum+dX));}
      thr.lastMouseX=ev.clientX;
    }
  }
  function handleMouseDown(ev){
    var thr=threeRef.current;if(!thr)return;
    if(thr.phase==='animating'||thr.phase==='result'||thr.phase==='idle')return;
    if(thr.phase==='aim'){doRaycast(ev.clientX,ev.clientY);if(thr.aimPoint){thr.phase='charging';thr.chargeStart=Date.now();thr.curveAccum=0;thr.lastMouseX=ev.clientX;setPhase('charging');}}
  }
  function handleMouseUp(){var thr=threeRef.current;if(!thr||thr.phase!=='charging')return;thr.fireShot();}
  function handleTouchStart(ev){ev.preventDefault();var t=ev.touches[0];handleMouseDown({clientX:t.clientX,clientY:t.clientY});}
  function handleTouchMove(ev){ev.preventDefault();var t=ev.touches[0];handleMouseMove({clientX:t.clientX,clientY:t.clientY});}
  function handleTouchEnd(ev){ev.preventDefault();handleMouseUp();}

  function wakeAudio(){try{var ctx=getAC();if(ctx&&ctx.state==='suspended')ctx.resume();if(!_audioBuffers.goal)loadAudioBuffers();}catch(ex){}}
  function shootDir(dir){
    wakeAudio();
    var thr=threeRef.current;if(!thr)return;
    // Force aim phase + restart RAF if dead (iOS recovery)
    if(thr.phase!=='aim'){thr.phase='aim';}
    if(!thr.raf&&thr.animate){thr.animate();}
    var GW=thr.GW,GH=thr.GH,GZ=thr.GZ;
    var r=Math.random;
    // Each direction maps to a distinct zone with some randomness
    var targets={
      'L':{x:-(GW*0.30+r()*GW*0.12), y:GH*(0.20+r()*0.50)},
      'C':{x:(r()-0.5)*GW*0.12,       y:GH*(0.62+r()*0.28)},
      'R':{x:  GW*0.30+r()*GW*0.12,  y:GH*(0.20+r()*0.50)}
    };
    var t=targets[dir];
    thr.aimPoint=new window.THREE.Vector3(t.x,t.y,GZ);
    thr.power=0.75;
    thr.fireShot();
  }

    function enterFullscreenAndAim(){
    wakeAudio();
    document.body.style.overflow='hidden';
    // Native fullscreen API — hides browser chrome on Android Chrome, Firefox Mobile
    var docEl=document.documentElement;
    if(docEl.requestFullscreen)docEl.requestFullscreen().catch(function(){});
    else if(docEl.webkitRequestFullscreen)docEl.webkitRequestFullscreen();
    setFullscreen(true);
    setTimeout(function(){var thr=threeRef.current;if(thr){thr.phase='aim';}setPhase('aim');},160);
  }

  function exitFullscreen(){
    document.body.style.overflow='';
    if(document.exitFullscreen)document.exitFullscreen().catch(function(){});
    else if(document.webkitExitFullscreen)document.webkitExitFullscreen();
    setFullscreen(false);
  }

  var ri8=props.roundIdx||0;
  var RL=[{n:'R16'},{n:'QF'},{n:'SF'},{n:'FINAL'}];
  // vph = window.innerHeight updated on resize — fixes iOS Safari 100vh bug
  var containerStyle=fullscreen?{position:'fixed',top:0,left:0,width:'100vw',height:vph+'px',zIndex:9999,background:'#000',cursor:'default',opacity:ready?1:0,transition:'opacity .3s'}:{height:190,borderRadius:12,overflow:'hidden',border:'2px solid rgba(212,175,55,0.3)',boxShadow:'0 0 32px rgba(0,0,0,0.7)',background:'#0d1b3e',cursor:'pointer',opacity:ready?1:0,transition:'opacity .4s'};

  return e('div',{style:{userSelect:'none'}},
    e('div',{style:{display:'flex',justifyContent:'center',gap:8,marginBottom:8}},
      RL.map(function(r,i){return e('div',{key:i,style:{width:40,height:20,borderRadius:10,background:i<ri8?'rgba(40,200,40,0.3)':i===ri8?'rgba(212,175,55,0.3)':'rgba(255,255,255,0.05)',border:'1px solid '+(i<ri8?'#90ee90':i===ri8?G:'rgba(255,255,255,0.1)'),display:'flex',alignItems:'center',justifyContent:'center',fontSize:8,fontWeight:'bold',color:i<ri8?'#90ee90':i===ri8?G:'#444'}},i<ri8?'✅':r.n);})
    ),
    e('div',{ref:containerRef,style:containerStyle,onMouseDown:handleMouseDown,onMouseMove:handleMouseMove,onMouseUp:handleMouseUp,onTouchStart:handleTouchStart,onTouchMove:handleTouchMove,onTouchEnd:handleTouchEnd}),
    // Overlay HORS du container — évite que preventDefault() tue les clics sur mobile
    fullscreen&&e('div',{style:{position:'fixed',top:0,left:0,right:0,bottom:0,pointerEvents:'none',zIndex:10000}},
      e('button',{style:{position:'absolute',top:18,right:18,background:'rgba(0,0,0,0.7)',color:'white',border:'1px solid rgba(255,255,255,0.3)',borderRadius:8,padding:'8px 16px',fontSize:14,cursor:'pointer',pointerEvents:'auto',backdropFilter:'blur(8px)'},onClick:function(){exitFullscreen();var thr=threeRef.current;if(thr){thr.phase='idle';}setPhase('idle');}},'✕ ESC'),
      e('div',{
        className:'gkpro-wrap gkpro-'+gkAnim,
        style:{bottom:'20%',left:'50%'}
      },
        e('div',{className:'gkpro-upper'},
          e('img',{src:'/goalkeeper.png',width:150,alt:''})
        ),
        e('div',{className:'gkpro-lower'},
          e('img',{src:'/goalkeeper.png',width:150,alt:''})
        )
      ),
      (phase==='aim')&&e('div',{style:{position:'absolute',bottom:28,left:'50%',transform:'translateX(-50%)',display:'flex',gap:'20px',alignItems:'center',pointerEvents:'auto'}},
        e('button',{
          onClick:function(){shootDir('L');},
          style:{width:80,height:80,borderRadius:'50%',border:'none',background:'linear-gradient(135deg,#e74c3c,#c0392b)',fontSize:32,cursor:'pointer',boxShadow:'0 6px 20px rgba(231,76,60,0.6)',WebkitTapHighlightColor:'transparent',color:'white',display:'flex',alignItems:'center',justifyContent:'center'}
        },'⬅'),
        e('button',{
          onClick:function(){shootDir('C');},
          style:{width:80,height:80,borderRadius:'50%',border:'none',background:'linear-gradient(135deg,#f39c12,#e67e22)',fontSize:32,cursor:'pointer',boxShadow:'0 6px 20px rgba(243,156,18,0.6)',WebkitTapHighlightColor:'transparent',color:'white',display:'flex',alignItems:'center',justifyContent:'center'}
        },'⬆'),
        e('button',{
          onClick:function(){shootDir('R');},
          style:{width:80,height:80,borderRadius:'50%',border:'none',background:'linear-gradient(135deg,#27ae60,#2ecc71)',fontSize:32,cursor:'pointer',boxShadow:'0 6px 20px rgba(39,174,96,0.6)',WebkitTapHighlightColor:'transparent',color:'white',display:'flex',alignItems:'center',justifyContent:'center'}
        },'➡')
      ),
      (phase==='aim')&&e('div',{style:{position:'absolute',bottom:118,left:'50%',transform:'translateX(-50%)',color:'rgba(255,255,255,0.7)',fontSize:13,letterSpacing:2,textAlign:'center',whiteSpace:'nowrap',textShadow:'0 2px 8px rgba(0,0,0,0.9)'}},(lang==='fr'?'OÙ TIREZ-VOUS ?':lang==='es'?'¿DÓNDE TIRAS?':lang==='pt'?'ONDE VAI CHUTAR?':lang==='it'?'DOVE TIRI?':lang==='de'?'WOHIN SCHIESST DU?':'WHERE DO YOU SHOOT?')),
      result&&e('div',{style:{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',fontSize:66,fontWeight:900,letterSpacing:4,color:result==='goal'?'#ffe500':'#ff4444',textShadow:'0 0 50px '+(result==='goal'?'rgba(255,230,0,0.95)':'rgba(255,50,50,0.95)')+', 0 6px 18px rgba(0,0,0,1)',textAlign:'center'}},result==='goal'?'⚽ GOAL !':'✋ SAVED !'),
      (!result&&phase==='idle'&&(props.shotsLeft||0)>0)&&e('button',{
        style:{position:'absolute',bottom:80,left:'50%',transform:'translateX(-50%)',background:'linear-gradient(135deg,#d4af37,#ff9900)',border:'none',borderRadius:14,padding:'16px 40px',fontSize:17,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer',boxShadow:'0 4px 24px rgba(212,175,55,0.6)',letterSpacing:0.5,pointerEvents:'auto'},
        onClick:function(){var thr=threeRef.current;if(thr){thr.phase='aim';}setPhase('aim');}
      },'⚽ '+(lang==='fr'?'TIRER':lang==='es'?'TIRAR':lang==='pt'?'BATER':lang==='it'?'TIRARE':lang==='de'?'SCHIESSEN':'SHOOT'))
    ),
    e('div',{style:{display:'flex',justifyContent:'center',gap:6,margin:'6px 0'}},
      [0,1,2,3,4].map(function(i){var h=(props.shotHistory||[])[i];return e('div',{key:i,style:{width:24,height:24,borderRadius:'50%',background:h?(h.scored?'rgba(40,200,40,0.5)':'rgba(200,40,40,0.5)'):'rgba(255,255,255,0.08)',border:'2px solid '+(h?(h.scored?'#90ee90':'#ff6666'):'rgba(255,255,255,0.15)'),display:'flex',alignItems:'center',justifyContent:'center',fontSize:11}},h?(h.scored?'⚽':'✗'):'');})
    ),
    (phase==='idle'&&props.shotsLeft>0)&&e('button',{onClick:enterFullscreenAndAim,style:{width:'100%',background:'linear-gradient(135deg,'+G+',#ff9900)',border:'none',borderRadius:12,padding:'14px 0',fontSize:15,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer',boxShadow:'0 4px 20px rgba(212,175,55,0.55)',letterSpacing:0.5}},'⚽ '+(lang==='fr'?'PRENDRE LE PENALTY — PLEIN ÉCRAN':lang==='es'?'TIRAR PENAL — PANTALLA COMPLETA':lang==='pt'?'COBRAR PÊNALTI — TELA CHEIA':lang==='it'?'TIRARE IL RIGORE — SCHERMO INTERO':lang==='de'?'ELFMETER SCHIESSEN — VOLLBILD':'TAKE PENALTY — FULL SCREEN')),
    (phase==='animating')&&!fullscreen&&e('div',{style:{textAlign:'center',padding:'10px 0',color:G,fontSize:14,fontWeight:'bold',letterSpacing:3}},'• • •'),
    (props.shotsLeft<=0&&phase==='idle')&&e('div',{style:{textAlign:'center',padding:'10px',color:G,fontSize:12}},'Round finished!')
  );
}

// ─────────────────────────────────────────────────────────────────────────────

var FDATA_KEY = '756b5806bcc542e2bd2d3a09de10d732';
var WC2026_ID = 2000;
var ONESIGNAL_APP_ID = '29a090bc-9893-46a1-87a3-e3f162e2271d';
var G = '#d4af37';
var DARK = '#08091a';
var TEAM_COLORS = {
  'Argentina':'#74ACDF','Australia':'#FFD700','Austria':'#ED2939','Belgium':'#EF3340',
  'Bosnia':'#003087','Brazil':'#009C3B','Canada':'#FF0000','Cape Verde':'#003893',
  'Colombia':'#FCD116','Croatia':'#FF0000','Czechia':'#D7141A','DR Congo':'#007FFF',
  'Ecuador':'#FFD100','Egypt':'#CE1126','England':'#003090','France':'#002395',
  'Germany':'#DD0000','Haiti':'#003F87','Iran':'#239F40','Italy':'#009246',
  'Japan':'#BC002D','Mexico':'#006847','Morocco':'#C1272D','Netherlands':'#FF6600',
  'New Zealand':'#000000','Nigeria':'#008751','Norway':'#EF2B2D','Panama':'#DA121A',
  'Paraguay':'#D52B1E','Peru':'#D91023','Poland':'#DC143C','Portugal':'#006600',
  'Qatar':'#8D1B3D','Saudi Arabia':'#006C35','Scotland':'#003380','Senegal':'#00853F',
  'Serbia':'#C6363C','Slovenia':'#003DA5','South Africa':'#007A4D','South Korea':'#003478',
  'Spain':'#AA151B','Switzerland':'#FF0000','Turkey':'#E30A17','Ukraine':'#005BBB',
  'Uruguay':'#75AADB','USA':'#002868','Curacao':'#003DA5','Ivory Coast':'#F77F00',
  'Algeria':'#006233','Scotland':'#003380'
};
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
    'Panama':'Panamá'
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
    'Portugal':'Portugal','DR Congo':'R.D. Congo','Uzbekistan':'Ouzbekistan',
    'Colombia':'Colombie','England':'Angleterre','Croatia':'Croatie','Ghana':'Ghana',
    'Panama':'Panamá'
  },
  es:{
    'Mexico':'México','South Africa':'Sudáfrica','South Korea':'Corea del Sur',
    'Czechia':'República Checa','Canada':'Canada','Bosnia':'Bosnia y Herzegovina',
    'Qatar':'Qatar','Switzerland':'Suiza','Brazil':'Brasil','Morocco':'Marruecos',
    'Haiti':'Haiti','Scotland':'Escocia','USA':'USA','Paraguay':'Paraguay',
    'Australia':'Australia','Turkey':'Turquía','Germany':'Alemania','Curacao':'Curacao',
    'Ivory Coast':'Costa de Marfil','Ecuador':'Ecuador','Netherlands':'Paises Bajos',
    'Japan':'Japon','Sweden':'Suecia','Tunisia':'Tunez','Belgium':'Belgica',
    'Egypt':'Egipto','Iran':'Iran','New Zealand':'Nueva Zelanda','Spain':'España',
    'Cape Verde':'Cabo Verde','Saudi Arabia':'Arabia Saudita','Uruguay':'Uruguay',
    'France':'Francia','Senegal':'Senegal','Iraq':'Irak','Norway':'Noruega',
    'Argentina':'Argentina','Algeria':'Argelia','Austria':'Austria','Jordan':'Jordania',
    'Portugal':'Portugal','DR Congo':'R.D. Congo','Uzbekistan':'Uzbekistan',
    'Colombia':'Colombia','England':'Inglaterra','Croatia':'Croacia','Ghana':'Ghana',
    'Panama':'Panamá'
  },
  pt:{
    'Mexico':'México','South Africa':'África do Sul','South Korea':'Coreia do Sul',
    'Czechia':'Republica Tcheca','Canada':'Canada','Bosnia':'Bosnia e Herzegovina',
    'Qatar':'Catar','Switzerland':'Suica','Brazil':'Brasil','Morocco':'Marrocos',
    'Haiti':'Haiti','Scotland':'Escocia','USA':'USA','Paraguay':'Paraguai',
    'Australia':'Australia','Turkey':'Turquía','Germany':'Alemanha','Curacao':'Curacao',
    'Ivory Coast':'Costa do Marfim','Ecuador':'Equador','Netherlands':'Paises Baixos',
    'Japan':'Japao','Sweden':'Suecia','Tunisia':'Tunisia','Belgium':'Belgica',
    'Egypt':'Egito','Iran':'Ira','New Zealand':'Nova Zelandia','Spain':'Espanha',
    'Cape Verde':'Cabo Verde','Saudi Arabia':'Arabia Saudita','Uruguay':'Uruguai',
    'France':'Franca','Senegal':'Senegal','Iraq':'Iraque','Norway':'Noruega',
    'Argentina':'Argentina','Algeria':'Algeria','Austria':'Austria','Jordan':'Jordania',
    'Portugal':'Portugal','DR Congo':'R.D. Congo','Uzbekistan':'Uzbequistao',
    'Colombia':'Colombia','England':'Inglaterra','Croatia':'Croacia','Ghana':'Gana',
    'Panama':'Panamá'
  },
  it:{
    'Mexico':'Messico','South Africa':'Sudáfrica','South Korea':'Corea del Sud',
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
    'Panama':'Panamá'
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
    'Panama':'Panamá'
  }
};

function tn(team, lang){ return (TEAM_NAMES[lang]&&TEAM_NAMES[lang][team])||team; }

var FLAG_MAP = {
  'Mexico':'🇲🇽','South Africa':'🇿🇦','South Korea':'🇰🇷','Czechia':'🇨🇿',
  'Canada':'🇨🇦','Bosnia':'🇧🇦','Qatar':'🇶🇦','Switzerland':'🇨🇭',
  'Brazil':'🇧🇷','Morocco':'🇲🇦','Haiti':'🇭🇹','Scotland':'🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  'USA':'🇺🇸','Paraguay':'🇵🇾','Australia':'🇦🇺','Turkey':'🇹🇷',
  'Germany':'🇩🇪','Curacao':'🇨🇼','Ivory Coast':'🇨🇮','Ecuador':'🇪🇨',
  'Netherlands':'🇳🇱','Japan':'🇯🇵','Sweden':'🇸🇪','Tunisia':'🇹🇳',
  'Belgium':'🇧🇪','Egypt':'🇪🇬','Iran':'🇮🇷','New Zealand':'🇳🇿',
  'Spain':'🇪🇸','Cape Verde':'🇨🇻','Saudi Arabia':'🇸🇦','Uruguay':'🇺🇾',
  'France':'🇫🇷','Senegal':'🇸🇳','Iraq':'🇮🇶','Norway':'🇳🇴',
  'Argentina':'🇦🇷','Algeria':'🇩🇿','Austria':'🇦🇹','Jordan':'🇯🇴',
  'Portugal':'🇵🇹','DR Congo':'🇨🇩','Uzbekistan':'🇺🇿','Colombia':'🇨🇴',
  'England':'🏴󠁧󠁢󠁥󠁮󠁧󠁿','Croatia':'🇭🇷','Ghana':'🇬🇭','Panama':'🇵🇦'
};
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
  en:{appTitle:'World Cup 2026',appSub:'USA - CANADA - MEXICO',nav:['Home','Groups','Fixtures','Predictions','Quiz','Players','Polls','Sim','Game','Fantasy','Predict'],countdown:'Countdown',timeUnits:['Days','Hours','Min','Sec'],keyInfo:['Host nations','Teams','Matches','Duration'],keyVals:['3 nations','48 teams','104 matches','Jun 11-Jul 19'],format:'Tournament Format',formatLines:['12 groups of 4 teams','1st + 2nd + 8 best 3rds = 32 teams','Round of 32 > 16 > QF > SF > Final','Opening: Estadio Azteca, Mexico City','Final: MetLife Stadium, New York'],groupsTitle:'48 TEAMS - 12 GROUPS',hostLabel:'Host',groupLabel:'Group',myTeamLabel:'My Team',pickTeam:'Pick your team',pronoSub:'Who will reach the final?',pronoWinner:'World Champion 2026',pronoFinal:'Runner-up',pronoSemi:'Semi-finalists',pronoSave:'Save',pronoSaved:'Saved!',pronoReset:'Reset',pronoChoose:'Choose...',pronoMyPick:'My pick',quizSub:'Test your knowledge!',quizScore:'Score',quizNext:'Next question',quizFinish:'See result',quizRestart:'Play again',quizPerfect:'PERFECT! You are an expert!',quizGood:'Great job!',quizAvg:'Not bad!',quizBad:'Keep studying!',starsSub:'Players',pollTitle:'Polls',pollTotal:'votes',didYouKnow:'Did you know?',facts:['Italy miss WC 2026 for the 3rd consecutive time','Azteca hosts its 3rd World Cup','First-ever 48-team World Cup','First edition co-hosted by 3 countries','104 matches vs 64 in 2022','New IFAB rules in effect'],shareApp:'Share',shareCopied:'Link copied!',premiumBanner:'Go PREMIUM - Predictions + Stats + No ads',premiumBtn:'Unlock',fixturesTitle:'FIXTURES & RESULTS',fixturesAll:'All matches',fixturesMy:'My team only',noFixtures:'No fixtures found'},
  fr:{appTitle:'Coupe du Monde 2026',appSub:'USA - CANADA - MEXIQUE',nav:['Accueil','Groupes','Calendrier','Pronostics','Quiz','Joueurs','Sondages','Sim','Jeu','Fantasy','Predict'],countdown:'Compte a rebours',timeUnits:['Jours','Heures','Min','Sec'],keyInfo:['Pays hotes','Equipes','Matchs','Duree'],keyVals:['3 nations','48 equipes','104 matchs','11 juin-19 juil.'],format:'Format du tournoi',formatLines:['12 groupes de 4 equipes','1er + 2e + 8 meilleurs 3es = 32 equipes','Tour des 32 > 16e > QF > SF > Finale','Ouverture: Estadio Azteca, Mexico','Finale: MetLife Stadium, New York'],groupsTitle:'48 EQUIPES - 12 GROUPES',hostLabel:'Pays hote',groupLabel:'Groupe',myTeamLabel:'Mon Equipe',pickTeam:'Choisir mon equipe',pronoSub:'Qui ira en finale?',pronoWinner:'Champion du Monde 2026',pronoFinal:'Finaliste',pronoSemi:'Demi-finales',pronoSave:'Sauvegarder',pronoSaved:'Sauvegarde!',pronoReset:'Reinitialiser',pronoChoose:'Choisir...',pronoMyPick:'Mon choix',quizSub:'Testez vos connaissances!',quizScore:'Score',quizNext:'Question suivante',quizFinish:'Voir mon resultat',quizRestart:'Rejouer',quizPerfect:'PARFAIT! Tu es un expert!',quizGood:'Tres bien!',quizAvg:'Pas mal!',quizBad:'Continue a reviser!',starsSub:'Joueurs',pollTitle:'Sondages',pollTotal:'votes',didYouKnow:'Le saviez-vous?',facts:["L Italie rate le Mondial 2026 pour la 3e fois consecutive","L Azteca accueille son 3e Mondial","1er Mondial a 48 equipes","1ere edition co-organisee par 3 pays","104 matchs contre 64 en 2022","Nouvelles regles IFAB effectives"],shareApp:'Partager',shareCopied:'Lien copie!',premiumBanner:'Passez PREMIUM - Pronostics + Stats + Sans pub',premiumBtn:'Debloquer',fixturesTitle:'CALENDRIER & RESULTATS',fixturesAll:'Tous les matchs',fixturesMy:'Mon equipe uniquement',noFixtures:'Aucun match trouve'},
  es:{appTitle:'Copa del Mundo 2026',appSub:'USA - CANADA - MEXICO',nav:['Inicio','Grupos','Calendario','Pronosticos','Quiz','Jugadores','Sondeos','Sim','Juego','Fantasy','Predict'],countdown:'Cuenta regresiva',timeUnits:['Dias','Horas','Min','Seg'],keyInfo:['Paises anfitriones','Equipos','Partidos','Duracion'],keyVals:['3 naciones','48 equipos','104 partidos','11 jun-19 jul'],format:'Formato del torneo',formatLines:['12 grupos de 4 equipos','1 + 2 + 8 mejores 3eros = 32 equipos','Ronda de 32 > 16avos > QF > SF > Final','Apertura: Estadio Azteca, Mexico','Final: MetLife Stadium, Nueva York'],groupsTitle:'48 EQUIPOS - 12 GRUPOS',hostLabel:'Anfitri',groupLabel:'Grupo',myTeamLabel:'Mi Equipo',pickTeam:'Elegir mi equipo',pronoSub:'Quien llegara a la final?',pronoWinner:'Campeon del Mundo 2026',pronoFinal:'Finalista',pronoSemi:'Semifinalistas',pronoSave:'Guardar',pronoSaved:'Guardado!',pronoReset:'Reiniciar',pronoChoose:'Elegir...',pronoMyPick:'Mi eleccion',quizSub:'Pon a prueba tus conocimientos!',quizScore:'Puntuacion',quizNext:'Siguiente',quizFinish:'Ver resultado',quizRestart:'Jugar de nuevo',quizPerfect:'Perfecto! Eres un experto!',quizGood:'Muy bien!',quizAvg:'Nada mal!',quizBad:'Sigue estudiando!',starsSub:'Jugadores',pollTitle:'Sondeos',pollTotal:'votos',didYouKnow:'Sabias que?',facts:['Italia se pierde el Mundial 2026 por 3a vez consecutiva','El Azteca acoge su 3er Mundial','El primer Mundial con 48 equipos','Primera edicion organizada por 3 paises','104 partidos frente a 64 en 2022','Nuevas reglas del IFAB en vigor'],shareApp:'Compartir',shareCopied:'Enlace copiado!',premiumBanner:'Hazte PREMIUM - Pronosticos + Estadisticas + Sin anuncios',premiumBtn:'Desbloquear',fixturesTitle:'CALENDARIO Y RESULTADOS',fixturesAll:'Todos los partidos',fixturesMy:'Solo mi equipo',noFixtures:'No se encontraron partidos'},
  pt:{appTitle:'Copa do Mundo 2026',appSub:'USA - CANADA - MEXICO',nav:['Inicio','Grupos','Calendario','Palpites','Quiz','Jogadores','Enquetes','Sim','Jogo','Fantasy','Predict'],countdown:'Contagem regressiva',timeUnits:['Dias','Horas','Min','Seg'],keyInfo:['Paises anfitrioes','Selecoes','Jogos','Duracao'],keyVals:['3 nacoes','48 selecoes','104 jogos','11 jun-19 jul'],format:'Formato do torneio',formatLines:['12 grupos de 4 selecoes','1 + 2 + 8 melhores 3eiros = 32 equipes','Rodada de 32 > 16 > QF > SF > Final','Abertura: Estadio Azteca, Mexico','Final: MetLife Stadium, Nova York'],groupsTitle:'48 SELECOES - 12 GRUPOS',hostLabel:'Anfitriao',groupLabel:'Grupo',myTeamLabel:'Meu Time',pickTeam:'Escolher meu time',pronoSub:'Quem vai chegar a final?',pronoWinner:'Campeao do Mundo 2026',pronoFinal:'Vice-campeao',pronoSemi:'Semifinalistas',pronoSave:'Salvar',pronoSaved:'Salvo!',pronoReset:'Reiniciar',pronoChoose:'Escolher...',pronoMyPick:'Minha escolha',quizSub:'Teste seus conhecimentos!',quizScore:'Pontuacao',quizNext:'Proxima',quizFinish:'Ver resultado',quizRestart:'Jogar novamente',quizPerfect:'Perfeito! Voce e um expert!',quizGood:'Muito bem!',quizAvg:'Nada mal!',quizBad:'Continue estudando!',starsSub:'Jogadores',pollTitle:'Enquetes',pollTotal:'votos',didYouKnow:'Voce sabia?',facts:['A Italia perde a Copa 2026 pela 3a vez consecutiva','O Azteca sedia sua 3a Copa','Primeira Copa com 48 selecoes','Primeira edicao organizada por 3 paises','104 jogos contra 64 em 2022','Novas regras do IFAB em vigor'],shareApp:'Compartilhar',shareCopied:'Link copiado!',premiumBanner:'Seja PREMIUM - Palpites + Estatisticas + Sem anuncios',premiumBtn:'Desbloquear',fixturesTitle:'CALENDARIO E RESULTADOS',fixturesAll:'Todos os jogos',fixturesMy:'Apenas meu time',noFixtures:'Nenhum jogo encontrado'},
  it:{appTitle:'Coppa del Mondo 2026',appSub:'USA - CANADA - MESSICO',nav:['Home','Gruppi','Calendario','Pronostici','Quiz','Giocatori','Sondaggi','Sim','Gioco','Fantasy','Predict'],countdown:'Conto alla rovescia',timeUnits:['Giorni','Ore','Min','Sec'],keyInfo:['Paesi ospitanti','Squadre','Partite','Durata'],keyVals:['3 nazioni','48 squadre','104 partite','11 giu-19 lug'],format:'Formato del torneo',formatLines:['12 gironi da 4 squadre','1a + 2a + 8 migliori 3e = 32 squadre','Fase a 32 > 16 > QF > SF > Finale','Apertura: Estadio Azteca, Messico','Finale: MetLife Stadium, New York'],groupsTitle:'48 SQUADRE - 12 GIRONI',hostLabel:'Sede',groupLabel:'Girone',myTeamLabel:'La Mia Squadra',pickTeam:'Scegli la tua squadra',pronoSub:'Chi arrivera in finale?',pronoWinner:'Campione del Mondo 2026',pronoFinal:'Finalista',pronoSemi:'Semifinalisti',pronoSave:'Salva',pronoSaved:'Salvato!',pronoReset:'Azzera',pronoChoose:'Scegli...',pronoMyPick:'La mia scelta',quizSub:'Metti alla prova le tue conoscenze!',quizScore:'Punteggio',quizNext:'Domanda successiva',quizFinish:'Vedi risultato',quizRestart:'Gioca ancora',quizPerfect:'Perfetto! Sei un esperto!',quizGood:'Molto bene!',quizAvg:'Niente male!',quizBad:'Continua a studiare!',starsSub:'Giocatori',pollTitle:'Sondaggi',pollTotal:'voti',didYouKnow:'Lo sapevi?',facts:["L Italia non e al Mondiale 2026 per la 3a volta consecutiva","L Azteca ospita il suo 3o Mondiale","Primo Mondiale con 48 squadre","Prima edizione co-organizzata da 3 paesi","104 partite contro 64 nel 2022","Nuove regole IFAB in vigore"],shareApp:'Condividi',shareCopied:'Link copiato!',premiumBanner:'Diventa PREMIUM - Pronostici + Statistiche + Senza pub',premiumBtn:'Sblocca',fixturesTitle:'CALENDARIO E RISULTATI',fixturesAll:'Tutte le partite',fixturesMy:'Solo la mia squadra',noFixtures:'Nessuna partita trovata'},
  de:{appTitle:'Weltmeisterschaft 2026',appSub:'USA - KANADA - MEXIKO',nav:['Start','Gruppen','Spielplan','Tipps','Quiz','Spieler','Umfragen','Sim','Spiel','Fantasy','Predict'],countdown:'Countdown',timeUnits:['Tage','Stunden','Min','Sek'],keyInfo:['Gastgeberlaender','Teams','Spiele','Dauer'],keyVals:['3 Nationen','48 Teams','104 Spiele','11. Jun-19. Jul'],format:'Turnierformat',formatLines:['12 Gruppen mit je 4 Teams','1. + 2. + 8 beste 3. = 32 Teams','Runde der 32 > 16 > VF > HF > Finale','Eroeffnung: Estadio Azteca, Mexiko','Finale: MetLife Stadium, New York'],groupsTitle:'48 TEAMS - 12 GRUPPEN',hostLabel:'Gastgeber',groupLabel:'Gruppe',myTeamLabel:'Mein Team',pickTeam:'Mein Team auswaehlen',pronoSub:'Wer kommt ins Finale?',pronoWinner:'Weltmeister 2026',pronoFinal:'Finalist',pronoSemi:'Halbfinalisten',pronoSave:'Speichern',pronoSaved:'Gespeichert!',pronoReset:'Zuruecksetzen',pronoChoose:'Auswaehlen...',pronoMyPick:'Meine Wahl',quizSub:'Teste dein Wissen!',quizScore:'Punkte',quizNext:'Naechste Frage',quizFinish:'Ergebnis sehen',quizRestart:'Nochmal spielen',quizPerfect:'Perfekt! Du bist ein Experte!',quizGood:'Sehr gut!',quizAvg:'Nicht schlecht!',quizBad:'Weiter lernen!',starsSub:'Spieler',pollTitle:'Umfragen',pollTotal:'Stimmen',didYouKnow:'Wusstest du?',facts:['Italien verpasst die WM 2026 zum 3. Mal in Folge','Das Azteca beherbergt seine 3. WM','Erste WM mit 48 Teams','Erste WM von 3 Laendern gemeinsam ausgerichtet','104 Spiele gegen 64 in 2022','Neue IFAB-Regeln in Kraft'],shareApp:'Teilen',shareCopied:'Link kopiert!',premiumBanner:'PREMIUM werden - Tipps + Statistiken + Werbefrei',premiumBtn:'Freischalten',fixturesTitle:'SPIELPLAN & ERGEBNISSE',fixturesAll:'Alle Spiele',fixturesMy:'Nur mein Team',noFixtures:'Keine Spiele gefunden'}
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
    {q:'Who won the World Cup in 1998?',opts:['Brazil','France','Italy','Germany'],a:1,pts:5,cat:'Winners'},
    {q:'Who scored the Golden Goal in the 1998 WC final?',opts:['Zidane','Petit','Desailly','Henry'],a:1,pts:5,cat:'History'},
    {q:'Which country hosted the 2006 World Cup?',opts:['France','Spain','Italy','Germany'],a:3,pts:5,cat:'Hosts'},
    {q:'Who won the 2006 World Cup?',opts:['France','Germany','Italy','Portugal'],a:2,pts:5,cat:'Winners'},
    {q:'Which country hosted the 2002 World Cup?',opts:['Japan only','South Korea only','Japan & South Korea','China'],a:2,pts:5,cat:'Hosts'},
    {q:'Who won the Golden Boot at the 2018 World Cup?',opts:['Griezmann','Lukaku','Mbappe','Kane'],a:3,pts:5,cat:'Awards'},
    {q:'In which city is the 2026 WC opening match?',opts:['New York','Los Angeles','Miami','Dallas'],a:3,pts:5,cat:'2026'},
    {q:'How many groups in the 2026 World Cup?',opts:['8','10','12','16'],a:2,pts:5,cat:'2026'},
    {q:'Who won the first ever World Cup Golden Boot?',opts:['Pele','Just Fontaine','Eusebio','Gerd Muller'],a:1,pts:5,cat:'Awards'},
    {q:'Which country has never won the World Cup?',opts:['England','Argentina','Germany','Netherlands'],a:3,pts:5,cat:'General'},
    {q:'What color jersey does Brazil wear at home?',opts:['Blue','Red','White','Yellow'],a:3,pts:5,cat:'General'},
    {q:'Who did France beat in the 2018 WC final?',opts:['Belgium','England','Croatia','Argentina'],a:2,pts:5,cat:'History'},
    {q:'How many teams qualified from Europe for WC 2026?',opts:['13','14','16','18'],a:2,pts:5,cat:'2026'}
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
    {q:'First WC to use goal-line technology?',opts:['South Africa 2010','Brazil 2014','Russia 2018','Qatar 2022'],a:1,pts:10,cat:'History'},
    {q:'Who scored the Panenka penalty in the 1976 Euros — a style later used at WCs?',opts:['Panenka','Platini','Zidane','Beckenbauer'],a:0,pts:10,cat:'Legends'},
    {q:'Which nation eliminated France in 2002 group stage?',opts:['Senegal','South Korea','Denmark','Turkey'],a:2,pts:10,cat:'History'},
    {q:'Who was top scorer at WC 1994 in USA?',opts:['Romario','Stoichkov','Salenko','Bebeto'],a:1,pts:10,cat:'Records'},
    {q:'Country that has played in every single World Cup?',opts:['Germany','Italy','Argentina','Brazil'],a:3,pts:10,cat:'Records'},
    {q:'Which goalkeeper saved penalties in 2022 WC shootout vs France?',opts:['Livakovic','Martinez','Lloris','Donnarumma'],a:1,pts:10,cat:'History'},
    {q:'Who scored the goal that eliminated defending champions Germany in 2018 group stage?',opts:['Son','Ju Se-jong','Kim Young-gwon','Hwang Hee-chan'],a:2,pts:10,cat:'History'},
    {q:'First African team to reach a WC semi-final?',opts:['Nigeria','Cameroon','Senegal','Morocco'],a:3,pts:10,cat:'History'},
    {q:'How many penalties did Argentina score in 2022 WC final shootout?',opts:['3','4','5','6'],a:1,pts:10,cat:'History'},
    {q:'Who won the Golden Glove at the 2022 WC?',opts:['Lloris','Bono','Livakovic','Martinez'],a:3,pts:10,cat:'Awards'},
    {q:'What was the score after 90 mins in the 2022 WC final?',opts:['2-0','3-0','3-2','2-2'],a:3,pts:10,cat:'History'},
    {q:'Which WC saw the introduction of VAR?',opts:['Brazil 2014','Russia 2018','Qatar 2022','Germany 2006'],a:1,pts:10,cat:'History'},
    {q:'Most goals scored by a single team in one WC (2022)?',opts:['Portugal','England','France','Spain'],a:0,pts:10,cat:'Records'}
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
    {q:'Which referee disallowed Germanys goal in the 2010 WC?',opts:['Webb','Larrionda','Busacca','De Bleeckere'],a:1,pts:20,cat:'History'},
    {q:'In 1994 WC final, who missed the penalty to give Brazil the title?',opts:['Baggio','Maldini','Albertini','Donadoni'],a:0,pts:20,cat:'History'},
    {q:'Which country scored first but lost 6-1 in WC 1954?',opts:['West Germany','Austria','Hungary','Yugoslavia'],a:2,pts:20,cat:'History'},
    {q:'Who is the only player to score for and against in a WC final?',opts:['Zidane','Mbappe','Pirlo','Beckenbauer'],a:0,pts:20,cat:'Records'},
    {q:'What was Mbappe age when he scored in the 2018 WC final?',opts:['17','18','19','20'],a:2,pts:20,cat:'Legends'},
    {q:'First WC to feature extra time AND penalty shootout?',opts:['1974','1978','1982','1986'],a:2,pts:20,cat:'History'},
    {q:'Which country scored the most own goals in WC history?',opts:['USA','England','France','Germany'],a:1,pts:20,cat:'Records'},
    {q:'WC 1950 final round — which match decided the champion?',opts:['Uruguay vs Brazil','Spain vs Brazil','Sweden vs Uruguay','Spain vs Sweden'],a:0,pts:20,cat:'History'},
    {q:'Who was the youngest player to score at a World Cup (17y 1m)?',opts:['Pele','Coman','Yamal','Mbappe'],a:0,pts:20,cat:'Records'},
    {q:'Which WC mascot was a chili pepper?',opts:['Pique USA 1994','Zakumi SA 2010','Fuleco Brazil 2014','Naranjito Spain 1982'],a:0,pts:20,cat:'Mascots'},
    {q:'Longest penalty shootout in WC history (how many kicks)?',opts:['14','16','18','20'],a:2,pts:20,cat:'Records'},
    {q:'First player ever sent off twice in World Cup history?',opts:['Rigobert Song','Zinedine Zidane','Carlos Caszely','Batista'],a:0,pts:20,cat:'Records'},
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

var STRIPE_EUR = 'https://buy.stripe.com/8x2dR9e9f6TDbYD297cjS02';
var STRIPE_GBP = 'https://buy.stripe.com/bJeeVdaX3di1bYD3dbcjS03';
function getPrice(lang){return lang==='en'?'2.49 GBP':'2,99 EUR';}
function getStripeLink(lang){return lang==='en'?STRIPE_GBP:STRIPE_EUR;}


var STARS = [
  {name:'Kylian Mbappe',role:'LW',flag:'🇫🇷',club:'Real Madrid',pos:'FW',age:26,stat:'47 intl goals',rating:97,pac:98,sho:92,pas:87,dri:97,def_:49,phy:75},
  {name:'Ousmane Dembele',role:'RW',flag:'🇫🇷',club:'PSG',pos:'FW',age:28,stat:'France WC 2026',rating:87,pac:95,sho:82,pas:78,dri:90,def_:38,phy:68},
  {name:'Julian Alvarez',role:'CF',flag:'🇦🇷',club:'Atletico Madrid',pos:'FW',age:25,stat:'WC 2022 champion',rating:87,pac:84,sho:86,pas:80,dri:84,def_:50,phy:76},
  {name:'Joshua Kimmich',flag:'🇩🇪',club:'Bayern Munich',pos:'MF',age:31,stat:'Germany captain 2026',rating:88,pac:78,sho:70,pas:90,dri:82,def_:80,phy:76},
  {name:'Dani Olmo',flag:'🇪🇸',club:'FC Barcelona',pos:'MF',age:27,stat:'Euro 2024 champion',rating:86,pac:80,sho:76,pas:86,dri:84,def_:65,phy:72},
  {name:'Son Heung-min',role:'LW',flag:'🇰🇷',club:'LAFC',pos:'FW',age:34,stat:'South Korea captain',rating:86,pac:88,sho:84,pas:78,dri:86,def_:42,phy:70},
  {name:'Lee Kang-in',flag:'🇰🇷',club:'PSG',pos:'MF',age:24,stat:'South Korea star',rating:85,pac:78,sho:74,pas:86,dri:84,def_:56,phy:68},
  {name:'Marcus Rashford',role:'LW',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'FC Barcelona',pos:'FW',age:28,stat:'England WC 2026',rating:85,pac:90,sho:82,pas:76,dri:87,def_:38,phy:74},
  {name:'Bradley Barcola',role:'LW',flag:'🇫🇷',club:'PSG',pos:'FW',age:23,stat:'France WC 2026',rating:84,pac:93,sho:78,pas:74,dri:86,def_:36,phy:66},
  {name:'Gabriel Magalhaes',flag:'🇧🇷',club:'Arsenal',pos:'DF',age:28,stat:'Brazil WC 2026',rating:85,pac:77,sho:48,pas:72,dri:62,def_:87,phy:82},
  {name:'Casemiro',flag:'🇧🇷',club:'Man. Utd',pos:'MF',age:34,stat:'5x UCL winner',rating:84,pac:72,sho:65,pas:80,dri:72,def_:85,phy:85},
  {name:'Matheus Cunha',role:'CF',flag:'🇧🇷',club:'Man. Utd',pos:'FW',age:26,stat:'Brazil WC 2026',rating:84,pac:84,sho:80,pas:76,dri:83,def_:42,phy:72},
  {name:'Anthony Gordon',role:'LW',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Newcastle',pos:'FW',age:24,stat:'England WC 2026',rating:83,pac:88,sho:76,pas:74,dri:84,def_:40,phy:68},
  {name:'Erling Haaland',role:'CF',flag:'🇳🇴',club:'Man. City',pos:'FW',age:24,stat:'44 intl goals',rating:95,pac:92,sho:96,pas:83,dri:90,def_:50,phy:77},
  {name:'Vinicius Jr.',flag:'🇧🇷',club:'Real Madrid',pos:'FW',age:24,stat:'Ballon dOr nominee 2024',rating:94,pac:92,sho:94,pas:84,dri:90,def_:48,phy:74},
  {name:'Lionel Messi',flag:'🇦🇷',club:'Inter Miami',pos:'FW',age:37,stat:'8x Ballon dOr',rating:94,pac:92,sho:94,pas:84,dri:90,def_:48,phy:74},
  {name:'Lamine Yamal',role:'RW',flag:'🇪🇸',club:'FC Barcelona',pos:'FW',age:18,stat:'Euro 2024 champion',rating:94,pac:94,sho:88,pas:83,dri:93,def_:45,phy:70},
  {name:'Rodri',flag:'🇪🇸',club:'Man. City',pos:'MF',age:28,stat:'Ballon dOr 2024',rating:93,pac:85,sho:78,pas:94,dri:87,def_:73,phy:79},
  {name:'Jude Bellingham',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Real Madrid',pos:'MF',age:21,stat:'Best player Euro 2024',rating:93,pac:85,sho:78,pas:94,dri:87,def_:73,phy:79},
  {name:'Pedri',flag:'🇪🇸',club:'FC Barcelona',pos:'MF',age:22,stat:'Euro 2024 champion',rating:92,pac:84,sho:77,pas:93,dri:86,def_:72,phy:78},
  {name:'Michael Olise',role:'RW',flag:'🇫🇷',club:'Bayern Munich',pos:'FW',age:24,stat:'15G 19A Bundesliga 2026',rating:92,pac:90,sho:87,pas:81,dri:92,def_:44,phy:67},
  {name:'Jamal Musiala',role:'LW',flag:'🇩🇪',club:'Bayern Munich',pos:'FW',age:22,stat:'Germany Bundesliga star',rating:92,pac:88,sho:84,pas:86,dri:92,def_:46,phy:70},
  {name:'Victor Gyokeres',role:'CF',flag:'🇸🇪',club:'Arsenal',pos:'FW',age:27,stat:'Sweden WC 2026 hero',rating:92,pac:86,sho:94,pas:78,dri:84,def_:48,phy:82},
  {name:'Kevin De Bruyne',flag:'🇧🇪',club:'Napoli',pos:'MF',age:34,stat:'PL best midfielder',rating:91,pac:83,sho:76,pas:92,dri:85,def_:71,phy:77},
  {name:'Harry Kane',role:'CF',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Bayern Munich',pos:'FW',age:31,stat:'England top scorer',rating:91,pac:88,sho:92,pas:79,dri:86,def_:46,phy:73},
  {name:'Cristiano Ronaldo',role:'CF',flag:'🇵🇹',club:'Al Nassr',pos:'FW',age:40,stat:'915 career goals',rating:91,pac:88,sho:92,pas:79,dri:86,def_:46,phy:73},
  {name:'Alexander Isak',role:'CF',flag:'🇸🇪',club:'Liverpool',pos:'FW',age:26,stat:'Sweden top scorer',rating:90,pac:92,sho:88,pas:76,dri:87,def_:44,phy:74},
  {name:'Emiliano Martinez',flag:'🇦🇷',club:'Aston Villa',pos:'GK',age:32,stat:'WC 2022 Golden Glove',rating:89,pac:64,sho:40,pas:69,dri:40,def_:89,phy:74},
  {name:'Virgil van Dijk',flag:'🇳🇱',club:'Liverpool',pos:'DF',age:33,stat:'Best defender 2019',rating:89,pac:84,sho:54,pas:77,dri:69,def_:91,phy:81},
  {name:'Bukayo Saka',role:'LW',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Arsenal',pos:'FW',age:23,stat:'PFA Young Player 2024',rating:89,pac:90,sho:84,pas:79,dri:89,def_:41,phy:67},
  {name:'Alisson Becker',flag:'🇧🇷',club:'Liverpool',pos:'GK',age:32,stat:'Best GK 2019',rating:88,pac:63,sho:40,pas:68,dri:40,def_:88,phy:73},
  {name:'Thibaut Courtois',flag:'🇧🇪',club:'Real Madrid',pos:'GK',age:32,stat:'UCL Best GK 2022',rating:88,pac:63,sho:40,pas:68,dri:40,def_:88,phy:73},
  {name:'Ruben Dias',flag:'🇵🇹',club:'Man. City',pos:'DF',age:27,stat:'PL Best defender 2021',rating:88,pac:83,sho:53,pas:76,dri:68,def_:90,phy:80},
  {name:'Gavi',flag:'🇪🇸',club:'FC Barcelona',pos:'MF',age:20,stat:'Euro 2024 champion',rating:88,pac:80,sho:73,pas:89,dri:82,def_:68,phy:74},
  {name:'Federico Valverde',flag:'🇺🇾',club:'Real Madrid',pos:'MF',age:25,stat:'Copa America 2024',rating:88,pac:80,sho:73,pas:89,dri:82,def_:68,phy:74},
  {name:'Martin Odegaard',flag:'🇳🇴',club:'Arsenal',pos:'MF',age:26,stat:'Arsenal captain',rating:88,pac:80,sho:73,pas:89,dri:82,def_:68,phy:74},
  {name:'Mohamed Salah',role:'RW',flag:'🇪🇬',club:'Liverpool',pos:'FW',age:32,stat:'Egypt legend',rating:88,pac:89,sho:83,pas:78,dri:88,def_:40,phy:66},
  {name:'Luis Diaz',role:'LW',flag:'🇨🇴',club:'Bayern Munich',pos:'FW',age:28,stat:'Colombia Bayern star',rating:88,pac:90,sho:80,pas:76,dri:88,def_:44,phy:70},
  {name:'Mike Maignan',flag:'🇫🇷',club:'AC Milan',pos:'GK',age:29,stat:'Euro 2024 GK',rating:87,pac:62,sho:40,pas:67,dri:40,def_:87,phy:72},
  {name:'William Saliba',flag:'🇫🇷',club:'Arsenal',pos:'DF',age:23,stat:'Best young defender 2024',rating:87,pac:82,sho:52,pas:75,dri:67,def_:89,phy:79},
  {name:'Josko Gvardiol',flag:'🇭🇷',club:'Man. City',pos:'DF',age:22,stat:'WC 2022 finalist',rating:87,pac:82,sho:52,pas:75,dri:67,def_:89,phy:79},
  {name:'Achraf Hakimi',flag:'🇲🇦',club:'PSG',pos:'DF',age:26,stat:'African best RB 2023',rating:87,pac:82,sho:52,pas:75,dri:67,def_:89,phy:79},
  {name:'Florian Wirtz',flag:'🇩🇪',club:'Liverpool',pos:'MF',age:23,stat:'Bundesliga champion 2024',rating:87,pac:79,sho:72,pas:88,dri:81,def_:67,phy:73},
  {name:'Declan Rice',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Arsenal',pos:'MF',age:25,stat:'PL Best midfielder 2024',rating:87,pac:79,sho:72,pas:88,dri:81,def_:67,phy:73},
  {name:'Raphinha',role:'LW',flag:'🇧🇷',club:'FC Barcelona',pos:'FW',age:28,stat:'Champions League 2025',rating:87,pac:88,sho:82,pas:77,dri:87,def_:40,phy:65},
  {name:'Nico Williams',role:'RW',flag:'🇪🇸',club:'Athletic Bilbao',pos:'FW',age:21,stat:'Euro 2024 champion',rating:87,pac:88,sho:82,pas:77,dri:87,def_:40,phy:65},
  {name:'Lautaro Martinez',role:'CF',flag:'🇦🇷',club:'Inter Milan',pos:'FW',age:26,stat:'WC 2022 champion',rating:87,pac:84,sho:88,pas:75,dri:82,def_:42,phy:69},
  {name:'Marcus Thuram',role:'CF',flag:'🇫🇷',club:'Inter Milan',pos:'FW',age:26,stat:'Serie A champion 2024',rating:87,pac:84,sho:88,pas:75,dri:82,def_:42,phy:69},
  {name:'Omar Marmoush',role:'CF',flag:'🇪🇬',club:'Man. City',pos:'FW',age:26,stat:'Egypt Man City star',rating:87,pac:86,sho:84,pas:80,dri:84,def_:44,phy:70},
  {name:'Diogo Costa',flag:'🇵🇹',club:'Porto',pos:'GK',age:25,stat:'Best GK UCL 2023',rating:86,pac:61,sho:40,pas:66,dri:40,def_:86,phy:71},
  {name:'Gregor Kobel',flag:'🇨🇭',club:'Borussia Dortmund',pos:'GK',age:28,stat:'Switzerland No.1 UCL',rating:86,pac:60,sho:40,pas:66,dri:40,def_:86,phy:71},
  {name:'Jules Kounde',flag:'🇫🇷',club:'FC Barcelona',pos:'DF',age:25,stat:'Euro 2024 finalist',rating:86,pac:81,sho:51,pas:74,dri:66,def_:88,phy:78},
  {name:'Theo Hernandez',flag:'🇫🇷',club:'Al-Hilal',pos:'DF',age:28,stat:'Serie A champion',rating:86,pac:81,sho:51,pas:74,dri:66,def_:88,phy:78},
  {name:'Marquinhos',flag:'🇧🇷',club:'PSG',pos:'DF',age:30,stat:'UCL finalist 2020',rating:86,pac:81,sho:51,pas:74,dri:66,def_:88,phy:78},
  {name:'Bruno Fernandes',flag:'🇵🇹',club:'Man. Utd',pos:'MF',age:29,stat:'Man Utd captain',rating:86,pac:78,sho:71,pas:87,dri:80,def_:66,phy:72},
  {name:'Aurelien Tchouameni',flag:'🇫🇷',club:'Real Madrid',pos:'MF',age:24,stat:'WC 2022 finalist',rating:86,pac:78,sho:71,pas:87,dri:80,def_:66,phy:72},
  {name:'Frenkie de Jong',flag:'🇳🇱',club:'FC Barcelona',pos:'MF',age:27,stat:'UCL semi 2019',rating:86,pac:78,sho:71,pas:87,dri:80,def_:66,phy:72},
  {name:'Bernardo Silva',flag:'🇵🇹',club:'Man. City',pos:'MF',age:29,stat:'PL champion 2024',rating:86,pac:78,sho:71,pas:87,dri:80,def_:66,phy:72},
  {name:'David Raya',flag:'🇪🇸',club:'Arsenal',pos:'GK',age:29,stat:'PL Golden Glove 2024',rating:85,pac:60,sho:40,pas:65,dri:40,def_:85,phy:70},
  {name:'Manuel Neuer',flag:'🇩🇪',club:'Bayern Munich',pos:'GK',age:39,stat:'WC 2014 winner',rating:85,pac:60,sho:40,pas:65,dri:40,def_:85,phy:70},
  {name:'Antonio Rudiger',flag:'🇩🇪',club:'Real Madrid',pos:'DF',age:31,stat:'UCL winner 2022',rating:85,pac:80,sho:50,pas:73,dri:65,def_:87,phy:77},
  {name:'Dayot Upamecano',flag:'🇫🇷',club:'Bayern Munich',pos:'DF',age:25,stat:'Euro 2024 finalist',rating:85,pac:80,sho:50,pas:73,dri:65,def_:87,phy:77},
  {name:'Min-jae Kim',flag:'🇰🇷',club:'Bayern Munich',pos:'DF',age:27,stat:'Best Asian defender',rating:85,pac:80,sho:50,pas:73,dri:65,def_:87,phy:77},
  {name:'Cristian Romero',flag:'🇦🇷',club:'Tottenham',pos:'DF',age:26,stat:'WC 2022 champion',rating:85,pac:80,sho:50,pas:73,dri:65,def_:87,phy:77},
  {name:'Ibrahima Konate',flag:'🇫🇷',club:'Liverpool',pos:'DF',age:25,stat:'UCL winner 2022',rating:85,pac:80,sho:50,pas:73,dri:65,def_:87,phy:77},
  {name:'Jurrien Timber',flag:'🇳🇱',club:'Arsenal',pos:'DF',age:24,stat:'Netherlands versatile DF',rating:85,pac:82,sho:50,pas:74,dri:68,def_:86,phy:76},
  {name:'Alexis Mac Allister',flag:'🇦🇷',club:'Liverpool',pos:'MF',age:25,stat:'WC 2022 champion',rating:85,pac:77,sho:70,pas:86,dri:79,def_:65,phy:71},
  {name:'Enzo Fernandez',flag:'🇦🇷',club:'Chelsea',pos:'MF',age:24,stat:'WC 2022 best young',rating:85,pac:77,sho:70,pas:86,dri:79,def_:65,phy:71},
  {name:'Vitinha',flag:'🇵🇹',club:'PSG',pos:'MF',age:24,stat:'Portugal Euro 2024',rating:85,pac:77,sho:70,pas:86,dri:79,def_:65,phy:71},
  {name:'Bruno Guimaraes',flag:'🇧🇷',club:'Newcastle',pos:'MF',age:26,stat:'Brazil WC 2026',rating:85,pac:77,sho:70,pas:86,dri:79,def_:65,phy:71},
  {name:'Teun Koopmeiners',flag:'🇳🇱',club:'Juventus',pos:'MF',age:26,stat:'Netherlands Euro 2024',rating:85,pac:77,sho:70,pas:86,dri:79,def_:65,phy:71},
  {name:'N Golo Kante',flag:'🇫🇷',club:'Fenerbahce',pos:'MF',age:33,stat:'WC 2018 winner',rating:85,pac:77,sho:70,pas:86,dri:79,def_:65,phy:71},
  {name:'Eberechi Eze',role:'RW',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Arsenal',pos:'MF',age:27,stat:'England Euro 2024',rating:85,pac:84,sho:78,pas:80,dri:86,def_:56,phy:68},
  {name:'Cody Gakpo',role:'LW',flag:'🇳🇱',club:'Liverpool',pos:'FW',age:25,stat:'WC 2022 top scorer NL',rating:85,pac:86,sho:80,pas:75,dri:85,def_:40,phy:63},
  {name:'Neymar Jr',role:'CF',flag:'🇧🇷',club:'Santos FC',pos:'FW',age:33,stat:'Brazil record scorer',rating:85,pac:82,sho:86,pas:73,dri:80,def_:40,phy:67},
  {name:'Pedro Neto',role:'RW',flag:'🇵🇹',club:'Chelsea',pos:'FW',age:25,stat:'Portugal pacey winger',rating:85,pac:92,sho:78,pas:76,dri:86,def_:40,phy:64},
  {name:'Jordan Pickford',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Everton',pos:'GK',age:32,stat:'England No.1',rating:84,pac:59,sho:40,pas:64,dri:40,def_:84,phy:69},
  {name:'Alphonso Davies',flag:'🇨🇦',club:'Bayern Munich',pos:'DF',age:24,stat:'Canada WC 2026 host',rating:84,pac:79,sho:49,pas:72,dri:64,def_:86,phy:76},
  {name:'Nuno Mendes',flag:'🇵🇹',club:'PSG',pos:'DF',age:22,stat:'Euro 2024 Portugal',rating:84,pac:79,sho:49,pas:72,dri:64,def_:86,phy:76},
  {name:'Lisandro Martinez',flag:'🇦🇷',club:'Man. Utd',pos:'DF',age:26,stat:'WC 2022 champion',rating:84,pac:79,sho:49,pas:72,dri:64,def_:86,phy:76},
  {name:'Marc Cucurella',flag:'🇪🇸',club:'Chelsea',pos:'DF',age:25,stat:'Euro 2024 champion',rating:84,pac:79,sho:49,pas:72,dri:64,def_:86,phy:76},
  {name:'Andrew Robertson',flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',club:'Liverpool',pos:'DF',age:31,stat:'UCL winner 2019',rating:84,pac:79,sho:49,pas:72,dri:64,def_:86,phy:76},
  {name:'Reece James',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Chelsea',pos:'DF',age:25,stat:'Chelsea captain',rating:84,pac:79,sho:49,pas:72,dri:64,def_:86,phy:76},
  {name:'Gleison Bremer',flag:'🇧🇷',club:'Juventus',pos:'DF',age:27,stat:'Serie A best defender',rating:84,pac:79,sho:49,pas:72,dri:64,def_:86,phy:76},
  {name:'Goncalo Inacio',flag:'🇵🇹',club:'Sporting CP',pos:'DF',age:24,stat:'Portugal rising CB',rating:84,pac:78,sho:46,pas:72,dri:64,def_:86,phy:76},
  {name:'Granit Xhaka',flag:'🇨🇭',club:'Sunderland',pos:'MF',age:33,stat:'Bundesliga champion 2024',rating:84,pac:76,sho:69,pas:85,dri:78,def_:64,phy:70},
  {name:'Luka Modric',flag:'🇭🇷',club:'AC Milan',pos:'MF',age:40,stat:'WC 2022 finalist',rating:84,pac:76,sho:69,pas:85,dri:78,def_:64,phy:70},
  {name:'Exequiel Palacios',flag:'🇦🇷',club:'Bayer Leverkusen',pos:'MF',age:26,stat:'WC 2022 champion',rating:84,pac:76,sho:69,pas:85,dri:78,def_:64,phy:70},
  {name:'Ryan Gravenberch',flag:'🇳🇱',club:'Liverpool',pos:'MF',age:22,stat:'PL best midfielder 2024',rating:84,pac:76,sho:69,pas:85,dri:78,def_:64,phy:70},
  {name:'Kai Havertz',flag:'🇩🇪',club:'Arsenal',pos:'MF',age:25,stat:'UCL winner 2021',rating:84,pac:76,sho:69,pas:85,dri:78,def_:64,phy:70},
  {name:'Tijjani Reijnders',flag:'🇳🇱',club:'AC Milan',pos:'MF',age:26,stat:'Serie A best MF 2024',rating:84,pac:76,sho:69,pas:85,dri:78,def_:64,phy:70},
  {name:'Joao Neves',flag:'🇵🇹',club:'PSG',pos:'MF',age:20,stat:'Portugal golden boy',rating:84,pac:76,sho:69,pas:85,dri:78,def_:64,phy:70},
  {name:'Kobbie Mainoo',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Man. Utd',pos:'MF',age:20,stat:'England youngest UCL',rating:84,pac:76,sho:66,pas:82,dri:80,def_:68,phy:72},
  {name:'Romelu Lukaku',role:'CF',flag:'🇧🇪',club:'Napoli',pos:'FW',age:31,stat:'Belgium top scorer',rating:84,pac:81,sho:85,pas:72,dri:79,def_:40,phy:66},
  {name:'Jonathan David',role:'CF',flag:'🇨🇦',club:'Juventus',pos:'FW',age:25,stat:'Ligue 1 top scorer 2024',rating:84,pac:81,sho:85,pas:72,dri:79,def_:40,phy:66},
  {name:'Sadio Mane',role:'LW',flag:'🇸🇳',club:'Al Nassr',pos:'FW',age:32,stat:'AFCON winner 2022',rating:84,pac:85,sho:79,pas:74,dri:84,def_:40,phy:62},
  {name:'Darwin Nunez',role:'CF',flag:'🇺🇾',club:'Liverpool',pos:'FW',age:25,stat:'Copa America 2024',rating:84,pac:81,sho:85,pas:72,dri:79,def_:40,phy:66},
  {name:'Gabriel Martinelli',role:'LW',flag:'🇧🇷',club:'Arsenal',pos:'FW',age:23,stat:'PL top scorer 2024',rating:84,pac:85,sho:79,pas:74,dri:84,def_:40,phy:62},
  {name:'Ollie Watkins',role:'CF',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Aston Villa',pos:'FW',age:29,stat:'PL top scorer 2024',rating:84,pac:81,sho:85,pas:72,dri:79,def_:40,phy:66},
  {name:'Serhou Guirassy',role:'CF',flag:'🇬🇳',club:'Borussia Dortmund',pos:'FW',age:28,stat:'Bundesliga top scorer 2024',rating:84,pac:81,sho:85,pas:72,dri:79,def_:40,phy:66},
  {name:'Riyad Mahrez',role:'LW',flag:'🇩🇿',club:'Al Ahli',pos:'FW',age:33,stat:'Algeria captain',rating:84,pac:85,sho:79,pas:74,dri:84,def_:40,phy:62},
  {name:'Desire Doue',role:'LW',flag:'🇫🇷',club:'PSG',pos:'FW',age:20,stat:'France espoir 2024',rating:84,pac:85,sho:79,pas:74,dri:84,def_:40,phy:62},
  {name:'Rayan Cherki',role:'LW',flag:'🇫🇷',club:'Man. City',pos:'FW',age:22,stat:'Man City / France 2025',rating:84,pac:85,sho:79,pas:74,dri:84,def_:40,phy:62},
  {name:'Joao Felix',role:'LW',flag:'🇵🇹',club:'Al-Nassr',pos:'FW',age:26,stat:'Portugal flair player',rating:84,pac:84,sho:79,pas:78,dri:86,def_:38,phy:64},
  {name:'Unai Simon',flag:'🇪🇸',club:'Athletic Bilbao',pos:'GK',age:27,stat:'Euro 2024 champion',rating:83,pac:58,sho:40,pas:63,dri:40,def_:83,phy:68},
  {name:'Bono',flag:'🇲🇦',club:'Al-Hilal',pos:'GK',age:34,stat:'Morocco WC 2022 hero',rating:83,pac:58,sho:40,pas:63,dri:40,def_:83,phy:68},
  {name:'Pedro Porro',flag:'🇪🇸',club:'Tottenham',pos:'DF',age:25,stat:'Euro 2024 champion',rating:83,pac:78,sho:48,pas:71,dri:63,def_:85,phy:75},
  {name:'Pau Cubarsi',flag:'🇪🇸',club:'FC Barcelona',pos:'DF',age:17,stat:'Euro 2024 youngest DF',rating:83,pac:78,sho:48,pas:71,dri:63,def_:85,phy:75},
  {name:'Ezri Konsa',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Aston Villa',pos:'DF',age:27,stat:'PL best defender 2024',rating:83,pac:78,sho:48,pas:71,dri:63,def_:85,phy:75},
  {name:'Micky van de Ven',flag:'🇳🇱',club:'Tottenham',pos:'DF',age:23,stat:'PL fastest player',rating:83,pac:78,sho:48,pas:71,dri:63,def_:85,phy:75},
  {name:'Jonathan Tah',flag:'🇩🇪',club:'Bayern Munich',pos:'DF',age:28,stat:'Germany Euro 2024',rating:83,pac:78,sho:48,pas:71,dri:63,def_:85,phy:75},
  {name:'Piero Hincapie',flag:'🇪🇨',club:'Bayer Leverkusen',pos:'DF',age:23,stat:'Bundesliga champion',rating:83,pac:78,sho:48,pas:71,dri:63,def_:85,phy:75},
  {name:'Ferdi Kadioglu',flag:'🇹🇷',club:'Brighton',pos:'DF',age:25,stat:'Turkey Euro 2024',rating:83,pac:78,sho:48,pas:71,dri:63,def_:85,phy:75},
  {name:'Danilo',flag:'🇧🇷',club:'Flamengo',pos:'DF',age:34,stat:'Brazil captain',rating:83,pac:78,sho:48,pas:71,dri:63,def_:85,phy:75},
  {name:'Warren Zaire-Emery',flag:'🇫🇷',club:'PSG',pos:'MF',age:18,stat:'Youngest PSG scorer ever',rating:83,pac:75,sho:68,pas:84,dri:77,def_:63,phy:69},
  {name:'Sofyan Amrabat',flag:'🇲🇦',club:'Real Betis',pos:'MF',age:29,stat:'WC 2022 best MF',rating:83,pac:75,sho:68,pas:84,dri:77,def_:63,phy:69},
  {name:'Youri Tielemans',flag:'🇧🇪',club:'Aston Villa',pos:'MF',age:27,stat:'Belgium Euro 2024',rating:83,pac:75,sho:68,pas:84,dri:77,def_:63,phy:69},
  {name:'Rodrigo De Paul',flag:'🇦🇷',club:'Inter Miami',pos:'MF',age:31,stat:'WC 2022 champion',rating:83,pac:75,sho:68,pas:84,dri:77,def_:63,phy:69},
  {name:'Thomas Partey',flag:'🇬🇭',club:'Arsenal',pos:'MF',age:31,stat:'Ghana captain',rating:83,pac:75,sho:68,pas:84,dri:77,def_:63,phy:69},
  {name:'Ruben Neves',flag:'🇵🇹',club:'Al Hilal',pos:'MF',age:27,stat:'Portugal squad',rating:83,pac:75,sho:68,pas:84,dri:77,def_:63,phy:69},
  {name:'Lamine Camara',flag:'🇸🇳',club:'Monaco',pos:'MF',age:21,stat:'Senegal golden boy',rating:83,pac:80,sho:68,pas:80,dri:82,def_:66,phy:74},
  {name:'Donyell Malen',role:'RW',flag:'🇳🇱',club:'Roma',pos:'FW',age:27,stat:'Bundesliga top scorer 2023',rating:83,pac:84,sho:78,pas:73,dri:83,def_:40,phy:61},
  {name:'Memphis Depay',role:'LW',flag:'🇳🇱',club:'Corinthians',pos:'FW',age:32,stat:'Dutch all-time top scorer',rating:83,pac:84,sho:78,pas:73,dri:83,def_:40,phy:61},
  {name:'Santiago Gimenez',role:'CF',flag:'🇲🇽',club:'AC Milan',pos:'FW',age:23,stat:'Mexico WC 2026 host',rating:83,pac:80,sho:84,pas:71,dri:78,def_:40,phy:65},
  {name:'Ferran Torres',role:'LW',flag:'🇪🇸',club:'FC Barcelona',pos:'FW',age:24,stat:'Euro 2024 champion',rating:83,pac:84,sho:78,pas:73,dri:83,def_:40,phy:61},
  {name:'Patrik Schick',role:'CF',flag:'🇨🇿',club:'Bayer Leverkusen',pos:'FW',age:29,stat:'Euro 2020 top scorer',rating:83,pac:80,sho:84,pas:71,dri:78,def_:40,phy:65},
  {name:'Endrick',role:'CF',flag:'🇧🇷',club:'Real Madrid',pos:'FW',age:19,stat:'Brazil youngest scorer',rating:83,pac:80,sho:84,pas:71,dri:78,def_:40,phy:65},
  {name:'Dean Henderson',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Crystal Palace',pos:'GK',age:27,stat:'England squad',rating:82,pac:57,sho:40,pas:62,dri:40,def_:82,phy:67},
  {name:'Rayan Ait-Nouri',flag:'🇩🇿',club:'Man. City',pos:'DF',age:24,stat:'Algeria No.1 LB',rating:82,pac:77,sho:47,pas:70,dri:62,def_:84,phy:74},
  {name:'Edmond Tapsoba',flag:'🇧🇫',club:'Bayer Leverkusen',pos:'DF',age:25,stat:'Bundesliga champion',rating:82,pac:77,sho:47,pas:70,dri:62,def_:84,phy:74},
  {name:'Malo Gusto',flag:'🇫🇷',club:'Chelsea',pos:'DF',age:22,stat:'France U21 champion',rating:82,pac:77,sho:47,pas:70,dri:62,def_:84,phy:74},
  {name:'Pervis Estupinan',flag:'🇪🇨',club:'Brighton',pos:'DF',age:26,stat:'Ecuador No.1 LB',rating:82,pac:77,sho:47,pas:70,dri:62,def_:84,phy:74},
  {name:'Leandro Paredes',flag:'🇦🇷',club:'Boca Juniors',pos:'MF',age:31,stat:'WC 2022 champion',rating:82,pac:74,sho:67,pas:83,dri:76,def_:62,phy:68},
  {name:'Ivan Toney',role:'CF',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Al-Ahli',pos:'FW',age:29,stat:'England squad 2024',rating:82,pac:79,sho:83,pas:70,dri:77,def_:40,phy:64},
  {name:'Breel Embolo',role:'CF',flag:'🇨🇭',club:'Rennes',pos:'FW',age:28,stat:'Switzerland captain',rating:82,pac:79,sho:83,pas:70,dri:77,def_:40,phy:64},
  {name:'Hwang Hee-chan',role:'RW',flag:'🇰🇷',club:'Wolves',pos:'FW',age:28,stat:'South Korea No.9',rating:82,pac:83,sho:77,pas:72,dri:82,def_:40,phy:60},
  {name:'Anthony Elanga',role:'LW',flag:'🇸🇪',club:'Newcastle',pos:'FW',age:24,stat:'Sweden winger WC 2026',rating:82,pac:90,sho:74,pas:72,dri:82,def_:40,phy:66},
  {name:'Antoine Semenyo',role:'RW',flag:'🇬🇭',club:'Bournemouth',pos:'FW',age:25,stat:'Ghana PL winger',rating:82,pac:88,sho:76,pas:70,dri:82,def_:38,phy:66},
  {name:'Altay Bayindir',flag:'🇹🇷',club:'Man. Utd',pos:'GK',age:26,stat:'Turkey Euro 2024',rating:81,pac:56,sho:40,pas:61,dri:40,def_:81,phy:66},
  {name:'Youcef Atal',flag:'🇩🇿',club:'Nice',pos:'DF',age:28,stat:'Algeria No.1 RB',rating:81,pac:76,sho:46,pas:69,dri:61,def_:83,phy:73},
  {name:'Hamari Traore',flag:'🇲🇱',club:'Rennes',pos:'DF',age:30,stat:'Mali captain',rating:81,pac:76,sho:46,pas:69,dri:61,def_:83,phy:73},
  {name:'Yusuf Yazici',flag:'🇹🇷',club:'Lille',pos:'MF',age:27,stat:'Turkey Euro 2024',rating:81,pac:73,sho:66,pas:82,dri:75,def_:61,phy:67},
  {name:'Che Adams',flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',club:'Torino',pos:'FW',age:28,stat:'Scotland top scorer',rating:81,pac:79,sho:81,pas:71,dri:77,def_:40,phy:61},
  {name:'Jonathan Burkardt',flag:'🇩🇪',club:'Mainz',pos:'FW',age:24,stat:'Germany U21',rating:81,pac:79,sho:81,pas:71,dri:77,def_:40,phy:61},
  {name:'Ibrahim Sehic',flag:'🇧🇦',club:'Rizespor',pos:'GK',age:33,stat:'Bosnia No.1',rating:80,pac:55,sho:40,pas:60,dri:40,def_:80,phy:65},
  {name:'Edin Dzeko',flag:'🇧🇦',club:'Fenerbahce',pos:'FW',age:38,stat:'Bosnia legend',rating:80,pac:78,sho:80,pas:70,dri:76,def_:40,phy:60},
  {name:'Loic Mbe Soh',flag:'🇨🇲',club:'Nottm Forest',pos:'FW',age:23,stat:'Cameroon rising star',rating:80,pac:78,sho:80,pas:70,dri:76,def_:40,phy:60},
];
STARS.sort(function(a,b){return b.rating-a.rating;});
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
  'France':      {atk:93,mid:91,def:90,ovr:92},
  'Argentina':   {atk:94,mid:89,def:85,ovr:91},
  'Spain':       {atk:89,mid:94,def:90,ovr:91},
  'Brazil':      {atk:92,mid:89,def:87,ovr:90},
  'England':     {atk:90,mid:88,def:89,ovr:90},
  'Germany':     {atk:87,mid:89,def:88,ovr:88},
  'Portugal':    {atk:89,mid:86,def:83,ovr:87},
  'Netherlands': {atk:86,mid:85,def:85,ovr:86},
  'Belgium':     {atk:85,mid:84,def:82,ovr:84},
  'Croatia':     {atk:81,mid:85,def:81,ovr:82},
  'Uruguay':     {atk:83,mid:80,def:83,ovr:82},
  'Denmark':     {atk:80,mid:82,def:83,ovr:82},
  'Japan':       {atk:79,mid:81,def:82,ovr:80},
  'Norway':      {atk:83,mid:78,def:77,ovr:80},
  'Colombia':    {atk:82,mid:80,def:77,ovr:80},
  'Switzerland': {atk:78,mid:80,def:83,ovr:80},
  'Sweden':      {atk:79,mid:79,def:79,ovr:79},
  'Morocco':     {atk:76,mid:79,def:84,ovr:79},
  'Mexico':      {atk:79,mid:79,def:78,ovr:79},
  'Senegal':     {atk:80,mid:78,def:79,ovr:79},
  'Serbia':      {atk:80,mid:77,def:76,ovr:78},
  'South Korea': {atk:78,mid:79,def:77,ovr:78},
  'USA':         {atk:78,mid:78,def:77,ovr:78},
  'Turkey':      {atk:79,mid:77,def:77,ovr:78},
  'Poland':      {atk:79,mid:75,def:76,ovr:77},
  'Austria':     {atk:77,mid:77,def:76,ovr:77},
  'Ivory Coast': {atk:78,mid:76,def:75,ovr:77},
  'Scotland':    {atk:76,mid:76,def:77,ovr:76},
  'Canada':      {atk:76,mid:75,def:76,ovr:76},
  'Wales':       {atk:75,mid:76,def:77,ovr:76},
  'Czechia':     {atk:75,mid:77,def:76,ovr:76},
  'Algeria':     {atk:76,mid:75,def:73,ovr:75},
  'Nigeria':     {atk:77,mid:74,def:73,ovr:75},
  'Slovakia':    {atk:73,mid:74,def:75,ovr:74},
  'Australia':   {atk:74,mid:74,def:74,ovr:74},
  'Chile':       {atk:75,mid:74,def:72,ovr:74},
  'Ghana':       {atk:75,mid:73,def:72,ovr:74},
  'Ecuador':     {atk:74,mid:74,def:74,ovr:74},
  'Slovenia':    {atk:73,mid:74,def:75,ovr:74},
  'Iceland':     {atk:71,mid:72,def:76,ovr:73},
  'Iran':        {atk:72,mid:73,def:74,ovr:73},
  'Egypt':       {atk:74,mid:72,def:72,ovr:73},
  'Cameroon':    {atk:74,mid:72,def:71,ovr:73},
  'Peru':        {atk:73,mid:73,def:72,ovr:73},
  'Romania':     {atk:72,mid:72,def:72,ovr:72},
  'Tunisia':     {atk:71,mid:72,def:73,ovr:72},
  'Saudi Arabia':{atk:71,mid:71,def:74,ovr:72},
  'Paraguay':    {atk:71,mid:72,def:73,ovr:72},
  'Finland':     {atk:70,mid:72,def:73,ovr:72},
  'Ireland':     {atk:69,mid:70,def:72,ovr:70},
  'Bosnia':      {atk:71,mid:70,def:68,ovr:70},
  'DR Congo':    {atk:71,mid:70,def:68,ovr:70},
  'Albania':     {atk:68,mid:68,def:68,ovr:68},
  'South Africa':{atk:67,mid:67,def:68,ovr:68},
  'Uzbekistan':  {atk:68,mid:68,def:67,ovr:68},
  'Cape Verde':  {atk:67,mid:66,def:64,ovr:66},
  'Iraq':        {atk:67,mid:67,def:66,ovr:67},
  'Bolivia':     {atk:64,mid:65,def:65,ovr:65},
  'Jordan':      {atk:64,mid:65,def:66,ovr:65},
  'Qatar':       {atk:64,mid:65,def:65,ovr:65},
  'New Zealand': {atk:64,mid:65,def:65,ovr:65},
  'Northern Ireland':{atk:64,mid:65,def:66,ovr:65},
  'Panama':      {atk:63,mid:64,def:65,ovr:64},
  'Kosovo':      {atk:63,mid:63,def:62,ovr:63},
  'Belarus':     {atk:61,mid:62,def:62,ovr:62},
  'Haiti':       {atk:60,mid:59,def:59,ovr:60},
  'Cuba':        {atk:57,mid:58,def:58,ovr:58},
  'Curacao':     {atk:63,mid:62,def:61,ovr:62}
};

function getStrength(team){return (TEAM_STRENGTH[team]||{ovr:70}).ovr||70;}

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
  var s4=useState(function(){
    try{
      if(new URLSearchParams(window.location.search).get('pro')==='1'){localStorage.setItem('wc2026_pro','1');return true;}
      return localStorage.getItem('wc2026_pro')==='1';
    }catch(e){return false;}
  });var premium=s4[0];var setPremium=s4[1];
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
  var sAg=useState(function(){try{return JSON.parse(localStorage.getItem('wc2026_agenda')||'[]');}catch(e){return [];}});var agenda=sAg[0];var setAgenda=sAg[1];
  var sAv=useState(false);var agendaOnly=sAv[0];var setAgendaOnly=sAv[1];
  var sT1=useState(function(){try{return localStorage.getItem('wc2026_theme')==='1';}catch(e){return false;}}());var themeActive=sT1[0];var setThemeActive=sT1[1];
  var G=premium&&themeActive&&myTeam&&TEAM_COLORS[myTeam&&myTeam.team]?TEAM_COLORS[myTeam.team]:'#d4af37';
  var BD='rgba('+(G==='#d4af37'?'212,175,55':''+parseInt(G.slice(1,3),16)+','+parseInt(G.slice(3,5),16)+','+parseInt(G.slice(5,7),16))+',0.22)';

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
  var sPT1=useState('menu');var penTourPhase=sPT1[0];var setPenTourPhase=sPT1[1];
  var sPT2=useState(0);var penTourRound=sPT2[0];var setPenTourRound=sPT2[1];
  var sPT3=useState('');var penTourName=sPT3[0];var setPenTourName=sPT3[1];
  var sPT4=useState(0);var penTourTotal=sPT4[0];var setPenTourTotal=sPT4[1];
  var sPT5=useState(function(){try{return JSON.parse(localStorage.getItem('wc2026_pen_lb')||'[]');}catch(ex){return[];}});var penLeaderboard=sPT5[0];var setPenLeaderboard=sPT5[1];
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
  var sP4=useState(null);var selectedStory=sP4[0];var setSelectedStory=sP4[1];
  var sP5=useState(null);var selectedCity=sP5[0];var setSelectedCity=sP5[1];
  var sP4=useState('');var favTeam=sP4[0];var setFavTeam=sP4[1];
  var sP5=useState(null);var compareTeam1=sP5[0];var setCompareTeam1=sP5[1];
  var sP6=useState(null);var compareTeam2=sP6[0];var setCompareTeam2=sP6[1];
  var sF1=useState([]);var fantasyTeam=sF1[0];var setFantasyTeam=sF1[1];
  var sF2=useState(null);var fantasyPos=sF2[0];var setFantasyPos=sF2[1];
  var sF3=useState(false);var fantasyDone=sF3[0];var setFantasyDone=sF3[1];
  var sF4=useState('4-3-3');var fantasyFormation=sF4[0];var setFantasyFormation=sF4[1];
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
  var MAX_AGENDA=premium?9999:5;
  function fid(f){return f.date+'|'+f.home+'|'+f.away;}
  function toggleAgenda(f){var id=fid(f);setAgenda(function(prev){var has=prev.indexOf(id)>=0;if(has)return prev.filter(function(x){return x!==id;});if(!premium&&prev.length>=MAX_AGENDA)return prev;var next=prev.concat([id]);try{localStorage.setItem('wc2026_agenda',JSON.stringify(next));}catch(e){}return next;});}
  var filteredFixtures=agendaOnly?FIXTURES.filter(function(f){return agenda.indexOf(fid(f))>=0;}):fixtureMyOnly?FIXTURES.filter(function(f){return f.home===activeTeam.team||f.away===activeTeam.team;}):FIXTURES;
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
        var diff=penTourPhase==='playing'?[0.6,0.7,0.8,0.88][penTourRound]||0.6:0.6;
        kDir=Math.random()<diff?maxDir:dirs[Math.floor(Math.random()*3)];
      } else {kDir=dirs[Math.floor(Math.random()*3)];}
      setKeeperDir(kDir);
      var centerSaveChance=penTourPhase==='playing'?[0.2,0.3,0.45,0.55][penTourRound]||0.2:0.2;
      var scored=dir!==kDir||(dir==='center'&&Math.random()>centerSaveChance);
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
  function startPenRound(){
    if(timerRef){clearInterval(timerRef);setTimerRef(null);}
    setGamePhase('shooting');setGameScore(0);setGameMiss(0);
    setShotDir(null);setKeeperDir(null);setShotResult(null);
    setShotsLeft(5);setShotHistory([]);setCombo(0);setTimer(3);
  }
  function savePenLeaderboard(name,total,round){
    var labels=['R16','QF','SF','FINAL'];
    var entry={name:name,score:total,round:labels[round]||'R16',trophy:round===3?'🏆':round===2?'🥇':round===1?'🥈':'🥉',date:new Date().toLocaleDateString()};
    setPenLeaderboard(function(lb){
      var newLb=lb.concat([entry]).sort(function(a,b){return b.score-a.score;}).slice(0,10);
      try{localStorage.setItem('wc2026_pen_lb',JSON.stringify(newLb));}catch(ex){}
      return newLb;
    });
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
        // Notification button
        e('button',{onClick:function(){
          if(window.OneSignal){
            window.OneSignal.push(function(){
              window.OneSignal.showNativePrompt();
            });
          }
        },style:{
          background:'linear-gradient(135deg,#1565c0,#42a5f5)',
          border:'none',borderRadius:10,padding:'10px 16px',
          fontSize:11,fontWeight:'bold',color:'#fff',
          cursor:'pointer',marginBottom:10,width:'100%',
          display:'flex',alignItems:'center',justifyContent:'center',gap:6
        }},
        '🔔 '+(lang==='fr'?'Activer les notifications':
                lang==='es'?'Activar notificaciones':
                lang==='pt'?'Ativar notificações':
                lang==='de'?'Benachrichtigungen aktivieren':
                lang==='it'?'Attiva notifiche':
                'Enable notifications')
        ),

        // Pick your team banner
        e('div',{style:{background:'linear-gradient(135deg,rgba(212,175,55,0.15),rgba(184,150,62,0.08))',border:'1px solid '+G,borderRadius:14,padding:'12px 16px',marginBottom:13,display:'flex',justifyContent:'space-between',alignItems:'center'}},
          e('div',null,
            e('div',{style:{fontSize:10,color:'#6a86a0',marginBottom:3}},t.myTeamLabel),
            e('div',{style:{fontSize:16,fontWeight:'bold'}},activeTeam.flag,' ',tn(activeTeam.team,lang),activeTeam.group&&e('span',{style:{fontSize:11,color:G,marginLeft:8}},(lang==='fr'?'Groupe ':lang==='es'?'Grupo ':lang==='pt'?'Grupo ':lang==='de'?'Gruppe ':lang==='it'?'Gruppo ':'Group '),activeTeam.group))
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
              return e('button',{key:team,onClick:function(){setMyTeam({team:team,group:grp,flag:FLAG_MAP[team]||'⚽',color:'rgba(212,175,55,0.2)'});setShowPickTeam(false);},style:{background:activeTeam.team===team?'rgba(212,175,55,0.2)':CB,border:'1px solid '+(activeTeam.team===team?G:BD),borderRadius:9,padding:'7px 10px',fontSize:11,color:'#eee8d5',cursor:'pointer',textAlign:'left'}},
                tn(team,lang),grp&&e('span',{style:{fontSize:9,color:G,marginLeft:4}},'('+grp+')')
              );
            })
          )
        ),

        // Theme equipe section
        e('div',{style:{background:'rgba(12,24,54,0.85)',border:'1px solid '+BD,borderRadius:14,padding:'12px 16px',marginBottom:13}},
          e('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}},
            e('div',{style:{fontSize:12,fontWeight:'bold',color:G}},'🎨 '+(lang==='fr'?'Thème Équipe':lang==='es'?'Tema Equipo':lang==='pt'?'Tema Time':lang==='it'?'Tema Squadra':lang==='de'?'Team-Thema':'Team Theme')),
            !premium&&e('div',{style:{background:'linear-gradient(135deg,#d4af37,#b8963e)',borderRadius:6,padding:'2px 8px',fontSize:9,fontWeight:'bold',color:'#0a0a1a'}},'PRO')
          ),
          premium?e('div',null,
            e('div',{style:{display:'flex',alignItems:'center',gap:10,marginBottom:10}},
              e('div',{style:{width:28,height:28,borderRadius:7,background:TEAM_COLORS[myTeam&&myTeam.team]||'#d4af37',border:'2px solid rgba(255,255,255,0.2)'}}),
              e('div',{style:{fontSize:11,color:'#ccc'}},
                myTeam?((lang==='fr'?'Couleur ':lang==='es'?'Color ':lang==='pt'?'Cor ':'Color ')+myTeam.flag+' '+(myTeam.team||'')):(lang==='fr'?'Choisis ton équipe ci-dessus':lang==='es'?'Elige tu equipo arriba':lang==='pt'?'Escolha sua equipe acima':'Pick your team above')
              )
            ),
            myTeam&&e('button',{
              onClick:function(){
                var next=!themeActive;
                setThemeActive(next);
                try{localStorage.setItem('wc2026_theme',next?'1':'0');}catch(e){}
              },
              style:{width:'100%',background:themeActive?'linear-gradient(135deg,'+G+',#b8963e)':'rgba(255,255,255,0.07)',border:'1px solid '+G,borderRadius:10,padding:'9px 0',fontSize:12,fontWeight:'bold',color:themeActive?'#0a0a1a':G,cursor:'pointer'}
            },themeActive?(lang==='fr'?'✓ Thème activé':lang==='es'?'✓ Tema activado':lang==='pt'?'✓ Tema ativo':'✓ Theme active'):(lang==='fr'?'Activer mon thème':lang==='es'?'Activar mi tema':lang==='pt'?'Ativar meu tema':'Activate my theme'))
          ):e('div',{style:{display:'flex',alignItems:'center',gap:12}},
            e('div',{style:{display:'flex',gap:6}},
              ['#002395','#009C3B','#AA151B','#FF6600','#003090'].map(function(c,i){
                return e('div',{key:i,style:{width:20,height:20,borderRadius:5,background:c,opacity:0.6}});
              })
            ),
            e('button',{onClick:function(){window.location.href=getStripeLink(lang);},style:{marginLeft:'auto',background:'linear-gradient(135deg,#d4af37,#b8963e)',border:'none',borderRadius:9,padding:'6px 14px',fontSize:11,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer'}},
              '🔒 '+lang==='fr'?'Débloquer PRO':lang==='es'?'Desbloquear PRO':lang==='pt'?'Desbloquear PRO':'Unlock PRO'
            )
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
          e('div',{style:{fontSize:12,color:'#fff',fontWeight:'bold',marginBottom:9}},activeTeam.flag,' ',tn(activeTeam.team,lang),' - ',t.groupLabel,' ',activeTeam.group),
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
                e('div',{style:{fontSize:10,color:'#eee',flex:1,textAlign:'right',paddingRight:6}},tn(home,lang)),
                e('div',{style:{background:isLive?'rgba(255,0,0,0.15)':isDone?'rgba(212,175,55,0.1)':'rgba(255,255,255,0.05)',border:'1px solid '+(isLive?'rgba(255,80,80,0.4)':isDone?G:'rgba(255,255,255,0.1)'),borderRadius:6,padding:'4px 8px',textAlign:'center',minWidth:54}},
                  isLive&&e('div',{style:{fontSize:7,color:'#ff4444',fontWeight:'bold',letterSpacing:1}},'🔴 LIVE'),
                  e('div',{style:{fontSize:12,fontWeight:'bold',color:isLive?'#ff8888':isDone?G:'#6a86a0'}},hg,' - ',ag)
                ),
                e('div',{style:{fontSize:10,color:'#eee',flex:1,paddingLeft:6}},tn(away,lang))
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
            e('div',{style:{fontSize:9,color:'#6a86a0',fontWeight:'bold'}},(lang==='fr'?'Équipe':lang==='es'?'Equipo':lang==='pt'?'Equipa':lang==='it'?'Squadra':lang==='de'?'Team':'Team')),
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
                e('div',{style:{fontSize:10,fontWeight:isMyTeam?'bold':'normal',color:isMyTeam?G:'#eee',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}},tn(team,lang),isMyTeam?' ⭐':'')
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
              e('span',{style:{fontSize:8,color:'#6a86a0'}},(lang==='fr'?'Qualifié':lang==='es'?'Clasificado':lang==='pt'?'Qualificado':lang==='it'?'Qualificato':lang==='de'?'Qualifiziert':'Qualified'))
            ),
            e('div',{style:{fontSize:8,color:'#6a86a0'}},(lang==='fr'?'MJ=Matchs J=Gagnés N=Nuls D=Défaites BP/BC=Buts DB=Diff':'MJ=Played W=Won D=Draw L=Lost GF/GA=Goals GD=Diff'))
          )
        ),
        e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:7}},
          Object.entries(GROUPS).map(function(entry){var g=entry[0];var data=entry[1];var hasMyTeam=data.teams.indexOf(activeTeam.team)>=0;return e('div',{key:g,onClick:function(){setSelGroup(g);},style:{background:hasMyTeam?'rgba(212,175,55,0.12)':g===selGroup?'rgba(212,175,55,0.09)':'rgba(10,20,50,0.8)',border:'1px solid '+(hasMyTeam?G:g===selGroup?G:BD),borderRadius:10,padding:10,cursor:'pointer'}},e('div',{style:{fontSize:10,fontWeight:'bold',color:G,marginBottom:5}},t.groupLabel,' ',g,hasMyTeam&&' ⭐'),data.teams.map(function(team){return e('div',{key:team,style:{fontSize:9,color:team===activeTeam.team?G:'#90aabf',marginBottom:2,fontWeight:team===activeTeam.team?'bold':'normal'}},tn(team,lang));}));})
        )
      ):null,

      // - FIXTURES -
      tab===2?e('div',null,
        e('div',{style:{fontSize:10,color:G,marginBottom:12,textAlign:'center',letterSpacing:2}},t.fixturesTitle),
        e('div',{style:{display:'flex',gap:6,marginBottom:14,justifyContent:'center',flexWrap:'wrap'}},
          e('button',{onClick:function(){setFixtureMyOnly(false);setAgendaOnly(false);},style:{background:(!fixtureMyOnly&&!agendaOnly)?'linear-gradient(135deg,'+G+',#b8963e)':'rgba(255,255,255,0.07)',border:(!fixtureMyOnly&&!agendaOnly)?'none':'1px solid rgba(212,175,55,0.28)',borderRadius:9,padding:'7px 12px',fontSize:11,fontWeight:'bold',color:(!fixtureMyOnly&&!agendaOnly)?'#0a0a1a':'#9bb0c8',cursor:'pointer'}},t.fixturesAll),
          e('button',{onClick:function(){setFixtureMyOnly(true);setAgendaOnly(false);},style:{background:(fixtureMyOnly&&!agendaOnly)?'linear-gradient(135deg,'+G+',#b8963e)':'rgba(255,255,255,0.07)',border:(fixtureMyOnly&&!agendaOnly)?'none':'1px solid rgba(212,175,55,0.28)',borderRadius:9,padding:'7px 12px',fontSize:11,fontWeight:'bold',color:(fixtureMyOnly&&!agendaOnly)?'#0a0a1a':'#9bb0c8',cursor:'pointer'}},activeTeam.flag+' '+t.fixturesMy),
          e('button',{onClick:function(){setAgendaOnly(true);setFixtureMyOnly(false);},style:{background:agendaOnly?'linear-gradient(135deg,'+G+',#b8963e)':'rgba(255,255,255,0.07)',border:agendaOnly?'none':'1px solid rgba(212,175,55,0.28)',borderRadius:9,padding:'7px 12px',fontSize:11,fontWeight:'bold',color:agendaOnly?'#0a0a1a':'#9bb0c8',cursor:'pointer',display:'flex',alignItems:'center',gap:4}},
            '⭐ '+(lang==='fr'?'Mon Agenda':lang==='es'?'Mi Agenda':lang==='pt'?'Minha Agenda':lang==='it'?'La Mia Agenda':lang==='de'?'Mein Plan':'My Schedule'),
            e('span',{style:{background:agendaOnly?'rgba(0,0,0,0.3)':'rgba(212,175,55,0.25)',borderRadius:8,padding:'1px 6px',fontSize:9}},agenda.length+(premium?'':'/'+MAX_AGENDA))
          )
        ),
        filteredFixtures.length===0&&e('div',{style:{textAlign:'center',color:'#6a86a0',padding:30}},t.noFixtures),
        e('div',{style:{display:'flex',flexDirection:'column',gap:8}},
          filteredFixtures.map(function(f,i){
            var isMyMatch=f.home===activeTeam.team||f.away===activeTeam.team;
            var isInAgenda=agenda.indexOf(fid(f))>=0;
            var agendaFull=!premium&&agenda.length>=MAX_AGENDA&&!isInAgenda;
            return e(Card,{key:i,style:{padding:'12px 14px',border:'1px solid '+(isInAgenda?G:isMyMatch?G:BD),background:isInAgenda?'linear-gradient(135deg,rgba(212,175,55,0.10),rgba(184,150,62,0.04))':isMyMatch?'linear-gradient(135deg,rgba(212,175,55,0.12),rgba(184,150,62,0.05))':CB}},
              e('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:6}},
                e('div',{style:{fontSize:9,color:isMyMatch?G:'#6a86a0'}},formatDate(f.date),' ',f.time,' ET',f.group&&' - '+(['R32','R16','QF','SF','3P','FIN'].indexOf(f.group)>=0?phaseLabel(f.group,lang):t.groupLabel+' '+f.group)),
                e('div',{style:{display:'flex',alignItems:'center',gap:6}},
                  isMyMatch&&e('span',{style:{fontSize:9,color:G,background:'rgba(212,175,55,0.15)',padding:'2px 6px',borderRadius:6}},t.myTeamLabel),
                  e('button',{onClick:function(ev){ev.stopPropagation();if(!agendaFull)toggleAgenda(f);},title:agendaFull?'Limite atteinte (5 matchs)':'',style:{background:'none',border:'none',cursor:agendaFull?'not-allowed':'pointer',fontSize:16,opacity:agendaFull?0.35:1,padding:'0 2px',lineHeight:1}},isInAgenda?'⭐':'☆')
                )
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
          e('select',{value:winner,onChange:function(ev){setWinner(ev.target.value);},style:{width:'100%',background:'rgba(10,20,50,0.95)',color:'#eee8d5',border:'1px solid '+G,borderRadius:9,padding:'9px 12px',fontSize:13}},e('option',{value:''},t.pronoChoose),ALL_TEAMS.map(function(team){return e('option',{key:team,value:team},tn(team,lang));})),
          winner&&e('div',{style:{marginTop:8,fontSize:11,color:G}},t.pronoMyPick,': ',e('strong',null,tn(winner,lang)))
        ),
        e(Card,{style:{marginBottom:12}},
          e('div',{style:{fontSize:13,fontWeight:'bold',color:'#c0c0c0',marginBottom:10}},'🥈 ',t.pronoFinal),
          e('select',{value:finalist,onChange:function(ev){setFinalist(ev.target.value);},style:{width:'100%',background:'rgba(10,20,50,0.95)',color:'#eee8d5',border:'1px solid rgba(192,192,192,0.3)',borderRadius:9,padding:'9px 12px',fontSize:13}},e('option',{value:''},t.pronoChoose),ALL_TEAMS.map(function(team){return e('option',{key:team,value:team},tn(team,lang));}))
        ),
        e(Card,{style:{marginBottom:14}},
          e('div',{style:{fontSize:13,fontWeight:'bold',color:'#cd7f32',marginBottom:10}},'🥉 ',t.pronoSemi),
          e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}},
            [[semi1,setSemi1],[semi2,setSemi2]].map(function(pair,i){return e('select',{key:i,value:pair[0],onChange:function(ev){pair[1](ev.target.value);},style:{background:'rgba(10,20,50,0.95)',color:'#eee8d5',border:'1px solid rgba(205,127,50,0.3)',borderRadius:9,padding:'8px 10px',fontSize:12}},e('option',{value:''},t.pronoChoose),ALL_TEAMS.map(function(team){return e('option',{key:team,value:team},tn(team,lang));}));})
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
          e('button',{onClick:initInteractive,style:{width:'100%',background:'linear-gradient(135deg,'+G+',#b8963e)',border:'none',borderRadius:12,padding:'14px 0',fontSize:14,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer'}},(lang==='fr'?'⚽ LANCER LE TOURNOI':lang==='es'?'⚽ INICIAR TORNEO':lang==='pt'?'⚽ INICIAR TORNEIO':lang==='it'?'⚽ INIZIA TORNEO':lang==='de'?'⚽ TURNIER STARTEN':'⚽ START TOURNAMENT'))
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
                e('div',{style:{fontSize:8,color:'#6a86a0'}},lang==='fr'?'DATE':lang==='es'?'FECHA':lang==='pt'?'DATA':lang==='it'?'DATA':lang==='de'?'DATUM':'DATE'),
                e('div',{style:{fontSize:8,color:'#6a86a0',textAlign:'right'}},lang==='fr'?'DOMICILE':lang==='es'?'LOCAL':lang==='pt'?'CASA':lang==='it'?'CASA':lang==='de'?'HEIM':'HOME'),
                e('div',{style:{fontSize:8,color:G,textAlign:'center'}},''),
                e('div',{style:{fontSize:8,color:'#6a86a0',textAlign:'center'}},'-'),
                e('div',{style:{fontSize:8,color:G,textAlign:'center'}},''),
                e('div',{style:{fontSize:8,color:'#6a86a0'}},lang==='fr'?'EXTÉRIEUR':lang==='es'?'VISITANTE':lang==='pt'?'FORA':lang==='it'?'TRASFERTA':lang==='de'?'GAST':'AWAY')
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
          e('div',{style:{fontSize:13,fontWeight:'bold',color:G,letterSpacing:1}},(lang==='fr'?'⚽ JEU DE PENALTY':lang==='es'?'⚽ JUEGO DE PENALES':lang==='pt'?'⚽ JOGO DE PENALTIS':lang==='it'?'⚽ RIGORI':lang==='de'?'⚽ ELFMETERSCHIESSEN':'⚽ PENALTY GAME')),
          e('div',{style:{fontSize:10,color:'#6a86a0',marginTop:3}},
            lang==='fr'?'5 tirs - Battez Higuita !':lang==='es'?'5 penaltis - Vence a Higuita !':lang==='pt'?'5 penaltis - Venca Higuita !':lang==='it'?'5 rigori - Batti Higuita !':lang==='de'?'5 Elfmeter - Bezwinge Higuita !':'5 penalties - Beat Higuita!'
          )
        ),
        e('div',{style:{display:'flex',justifyContent:'center',gap:10,marginBottom:10}},
          e('div',{style:{textAlign:'center',background:'rgba(40,160,40,0.2)',border:'1px solid rgba(40,200,40,0.4)',borderRadius:10,padding:'7px 14px'}},
            e('div',{style:{fontSize:20,fontWeight:'bold',color:'#90ee90'}},'⚽ ',gameScore),
            e('div',{style:{fontSize:9,color:'#6a86a0'}},lang==='fr'?'BUTS':lang==='es'?'GOLES':lang==='pt'?'GOLOS':lang==='it'?'GOL':lang==='de'?'TORE':'GOALS')
          ),
          e('div',{style:{textAlign:'center',background:'rgba(212,175,55,0.1)',border:'1px solid '+G,borderRadius:10,padding:'7px 14px'}},
            e('div',{style:{fontSize:20,fontWeight:'bold',color:G}},shotsLeft),
            e('div',{style:{fontSize:9,color:'#6a86a0'}},lang==='fr'?'RESTANTS':lang==='es'?'RESTANTES':lang==='pt'?'RESTANTES':lang==='it'?'RIMASTI':lang==='de'?'VERBLEIBEND':'LEFT')
          ),
          e('div',{style:{textAlign:'center',background:'rgba(200,40,40,0.2)',border:'1px solid rgba(200,60,60,0.4)',borderRadius:10,padding:'7px 14px'}},
            e('div',{style:{fontSize:20,fontWeight:'bold',color:'#ff8888'}},'✗ ',gameMiss),
            e('div',{style:{fontSize:9,color:'#6a86a0'}},lang==='fr'?'ARRÊTÉS':lang==='es'?'PARADOS':lang==='pt'?'DEFENDIDOS':lang==='it'?'PARATI':lang==='de'?'GEHALTEN':'SAVED')
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
        !premium&&e('div',{style:{background:'linear-gradient(135deg,rgba(212,175,55,0.12),rgba(184,150,62,0.06))',border:'1px solid '+G,borderRadius:12,padding:'16px',textAlign:'center'}},
          e('div',{style:{fontSize:11,fontWeight:'bold',color:G,marginBottom:8}},'🏆 PENALTY SHOOTOUT TOURNAMENT — PRO'),
          e('div',{style:{fontSize:24,marginBottom:8}},'🔒'),
          e('a',{href:getStripeLink(lang),target:'_blank',rel:'noopener',style:{background:'linear-gradient(135deg,'+G+',#ff9900)',border:'none',borderRadius:10,padding:'10px 24px',fontSize:12,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer',textDecoration:'none',display:'inline-block'}},'🏆 PRO - '+getPrice(lang))
        ),
        premium&&(function(){
          var ROUNDS=[
            {name:{en:'ROUND OF 16',fr:'8ÈME DE FINALE',es:'OCTAVOS',pt:'OITAVAS',it:'OTTAVI',de:'ACHTELFINALE'},keeper:'🧤 Higuita',need:3,bonus:0,color:'#90ee90'},
            {name:{en:'QUARTER-FINAL',fr:'QUART DE FINALE',es:'CUARTOS',pt:'QUARTAS',it:'QUARTI',de:'VIERTELFINALE'},keeper:'🥅 Buffon',need:3,bonus:30,color:'#ffd700'},
            {name:{en:'SEMI-FINAL',fr:'DEMI-FINALE',es:'SEMIFINAL',pt:'SEMIFINAL',it:'SEMIFINALE',de:'HALBFINALE'},keeper:'🧱 Casillas',need:4,bonus:80,color:'#ff9900'},
            {name:{en:'THE FINAL',fr:'LA FINALE',es:'LA FINAL',pt:'A FINAL',it:'LA FINALE',de:'DAS FINALE'},keeper:'🌟 Yashin',need:4,bonus:150,color:'#ff4444'}
          ];
          var rd=ROUNDS[penTourRound]||ROUNDS[0];
          var roundScore=gameScore*10+(gameScore===5?30:0);

          // ── MENU ────────────────────────────────────────────────
          if(penTourPhase==='menu')return e('div',null,
            e('div',{style:{textAlign:'center',marginBottom:14}},
              e('div',{style:{fontSize:16,fontWeight:'bold',color:G,letterSpacing:1}},'🏆 '+(lang==='fr'?'TOURNOI DE PENALTIES':lang==='es'?'TORNEO DE PENALES':lang==='pt'?'TORNEIO DE PENALTIS':lang==='it'?'TORNEO DI RIGORI':lang==='de'?'ELFMETER-TURNIER':'PENALTY TOURNAMENT')),
              e('div',{style:{fontSize:10,color:'#6a86a0',marginTop:4}},lang==='fr'?'4 rounds • Gardiens légendaires • Classement mondial':lang==='es'?'4 rondas • Porteros legendarios • Ranking mundial':lang==='pt'?'4 rodadas • Goleiros lendários • Ranking mundial':'4 rounds • Legendary keepers • World ranking')
            ),
            // Round preview
            e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6,marginBottom:14}},
              ROUNDS.map(function(r,i){
                return e('div',{key:i,style:{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:10,padding:'10px 8px',textAlign:'center'}},
                  e('div',{style:{fontSize:9,fontWeight:'bold',color:r.color,letterSpacing:1,marginBottom:3}},(r.name[lang]||r.name.en)),
                  e('div',{style:{fontSize:14,marginBottom:2}},r.keeper.split(' ')[0]),
                  e('div',{style:{fontSize:9,color:'#6a86a0'}},'Need ',r.need,'/5')
                );
              })
            ),
            e('button',{onClick:function(){setPenTourPhase('name');},
              style:{width:'100%',background:'linear-gradient(135deg,'+G+',#ff9900)',border:'none',borderRadius:12,padding:'15px 0',fontSize:15,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer',boxShadow:'0 4px 20px rgba(212,175,55,0.4)',marginBottom:12}
            },'⚽ '+(lang==='fr'?'DÉMARRER LE TOURNOI':lang==='es'?'INICIAR TORNEO':lang==='pt'?'INICIAR TORNEIO':'START TOURNAMENT')),
            // Leaderboard
            e('div',{style:{background:'rgba(10,15,40,0.8)',border:'1px solid rgba(212,175,55,0.3)',borderRadius:12,padding:10}},
              e('div',{style:{fontSize:11,fontWeight:'bold',color:G,marginBottom:8,textAlign:'center'}},'🏅 '+(lang==='fr'?'CLASSEMENT MONDIAL':lang==='es'?'RANKING MUNDIAL':lang==='pt'?'RANKING MUNDIAL':'WORLD RANKING')),
              penLeaderboard.length===0&&e('div',{style:{textAlign:'center',color:'#6a86a0',fontSize:10,padding:8}},lang==='fr'?'Sois le premier champion !':lang==='es'?'Sé el primer campeón !':lang==='pt'?'Seja o primeiro campeão !':'Be the first champion!'),
              penLeaderboard.slice(0,8).map(function(entry,i){
                return e('div',{key:i,style:{display:'grid',gridTemplateColumns:'22px 1fr 45px 44px 32px',gap:4,alignItems:'center',padding:'5px 4px',background:i===0?'rgba(212,175,55,0.12)':'transparent',borderRadius:6,marginBottom:2}},
                  e('div',{style:{fontSize:12,textAlign:'center'}},i===0?'🥇':i===1?'🥈':i===2?'🥉':i+1),
                  e('div',{style:{fontSize:10,fontWeight:i<3?'bold':'normal',color:i===0?G:'#eee',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}},entry.name),
                  e('div',{style:{fontSize:10,fontWeight:'bold',color:G,textAlign:'center'}},entry.score,' pts'),
                  e('div',{style:{fontSize:9,color:'#9bb0c8',textAlign:'center'}},entry.round),
                  e('div',{style:{fontSize:11,textAlign:'center'}},entry.trophy)
                );
              })
            )
          );

          // ── NAME ────────────────────────────────────────────────
          if(penTourPhase==='name')return e('div',{style:{textAlign:'center'}},
            e('div',{style:{fontSize:48,marginBottom:8}},'⚽'),
            e('div',{style:{fontSize:14,fontWeight:'bold',color:G,marginBottom:4}},lang==='fr'?'Qui êtes-vous ?':lang==='es'?'¿Quién eres ?':lang==='pt'?'Quem és você ?':'Who are you?'),
            e('div',{style:{fontSize:10,color:'#6a86a0',marginBottom:14}},lang==='fr'?'Votre nom apparaîtra au classement mondial':lang==='es'?'Tu nombre aparecerá en el ranking mundial':lang==='pt'?'Seu nome aparecerá no ranking mundial':'Your name will appear on the world ranking'),
            e('input',{type:'text',maxLength:16,placeholder:lang==='fr'?'Votre prénom...':lang==='es'?'Tu nombre...':lang==='pt'?'Seu nome...':'Your name...',value:penTourName,onChange:function(ev){setPenTourName(ev.target.value);},style:{width:'100%',background:'rgba(10,20,50,0.95)',color:'#eee',border:'2px solid '+G,borderRadius:10,padding:'12px 14px',fontSize:15,marginBottom:12,textAlign:'center',boxSizing:'border-box'}}),
            e('button',{onClick:function(){
              if(!penTourName.trim())return;
              setPenTourRound(0);setPenTourTotal(0);setPenTourPhase('playing');startPenRound();
            },style:{width:'100%',background:'linear-gradient(135deg,'+G+',#ff9900)',border:'none',borderRadius:12,padding:'14px 0',fontSize:14,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer',boxShadow:'0 4px 15px rgba(212,175,55,0.4)',marginBottom:8}},
            '🏆 '+(lang==='fr'?'JOUER !':lang==='es'?'¡JUGAR!':lang==='pt'?'JOGAR !':'PLAY !')),
            e('button',{onClick:function(){setPenTourPhase('menu');},style:{width:'100%',background:'transparent',border:'1px solid rgba(255,255,255,0.1)',borderRadius:10,padding:'10px 0',fontSize:11,color:'#6a86a0',cursor:'pointer'}},'← '+(lang==='fr'?'Retour':lang==='es'?'Volver':lang==='pt'?'Voltar':'Back'))
          );

          // ── PLAYING ─────────────────────────────────────────────
          if(penTourPhase==='playing')return e('div',null,
            // Round header
            e('div',{style:{background:'linear-gradient(135deg,rgba(10,20,60,0.95),rgba(20,50,120,0.9))',border:'2px solid '+rd.color,borderRadius:12,padding:'10px 14px',marginBottom:10,display:'flex',justifyContent:'space-between',alignItems:'center'}},
              e('div',null,
                e('div',{style:{fontSize:9,color:rd.color,fontWeight:'bold',letterSpacing:1}},(rd.name[lang]||rd.name.en)),
                e('div',{style:{fontSize:10,color:'#9bb0c8',marginTop:2}},rd.keeper),
                e('div',{style:{fontSize:9,color:'#6a86a0',marginTop:1}},'Need ',rd.need,'/5 to qualify')
              ),
              e('div',{style:{textAlign:'right'}},
                e('div',{style:{fontSize:10,color:'#6a86a0'}},'🏅 Total'),
                e('div',{style:{fontSize:18,fontWeight:'bold',color:G}},penTourTotal,' pts'),
                e('div',{style:{fontSize:9,color:'#9bb0c8'}},penTourName)
              )
            ),
            // Round progress dots
            e('div',{style:{display:'flex',justifyContent:'center',gap:8,marginBottom:10}},
              ROUNDS.map(function(r,i){
                return e('div',{key:i,style:{display:'flex',flexDirection:'column',alignItems:'center',gap:2}},
                  e('div',{style:{width:28,height:28,borderRadius:'50%',background:i<penTourRound?'rgba(40,200,40,0.4)':i===penTourRound?('rgba(212,175,55,0.4)'):('rgba(255,255,255,0.06)'),border:'2px solid '+(i<penTourRound?'#90ee90':i===penTourRound?G:'rgba(255,255,255,0.15)'),display:'flex',alignItems:'center',justifyContent:'center',fontSize:12}},
                  i<penTourRound?'✅':i===penTourRound?'⚽':'○'),
                  e('div',{style:{fontSize:7,color:'#6a86a0'}},(r.name[lang]||r.name.en).split(' ')[0])
                );
              })
            ),
            // 3D Canvas Pitch — always mounted to avoid WebGL context loss on iOS
            e('div',{style:{display:gamePhase==='done'?'none':'block'}},
            e(PenaltyPitch,{
              key:'pitch-'+penTourRound,
              roundIdx:penTourRound,
              shotsLeft:shotsLeft,
              shotHistory:shotHistory,
              gameScore:gameScore,
              gameMiss:gameMiss,
              lang:lang,
              G:G,
              playerName:penTourName,
              onShotDone:function(scored){
                setShotHistory(function(hist){return hist.concat([{dir:'canvas',scored:scored}]);});
                if(scored){setGameScore(function(s){return s+1;});setCombo(function(c){return c+1;});}
                else{setGameMiss(function(m){return m+1;});setCombo(0);}
                setShotsLeft(function(s){var ns=s-1;if(ns<=0)setGamePhase('done');return ns;});
              }
            })),
            // Round done
            gamePhase==='done'&&(function(){
              var qualified=gameScore>=rd.need;
              var bonus=qualified?(gameScore===5?roundScore+rd.bonus:roundScore+rd.bonus):roundScore;
              var newTotal=penTourTotal+bonus;
              var isChampion=qualified&&penTourRound===3;
              return e('div',{style:{textAlign:'center'}},
                e('div',{style:{background:qualified?'rgba(40,160,40,0.2)':'rgba(200,40,40,0.15)',border:'2px solid '+(qualified?'#90ee90':'#ff4444'),borderRadius:16,padding:'16px',marginBottom:10}},
                  e('div',{style:{fontSize:44,marginBottom:6}},isChampion?'🏆':qualified?'✅':'❌'),
                  e('div',{style:{fontSize:16,fontWeight:'bold',color:qualified?'#90ee90':'#ff4444',marginBottom:4}},
                    isChampion?(lang==='fr'?'CHAMPION DU MONDE !':lang==='es'?'¡CAMPEÓN DEL MUNDO!':lang==='pt'?'CAMPEÃO DO MUNDO !':lang==='it'?'CAMPIONE DEL MONDO !':lang==='de'?'WELTMEISTER !':'WORLD CHAMPION !'):
                    qualified?(lang==='fr'?'QUALIFIÉ !':lang==='es'?'¡CLASIFICADO!':lang==='pt'?'CLASSIFICADO !':'QUALIFIED !'):
                    (lang==='fr'?'ÉLIMINÉ':lang==='es'?'ELIMINADO':lang==='pt'?'ELIMINADO':'ELIMINATED')
                  ),
                  e('div',{style:{fontSize:12,color:'#ccc',marginBottom:6}},gameScore,' / 5 — +',bonus,' pts'),
                  e('div',{style:{fontSize:14,fontWeight:'bold',color:G}},'Total: ',newTotal,' pts'),
                  qualified&&rd.bonus>0&&e('div',{style:{fontSize:10,color:'#90ee90',marginTop:3}},'⭐ Round bonus: +',rd.bonus,' pts'),
                  e('div',{style:{display:'flex',justifyContent:'center',gap:4,marginTop:8}},
                    shotHistory.map(function(h,i){return e('div',{key:i,style:{width:22,height:22,borderRadius:'50%',background:h.scored?'rgba(40,200,40,0.5)':'rgba(200,40,40,0.5)',border:'1px solid '+(h.scored?'#90ee90':'#ff6666'),display:'flex',alignItems:'center',justifyContent:'center',fontSize:10}},h.scored?'⚽':'✗');})
                  )
                ),
                isChampion&&e('button',{onClick:function(){
                  savePenLeaderboard(penTourName,newTotal,3);
                  setPenTourPhase('menu');
                },style:{width:'100%',background:'linear-gradient(135deg,'+G+',#ff9900)',border:'none',borderRadius:12,padding:'13px 0',fontSize:14,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer',boxShadow:'0 4px 15px rgba(212,175,55,0.4)',marginBottom:6}},
                '🏆 '+(lang==='fr'?'SAUVEGARDER & CLASSEMENT':lang==='es'?'GUARDAR & RANKING':lang==='pt'?'SALVAR & RANKING':'SAVE & LEADERBOARD')),
                qualified&&!isChampion&&e('button',{onClick:function(){
                  setPenTourTotal(newTotal);
                  setPenTourRound(penTourRound+1);
                  startPenRound();
                },style:{width:'100%',background:'linear-gradient(135deg,#90ee90,#228B22)',border:'none',borderRadius:12,padding:'13px 0',fontSize:13,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer',marginBottom:6}},
                '▶ '+(lang==='fr'?'PROCHAIN ROUND':lang==='es'?'SIGUIENTE RONDA':lang==='pt'?'PRÓXIMA RODADA':'NEXT ROUND')+' — '+(ROUNDS[penTourRound+1]&&(ROUNDS[penTourRound+1].name[lang]||ROUNDS[penTourRound+1].name.en)||'')),
                !qualified&&e('button',{onClick:function(){
                  savePenLeaderboard(penTourName,newTotal,penTourRound);
                  setPenTourPhase('menu');
                },style:{width:'100%',background:'linear-gradient(135deg,'+G+',#b8963e)',border:'none',borderRadius:12,padding:'13px 0',fontSize:13,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer',marginBottom:6}},
                '🏅 '+(lang==='fr'?'SAUVEGARDER MON SCORE':lang==='es'?'GUARDAR MI SCORE':lang==='pt'?'SALVAR MEU SCORE':'SAVE MY SCORE')),
                e('button',{onClick:function(){setPenTourPhase('menu');},style:{width:'100%',background:'transparent',border:'1px solid rgba(255,255,255,0.1)',borderRadius:10,padding:'9px 0',fontSize:11,color:'#6a86a0',cursor:'pointer'}},
                '🏠 '+(lang==='fr'?'Menu':lang==='es'?'Menú':lang==='pt'?'Menu':'Menu'))
              );
            })()
          );

          return null;
        })()
        ):null,

      // ── TAB 4 - QUIZ CHAMPIONSHIP ─────────────────────────────
      tab===4?e('div',null,
        e('div',{style:{textAlign:'center',marginBottom:14}},
          e('div',{style:{fontSize:14,fontWeight:'bold',color:G,letterSpacing:2}},(lang==='fr'?'🏆 QUIZ CHAMPIONNAT':lang==='es'?'🏆 QUIZ CAMPEONATO':lang==='pt'?'🏆 QUIZ CAMPEONATO':lang==='it'?'🏆 QUIZ CAMPIONATO':lang==='de'?'🏆 QUIZ MEISTERSCHAFT':'🏆 QUIZ CHAMPIONSHIP')),
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
              {level:'easy',icon:'🟢',label:{en:'BEGINNER',fr:'DEBUTANT',es:'PRINCIPIANTE',pt:'INICIANTE',it:'PRINCIPIANTE',de:'ANFANGER'},desc:{en:(premium?'30':'10')+' questions - 5 pts each - '+(premium?'150':'50')+' pts max',fr:(premium?'30':'10')+' questions - 5 pts chacune - '+(premium?'150':'50')+' pts max',es:(premium?'30':'10')+' preguntas - 5 pts cada una - '+(premium?'150':'50')+' pts max',pt:(premium?'30':'10')+' perguntas - 5 pts cada - '+(premium?'150':'50')+' pts max',it:(premium?'30':'10')+' domande - 5 pts ciascuna - '+(premium?'150':'50')+' pts max',de:(premium?'30':'10')+' Fragen - je 5 Pkte - max '+(premium?'150':'50')+' Pkte'},color:'rgba(40,160,40,0.2)',border:'rgba(40,200,40,0.5)'},
              {level:'medium',icon:'🟡',label:{en:'EXPERT',fr:'EXPERT',es:'EXPERTO',pt:'ESPECIALISTA',it:'ESPERTO',de:'EXPERTE'},desc:{en:(premium?'30':'10')+' questions - 10 pts each - '+(premium?'300':'100')+' pts max',fr:(premium?'30':'10')+' questions - 10 pts chacune - '+(premium?'300':'100')+' pts max',es:(premium?'30':'10')+' preguntas - 10 pts cada una - '+(premium?'300':'100')+' pts max',pt:(premium?'30':'10')+' perguntas - 10 pts cada - '+(premium?'300':'100')+' pts max',it:(premium?'30':'10')+' domande - 10 pts ciascuna - '+(premium?'300':'100')+' pts max',de:(premium?'30':'10')+' Fragen - je 10 Pkte - max '+(premium?'300':'100')+' Pkte'},color:'rgba(255,165,0,0.2)',border:'rgba(255,165,0,0.5)'},
              {level:'hard',icon:'🔴',label:{en:'WORLD CLASS',fr:'CLASSE MONDIALE',es:'CLASE MUNDIAL',pt:'CLASSE MUNDIAL',it:'CLASSE MONDIALE',de:'WELTKLASSE'},desc:{en:(premium?'30':'10')+' questions - 20 pts each - '+(premium?'600':'200')+' pts max',fr:(premium?'30':'10')+' questions - 20 pts chacune - '+(premium?'600':'200')+' pts max',es:(premium?'30':'10')+' preguntas - 20 pts cada una - '+(premium?'600':'200')+' pts max',pt:(premium?'30':'10')+' perguntas - 20 pts cada - '+(premium?'600':'200')+' pts max',it:(premium?'30':'10')+' domande - 20 pts ciascuna - '+(premium?'600':'200')+' pts max',de:(premium?'30':'10')+' Fragen - je 20 Pkte - max '+(premium?'600':'200')+' Pkte'},color:'rgba(200,40,40,0.2)',border:'rgba(200,60,60,0.5)'}
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
            var questions=(QUIZ_CHAMPIONSHIP[levelKey]||[]).slice(0,premium?30:10);
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
            var maxPts=levelKey==='easy'?(premium?150:50):levelKey==='medium'?(premium?300:100):(premium?600:200);
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

        // ── FORMATIONS DEFINITIONS ──
        (function(){
          var SLOT_POS={LW:'FW',RW:'FW',CF:'FW',CF1:'FW',CF2:'FW',ST:'FW',
            LAM:'MF',RAM:'MF',CAM:'MF',LM:'MF',RM:'MF',
            CM:'MF',CM1:'MF',CM2:'MF',DM:'MF',DM1:'MF',DM2:'MF',
            LB:'DF',RB:'DF',LWB:'DF',RWB:'DF',CB:'DF',CB1:'DF',CB2:'DF',CB3:'DF',GK:'GK'};

          var LABELS={
            LW:{fr:'Ail.Gauche',en:'L.Wing'},RW:{fr:'Ail.Droit',en:'R.Wing'},
            CF:{fr:'Avant-C.',en:'Striker'},CF1:{fr:'Avant.G',en:'L.Striker'},CF2:{fr:'Avant.D',en:'R.Striker'},
            ST:{fr:'Avant-C.',en:'Striker'},
            LAM:{fr:'Mil.Off.G',en:'L.AMid'},RAM:{fr:'Mil.Off.D',en:'R.AMid'},CAM:{fr:'Milieu Off.',en:'CAM'},
            LM:{fr:'Mil.G',en:'L.Mid'},RM:{fr:'Mil.D',en:'R.Mid'},
            CM:{fr:'Milieu',en:'C.Mid'},CM1:{fr:'Mil.G',en:'CM L'},CM2:{fr:'Mil.D',en:'CM R'},
            DM:{fr:'Mil.Def.',en:'D.Mid'},DM1:{fr:'Mil.Def.G',en:'DM L'},DM2:{fr:'Mil.Def.D',en:'DM R'},
            LB:{fr:'Arr.G',en:'L.Back'},RB:{fr:'Arr.D',en:'R.Back'},
            LWB:{fr:'Piston G',en:'LWB'},RWB:{fr:'Piston D',en:'RWB'},
            CB:{fr:'Def.C.',en:'C.Back'},CB1:{fr:'Def.C.',en:'C.Back'},CB2:{fr:'Def.C.',en:'C.Back'},CB3:{fr:'Def.C.',en:'C.Back'},
            GK:{fr:'Gardien',en:'GK'}
          };

          var FMTS={
            '4-3-3':{rows:[
              {slots:['CF'],pad:0,jc:'center'},
              {slots:['LW','RW'],pad:0,jc:'space-between'},
              {slots:['CM1','CM2'],pad:15,jc:'space-around'},
              {slots:['DM'],pad:0,jc:'center'},
              {slots:['LB','CB1','CB2','RB'],pad:0,jc:'space-around'},
              {slots:['GK'],pad:0,jc:'center'}]},
            '4-4-2':{rows:[
              {slots:['CF1','CF2'],pad:10,jc:'space-around'},
              {slots:['LM','CM1','CM2','RM'],pad:0,jc:'space-around'},
              {slots:['LB','CB1','CB2','RB'],pad:0,jc:'space-around'},
              {slots:['GK'],pad:0,jc:'center'}]},
            '5-4-1':{rows:[
              {slots:['ST'],pad:0,jc:'center'},
              {slots:['LM','CM1','CM2','RM'],pad:5,jc:'space-around'},
              {slots:['LWB','CB1','CB2','CB3','RWB'],pad:0,jc:'space-around'},
              {slots:['GK'],pad:0,jc:'center'}]},
            '4-1-2-2-1':{rows:[
              {slots:['CF'],pad:0,jc:'center'},
              {slots:['LAM','RAM'],pad:5,jc:'space-around'},
              {slots:['CM1','CM2'],pad:5,jc:'space-around'},
              {slots:['DM'],pad:0,jc:'center'},
              {slots:['LB','CB1','CB2','RB'],pad:0,jc:'space-around'},
              {slots:['GK'],pad:0,jc:'center'}]},
            '4-2-3-1':{rows:[
              {slots:['ST'],pad:0,jc:'center'},
              {slots:['LW','CAM','RW'],pad:0,jc:'space-around'},
              {slots:['DM1','DM2'],pad:15,jc:'space-around'},
              {slots:['LB','CB1','CB2','RB'],pad:0,jc:'space-around'},
              {slots:['GK'],pad:0,jc:'center'}]}
          };

          var fmt=FMTS[fantasyFormation]||FMTS['4-3-3'];
          var allSlots=fmt.rows.reduce(function(a,r){return a.concat(r.slots||r.map(function(x){return x.s;}))},[]);

          function slotLabel(s){var l=LABELS[s]||{};return l[lang]||l.en||s;}
          function slotColor(s){
            var p=SLOT_POS[s];
            if(p==='GK')return '#f39c12';
            if(p==='DF')return '#e74c3c';
            if(p==='MF')return '#4a90e2';
            return '#d4af37';
          }

          return e('div',null,

            // HEADER
            e('div',{style:{textAlign:'center',marginBottom:10}},
              e('div',{style:{fontSize:13,fontWeight:'bold',color:'#d4af37',letterSpacing:2}},(lang==='fr'?'⭐ FANTASY COUPE DU MONDE':lang==='es'?'⭐ FANTASY COPA MUNDIAL':lang==='pt'?'⭐ FANTASY COPA DO MUNDO':lang==='it'?'⭐ FANTASY COPPA DEL MONDO':lang==='de'?'⭐ FANTASY WELTMEISTERSCHAFT':'⭐ FANTASY WORLD CUP')),
              e('div',{style:{fontSize:10,color:'#6a86a0',marginTop:2}},
                lang==='fr'?'Composez votre equipe de reve !':
                lang==='es'?'Compone tu equipo de suenos !':
                lang==='pt'?'Monte seu time dos sonhos !':'Build your dream team !')
            ),

            // FORMATION SELECTOR
            e('div',{style:{display:'flex',gap:4,justifyContent:'center',flexWrap:'wrap',marginBottom:10}},
              ['4-3-3','4-4-2','5-4-1','4-1-2-2-1','4-2-3-1'].map(function(f){
                var active=f===fantasyFormation;
                return e('button',{key:f,onClick:function(){
                  if(!fantasyDone){setFantasyFormation(f);setFantasyTeam([]);setFantasyPos(null);}
                },style:{
                  background:active?'linear-gradient(135deg,#1565c0,#42a5f5)':'rgba(255,255,255,0.06)',
                  color:active?'#fff':'#6a86a0',
                  border:'1px solid '+(active?'#42a5f5':'rgba(255,255,255,0.1)'),
                  borderRadius:8,padding:'5px 10px',fontSize:10,cursor:'pointer',fontWeight:active?'bold':'normal'
                }},f);
              })
            ),

            // PITCH - SVG absolute positioning
            (function(){
              var POS={
                '4-3-3':{
                  CF: {t:14.3,l:50},
                  LW: {t:25.7,l:17.5}, RW:{t:25.7,l:82.5},
                  CM1:{t:42.9,l:37.5}, CM2:{t:42.9,l:62.5},
                  DM: {t:54.3,l:50},
                  LB: {t:65.7,l:17.5}, CB1:{t:71.4,l:37.5}, CB2:{t:71.4,l:62.5}, RB:{t:65.7,l:82.5},
                  GK: {t:85.7,l:50}
                },
                '4-4-2':{
                  CF1:{t:14.3,l:33}, CF2:{t:14.3,l:67},
                  LM: {t:42.9,l:10}, CM1:{t:42.9,l:35}, CM2:{t:42.9,l:65}, RM:{t:42.9,l:90},
                  LB: {t:65.7,l:17.5}, CB1:{t:71.4,l:37.5}, CB2:{t:71.4,l:62.5}, RB:{t:65.7,l:82.5},
                  GK: {t:85.7,l:50}
                },
                '5-4-1':{
                  ST: {t:14.3,l:50},
                  LM: {t:40,l:10}, CM1:{t:42.9,l:33}, CM2:{t:42.9,l:67}, RM:{t:40,l:90},
                  LWB:{t:63,l:8}, CB1:{t:70,l:27}, CB2:{t:71.4,l:50}, CB3:{t:70,l:73}, RWB:{t:63,l:92},
                  GK: {t:85.7,l:50}
                },
                '4-1-2-2-1':{
                  CF: {t:14.3,l:50},
                  LAM:{t:30,l:30}, RAM:{t:30,l:70},
                  CM1:{t:46,l:35}, CM2:{t:46,l:65},
                  DM: {t:57,l:50},
                  LB: {t:65.7,l:17.5}, CB1:{t:71.4,l:37.5}, CB2:{t:71.4,l:62.5}, RB:{t:65.7,l:82.5},
                  GK: {t:85.7,l:50}
                },
                '4-2-3-1':{
                  ST: {t:14.3,l:50},
                  LW: {t:30,l:17.5}, CAM:{t:30,l:50}, RW:{t:30,l:82.5},
                  DM1:{t:50,l:37.5}, DM2:{t:50,l:62.5},
                  LB: {t:65.7,l:17.5}, CB1:{t:71.4,l:37.5}, CB2:{t:71.4,l:62.5}, RB:{t:65.7,l:82.5},
                  GK: {t:85.7,l:50}
                }
              };

              var positions=POS[fantasyFormation]||POS['4-3-3'];
              var slots=Object.keys(positions);

              return e('div',{style:{
                position:'relative',width:'100%',paddingTop:'116.67%',
                borderRadius:14,overflow:'hidden',marginBottom:10
              }},
                // Gazon rayé
                e('div',{style:{position:'absolute',inset:0,
                  background:'repeating-linear-gradient(180deg,#1b5e20 0px,#1b5e20 50px,#2e7d32 50px,#2e7d32 100px)'
                }}),
                // SVG lignes terrain
                e('svg',{style:{position:'absolute',inset:0,width:'100%',height:'100%'},
                  viewBox:'0 0 600 700',preserveAspectRatio:'none'},
                  // Bordure
                  e('rect',{x:'18',y:'18',width:'564',height:'664',fill:'none',stroke:'white',strokeWidth:'2.5'}),
                  // Coins arrondis
                  e('path',{d:'M18,46 A28,28 0 0,1 46,18',fill:'none',stroke:'white',strokeWidth:'2'}),
                  e('path',{d:'M554,18 A28,28 0 0,1 582,46',fill:'none',stroke:'white',strokeWidth:'2'}),
                  e('path',{d:'M582,654 A28,28 0 0,1 554,682',fill:'none',stroke:'white',strokeWidth:'2'}),
                  e('path',{d:'M46,682 A28,28 0 0,1 18,654',fill:'none',stroke:'white',strokeWidth:'2'}),
                  // Ligne médiane + point central
                  e('line',{x1:'18',y1:'350',x2:'582',y2:'350',stroke:'white',strokeWidth:'2'}),
                  e('circle',{cx:'300',cy:'350',r:'60',fill:'none',stroke:'white',strokeWidth:'2'}),
                  e('circle',{cx:'300',cy:'350',r:'4',fill:'white'}),
                  // But haut
                  e('rect',{x:'252',y:'5',width:'96',height:'16',fill:'rgba(200,200,200,0.2)',stroke:'white',strokeWidth:'1.8'}),
                  // Grande surface haut
                  e('rect',{x:'172',y:'21',width:'256',height:'118',fill:'none',stroke:'white',strokeWidth:'2'}),
                  // Petite surface haut
                  e('rect',{x:'228',y:'21',width:'144',height:'58',fill:'none',stroke:'white',strokeWidth:'1.8'}),
                  // Point penalty haut
                  e('circle',{cx:'300',cy:'96',r:'3.5',fill:'white'}),
                  // But bas
                  e('rect',{x:'252',y:'679',width:'96',height:'16',fill:'rgba(200,200,200,0.2)',stroke:'white',strokeWidth:'1.8'}),
                  // Grande surface bas
                  e('rect',{x:'172',y:'561',width:'256',height:'118',fill:'none',stroke:'white',strokeWidth:'2'}),
                  // Petite surface bas
                  e('rect',{x:'228',y:'621',width:'144',height:'58',fill:'none',stroke:'white',strokeWidth:'1.8'}),
                  // Point penalty bas
                  e('circle',{cx:'300',cy:'604',r:'3.5',fill:'white'})
                ),
                // Formation label
                e('div',{style:{position:'absolute',top:6,left:0,right:0,
                  textAlign:'center',fontSize:9,color:'rgba(255,255,255,0.4)',fontWeight:'bold'}},
                  fantasyFormation),

                // Players
                slots.map(function(s){
                  var pos=positions[s];
                  var pl=fantasyTeam.find(function(p){return p.pos===s;});
                  var col=s==='GK'?'#f39c12':
                    (s.startsWith('CB')||s==='LB'||s==='RB'||s.startsWith('LW'+'B')||s.startsWith('RW'+'B'))?'#e74c3c':
                    (s.startsWith('CM')||s==='DM'||s.startsWith('DM')||s==='LM'||s==='RM'||s==='CAM'||s==='LAM'||s==='RAM')?'#4a90e2':
                    '#d4af37';
                  var sz=s==='GK'?44:s.startsWith('CB')||s==='LB'||s==='RB'?38:42;
                  var active=fantasyPos===s;
                  return e('div',{
                    key:s,
                    onClick:function(){if(!fantasyDone)setFantasyPos(s);},
                    style:{
                      position:'absolute',
                      top:pos.t+'%',left:pos.l+'%',
                      transform:'translate(-50%,-50%)',
                      textAlign:'center',cursor:'pointer',
                      zIndex:active?10:1,
                      transition:'all 0.2s'
                    }
                  },
                    e('div',{style:{
                      width:sz,height:sz,borderRadius:'50%',
                      background:pl?('linear-gradient(135deg,'+col+','+col+'bb)'):'rgba(255,255,255,0.12)',
                      border:'2px solid '+(active?'#fff':pl?col:'rgba(255,255,255,0.3)'),
                      display:'flex',alignItems:'center',justifyContent:'center',
                      boxShadow:active?'0 0 0 3px rgba(255,255,255,0.5)':pl?('0 2px 8px '+col+'66'):'none',
                      transform:active?'scale(1.15)':'scale(1)',transition:'all 0.2s'
                    }},
                      pl
                        ?e('div',{style:{textAlign:'center',padding:1}},
                            e('div',{style:{fontSize:6,fontWeight:'bold',color:'#fff',lineHeight:1.1,maxWidth:34,overflow:'hidden'}},pl.name.split(' ').slice(-1)[0]),
                            e('div',{style:{fontSize:9}},pl.flag))
                        :e('div',{style:{fontSize:13,color:'rgba(255,255,255,0.4)'}},'＋')
                    ),
                    e('div',{style:{fontSize:6,color:'rgba(255,255,255,0.85)',fontWeight:'bold',
                      marginTop:2,lineHeight:1.1,maxWidth:48,
                      textShadow:'0 1px 2px rgba(0,0,0,0.8)'}},
                      (function(){var l=({
                        LW:{fr:'Ail.G',en:'LW'},RW:{fr:'Ail.D',en:'RW'},
                        CF:{fr:'Avant-C',en:'CF'},CF1:{fr:'Att.G',en:'ST L'},CF2:{fr:'Att.D',en:'ST R'},
                        ST:{fr:'Avant-C',en:'ST'},
                        CM1:{fr:'Mil.G',en:'CM'},CM2:{fr:'Mil.D',en:'CM'},
                        DM:{fr:'Mil.Def',en:'DM'},DM1:{fr:'Mil.D.G',en:'DM'},DM2:{fr:'Mil.D.D',en:'DM'},
                        LM:{fr:'Mil.G',en:'LM'},RM:{fr:'Mil.D',en:'RM'},
                        CAM:{fr:'Mil.Off',en:'CAM'},LAM:{fr:'Off.G',en:'AM L'},RAM:{fr:'Off.D',en:'AM R'},
                        LB:{fr:'Arr.G',en:'LB'},RB:{fr:'Arr.D',en:'RB'},
                        CB1:{fr:'Def.C',en:'CB'},CB2:{fr:'Def.C',en:'CB'},CB3:{fr:'Def.C',en:'CB'},
                        LWB:{fr:'Pist.G',en:'LWB'},RWB:{fr:'Pist.D',en:'RWB'},
                        GK:{fr:'Gardien',en:'GK'}
                      })[s]||{};return l[lang]||l.en||s;})()
                    )
                  );
                })
              );
            })(),

            // PLAYER PICKER
            fantasyPos&&!fantasyDone&&e('div',{style:{background:'rgba(15,20,40,0.97)',border:'1px solid #d4af37',borderRadius:12,padding:10,marginBottom:10}},
              e('div',{style:{fontSize:11,color:'#d4af37',fontWeight:'bold',marginBottom:8}},
                (lang==='fr'?'Choisir : ':lang==='es'?'Elegir : ':lang==='pt'?'Escolher : ':'Pick : ')+slotLabel(fantasyPos)+
                ' ('+(SLOT_POS[fantasyPos]==='GK'?'GK':SLOT_POS[fantasyPos]==='DF'?lang==='fr'?'Défenseurs':'Defenders':SLOT_POS[fantasyPos]==='MF'?lang==='fr'?'Milieux':'Midfielders':lang==='fr'?'Attaquants':'Forwards')+')'
              ),
              e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:5,maxHeight:180,overflowY:'auto'}},
                STARS.filter(function(s){
                  var needed=SLOT_POS[fantasyPos];
                  var notPicked=!fantasyTeam.find(function(p){return p.name===s.name;});
                  return s.pos===needed&&notPicked;
                }).map(function(s){
                  return e('button',{key:s.name,onClick:function(){
                    setFantasyTeam(function(t){return t.filter(function(p){return p.pos!==fantasyPos;}).concat([{name:s.name,flag:s.flag,club:s.club,pos:fantasyPos,rating:s.rating}]);});
                    setFantasyPos(null);
                  },style:{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:8,padding:'6px 8px',fontSize:10,color:'#eee',cursor:'pointer',textAlign:'left',display:'flex',gap:5,alignItems:'center'}},
                    e('span',{style:{fontSize:15}},s.flag),
                    e('div',null,
                      e('div',{style:{fontSize:10,fontWeight:'bold',color:'#eee',lineHeight:1.2}},s.name),
                      e('div',{style:{fontSize:8,color:'#6a86a0'}},s.club||''),
                      e('div',{style:{fontSize:9,color:'#d4af37'}},s.rating+' ⭐')
                    )
                  );
                })
              ),
              e('button',{onClick:function(){setFantasyPos(null);},style:{width:'100%',background:'rgba(255,60,60,0.1)',border:'1px solid rgba(255,60,60,0.3)',borderRadius:7,padding:'6px 0',fontSize:10,color:'#ff6b6b',cursor:'pointer',marginTop:6}},
                lang==='fr'?'Annuler':lang==='es'?'Cancelar':lang==='pt'?'Cancelar':'Cancel')
            ),

            // PROGRESS + BUTTONS
            e('div',{style:{textAlign:'center',fontSize:10,color:fantasyTeam.length>=11?'#90ee90':'#6a86a0',marginBottom:8}},
              (lang==='fr'?'Joueurs sélectionnés':lang==='es'?'Jugadores':lang==='pt'?'Jogadores':'Players')+
              ': '+fantasyTeam.length+'/'+allSlots.length+' '+(fantasyTeam.length>=allSlots.length?'✅':'')
            ),
            e('div',{style:{display:'flex',gap:8}},
              e('button',{onClick:function(){
                if(fantasyTeam.length>=allSlots.length){
                  setFantasyDone(true);
                  try{localStorage.setItem('wc2026_fantasy_team',JSON.stringify(fantasyTeam));localStorage.setItem('wc2026_fantasy_done','true');}catch(err){}
                }
              },style:{flex:2,background:fantasyTeam.length>=allSlots.length?'linear-gradient(135deg,#d4af37,#ff9900)':'rgba(212,175,55,0.1)',
                border:'2px solid '+(fantasyTeam.length>=allSlots.length?'#d4af37':'rgba(212,175,55,0.2)'),
                borderRadius:12,padding:'13px 0',fontSize:12,fontWeight:'bold',
                color:fantasyTeam.length>=allSlots.length?'#0a0a1a':'#6a86a0',cursor:fantasyTeam.length>=allSlots.length?'pointer':'default',transition:'all 0.3s'}},
                fantasyTeam.length<allSlots.length
                  ?(lang==='fr'?'Sélectionner '+fantasyTeam.length+'/'+allSlots.length:lang==='es'?'Selecciona '+fantasyTeam.length+'/'+allSlots.length:'Select '+fantasyTeam.length+'/'+allSlots.length)
                  :fantasyDone?'✅ '+(lang==='fr'?'Equipe sauvegardée !':'Team saved !')
                  :'💾 '+(lang==='fr'?'Sauvegarder':'Save')),
              e('button',{onClick:function(){
                setFantasyTeam([]);setFantasyPos(null);setFantasyDone(false);
                try{localStorage.removeItem('wc2026_fantasy_team');localStorage.removeItem('wc2026_fantasy_done');}catch(err){}
              },style:{flex:1,background:'rgba(255,60,60,0.1)',border:'1px solid rgba(255,60,60,0.3)',borderRadius:12,padding:'13px 0',fontSize:12,color:'#ff6b6b',cursor:'pointer',fontWeight:'bold'}},
              '🗑️ Reset')
            )

          ); // end return
        })() // end IIFE

      ):null,

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
          e('div',{style:{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:6,marginBottom:12}},
            [
              {i:0,icon:'🏟️',label:{en:'Stadiums',fr:'Stades',es:'Estadios',pt:'Estadios',it:'Stadi',de:'Stadien'}},
              {i:1,icon:'⭐',label:{en:'Legends',fr:'Légendes',es:'Leyendas',pt:'Lendas',it:'Leggende',de:'Legenden'}},
              {i:2,icon:'🌤️',label:{en:'Weather',fr:'Météo',es:'Tiempo',pt:'Tempo',it:'Meteo',de:'Wetter'}},
              {i:7,icon:'🗺️',label:{en:'Cities',fr:'Villes',es:'Ciudades',pt:'Cidades',it:'Città',de:'Städte'}}
            ].map(function(t){
              return e('button',{key:t.i,onClick:function(){setProTab(t.i);},
                style:{background:proTab===t.i?'linear-gradient(135deg,'+G+',#b8963e)':'rgba(255,255,255,0.05)',
                  border:'1px solid '+(proTab===t.i?G:BD),borderRadius:10,padding:'10px 4px',
                  fontSize:10,fontWeight:'bold',color:proTab===t.i?'#0a0a1a':G,cursor:'pointer'}},
                t.icon,' ',t.label[lang]||t.label.en);
            })
          ),
          e('div',{style:{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:6,marginBottom:14}},
            [
              {i:3,icon:'📊',label:{en:'H2H',fr:'Face/Face',es:'H2H',pt:'H2H',it:'H2H',de:'H2H'}},
              {i:6,icon:'🎙️',label:{en:'Stories',fr:'Histoires',es:'Historias',pt:'Histórias',it:'Storie',de:'Geschichten'}},
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
                    e('div',{style:{fontSize:10,color:s.alt>1000?'#ff9944':s.alt>500?'#ffcc44':'#5a7090'}},
                      s.matches,' matches',s.final?' • 🏆 FINAL':'',
                      ' • 🏔️ ',s.alt,'m',s.alt>1000?' ⚠️':''
                    )
                  ),
                  e('div',{style:{fontSize:18}},selectedStadium===i?'▲':'▼')
                ),
                selectedStadium===i&&e('div',{style:{marginTop:10,paddingTop:10,borderTop:'1px solid rgba(212,175,55,0.2)'}},
                  s.img&&e('img',{src:s.img,alt:s.name,loading:'lazy',
                    style:{width:'100%',height:160,objectFit:'cover',borderRadius:10,marginBottom:10,display:'block'}}),
                  e('div',{style:{display:'flex',gap:8,flexWrap:'wrap',marginBottom:8}},
                    e('span',{style:{background:'rgba(212,175,55,0.1)',border:'1px solid rgba(212,175,55,0.3)',borderRadius:8,padding:'4px 10px',fontSize:9,color:G}},
                      '⛳ '+({en:'Surface',fr:'Surface',es:'Superficie',pt:'Superfície',it:'Superficie',de:'Belag'}[lang]||'Surface')+': '+s.surface),
                    e('span',{style:{background:'rgba(0,80,200,0.1)',border:'1px solid rgba(0,80,200,0.3)',borderRadius:8,padding:'4px 10px',fontSize:9,color:'#7ab0ff'}},
                      '🏠 '+({en:'Roof',fr:'Toit',es:'Techo',pt:'Teto',it:'Tetto',de:'Dach'}[lang]||'Roof')+': '+s.roof),
                    e('span',{style:{background:'rgba(40,160,40,0.1)',border:'1px solid rgba(40,160,40,0.3)',borderRadius:8,padding:'4px 10px',fontSize:9,color:'#90ee90'}},s.flag+' '+s.country),
                    e('span',{style:{background:s.alt>1000?'rgba(255,100,0,0.15)':s.alt>500?'rgba(255,200,0,0.1)':'rgba(100,150,255,0.1)',border:'1px solid '+(s.alt>1000?'rgba(255,100,0,0.5)':s.alt>500?'rgba(255,200,0,0.4)':'rgba(100,150,255,0.3)'),borderRadius:8,padding:'4px 10px',fontSize:9,color:s.alt>1000?'#ff9944':s.alt>500?'#ffdd44':'#99bbff'}},
                      '🏔️ '+({en:'Altitude',fr:'Altitude',es:'Altitud',pt:'Altitude',it:'Altitudine',de:'Höhe'}[lang]||'Altitude')+': '+s.alt+'m'+(s.alt>1000?' ⚠️':''))
                  ),
                  e('div',{style:{fontSize:9,color:'#6a86a0',marginBottom:6,fontWeight:'bold',textTransform:'uppercase',letterSpacing:1}},
                    {en:'Key Facts',fr:'Points Clés',es:'Datos Clave',pt:'Factos Chave',it:'Fatti Chiave',de:'Fakten'}[lang]||'Key Facts'),
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
                      e('div',{style:{fontSize:9,color:'#6a86a0'}},lang==='fr'?'BUTS':lang==='es'?'GOLES':lang==='pt'?'GOLOS':lang==='it'?'GOL':lang==='de'?'TORE':'GOALS')
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

          // ── GUIDE VILLES HÔTES ──
          proTab===7&&e('div',null,
            e('div',{style:{fontSize:11,color:G,fontWeight:'bold',marginBottom:4,textAlign:'center'}},
              '🗺️ '+({en:'16 HOST CITIES — WORLD CUP 2026',fr:'16 VILLES HÔTES — COUPE DU MONDE 2026',es:'16 CIUDADES SEDE — COPA DEL MUNDO 2026',pt:'16 CIDADES SEDE — COPA DO MUNDO 2026',it:'16 CITTÀ OSPITANTI — COPPA DEL MONDO 2026',de:'16 GASTGEBERSTÄDTE — WM 2026'}[lang]||'16 HOST CITIES — WORLD CUP 2026')
            ),
            e('div',{style:{fontSize:9,color:'#6a86a0',textAlign:'center',marginBottom:10}},
              {en:'Practical guide for fans travelling to matches',fr:'Guide pratique pour les fans qui voyagent aux matchs',es:'Guía práctica para aficionados que viajan a los partidos',pt:'Guia prático para adeptos que viajam aos jogos',it:'Guida pratica per i tifosi che viaggiano alle partite',de:'Praktischer Leitfaden für Fans, die zu Spielen reisen'}[lang]||'Practical guide for fans'
            ),
            CITY_GUIDE.map(function(c,i){
              return e('div',{key:i,
                onClick:function(){setSelectedCity(selectedCity===i?null:i);},
                style:{background:CB,border:'1px solid '+(selectedCity===i?G:BD),borderRadius:12,padding:'12px 14px',marginBottom:8,cursor:'pointer'}},
                e('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center'}},
                  e('div',{style:{display:'flex',gap:10,alignItems:'center'}},
                    e('div',{style:{fontSize:28}},c.flag),
                    e('div',null,
                      e('div',{style:{fontSize:13,fontWeight:'bold',color:G}},c.city),
                      e('div',{style:{fontSize:10,color:'#6a86a0',marginTop:1}},c.stadium,' • ',c.cap.toLocaleString(),' seats'),
                      e('div',{style:{fontSize:9,color:'rgba(212,175,55,0.5)',marginTop:1}},'🕐 ',c.tz,' • ✈️ ',c.airport)
                    )
                  ),
                  e('div',{style:{fontSize:16}},selectedCity===i?'▲':'▼')
                ),
                selectedCity===i&&e('div',{style:{marginTop:12,paddingTop:12,borderTop:'1px solid rgba(212,175,55,0.2)'}},
                  CITY_IMAGES[i]&&e('div',{style:{position:'relative',marginBottom:10,borderRadius:10,overflow:'hidden'}},
                    e('img',{src:CITY_IMAGES[i],alt:c.city,loading:'lazy',
                      onError:function(ev){ev.target.parentNode.style.display='none';},
                      style:{width:'100%',height:180,objectFit:'cover',objectPosition:CITY_POS[i]||'center center',display:'block'}}),
                    e('div',{style:{position:'absolute',bottom:0,left:0,right:0,height:50,
                      background:'linear-gradient(transparent,rgba(0,0,0,0.7))',
                      display:'flex',alignItems:'flex-end',padding:'0 10px 8px'}},
                      e('span',{style:{color:'#fff',fontSize:11,fontWeight:'bold',textShadow:'0 1px 3px rgba(0,0,0,0.8)'}},c.flag+' '+c.city)
                    )
                  ),
                  e('div',{style:{display:'flex',flexDirection:'column',gap:8}},
                    e('div',{style:{background:'rgba(0,80,200,0.08)',border:'1px solid rgba(0,80,200,0.2)',borderRadius:8,padding:'8px 10px'}},
                      e('div',{style:{fontSize:9,color:'#7ab0ff',fontWeight:'bold',marginBottom:4}},'🚌 '+({en:'Getting there',fr:'Comment y aller',es:'Cómo llegar',pt:'Como chegar',it:'Come arrivare',de:'Anreise'}[lang]||'Getting there')),
                      e('div',{style:{fontSize:10,color:'#c0d0e0',lineHeight:1.6}},c.transport[lang]||c.transport.en)
                    ),
                    e('div',{style:{background:'rgba(40,160,40,0.08)',border:'1px solid rgba(40,160,40,0.2)',borderRadius:8,padding:'8px 10px'}},
                      e('div',{style:{fontSize:9,color:'#90ee90',fontWeight:'bold',marginBottom:4}},'💡 '+({en:'Practical tips',fr:'Conseils pratiques',es:'Consejos prácticos',pt:'Dicas práticas',it:'Consigli pratici',de:'Praktische Tipps'}[lang]||'Practical tips')),
                      e('div',{style:{fontSize:10,color:'#c0d0e0',lineHeight:1.6}},c.tip[lang]||c.tip.en)
                    ),
                    e('div',{style:{background:'rgba(212,100,0,0.08)',border:'1px solid rgba(212,100,0,0.2)',borderRadius:8,padding:'8px 10px'}},
                      e('div',{style:{fontSize:9,color:'#ffaa44',fontWeight:'bold',marginBottom:4}},'🍽️ '+({en:'Local food',fr:'Cuisine locale',es:'Comida local',pt:'Comida local',it:'Cucina locale',de:'Lokale Küche'}[lang]||'Local food')),
                      e('div',{style:{fontSize:10,color:'#c0d0e0',lineHeight:1.6}},c.food[lang]||c.food.en)
                    )
                  )
                )
              );
            })
          ),

          // ── HISTOIRES LÉGENDAIRES ──
          proTab===6&&e('div',null,
            e('div',{style:{fontSize:11,color:G,fontWeight:'bold',marginBottom:10,textAlign:'center'}},
              '🎙️ '+({en:'LEGENDARY STORIES',fr:'HISTOIRES LÉGENDAIRES',es:'HISTORIAS LEGENDARIAS',pt:'HISTÓRIAS LENDÁRIAS',it:'STORIE LEGGENDARIE',de:'LEGENDÄRE GESCHICHTEN'}[lang]||'LEGENDARY STORIES')
            ),
            STORIES.map(function(s,i){
              return e('div',{key:i,
                onClick:function(){setSelectedStory(selectedStory===i?null:i);},
                style:{background:CB,border:'1px solid '+(selectedStory===i?G:BD),borderRadius:12,padding:'12px 14px',marginBottom:8,cursor:'pointer'}},
                e('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center'}},
                  e('div',{style:{display:'flex',gap:12,alignItems:'center'}},
                    e('div',{style:{fontSize:32,lineHeight:1}},s.flag),
                    e('div',null,
                      e('div',{style:{fontSize:13,fontWeight:'bold',color:G}},s.title[lang]||s.title.en),
                      e('div',{style:{fontSize:10,color:'#6a86a0',marginTop:2}},s.sub[lang]||s.sub.en),
                      e('div',{style:{fontSize:9,color:'rgba(212,175,55,0.5)',marginTop:2}},'📅 ',s.year)
                    )
                  ),
                  e('div',{style:{display:'flex',flexDirection:'column',alignItems:'center',gap:4}},
                    e('div',{style:{fontSize:20}},s.emoji),
                    e('div',{style:{fontSize:16}},selectedStory===i?'▲':'▼')
                  )
                ),
                selectedStory===i&&e('div',{style:{marginTop:12,paddingTop:12,borderTop:'1px solid rgba(212,175,55,0.2)'}},
                  e('div',{style:{fontSize:11,color:'#c8dae8',lineHeight:1.7,fontStyle:'italic'}},s.story[lang]||s.story.en)
                )
              );
            })
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
