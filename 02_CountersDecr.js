const port = 6379;
const host = '10.39.128.102';

const Redis = require('ioredis');
const redis = new Redis(port, host);

async function main() {
    const key = 'team1';
    try {
        const points = await redis.decr(key);
        console.log(points);
    } catch (error) {
        console.error(error);
    }
    redis.disconnect();
}

main();