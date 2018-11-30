chrome.runtime.onMessage.addListener(
    function(message, callback) {
        if (message == “runContentScript”){
            chrome.tabs.executeScript({
                //file: 'https://davidvarney.github.io/bookmarklets/movehq/timeassist.js'
                file: 'https://davidvarney.github.io/js/movehq/browser_extensions/chrome/timeassist.js'
            });
        }
    }
);
