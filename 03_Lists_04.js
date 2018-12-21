const port = 6379;
const host = '10.39.128.102';

const Redis = require('ioredis');
const redis = new Redis(port, host);

async function main() {
    const key = 'veggies';
    try {
        const veggies = await redis.lrange(key, 0, -1);
        veggies.forEach(v => console.log(v));
    } catch (error) {
        console.error(error);
    }
    redis.disconnect();
}

main();