describe("ItemsRequest", function () {
    beforeEach(function () {
        ItemsRequest.request();
    });

    it("request works", function () {
        ItemsRequest.request();
        var result = ItemsRequest.result;
        expect(result).not.toBeNull();

        //expect(player).toBePlaying(song);
    });


});
