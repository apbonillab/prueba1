function Item(label, url, items) {
    this.label = label;
    this.url = url ? url : '#';
    this.items = items ? items : [];
}

Item.prototype.toHTML = function () {

    /*var itemHTML =
        '<a href="' + this.url + '" target="_blank">' +
        this.label +
        '</a>';*/

    var itemHTML = document.createElement("A");

    if (this.items.length > 0) {
        itemHTML.setAttribute('href', '#');
        itemHTML.className = "parent-start";
        var label = document.createTextNode(this.label);
        itemHTML.appendChild(label);
    }
    else {
        itemHTML.setAttribute('href', this.url);
        itemHTML.setAttribute('target', '_blank');
        var label = document.createTextNode(this.label);
        itemHTML.appendChild(label);
    }

    return itemHTML;

}

Item.prototype.childsHTML = function () {

    var childsHTML = document.createElement("UL");
    childsHTML.className = "child-start"
    //childsHTML = '<ul class="child-start">';

    this.items.forEach(function (item) {
        //childsHTML += item.toHTML()
        childsHTML.appendChild(item.toHTML())
    }, this);

    if (this.items.length > 0)
        return childsHTML;
    else
        return null;

}

