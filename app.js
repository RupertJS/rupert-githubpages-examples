var config = {
  name: 'rupert-basic-example',
  stassets: {
    root: './src/client'
  },
  server: {
    root: './src/server'
  },
  mongo: {
    rest: {}
  }
};

require('rupert')(config).start();
