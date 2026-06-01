# Design — Gardien PRO Animation 2 pièces
**Date :** 2026-06-01  
**Projet :** WC2026App — Jeu Penalty PRO  
**Fichier cible :** `~/Desktop/WC2026App/app.js`  
**Composant cible :** `PenaltyPitch` (ligne ~397)

---

## Contexte

Le gardien PRO est actuellement un `THREE.Mesh` (PlaneGeometry) avec `goalkeeper.png` comme texture. Pendant un plongeon, le mesh pivote autour de son centre (`rotation.z` max ~72°) ce qui donne un effet "arbre qui tombe" — rigide, non naturel. L'image `goalkeeper.png` a été générée en 2 jours et doit être conservée intacte.

---

## Décision

Remplacer le sprite Three.js par un overlay HTML/CSS à 2 pièces positionné au-dessus du canvas Three.js. Three.js conserve tout le reste (pelouse, cage, ballon, stade, confettis, scoreboard).

---

## Architecture

### Ce qui change
- `kSpriteMesh.visible = false` — le sprite Three.js est caché définitivement
- Un `<div class="gkpro-wrap">` est rendu par React, positionné `absolute` sur le canvas
- `kSprite.setDive(dir)` et `kSprite.setIdle()` déclenchent des setState React

### Ce qui ne change pas
- Toute la scène Three.js (ballon, cage, pelouse, stade, scoreboard, confettis)
- La logique de tir (`shootDir`, `fireShot`, résultat goal/saved)
- Le jeu Higuita (Tab 8) — aucune interférence

---

## Structure HTML de l'overlay

```
<div class="gkpro-wrap">          ← conteneur positionné sur le canvas
  <div class="gkpro-upper">       ← torse + tête (58% haut de l'image)
    <img src="/goalkeeper.png">
  </div>
  <div class="gkpro-lower">       ← jambes (42% bas de l'image)
    <img src="/goalkeeper.png">
  </div>
</div>
```

### Positionnement
- `.gkpro-wrap` : `position: absolute`, `bottom: 22%`, `left: 50%`, `transform: translateX(-50%)`
- Largeur gardien : `150px` (identique au sprite Three.js actuel)
- `.gkpro-upper` : clip `inset(0 0 42% 0)`, `transform-origin: bottom center`
- `.gkpro-lower` : clip `inset(58% 0 0 0)`, `transform-origin: top center`

---

## États d'animation (6)

| État | Durée | Torse | Jambes | translateX |
|---|---|---|---|---|
| `idle` | ∞ loop | balancement ±3° sinusoïdal | fixe | sin wave ±14px |
| `diveLA` | 0.42s | rotate(-65deg) translateY(-30px) | rotate(+15deg) | -90px |
| `diveLB` | 0.42s | rotate(-75deg) | rotate(+20deg) | -120px |
| `diveRA` | 0.42s | rotate(+65deg) translateY(-30px) | rotate(-15deg) | +90px |
| `diveRB` | 0.42s | rotate(+75deg) | rotate(-20deg) | +120px |
| `jump` | 0.5s | translateY(-80px) | rotate(-10deg) | 0 |
| `catch` | 0.4s | rotate(-25deg) translateY(+10px) | rotate(+12deg) | 0 |

*A = lucarne (haut), B = bas — correspond exactement aux états du code existant*

---

## Timing synchronisation Three.js

Le idle sway CSS correspond exactement au calcul Three.js existant :
```
kSpriteMesh.position.x = sin(t * 0.55) * 0.14 + sin(t * 0.9) * 0.04
→ CSS translateX = sin(t * 0.55) * 14px + sin(t * 0.9) * 4px
```

Le déclenchement dive est synchronisé via `kSprite.setDive(ds)` qui appelle le setState React existant. `animFrame === 5` déclenche l'animation (identique au code actuel).

---

## Isolation CSS — fix du bug revert

**Problème du revert (30 mai) :** le CSS du gardien PRO polluait le jeu Higuita (Tab 8).

**Solution :** 
- Toutes les classes CSS préfixées `.gkpro-*` (namespace dédié)
- Les styles injectés via un `<style>` tag créé dans `useEffect` de `PenaltyPitch` uniquement
- Le tag `<style>` est supprimé dans le `cleanup` du `useEffect` (retour React)
- Aucun style global modifié

---

## Positionnement sur le canvas

Le gardien Three.js apparaît visuellement à :
- **Vertical :** ~22% depuis le bas du canvas (calibré)
- **Horizontal :** centré (50%)

Le canvas a `height: 190px` (mini) ou `100vh` (fullscreen). Le `bottom: 22%` fonctionne dans les deux cas.

---

## Fichiers modifiés

| Fichier | Modification |
|---|---|
| `app.js` | `PenaltyPitch` : cacher `kSpriteMesh`, ajouter overlay CSS, connecter `kSprite.setDive` → setState |

---

## Hors scope

- Jeu Higuita (Tab 8) — intact
- `PenaltyCSSGame` — non utilisé, non modifié
- Génération de nouvelles images — non (goalkeeper.png conservé)
- Three.js sprites (`penalty_pro.html`) — prototype non utilisé en prod
