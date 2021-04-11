var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], { type: 'text/plain' });

    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;

  };


document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("button").addEventListener('click', onClick, false)
  function onClick() {
    var link = document.getElementById('downloadlink');
    var myString = [];
    var start_chrome = "start chrome";
    chrome.tabs.query({ currentWindow: true }, function (tabs) {
      for (var i = 0; i < tabs.length; i++) {

        '"' + tabs[i].url + '"'; 
        JSON.stringify(tabs[i].url);
        myString.push(JSON.stringify(tabs[i].url));

        if (i == tabs.length - 1) {
          for (var j = 0; j < tabs.length; j++) {
            start_chrome = start_chrome.concat(" ");
            var string = String(myString[j]);
            start_chrome = start_chrome.concat(string);
            start_chrome = start_chrome.concat(" ");


          }

          //console.log(start_chrome);

          link.href = makeTextFile(start_chrome);

          link.style.display = 'block';
        }

      }
    });


  }
})







