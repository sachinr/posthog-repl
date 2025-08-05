// repl.js
require('dotenv').config();
const { PostHog } = require('posthog-node');

// Initialize PostHog client
const client = new PostHog(process.env.POSTHOG_API_KEY, {
  host: process.env.POSTHOG_HOST,
  flushAt: 1, // send events immediately for testing
});

console.log('PostHog client ready as `client`');
console.log('Try client.capture({ distinctId: "test", event: "hello world" })');

// Expose the client to the REPL
const repl = require('repl');
const r = repl.start('> ');
r.context.client = client;
