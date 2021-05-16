# -*- coding: utf-8 -*-

class GildedRose(object):

    def __init__(self, items):
        self.items = items

    def update_item(self, item):
        def degrade():
            if item.quality > 0:
                item.quality = item.quality - 1

        def upgrade():
            if item.quality < 50:
                item.quality = item.quality + 1

        def standard_update():
            if item.name == "Aged Brie":
                upgrade()
            elif item.name == "Backstage passes to a TAFKAL80ETC concert":
                upgrade()
                if item.sell_in < 11:
                    upgrade()
                if item.sell_in < 6:
                    upgrade()
            elif item.name == "Sulfuras, Hand of Ragnaros":
                pass
            else:
                degrade()

        def reduce_sell_in():
            if item.name != "Sulfuras, Hand of Ragnaros":
                item.sell_in = item.sell_in - 1

        def expired_update():
            if item.name == "Aged Brie":
                upgrade()
            elif item.name == "Backstage passes to a TAFKAL80ETC concert":
                item.quality = 0
            elif item.name == "Sulfuras, Hand of Ragnaros":
                pass
            else:
                degrade()

        standard_update()
        reduce_sell_in()

        if item.sell_in < 0:
            expired_update()

    def update_quality(self):
        for item in self.items:
            self.update_item(item)


class Item:
    def __init__(self, name, sell_in, quality):
        self.name = name
        self.sell_in = sell_in
        self.quality = quality

    def __repr__(self):
        return "%s, %s, %s" % (self.name, self.sell_in, self.quality)
