SkyFontsStubApp.controller("fontDownloadController", function ($scope, $http, fontSyncFactory,NodeServerFactory, fontDownloadFactory, $location)
{
    $scope.headerSrc = "tmpl/header.html";
    var zlib = require('zlib');
    var fs = require('fs');
    $scope.fontSync = fontSyncFactory.query();


    $scope.downloadFontNonHttp = function (FontContentId) {
         // alert($scope.fontSync.length);
       //    for (i = 0; i < $scope.fontSync.length; i++) { 
                // downloadFont($scope.fontSync[i].FontContentId);

                var chunk = '';
               fontDownloadFactory.query(
                { 
                    fontContentId:$scope.fontSync[0].FontContentId 
                },function(data){
                                  //console.log(data.toString);
                                  //var finalData = new Buffer('1000000');
                                    console.log(data);
                                    //chunk = data+chunk; 
                                    var finalData = '';   
                                    for(var key in data)
                                    {
                                       finalData = finalData+data[key];
                                       //finalData = Buffer.concat([finalData,data[key]]);     
                                    }
                                    //var stream = fs.createWriteStream('myFile.zip');
                                    
                                    //data.on('end', function () {
                                    //console.log("data download");
                                    console.log(finalData);
                                    fs.writeFile('myFile.zip', finalData, function (err,data1) {
                                      if (err) {
                                        return console.log(err);
                                      }
                                      //console.log(data1);
                                    });
                                  //});
                                });
    };



$scope.downloadFont = function (FontContentId) {
/*var req = {
 method: 'GET',
 url: 'http://test.skyfonts.com/api/api/SkyFontData?fontcontentid='+ FontContentId,
  headers: { 
                'Content-type': 'application/octet-stream','AuthCID':'{8AEF4410-7B7F-4DF7-9E33-FF9167805678}','AuthMac': '87585f7a-88af-4bb3-8ad1-7169daf800c2','AuthProvider': 'membership.monotype.com','AuthToken': 'sfbnp9K8Go1KomxcN6aPras1hApRzB0oYmsVvxwS3hoGlrr3h7FPf2ovhFXg9hDi','AuthUserId':'f1865dca-88b5-473e-b26a-38b754de4e5d','AuthUsername': 'b@sf.com'   
             }
};

                                $http(req).success(function(data){
console.log(data, "this is a length");
                                    fs.writeFile('myFile.zip', [{'encoding': 'utf-8'}], data, function (err,data1) {
                                      if (err) {
                                        return console.log(err);
                                      }
                                      //console.log(data1);
                                    });

                            });*/

var request = require('request');
var fs = require('fs');
var AdmZip = require('adm-zip');
var http = require('http');
var url = require('url');
file_url = 'http://test.skyfonts.com/api/api/SkyFontData?fontcontentid=';
var options = {
    host: url.parse(file_url).host,
    port: 80,
    path: url.parse(file_url).pathname,
    headers: { 
                'Content-type': 'application/octet-stream','AuthCID':'{8AEF4410-7B7F-4DF7-9E33-FF9167805678}','AuthMac': '87585f7a-88af-4bb3-8ad1-7169daf800c2','AuthProvider': 'membership.monotype.com','AuthToken': 'sfbnp9K8Go1KomxcN6aPras1hApRzB0oYmsVvxwS3hoGlrr3h7FPf2ovhFXg9hDi','AuthUserId':'f1865dca-88b5-473e-b26a-38b754de4e5d','AuthUsername': 'b@sf.com'   
             }
};
options.path = '/api/api/SkyFontData?fontcontentid='+ FontContentId;
http.get(options, function(res) {
    var data = [], dataLen = 0; 

    res.on('data', function(chunk) {

            data.push(chunk);
            dataLen += chunk.length;

        }).on('end', function() {
            var buf = new Buffer(dataLen);

            for (var i=0, len = data.length, pos = 0; i < len; i++) { 
                data[i].copy(buf, pos); 
                pos += data[i].length; 
            } 


            /*var zip = new AdmZip(buf);
            var zipEntries = zip.getEntries();
            console.log(zipEntries.length)

            for (var i = 0; i < zipEntries.length; i++)
                console.log(zip.readAsText(zipEntries[i])); */
             fs.writeFile('myFile.zip',  buf, function (err,data1) {
                                      if (err) {
                                        return console.log(err);
                                      }
                                      //console.log(data1);
                                    });
        });
});

};

    //Testing the Binding of output from local server
    $scope.NodeServer = function () {

        $scope.MyText = NodeServerFactory.query();


    };

            // alert(response);             
            //  fs.createReadStream('myarchive.zip').pipe(unzip.Extract({ path: 'myabc' }));     
  
});


var gui = require('nw.gui');
    var win = gui.Window.get();
     var tray;

        // Get the minimize event
        win.on('minimize', function() {
          // Hide window
          this.hide();

          // Show tray
          tray = new gui.Tray({ icon: './skyfonts30@2x.png' });

          // Show window and remove tray when clicked
          tray.on('click', function() {
            win.show();
            this.remove();
            tray = null;
          });
});

        
        
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
    console.log('Server lis at http://127.0.0.1:1337/');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');