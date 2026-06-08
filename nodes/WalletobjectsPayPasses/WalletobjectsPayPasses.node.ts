import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { eventticketclassDescription } from './resources/eventticketclass';
import { eventticketobjectDescription } from './resources/eventticketobject';
import { flightclassDescription } from './resources/flightclass';
import { flightobjectDescription } from './resources/flightobject';
import { genericclassDescription } from './resources/genericclass';
import { genericobjectDescription } from './resources/genericobject';
import { giftcardclassDescription } from './resources/giftcardclass';
import { giftcardobjectDescription } from './resources/giftcardobject';
import { issuerDescription } from './resources/issuer';
import { jwtDescription } from './resources/jwt';
import { loyaltyclassDescription } from './resources/loyaltyclass';
import { loyaltyobjectDescription } from './resources/loyaltyobject';
import { mediaDescription } from './resources/media';
import { offerclassDescription } from './resources/offerclass';
import { offerobjectDescription } from './resources/offerobject';
import { permissionsDescription } from './resources/permissions';
import { smarttapDescription } from './resources/smarttap';
import { transitclassDescription } from './resources/transitclass';
import { transitobjectDescription } from './resources/transitobject';
import { walletobjectsDescription } from './resources/walletobjects';

export class WalletobjectsPayPasses implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'walletobjects-pay-passes',
		name: 'N8nDevWalletobjectsPayPasses',
		icon: { light: 'file:./walletobjects-pay-passes.svg', dark: 'file:./walletobjects-pay-passes.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'API for issuers to save and manage Google Wallet Objects',
		defaults: { name: 'walletobjects-pay-passes' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevWalletobjectsPayPassesApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Eventticketclass",
					"value": "Eventticketclass",
					"description": ""
				},
				{
					"name": "Eventticketobject",
					"value": "Eventticketobject",
					"description": ""
				},
				{
					"name": "Flightclass",
					"value": "Flightclass",
					"description": ""
				},
				{
					"name": "Flightobject",
					"value": "Flightobject",
					"description": ""
				},
				{
					"name": "Genericclass",
					"value": "Genericclass",
					"description": ""
				},
				{
					"name": "Genericobject",
					"value": "Genericobject",
					"description": ""
				},
				{
					"name": "Giftcardclass",
					"value": "Giftcardclass",
					"description": ""
				},
				{
					"name": "Giftcardobject",
					"value": "Giftcardobject",
					"description": ""
				},
				{
					"name": "Issuer",
					"value": "Issuer",
					"description": ""
				},
				{
					"name": "Jwt",
					"value": "Jwt",
					"description": ""
				},
				{
					"name": "Loyaltyclass",
					"value": "Loyaltyclass",
					"description": ""
				},
				{
					"name": "Loyaltyobject",
					"value": "Loyaltyobject",
					"description": ""
				},
				{
					"name": "Media",
					"value": "Media",
					"description": ""
				},
				{
					"name": "Offerclass",
					"value": "Offerclass",
					"description": ""
				},
				{
					"name": "Offerobject",
					"value": "Offerobject",
					"description": ""
				},
				{
					"name": "Permissions",
					"value": "Permissions",
					"description": ""
				},
				{
					"name": "Smarttap",
					"value": "Smarttap",
					"description": ""
				},
				{
					"name": "Transitclass",
					"value": "Transitclass",
					"description": ""
				},
				{
					"name": "Transitobject",
					"value": "Transitobject",
					"description": ""
				},
				{
					"name": "Walletobjects",
					"value": "Walletobjects",
					"description": ""
				}
			],
			"default": ""
		},
		...eventticketclassDescription,
		...eventticketobjectDescription,
		...flightclassDescription,
		...flightobjectDescription,
		...genericclassDescription,
		...genericobjectDescription,
		...giftcardclassDescription,
		...giftcardobjectDescription,
		...issuerDescription,
		...jwtDescription,
		...loyaltyclassDescription,
		...loyaltyobjectDescription,
		...mediaDescription,
		...offerclassDescription,
		...offerobjectDescription,
		...permissionsDescription,
		...smarttapDescription,
		...transitclassDescription,
		...transitobjectDescription,
		...walletobjectsDescription
		],
	};
}
