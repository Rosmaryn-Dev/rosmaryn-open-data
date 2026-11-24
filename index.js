'use strict';
/* Rosmaryn open data (CC BY 4.0). Credit: Rosmaryn, https://rosmaryn.app/ */
const path = require('path');
const lire = (f) => require(path.join(__dirname, 'data', f));
module.exports = {
  /** Human Design and astrology frequencies in 100,000 random births (1910 to 2025). */
  get statistics() { return lire('statistiques-human-design-astrologie-100000-naissances.json'); },
  /** 3,298 public domain esoteric books and open access articles presented by Rosmaryn Library. */
  get books() { return lire('ouvrages-libres.json').ouvrages; },
  /** Angels and demons named in the Book of Enoch, the Key of Solomon and the Goetia, with references. */
  get angelsAndDemons() { return lire('concordance-anges-demons.json').entrees; },
  source: 'https://rosmaryn.app/',
  license: 'CC-BY-4.0'
};
