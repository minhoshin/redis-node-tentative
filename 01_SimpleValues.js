const port = 6379;
const host = '10.39.128.102';

const Redis = require('ioredis');
const redis = new Redis(port, host);

async function main() {
    try {
        await redis.set('cat', 'Garfield');
    } catch (error) {
        console.error(error);
    }
    redis.disconnect();
}

main();