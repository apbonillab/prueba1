/**
 * @author: Juan Caicedo<jjcc1421@gmail.com>
 * 
 * Request to service items
 */
var ItemsRequest = {
    url: '/api/nav.json',
    result: null,
    items: [],
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
    drawItems: function () {
        //var navBar = document.getElementById("navbar");
        //var ul = document.createElement("UL");
        var ul = document.querySelector(".top-nav");
        //ul.className = 'top-nav';
        ItemsRequest.items.forEach(function (item) {
            var li = document.createElement("LI");
            li.appendChild(item.toHTML());

            var childsHTML = item.childsHTML();
            if (childsHTML)
                li.appendChild(childsHTML);

            ul.appendChild(li);
        }, this);
        /*container += '</ul>';*/
        //navBar.appendChild(ul);
    }
}

ItemsRequest.request();

