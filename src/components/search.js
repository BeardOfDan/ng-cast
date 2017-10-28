angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    result: '<'
  },

  controller: function(youTube) {
    this.query = '';

    this.search = (query) => {
      this.result(query);
    };
  },

  templateUrl: 'src/templates/search.html'
});
