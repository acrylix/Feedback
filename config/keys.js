//dev or prod env switch

//ES2015 cannot have logic before import statements
if(process.env.NODE_ENV == 'production'){
  module.exports = require('./prod');
}else{
  module.exports = require('./dev');
}
