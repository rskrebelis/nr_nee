(() => {
  chrome.runtime.sendMessage({action: 'getGifs'}, function(response) {
    const gifs = response.gifs || [
      // Add default GIF URLs here.
      "https://media0.giphy.com/media/3o7527pa7qs9kCG78A/giphy.gif",
      "https://media3.giphy.com/media/HzkZeQM6aHcodITVXf/giphy.gif",
      "https://media.giphy.com/media/bbshzgyFQDqPHXBo4c/giphy.gif",
      "https://media3.giphy.com/media/HzkZeQM6aHcodITVXf/giphy.gif",
      "https://media2.giphy.com/media/TJxrHj7AurjqljHSv2/giphy.gif",
      "https://i.imgur.com/9pXTSnI.gif",
    ];

    // Choose a random GIF from the array
    const gifUrl = gifs[Math.floor(Math.random() * gifs.length)];

    // Set the body of the page to the selected GIF
    document.body.innerHTML = `<img src="${gifUrl}" style="width: 100%; height: auto; max-width: 50%; max-height: 50%;">`;
  });
})();
