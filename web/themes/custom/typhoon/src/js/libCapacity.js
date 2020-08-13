// APi Endpoint
var baseEndpoint = 'https://api.density.io/v2/';

// API Auth Token
var densityToken = 'tok_X3RAYB1p9dgMYSMU2MICYxD1StPh0Bmx4Jf6gLh1biS';

// API id for room in questions
var space_id = 'spc_825429597414752714';

var densityEl = document.querySelector('.js-densityHook');
var densityMessageEl = densityEl.querySelector('.alert-text--main');

var webSocketOccupants = new XMLHttpRequest();
var initialOccupants = new XMLHttpRequest();

function occupantsAlert(count) {
  var full = count >= 1200;
  var crowded = count > 500 && count < 1200;
  densityEl.classList.remove('lib-alert--red', 'lib-alert--yellow');

  if (full) {
    densityEl.classList.add('lib-alert--red');
    densityMessageEl.innerHTML = 'Unlikely';
  } else if (crowded) {
    densityEl.classList.add('lib-alert--yellow');
    densityMessageEl.innerHTML = 'Likely';
  } else {
    densityEl.classList.add('lib-alert--green');
    densityMessageEl.innerHTML = 'Available';
  }
}

initialOccupants.open('GET', baseEndpoint + 'spaces/' + space_id, true);
initialOccupants.setRequestHeader('Authorization', 'Bearer ' + densityToken);

initialOccupants.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var data = JSON.parse(this.response);
    var count = data.current_count;

    // set html display
    occupantsAlert(count);
  } else {
    console.log('error');
    // We reached our target server, but it returned an error
  }
};

webSocketOccupants.open('POST', baseEndpoint + 'sockets', true);
webSocketOccupants.setRequestHeader('Authorization', 'Bearer ' + densityToken);

webSocketOccupants.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var response = JSON.parse(this.response);
    var densityWS = new WebSocket(response.url);

    densityWS.onmessage = function(event) {
      var data = JSON.parse(event.data);

      if (data.payload.space_id == space_id) {
        var count = data.payload.count;

        occupantsAlert(count);
      }
    };
  } else {
    // We reached our target server, but it returned an error
    console.log('error');
  }
};

initialOccupants.onerror = function() {
  densityMessageEl.innerHTML =
    'An error has occurred. Please try again shortly.';
};

webSocketOccupants.onerror = function() {
  densityMessageEl.innerHTML =
    'An error has occurred. Please try again shortly.';
};

initialOccupants.send();
webSocketOccupants.send();
