/**
 * @author: Juan Caicedo<jjcc1421@gmail.com>
 */
/** 
 * IremsRequest structure to manage api request service items
 * @attr{string} url - url to get api
 * @items{item[]} items - last items result of last request
 */
var ItemsRequest = {
    url: '/api/nav.json',
    items: [],
    /**
     * request call to XMLHttpRequest reques to url api
     */
    request: function () {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                ItemsRequest.succes(xmlhttp.responseText);
                itemParent.init();
            }
        };
        xmlhttp.open("GET", ItemsRequest.url, true);
        xmlhttp.send();
    },
    /**
     * Parse a json to items and draw intems on ui
     * succes called when request is succes.
     */
    succes: function (json) {
        var parseJson = (typeof json === 'string') ?
            JSON.parse(json) : json;

        parseJson.items.forEach(function (item) {
            var items = [];
            item.items.forEach(function (item) {
                items.push(
                    new Item(
                        item.label,
                        item.url,
                        null
                    )
                );
            }, this);
            ItemsRequest.items.push(
                new Item(
                    item.label,
                    item.url,
                    items
                )
            );
        }, this);

        ItemsRequest.drawItems();
    },
    /**
     * drawItems: draw all items in ItemsRequest.items
     */
    drawItems: function () {
        var ul = document.querySelector(".top-nav");
        ItemsRequest.items.forEach(function (item) {
            var li = document.createElement("LI");
            li.appendChild(item.toHTML());

            var childsHTML = item.childsHTML();
            if (childsHTML)
                li.appendChild(childsHTML);

            ul.appendChild(li);
        }, this);
    }
}

ItemsRequest.request();

