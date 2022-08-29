module.exports = {
  port: 3333,
  log: {
    level: 'silent',
  },
  models: {
    migrate: 'drop',
  },
  datastores: {
    default: {
      adapter: 'sails-disk',
    },
  },
  session: {
    adapter: 'memory',
  },
}
