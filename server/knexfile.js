// Update with your config settings.
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      port: '5432',
      password: '',
      database: '',
      charset: 'utf8',
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds',
    },
  },
  staging: {
    client: 'postgresql',
    connection: {
      database: 'prepped',
      user: '',
      password: '',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'prepped',
      user: 'postgres',
      password: 'wierd1',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
