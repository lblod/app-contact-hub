export default [
  {
    match: {
      // listen to all changes
    },
    callback: {
      url: 'http://search/update',
      method: 'POST'
    },
    options: {
      resourceFormat: "v0.0.1",
      gracePeriod: 10000,
      ignoreFromSelf: true
    }
  },
    {
      match: {
        subject: {
        }
      },
      callback: {
        url: "http://kalliope-api/delta", method: "POST"
      },
      options: {
        resourceFormat: "v0.0.1",
        gracePeriod: 1000,
        ignoreFromSelf: true
      }
    }
  ]