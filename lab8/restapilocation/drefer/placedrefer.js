var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
const dbName="test";
const collection="place";
const {ObjectId} = require('mongodb');

class Placedrefer{
    static addPlace(place){
        return new Promise((resolve, reject)=>{
            MongoClient.connect(url).then((db)=>{
                let dbo = db.db(dbName);
                dbo.collection(collection).insertOne(place).then((d)=>{
                    const message=d.insertedCount + " document(s) inserted successfully";
                    console.log(message);
                    resolve(message);
                    db.close();
                }).catch((err)=>{
                    db.close();
                    console.log(err.message);
                    reject(err.message);
                });
            }).catch((err)=>{
                console.log(err.message);
                reject(err.message);
            });
        });
    }


    static getPlace(id){
        return new Promise((resolve, reject)=>{
            MongoClient.connect(url).then((db)=>{
                var dbo = db.db(dbName);
                dbo.collection(collection).find({_id:new ObjectId(id)}).toArray(function(err, result) {
                    if (err) {
                        reject('Unable to reterive data from database');
                    }
                    db.close();
                    console.log('Successfully reterived data from database');
                    resolve(JSON.stringify(result, null, '\t'));
                  });  
            }).catch((err)=>{
                reject(err.message);
            });
        })
    }

    static getPlaces(){
        return new Promise((resolve, reject)=>{
            MongoClient.connect(url).then((db)=>{
                var dbo = db.db(dbName);
                dbo.collection(collection).find().toArray(function(err, result) {
                    if (err) {
                        reject('Unable to reterive data from database');
                    }
                    db.close();
                    console.log('Successfully reterived data from database');
                    console.log(JSON.stringify(result));
                    resolve(JSON.stringify(result, null, '\t'));
                  });  
            }).catch((err)=>{
                reject(err.message);
            });
        })
    }

    static findNearestLoc(lat, long){
        return new Promise((resolve, reject)=>{
            MongoClient.connect(url).then((db)=>{
                var dbo = db.db(dbName);
                //dbo.collection(collection).createIndex({location:"2d"});
                dbo.collection(collection).find({
                    location:{
                    $near:{
                        "$geometry":{
                            "type": "Point",
                            "coordinates": [
                                lat,
                                long
                            ]
                        },
                        $maxDistance:8000
                    }
                }
            }).toArray(function(err, result) {
                    if (err) {
                        reject(err.message);
                    }
                    db.close();
                    console.log('Successfully reterived data from database');
                    console.log(JSON.stringify(result));
                    resolve(JSON.stringify(result, null, '\t'));
                  });  
            }).catch((err)=>{
                reject(err.message);
            });
        })
    }
}

module.exports=Placedrefer;