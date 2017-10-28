angular.module('video-player')
// 
.component('app', {
  // TODO

  controller: function() {
    this.data = exampleVideoData;

    this.selectVideo = function() {

    };

    // the video list click handler
    this.clickHandler = () => {
      
    };
  },

  //template: require('./../templates/app.html')
  templateUrl: 'src/templates/app.html'
});
