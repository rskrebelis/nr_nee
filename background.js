chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getGifs') {
      chrome.storage.sync.get('gifs', function(data) {
        sendResponse({gifs: data.gifs});
      });
      return true;  // Will respond asynchronously.
    }
  });
  