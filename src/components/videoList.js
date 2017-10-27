angular.module('video-player')
.component('videoList', {
  // TODO
  bindings: {
    videos: '<'
  },

  controller: function() {
    // console.log(this.videos);
  },

  templateUrl: '/src/templates/videoList.html'
});
