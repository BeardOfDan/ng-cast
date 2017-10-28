angular.module('video-player')
.service('youTube', function($http) {
  const search = (query, callback) => {

    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        'part': 'snippet',
        'type': 'video',
        'key': window.YOUTUBE_API_KEY,
        'q': query,
        'videoEmbeddable': true,
        'maxResults': 5
      }
    })
    .then(function(data) {
      callback(data.data.items);
    });

  };

  return { search};
});


