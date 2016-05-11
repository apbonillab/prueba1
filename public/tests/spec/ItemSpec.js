describe("Item", function () {
    var itemParent;
    var item;
    var items;
    var itemWeird;
    beforeEach(function () {
        items = [];
        items.push(new Item('subItem', 'huge.com', null));
        items.push(new Item('subItem2', 'imTester.com', null));
        itemParent = new Item('parent', null, items);
        item = new Item('item', 'iamwebdeveloper.com', null);
        itemWeird = new Item('item', 'iamwebdeveloper.com', items);
    });

    it("when item has not childs", function () {
        expect(item.childsHTML()).toEqual(null);
        itemParent.items.forEach(function (itemChild) {
            expect(itemChild.childsHTML()).toEqual(null);
        }, this);
        expect(itemWeird.childsHTML()).not.toBeNull();
    });

    it("when item has childs", function () {
        expect(itemParent.childsHTML()).not.toBeNull();
    });

    it("item should return html", function () {
        expect(itemParent.toHTML()).not.toBeNull();
    });
});
