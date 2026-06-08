import type { INodeProperties } from 'n8n-workflow';

export const mediaDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Media"
					]
				}
			},
			"options": [
				{
					"name": "Walletobjects Media Upload",
					"value": "Walletobjects Media Upload",
					"action": "Walletobjects Media Upload",
					"description": "Uploads a private image and returns an Id to be used in its place.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/walletobjects/v1/privateContent/{{$parameter[\"issuerId\"]}}/uploadPrivateImage"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /walletobjects/v1/privateContent/{issuerId}/uploadPrivateImage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Media"
					],
					"operation": [
						"Walletobjects Media Upload"
					]
				}
			}
		},
		{
			"displayName": "Issuer Id",
			"name": "issuerId",
			"required": true,
			"description": "The ID of the issuer sending the image.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Media"
					],
					"operation": [
						"Walletobjects Media Upload"
					]
				}
			}
		},
		{
			"displayName": "POST /walletobjects/v1/privateContent/{issuerId}/uploadPrivateImage<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Media"
					],
					"operation": [
						"Walletobjects Media Upload"
					]
				}
			}
		},
];
