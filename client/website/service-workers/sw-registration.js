/**
 * Created by Phil on 2016-06-27.
 */

var TempWorker = new Worker(URL.createObjectURL(new Blob(["("+worker_function.toString()+")()"], {type: 'text/javascript'})));

if (false && window.navigator.serviceWorker) {
  navigator.serviceWorker.register("sw.js", {scope: './'})
    .then(function (ServiceWorkerRegistration) {

      // Registration successful
      console.log('ServiceWorker registration successful with scope: ', ServiceWorkerRegistration.scope);

      // Check if ServiceWorker is active
      if (ServiceWorkerRegistration.active) {
        console.log('ServiceWorker ' + ServiceWorkerRegistration.active.state);
      }

      // No ServiceWorker is installed
      // meaning we just registered the latest version - exit
      if (!navigator.serviceWorker.controller) {
        return;
      } else {
        // An update might be coming,
        // if the user choose to accept the update
        // the current ServiceWorker is discarded - reload the page
        navigator.serviceWorker.controller.addEventListener('statechange', function () {
          window.location.reload();
        });
        // TODO why is this not triggered ?
        navigator.serviceWorker.addEventListener('controllerchange', function () {
          window.location.reload();
        })
      }

      // A new ServiceWorker is being installed
      ServiceWorkerRegistration.addEventListener('updatefound', function (event) {
        console.log('ServiceWorker update available');
        if (event.currentTarget.installing) {
          ServiceWorkerRegistration.installing.addEventListener('statechange', function () {
            // A new ServiceWorker is installed - prompt the user to update
            if (this.state === 'installed') {
              console.log('ServiceWorker ready to update');
              updateReady(event.currentTarget.waiting);
            }
          })
        } else if (event.currentTarget.waiting){
          // A new ServiceWorker is already waiting - prompt the user to update
          console.log('ServiceWorker ready to update');
          updateReady(event.currentTarget.waiting);
        }
      });

      // Installing service worker
      if (ServiceWorkerRegistration.installing) {
        console.log('ServiceWorker installing');
        // Notify the user when installation is completed
        ServiceWorkerRegistration.installing.addEventListener('statechange', function () {
          if (this.state === 'installed') {
            console.log('ServiceWorker installed');
          }
        })
      }

      // A new ServiceWorker is already waiting - prompt the user to update
      if (ServiceWorkerRegistration.waiting) {
        console.log('ServiceWorker update available');
        updateReady(ServiceWorkerRegistration.waiting);
      }

    })
    .catch(function (error) {
      // Registration failed
      console.log('ServiceWorker registration failed: ', error);
    });

} else {
  console.log("ServiceWorker not supported")
}

function updateReady(reg) {
  var updateButton = document.createElement('button');
  updateButton.onclick = function () {
    reg.postMessage({
      action: 'update'
    });
  };
  updateButton.textContent = 'Update service worker';
  document.body.appendChild(updateButton);
}
