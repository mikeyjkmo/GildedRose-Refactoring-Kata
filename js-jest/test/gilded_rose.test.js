const { Shop, Item } = require("../src/gilded_rose");
const fs = require("fs");

const getTestItems = () => [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("Aged Brie", 2, 0),
  new Item("Elixir of the Mongoose", 5, 7),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),

  // This Conjured item does not work properly yet
  new Item("Conjured Mana Cake", 3, 6),
];

const SNAPSHOT = [
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: 9,
      quality: 19,
    },
    {
      name: "Aged Brie",
      sellIn: 1,
      quality: 1,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: 4,
      quality: 6,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 14,
      quality: 21,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 9,
      quality: 50,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 4,
      quality: 50,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: 2,
      quality: 5,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: 8,
      quality: 18,
    },
    {
      name: "Aged Brie",
      sellIn: 0,
      quality: 2,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: 3,
      quality: 5,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 13,
      quality: 22,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 8,
      quality: 50,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 3,
      quality: 50,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: 1,
      quality: 4,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: 7,
      quality: 17,
    },
    {
      name: "Aged Brie",
      sellIn: -1,
      quality: 4,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: 2,
      quality: 4,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 12,
      quality: 23,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 7,
      quality: 50,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 2,
      quality: 50,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: 0,
      quality: 3,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: 6,
      quality: 16,
    },
    {
      name: "Aged Brie",
      sellIn: -2,
      quality: 6,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: 1,
      quality: 3,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 11,
      quality: 24,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 6,
      quality: 50,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 1,
      quality: 50,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -1,
      quality: 1,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: 5,
      quality: 15,
    },
    {
      name: "Aged Brie",
      sellIn: -3,
      quality: 8,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: 0,
      quality: 2,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 10,
      quality: 25,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 5,
      quality: 50,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 0,
      quality: 50,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -2,
      quality: 0,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: 4,
      quality: 14,
    },
    {
      name: "Aged Brie",
      sellIn: -4,
      quality: 10,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: -1,
      quality: 0,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 9,
      quality: 27,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 4,
      quality: 50,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -1,
      quality: 0,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -3,
      quality: 0,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: 3,
      quality: 13,
    },
    {
      name: "Aged Brie",
      sellIn: -5,
      quality: 12,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: -2,
      quality: 0,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 8,
      quality: 29,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 3,
      quality: 50,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -2,
      quality: 0,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -4,
      quality: 0,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: 2,
      quality: 12,
    },
    {
      name: "Aged Brie",
      sellIn: -6,
      quality: 14,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: -3,
      quality: 0,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 7,
      quality: 31,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 2,
      quality: 50,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -3,
      quality: 0,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -5,
      quality: 0,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: 1,
      quality: 11,
    },
    {
      name: "Aged Brie",
      sellIn: -7,
      quality: 16,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: -4,
      quality: 0,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 6,
      quality: 33,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 1,
      quality: 50,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -4,
      quality: 0,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -6,
      quality: 0,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: 0,
      quality: 10,
    },
    {
      name: "Aged Brie",
      sellIn: -8,
      quality: 18,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: -5,
      quality: 0,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 5,
      quality: 35,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 0,
      quality: 50,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -5,
      quality: 0,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -7,
      quality: 0,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: -1,
      quality: 8,
    },
    {
      name: "Aged Brie",
      sellIn: -9,
      quality: 20,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: -6,
      quality: 0,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 4,
      quality: 38,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -1,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -6,
      quality: 0,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -8,
      quality: 0,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: -2,
      quality: 6,
    },
    {
      name: "Aged Brie",
      sellIn: -10,
      quality: 22,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: -7,
      quality: 0,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 3,
      quality: 41,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -2,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -7,
      quality: 0,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -9,
      quality: 0,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: -3,
      quality: 4,
    },
    {
      name: "Aged Brie",
      sellIn: -11,
      quality: 24,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: -8,
      quality: 0,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 2,
      quality: 44,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -3,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -8,
      quality: 0,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -10,
      quality: 0,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: -4,
      quality: 2,
    },
    {
      name: "Aged Brie",
      sellIn: -12,
      quality: 26,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: -9,
      quality: 0,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 1,
      quality: 47,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -4,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -9,
      quality: 0,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -11,
      quality: 0,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: -5,
      quality: 0,
    },
    {
      name: "Aged Brie",
      sellIn: -13,
      quality: 28,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: -10,
      quality: 0,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 0,
      quality: 50,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -5,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -10,
      quality: 0,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -12,
      quality: 0,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: -6,
      quality: 0,
    },
    {
      name: "Aged Brie",
      sellIn: -14,
      quality: 30,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: -11,
      quality: 0,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -1,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -6,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -11,
      quality: 0,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -13,
      quality: 0,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: -7,
      quality: 0,
    },
    {
      name: "Aged Brie",
      sellIn: -15,
      quality: 32,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: -12,
      quality: 0,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -2,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -7,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -12,
      quality: 0,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -14,
      quality: 0,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: -8,
      quality: 0,
    },
    {
      name: "Aged Brie",
      sellIn: -16,
      quality: 34,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: -13,
      quality: 0,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -3,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -8,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -13,
      quality: 0,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -15,
      quality: 0,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: -9,
      quality: 0,
    },
    {
      name: "Aged Brie",
      sellIn: -17,
      quality: 36,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: -14,
      quality: 0,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -4,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -9,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -14,
      quality: 0,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -16,
      quality: 0,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: -10,
      quality: 0,
    },
    {
      name: "Aged Brie",
      sellIn: -18,
      quality: 38,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: -15,
      quality: 0,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -5,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -10,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -15,
      quality: 0,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -17,
      quality: 0,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: -11,
      quality: 0,
    },
    {
      name: "Aged Brie",
      sellIn: -19,
      quality: 40,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: -16,
      quality: 0,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -6,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -11,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -16,
      quality: 0,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -18,
      quality: 0,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: -12,
      quality: 0,
    },
    {
      name: "Aged Brie",
      sellIn: -20,
      quality: 42,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: -17,
      quality: 0,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -7,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -12,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -17,
      quality: 0,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -19,
      quality: 0,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: -13,
      quality: 0,
    },
    {
      name: "Aged Brie",
      sellIn: -21,
      quality: 44,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: -18,
      quality: 0,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -8,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -13,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -18,
      quality: 0,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -20,
      quality: 0,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: -14,
      quality: 0,
    },
    {
      name: "Aged Brie",
      sellIn: -22,
      quality: 46,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: -19,
      quality: 0,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -9,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -14,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -19,
      quality: 0,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -21,
      quality: 0,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: -15,
      quality: 0,
    },
    {
      name: "Aged Brie",
      sellIn: -23,
      quality: 48,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: -20,
      quality: 0,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -10,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -15,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -20,
      quality: 0,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -22,
      quality: 0,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: -16,
      quality: 0,
    },
    {
      name: "Aged Brie",
      sellIn: -24,
      quality: 50,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: -21,
      quality: 0,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -11,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -16,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -21,
      quality: 0,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -23,
      quality: 0,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: -17,
      quality: 0,
    },
    {
      name: "Aged Brie",
      sellIn: -25,
      quality: 50,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: -22,
      quality: 0,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -12,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -17,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -22,
      quality: 0,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -24,
      quality: 0,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: -18,
      quality: 0,
    },
    {
      name: "Aged Brie",
      sellIn: -26,
      quality: 50,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: -23,
      quality: 0,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -13,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -18,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -23,
      quality: 0,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -25,
      quality: 0,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: -19,
      quality: 0,
    },
    {
      name: "Aged Brie",
      sellIn: -27,
      quality: 50,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: -24,
      quality: 0,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -14,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -19,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -24,
      quality: 0,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -26,
      quality: 0,
    },
  ],
  [
    {
      name: "+5 Dexterity Vest",
      sellIn: -20,
      quality: 0,
    },
    {
      name: "Aged Brie",
      sellIn: -28,
      quality: 50,
    },
    {
      name: "Elixir of the Mongoose",
      sellIn: -25,
      quality: 0,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
      quality: 80,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
      quality: 80,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -15,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -20,
      quality: 0,
    },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: -25,
      quality: 0,
    },
    {
      name: "Conjured Mana Cake",
      sellIn: -27,
      quality: 0,
    },
  ],
];

describe("Gilded Rose", () => {
  it("should match the golden master", () => {
    // Given
    let items = getTestItems();
    const gildedRose = new Shop(items);
    const result = [];

    for (let i = 0; i < 30; ++i) {
      // When
      items = gildedRose.updateQuality();
      result.push(JSON.parse(JSON.stringify(items)));
    }

    // Then
    expect(result).toMatchObject(SNAPSHOT);
  });
});
