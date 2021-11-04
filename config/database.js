module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '167.99.47.129'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'ewphoto'),
        username: env('DATABASE_USERNAME', 'ewphoto'),
        password: env('DATABASE_PASSWORD', 'JKO9uFFcPiGjKqS'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
