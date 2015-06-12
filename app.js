var config = {
  name: 'rupert-auth-example',
  hostname: 'localhost',
  stassets: {
    root: './src/client'
  },
  server: {
    root: './src/server'
  },
  mongo: {
    rest: false
  },
  doorman: {
    providers: {
      google: {
        clientID: "398693457612-jtd4q5mr30cv072pjhbvfms71gn6ei82.apps.googleusercontent.com",
        clientSecret: process.env['GOOGLE_SECRET'],
        scope: ['profile']
      }
    }
  }
};

require('rupert')(config).start();
