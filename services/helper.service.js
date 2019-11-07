'use strict';

module.exports = {
  name: 'helper',

  /**
   * Service settings
   */
  settings: {},

  /**
   * Service dependencies
   */
  dependencies: [],

  /**
   * Actions
   */
  actions: {
    /**
     * Say a 'Hello'
     *
     * @returns
     */
    random() {
      return Math.round(Math.random() * 10);
    },

    /**
     * Welcome a username
     *
     * @param {String} name - User name
     */
    welcome: {
      params: {
        name: 'string'
      },
      handler(ctx) {
        return `Welcome, ${ctx.params.name}`;
      }
    }
  },

  /**
   * Events
   */
  events: {
    'hello.called'(payload) {
      this.logger.info('helper get called');
      this.logger.info(payload);
    }
  },

  /**
   * Methods
   */
  methods: {},

  /**
   * Service created lifecycle event handler
   */
  created() {},

  /**
   * Service started lifecycle event handler
   */
  started() {},

  /**
   * Service stopped lifecycle event handler
   */
  stopped() {}
};
