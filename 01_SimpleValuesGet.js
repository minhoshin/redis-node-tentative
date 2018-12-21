const port = 6379;
const host = '10.39.128.102';

const Redis = require('ioredis');
const redis = new Redis(port, host);

async function main() {
    const key = 'cat';
    try {
        await redis.set(key, 'Garfield');
        const result = await redis.get(key);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    redis.disconnect();
}

main();