module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '07c577dcf040fa2d2abe51208ba5f53e'),
  },
});
