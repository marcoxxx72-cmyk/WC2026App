# Goalkeeper PRO Animation 2-pièces — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remplacer le sprite Three.js rigide du gardien PRO par un overlay HTML/CSS 2 pièces (torse + jambes) qui plie le corps lors des plongeons au lieu de tomber d'un bloc.

**Architecture:** On cache `kSpriteMesh` (Three.js) et on ajoute un `<div>` overlay positionné en `fixed` au-dessus du canvas fullscreen. L'image `goalkeeper.png` est chargée deux fois : une fois clippée sur le haut (torse, 58%), une fois sur le bas (jambes, 42%). Chaque moitié pivote autour de la ligne de taille (waist) via `transform-origin: 50% 58%`.

**Tech Stack:** React (window.React, UMD), Three.js r152, CSS animations, clip-path, `app.js` vanilla JS.

---

## Fichier modifié

`~/Desktop/WC2026App/app.js` — uniquement la fonction `PenaltyPitch` (lignes ~397–1420).

---

## Référence image

`goalkeeper.png` : 680×1024px. À `width: 150px` → hauteur display = **226px**.
- Coupure taille : **58%** depuis le haut = 131px depuis le haut
- Torse (haut) : `clip-path: inset(0 0 42% 0)` — montre les 131px supérieurs
- Jambes (bas) : `clip-path: inset(58% 0 0 0)` — montre les 95px inférieurs
- `transform-origin: 50% 58%` sur les DEUX éléments (même point physique = taille)

---

## Task 1 : Ajouter gkAnim state + injecter CSS `.gkpro-*`

**Files:**
- Modify: `app.js` — dans `PenaltyPitch`, section hooks et useEffect init

- [ ] **Localiser les hooks existants dans PenaltyPitch**

Ouvre `app.js`. Vers la ligne 397, tu verras :
```javascript
function PenaltyPitch(props){
  var useState=React.useState, useEffect=React.useEffect, useRef=React.useRef, useCallback=React.useCallback;
  var [phase,setPhase]=useState('idle');
  var [result,setResult]=useState(null);
  var [fullscreen,setFullscreen]=useState(false);
  var [ready,setReady]=useState(false);
  var [vph,setVph]=useState(window.innerHeight);
  var threeRef=useRef(null);
  var containerRef=useRef(null);
  var powerBarRef=useRef(null);
```

- [ ] **Ajouter gkAnim state et gkAnimRef juste après les hooks existants**

Ajoute ces deux lignes immédiatement après `var powerBarRef=useRef(null);` :
```javascript
  var [gkAnim,setGkAnim]=useState('idle');
  var gkAnimRef=useRef(setGkAnim);
  gkAnimRef.current=setGkAnim;
```

- [ ] **Trouver le useEffect d'initialisation Three.js**

Cherche la ligne qui contient `useEffect(function(){` suivie de `var W=containerRef.current.offsetWidth`. C'est là que Three.js est initialisé (vers ligne ~480).

- [ ] **Ajouter un useEffect séparé AVANT le useEffect Three.js pour injecter les styles CSS**

Ajoute ce bloc entre les déclarations de hooks et le useEffect Three.js :
```javascript
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
      // ── diveLA (lucarne gauche) ──
      '@keyframes gkpro-upper-diveLA{0%{transform:rotate(0) translateY(0)}100%{transform:translateX(-90px) rotate(-65deg) translateY(-30px)}}',
      '@keyframes gkpro-lower-diveLA{0%{transform:rotate(0)}100%{transform:rotate(15deg)}}',
      '.gkpro-wrap.gkpro-diveLA{transform:translateX(-50%);}',
      '.gkpro-wrap.gkpro-diveLA .gkpro-upper{animation:gkpro-upper-diveLA .42s cubic-bezier(.2,0,.4,1) forwards;}',
      '.gkpro-wrap.gkpro-diveLA .gkpro-lower{animation:gkpro-lower-diveLA .42s cubic-bezier(.2,0,.4,1) forwards;}',
      // ── diveLB (bas gauche) ──
      '@keyframes gkpro-upper-diveLB{0%{transform:rotate(0)}100%{transform:translateX(-120px) rotate(-75deg)}}',
      '@keyframes gkpro-lower-diveLB{0%{transform:rotate(0)}100%{transform:rotate(20deg)}}',
      '.gkpro-wrap.gkpro-diveLB .gkpro-upper{animation:gkpro-upper-diveLB .42s cubic-bezier(.2,0,.4,1) forwards;}',
      '.gkpro-wrap.gkpro-diveLB .gkpro-lower{animation:gkpro-lower-diveLB .42s cubic-bezier(.2,0,.4,1) forwards;}',
      // ── diveRA (lucarne droite) ──
      '@keyframes gkpro-upper-diveRA{0%{transform:rotate(0) translateY(0)}100%{transform:translateX(90px) rotate(65deg) translateY(-30px)}}',
      '@keyframes gkpro-lower-diveRA{0%{transform:rotate(0)}100%{transform:rotate(-15deg)}}',
      '.gkpro-wrap.gkpro-diveRA .gkpro-upper{animation:gkpro-upper-diveRA .42s cubic-bezier(.2,0,.4,1) forwards;}',
      '.gkpro-wrap.gkpro-diveRA .gkpro-lower{animation:gkpro-lower-diveRA .42s cubic-bezier(.2,0,.4,1) forwards;}',
      // ── diveRB (bas droite) ──
      '@keyframes gkpro-upper-diveRB{0%{transform:rotate(0)}100%{transform:translateX(120px) rotate(75deg)}}',
      '@keyframes gkpro-lower-diveRB{0%{transform:rotate(0)}100%{transform:rotate(-20deg)}}',
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
```

- [ ] **Vérifier : ouvrir `http://localhost:8080/?pro=1` dans le navigateur, aller dans l'onglet penalty tournament**

Aucun changement visuel attendu à ce stade. Ouvrir DevTools → Elements → `<head>` → vérifier que `<style id="gkpro-styles">` est présent. Aucune erreur console.

- [ ] **Commit**

```bash
cd ~/Desktop/WC2026App
git add app.js
git commit -m "feat: inject gkpro CSS styles + gkAnim state dans PenaltyPitch"
```

---

## Task 2 : Ajouter l'overlay HTML goalkeeper dans le rendu fullscreen

**Files:**
- Modify: `app.js` — dans le `return` de `PenaltyPitch`, section fullscreen overlay

- [ ] **Localiser la section fullscreen overlay dans le return de PenaltyPitch**

Cherche vers la ligne 1392 :
```javascript
fullscreen&&e('div',{style:{position:'fixed',top:0,left:0,right:0,bottom:0,pointerEvents:'none',zIndex:10000}},
  e('button',{style:{position:'absolute',top:18,right:18,...},onClick:...},'✕ ESC'),
```

- [ ] **Ajouter le goalkeeper overlay DANS ce div fullscreen, après le bouton ESC**

Ajoute après la ligne du bouton ESC, avant `(phase==='aim')&&e('div',...)` :
```javascript
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
```

Note : `className` est l'attribut React/UMD pour `class`. Dans ce codebase qui utilise `e()` = `React.createElement`, les attributs HTML standard (comme `className`, `style`) sont passés directement.

- [ ] **Vérifier visuellement**

Aller dans le jeu PRO fullscreen. Tu devrais voir :
1. Le gardien Three.js existant (sprite)
2. EN PLUS : le gardien CSS overlay (même image, deux fois, superposée)

Les deux gardiens sont visibles ensemble — c'est normal à ce stade. Le gardien CSS est identique en apparence au Three.js, positionné à `bottom: 20%`.

Si le gardien CSS est trop haut ou trop bas, ajuste `bottom:'20%'` à `'18%'` ou `'22%'`.

- [ ] **Commit**

```bash
git add app.js
git commit -m "feat: ajouter overlay HTML goalkeeper 2-pièces dans PenaltyPitch fullscreen"
```

---

## Task 3 : Cacher kSpriteMesh + connecter kSprite.setDive au gkAnim state

**Files:**
- Modify: `app.js` — dans le useEffect Three.js de `PenaltyPitch`

- [ ] **Localiser kSprite dans le useEffect Three.js**

Cherche vers la ligne 977 :
```javascript
    var kSprite={
      mesh:kSpriteMesh,
      gloveL:gloveL,gloveR:gloveR,
      setDive:function(dir){},
      setIdle:function(){}
    };
```

- [ ] **Mettre kSpriteMesh invisible**

Juste AVANT la déclaration `var kSprite=...`, ajoute :
```javascript
    kSpriteMesh.visible=false;
```

- [ ] **Connecter setDive et setIdle au gkAnimRef**

Remplace la déclaration `var kSprite=...` par :
```javascript
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
```

- [ ] **Stocker kAnim dans thr lors du fireShot**

Cherche dans `fireShot` (vers ligne 1237) la ligne :
```javascript
      var stateMap={L:variant==='A'?'diveLA':'diveLB',C:Math.random()<0.5?'jump':'catch',R:variant==='A'?'diveRA':'diveRB'};
      var kAnim=stateMap[kDir];
```

Ajoute immédiatement après `var kAnim=stateMap[kDir];` :
```javascript
      thr.kAnim=kAnim;
```

- [ ] **Vérifier : aller dans le jeu PRO fullscreen et tirer**

- Le gardien Three.js (sprite) a disparu
- Le gardien CSS overlay est visible (seul)
- En mode idle : balancement CSS visible
- Quand tu tires : le gardien CSS se plie (torse vers le ballon, jambes en arrière)

- [ ] **Commit**

```bash
git add app.js
git commit -m "feat: cacher kSpriteMesh, connecter kSprite.setDive/setIdle à gkAnim CSS"
```

---

## Task 4 : Reset animation après chaque tir

**Files:**
- Modify: `app.js` — section reset dans `animate()`, vers ligne 1200

- [ ] **Localiser le reset Three.js après résultat**

Cherche vers la ligne 1200 :
```javascript
        thr.phase='idle';thr.result=null;thr.aimPoint=null;thr.animFrame=0;thr.power=0;thr.curveAccum=0;
        ball.position.set(BS.x,BS.y,BS.z);ball.rotation.set(0,0,0);
        ...
        kSprite.setIdle();
```

- [ ] **Vérifier que kSprite.setIdle() est appelé**

`kSprite.setIdle()` est déjà présent vers ligne 1204. Notre `setIdle` dans la Task 3 appelle `gkAnimRef.current('idle')`. Le gardien doit revenir en idle après chaque tir.

Si `kSprite.setIdle()` n'est pas dans la liste de reset, ajoute-le après `gloveL.visible=false;gloveR.visible=false;` :
```javascript
        kSprite.setIdle();
```

- [ ] **Tirer 5 fois de suite et vérifier**

Chaque tir doit :
1. Gardien anime en plongeon (torse + jambes séparés)
2. Après ~2.4 secondes, gardien revient en idle (balancement)
3. Répéter — aucun freeze, aucun blocage

- [ ] **Commit**

```bash
git add app.js
git commit -m "feat: reset gardien CSS vers idle après chaque tir"
```

---

## Task 5 : Calibration visuelle et test iPhone

**Files:**
- Modify: `app.js` — valeurs `bottom`, angles CSS si nécessaire

- [ ] **Vérifier la position verticale du gardien**

En fullscreen, le gardien doit avoir les pieds à la ligne du sol (même niveau que le gardien Three.js l'avait). Si besoin, ajuste le `bottom` dans le JSX (`'20%'` → ajuster).

La position correcte : les pieds du gardien touchent le sol de la pelouse 3D. Teste avec `bottom: '18%'`, `'20%'`, `'22%'` et garde la valeur qui semble naturelle.

- [ ] **Vérifier les 6 animations**

Tire plusieurs fois et observe :
- `diveLA` (lucarne gauche) : torse pivote haut-gauche, jambes droite
- `diveLB` (bas gauche) : torse pivot gauche horizontal, jambes droite
- `diveRA` (lucarne droite) : torse haut-droite
- `diveRB` (bas droite) : torse horizontal droite
- `jump` : gardien saute verticalement, torse monte
- `catch` : gardien se penche légèrement

Si un angle semble trop dramatique ou insuffisant, ajuste dans le CSS injecté (ex: `-65deg` → `-55deg` pour diveLA).

- [ ] **Push et test sur iPhone**

```bash
cd ~/Desktop/WC2026App
git add app.js
git push
```

Attendre ~2 min le déploiement Vercel, puis tester sur iPhone avec l'URL PRO.

Vérifier :
- Plongeon fluide (pas de freeze)
- Corps se plie naturellement à la taille
- Torse part vers le ballon
- Idle balancement visible entre les tirs

- [ ] **Commit final si ajustements**

```bash
git add app.js
git commit -m "fix: calibration position et angles gardien PRO CSS 2-pièces"
git push
```

---

## Checklist de non-régression

Avant de considérer le travail terminé :

- [ ] Jeu Higuita (Tab 8) toujours fonctionnel — aucun style `.gkpro-*` ne le pollue
- [ ] Scoreboard Three.js visible et correct (buts / arrêts)
- [ ] Confettis s'affichent sur un but
- [ ] Sons goal/save fonctionnent
- [ ] 5 tirs complets sans freeze sur iPhone
- [ ] Résultats QUALIFIED/ELIMINATED s'affichent correctement après le round
