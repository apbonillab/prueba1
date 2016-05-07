/**
 * @author: Juan Caicedo<jjcc1421@gmail.com>
 * 
 * Request to service items
 */
var ItemsRequest = {
    url: '/api/nav.json',
    result: null,
    request: function () {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                ItemsRequest.result = ItemsRequest.succes(xmlhttp.responseText);
            }
        };
        xmlhttp.open("GET", ItemsRequest.url, true);
        xmlhttp.send();
    },
    succes: function (json) {
        var parseJson = (typeof json === 'string') ?
            JSON.parse(json) : json;
        return parseJson;
    }
}

