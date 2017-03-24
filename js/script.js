$(document).ready(function() {
  "use strict";
  
  function getTitles(data) {
    return data[1];
  }

  function getExtracts(data) {
    return data[2];
  }

  function getURLs(data) {
    return data[3];
  }

  function setWikiResults(titles, extracts, urls) {
    var list = '';
    for (var i = 0; i < titles.length; i++) {
      list += '<a href="' + urls[i] + '" target="_blank"><li><h3>' + titles[i] + '</h3>' + extracts[i] + '</li></a>';
    }
    $('#wikilist').append(list);
  }

  $('#searchButton').click(function() {
    var query = $('#search').val();

    if (query !== '' && typeof query !== 'undefined') {
      var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&namespace=0&limit=10&origin=*&search=';

      $.getJSON(url + encodeURIComponent(query), function(data) {
        $('#wikilist').empty();
        var titles = getTitles(data);
        var extracts = getExtracts(data);
        var urls = getURLs(data);
        setWikiResults(titles, extracts, urls);
      });
    }

  });
  
});