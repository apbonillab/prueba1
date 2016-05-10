/**
 * @author Juan Caicedo<jjcc1421@gmail.com>
 **/

/** 
* Item class that instanciate one item object in api example
* @param {string} label - item's label 
* @param {string|null} url - url route
* @param {item[]|null} items - children navegation items
*/
function Item(label, url, items) {
    this.label = label;
    this.url = url ? url : '#';
    this.items = items ? items : [];
}

/**
 * toHTML return the HTML node about item
 * @return {Element<UL>}
 */
Item.prototype.toHTML = function () {
    var itemHTML = document.createElement("A");
    if (this.items.length > 0) {
        itemHTML.setAttribute('href', '/#/');
        itemHTML.className = "parent-start";
        var label = document.createTextNode(this.label);
        itemHTML.appendChild(label);
    }
    else {
        itemHTML.setAttribute('href', this.url);
        var label = document.createTextNode(this.label);
        itemHTML.appendChild(label);
    }
    return itemHTML;
}
/**
 * childsHTML return the childs node about item if don't have childs return null 
 * @return {Element<UL>|null}
 */
Item.prototype.childsHTML = function () {
    var childsHTML = document.createElement("UL");
    childsHTML.className = "child-start"
    this.items.forEach(function (item) {
        childsHTML.appendChild(item.toHTML())
    }, this);
    if (this.items.length > 0)
        return childsHTML;
    else
        return null;
}

