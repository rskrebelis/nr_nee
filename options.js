// When the options page is loaded, load the currently stored GIF URLs
document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.sync.get('gifs', function(data) {
      document.getElementById('gifs').value = (data.gifs || []).join('\n');
    });
  });
  
  // When the form is submitted, save the GIF URLs
  document.getElementById('optionsForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Don't actually submit the form
    const gifUrls = document.getElementById('gifs').value.split('\n');
    chrome.storage.sync.set({gifs: gifUrls});
  });
  