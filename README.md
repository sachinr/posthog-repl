# PostHog Node.js REPL

This repo provides an interactive Node.js REPL for experimenting with the [PostHog Node SDK](https://posthog.com/docs/libraries/node).  
Use it to test event tracking, identify users, and debug PostHog calls quickly.

---

## 🚀 Quick Start

1. Clone the repo and install dependencies:

```
    git clone git@github.com:sachinr/posthog-repl.git
    cd posthog-repl
    npm install
```

2. Create a `.env` file in the project root with your PostHog credentials:

```
    POSTHOG_API_KEY=phc_xxx_your_project_api_key
    POSTHOG_HOST=https://us.i.posthog.com

    > Use https://app.posthog.com for EU Cloud or your self-hosted URL.
```

3. Start the REPL:

```bash
    node repl.js
```
```
    # Expected output:
    # PostHog client ready as `client`
    # Try client.capture({ distinctId: "test", event: "hello world" })
    # >
```

4. Experiment in the REPL:

```
    client.capture({ distinctId: 'alice', event: 'demo event' });
    client.identify({ distinctId: 'alice', properties: { plan: 'pro' } });
    client.getFeatureFlag('multi-variant-flag', '12345').then((e) => console.log(e)) 
```

---

## 📝 Notes

- `flushAt: 1` ensures events send immediately.
- Great for debugging, learning the SDK, and testing new events.

---

## 📚 References

- PostHog Node SDK: https://posthog.com/docs/libraries/node
- Event Ingestion: https://posthog.com/docs/data/event-ingestion
