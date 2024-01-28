document.getElementById('addItem').addEventListener('click', function() {
    var item = document.getElementById('itemInput').value;
    if (item) {
        var listItem = document.createElement("li");
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        var textnode = document.createTextNode(item);
        listItem.appendChild(checkBox);
        listItem.appendChild(textnode);
        document.getElementById('checklistContainer').appendChild(listItem);
        document.getElementById('itemInput').value = "";
    }
});

document.getElementById('printChecklist').addEventListener('click', function() {
    window.print();
});
