# WC2026App — Journal de développement

## Session du 12 juin 2026

---

## État actuel du projet

| Plateforme | Statut | Notes |
|---|---|---|
| iOS App | ✅ Build #15 soumis Apple | En attente validation |
| Web (Vercel) | ✅ Live | https://wc-2026-app.vercel.app |
| macOS (Mac Catalyst) | 🔧 En cours | Erreurs RevenueCat à régler |
| Android | ❌ Pas encore | Pas de workflow configuré |

---

## Fixes appliqués aujourd'hui

### 1. Countdown → Finale (19 juillet)
- **Fichier** : `app.js` ligne ~2514
- **Changement** : Target date `2026-06-11T20:00:00` → `2026-07-19T19:00:00`
- **Ajout** : Sous-titre `countdownSub` dans les 6 langues (EN/FR/ES/PT/IT/DE)
  - EN: `🏆 Final · MetLife Stadium · Jul 19`
  - FR: `🏆 Finale · MetLife Stadium · 19 juil.`
  - ES/PT: `🏆 Final · MetLife Stadium · 19 jul.`
  - IT: `🏆 Finale · MetLife Stadium · 19 lug.`
  - DE: `🏆 Finale · MetLife Stadium · 19. Jul.`

### 2. Musique — fix autoplay
- **Problème** : `play()` dans `useEffect` = hors contexte geste → bloqué par autoplay policy du navigateur
- **Fix** : Audio géré directement dans le `onClick` du bouton (dans la fenêtre de geste)
- **Icône** : `🎵 ⏹` → `🔇` pour l'état OFF
- **Fichiers MP3 manquants** : `RitmodaTorcida.mp3` n'était pas dans git → ajouté et commité
- Cycle : `🎵 A` → `🎵 B` → `🔇` → `🎵 A`

### 3. Splash images nettoyées
- **Supprimés du repo** :
  - `public/splash-desktop.png` (mauvaise version)
  - `public/splash-en-desktop.png` (simple bleue, mauvaise)
  - `public/splash-es-desktop.png`
  - `public/splash-screen.png` (doublon du phone)
- **Reste dans `/public/`** : DE, FR, IT, PT (desktop + phone), EN phone, ES phone
- ⚠️ **EN desktop manquant** — un autre Claude est en train de le créer (`splash-en-desktop-ultimatefan.png` dans Downloads)
- Quand prêt : copier dans `/public/splash-desktop.png` + deploy

### 4. Stripe — Paiement web
- **Problème** : `handleProPurchase` utilisait RevenueCat (iOS only) → "Loading..." sur web
- **Fix** : Détection de plateforme + redirection Stripe selon la locale

#### Liens Stripe configurés
| Devise | URL | Locale |
|---|---|---|
| € | `https://buy.stripe.com/8x2dR9e9f6TDbYD297cjS02` | Par défaut |
| $ | `https://buy.stripe.com/00wdR9ghnfq93s7bJHcjS04` | en-US/CA/AU |
| £ | `https://buy.stripe.com/bJeeVdaX3di1bYD3dbcjS03` | en-GB |
| R$ | `https://buy.stripe.com/aFa9ATaX37XH4wbfZXcjS05` | pt-BR |

#### Sécurisation du paiement
- **Créé** : `/api/verify-payment.js` — vérifie le `session_id` Stripe avant d'activer le PRO
- **Variable Vercel** : `STRIPE_SECRET_KEY` ajoutée dans Settings → Environment (wc-2026-app)
- **Stripe dashboard** : Les 4 Payment Links configurés avec l'URL de succès :
  ```
  https://wc-2026-app.vercel.app/api/verify-payment?session_id={CHECKOUT_SESSION_ID}
  ```
- Le mécanisme `?pro=1` dans `index.html` active `localStorage('wc2026_pro','1')`

#### Flux complet web
```
Bouton Unlock → Stripe (locale) → Paiement → /api/verify-payment → ?pro=1 → PRO activé
```

### 5. macOS — Mac Catalyst
- **Problème** : RevenueCat ne compile pas sur Mac Catalyst (12 erreurs Swift)
- **Fix Podfile** : `post_install` exclut RevenueCat des builds Mac Catalyst :
  ```ruby
  EXCLUDED_ARCHS[sdk=maccatalyst*] = arm64 x86_64
  SUPPORTS_MACCATALYST = NO
  ```
- **Bouton macOS** : `☕ Buy me a coffee` → redirige vers le lien Stripe €
- **Détection** : `isMacCatalyst()` = `Capacitor.isNativePlatform() && /Mac/i.test(navigator.platform)`
- ⚠️ **À faire** : `pod install` + tester build Mac Catalyst dans Xcode + commit + deploy

---

## Architecture des paiements

```
iOS natif       → RevenueCat (App Store IAP)
Web             → Stripe (€/$/ £/R$ selon locale) + vérification serveur
macOS Catalyst  → Stripe € (☕ Buy me a coffee, pas de PRO complet)
```

---

## Fichiers clés

| Fichier | Rôle |
|---|---|
| `app.js` | App React principale (web + iOS + macOS) |
| `www/app.js` | Copie pour Capacitor iOS — doit rester synchronisé |
| `index.html` | Shell HTML, splash screen, activation `?pro=1` |
| `api/scores.js` | Vercel function — scores football-data.org |
| `api/standings.js` | Vercel function — classements groupes |
| `api/verify-payment.js` | Vercel function — vérification paiement Stripe |
| `vercel.json` | Config Vercel (headers no-cache, rewrites) |
| `ios/App/Podfile` | Dépendances CocoaPods iOS + exclusion macOS |
| `codemagic.yaml` | CI/CD iOS + macOS App Store |

---

## Variables d'environnement Vercel (wc-2026-app)

| Clé | Usage |
|---|---|
| `FOOTBALL_DATA_KEY` | API football-data.org v4 |
| `STRIPE_SECRET_KEY` | Vérification paiements Stripe (`rk_live_...`) |

---

## URLs importantes

| | URL |
|---|---|
| Web prod | https://wc-2026-app.vercel.app |
| GitHub | https://github.com/marcoxxx72-cmyk/WC2026App |
| Stripe dashboard | https://dashboard.stripe.com/payment-links |

---

## Tâches en suspens

- [ ] Récupérer `splash-en-desktop-ultimatefan.png` (créé par autre Claude dans Downloads) → copier dans `public/splash-desktop.png` → commit → deploy
- [ ] Terminer test build macOS Catalyst dans Xcode (après pod install)
- [ ] Commit + deploy changements macOS (Podfile, bouton ☕)
- [ ] Décider stratégie unlock macOS : juste "café" ou vrai PRO ?
- [ ] Configurer le lien Stripe macOS avec URL de vérification (actuellement redirige directement sans vérification)
- [ ] Stripe : vérifier que les 4 Payment Links ont bien l'URL de succès correcte
- [ ] Attendre réponse Apple pour Build #15

---

## Notes techniques importantes

### Autoplay musique (navigateur)
Les navigateurs bloquent `audio.play()` sauf dans un handler de geste utilisateur direct.
→ Toujours appeler `.play()` dans un `onClick`, jamais dans `useEffect`.

### Sync app.js ↔ www/app.js
Quand on modifie `app.js` à la racine, penser à synchroniser `www/app.js` pour Capacitor iOS.
Actuellement fait manuellement — attention à ne pas oublier.

### Mac Catalyst vs iOS
- `Capacitor.getPlatform()` retourne `'ios'` sur les deux
- Pour distinguer : `isMacCatalyst()` = `isNativePlatform() && /Mac/i.test(navigator.platform)`

### Splash web
- Fichier utilisé : `/public/splash-desktop.png`
- Logique dans `index.html` : MutationObserver sur `#root`, minimum 1400ms d'affichage
- Après hide : `opacity:0` (500ms) puis `display:none`
