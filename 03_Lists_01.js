const port = 6379;
const host = '10.39.128.102';

const Redis = require('ioredis');
const redis = new Redis(port, host);

async function main() {
    const key = 'veggies';
    const vegetable = 'tomato';
    try {
        const result = await redis.rpush(key, vegetable);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    redis.disconnect();
}

main();