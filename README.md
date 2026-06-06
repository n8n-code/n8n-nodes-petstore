# @n8n-dev/n8n-nodes-petstore

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-petstore.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-petstore)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing petstore API integrations by hand.**

Every time you connect n8n to petstore, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if your n8n node just... worked?**

This node gives you **3+ resources** out of the box — **Pet**, **Store**, **User** — with full CRUD operations, typed parameters, and zero manual configuration.

> One developer built a tool that auto-generates n8n nodes from any OpenAPI spec.
>
> Your donation funds new features, more API support, and better tooling for every developer after you.

---

## What You Get

- **3+ resources** — **Pet**, **Store**, **User**
- **Full CRUD** — Create, Read, Update, Delete operations for every resource
- **Typed parameters** — No more guessing field types
- **Built-in auth** — API key authentication, ready to go
- **Declarative** — Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-petstore
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-petstore`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **petstore API** → paste your API key
3. Drag the **petstore** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Pet | Create, Get, List, Update, Delete |
| Store | Create, Get, List, Update, Delete |
| User | Create, Get, List, Update, Delete |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from petstore docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official petstore OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated

This node was auto-generated from the official **petstore** OpenAPI specification using
[@kelvinzer0/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate).

When the petstore API updates, this node updates too.

---

## License

MIT © [kelvinzer0](https://github.com/kelvinzer0)
