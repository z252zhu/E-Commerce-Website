const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017/user';
const client = new MongoClient(url);

// Database Name
const dbName = 'user';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected Successfully to Server');
  const db = client.db(dbName);
  const collection = db.collection('userinfo');

  // the following code examples can be pasted here...

  return 'Done';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());