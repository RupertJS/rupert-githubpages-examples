var greeted = [];
module.exports = function (app, config) {
  app.get('/greet', function(request, response){
    response.status(200).send(greeted);
  });
  app.post('/greet', function(request, response){
    greeted.push(request.body.name);
    response.status(201).send({ok: 1});
  });
};
