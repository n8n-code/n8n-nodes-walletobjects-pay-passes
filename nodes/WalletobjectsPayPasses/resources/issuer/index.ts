import type { INodeProperties } from 'n8n-workflow';

export const issuerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Issuer"
					]
				}
			},
			"options": [
				{
					"name": "Walletobjects Issuer List",
					"value": "Walletobjects Issuer List",
					"action": "Walletobjects Issuer List",
					"description": "Returns a list of all issuers shared to the caller.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/walletobjects/v1/issuer"
						}
					}
				},
				{
					"name": "Walletobjects Issuer Insert",
					"value": "Walletobjects Issuer Insert",
					"action": "Walletobjects Issuer Insert",
					"description": "Inserts an issuer with the given ID and properties.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/walletobjects/v1/issuer"
						}
					}
				},
				{
					"name": "Walletobjects Issuer Get",
					"value": "Walletobjects Issuer Get",
					"action": "Walletobjects Issuer Get",
					"description": "Returns the issuer with the given issuer ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/walletobjects/v1/issuer/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Issuer Patch",
					"value": "Walletobjects Issuer Patch",
					"action": "Walletobjects Issuer Patch",
					"description": "Updates the issuer referenced by the given issuer ID. This method supports patch semantics.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/walletobjects/v1/issuer/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Issuer Update",
					"value": "Walletobjects Issuer Update",
					"action": "Walletobjects Issuer Update",
					"description": "Updates the issuer referenced by the given issuer ID.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/walletobjects/v1/issuer/{{$parameter[\"resourceId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /walletobjects/v1/issuer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Issuer"
					],
					"operation": [
						"Walletobjects Issuer List"
					]
				}
			}
		},
		{
			"displayName": "POST /walletobjects/v1/issuer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Issuer"
					],
					"operation": [
						"Walletobjects Issuer Insert"
					]
				}
			}
		},
		{
			"displayName": "Contact Info",
			"name": "contactInfo",
			"type": "json",
			"default": "{\n  \"alertsEmails\": [\n    null\n  ]\n}",
			"description": "Issuer contact information.",
			"routing": {
				"send": {
					"property": "contactInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Issuer"
					],
					"operation": [
						"Walletobjects Issuer Insert"
					]
				}
			}
		},
		{
			"displayName": "Homepage Url",
			"name": "homepageUrl",
			"type": "string",
			"default": "",
			"description": "URL for the issuer's home page.",
			"routing": {
				"send": {
					"property": "homepageUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Issuer"
					],
					"operation": [
						"Walletobjects Issuer Insert"
					]
				}
			}
		},
		{
			"displayName": "Issuer Id",
			"name": "issuerId",
			"type": "string",
			"default": "",
			"description": "The unique identifier for an issuer account. This is automatically generated when the issuer is inserted.",
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
						"Issuer"
					],
					"operation": [
						"Walletobjects Issuer Insert"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The account name of the issuer.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Issuer"
					],
					"operation": [
						"Walletobjects Issuer Insert"
					]
				}
			}
		},
		{
			"displayName": "Smart Tap Merchant Data",
			"name": "smartTapMerchantData",
			"type": "json",
			"default": "{\n  \"authenticationKeys\": [\n    {}\n  ]\n}",
			"description": "Available only to Smart Tap enabled partners. Contact support for additional guidance.",
			"routing": {
				"send": {
					"property": "smartTapMerchantData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Issuer"
					],
					"operation": [
						"Walletobjects Issuer Insert"
					]
				}
			}
		},
		{
			"displayName": "GET /walletobjects/v1/issuer/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Issuer"
					],
					"operation": [
						"Walletobjects Issuer Get"
					]
				}
			}
		},
		{
			"displayName": "Resource Id",
			"name": "resourceId",
			"required": true,
			"description": "The unique identifier for an issuer.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Issuer"
					],
					"operation": [
						"Walletobjects Issuer Get"
					]
				}
			}
		},
		{
			"displayName": "PATCH /walletobjects/v1/issuer/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Issuer"
					],
					"operation": [
						"Walletobjects Issuer Patch"
					]
				}
			}
		},
		{
			"displayName": "Resource Id",
			"name": "resourceId",
			"required": true,
			"description": "The unique identifier for an issuer.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Issuer"
					],
					"operation": [
						"Walletobjects Issuer Patch"
					]
				}
			}
		},
		{
			"displayName": "Contact Info",
			"name": "contactInfo",
			"type": "json",
			"default": "{\n  \"alertsEmails\": [\n    null\n  ]\n}",
			"description": "Issuer contact information.",
			"routing": {
				"send": {
					"property": "contactInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Issuer"
					],
					"operation": [
						"Walletobjects Issuer Patch"
					]
				}
			}
		},
		{
			"displayName": "Homepage Url",
			"name": "homepageUrl",
			"type": "string",
			"default": "",
			"description": "URL for the issuer's home page.",
			"routing": {
				"send": {
					"property": "homepageUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Issuer"
					],
					"operation": [
						"Walletobjects Issuer Patch"
					]
				}
			}
		},
		{
			"displayName": "Issuer Id",
			"name": "issuerId",
			"type": "string",
			"default": "",
			"description": "The unique identifier for an issuer account. This is automatically generated when the issuer is inserted.",
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
						"Issuer"
					],
					"operation": [
						"Walletobjects Issuer Patch"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The account name of the issuer.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Issuer"
					],
					"operation": [
						"Walletobjects Issuer Patch"
					]
				}
			}
		},
		{
			"displayName": "Smart Tap Merchant Data",
			"name": "smartTapMerchantData",
			"type": "json",
			"default": "{\n  \"authenticationKeys\": [\n    {}\n  ]\n}",
			"description": "Available only to Smart Tap enabled partners. Contact support for additional guidance.",
			"routing": {
				"send": {
					"property": "smartTapMerchantData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Issuer"
					],
					"operation": [
						"Walletobjects Issuer Patch"
					]
				}
			}
		},
		{
			"displayName": "PUT /walletobjects/v1/issuer/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Issuer"
					],
					"operation": [
						"Walletobjects Issuer Update"
					]
				}
			}
		},
		{
			"displayName": "Resource Id",
			"name": "resourceId",
			"required": true,
			"description": "The unique identifier for an issuer.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Issuer"
					],
					"operation": [
						"Walletobjects Issuer Update"
					]
				}
			}
		},
		{
			"displayName": "Contact Info",
			"name": "contactInfo",
			"type": "json",
			"default": "{\n  \"alertsEmails\": [\n    null\n  ]\n}",
			"description": "Issuer contact information.",
			"routing": {
				"send": {
					"property": "contactInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Issuer"
					],
					"operation": [
						"Walletobjects Issuer Update"
					]
				}
			}
		},
		{
			"displayName": "Homepage Url",
			"name": "homepageUrl",
			"type": "string",
			"default": "",
			"description": "URL for the issuer's home page.",
			"routing": {
				"send": {
					"property": "homepageUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Issuer"
					],
					"operation": [
						"Walletobjects Issuer Update"
					]
				}
			}
		},
		{
			"displayName": "Issuer Id",
			"name": "issuerId",
			"type": "string",
			"default": "",
			"description": "The unique identifier for an issuer account. This is automatically generated when the issuer is inserted.",
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
						"Issuer"
					],
					"operation": [
						"Walletobjects Issuer Update"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The account name of the issuer.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Issuer"
					],
					"operation": [
						"Walletobjects Issuer Update"
					]
				}
			}
		},
		{
			"displayName": "Smart Tap Merchant Data",
			"name": "smartTapMerchantData",
			"type": "json",
			"default": "{\n  \"authenticationKeys\": [\n    {}\n  ]\n}",
			"description": "Available only to Smart Tap enabled partners. Contact support for additional guidance.",
			"routing": {
				"send": {
					"property": "smartTapMerchantData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Issuer"
					],
					"operation": [
						"Walletobjects Issuer Update"
					]
				}
			}
		},
];
