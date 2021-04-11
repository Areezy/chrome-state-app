var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], { type: 'text/plain' });

    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;

  };

var date = new Date();


var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("save").addEventListener('click', onClick, false)
  function onClick() {
    var link = document.getElementById('downloadlink');
    var button = document.getElementById('save');
    var myString = [];
    var startChrome = "start chrome";
    chrome.tabs.query({ currentWindow: true }, function (tabs) {
      for (var i = 0; i < tabs.length; i++) {

        '"' + tabs[i].url + '"'; 
        JSON.stringify(tabs[i].url);
        myString.push(JSON.stringify(tabs[i].url));

        if (i == tabs.length - 1) {
          for (var j = 0; j < tabs.length; j++) {
            startChrome = startChrome.concat(" ");
            var string = String(myString[j]);
            startChrome = startChrome.concat(string);
            startChrome = startChrome.concat(" ");


          }

          link.href = makeTextFile(startChrome);

          button.style.display = 'none';

          link.style.display = 'block';

          var stateName = date.getHours() + "" + date.getMinutes() + "" + date.getSeconds() + "_" + "State.bat";

          link.download =  stateName;
          
        }

      }
    });


  }
});



  





