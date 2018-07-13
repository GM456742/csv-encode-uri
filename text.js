var fs = require('fs');
var itemCSV = '';
var locationCSV = '';
var itemTagsCSV = '';


fs.readFile('live_inventory.csv', 'utf8', (err, data) => {
    
    if (err) throw err;

    data.replace('\n', '')
    data = data.split(',')



    for (var i = 0; i < data.length; i = i + 7) {

        itemCSV = itemCSV + data[i + 1] + ',' + data[i + 3] + ',' + '\n'
 
    }
fs.writeFile('item.csv', itemCSV, (err) => {
    if (err) throw err;
    })

    for (var i = 0; i < data.length; i = i + 7) {
    
        locationCSV = locationCSV + data[i + 7] + ',' + 'SKU' + ',' + 'SWP' + ',' + 'overstock' + ',' + '\n'
    }
fs.writeFile('location.csv', locationCSV, (err) => {
        if (err) throw err;
    })

    for (var i = 0; i < data.length; i = i + 7) {
        itemTagsCSV = itemTagsCSV + data[0] + ','+ 'SKU' + ',' + '\n'
    }
fs.writeFile('itemtags.csv', itemTagsCSV, (err) => {
    if (err) throw err;
})
    });