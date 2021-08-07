# -*- coding: utf-8 -*-
from abc import ABC, abstractmethod


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


class BaseItemUpdater(ABC):
    def __init__(self, item):
        self.item = item

    @abstractmethod
    def standard_update(self): ...

    @abstractmethod
    def expired_update(self): ...

    def reduce_sell_in(self):
        self.item.sell_in = self.item.sell_in - 1

    def update(self):
        self.standard_update()
        self.reduce_sell_in()

        if self.item.sell_in < 0:
            self.expired_update()


class ItemUpdater(BaseItemUpdater):
    def degrade(self, amount):
        self.item.quality = max(0, self.item.quality - amount)

    def standard_update(self):
        self.degrade(1)

    def expired_update(self):
        self.degrade(1)


class MaturingItemUpdater(BaseItemUpdater):
    def upgrade(self, amount):
        self.item.quality = min(50, self.item.quality + amount)

    def standard_update(self):
        self.upgrade(1)

    def expired_update(self):
        self.upgrade(1)


class BackstagePassUpdater(MaturingItemUpdater):
    def standard_update(self):
        if self.item.sell_in <= 5:
            self.upgrade(3)
        elif self.item.sell_in <= 10:
            self.upgrade(2)
        else:
            self.upgrade(1)

    def expired_update(self):
        self.item.quality = 0


class SulfurasUpdater(BaseItemUpdater):
    def standard_update(self):
        pass

    def reduce_sell_in(self):
        pass

    def expired_update(self):
        pass


class ConjuredItemUpdater(ItemUpdater):
    def standard_update(self):
        self.degrade(2)

    def expired_update(self):
        self.degrade(2)


class Item:
    def __init__(self, name, sell_in, quality):
        self.name = name
        self.sell_in = sell_in
        self.quality = quality

    def __repr__(self):
        return "%s, %s, %s" % (self.name, self.sell_in, self.quality)
