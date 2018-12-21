const port = 6379;
const host = '10.39.128.102';

const Redis = require('ioredis');
const redis = new Redis(port, host);

async function main() {
    const key = 'veggies';
    const veggies = ['tomato', 'corn', 'eggplant'];
    try {
        const result = await redis.rpush(key, ...veggies);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    redis.disconnect();
}

main();