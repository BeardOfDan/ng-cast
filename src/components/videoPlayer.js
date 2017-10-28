angular.module('video-player')

.component('videoPlayer', {
  // TODO
  bindings: {
    video: '<'
  },

  controller: function() {
    // console.log(this.video);
  },

  templateUrl: 'src/templates/videoPlayer.html'
});
