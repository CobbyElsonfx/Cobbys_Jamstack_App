const { MongoClient } = require('mongodb');

const url = process.env['DB_URL'];
const client = new MongoClient(url);

async function main() {
    await client.connect();
    const data = await client.db("get-coffee").collection('available-coffees').find().toArray()
    return {
        "body": data
    }
}

exports.main = main