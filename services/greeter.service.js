'use strict';

module.exports = {
  name: 'greeter',

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
    async hello(ctx) {
      const number = await ctx.call('helper.random');
      const payload = `Hello from ${this.broker.nodeID} with random number ${number}`;
      ctx.emit('hello.called', payload);
      return payload;
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
  events: {},

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
