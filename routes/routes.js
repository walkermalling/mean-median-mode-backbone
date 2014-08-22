module.exports = function(app){

  var baseUrl = 'api/v_0_0_1';

  app.get(baseUrl + '/set', function(req, res){

  });

  app.get('*', function(req,res){
    res.status(200).send('Mean Median Mode'); 
  });
};
