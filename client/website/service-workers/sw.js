function worker_function(){
  var sw = self;

  var swVersion = 0.1;

  sw.addEventListener('message', function (event) {
    if (event.data.action === 'update') {
      // The ServiceWorkerGlobalScope.skipWaiting() method of the ServiceWorkerGlobalScope
      // forces the waiting service worker to become the active service worker.
      sw.skipWaiting();
    }


var func= event.data.action;


    func(event.data.number);
  });


  sw.addEventListener('fetch', function (event) {
    //console.log(event.request);

    //event.respondWith(
    //  fetch(event.request)
    //    .then(function (res) {
    //      if (res.status === 404) {
    //        console.log('new');
    //        return fetch("image.png");
    //      }
    //      return res;
    //    }).catch(function () {
    //      return new Response("Probably offline");
    //    })
    //);

    // intercept request and returns valid HTML
    //event.respondWith(
    //  new Response('hello <mark>world</mark>', {
    //    headers: {
    //      "Content-Type": "text/html"
    //    }
    //  }));

    // intercept request and modify response headers
    //event.respondWith(
    //  new Response('Hello world', {
    //    headers: {
    //      'foo': 'bar'
    //    }
    //  })
    //);
  });
}

// This is in case of normal worker start
if(window!=self)
  worker_function();

