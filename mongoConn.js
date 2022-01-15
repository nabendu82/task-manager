const { MongoClient, ObjectID } = require('mongodb')

const connURL = 'mongodb://127.0.0.1:27017'
const dbName = 'task-manager'

MongoClient.connect(connURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) return console.log('Unable to connect to database!')

    const db = client.db(dbName)
    // db.collection('users').insertOne({
    //     name: 'Piyu',
    //     age: 3
    // })
    // .then(result => console.log("Data inserted", result.ops))
    // .catch((error) => console.log(error))

    // db.collection('users').insertMany([
    //     {
    //         name: 'Rishab',
    //         age: 1
    //     },
    //     {
    //         name: 'Rahul',
    //         age: 27
    //     }
    // ])
    // .then(result => console.log("Data inserted -->", result.ops))
    // .catch((error) => console.log(error))

    // db.collection('users').findOne({ name: 'Piyu'})
    //     .then(result => console.log("Data found", result))
    //     .catch((error) => console.log(error))

    // db.collection('users').find({ name: 'Piyu'})
    //     .toArray()
    //     .then(result => console.log("Data found --> ", result))
    //     .catch((error) => console.log(error))

    // db.collection('users').updateOne({ _id: new ObjectID("61dc294ae4698d5fd0f4cc0e")},
    //     { $set: { name: 'Radha'}})
    //     .then(result => console.log("Updated data --> ", result.modifiedCount))
    //     .catch((error) => console.log(error))

    // db.collection('users').updateMany({ age: 3 },
    //     { $set: { age: 4}})
    //     .then(result => console.log("Updated data --> ", result.modifiedCount))
    //     .catch((error) => console.log(error))

    db.collection('users').deleteOne({ _id: new ObjectID("61da83a66e9b9fa7c8873b8d") })
        .then(result => console.log("Deleted data --> ", result.deletedCount))
        .catch((error) => console.log(error))

    db.collection('users').deleteMany({ age: 39 })
        .then(result => console.log("Deleted data --> ", result.deletedCount))
        .catch((error) => console.log(error))

})