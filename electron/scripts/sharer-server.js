
window.$ = window.jQuery = require('jquery');
const internalIp = require('internal-ip');

$(document).ready(function (){
  updateLocalIP();
  session = window.sessionStorage;
  console.log(sessionStorage);
  $("#team-up-link").text(`localhost:3000/${session.id}`);

  // Testdata
  const JSONData = formatDatabaseJSONObject ();
  console.log("JSONDATA", JSONData);
})

function updateLocalIP() {
  // Using the internalIPAddress, update the local IP
  internalIp.v4()
  .then (result => {
    $("#local-ip-label").text(result);
  })
}

function formatDatabaseJSONObject() {
  /**
   * This formats the MongoDB JSON object
   */
  session = window.sessionStorage;
  let fObject = {}
  fObject.id = session.id;
  fObject.file_name = session.file_name;
  const chunkObjects = JSON.parse(session.chunkInfo);
  fObject.chunks = chunkObjects;
  fObject.size = session.file_size;
  fObject.done = false;

  return fObject;
}