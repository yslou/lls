// Client ID and API key from the Developer Console
      var CLIENT_ID = '369661483799-4p5dv4gbnngfuh8ce8brfc3a03ucmbp5.apps.googleusercontent.com';

      // Array of API discovery doc URLs for APIs
      var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      var SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

      var authorizeButton = document.getElementById('authorize-button');

      var PUB_FOLDER = '0B69rc32vOTFYSWdEUE1SMXRhUlU';

      /* by fearphage@stackoverflow
         https://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format/4673436#4673436
      */
      if (!String.prototype.fmt) {
        String.prototype.fmt = function() {
          var args = arguments;
          return this.replace(/{(\d+)}/g, function(match, number) { 
            return typeof args[number] != 'undefined'
              ? args[number]
              : match;
          });
        };
      }

      function handleGetfile() {
        gapi.client.drive.files.get({'fileId': PUB_FOLDER})
          .then(function(resp) { });

        gapi.client.drive.files.list({
          'q': "'{0}' in parents".fmt(PUB_FOLDER)
        }).then(function (resp) {
          console.log(resp);
          $("#content").empty();
          $.each(resp.result.files, function (idx, val) {
            var elm = $("<span></span>").text(idx + ':' + val.name);
            $("#content").append(elm).append($("<br>"));
          })
        })
      }

      function start() {
        gapi.client.init({
            discoveryDocs: DISCOVERY_DOCS,
            clientId: CLIENT_ID,
            apiKey: 'AIzaSyAwoMfos7xofe0d6u1sMoeGXVfNNQrtoSc',
            scope: SCOPES
        }).then(function () {
            authorizeButton.style.display = 'block';
            authorizeButton.onclick = handleGetfile;
        })
      }
      /**
       *  On load, called to load API client library.
       */
      function handleClientLoad() {
        gapi.load('client', start);
      }