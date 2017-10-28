angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    result: '<',
    callback: '<'
  },

  controller: function(youTube) {
    this.query = '';
  
    this.search = (query) => {
      const options = {'query': query, 'maxResults': 5, 'key': window.YOUTUBE_API_KEY};
      youTube.search(options, () => {});
      return this.result(query);
    };
  },

  templateUrl: 'src/templates/search.html'
});
