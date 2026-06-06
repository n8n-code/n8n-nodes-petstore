# @n8n-dev/n8n-nodes-petstore

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-petstore.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-petstore)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing petstore API integrations by hand.**

This n8n community node was auto-generated from the official **petstore** OpenAPI specification.
It exposes whatever operations the spec defines — no more, no less.

> ⚠️ **This node maps operations 1:1 from the OpenAPI spec.** If the spec only defines GET and POST for a resource, the node will only have those operations. It does not invent missing endpoints.

---

## Resources (3)

| Resource | Operations |
|----------|------------|
| Pet | Update Pet, Add Pet, Find Pets By Status, Find Pets By Tags, Get Pet By Id, Update Pet With Form, Delete Pet, Upload File |
| Store | Get Inventory, Place Order, Get Order By Id, Delete Order |
| User | Create User, Create Users With List Input, Login User, Logout User, Get User By Name, Update User, Delete User |

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

---

## Auto-Generated

This node was auto-generated from the official **petstore** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate).

When the petstore API updates, this node updates too.

---

## License

MIT © [kelvinzer0](https://github.com/kelvinzer0)
