angular.module('video-player')
.service('youTube', function() {
  // TODO


  const search = (query) => {
    console.log(query);
  };

  return { search: search };

  // $http({
  //   method: 'GET',
  //   url: 'https://www.googleapis.com/youtube/v3/search',
  //   data: {
  //     'part': 'snippet',
  //     'type': 'video',
  //     'key': YOUTUBE_API_KEY,
  //     'q': query,
  //     'videoEmbeddable': true,
  //     'maxResults': 5
  //   }
  // });
});


// const baseUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=';

//   const query = options.query;

//   const limit = options.max;

//   const key = options.key;
  
//   const example = 'https://www.youtube.com/results?search_query=example';

//   // GET https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=QUERY&type=video&key={YOUR_API_KEY}


//   const url = '' + baseUrl + limit + '&q=' + query + '&type=video&key=' + key;

//   //. 'https://www.googleapis.com/youtbe/v3/search'


//   const data = {
//     'part': 'snippet',
//     'type': 'video',
//     'key': 'API_KEY',
//     'q': query,
//     'videoEmbeddable': true,
//     'maxResults': limit
//   };

//   $.ajax({
//     'url': url,
//     'key': key,
//     'type': 'GET',
//     'data': data,
//     'contentType': 'application/json',
//     success: function(data) {
//       callback(data.items);     
//     },
//     error: function(data) {
//       console.log('oh no', data);

//       console.log('\n\n' + data.responseText + '\n\n');
//     }
//   });



// };