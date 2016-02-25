/* ********
  AUTHOR: Lachlan Kermode
  DATE: 25 February 2016 (Thursday)
  DESCRIPTION: enable double click to transform selected word into either greek or latin
  NOTES:
    jquery preloaded in 'manifest.json'

******** */
// function fetchJSONFile(path, callback) {
//     var httpRequest = new XMLHttpRequest();
//     httpRequest.onreadystatechange = function() {
//         if (httpRequest.readyState === 4) {
//             if (httpRequest.status === 200) {
//                 var data = JSON.parse(httpRequest.responseText);
//                 if (callback) callback(data);
//             }
//         }
//     };
//     httpRequest.open('GET', path);
//     httpRequest.send();
// }

console.log('running paideiafy.js');

function rmPanel() {
  var last = document.getElementById('paideia-panel');
  if (last) last.remove();
}

function insertDiv(child) {
  var div = document.createElement('div');
  div.setAttribute('id', 'paideia-panel');
  div.setAttribute('style', 'position: fixed; top: 1em; right: 1em; padding: 10px 20px; '
    +'border: 1px solid #007095; border-radius: 2em; max-width: 34em;'
    +' word-wrap: break-word; background-color: aliceblue; z-index:999;');

  rmPanel()

  var rawHTML = child;
  var innerDiv = document.createElement('div');
  innerDiv.innerHTML = rawHTML;
  div.appendChild(innerDiv);
  document.body.appendChild(div);
}

function manualSearch() {
  insertDiv(
    '<div class="container" id="paideia-panel"><div class="row">' +
    '<h2 style="margin:0;">Sorry!</h2> ' +
    '<p>We couldn\'t find any results for this entry. Try typing the word manually.</p>' +
    '</div><div class="row">' +
    '<div class="col-xs-6 col-xs-offset-3 paideia-input">' +
    '  <input type="text" id="manual-paideia-entry" class="form-control" placeholder="puellam">' +
    '  <br>' +
    '  <div style="text-align:center;">' +
    '    <button class="paideia-button" type="submit" id="manual-paideia-search">Search</button>' +
    '    <button class="paideia-button" id="cancel-paideia">Cancel</button>' +
    '  </div>' +
    '</div>' +
    '</div></div>'
  );
  $('#manual-paideia-search').click(function() {
    var manualPaideiaEntry = $('#manual-paideia-entry').val();
    rmPanel();
    console.log(manualPaideiaEntry);
    paidieaify(manualPaideiaEntry);
  });
  $('#cancel-paideia').click(rmPanel);
}

function paidieaify(word, language) {
  var langCode = 'la'; // latin by default
  if (language == 'greek') {
    langCode = 'greek';
  }
  var settings = {
    "async": true,
    "crossDomain": true,
    // "url": "http://www.archives.nd.edu/cgi-bin/wordz.pl?keyword="+word,
    url: 'http://www.perseus.tufts.edu/hopper/morph?l='+ word + '&la='+langCode,
    "method": "GET",
    "headers": {
      "cache-control": "no-cache"
    }
  }

  $.ajax(settings).done(function (response) {
    var toReturn = (response === null) ? info.selectionText : response;

    // create jquery object from HTML
    var perseus = $('<div/>').html(toReturn).contents();
          lemma = perseus.find('.lemma');
          resultFound = perseus.find('.lemma').html(); // will be undefined if perseus finds no results

    console.log(resultFound);
    if (resultFound) {
      var header = lemma.find('.lemma_header').prop('outerHTML');
            table = lemma.find('table').addClass('paideia-table').prop('outerHTML');
      insertDiv('<div id="paideia-panel">' + header + "<br />" + table + '</div>');
      $('#paideia-panel').click(rmPanel);
    } else {
      manualSearch()
    }
  });
}

function runPaideiaChromium(language) {
  document.body.addEventListener('dblclick', function(info) {
    paidieaify(window.getSelection().toString(), language)
  });
}