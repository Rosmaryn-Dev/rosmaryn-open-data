# Rosmaryn open data

Open datasets published by [Rosmaryn](https://rosmaryn.app/), a holistic self-knowledge platform that brings together Human Design, astrology and numerology. Licence: [CC BY 4.0](LICENSE). Please credit Rosmaryn with a link to the source page.

## Datasets

### Public domain esoteric books
`data/ouvrages-libres.csv` and `data/ouvrages-libres.json`. Archived on Harvard Dataverse: [doi:10.7910/DVN/5OD5DT](https://doi.org/10.7910/DVN/5OD5DT)

3,296 public domain books and open access articles presented by [Rosmaryn Library](https://library.rosmaryn.app/), in 33 languages and 42 subjects, from alchemy and astrology to Kabbalah and the I Ching. 767 books can be downloaded as PDF on Library.

Columns: `identifiant`, `titre` (title), `auteur` (author), `annee` (year), `langue` (language), `discipline` (subject, in French), `type`, `telechargeable` (PDF available), `page` (book page on Library). The dataset describes the books; it does not contain their text or files.

Live version: https://library.rosmaryn.app/donnees/ · Also on [data.gouv.fr](https://www.data.gouv.fr/datasets/rosmaryn-library-ouvrages-esoteriques-du-domaine-public-et-articles-en-libre-acces) and [Hugging Face](https://huggingface.co/datasets/Rosmaryn/esoteric-public-domain-books).

### Human Design and astrology frequencies in 100,000 births
`data/statistiques-human-design-astrologie-100000-naissances.csv`

Frequencies computed by Rosmaryn on 100,000 birth moments drawn at random between 1910 and 2025, each one calculated by Rosmaryn's own ephemeris engine (NASA JPL DE430): Human Design type, authority, definition, profile, centers, channels, gates and incarnation crosses; sun and moon signs; numerology life path; and the 72 birth angels. 511 values.

Columns: `famille` (family), `code`, `libelle` (label, in French), `effectif` (count), `part_pourcent` (share in percent), `naissances` (births).

Explanations: https://rosmaryn.app/chiffres/ · Also on [Hugging Face](https://huggingface.co/datasets/Rosmaryn/human-design-astrology-frequencies-100k-births).

### Concordance of angels and demons
`data/concordance-anges-demons.csv` and `data/concordance-anges-demons.json`

182 angels, Watchers and spirits named in three public domain texts: the Book of Enoch (R. H. Charles, 1912, with spellings from François Martin's French translation, 1906), the Key of Solomon (S. L. MacGregor Mathers, 1889) and the Goetia (L. W. de Laurence edition, 1916), with chapter, verse and page for each mention. Every reference was found in the text.

Page: https://library.rosmaryn.app/concordance/anges-et-demons/

## Use from JavaScript

```bash
npm install rosmaryn-open-data
```

```js
const rod = require('rosmaryn-open-data');
rod.statistics;       // Human Design and astrology frequencies in 100,000 births
rod.books;            // 3,296 public domain esoteric books
rod.angelsAndDemons;  // concordance of angels and demons
```

Package page: [npmjs.com/package/rosmaryn-open-data](https://www.npmjs.com/package/rosmaryn-open-data). Explore the data online: [rosmaryn-dev.github.io/rosmaryn-open-data](https://rosmaryn-dev.github.io/rosmaryn-open-data/).

## About Rosmaryn

- [rosmaryn.app](https://rosmaryn.app/): free calculators and encyclopedia
- [Rosmaryn Pro](https://rosmaryn.pro/): software for practitioners
- [Rosmaryn Academy](https://academy.rosmaryn.app/): online courses
- [Rosmaryn Library](https://library.rosmaryn.app/): esoteric bookshop and public domain library
