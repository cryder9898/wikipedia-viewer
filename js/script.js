$(document).ready(function() {
  "use strict";

  var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&namespace=0&limit=10&origin=*&search=';

  function setWikiResults(data) {
    let list;

    list = data.map(function (x, i) {
      let titles = data[1];
      let extracts = data[2];
      let urls = data[3];

      return '<li><a href="' + urls[i] + '" target="_blank"><h3>' + titles[i] + '</h3>' + extracts[i] + '</a></li>';
    }).join('');

    $('#wikilist').append(list);
  }

  $('#searchButton').click(function() {
    const query = $('#search').val();
    if (query !== '' && typeof query !== 'undefined') {
      $.getJSON(url + encodeURIComponent(query), function(data) {
        $('#wikilist').empty();
        setWikiResults(data);
      });
    }
  });

});
