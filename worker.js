

process.on('message', function(mem) {




    var fs = require('fs');
    fs.appendFile('log.json',JSON.stringify(mem) + ','  , encoding='utf8', function (err) {
        process.send("Written");
    });
});