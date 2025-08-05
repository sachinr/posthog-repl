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

// Start REPL with client in context
const repl = require('repl');
const r = repl.start('> ');
r.context.client = client;

// Automatically flush and clean up on exit
const shutdown = async () => {
  console.log('\nFlushing events to PostHog before exit...');
  await client.shutdown();
  console.log('✅ All events sent. Goodbye!');
};

process.on('SIGINT', async () => {
  await shutdown();
  process.exit();
});

process.on('exit', () => {
  // `shutdown()` returns a promise, but Node exit handlers can’t await,
  // so this is just a best-effort flush.
  client.shutdown();
});
