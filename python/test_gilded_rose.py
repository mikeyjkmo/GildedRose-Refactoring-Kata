# -*- coding: utf-8 -*-
from pprint import pprint
import unittest

from gilded_rose import Item, GildedRose


def test_golden_master():
    items = [
        Item(name="+5 Dexterity Vest", sell_in=10, quality=20),
        Item(name="Aged Brie", sell_in=2, quality=0),
        Item(name="Elixir of the Mongoose", sell_in=5, quality=7),
        Item(name="Sulfuras, Hand of Ragnaros", sell_in=0, quality=80),
        Item(name="Sulfuras, Hand of Ragnaros", sell_in=-1, quality=80),
        Item(
            name="Backstage passes to a TAFKAL80ETC concert", sell_in=15, quality=20
        ),
        Item(
            name="Backstage passes to a TAFKAL80ETC concert", sell_in=10, quality=49
        ),
        Item(
            name="Backstage passes to a TAFKAL80ETC concert", sell_in=5, quality=49
        ),
        Item(name="Conjured Mana Cake", sell_in=3, quality=7),  # <-- :O
    ]

    results = [[f"({item})" for item in items]]
    days = 30

    for day in range(days):
        GildedRose(items).update_quality()
        results.append([f"({item})" for item in items])

    expected_results = [
        [
            "(+5 Dexterity Vest, 10, 20)",
            "(Aged Brie, 2, 0)",
            "(Elixir of the Mongoose, 5, 7)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, 15, 20)",
            "(Backstage passes to a TAFKAL80ETC concert, 10, 49)",
            "(Backstage passes to a TAFKAL80ETC concert, 5, 49)",
            "(Conjured Mana Cake, 3, 7)",
        ],
        [
            "(+5 Dexterity Vest, 9, 19)",
            "(Aged Brie, 1, 1)",
            "(Elixir of the Mongoose, 4, 6)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, 14, 21)",
            "(Backstage passes to a TAFKAL80ETC concert, 9, 50)",
            "(Backstage passes to a TAFKAL80ETC concert, 4, 50)",
            "(Conjured Mana Cake, 2, 5)",
        ],
        [
            "(+5 Dexterity Vest, 8, 18)",
            "(Aged Brie, 0, 2)",
            "(Elixir of the Mongoose, 3, 5)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, 13, 22)",
            "(Backstage passes to a TAFKAL80ETC concert, 8, 50)",
            "(Backstage passes to a TAFKAL80ETC concert, 3, 50)",
            "(Conjured Mana Cake, 1, 3)",
        ],
        [
            "(+5 Dexterity Vest, 7, 17)",
            "(Aged Brie, -1, 4)",
            "(Elixir of the Mongoose, 2, 4)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, 12, 23)",
            "(Backstage passes to a TAFKAL80ETC concert, 7, 50)",
            "(Backstage passes to a TAFKAL80ETC concert, 2, 50)",
            "(Conjured Mana Cake, 0, 1)",
        ],
        [
            "(+5 Dexterity Vest, 6, 16)",
            "(Aged Brie, -2, 6)",
            "(Elixir of the Mongoose, 1, 3)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, 11, 24)",
            "(Backstage passes to a TAFKAL80ETC concert, 6, 50)",
            "(Backstage passes to a TAFKAL80ETC concert, 1, 50)",
            "(Conjured Mana Cake, -1, 0)",
        ],
        [
            "(+5 Dexterity Vest, 5, 15)",
            "(Aged Brie, -3, 8)",
            "(Elixir of the Mongoose, 0, 2)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, 10, 25)",
            "(Backstage passes to a TAFKAL80ETC concert, 5, 50)",
            "(Backstage passes to a TAFKAL80ETC concert, 0, 50)",
            "(Conjured Mana Cake, -2, 0)",
        ],
        [
            "(+5 Dexterity Vest, 4, 14)",
            "(Aged Brie, -4, 10)",
            "(Elixir of the Mongoose, -1, 0)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, 9, 27)",
            "(Backstage passes to a TAFKAL80ETC concert, 4, 50)",
            "(Backstage passes to a TAFKAL80ETC concert, -1, 0)",
            "(Conjured Mana Cake, -3, 0)",
        ],
        [
            "(+5 Dexterity Vest, 3, 13)",
            "(Aged Brie, -5, 12)",
            "(Elixir of the Mongoose, -2, 0)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, 8, 29)",
            "(Backstage passes to a TAFKAL80ETC concert, 3, 50)",
            "(Backstage passes to a TAFKAL80ETC concert, -2, 0)",
            "(Conjured Mana Cake, -4, 0)",
        ],
        [
            "(+5 Dexterity Vest, 2, 12)",
            "(Aged Brie, -6, 14)",
            "(Elixir of the Mongoose, -3, 0)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, 7, 31)",
            "(Backstage passes to a TAFKAL80ETC concert, 2, 50)",
            "(Backstage passes to a TAFKAL80ETC concert, -3, 0)",
            "(Conjured Mana Cake, -5, 0)",
        ],
        [
            "(+5 Dexterity Vest, 1, 11)",
            "(Aged Brie, -7, 16)",
            "(Elixir of the Mongoose, -4, 0)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, 6, 33)",
            "(Backstage passes to a TAFKAL80ETC concert, 1, 50)",
            "(Backstage passes to a TAFKAL80ETC concert, -4, 0)",
            "(Conjured Mana Cake, -6, 0)",
        ],
        [
            "(+5 Dexterity Vest, 0, 10)",
            "(Aged Brie, -8, 18)",
            "(Elixir of the Mongoose, -5, 0)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, 5, 35)",
            "(Backstage passes to a TAFKAL80ETC concert, 0, 50)",
            "(Backstage passes to a TAFKAL80ETC concert, -5, 0)",
            "(Conjured Mana Cake, -7, 0)",
        ],
        [
            "(+5 Dexterity Vest, -1, 8)",
            "(Aged Brie, -9, 20)",
            "(Elixir of the Mongoose, -6, 0)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, 4, 38)",
            "(Backstage passes to a TAFKAL80ETC concert, -1, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -6, 0)",
            "(Conjured Mana Cake, -8, 0)",
        ],
        [
            "(+5 Dexterity Vest, -2, 6)",
            "(Aged Brie, -10, 22)",
            "(Elixir of the Mongoose, -7, 0)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, 3, 41)",
            "(Backstage passes to a TAFKAL80ETC concert, -2, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -7, 0)",
            "(Conjured Mana Cake, -9, 0)",
        ],
        [
            "(+5 Dexterity Vest, -3, 4)",
            "(Aged Brie, -11, 24)",
            "(Elixir of the Mongoose, -8, 0)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, 2, 44)",
            "(Backstage passes to a TAFKAL80ETC concert, -3, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -8, 0)",
            "(Conjured Mana Cake, -10, 0)",
        ],
        [
            "(+5 Dexterity Vest, -4, 2)",
            "(Aged Brie, -12, 26)",
            "(Elixir of the Mongoose, -9, 0)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, 1, 47)",
            "(Backstage passes to a TAFKAL80ETC concert, -4, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -9, 0)",
            "(Conjured Mana Cake, -11, 0)",
        ],
        [
            "(+5 Dexterity Vest, -5, 0)",
            "(Aged Brie, -13, 28)",
            "(Elixir of the Mongoose, -10, 0)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, 0, 50)",
            "(Backstage passes to a TAFKAL80ETC concert, -5, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -10, 0)",
            "(Conjured Mana Cake, -12, 0)",
        ],
        [
            "(+5 Dexterity Vest, -6, 0)",
            "(Aged Brie, -14, 30)",
            "(Elixir of the Mongoose, -11, 0)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, -1, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -6, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -11, 0)",
            "(Conjured Mana Cake, -13, 0)",
        ],
        [
            "(+5 Dexterity Vest, -7, 0)",
            "(Aged Brie, -15, 32)",
            "(Elixir of the Mongoose, -12, 0)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, -2, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -7, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -12, 0)",
            "(Conjured Mana Cake, -14, 0)",
        ],
        [
            "(+5 Dexterity Vest, -8, 0)",
            "(Aged Brie, -16, 34)",
            "(Elixir of the Mongoose, -13, 0)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, -3, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -8, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -13, 0)",
            "(Conjured Mana Cake, -15, 0)",
        ],
        [
            "(+5 Dexterity Vest, -9, 0)",
            "(Aged Brie, -17, 36)",
            "(Elixir of the Mongoose, -14, 0)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, -4, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -9, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -14, 0)",
            "(Conjured Mana Cake, -16, 0)",
        ],
        [
            "(+5 Dexterity Vest, -10, 0)",
            "(Aged Brie, -18, 38)",
            "(Elixir of the Mongoose, -15, 0)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, -5, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -10, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -15, 0)",
            "(Conjured Mana Cake, -17, 0)",
        ],
        [
            "(+5 Dexterity Vest, -11, 0)",
            "(Aged Brie, -19, 40)",
            "(Elixir of the Mongoose, -16, 0)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, -6, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -11, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -16, 0)",
            "(Conjured Mana Cake, -18, 0)",
        ],
        [
            "(+5 Dexterity Vest, -12, 0)",
            "(Aged Brie, -20, 42)",
            "(Elixir of the Mongoose, -17, 0)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, -7, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -12, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -17, 0)",
            "(Conjured Mana Cake, -19, 0)",
        ],
        [
            "(+5 Dexterity Vest, -13, 0)",
            "(Aged Brie, -21, 44)",
            "(Elixir of the Mongoose, -18, 0)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, -8, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -13, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -18, 0)",
            "(Conjured Mana Cake, -20, 0)",
        ],
        [
            "(+5 Dexterity Vest, -14, 0)",
            "(Aged Brie, -22, 46)",
            "(Elixir of the Mongoose, -19, 0)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, -9, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -14, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -19, 0)",
            "(Conjured Mana Cake, -21, 0)",
        ],
        [
            "(+5 Dexterity Vest, -15, 0)",
            "(Aged Brie, -23, 48)",
            "(Elixir of the Mongoose, -20, 0)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, -10, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -15, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -20, 0)",
            "(Conjured Mana Cake, -22, 0)",
        ],
        [
            "(+5 Dexterity Vest, -16, 0)",
            "(Aged Brie, -24, 50)",
            "(Elixir of the Mongoose, -21, 0)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, -11, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -16, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -21, 0)",
            "(Conjured Mana Cake, -23, 0)",
        ],
        [
            "(+5 Dexterity Vest, -17, 0)",
            "(Aged Brie, -25, 50)",
            "(Elixir of the Mongoose, -22, 0)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, -12, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -17, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -22, 0)",
            "(Conjured Mana Cake, -24, 0)",
        ],
        [
            "(+5 Dexterity Vest, -18, 0)",
            "(Aged Brie, -26, 50)",
            "(Elixir of the Mongoose, -23, 0)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, -13, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -18, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -23, 0)",
            "(Conjured Mana Cake, -25, 0)",
        ],
        [
            "(+5 Dexterity Vest, -19, 0)",
            "(Aged Brie, -27, 50)",
            "(Elixir of the Mongoose, -24, 0)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, -14, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -19, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -24, 0)",
            "(Conjured Mana Cake, -26, 0)",
        ],
        [
            "(+5 Dexterity Vest, -20, 0)",
            "(Aged Brie, -28, 50)",
            "(Elixir of the Mongoose, -25, 0)",
            "(Sulfuras, Hand of Ragnaros, 0, 80)",
            "(Sulfuras, Hand of Ragnaros, -1, 80)",
            "(Backstage passes to a TAFKAL80ETC concert, -15, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -20, 0)",
            "(Backstage passes to a TAFKAL80ETC concert, -25, 0)",
            "(Conjured Mana Cake, -27, 0)",
        ],
    ]

    assert results == expected_results
