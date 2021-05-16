# -*- coding: utf-8 -*-

class GildedRose(object):

    def __init__(self, items):
        self.items = items

    def update_item(self, item):
        updater = ItemUpdater(item)
        updater.standard_update()
        updater.reduce_sell_in()

        if item.sell_in < 0:
            updater.expired_update()

    def update_quality(self):
        for item in self.items:
            self.update_item(item)


class ItemUpdater:
    def __init__(self, item):
        self.item = item

    def degrade(self):
        if self.item.quality > 0:
            self.item.quality = self.item.quality - 1

    def upgrade(self):
        if self.item.quality < 50:
            self.item.quality = self.item.quality + 1

    def standard_update(self):
        if self.item.name == "Aged Brie":
            self.upgrade()
        elif self.item.name == "Backstage passes to a TAFKAL80ETC concert":
            self.upgrade()
            if self.item.sell_in < 11:
                self.upgrade()
            if self.item.sell_in < 6:
                self.upgrade()
        elif self.item.name == "Sulfuras, Hand of Ragnaros":
            pass
        else:
            self.degrade()

    def reduce_sell_in(self):
        if self.item.name != "Sulfuras, Hand of Ragnaros":
            self.item.sell_in = self.item.sell_in - 1

    def expired_update(self):
        if self.item.name == "Aged Brie":
            self.upgrade()
        elif self.item.name == "Backstage passes to a TAFKAL80ETC concert":
            self.item.quality = 0
        elif self.item.name == "Sulfuras, Hand of Ragnaros":
            pass
        else:
            self.degrade()


class Item:
    def __init__(self, name, sell_in, quality):
        self.name = name
        self.sell_in = sell_in
        self.quality = quality

    def __repr__(self):
        return "%s, %s, %s" % (self.name, self.sell_in, self.quality)
