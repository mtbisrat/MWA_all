const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

class Secret{
    static getEncryptedMessage(){
        return new Promise((resolve, reject)=>{
            MongoClient.connect(url).then((db)=>{
                var dbo = db.db("lab7db");
                let cursor=dbo.collection("homework7").find();

                cursor.toArray( function( error, items){
                    if( error || !items){
                        reject("error getting items");
                    }
                    else{
                        console.log(items[0].message );
                        resolve(items[0].message);
                    }
                });    
            }).catch((err)=>{
                reject('Unable to connect to database');
            });
        })
    }
}

module.exports=Secret;