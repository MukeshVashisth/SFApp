SkyFontsStubApp.factory('fontSyncFactory', function ($resource) {
  return $resource('http://test.skyfonts.com/api/api/skyfontsuse?iscount=false&pageNumber=1&itemsPerPage=2000&macDeviceName=87585f7a-88af-4bb3-8ad1-7169daf800c2',
    { }, {
        query: {
            method: 'GET',
            isArray: true,
            headers: { 
             	'AuthCID':'{8AEF4410-7B7F-4DF7-9E33-FF9167805678}','AuthMac': '87585f7a-88af-4bb3-8ad1-7169daf800c2','AuthProvider': 'membership.monotype.com','AuthToken': 'sfbnp9K8Go1KomxcN6aPras1hApRzB0oYmsVvxwS3hoGlrr3h7FPf2ovhFXg9hDi','AuthUserId':'f1865dca-88b5-473e-b26a-38b754de4e5d','AuthUsername': 'b@sf.com'
             
             }
            }
		});
});


SkyFontsStubApp.factory('fontDownloadFactory', function ($resource) {
return $resource('http://test.skyfonts.com/api/api/SkyFontData?fontcontentid=:fontContentId',{fontContentId:'@id'}, {
        query: {
            method: 'GET',
            isArray: false,
            headers: { 
             	'Content-type': 'application/octet-stream','AuthCID':'{8AEF4410-7B7F-4DF7-9E33-FF9167805678}','AuthMac': '87585f7a-88af-4bb3-8ad1-7169daf800c2','AuthProvider': 'membership.monotype.com','AuthToken': 'sfbnp9K8Go1KomxcN6aPras1hApRzB0oYmsVvxwS3hoGlrr3h7FPf2ovhFXg9hDi','AuthUserId':'f1865dca-88b5-473e-b26a-38b754de4e5d','AuthUsername': 'b@sf.com'   
             }
            }
		});
});


//calling localhttpserver
SkyFontsStubApp.factory('NodeServerFactory', function ($resource) {
    return $resource('http://127.0.0.1:1337',
        { }, {
            query: {
                method: 'GET',
                isArray: false
            }
        });
});

