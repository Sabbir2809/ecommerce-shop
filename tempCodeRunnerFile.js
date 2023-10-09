/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'ecommerceDB';
const collection = 'NEW_COLLECTION_NAME';

// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection);

db.use.insertMany([{
  "_id": {
    "$oid": "6523f504caeadcd818561fb0"
  },
  "name": "Free Delivery",
  "description": "For All Orders Over $99",
  "img": "https://photo.teamrabbil.com/images/2023/10/09/f1.png"
},{
  "_id": {
    "$oid": "6523f504caeadcd818561fb1"
  },
  "name": "90 Days Return",
  "description": "If goods have problem",
  "img": "https://photo.teamrabbil.com/images/2023/10/09/f2.png"
},{
  "_id": {
    "$oid": "6523f504caeadcd818561fb2"
  },
  "name": "Secure Payment",
  "description": "100% Secure Payment",
  "img": "https://photo.teamrabbil.com/images/2023/10/09/f3.png"
},{
  "_id": {
    "$oid": "6523f504caeadcd818561fb3"
  },
  "name": "24/7 Support",
  "description": "Dedicated Support",
  "img": "https://photo.teamrabbil.com/images/2023/10/09/f4.png"
}])

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
