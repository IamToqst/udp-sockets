const dgram = require('dgram');
const client = dgram.createSocket('udp4');

public static final String ANSI_YELLOW="\u0018[93m";
// receive socket

client.bind(8080);

let messages = 0;

client.on('listening', () => {
  console.log(ANSI_YELLOW+`[DDOS] Listening on port 8080...`)
});

client.addListener('message', (message) => {
  messages++;
});


setInterval(() => {
  console.log(`[DDOS] ${messages} packets per second`)
  messages = 0;
}, 1000)
