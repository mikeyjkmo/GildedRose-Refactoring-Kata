# -*- coding: utf-8 -*-

def create_updater(item):
    if item.name == "Aged Brie":
        return MaturingItemUpdater(item)
    elif item.name == "Backstage passes to a TAFKAL80ETC concert":
        return BackstagePassUpdater(item)
    elif item.name == "Sulfuras, Hand of Ragnaros":
        return SulfurasUpdater(item)
    elif item.name.startswith("Conjured"):
        return ConjuredItemUpdater(item)

    return ItemUpdater(item)


class GildedRose(object):
    def __init__(self, items):
        self.items = items

    def update_item(self, item):
        updater = create_updater(item)
        updater.update()

    def update_quality(self):
        for item in self.items:
            self.update_item(item)


class ItemUpdater:
    def __init__(self, item):
        self.item = item

    def degrade(self):
        if self.item.quality > 0:
            self.item.quality = self.item.quality - 1

    def standard_update(self):
        self.degrade()

    def reduce_sell_in(self):
        self.item.sell_in = self.item.sell_in - 1

    def expired_update(self):
        self.degrade()

    def update(self):
        self.standard_update()
        self.reduce_sell_in()

        if self.item.sell_in < 0:
            self.expired_update()


class MaturingItemUpdater(ItemUpdater):
    def upgrade(self):
        if self.item.quality < 50:
            self.item.quality = self.item.quality + 1

    def standard_update(self):
        self.upgrade()

    def expired_update(self):
        self.upgrade()


class BackstagePassUpdater(MaturingItemUpdater):
    def standard_update(self):
        self.upgrade()
        if self.item.sell_in < 11:
            self.upgrade()
        if self.item.sell_in < 6:
            self.upgrade()

    def expired_update(self):
        self.item.quality = 0


class SulfurasUpdater(ItemUpdater):
    def standard_update(self):
        pass

    def reduce_sell_in(self):
        pass

    def expired_update(self):
        pass


class ConjuredItemUpdater(ItemUpdater):
    def degrade(self):
        super().degrade()
        super().degrade()



class Item:
    def __init__(self, name, sell_in, quality):
        self.name = name
        self.sell_in = sell_in
        self.quality = quality

    def __repr__(self):
        return "%s, %s, %s" % (self.name, self.sell_in, self.quality)
