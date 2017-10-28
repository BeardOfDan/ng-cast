angular.module('video-player')
// 
.component('app', {
  // TODO

  controller: function(youTube) {
    this.data = exampleVideoData;
    this.video = exampleVideoData[0];

    this.result = function(query) {
      youTube.search(query);
    };

    // the video list click handler
    this.clickHandler = (video) => {
      this.video = video || exampleVideoData[0];
    };
  },

  //template: require('./../templates/app.html')
  templateUrl: 'src/templates/app.html'
});
