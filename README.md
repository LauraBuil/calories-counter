# Calories Counter

Application web et mobile de suivi des calories, sans publicité.

## Architecture

- `apps/web` : application Next.js.
- `apps/mobile` : application React/Vite embarquée avec Tauri 2.
- `packages/ui` : composants React partagés selon Atomic Design.
- `packages/styles` : fondations SCSS et variables visuelles.
- `packages/domain` : types et règles métier indépendantes de l'interface.

Chaque composant partagé possède son propre dossier, son fichier TSX, sa feuille
SCSS Module et son point d'entrée.

## Démarrage

```bash
pnpm install
pnpm dev
```

Pour lancer une seule application :

```bash
pnpm --filter web dev
pnpm --filter mobile dev
```

Pour lancer Tauri après avoir installé Rust et ses prérequis :

```bash
pnpm --filter mobile tauri dev
```

## Vérifications

```bash
pnpm typecheck
pnpm lint
pnpm build
```
