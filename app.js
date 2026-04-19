var useState = React.useState;
var useEffect = React.useEffect;
var e = React.createElement;
var G = '#d4af37';
var DARK = '#08091a';
var CB = 'rgba(12,24,54,0.9)';
var BD = 'rgba(212,175,55,0.22)';

var LANGS = [{code:'en',label:'EN'},{code:'fr',label:'FR'},{code:'es',label:'ES'},{code:'pt',label:'PT'},{code:'it',label:'IT'},{code:'de',label:'DE'}];

// ── TEAM DATA PER LANGUAGE ─────────────────────────────────────
var MY_TEAM = {
  en:{team:'England',group:'L',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',color:'rgba(0,36,125,0.4)'},
  fr:{team:'France',group:'I',flag:'🇫🇷',color:'rgba(0,35,149,0.4)'},
  es:{team:'Spain',group:'H',flag:'🇪🇸',color:'rgba(170,0,0,0.4)'},
  pt:{team:'Portugal',group:'K',flag:'🇵🇹',color:'rgba(0,102,0,0.4)'},
  it:{team:'Italy',group:null,flag:'🇮🇹',color:'rgba(0,82,156,0.4)'},
  de:{team:'Germany',group:'E',flag:'🇩🇪',color:'rgba(0,0,0,0.4)'}
};

var GROUPS = {
  A:{teams:['Mexico','South Africa','South Korea','Czech Republic'],host:true,hostName:'Mexico'},
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

var ALL_TEAMS = Object.values(GROUPS).reduce(function(a,g){return a.concat(g.teams);},[]).sort();

// ── FIXTURES ──────────────────────────────────────────────────
var FIXTURES = [
  {date:'2026-06-11',time:'20:00',home:'Mexico',away:'??',group:'A',stadium:'Estadio Azteca',city:'Mexico City'},
  {date:'2026-06-12',time:'15:00',home:'USA',away:'??',group:'D',stadium:'SoFi Stadium',city:'Los Angeles'},
  {date:'2026-06-12',time:'18:00',home:'Canada',away:'??',group:'B',stadium:'BMO Field',city:'Toronto'},
  {date:'2026-06-13',time:'15:00',home:'France',away:'Iraq',group:'I',stadium:'MetLife Stadium',city:'New York'},
  {date:'2026-06-13',time:'18:00',home:'Germany',away:'Curacao',group:'E',stadium:'AT&T Stadium',city:'Dallas'},
  {date:'2026-06-13',time:'21:00',home:'Spain',away:'Cape Verde',group:'H',stadium:'Hard Rock Stadium',city:'Miami'},
  {date:'2026-06-14',time:'15:00',home:'England',away:'Panama',group:'L',stadium:'Gillette Stadium',city:'Boston'},
  {date:'2026-06-14',time:'18:00',home:'Portugal',away:'Uzbekistan',group:'K',stadium:'Levi\'s Stadium',city:'San Francisco'},
  {date:'2026-06-14',time:'21:00',home:'Argentina',away:'Jordan',group:'J',stadium:'Rose Bowl',city:'Los Angeles'},
  {date:'2026-06-15',time:'15:00',home:'Brazil',away:'Haiti',group:'C',stadium:'SoFi Stadium',city:'Los Angeles'},
  {date:'2026-06-15',time:'18:00',home:'Norway',away:'Senegal',group:'I',stadium:'MetLife Stadium',city:'New York'},
  {date:'2026-06-15',time:'21:00',home:'Italy',away:'??',group:null,stadium:null,city:null},
  {date:'2026-06-16',time:'15:00',home:'Netherlands',away:'Tunisia',group:'F',stadium:'Arrowhead Stadium',city:'Kansas City'},
  {date:'2026-06-16',time:'18:00',home:'Belgium',away:'New Zealand',group:'G',stadium:'Mercedes-Benz',city:'Atlanta'},
  {date:'2026-06-16',time:'21:00',home:'South Korea',away:'Czech Republic',group:'A',stadium:'Estadio Azteca',city:'Mexico City'},
  {date:'2026-07-11',time:'20:00',home:'Semi-Final 1',away:'Semi-Final 2',group:'SF',stadium:'MetLife Stadium',city:'New York'},
  {date:'2026-07-14',time:'20:00',home:'3rd Place',away:'3rd Place',group:'3P',stadium:'AT&T Stadium',city:'Dallas'},
  {date:'2026-07-19',time:'20:00',home:'FINAL',away:'FINAL',group:'F',stadium:'MetLife Stadium',city:'New York'}
];

// ── STARS WITH AVATARS ─────────────────────────────────────────
var STARS = [
  {name:'Kylian Mbappe',flag:'🇫🇷',club:'Real Madrid',pos:'FW',age:27,stat:'46 intl goals',rating:96,group:'I',hair:'#1a1a1a',skin:'#c8a882',shirt:'#ffffff'},
  {name:'Erling Haaland',flag:'🇳🇴',club:'Man. City',pos:'FW',age:25,stat:'44 intl goals',rating:95,group:'I',hair:'#f5d78e',skin:'#f5c5a3',shirt:'#6cabdd'},
  {name:'Vinicius Jr.',flag:'🇧🇷',club:'Real Madrid',pos:'FW',age:25,stat:'Ballon dOr nominee 2024',rating:94,group:'C',hair:'#1a1a1a',skin:'#8d5524',shirt:'#ffffff'},
  {name:'Pedri',flag:'🇪🇸',club:'FC Barcelona',pos:'MF',age:23,stat:'Euro 2024 champion',rating:93,group:'H',hair:'#3d2b1f',skin:'#d4a574',shirt:'#a50044'},
  {name:'Jude Bellingham',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',club:'Real Madrid',pos:'MF',age:22,stat:'Best player Euro 2024',rating:93,group:'L',hair:'#1a1a1a',skin:'#8d5524',shirt:'#ffffff'},
  {name:'Rodri',flag:'🇪🇸',club:'Man. City',pos:'MF',age:29,stat:'Ballon dOr 2024',rating:92,group:'H',hair:'#2c1810',skin:'#c8a882',shirt:'#6cabdd'},
  {name:'Lamine Yamal',flag:'🇪🇸',club:'FC Barcelona',pos:'FW',age:18,stat:'Euro 2024 champion',rating:92,group:'H',hair:'#1a1a1a',skin:'#c8a882',shirt:'#a50044'},
  {name:'Cristiano Ronaldo',flag:'🇵🇹',club:'Al Nassr',pos:'FW',age:41,stat:'915 career goals',rating:90,group:'K',hair:'#1a1a1a',skin:'#d4a574',shirt:'#006600'}
];

// ── TRANSLATIONS ───────────────────────────────────────────────
var T = {
  en:{appTitle:'World Cup 2026',appSub:'USA - CANADA - MEXICO',nav:['Home','Groups','Fixtures','Predictions','Quiz','Stars','Polls'],countdown:'Countdown',timeUnits:['Days','Hours','Min','Sec'],keyInfo:['Host nations','Teams','Matches','Duration'],keyVals:['3 nations','48 teams','104 matches','Jun 11-Jul 19'],format:'Tournament Format',formatLines:['12 groups of 4 teams','1st + 2nd + 8 best 3rds = 32 teams','Round of 32 > 16 > QF > SF > Final','Opening: Estadio Azteca, Mexico City','Final: MetLife Stadium, New York'],groupsTitle:'48 TEAMS - 12 GROUPS',hostLabel:'Host',groupLabel:'Group',myTeamLabel:'My Team',pickTeam:'Pick your team',pronoSub:'Who will reach the final?',pronoWinner:'World Champion 2026',pronoFinal:'Runner-up',pronoSemi:'Semi-finalists',pronoSave:'Save',pronoSaved:'Saved!',pronoReset:'Reset',pronoChoose:'Choose...',pronoMyPick:'My pick',quizSub:'Test your knowledge!',quizScore:'Score',quizNext:'Next question',quizFinish:'See result',quizRestart:'Play again',quizPerfect:'PERFECT! You are an expert!',quizGood:'Great job!',quizAvg:'Not bad!',quizBad:'Keep studying!',starsSub:'Players to watch',pollTitle:'Polls',pollTotal:'votes',didYouKnow:'Did you know?',facts:['Italy miss the 2026 World Cup for 2nd time','Azteca hosts its 3rd World Cup','First-ever 48-team World Cup','First edition co-hosted by 3 countries','104 matches vs 64 in 2022','New IFAB rules in effect'],shareApp:'Share',shareCopied:'Link copied!',premiumBanner:'Go PREMIUM - Predictions + Stats + No ads',premiumBtn:'Unlock',fixturesTitle:'FIXTURES & RESULTS',fixturesAll:'All matches',fixturesMy:'My team only',noFixtures:'No fixtures found'},
  fr:{appTitle:'Mundial 2026',appSub:'ETATS-UNIS - CANADA - MEXIQUE',nav:['Accueil','Groupes','Calendrier','Pronostics','Quiz','Stars','Sondages'],countdown:'Compte a rebours',timeUnits:['Jours','Heures','Min','Sec'],keyInfo:['Pays hotes','Equipes','Matchs','Duree'],keyVals:['3 nations','48 equipes','104 matchs','11 juin-19 juil.'],format:'Format du tournoi',formatLines:['12 groupes de 4 equipes','1er + 2e + 8 meilleurs 3es = 32 equipes','Tour des 32 > 16e > QF > SF > Finale','Ouverture: Estadio Azteca, Mexico','Finale: MetLife Stadium, New York'],groupsTitle:'48 EQUIPES - 12 GROUPES',hostLabel:'Pays hote',groupLabel:'Groupe',myTeamLabel:'Mon Equipe',pickTeam:'Choisir mon equipe',pronoSub:'Qui ira en finale?',pronoWinner:'Champion du Monde 2026',pronoFinal:'Finaliste',pronoSemi:'Demi-finales',pronoSave:'Sauvegarder',pronoSaved:'Sauvegarde!',pronoReset:'Reinitialiser',pronoChoose:'Choisir...',pronoMyPick:'Mon choix',quizSub:'Testez vos connaissances!',quizScore:'Score',quizNext:'Question suivante',quizFinish:'Voir mon resultat',quizRestart:'Rejouer',quizPerfect:'PARFAIT! Tu es un expert!',quizGood:'Tres bien!',quizAvg:'Pas mal!',quizBad:'Continue a reviser!',starsSub:'Les joueurs a suivre',pollTitle:'Sondages',pollTotal:'votes',didYouKnow:'Le saviez-vous?',facts:["L Italie rate le Mondial 2026 pour la 2e fois","L Azteca accueille son 3e Mondial","1er Mondial a 48 equipes","1ere edition co-organisee par 3 pays","104 matchs contre 64 en 2022","Nouvelles regles IFAB effectives"],shareApp:'Partager',shareCopied:'Lien copie!',premiumBanner:'Passez PREMIUM - Pronostics + Stats + Sans pub',premiumBtn:'Debloquer',fixturesTitle:'CALENDRIER & RESULTATS',fixturesAll:'Tous les matchs',fixturesMy:'Mon equipe uniquement',noFixtures:'Aucun match trouve'},
  es:{appTitle:'Mundial 2026',appSub:'EE.UU. - CANADA - MEXICO',nav:['Inicio','Grupos','Calendario','Pronosticos','Quiz','Estrellas','Sondeos'],countdown:'Cuenta regresiva',timeUnits:['Dias','Horas','Min','Seg'],keyInfo:['Paises anfitriones','Equipos','Partidos','Duracion'],keyVals:['3 naciones','48 equipos','104 partidos','11 jun-19 jul'],format:'Formato del torneo',formatLines:['12 grupos de 4 equipos','1 + 2 + 8 mejores 3eros = 32 equipos','Ronda de 32 > 16avos > QF > SF > Final','Apertura: Estadio Azteca, Mexico','Final: MetLife Stadium, Nueva York'],groupsTitle:'48 EQUIPOS - 12 GRUPOS',hostLabel:'Anfitri',groupLabel:'Grupo',myTeamLabel:'Mi Equipo',pickTeam:'Elegir mi equipo',pronoSub:'Quien llegara a la final?',pronoWinner:'Campeon del Mundo 2026',pronoFinal:'Finalista',pronoSemi:'Semifinalistas',pronoSave:'Guardar',pronoSaved:'Guardado!',pronoReset:'Reiniciar',pronoChoose:'Elegir...',pronoMyPick:'Mi eleccion',quizSub:'Pon a prueba tus conocimientos!',quizScore:'Puntuacion',quizNext:'Siguiente',quizFinish:'Ver resultado',quizRestart:'Jugar de nuevo',quizPerfect:'Perfecto! Eres un experto!',quizGood:'Muy bien!',quizAvg:'Nada mal!',quizBad:'Sigue estudiando!',starsSub:'Jugadores a seguir',pollTitle:'Sondeos',pollTotal:'votos',didYouKnow:'Sabias que?',facts:['Italia se pierde el Mundial 2026 por 2a vez','El Azteca acoge su 3er Mundial','El primer Mundial con 48 equipos','Primera edicion organizada por 3 paises','104 partidos frente a 64 en 2022','Nuevas reglas del IFAB en vigor'],shareApp:'Compartir',shareCopied:'Enlace copiado!',premiumBanner:'Hazte PREMIUM - Pronosticos + Estadisticas + Sin anuncios',premiumBtn:'Desbloquear',fixturesTitle:'CALENDARIO Y RESULTADOS',fixturesAll:'Todos los partidos',fixturesMy:'Solo mi equipo',noFixtures:'No se encontraron partidos'},
  pt:{appTitle:'Mundial 2026',appSub:'EUA - CANADA - MEXICO',nav:['Inicio','Grupos','Calendario','Palpites','Quiz','Estrelas','Enquetes'],countdown:'Contagem regressiva',timeUnits:['Dias','Horas','Min','Seg'],keyInfo:['Paises anfitrioes','Selecoes','Jogos','Duracao'],keyVals:['3 nacoes','48 selecoes','104 jogos','11 jun-19 jul'],format:'Formato do torneio',formatLines:['12 grupos de 4 selecoes','1 + 2 + 8 melhores 3eiros = 32 equipes','Rodada de 32 > 16 > QF > SF > Final','Abertura: Estadio Azteca, Mexico','Final: MetLife Stadium, Nova York'],groupsTitle:'48 SELECOES - 12 GRUPOS',hostLabel:'Anfitriao',groupLabel:'Grupo',myTeamLabel:'Meu Time',pickTeam:'Escolher meu time',pronoSub:'Quem vai chegar a final?',pronoWinner:'Campeao do Mundo 2026',pronoFinal:'Vice-campeao',pronoSemi:'Semifinalistas',pronoSave:'Salvar',pronoSaved:'Salvo!',pronoReset:'Reiniciar',pronoChoose:'Escolher...',pronoMyPick:'Minha escolha',quizSub:'Teste seus conhecimentos!',quizScore:'Pontuacao',quizNext:'Proxima',quizFinish:'Ver resultado',quizRestart:'Jogar novamente',quizPerfect:'Perfeito! Voce e um expert!',quizGood:'Muito bem!',quizAvg:'Nada mal!',quizBad:'Continue estudando!',starsSub:'Jogadores para acompanhar',pollTitle:'Enquetes',pollTotal:'votos',didYouKnow:'Voce sabia?',facts:['A Italia perde a Copa 2026 pela 2a vez','O Azteca sedia sua 3a Copa','Primeira Copa com 48 selecoes','Primeira edicao organizada por 3 paises','104 jogos contra 64 em 2022','Novas regras do IFAB em vigor'],shareApp:'Compartilhar',shareCopied:'Link copiado!',premiumBanner:'Seja PREMIUM - Palpites + Estatisticas + Sem anuncios',premiumBtn:'Desbloquear',fixturesTitle:'CALENDARIO E RESULTADOS',fixturesAll:'Todos os jogos',fixturesMy:'Apenas meu time',noFixtures:'Nenhum jogo encontrado'},
  it:{appTitle:'Mondiale 2026',appSub:'USA - CANADA - MESSICO',nav:['Home','Gruppi','Calendario','Pronostici','Quiz','Stelle','Sondaggi'],countdown:'Conto alla rovescia',timeUnits:['Giorni','Ore','Min','Sec'],keyInfo:['Paesi ospitanti','Squadre','Partite','Durata'],keyVals:['3 nazioni','48 squadre','104 partite','11 giu-19 lug'],format:'Formato del torneo',formatLines:['12 gironi da 4 squadre','1a + 2a + 8 migliori 3e = 32 squadre','Fase a 32 > 16 > QF > SF > Finale','Apertura: Estadio Azteca, Messico','Finale: MetLife Stadium, New York'],groupsTitle:'48 SQUADRE - 12 GIRONI',hostLabel:'Sede',groupLabel:'Girone',myTeamLabel:'La Mia Squadra',pickTeam:'Scegli la tua squadra',pronoSub:'Chi arrivera in finale?',pronoWinner:'Campione del Mondo 2026',pronoFinal:'Finalista',pronoSemi:'Semifinalisti',pronoSave:'Salva',pronoSaved:'Salvato!',pronoReset:'Azzera',pronoChoose:'Scegli...',pronoMyPick:'La mia scelta',quizSub:'Metti alla prova le tue conoscenze!',quizScore:'Punteggio',quizNext:'Domanda successiva',quizFinish:'Vedi risultato',quizRestart:'Gioca ancora',quizPerfect:'Perfetto! Sei un esperto!',quizGood:'Molto bene!',quizAvg:'Niente male!',quizBad:'Continua a studiare!',starsSub:'I giocatori da seguire',pollTitle:'Sondaggi',pollTotal:'voti',didYouKnow:'Lo sapevi?',facts:["L Italia non e al Mondiale 2026 per la 2a volta","L Azteca ospita il suo 3o Mondiale","Primo Mondiale con 48 squadre","Prima edizione co-organizzata da 3 paesi","104 partite contro 64 nel 2022","Nuove regole IFAB in vigore"],shareApp:'Condividi',shareCopied:'Link copiato!',premiumBanner:'Diventa PREMIUM - Pronostici + Statistiche + Senza pub',premiumBtn:'Sblocca',fixturesTitle:'CALENDARIO E RISULTATI',fixturesAll:'Tutte le partite',fixturesMy:'Solo la mia squadra',noFixtures:'Nessuna partita trovata'},
  de:{appTitle:'WM 2026',appSub:'USA - KANADA - MEXIKO',nav:['Start','Gruppen','Spielplan','Tipps','Quiz','Stars','Umfragen'],countdown:'Countdown',timeUnits:['Tage','Stunden','Min','Sek'],keyInfo:['Gastgeberlaender','Teams','Spiele','Dauer'],keyVals:['3 Nationen','48 Teams','104 Spiele','11. Jun-19. Jul'],format:'Turnierformat',formatLines:['12 Gruppen mit je 4 Teams','1. + 2. + 8 beste 3. = 32 Teams','Runde der 32 > 16 > VF > HF > Finale','Eroeffnung: Estadio Azteca, Mexiko','Finale: MetLife Stadium, New York'],groupsTitle:'48 TEAMS - 12 GRUPPEN',hostLabel:'Gastgeber',groupLabel:'Gruppe',myTeamLabel:'Mein Team',pickTeam:'Mein Team auswaehlen',pronoSub:'Wer kommt ins Finale?',pronoWinner:'Weltmeister 2026',pronoFinal:'Finalist',pronoSemi:'Halbfinalisten',pronoSave:'Speichern',pronoSaved:'Gespeichert!',pronoReset:'Zuruecksetzen',pronoChoose:'Auswaehlen...',pronoMyPick:'Meine Wahl',quizSub:'Teste dein Wissen!',quizScore:'Punkte',quizNext:'Naechste Frage',quizFinish:'Ergebnis sehen',quizRestart:'Nochmal spielen',quizPerfect:'Perfekt! Du bist ein Experte!',quizGood:'Sehr gut!',quizAvg:'Nicht schlecht!',quizBad:'Weiter lernen!',starsSub:'Spieler zum Beobachten',pollTitle:'Umfragen',pollTotal:'Stimmen',didYouKnow:'Wusstest du?',facts:['Italien verpasst die WM 2026 zum 2. Mal','Das Azteca beherbergt seine 3. WM','Erste WM mit 48 Teams','Erste WM von 3 Laendern gemeinsam ausgerichtet','104 Spiele gegen 64 in 2022','Neue IFAB-Regeln in Kraft'],shareApp:'Teilen',shareCopied:'Link kopiert!',premiumBanner:'PREMIUM werden - Tipps + Statistiken + Werbefrei',premiumBtn:'Freischalten',fixturesTitle:'SPIELPLAN & ERGEBNISSE',fixturesAll:'Alle Spiele',fixturesMy:'Nur mein Team',noFixtures:'Keine Spiele gefunden'}
};

var QUIZ = {
  en:[{q:'How many teams in the 2026 World Cup?',opts:['32','40','48','56'],a:2},{q:'Which stadium hosts the Final?',opts:['Azteca','AT&T Stadium','MetLife Stadium','SoFi Stadium'],a:2},{q:'Which country is NOT a host?',opts:['USA','Canada','Mexico','Brazil'],a:3},{q:'Which group is ENGLAND in?',opts:['Group A','Group C','Group J','Group L'],a:3},{q:'Who won the 2024 Ballon dOr?',opts:['Mbappe','Bellingham','Rodri','Vinicius'],a:2},{q:'How many total matches?',opts:['64','80','96','104'],a:3},{q:'Which stadium hosts the opening match?',opts:['MetLife','Azteca','AT&T Stadium','BC Place'],a:1},{q:'Which country has won the most World Cups?',opts:['Germany','Italy','Brazil','Argentina'],a:2},{q:'Which country won the 2022 World Cup?',opts:['France','Brazil','Croatia','Argentina'],a:3},{q:'Which Norwegian player is a Group I star?',opts:['Odegaard','Haaland','Sorloth','King'],a:1}],
  fr:[{q:'Combien d equipes au Mondial 2026?',opts:['32','40','48','56'],a:2},{q:'Dans quel stade se joue la finale?',opts:['Azteca','AT&T Stadium','MetLife Stadium','SoFi Stadium'],a:2},{q:'Quel pays n est PAS organisateur?',opts:['Etats-Unis','Canada','Mexique','Bresil'],a:3},{q:'Dans quel groupe evolue la FRANCE?',opts:['Groupe A','Groupe C','Groupe G','Groupe I'],a:3},{q:'Qui a remporte le Ballon d Or 2024?',opts:['Mbappe','Bellingham','Rodri','Vinicius'],a:2},{q:'Combien de matchs au total?',opts:['64','80','96','104'],a:3},{q:'Quel stade accueille le match d ouverture?',opts:['MetLife','Azteca','AT&T Stadium','BC Place'],a:1},{q:'Qui est le selectionneur de la France?',opts:['Zidane','Deschamps','Blanc','Wenger'],a:1},{q:'Quel pays a remporte le Mondial 2022?',opts:['France','Bresil','Croatie','Argentine'],a:3},{q:'Quel joueur norvegien est star du groupe I?',opts:['Odegaard','Haaland','Sorloth','King'],a:1}],
  es:[{q:'Cuantos equipos en el Mundial 2026?',opts:['32','40','48','56'],a:2},{q:'En que estadio se juega la final?',opts:['Azteca','AT&T Stadium','MetLife Stadium','SoFi Stadium'],a:2},{q:'Que pais NO es organizador?',opts:['EE.UU.','Canada','Mexico','Brasil'],a:3},{q:'En que grupo esta ESPANA?',opts:['Grupo A','Grupo C','Grupo H','Grupo I'],a:2},{q:'Quien gano el Balon de Oro 2024?',opts:['Mbappe','Bellingham','Rodri','Vinicius'],a:2},{q:'Cuantos partidos en total?',opts:['64','80','96','104'],a:3},{q:'Que estadio acoge el partido inaugural?',opts:['MetLife','Azteca','AT&T Stadium','BC Place'],a:1},{q:'Quien es el seleccionador de Espana?',opts:['Enrique','De la Fuente','Valverde','Ancelotti'],a:1},{q:'Que pais gano el Mundial 2022?',opts:['Francia','Brasil','Croacia','Argentina'],a:3},{q:'Que jugador noruego es estrella del Grupo I?',opts:['Odegaard','Haaland','Sorloth','King'],a:1}],
  pt:[{q:'Quantas selecoes na Copa 2026?',opts:['32','40','48','56'],a:2},{q:'Em qual estadio e a final?',opts:['Azteca','AT&T Stadium','MetLife Stadium','SoFi Stadium'],a:2},{q:'Qual pais NAO e sede?',opts:['EUA','Canada','Mexico','Brasil'],a:3},{q:'Em qual grupo esta PORTUGAL?',opts:['Grupo A','Grupo C','Grupo K','Grupo I'],a:2},{q:'Quem ganhou a Bola de Ouro 2024?',opts:['Mbappe','Bellingham','Rodri','Vinicius'],a:2},{q:'Quantos jogos no total?',opts:['64','80','96','104'],a:3},{q:'Qual estadio recebe a abertura?',opts:['MetLife','Azteca','AT&T Stadium','BC Place'],a:1},{q:'Quem e o treinador de Portugal?',opts:['Santos','Martinez','Conceicao','Mourinho'],a:1},{q:'Qual pais ganhou a Copa 2022?',opts:['Franca','Brasil','Croacia','Argentina'],a:3},{q:'Qual jogador noruegues e estrela do Grupo I?',opts:['Odegaard','Haaland','Sorloth','King'],a:1}],
  it:[{q:'Quante squadre al Mondiale 2026?',opts:['32','40','48','56'],a:2},{q:'In quale stadio si gioca la finale?',opts:['Azteca','AT&T Stadium','MetLife Stadium','SoFi Stadium'],a:2},{q:'Quale paese NON e organizzatore?',opts:['USA','Canada','Messico','Brasile'],a:3},{q:'L ITALIA e qualificata al Mondiale 2026?',opts:['Si nel Girone A','Si nel Girone B','No eliminata','Si nel Girone C'],a:2},{q:'Chi ha vinto il Pallone d Or 2024?',opts:['Mbappe','Bellingham','Rodri','Vinicius'],a:2},{q:'Quante partite in totale?',opts:['64','80','96','104'],a:3},{q:'Quale stadio ospita la partita inaugurale?',opts:['MetLife','Azteca','AT&T Stadium','BC Place'],a:1},{q:'Chi e il ct della Francia?',opts:['Zidane','Deschamps','Blanc','Wenger'],a:1},{q:'Quale paese ha vinto il Mondiale 2022?',opts:['Francia','Brasile','Croazia','Argentina'],a:3},{q:'Quale giocatore norvegese e stella del Girone I?',opts:['Odegaard','Haaland','Sorloth','King'],a:1}],
  de:[{q:'Wie viele Teams nehmen an der WM 2026 teil?',opts:['32','40','48','56'],a:2},{q:'In welchem Stadion findet das Finale statt?',opts:['Azteca','AT&T Stadium','MetLife Stadium','SoFi Stadium'],a:2},{q:'Welches Land ist KEIN Gastgeber?',opts:['USA','Kanada','Mexiko','Brasilien'],a:3},{q:'In welcher Gruppe spielt DEUTSCHLAND?',opts:['Gruppe A','Gruppe C','Gruppe E','Gruppe I'],a:2},{q:'Wer hat den Ballon d Or 2024 gewonnen?',opts:['Mbappe','Bellingham','Rodri','Vinicius'],a:2},{q:'Wie viele Spiele gibt es insgesamt?',opts:['64','80','96','104'],a:3},{q:'Welches Stadion eroffnet das Turnier?',opts:['MetLife','Azteca','AT&T Stadium','BC Place'],a:1},{q:'Wer trainiert Deutschland?',opts:['Low','Flick','Nagelsmann','Klopp'],a:2},{q:'Welches Land hat die WM 2022 gewonnen?',opts:['Frankreich','Brasilien','Kroatien','Argentinien'],a:3},{q:'Welcher norwegische Spieler ist ein Star der Gruppe I?',opts:['Odegaard','Haaland','Sorloth','King'],a:1}]
};

var POLLS = {
  en:[{id:'p1',q:'Who will be World Champion 2026?',opts:['England','Argentina','Spain','Brazil'],votes:[1580,1240,980,1100]},{id:'p2',q:'Who will be the best player?',opts:['Mbappe','Haaland','Vinicius','Bellingham'],votes:[2100,1300,980,760]},{id:'p3',q:'Will ENGLAND reach the Final?',opts:['Yes champion','Yes finalist','Semi-final','Group stage'],votes:[1200,800,600,150]}],
  fr:[{id:'p1',q:'Qui sera champion du Monde 2026?',opts:['France','Argentine','Espagne','Bresil'],votes:[1240,1580,980,1100]},{id:'p2',q:'Quel sera le meilleur joueur?',opts:['Mbappe','Haaland','Vinicius','Bellingham'],votes:[2100,1300,980,760]},{id:'p3',q:'La FRANCE ira-t-elle en finale?',opts:['Oui championne','Oui finaliste','Demi-finale','Phase de groupes'],votes:[1200,800,600,150]}],
  es:[{id:'p1',q:'Quien sera campeon del Mundo 2026?',opts:['Espana','Argentina','Francia','Brasil'],votes:[1580,1240,980,1100]},{id:'p2',q:'Quien sera el mejor jugador?',opts:['Mbappe','Haaland','Vinicius','Bellingham'],votes:[2100,1300,980,760]},{id:'p3',q:'Llegara ESPANA a la Final?',opts:['Si campeona','Si finalista','Semifinal','Fase de grupos'],votes:[1200,800,600,150]}],
  pt:[{id:'p1',q:'Quem sera campeao do Mundo 2026?',opts:['Portugal','Argentina','Franca','Brasil'],votes:[1580,1240,980,1100]},{id:'p2',q:'Quem sera o melhor jogador?',opts:['Mbappe','Haaland','Vinicius','Bellingham'],votes:[2100,1300,980,760]},{id:'p3',q:'PORTUGAL chegara a Final?',opts:['Sim campeao','Sim finalista','Semifinal','Fase de grupos'],votes:[1200,800,600,150]}],
  it:[{id:'p1',q:'Chi sara campione del Mondo 2026?',opts:['Argentina','Francia','Spagna','Brasile'],votes:[1580,1240,980,1100]},{id:'p2',q:'Chi sara il miglior giocatore?',opts:['Mbappe','Haaland','Vinicius','Bellingham'],votes:[2100,1300,980,760]},{id:'p3',q:'L ITALIA tornera al Mondiale 2030?',opts:['Certamente','Probabilmente','Forse','No'],votes:[1200,800,600,150]}],
  de:[{id:'p1',q:'Wer wird Weltmeister 2026?',opts:['Deutschland','Argentinien','Spanien','Brasilien'],votes:[1580,1240,980,1100]},{id:'p2',q:'Wer wird der beste Spieler?',opts:['Mbappe','Haaland','Vinicius','Bellingham'],votes:[2100,1300,980,760]},{id:'p3',q:'Kommt DEUTSCHLAND ins Finale?',opts:['Ja Weltmeister','Ja Finalist','Halbfinale','Gruppenphase'],votes:[1200,800,600,150]}]
};

var AFFILIATES = {
  en:[{name:'Bet365',desc:'Up to 200 GBP',url:'https://www.bet365.com',color:'#027b5b'},{name:'Sky Bet',desc:'30 GBP free bets',url:'https://m.skybet.com',color:'#0077C0'},{name:'William Hill',desc:'30 GBP free bet',url:'https://www.williamhill.com',color:'#7B0000'}],
  fr:[{name:'Winamax',desc:'Jusqu a 200EUR',url:'https://www.winamax.fr',color:'#e8251f'},{name:'Unibet',desc:'Jusqu a 150EUR',url:'https://www.unibet.fr',color:'#009B00'},{name:'PMU',desc:'200EUR de bonus',url:'https://www.pmu.fr',color:'#006AB3'}],
  es:[{name:'Codere',desc:'Hasta 200EUR',url:'https://www.codere.es',color:'#c8002d'},{name:'Bet365',desc:'Bono bienvenida',url:'https://www.bet365.com',color:'#027b5b'},{name:'Betway',desc:'100EUR gratis',url:'https://betway.es',color:'#1a1f71'}],
  pt:[{name:'Bet365',desc:'Bonus boas-vindas',url:'https://www.bet365.com',color:'#027b5b'},{name:'Betclic',desc:'Ate 200EUR',url:'https://www.betclic.pt',color:'#ff6600'},{name:'Betway',desc:'100EUR gratis',url:'https://betway.com/pt',color:'#1a1f71'}],
  it:[{name:'Sisal',desc:'Fino a 25EUR',url:'https://www.sisal.it',color:'#e20025'},{name:'Snai',desc:'Fino a 100EUR',url:'https://www.snai.it',color:'#003580'},{name:'Bet365',desc:'Bonus benvenuto',url:'https://www.bet365.com',color:'#027b5b'}],
  de:[{name:'Tipico',desc:'100EUR Bonus',url:'https://www.tipico.de',color:'#e30613'},{name:'Bet3000',desc:'Bis zu 100EUR',url:'https://www.bet3000.com',color:'#003366'},{name:'Bet365',desc:'Willkommensbonus',url:'https://www.bet365.com',color:'#027b5b'}]
};

var STRIPE_EUR = 'https://buy.stripe.com/REMPLACE_EUR';
var STRIPE_GBP = 'https://buy.stripe.com/REMPLACE_GBP';
function getPrice(lang){return lang==='en'?'1.99 GBP':'1,99 EUR';}
function getStripeLink(lang){return lang==='en'?STRIPE_GBP:STRIPE_EUR;}

// ── FIFA CARD STYLE ──────────────────────────────────────────
function PlayerAvatar(props){
  var s=props.star;
  var cardColor=s.rating>=96?'linear-gradient(135deg,#d4af37,#ff9900)':
                s.rating>=94?'linear-gradient(135deg,#c0c0c0,#e8e8e8)':
                s.rating>=92?'linear-gradient(135deg,#cd7f32,#e8a857)':
                'linear-gradient(135deg,#1a3a6b,#2a5a9b)';
  var textColor=s.rating>=92?'#0a0a1a':'#ffffff';
  return e('div',{style:{width:64,height:84,borderRadius:10,background:cardColor,flexShrink:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:4,boxShadow:'0 4px 12px rgba(0,0,0,0.4)',position:'relative'}},
    e('div',{style:{fontSize:18,fontWeight:'bold',color:textColor,lineHeight:1}},s.rating),
    e('div',{style:{fontSize:7,color:textColor,opacity:0.8,marginBottom:3}},s.pos),
    e('div',{style:{fontSize:16,marginBottom:2}},s.flag),
    e('div',{style:{fontSize:7,fontWeight:'bold',color:textColor,textAlign:'center',lineHeight:1.2,maxWidth:58,overflow:'hidden'}},s.name.split(' ').pop()),
    e('div',{style:{fontSize:6,color:textColor,opacity:0.7,marginTop:1}},s.club.substring(0,10))
  );
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

  var t=T[lang];
  var questions=QUIZ[lang];
  var polls=POLLS[lang];
  var affiliates=AFFILIATES[lang];
  var defaultTeam=MY_TEAM[lang];

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

  var activeTeam=myTeam||defaultTeam;

  var filteredFixtures=fixtureMyOnly?FIXTURES.filter(function(f){return f.home===activeTeam.team||f.away===activeTeam.team;}):FIXTURES;

  function formatDate(d){var dt=new Date(d);return dt.toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'});}

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

    e('nav',{style:{position:'sticky',top:0,zIndex:20,display:'flex',justifyContent:'center',flexWrap:'wrap',gap:3,background:'rgba(6,9,26,0.97)',backdropFilter:'blur(14px)',padding:'7px 10px',borderBottom:'1px solid rgba(212,175,55,0.16)'}},
      t.nav.map(function(label,i){return e('button',{key:i,onClick:function(){setTab(i);},style:{background:tab===i?'linear-gradient(135deg,'+G+',#b8963e)':'transparent',color:tab===i?'#0a0a1a':'#7a96b0',border:tab===i?'none':'1px solid rgba(212,175,55,0.25)',borderRadius:18,padding:'5px 11px',fontSize:11,cursor:'pointer',fontWeight:tab===i?'bold':'normal'}},label);})
    ),

    e('main',{style:{padding:'16px 13px',maxWidth:740,margin:'0 auto'}},

      // ── HOME ──
      tab===0&&e('div',null,
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
                team,grp&&e('span',{style:{fontSize:9,color:G,marginLeft:4}},'('+grp+')')
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
              e('span',{style:{fontSize:12,fontWeight:isMyTeam?'bold':'normal'}},team),
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
      ),

      // ── GROUPS ──
      tab===1&&e('div',null,
        e('div',{style:{fontSize:10,color:G,marginBottom:12,textAlign:'center',letterSpacing:2}},t.groupsTitle),
        e('div',{style:{display:'flex',flexWrap:'wrap',gap:5,justifyContent:'center',marginBottom:15}},
          Object.keys(GROUPS).map(function(g){return e('button',{key:g,onClick:function(){setSelGroup(g);},style:{width:32,height:32,borderRadius:7,background:selGroup===g?'linear-gradient(135deg,'+G+',#b8963e)':'rgba(10,20,50,0.88)',border:selGroup===g?'none':'1px solid rgba(212,175,55,0.24)',color:selGroup===g?'#0a0a1a':G,fontSize:12,fontWeight:'bold',cursor:'pointer'}},g);})
        ),
        e(Card,{style:{marginBottom:14,border:'1px solid '+G}},
          e('div',{style:{fontSize:15,fontWeight:'bold',color:G,marginBottom:11,textAlign:'center'}},t.groupLabel,' ',selGroup,GROUPS[selGroup].host&&e('span',{style:{fontSize:9,color:'#6a86a0',marginLeft:8}},'(',t.hostLabel,': ',GROUPS[selGroup].hostName,')')),
          GROUPS[selGroup].teams.map(function(team,i){
            var isMyTeam=team===activeTeam.team;
            return e('div',{key:team,style:{display:'flex',alignItems:'center',gap:10,background:isMyTeam?'rgba(212,175,55,0.14)':i===0&&GROUPS[selGroup].host?'rgba(212,175,55,0.08)':'rgba(255,255,255,0.04)',border:'1px solid '+(isMyTeam?G:'rgba(212,175,55,0.1)'),borderRadius:9,padding:'10px 13px',marginBottom:7}},
              e('div',{style:{width:22,height:22,borderRadius:5,flexShrink:0,background:isMyTeam?G:i===0&&GROUPS[selGroup].host?G:'rgba(212,175,55,0.18)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:10,fontWeight:'bold',color:isMyTeam||i===0&&GROUPS[selGroup].host?'#0a0a1a':G}},i+1),
              e('span',{style:{fontSize:13,fontWeight:isMyTeam?'bold':'normal'}},team),
              isMyTeam&&e('span',{style:{marginLeft:'auto',fontSize:9,color:G,background:'rgba(212,175,55,0.15)',padding:'2px 7px',borderRadius:8}},'⭐ '+t.myTeamLabel),
              !isMyTeam&&i===0&&GROUPS[selGroup].host&&e('span',{style:{marginLeft:'auto',fontSize:9,color:G,background:'rgba(212,175,55,0.12)',padding:'2px 7px',borderRadius:8}},t.hostLabel)
            );
          })
        ),
        e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:7}},
          Object.entries(GROUPS).map(function(entry){var g=entry[0];var data=entry[1];var hasMyTeam=data.teams.indexOf(activeTeam.team)>=0;return e('div',{key:g,onClick:function(){setSelGroup(g);},style:{background:hasMyTeam?'rgba(212,175,55,0.12)':g===selGroup?'rgba(212,175,55,0.09)':'rgba(10,20,50,0.8)',border:'1px solid '+(hasMyTeam?G:g===selGroup?G:BD),borderRadius:10,padding:10,cursor:'pointer'}},e('div',{style:{fontSize:10,fontWeight:'bold',color:G,marginBottom:5}},t.groupLabel,' ',g,hasMyTeam&&' ⭐'),data.teams.map(function(team){return e('div',{key:team,style:{fontSize:9,color:team===activeTeam.team?G:'#90aabf',marginBottom:2,fontWeight:team===activeTeam.team?'bold':'normal'}},team);}));})
        )
      ),

      // ── FIXTURES ──
      tab===2&&e('div',null,
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
                e('div',{style:{fontSize:9,color:isMyMatch?G:'#6a86a0'}},formatDate(f.date),' ',f.time,' UTC',f.group&&' - '+t.groupLabel+' '+f.group),
                isMyMatch&&e('span',{style:{fontSize:9,color:G,background:'rgba(212,175,55,0.15)',padding:'2px 6px',borderRadius:6}},'⭐ '+t.myTeamLabel)
              ),
              e('div',{style:{display:'flex',alignItems:'center',justifyContent:'space-between'}},
                e('div',{style:{flex:1,textAlign:'left',fontSize:13,fontWeight:f.home===activeTeam.team?'bold':'normal',color:f.home===activeTeam.team?G:'#eee8d5'}},f.home),
                e('div',{style:{padding:'4px 12px',background:'rgba(212,175,55,0.15)',borderRadius:8,fontSize:12,fontWeight:'bold',color:G,margin:'0 8px'}},'VS'),
                e('div',{style:{flex:1,textAlign:'right',fontSize:13,fontWeight:f.away===activeTeam.team?'bold':'normal',color:f.away===activeTeam.team?G:'#eee8d5'}},f.away)
              ),
              f.stadium&&e('div',{style:{fontSize:9,color:'#5a7090',marginTop:6}},f.stadium,' - ',f.city)
            );
          })
        )
      ),

      // ── PREDICTIONS ──
      tab===3&&e('div',null,
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
      ),

      // ── QUIZ ──
      tab===4&&e('div',null,
        e('div',{style:{fontSize:10,color:G,marginBottom:14,textAlign:'center'}},t.quizSub),
        !quizDone?e('div',null,
          e('div',{style:{marginBottom:14}},
            e('div',{style:{display:'flex',justifyContent:'space-between',fontSize:10,color:'#6a86a0',marginBottom:6}},e('span',null,qIdx+1,' / ',questions.length),e('span',null,t.quizScore,': ',score)),
            e('div',{style:{height:4,background:'rgba(255,255,255,0.08)',borderRadius:2,overflow:'hidden'}},e('div',{style:{width:(qIdx/questions.length*100)+'%',height:'100%',background:'linear-gradient(90deg,'+G+',#ff9900)',borderRadius:2,transition:'width 0.4s'}}))
          ),
          e(Card,{style:{marginBottom:13,padding:20,textAlign:'center'}},e('div',{style:{fontSize:14,fontWeight:'bold',lineHeight:1.5,color:'#fff'}},questions[qIdx].q)),
          e('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:14}},
            questions[qIdx].opts.map(function(opt,i){
              var bg=CB,brd=BD,col='#eee8d5';
              if(answered){if(i===questions[qIdx].a){bg='rgba(40,160,40,0.25)';brd='rgba(40,200,40,0.6)';col='#90ee90';}else if(i===selected){bg='rgba(200,40,40,0.25)';brd='rgba(200,60,60,0.6)';col='#ff8888';}}
              return e('button',{key:i,onClick:function(){handleAnswer(i);},style:{background:bg,border:'1px solid '+brd,borderRadius:10,padding:'12px 10px',fontSize:12,color:col,cursor:answered?'default':'pointer',textAlign:'center',fontWeight:answered&&i===questions[qIdx].a?'bold':'normal'}},answered&&i===questions[qIdx].a?'OK ':answered&&i===selected&&i!==questions[qIdx].a?'X ':'',opt);
            })
          ),
          answered&&e('button',{onClick:nextQ,style:{width:'100%',background:'linear-gradient(135deg,'+G+',#b8963e)',border:'none',borderRadius:10,padding:'12px 0',fontSize:13,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer'}},qIdx<questions.length-1?t.quizNext:t.quizFinish)
        ):e('div',{style:{textAlign:'center'}},
          e('div',{style:{background:'linear-gradient(135deg,rgba(212,175,55,0.18),rgba(184,150,62,0.08))',border:'1.5px solid '+G,borderRadius:18,padding:28,marginBottom:16}},
            e('div',{style:{fontSize:40,marginBottom:12}},score===questions.length?'🏆':score>=questions.length*0.7?'⭐':score>=questions.length*0.4?'👍':'📚'),
            e('div',{style:{fontSize:22,fontWeight:'bold',color:G}},score,'/',questions.length),
            e('div',{style:{fontSize:13,color:'#eee',marginTop:8}},getMsg(score))
          ),
          e('button',{onClick:resetQuiz,style:{background:'linear-gradient(135deg,'+G+',#b8963e)',border:'none',borderRadius:10,padding:'13px 40px',fontSize:14,fontWeight:'bold',color:'#0a0a1a',cursor:'pointer'}},t.quizRestart)
        )
      ),

      // ── STARS with AVATARS ──
      tab===5&&e('div',null,
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
                e('div',{style:{display:'flex',alignItems:'center',gap:6}},
                  e('div',{style:{flex:1,height:4,background:'rgba(255,255,255,0.1)',borderRadius:2,overflow:'hidden'}},e('div',{style:{width:((s.rating-85)/15*100)+'%',height:'100%',background:'linear-gradient(90deg,'+G+',#ff9900)',borderRadius:2}})),
                  e('span',{style:{fontSize:11,color:G,fontWeight:'bold',minWidth:24}},s.rating)
                )
              ),
              i===0&&e('div',{style:{position:'absolute',right:12,top:12,fontSize:16}},'🏆')
            );
          })
        )
      ),

      // ── POLLS ──
      tab===6&&e('div',null,
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
      )
    ),

    !premium&&e('div',{style:{background:'rgba(2,5,15,0.95)',borderTop:'1px solid rgba(212,175,55,0.15)',padding:'8px 14px',textAlign:'center'}},
      e('div',{style:{fontSize:8,color:'#3a5070',marginBottom:4}},'ADVERTISEMENT'),
      e('div',{style:{display:'flex',justifyContent:'space-around',flexWrap:'wrap',gap:8}},
        affiliates.map(function(a){return e('a',{key:a.name,href:a.url,target:'_blank',rel:'noopener sponsored',style:{background:a.color,borderRadius:8,padding:'6px 12px',textDecoration:'none',display:'flex',flexDirection:'column',alignItems:'center',minWidth:80}},e('div',{style:{fontSize:11,fontWeight:'bold',color:'#fff'}},a.name),e('div',{style:{fontSize:9,color:'rgba(255,255,255,0.85)',marginTop:2}},a.desc));})
      )
    ),

    e('footer',{style:{textAlign:'center',padding:'10px',fontSize:9,color:'#2e4460',borderTop:'1px solid rgba(212,175,55,0.08)',marginTop:4}},'World Cup 2026 Fan App - ',premium?'PRO':'Free')
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
