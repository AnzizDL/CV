# Dossier PDF

Les trois versions exportées du CV, servies par les boutons « Télécharger en
PDF » du hub. Les noms de fichiers sont fixes : ce sont eux que le recruteur
verra une fois le fichier téléchargé, et `index.html` pointe dessus.

| Fichier | Source | Format |
| --- | --- | --- |
| `CV-Anziz-Dahalani-General.pdf` | `/cv-general/` | 1 page A4 |
| `CV-Anziz-Dahalani-Developpeur.pdf` | `/cv-dev/` | 1 page A4 |
| `CV-Anziz-Dahalani-Creatif.pdf` | `/cv-persona/` | 2 pages A4 |

Le texte est sélectionnable dans les trois fichiers (aucune image de texte),
et le lien « Tous les CV » est masqué à l'impression.

## Régénérer un PDF après modification

Les trois pages ont une feuille de style d'impression dédiée : l'export se fait
depuis le navigateur, sans outil supplémentaire.

1. Lancer `python3 -m http.server 8000` à la racine du projet.
2. Ouvrir la page concernée, puis `Ctrl + P`.
3. Destination **Enregistrer au format PDF**, format **A4**, marges **par
   défaut**, **sans** en-têtes ni pieds de page.
4. Pour le CV créatif uniquement : cocher **Graphiques d'arrière-plan**, sinon
   les aplats rouges et noirs ne sont pas imprimés.
5. Écraser le fichier existant en conservant exactement le même nom.

Comme les noms ne changent pas, aucune modification de `index.html` n'est
nécessaire après une régénération.

## Fonctionnement des boutons

Le téléchargement repose uniquement sur l'attribut `download` d'un lien HTML :

```html
<a class="btn btn--secondary" href="./pdf/CV-Anziz-Dahalani-General.pdf" download>
```

Aucun JavaScript n'intervient, et cela fonctionne sur tout hébergement statique
(GitHub Pages, Vercel, Netlify).
