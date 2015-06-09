var greeted = [];
module.exports = function (app, config) {
  app.get('/greet', function(request, response, next){
    app.mongo.db.collection('greeted', function(err, collection){
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
  app.post('/greet', function(request, response, next){
    app.mongo.db.collection('greeted', function(err, collection){
      if(err){ return next(err); }
      collection.insert({name: request.body.name}, function(err){
        if(err){ return next(err); }
        return response.status(201).send({ok: 1});
      });
    });
  });
};
