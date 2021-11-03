module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'ewphoto'),
        username: env('DATABASE_USERNAME', 'ewphoto'),
        password: env('DATABASE_PASSWORD', '<password>'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
