const port = 6379;
const host = '182.173.184.87';

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