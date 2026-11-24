"""Rosmaryn open data (CC BY 4.0). Credit: Rosmaryn, https://rosmaryn.app/

>>> import rosmaryn_open_data as rod
>>> len(rod.books())
3298
"""
import json
import os

__version__ = "1.0.1"
SOURCE = "https://rosmaryn.app/"
LICENSE = "CC-BY-4.0"

_ICI = os.path.dirname(os.path.abspath(__file__))


def _lire(nom):
    for d in (os.path.join(_ICI, "data"), os.path.join(_ICI, "..", "..", "data")):
        f = os.path.join(d, nom)
        if os.path.exists(f):
            with open(f, encoding="utf-8-sig") as h:
                return json.load(h)
    raise FileNotFoundError(nom)


def statistics():
    """Human Design and astrology frequencies in 100,000 random births (1910 to 2025)."""
    return _lire("statistiques-human-design-astrologie-100000-naissances.json")


def books():
    """3,298 public domain esoteric books and open access articles presented by Rosmaryn Library."""
    return _lire("ouvrages-libres.json")["ouvrages"]


def angels_and_demons():
    """Angels and demons named in the Book of Enoch, the Key of Solomon and the Goetia, with references."""
    return _lire("concordance-anges-demons.json")["entrees"]


def to_dataframe(rows):
    """Turn one of the lists above into a pandas DataFrame (pandas must be installed)."""
    import pandas as pd
    return pd.DataFrame(rows)
