module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  proxy: true,
  url: env('APP_URL'), // Sets the public URL of the application.
  app: { 
    keys: env.array('APP_KEYS')
  },
});