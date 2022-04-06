module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9e87231014c95998dc768aa9e4579f67'),
  },
});
