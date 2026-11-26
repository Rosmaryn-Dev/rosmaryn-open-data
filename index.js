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
  /** Monthly Wikipedia pageviews of 33 esoteric topics in six languages, January 2016 to October 2026. */
  get wikipediaPageviews() { return lire('wikipedia-consultations-sujets-esoteriques-2016-2026.json').pageviews; },
  /** 800 translations, commentaries and studies of the I Ching (Yi King), in nine languages. */
  get iChingBibliography() { return lire('yi-king-bibliographie.json').ouvrages; },
  /** 347 planetary correspondences from Agrippa, Three Books of Occult Philosophy (1651), Book I. */
  get agrippaCorrespondences() { return lire('agrippa-correspondances-planetaires.json').correspondances; },
  source: 'https://rosmaryn.app/',
  license: 'CC-BY-4.0'
};
