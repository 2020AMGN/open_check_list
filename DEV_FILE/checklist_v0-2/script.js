document.getElementById('addItem').addEventListener('click', function() {
    var item = document.getElementById('itemInput').value;
    if (item) {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(item);
        node.appendChild(textnode);
        document.getElementById('checklistContainer').appendChild(node);
        document.getElementById('itemInput').value = "";
    }
});

document.getElementById('printChecklist').addEventListener('click', function() {
    window.print();
});
