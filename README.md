
# 📝 Markdown Live Editor

Un éditeur Markdown simple, moderne et responsive, construit avec **Next.js**, **React** et **Tailwind CSS**.  
Tape ton texte en Markdown dans la colonne de gauche, et vois le rendu mis à jour instantanément à droite.

---

## 🚀 Démo

> Une démo peut être ajoutée ici une fois l'app hébergée.  
> Exemple : [markdown-live-editor.vercel.app](https://markdown-live-editor.vercel.app)

---

## 🛠️ Technologies utilisées

| Outil | Rôle |
|------|------|
| [Next.js](https://nextjs.org/) | Framework React avec routage intégré |
| [React](https://reactjs.org/) | Création d'interfaces interactives |
| [Tailwind CSS](https://tailwindcss.com/) | Stylisation rapide avec classes utilitaires |
| [TypeScript](https://www.typescriptlang.org/) | Typage statique pour un code plus fiable |
| [react-markdown](https://github.com/remarkjs/react-markdown) | Rendu du contenu Markdown dans React |

---

## ✨ Fonctionnalités

- 🔄 Aperçu **en temps réel** du Markdown
- 🎨 Interface propre et responsive (grâce à Tailwind)
- ⚛️ Composants React modulaires (`MarkdownEditor`, `MarkdownInput`, `MarkdownPreview`)
- 🔍 Structure claire avec gestion d’état centralisée

---

## 📦 Installation

```bash
# Clone le repo
git clone https://github.com/ton-user/markdown-live-editor.git
cd markdown-live-editor

# Installe les dépendances
npm install

# Démarre le serveur de développement
npm run dev
```

> Accède ensuite à l’app sur [http://localhost:3000](http://localhost:3000)

---

## 📁 Structure du projet

```
.
├── components
│   ├── markdownEditor.tsx     # Composant principal
│   ├── markdownInput.tsx      # Champ de saisie Markdown
│   └── markdownPreview.tsx    # Zone d'affichage Markdown
├── pages
│   └── index.tsx              # Page d’accueil
├── public                     # Fichiers statiques
├── styles                     # Styles globaux (optionnel)
├── tailwind.config.ts         # Config de Tailwind
├── tsconfig.json              # Config TypeScript
└── package.json               # Dépendances et scripts
```

---

## 🚧 À venir (roadmap)

- [ ] Ajout de thèmes (sombre / clair)
- [ ] Exportation du contenu en `.md` ou `.html`
- [ ] Détection des erreurs Markdown
- [ ] Sauvegarde locale (localStorage) ou en ligne (API)

---

## 📤 Déploiement

Le plus simple est d’utiliser **[Vercel](https://vercel.com/)** (recommandé pour Next.js) :

1. Connecte ton dépôt GitHub à Vercel
2. Clique sur "Import Project"
3. Laisse les options par défaut (framework détecté automatiquement)
4. Clique sur "Deploy"

---

## 🤝 Contribuer

Les contributions sont les bienvenues !  
N'hésite pas à ouvrir une **issue** pour une suggestion, ou une **pull request** pour améliorer le projet.

---

## 📄 Licence

Ce projet est open-source sous licence [MIT](LICENSE).

---

## 🙋‍♂️ Auteur

Développé avec ❤️ par [Ton Prénom](https://github.com/ton-user)  
Tu peux me contacter pour toute question ou proposition !
