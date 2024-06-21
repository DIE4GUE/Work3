function add_item() {
    const item = document.getElementById("box");
    const list_item = document.getElementById("list_item");

    if (item.value !== "") {
        const make_li = document.createElement("LI");
        make_li.appendChild(document.createTextNode(item.value));
        list_item.appendChild(make_li);
        item.value = "";

        make_li.addEventListener("click", function() {
            this.parentNode.removeChild(this);
        });
    } else {
        alert("Please add a value to the item.");
    }
}