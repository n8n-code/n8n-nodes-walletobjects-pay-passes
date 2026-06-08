import type { INodeProperties } from 'n8n-workflow';

export const jwtDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Jwt"
					]
				}
			},
			"options": [
				{
					"name": "Walletobjects Jwt Insert",
					"value": "Walletobjects Jwt Insert",
					"action": "Walletobjects Jwt Insert",
					"description": "Inserts the resources in the JWT.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/walletobjects/v1/jwt"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /walletobjects/v1/jwt",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Jwt"
					],
					"operation": [
						"Walletobjects Jwt Insert"
					]
				}
			}
		},
		{
			"displayName": "Jwt",
			"name": "jwt",
			"type": "string",
			"default": "",
			"description": "A string representing a JWT of the format described at https://developers.google.com/pay/passes/reference/s2w-reference#google-pay-api-for-passes-jwt",
			"routing": {
				"send": {
					"property": "jwt",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Jwt"
					],
					"operation": [
						"Walletobjects Jwt Insert"
					]
				}
			}
		},
];
