module.exports = ({ env }) => ({
  host: env('HOST', 'https://strapitest.onrender.com/'),
  port: env.int('PORT', 1337),
});
