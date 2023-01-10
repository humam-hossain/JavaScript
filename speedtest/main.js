const speedTest = require('speedtest-net');
const test = speedTest();
const startTime = Date.now();

test.on('data', data => {
    const currentTime = Date.now();
    if(currentTime - startTime < 3 * 60 * 1000){ //3 minutes
        console.log(`Download speed: ${data.speeds.download} Mbps`);
        console.log(`Upload speed: ${data.speeds.upload} Mbps`);
        console.log(`Latency: ${data.server.latency} ms`);
    } else {
        test.abort();
    }
});

test.on('error', err => {
    console.log(`Error while performing speed test: ${err}`);
});

setInterval(() => {
    test.run();
}, 15000); //15 seconds
