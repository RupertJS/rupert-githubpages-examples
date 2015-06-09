var config = {
  name: 'rupert-basic-example',
  stassets: {
    root: './src/client'
  },
  server: {
    root: './src/server'
  }
};

require('rupert')(config).start();
