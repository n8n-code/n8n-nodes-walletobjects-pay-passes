import type { INodeProperties } from 'n8n-workflow';

export const permissionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Permissions"
					]
				}
			},
			"options": [
				{
					"name": "Walletobjects Permissions Get",
					"value": "Walletobjects Permissions Get",
					"action": "Walletobjects Permissions Get",
					"description": "Returns the permissions for the given issuer id.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/walletobjects/v1/permissions/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Permissions Update",
					"value": "Walletobjects Permissions Update",
					"action": "Walletobjects Permissions Update",
					"description": "Updates the permissions for the given issuer.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/walletobjects/v1/permissions/{{$parameter[\"resourceId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /walletobjects/v1/permissions/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Permissions"
					],
					"operation": [
						"Walletobjects Permissions Get"
					]
				}
			}
		},
		{
			"displayName": "Resource Id",
			"name": "resourceId",
			"required": true,
			"description": "The unique identifier for an issuer. This ID must be unique across all issuers.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Permissions"
					],
					"operation": [
						"Walletobjects Permissions Get"
					]
				}
			}
		},
		{
			"displayName": "PUT /walletobjects/v1/permissions/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Permissions"
					],
					"operation": [
						"Walletobjects Permissions Update"
					]
				}
			}
		},
		{
			"displayName": "Resource Id",
			"name": "resourceId",
			"required": true,
			"description": "The unique identifier for an issuer. This ID must be unique across all issuers.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Permissions"
					],
					"operation": [
						"Walletobjects Permissions Update"
					]
				}
			}
		},
		{
			"displayName": "Issuer Id",
			"name": "issuerId",
			"type": "string",
			"default": "",
			"description": "ID of the issuer the list of permissions refer to.",
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
						"Permissions"
					],
					"operation": [
						"Walletobjects Permissions Update"
					]
				}
			}
		},
		{
			"displayName": "Permissions",
			"name": "permissions",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "The complete list of permissions for the issuer account.",
			"routing": {
				"send": {
					"property": "permissions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Permissions"
					],
					"operation": [
						"Walletobjects Permissions Update"
					]
				}
			}
		},
];
