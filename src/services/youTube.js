angular.module('video-player')
.service('youTube', function($http) {
  const search = (options, callback) => {

    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        'part': 'snippet',
        'type': 'video',
        'key': options.key,
        'q': options.query,
        'videoEmbeddable': true,
        'maxResults': options.maxResults
      }
    })
    .then(function(data) {
      callback(data.data.items);
    });

  };

  return { search };
});


