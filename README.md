# MF Vision Tech

<p align="center">
  <strong>Solutions Web, IA & Éducation Digitale</strong><br>
  Créer. Automatiser. Moderniser.
</p>

<p align="center">
  <img alt="Status" src="https://img.shields.io/badge/status-en%20développement-c9a66b?style=for-the-badge">
  <img alt="Tech" src="https://img.shields.io/badge/HTML%20%7C%20CSS%20%7C%20JS-Portfolio%20Premium-2b2b2b?style=for-the-badge">
  <img alt="Brand" src="https://img.shields.io/badge/MF%20Vision%20Tech-Digital%20Consulting-1f1f1f?style=for-the-badge">
</p>

---

## Aperçu

**MF Vision Tech** est un portfolio professionnel one-page conçu pour présenter une activité freelance premium autour du développement web, de l’intelligence artificielle, de l’automatisation, du traitement d’image, des systèmes Raspberry Pi et des solutions éducatives.

Le site met en avant un positionnement clair : accompagner les écoles, centres de formation, PME et porteurs de projets innovants dans la création de solutions digitales fiables, élégantes, documentées et faciles à utiliser.

---

## Objectif du projet

Ce portfolio a été conçu pour servir de centre de confiance professionnel. Il permet de présenter :

- l’identité de marque **MF Vision Tech** ;
- les services principaux proposés ;
- les projets démonstratifs ;
- la méthode de travail ;
- les raisons de faire confiance au prestataire ;
- les informations de contact pour demander un devis ou discuter d’un projet.

L’objectif n’est pas seulement d’afficher des compétences techniques, mais de montrer une capacité à comprendre un besoin réel, concevoir une solution claire et livrer un résultat professionnel.

---

## Services présentés

Le portfolio met en avant les domaines suivants :

- **Développement web** : sites modernes, responsives et professionnels.
- **Applications web & dashboards** : interfaces de gestion, tableaux de bord et outils métiers.
- **Chatbots IA & OpenAI** : assistants intelligents pour écoles, PME et services clients.
- **Automatisation** : traitement Excel, PDF, rapports, documents et workflows répétitifs.
- **Traitement d’image** : scripts Python, OpenCV, IA, analyse et amélioration visuelle.
- **Raspberry Pi & kiosques digitaux** : affichage dynamique, systèmes locaux et prototypes.
- **Robotique éducative** : projets pédagogiques, ateliers et solutions d’apprentissage technique.

---

## Projets démonstratifs

### MF Vision Kiosk V1.0

Kiosque digital local pour établissements scolaires : annonces, horaires, événements, temps restant avant la sonnerie, clubs, projets et affichage institutionnel.

### Mini Dashboard École

Prototype de tableau de bord pour gérer élèves, classes, annonces, planning, rapports et données administratives.

### Chatbot IA École/PME

Assistant intelligent capable de répondre automatiquement aux questions fréquentes des parents, visiteurs ou clients.

### Traitement d’image Python/OpenCV

Workflow de traitement d’image pour amélioration, analyse, détection et automatisation de tâches visuelles.

---

## Identité visuelle

Le design du portfolio adopte une direction premium, sobre et crédible.

### Palette recommandée

| Élément | Couleur | Usage |
|---|---|---|
| Graphite | `#171717` | Fond principal |
| Charbon | `#222222` | Cartes et sections |
| Blanc cassé | `#F5F1E8` | Texte principal |
| Champagne gold | `#C9A66B` | Accents, titres, boutons |
| Gris doux | `#A9A9A9` | Textes secondaires |
| Olive discret | `#6F7357` | Accent secondaire optionnel |

### Direction artistique

- Style institutionnel, moderne et professionnel.
- Éviter les effets néon ou trop futuristes.
- Favoriser les contrastes doux, les espacements généreux et les détails élégants.
- Utiliser des animations légères uniquement si elles améliorent l’expérience utilisateur.

---

## Structure du projet

```text
mf-vision-tech/
│
├── index.html
├── README.md
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── main.js
│   │
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── banner.jpg
│   │   ├── project-kiosk.jpg
│   │   ├── project-dashboard.jpg
│   │   ├── project-chatbot.jpg
│   │   └── project-image-processing.jpg
│   │
│   └── icons/
```

---

## Technologies utilisées

- **HTML5** pour la structure.
- **CSS3** pour le design, les animations et le responsive.
- **JavaScript Vanilla** pour les interactions légères.
- **GitHub Pages** pour l’hébergement gratuit.

Aucun framework lourd n’est nécessaire pour cette première version. Le site doit rester rapide, propre et facile à maintenir.

---

## Installation locale

1. Télécharger ou cloner le projet :

```bash
git clone https://github.com/votre-utilisateur/mf-vision-tech.git
```

2. Ouvrir le dossier :

```bash
cd mf-vision-tech
```

3. Lancer le site localement :

```bash
# Option simple
ouvrir index.html dans le navigateur
```

Ou avec une extension comme **Live Server** dans Visual Studio Code.

---

## Personnalisation

### Modifier les informations de contact

Dans `index.html`, remplacer les valeurs suivantes :

```html
Email : votre-email
LinkedIn : votre-lien-linkedin
WhatsApp : votre-numero
Localisation : Tunisie / Missions à distance
```

### Remplacer les images

Placer les images dans :

```text
assets/images/
```

Images recommandées :

- `profile.jpg` : photo professionnelle.
- `banner.jpg` : bannière MF Vision Tech.
- `project-kiosk.jpg` : capture du kiosque digital.
- `project-dashboard.jpg` : capture du dashboard.
- `project-chatbot.jpg` : capture du chatbot.
- `project-image-processing.jpg` : avant/après ou workflow image.

### Modifier les couleurs

Les couleurs principales doivent être centralisées dans `style.css`, idéalement sous forme de variables CSS :

```css
:root {
  --bg-main: #171717;
  --bg-card: #222222;
  --text-main: #F5F1E8;
  --text-muted: #A9A9A9;
  --accent-gold: #C9A66B;
  --accent-olive: #6F7357;
}
```

---

## Déploiement sur GitHub Pages

1. Créer un dépôt GitHub nommé :

```text
mf-vision-tech
```

2. Envoyer les fichiers :

```bash
git add .
git commit -m "Initial premium portfolio for MF Vision Tech"
git branch -M main
git remote add origin https://github.com/votre-utilisateur/mf-vision-tech.git
git push -u origin main
```

3. Activer GitHub Pages :

```text
Settings → Pages → Branch: main → Folder: /root → Save
```

Le site sera ensuite disponible via une adresse de type :

```text
https://votre-utilisateur.github.io/mf-vision-tech/
```

---

## Bonnes pratiques

Avant de publier le portfolio, vérifier :

- les textes et fautes d’orthographe ;
- la lisibilité sur mobile ;
- la qualité des images ;
- la rapidité de chargement ;
- le bon fonctionnement des liens ;
- le contraste des boutons ;
- la cohérence entre LinkedIn, bannière, photo et site portfolio.

---

## Positionnement professionnel

Phrase officielle du portfolio :

> Je transforme vos idées en solutions digitales fiables, élégantes et faciles à utiliser : sites web, applications web, dashboards, chatbots IA, automatisation, Raspberry Pi, traitement d’image et projets éducatifs.

Phrase courte :

> MF Vision Tech — Solutions Web, IA & Éducation Digitale.

---

## Feuille de route

### Version 1.0

- Portfolio one-page.
- Présentation des services.
- Projets démonstratifs.
- Contact direct.
- Design responsive.

### Version 1.1

- Ajout de captures réelles de projets.
- Optimisation SEO.
- Formulaire de contact.
- Version anglaise.

### Version 2.0

- Blog technique.
- Études de cas détaillées.
- Témoignages clients.
- Pages services séparées.
- Nom de domaine personnalisé.

---

## Auteur

**MF Vision Tech**  
Consultant Digital & IA  
Développement Web · Automatisation · Raspberry Pi · Traitement d’image · Éducation Digitale

Localisation : Tunisie / Missions à distance

---

## Licence

Ce projet est destiné à un usage professionnel personnel pour la marque **MF Vision Tech**.  
Toute réutilisation publique du contenu, de l’identité ou des textes doit être adaptée afin de préserver l’originalité de la marque.
