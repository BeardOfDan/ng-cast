angular.module('video-player')
// 
.component('app', {
  // TODO

  controller: function(youTube) {
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];

    // this. = function() {};
    this.searchResults = function() {};

    this.updateVideos = (videos) => {
      this.videos = videos;
      this.currentVideo = videos[0];
    };

    this.result = (query) => {
      youTube.search(query, this.updateVideos);
    };

    // the video list click handler
    this.selectVideo = (video) => {
      this.video = video || exampleVideoData[0];
    };
  },

  //template: require('./../templates/app.html')
  templateUrl: 'src/templates/app.html'
});
