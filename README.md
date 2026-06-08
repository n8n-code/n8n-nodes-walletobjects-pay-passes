# @n8n-dev/n8n-nodes-walletobjects-pay-passes

![walletobjects-pay-passes Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-walletobjects-pay-passes.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-walletobjects-pay-passes)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing walletobjects-pay-passes API integrations by hand.**

Every time you connect n8n to walletobjects-pay-passes, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to walletobjects-pay-passes took 5 minutes, not half a day?**

This node gives you **20+ resources** out of the box: **Eventticketclass**, **Eventticketobject**, **Flightclass**, **Flightobject**, **Genericclass**, and 15 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-walletobjects-pay-passes
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-walletobjects-pay-passes`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **walletobjects-pay-passes API** → paste your API key
3. Drag the **walletobjects-pay-passes** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Eventticketclass | GET Walletobjects Eventticketclass List, POST Walletobjects Eventticketclass Insert, GET Walletobjects Eventticketclass Get, PATCH Walletobjects Eventticketclass Patch, PUT Walletobjects Eventticketclass Update, POST Walletobjects Eventticketclass Addmessage |
| Eventticketobject | GET Walletobjects Eventticketobject List, POST Walletobjects Eventticketobject Insert, GET Walletobjects Eventticketobject Get, PATCH Walletobjects Eventticketobject Patch, PUT Walletobjects Eventticketobject Update, POST Walletobjects Eventticketobject Addmessage, POST Walletobjects Eventticketobject Modifylinkedofferobjects |
| Flightclass | GET Walletobjects Flightclass List, POST Walletobjects Flightclass Insert, GET Walletobjects Flightclass Get, PATCH Walletobjects Flightclass Patch, PUT Walletobjects Flightclass Update, POST Walletobjects Flightclass Addmessage |
| Flightobject | GET Walletobjects Flightobject List, POST Walletobjects Flightobject Insert, GET Walletobjects Flightobject Get, PATCH Walletobjects Flightobject Patch, PUT Walletobjects Flightobject Update, POST Walletobjects Flightobject Addmessage |
| Genericclass | GET Walletobjects Genericclass List, POST Walletobjects Genericclass Insert, GET Walletobjects Genericclass Get, PATCH Walletobjects Genericclass Patch, PUT Walletobjects Genericclass Update |
| Genericobject | GET Walletobjects Genericobject List, POST Walletobjects Genericobject Insert, GET Walletobjects Genericobject Get, PATCH Walletobjects Genericobject Patch, PUT Walletobjects Genericobject Update |
| Giftcardclass | GET Walletobjects Giftcardclass List, POST Walletobjects Giftcardclass Insert, GET Walletobjects Giftcardclass Get, PATCH Walletobjects Giftcardclass Patch, PUT Walletobjects Giftcardclass Update, POST Walletobjects Giftcardclass Addmessage |
| Giftcardobject | GET Walletobjects Giftcardobject List, POST Walletobjects Giftcardobject Insert, GET Walletobjects Giftcardobject Get, PATCH Walletobjects Giftcardobject Patch, PUT Walletobjects Giftcardobject Update, POST Walletobjects Giftcardobject Addmessage |
| Issuer | GET Walletobjects Issuer List, POST Walletobjects Issuer Insert, GET Walletobjects Issuer Get, PATCH Walletobjects Issuer Patch, PUT Walletobjects Issuer Update |
| Jwt | POST Walletobjects Jwt Insert |
| Loyaltyclass | GET Walletobjects Loyaltyclass List, POST Walletobjects Loyaltyclass Insert, GET Walletobjects Loyaltyclass Get, PATCH Walletobjects Loyaltyclass Patch, PUT Walletobjects Loyaltyclass Update, POST Walletobjects Loyaltyclass Addmessage |
| Loyaltyobject | GET Walletobjects Loyaltyobject List, POST Walletobjects Loyaltyobject Insert, GET Walletobjects Loyaltyobject Get, PATCH Walletobjects Loyaltyobject Patch, PUT Walletobjects Loyaltyobject Update, POST Walletobjects Loyaltyobject Addmessage, POST Walletobjects Loyaltyobject Modifylinkedofferobjects |
| Media | POST Walletobjects Media Upload |
| Offerclass | GET Walletobjects Offerclass List, POST Walletobjects Offerclass Insert, GET Walletobjects Offerclass Get, PATCH Walletobjects Offerclass Patch, PUT Walletobjects Offerclass Update, POST Walletobjects Offerclass Addmessage |
| Offerobject | GET Walletobjects Offerobject List, POST Walletobjects Offerobject Insert, GET Walletobjects Offerobject Get, PATCH Walletobjects Offerobject Patch, PUT Walletobjects Offerobject Update, POST Walletobjects Offerobject Addmessage |
| Permissions | GET Walletobjects Permissions Get, PUT Walletobjects Permissions Update |
| Smarttap | POST Walletobjects Smarttap Insert |
| Transitclass | GET Walletobjects Transitclass List, POST Walletobjects Transitclass Insert, GET Walletobjects Transitclass Get, PATCH Walletobjects Transitclass Patch, PUT Walletobjects Transitclass Update, POST Walletobjects Transitclass Addmessage |
| Transitobject | GET Walletobjects Transitobject List, POST Walletobjects Transitobject Insert, GET Walletobjects Transitobject Get, PATCH Walletobjects Transitobject Patch, PUT Walletobjects Transitobject Update, POST Walletobjects Transitobject Addmessage |
| Walletobjects | POST Walletobjects Walletobjects V 1 Private Content Upload Private Data |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from walletobjects-pay-passes docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official walletobjects-pay-passes OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **walletobjects-pay-passes** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the walletobjects-pay-passes API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
