var greeted = [];
var mongo = require('rupert-plugin-mongo');
var doorman = require('rupert-doorman');

doorman.storage.Store = function(provider, user) {
  return mongo.getDatabase().then(function(db){
    return new Promise(function(resolve, reject){
      db.collection('users', function(err, collection){
        if(err){ return reject(err); }
        collection.insert({name: user.displayName}, function(err){
          if(err){ return reject(err); }
          resolve(user);
        });
      });
    });
  });
}

module.exports = function (app, config) {
  app.get('/greet', function(request, response, next){
    app.mongo.db.collection('users', function(err, collection){
      if(err){ return next(err); }
      collection.find({}, {}, function(err, cursor){
        if(err){ return next(err); }
        cursor.toArray(function(err, docs){
          if(err){ return next(err); }
          return response.status(200).send(docs.map(function(doc){
            return doc.name;
          }));
        });
      });
    });
  });
};
