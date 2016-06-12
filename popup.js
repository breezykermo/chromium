function paideiafy(language) {
  chrome.tabs.insertCSS({
    file: "contentscripts/pace.css"
  });
  chrome.tabs.executeScript({
    file: 'contentscripts/pace.js'
  });
  chrome.tabs.insertCSS({
    file: 'contentscripts/my.css'
  });
  chrome.tabs.executeScript({
    file: 'contentscripts/paideiafy.js'
  });

  var runScript;
  if (language === 'latin') {
    runScript = 'runPaideiaChromium("latin")';
  } else {
    runScript = 'runPaideiaChromium("greek")';
  }

  chrome.tabs.executeScript({
    code: runScript,
  });
}

document.getElementById('paideia-latin').addEventListener('click', function() { paideiafy('latin') });
document.getElementById('paideia-greek').addEventListener('click', function() { paideiafy('greek') });

// should also have scrolling capacity for large entries.