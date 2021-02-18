// document.addEventListener("DOMContentLoaded",function(){
//     document.querySelector("button").addEventListener('click', onClick, false)
//     function onClick() {
//         alert(chrome.tabs.url);
//     }
// });.

// chrome.tabs.query({active: false, currentWindow: false}, function(tabs){
//     for (var i = 0; i < tabs.length; i++) {
//         console.log(tabs[i].url);
//     }
    
// });


chrome.tabs.getAllInWindow(null, function(tabs){
    for (var i = 0; i < tabs.length; i++) {
        console.log(tabs[i].url);                  
    }
});

