document.getElementById('addItem').addEventListener('click', function() {
    var itemText = document.getElementById('itemInput').value;
    if (itemText) {
        var listItem = document.createElement('li');
        listItem.innerHTML = '<input type="checkbox">' + itemText;
        document.getElementById('checklist').appendChild(listItem);
        document.getElementById('itemInput').value = '';
    }
});

document.getElementById('printList').addEventListener('click', function() {
    window.print();
});
