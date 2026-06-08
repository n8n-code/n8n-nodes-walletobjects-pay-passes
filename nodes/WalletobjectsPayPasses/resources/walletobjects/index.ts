import type { INodeProperties } from 'n8n-workflow';

export const walletobjectsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Walletobjects"
					]
				}
			},
			"options": [
				{
					"name": "Walletobjects Walletobjects V 1 Private Content Upload Private Data",
					"value": "Walletobjects Walletobjects V 1 Private Content Upload Private Data",
					"action": "Walletobjects Walletobjects V 1 Private Content Upload Private Data",
					"description": "Upload private data (text or URI) and returns an Id to be used in its place.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/walletobjects/v1/privateContent/uploadPrivateData"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /walletobjects/v1/privateContent/uploadPrivateData",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Walletobjects"
					],
					"operation": [
						"Walletobjects Walletobjects V 1 Private Content Upload Private Data"
					]
				}
			}
		},
		{
			"displayName": "Issuer Id",
			"name": "issuerId",
			"type": "string",
			"default": "",
			"description": "The ID of the issuer sending the data.",
			"routing": {
				"send": {
					"property": "issuerId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Walletobjects"
					],
					"operation": [
						"Walletobjects Walletobjects V 1 Private Content Upload Private Data"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "json",
			"default": "{\n  \"body\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"header\": {}\n}",
			"description": "Private data for TextModule. This data will be rendered as a TextModule for a pass.",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Walletobjects"
					],
					"operation": [
						"Walletobjects Walletobjects V 1 Private Content Upload Private Data"
					]
				}
			}
		},
		{
			"displayName": "Uri",
			"name": "uri",
			"type": "json",
			"default": "{\n  \"description\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  }\n}",
			"description": "Private data for LinkModule. This data will be rendered as the LinkModule for a pass.",
			"routing": {
				"send": {
					"property": "uri",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Walletobjects"
					],
					"operation": [
						"Walletobjects Walletobjects V 1 Private Content Upload Private Data"
					]
				}
			}
		},
];
