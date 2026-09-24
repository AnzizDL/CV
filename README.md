# CV — Anziz Dahalani

Trois versions du même CV, réunies derrière une page d'accueil.
HTML, CSS et JavaScript vanilla, sans dépendance ni étape de build : il suffit
d'ouvrir `index.html` ou de servir le dossier tel quel.

## Structure

```
index.html              page d'accueil (hub) — choix de la version
assets/
  styles/hub.css        styles de la page d'accueil
cv-general/             /cv-general/  — version sobre, ATS, une page A4
cv-dev/                 /cv-dev/      — version orientée développement web
cv-persona/             /cv-persona/  — version créative (noir / blanc / rouge)
pdf/                    exports PDF téléchargeables depuis le hub
```

Chaque CV est autonome : son dossier contient son `index.html` et son `style.css`.
Seul le CV créatif utilise un `script.js` (apparition des sections au scroll).

## Les trois versions

| Version | Objectif | Particularités |
| --- | --- | --- |
| Général | Candidatures classiques et logiciels ATS | Une page A4, texte sélectionnable, sans photo ni animation |
| Développeur | Recrutement technique | Projets et technologies mis en avant, lien GitHub, impression A4 |
| Créatif | Portfolio, démonstration d'intégration front-end | Direction artistique originale, animations CSS, impression simplifiée |

## PDF

Chaque carte du hub propose deux actions : consulter la version web et
télécharger le PDF. Les exports sont de vrais fichiers servis depuis `pdf/`,
via l'attribut `download` — aucun JavaScript n'intervient.

Les trois pages disposent d'une feuille de style d'impression dédiée : les PDF
se génèrent depuis le navigateur (`Ctrl + P` → enregistrer au format PDF).
La procédure et les noms de fichiers attendus sont dans [`pdf/README.md`](pdf/README.md).

## Notes

- Le lien « Tous les CV » présent sur chaque version est masqué à l'impression.
- Les animations du CV créatif respectent `prefers-reduced-motion`.
- La direction artistique du CV créatif est entièrement produite en CSS
  (trames, diagonales, découpes) : aucun asset externe n'est utilisé.

## Développement local

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```
