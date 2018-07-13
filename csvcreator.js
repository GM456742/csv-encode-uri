// var fs = require('fs');
// import flavors_of_cacao from 'flavors_of_cacao.csv';
// console.log('test');

$(function () {
console.log(d3);

    // d3.csv('flavors_of_cacao.csv', (rawData) => {
        $.load("./flavors_of_cacao.csv", function (rawData) {
            // if (error) console.error;
          
            // console.log(tvData);
        console.log('rawData', rawData);
        var stockData = rawData;
        // stockData = stockData.splice(0, 2);


        function convertArrayOfObjectsToCSV(args) {
            console.log('args', args);
            var result, ctr, keys, columnDelimiter, lineDelimiter, data;

            data = args[0];


            columnDelimiter = args.columnDelimiter || ',';
            lineDelimiter = args.lineDelimiter || '\n';

            keys = Object.keys(data);

            result = '';
            result += keys.join(columnDelimiter);
            result += lineDelimiter;

            args.forEach(function (item) {
                ctr = 0;
                keys.forEach(function (key) {
                    if (ctr > 0) result += columnDelimiter;

                    result += item[key];
                    ctr++;
                });
                result += lineDelimiter;
            });

            return result;
            //  console.log(result);
        }

        // convertArrayOfObjectsToCSV(stockData);

        function downloadCSV(args) {
            var data, filename, link;
            var csv = convertArrayOfObjectsToCSV(args);
            // if (csv == null) return;

            filename = args.filename || 'export.csv';

            if (!csv.match(/^data:text\/csv/i)) {
                csv = 'data:text/csv;charset=utf-8,' + csv;
            }
            data = encodeURI(csv);

            var id = document.getElementById('div');
            link = document.createElement('a');
            id.appendChild(link);
            link.setAttribute('href', data);
            link.setAttribute('download', filename);
            link.innerText = 'Download CSV';
        }
        downloadCSV(stockData);
    });

});