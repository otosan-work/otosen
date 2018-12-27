const HOST = "127.0.0.1";
const PORT = 8080;
const CLIENT_ID = `id_${ Date.now() }`;

const client = new Paho.MQTT.Client(HOST, PORT, CLIENT_ID);

client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

client.connect({ onSuccess: onConnect, onFailure: onError });


// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  client.subscribe("otosen");
  const message = new Paho.MQTT.Message("Hello");
  message.destinationName = "otosen";
  client.send(message);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.payloadString);
}

function onError(e) {
  console.log(e);
}
