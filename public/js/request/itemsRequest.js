/**
 * @author: Juan Caicedo<jjcc1421@gmail.com>
 * 
 * Request to service items
 */
var itemsRequest = {
    url: '/api/nav.json',
    request: function () {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var myArr = JSON.parse(xmlhttp.responseText);
                myFunction(myArr);
            }
        };
        xmlhttp.open("GET", itemsRequest.url, true);
        xmlhttp.send();
    },
    succes: function (json) {
        var parseJson = (typeof json === 'string') ?
            JSON.parse(json) : json;
        return parseJson;
    }

}

