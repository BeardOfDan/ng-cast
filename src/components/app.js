angular.module('video-player')
.component('app', {

  controller: function(youTube) {
    // callback function for the youtube search
    this.searchResults = (videos) => {
      this.videos = videos;
      this.currentVideo = videos[0];
    };

    // search for youtube videos
    this.result = (query) => {
      const options = {'query': query, 'maxResults': 5, 'key': window.YOUTUBE_API_KEY};
      youTube.search(options, this.searchResults);
    };

    // initialize the videos
    this.result('asdf');
    
    // the video list click handler
    this.selectVideo = (video) => {
      this.currentVideo = video || exampleVideoData[0];
    };
  },

  templateUrl: 'src/templates/app.html'
});
