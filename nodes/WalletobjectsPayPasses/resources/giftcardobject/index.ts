import type { INodeProperties } from 'n8n-workflow';

export const giftcardobjectDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					]
				}
			},
			"options": [
				{
					"name": "Walletobjects Giftcardobject List",
					"value": "Walletobjects Giftcardobject List",
					"action": "Walletobjects Giftcardobject List",
					"description": "Returns a list of all gift card objects for a given issuer ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/walletobjects/v1/giftCardObject"
						}
					}
				},
				{
					"name": "Walletobjects Giftcardobject Insert",
					"value": "Walletobjects Giftcardobject Insert",
					"action": "Walletobjects Giftcardobject Insert",
					"description": "Inserts an gift card object with the given ID and properties.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/walletobjects/v1/giftCardObject"
						}
					}
				},
				{
					"name": "Walletobjects Giftcardobject Get",
					"value": "Walletobjects Giftcardobject Get",
					"action": "Walletobjects Giftcardobject Get",
					"description": "Returns the gift card object with the given object ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/walletobjects/v1/giftCardObject/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Giftcardobject Patch",
					"value": "Walletobjects Giftcardobject Patch",
					"action": "Walletobjects Giftcardobject Patch",
					"description": "Updates the gift card object referenced by the given object ID. This method supports patch semantics.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/walletobjects/v1/giftCardObject/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Giftcardobject Update",
					"value": "Walletobjects Giftcardobject Update",
					"action": "Walletobjects Giftcardobject Update",
					"description": "Updates the gift card object referenced by the given object ID.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/walletobjects/v1/giftCardObject/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Giftcardobject Addmessage",
					"value": "Walletobjects Giftcardobject Addmessage",
					"action": "Walletobjects Giftcardobject Addmessage",
					"description": "Adds a message to the gift card object referenced by the given object ID.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/walletobjects/v1/giftCardObject/{{$parameter[\"resourceId\"]}}/addMessage"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /walletobjects/v1/giftCardObject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject List"
					]
				}
			}
		},
		{
			"displayName": "Class Id",
			"name": "classId",
			"description": "The ID of the class whose objects will be listed.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "classId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject List"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject List"
					]
				}
			}
		},
		{
			"displayName": "Token",
			"name": "token",
			"description": "Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject List"
					]
				}
			}
		},
		{
			"displayName": "POST /walletobjects/v1/giftCardObject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "App Link Data",
			"name": "appLinkData",
			"type": "json",
			"default": "{\n  \"androidAppLinkInfo\": {\n    \"appLogoImage\": {\n      \"contentDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      },\n      \"sourceUri\": {\n        \"localizedDescription\": {}\n      }\n    },\n    \"appTarget\": {\n      \"targetUri\": {\n        \"localizedDescription\": {}\n      }\n    },\n    \"description\": {},\n    \"title\": {}\n  },\n  \"iosAppLinkInfo\": {},\n  \"webAppLinkInfo\": {}\n}",
			"description": "Optional information about the partner app link.",
			"routing": {
				"send": {
					"property": "appLinkData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Balance",
			"name": "balance",
			"type": "json",
			"default": "{}",
			"description": "The card's monetary balance.",
			"routing": {
				"send": {
					"property": "balance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Balance Update Time",
			"name": "balanceUpdateTime",
			"type": "json",
			"default": "{}",
			"description": "The date and time when the balance was last updated. Offset is required. If balance is updated and this property is not provided, system will default to the current time.",
			"routing": {
				"send": {
					"property": "balanceUpdateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Barcode",
			"name": "barcode",
			"type": "json",
			"default": "{\n  \"showCodeText\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  }\n}",
			"description": "The barcode type and value.",
			"routing": {
				"send": {
					"property": "barcode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Card Number",
			"name": "cardNumber",
			"type": "string",
			"default": "",
			"description": "Required. The card's number.",
			"routing": {
				"send": {
					"property": "cardNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Class Id",
			"name": "classId",
			"type": "string",
			"default": "",
			"description": "Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you.",
			"routing": {
				"send": {
					"property": "classId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Class Reference",
			"name": "classReference",
			"type": "json",
			"default": "{\n  \"callbackOptions\": {},\n  \"classTemplateInfo\": {\n    \"cardBarcodeSectionDetails\": {\n      \"firstBottomDetail\": {\n        \"fieldSelector\": {\n          \"fields\": [\n            {}\n          ]\n        }\n      },\n      \"firstTopDetail\": {},\n      \"secondTopDetail\": {}\n    },\n    \"cardTemplateOverride\": {\n      \"cardRowTemplateInfos\": [\n        {\n          \"oneItem\": {\n            \"item\": {\n              \"firstValue\": {},\n              \"secondValue\": {}\n            }\n          },\n          \"threeItems\": {\n            \"endItem\": {},\n            \"middleItem\": {},\n            \"startItem\": {}\n          },\n          \"twoItems\": {\n            \"endItem\": {},\n            \"startItem\": {}\n          }\n        }\n      ]\n    },\n    \"detailsTemplateOverride\": {\n      \"detailsItemInfos\": [\n        {\n          \"item\": {}\n        }\n      ]\n    },\n    \"listTemplateOverride\": {\n      \"firstRowOption\": {\n        \"fieldOption\": {}\n      },\n      \"secondRowOption\": {},\n      \"thirdRowOption\": {}\n    }\n  },\n  \"heroImage\": {\n    \"contentDescription\": {\n      \"defaultValue\": {},\n      \"translatedValues\": [\n        {}\n      ]\n    },\n    \"sourceUri\": {\n      \"localizedDescription\": {}\n    }\n  },\n  \"homepageUri\": {\n    \"localizedDescription\": {}\n  },\n  \"imageModulesData\": [\n    {\n      \"mainImage\": {}\n    }\n  ],\n  \"infoModuleData\": {\n    \"labelValueRows\": [\n      {\n        \"columns\": [\n          {\n            \"localizedLabel\": {},\n            \"localizedValue\": {}\n          }\n        ]\n      }\n    ]\n  },\n  \"linksModuleData\": {\n    \"uris\": [\n      {}\n    ]\n  },\n  \"localizedCardNumberLabel\": {},\n  \"localizedEventNumberLabel\": {},\n  \"localizedIssuerName\": {},\n  \"localizedMerchantName\": {},\n  \"localizedPinLabel\": {},\n  \"locations\": [\n    {}\n  ],\n  \"messages\": [\n    {\n      \"displayInterval\": {\n        \"end\": {},\n        \"start\": {}\n      },\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"programLogo\": {},\n  \"redemptionIssuers\": [\n    null\n  ],\n  \"review\": {},\n  \"securityAnimation\": {},\n  \"textModulesData\": [\n    {\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"wordMark\": {}\n}",
			"description": "A copy of the inherited fields of the parent class. These fields are retrieved during a GET.",
			"routing": {
				"send": {
					"property": "classReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Disable Expiration Notification",
			"name": "disableExpirationNotification",
			"type": "boolean",
			"default": true,
			"description": "Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers.",
			"routing": {
				"send": {
					"property": "disableExpirationNotification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Event Number",
			"name": "eventNumber",
			"type": "string",
			"default": "",
			"description": "The card's event number, an optional field used by some gift cards.",
			"routing": {
				"send": {
					"property": "eventNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Grouping Info",
			"name": "groupingInfo",
			"type": "json",
			"default": "{}",
			"description": "Information that controls how passes are grouped together.",
			"routing": {
				"send": {
					"property": "groupingInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Has Linked Device",
			"name": "hasLinkedDevice",
			"type": "boolean",
			"default": true,
			"description": "Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information.",
			"routing": {
				"send": {
					"property": "hasLinkedDevice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Has Users",
			"name": "hasUsers",
			"type": "boolean",
			"default": true,
			"description": "Indicates if the object has users. This field is set by the platform.",
			"routing": {
				"send": {
					"property": "hasUsers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Hero Image",
			"name": "heroImage",
			"type": "json",
			"default": "{\n  \"contentDescription\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"sourceUri\": {\n    \"localizedDescription\": {}\n  }\n}",
			"description": "Wrapping type for Google hosted images. Next ID: 7",
			"routing": {
				"send": {
					"property": "heroImage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Image Modules Data",
			"name": "imageModulesData",
			"type": "json",
			"default": "[\n  {\n    \"mainImage\": {\n      \"contentDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      },\n      \"sourceUri\": {\n        \"localizedDescription\": {}\n      }\n    }\n  }\n]",
			"description": "Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.",
			"routing": {
				"send": {
					"property": "imageModulesData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Info Module Data",
			"name": "infoModuleData",
			"type": "json",
			"default": "{\n  \"labelValueRows\": [\n    {\n      \"columns\": [\n        {\n          \"localizedLabel\": {\n            \"defaultValue\": {},\n            \"translatedValues\": [\n              {}\n            ]\n          },\n          \"localizedValue\": {}\n        }\n      ]\n    }\n  ]\n}",
			"description": "Deprecated. Use textModulesData instead.",
			"routing": {
				"send": {
					"property": "infoModuleData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "string",
			"default": "",
			"description": "Identifies what kind of resource this is. Value: the fixed string `\"walletobjects#giftCardObject\"`.",
			"routing": {
				"send": {
					"property": "kind",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Links Module Data",
			"name": "linksModuleData",
			"type": "json",
			"default": "{\n  \"uris\": [\n    {\n      \"localizedDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      }\n    }\n  ]\n}",
			"description": "Links module data. If links module data is also defined on the class, both will be displayed.",
			"routing": {
				"send": {
					"property": "linksModuleData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Locations",
			"name": "locations",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Note: This field is currently not supported to trigger geo notifications.",
			"routing": {
				"send": {
					"property": "locations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Messages",
			"name": "messages",
			"type": "json",
			"default": "[\n  {\n    \"displayInterval\": {\n      \"end\": {},\n      \"start\": {}\n    },\n    \"localizedBody\": {\n      \"defaultValue\": {},\n      \"translatedValues\": [\n        {}\n      ]\n    },\n    \"localizedHeader\": {}\n  }\n]",
			"description": "An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.",
			"routing": {
				"send": {
					"property": "messages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Pass Constraints",
			"name": "passConstraints",
			"type": "json",
			"default": "{}",
			"description": "Container for any constraints that may be placed on passes.",
			"routing": {
				"send": {
					"property": "passConstraints",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Pin",
			"name": "pin",
			"type": "string",
			"default": "",
			"description": "The card's PIN.",
			"routing": {
				"send": {
					"property": "pin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Rotating Barcode",
			"name": "rotatingBarcode",
			"type": "json",
			"default": "{\n  \"showCodeText\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"totpDetails\": {\n    \"parameters\": [\n      {}\n    ]\n  }\n}",
			"description": "The rotating barcode type and value.",
			"routing": {
				"send": {
					"property": "rotatingBarcode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Smart Tap Redemption Value",
			"name": "smartTapRedemptionValue",
			"type": "string",
			"default": "",
			"description": "The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported.",
			"routing": {
				"send": {
					"property": "smartTapRedemptionValue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"type": "options",
			"default": "STATE_UNSPECIFIED",
			"description": "Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the \"Expired passes\" section.",
			"options": [
				{
					"name": "STATE UNSPECIFIED",
					"value": "STATE_UNSPECIFIED"
				},
				{
					"name": "ACTIVE",
					"value": "ACTIVE"
				},
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "COMPLETED",
					"value": "COMPLETED"
				},
				{
					"name": "Completed",
					"value": "completed"
				},
				{
					"name": "EXPIRED",
					"value": "EXPIRED"
				},
				{
					"name": "Expired",
					"value": "expired"
				},
				{
					"name": "INACTIVE",
					"value": "INACTIVE"
				},
				{
					"name": "Inactive",
					"value": "inactive"
				}
			],
			"routing": {
				"send": {
					"property": "state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Text Modules Data",
			"name": "textModulesData",
			"type": "json",
			"default": "[\n  {\n    \"localizedBody\": {\n      \"defaultValue\": {},\n      \"translatedValues\": [\n        {}\n      ]\n    },\n    \"localizedHeader\": {}\n  }\n]",
			"description": "Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.",
			"routing": {
				"send": {
					"property": "textModulesData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Valid Time Interval",
			"name": "validTimeInterval",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"description": "The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed.",
			"routing": {
				"send": {
					"property": "validTimeInterval",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"type": "string",
			"default": "",
			"description": "Deprecated",
			"routing": {
				"send": {
					"property": "version",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Insert"
					]
				}
			}
		},
		{
			"displayName": "GET /walletobjects/v1/giftCardObject/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Get"
					]
				}
			}
		},
		{
			"displayName": "Resource Id",
			"name": "resourceId",
			"required": true,
			"description": "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Get"
					]
				}
			}
		},
		{
			"displayName": "PATCH /walletobjects/v1/giftCardObject/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Resource Id",
			"name": "resourceId",
			"required": true,
			"description": "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "App Link Data",
			"name": "appLinkData",
			"type": "json",
			"default": "{\n  \"androidAppLinkInfo\": {\n    \"appLogoImage\": {\n      \"contentDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      },\n      \"sourceUri\": {\n        \"localizedDescription\": {}\n      }\n    },\n    \"appTarget\": {\n      \"targetUri\": {\n        \"localizedDescription\": {}\n      }\n    },\n    \"description\": {},\n    \"title\": {}\n  },\n  \"iosAppLinkInfo\": {},\n  \"webAppLinkInfo\": {}\n}",
			"description": "Optional information about the partner app link.",
			"routing": {
				"send": {
					"property": "appLinkData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Balance",
			"name": "balance",
			"type": "json",
			"default": "{}",
			"description": "The card's monetary balance.",
			"routing": {
				"send": {
					"property": "balance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Balance Update Time",
			"name": "balanceUpdateTime",
			"type": "json",
			"default": "{}",
			"description": "The date and time when the balance was last updated. Offset is required. If balance is updated and this property is not provided, system will default to the current time.",
			"routing": {
				"send": {
					"property": "balanceUpdateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Barcode",
			"name": "barcode",
			"type": "json",
			"default": "{\n  \"showCodeText\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  }\n}",
			"description": "The barcode type and value.",
			"routing": {
				"send": {
					"property": "barcode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Card Number",
			"name": "cardNumber",
			"type": "string",
			"default": "",
			"description": "Required. The card's number.",
			"routing": {
				"send": {
					"property": "cardNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Class Id",
			"name": "classId",
			"type": "string",
			"default": "",
			"description": "Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you.",
			"routing": {
				"send": {
					"property": "classId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Class Reference",
			"name": "classReference",
			"type": "json",
			"default": "{\n  \"callbackOptions\": {},\n  \"classTemplateInfo\": {\n    \"cardBarcodeSectionDetails\": {\n      \"firstBottomDetail\": {\n        \"fieldSelector\": {\n          \"fields\": [\n            {}\n          ]\n        }\n      },\n      \"firstTopDetail\": {},\n      \"secondTopDetail\": {}\n    },\n    \"cardTemplateOverride\": {\n      \"cardRowTemplateInfos\": [\n        {\n          \"oneItem\": {\n            \"item\": {\n              \"firstValue\": {},\n              \"secondValue\": {}\n            }\n          },\n          \"threeItems\": {\n            \"endItem\": {},\n            \"middleItem\": {},\n            \"startItem\": {}\n          },\n          \"twoItems\": {\n            \"endItem\": {},\n            \"startItem\": {}\n          }\n        }\n      ]\n    },\n    \"detailsTemplateOverride\": {\n      \"detailsItemInfos\": [\n        {\n          \"item\": {}\n        }\n      ]\n    },\n    \"listTemplateOverride\": {\n      \"firstRowOption\": {\n        \"fieldOption\": {}\n      },\n      \"secondRowOption\": {},\n      \"thirdRowOption\": {}\n    }\n  },\n  \"heroImage\": {\n    \"contentDescription\": {\n      \"defaultValue\": {},\n      \"translatedValues\": [\n        {}\n      ]\n    },\n    \"sourceUri\": {\n      \"localizedDescription\": {}\n    }\n  },\n  \"homepageUri\": {\n    \"localizedDescription\": {}\n  },\n  \"imageModulesData\": [\n    {\n      \"mainImage\": {}\n    }\n  ],\n  \"infoModuleData\": {\n    \"labelValueRows\": [\n      {\n        \"columns\": [\n          {\n            \"localizedLabel\": {},\n            \"localizedValue\": {}\n          }\n        ]\n      }\n    ]\n  },\n  \"linksModuleData\": {\n    \"uris\": [\n      {}\n    ]\n  },\n  \"localizedCardNumberLabel\": {},\n  \"localizedEventNumberLabel\": {},\n  \"localizedIssuerName\": {},\n  \"localizedMerchantName\": {},\n  \"localizedPinLabel\": {},\n  \"locations\": [\n    {}\n  ],\n  \"messages\": [\n    {\n      \"displayInterval\": {\n        \"end\": {},\n        \"start\": {}\n      },\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"programLogo\": {},\n  \"redemptionIssuers\": [\n    null\n  ],\n  \"review\": {},\n  \"securityAnimation\": {},\n  \"textModulesData\": [\n    {\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"wordMark\": {}\n}",
			"description": "A copy of the inherited fields of the parent class. These fields are retrieved during a GET.",
			"routing": {
				"send": {
					"property": "classReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Disable Expiration Notification",
			"name": "disableExpirationNotification",
			"type": "boolean",
			"default": true,
			"description": "Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers.",
			"routing": {
				"send": {
					"property": "disableExpirationNotification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Event Number",
			"name": "eventNumber",
			"type": "string",
			"default": "",
			"description": "The card's event number, an optional field used by some gift cards.",
			"routing": {
				"send": {
					"property": "eventNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Grouping Info",
			"name": "groupingInfo",
			"type": "json",
			"default": "{}",
			"description": "Information that controls how passes are grouped together.",
			"routing": {
				"send": {
					"property": "groupingInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Has Linked Device",
			"name": "hasLinkedDevice",
			"type": "boolean",
			"default": true,
			"description": "Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information.",
			"routing": {
				"send": {
					"property": "hasLinkedDevice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Has Users",
			"name": "hasUsers",
			"type": "boolean",
			"default": true,
			"description": "Indicates if the object has users. This field is set by the platform.",
			"routing": {
				"send": {
					"property": "hasUsers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Hero Image",
			"name": "heroImage",
			"type": "json",
			"default": "{\n  \"contentDescription\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"sourceUri\": {\n    \"localizedDescription\": {}\n  }\n}",
			"description": "Wrapping type for Google hosted images. Next ID: 7",
			"routing": {
				"send": {
					"property": "heroImage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Image Modules Data",
			"name": "imageModulesData",
			"type": "json",
			"default": "[\n  {\n    \"mainImage\": {\n      \"contentDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      },\n      \"sourceUri\": {\n        \"localizedDescription\": {}\n      }\n    }\n  }\n]",
			"description": "Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.",
			"routing": {
				"send": {
					"property": "imageModulesData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Info Module Data",
			"name": "infoModuleData",
			"type": "json",
			"default": "{\n  \"labelValueRows\": [\n    {\n      \"columns\": [\n        {\n          \"localizedLabel\": {\n            \"defaultValue\": {},\n            \"translatedValues\": [\n              {}\n            ]\n          },\n          \"localizedValue\": {}\n        }\n      ]\n    }\n  ]\n}",
			"description": "Deprecated. Use textModulesData instead.",
			"routing": {
				"send": {
					"property": "infoModuleData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "string",
			"default": "",
			"description": "Identifies what kind of resource this is. Value: the fixed string `\"walletobjects#giftCardObject\"`.",
			"routing": {
				"send": {
					"property": "kind",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Links Module Data",
			"name": "linksModuleData",
			"type": "json",
			"default": "{\n  \"uris\": [\n    {\n      \"localizedDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      }\n    }\n  ]\n}",
			"description": "Links module data. If links module data is also defined on the class, both will be displayed.",
			"routing": {
				"send": {
					"property": "linksModuleData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Locations",
			"name": "locations",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Note: This field is currently not supported to trigger geo notifications.",
			"routing": {
				"send": {
					"property": "locations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Messages",
			"name": "messages",
			"type": "json",
			"default": "[\n  {\n    \"displayInterval\": {\n      \"end\": {},\n      \"start\": {}\n    },\n    \"localizedBody\": {\n      \"defaultValue\": {},\n      \"translatedValues\": [\n        {}\n      ]\n    },\n    \"localizedHeader\": {}\n  }\n]",
			"description": "An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.",
			"routing": {
				"send": {
					"property": "messages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Pass Constraints",
			"name": "passConstraints",
			"type": "json",
			"default": "{}",
			"description": "Container for any constraints that may be placed on passes.",
			"routing": {
				"send": {
					"property": "passConstraints",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Pin",
			"name": "pin",
			"type": "string",
			"default": "",
			"description": "The card's PIN.",
			"routing": {
				"send": {
					"property": "pin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Rotating Barcode",
			"name": "rotatingBarcode",
			"type": "json",
			"default": "{\n  \"showCodeText\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"totpDetails\": {\n    \"parameters\": [\n      {}\n    ]\n  }\n}",
			"description": "The rotating barcode type and value.",
			"routing": {
				"send": {
					"property": "rotatingBarcode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Smart Tap Redemption Value",
			"name": "smartTapRedemptionValue",
			"type": "string",
			"default": "",
			"description": "The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported.",
			"routing": {
				"send": {
					"property": "smartTapRedemptionValue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"type": "options",
			"default": "STATE_UNSPECIFIED",
			"description": "Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the \"Expired passes\" section.",
			"options": [
				{
					"name": "STATE UNSPECIFIED",
					"value": "STATE_UNSPECIFIED"
				},
				{
					"name": "ACTIVE",
					"value": "ACTIVE"
				},
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "COMPLETED",
					"value": "COMPLETED"
				},
				{
					"name": "Completed",
					"value": "completed"
				},
				{
					"name": "EXPIRED",
					"value": "EXPIRED"
				},
				{
					"name": "Expired",
					"value": "expired"
				},
				{
					"name": "INACTIVE",
					"value": "INACTIVE"
				},
				{
					"name": "Inactive",
					"value": "inactive"
				}
			],
			"routing": {
				"send": {
					"property": "state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Text Modules Data",
			"name": "textModulesData",
			"type": "json",
			"default": "[\n  {\n    \"localizedBody\": {\n      \"defaultValue\": {},\n      \"translatedValues\": [\n        {}\n      ]\n    },\n    \"localizedHeader\": {}\n  }\n]",
			"description": "Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.",
			"routing": {
				"send": {
					"property": "textModulesData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Valid Time Interval",
			"name": "validTimeInterval",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"description": "The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed.",
			"routing": {
				"send": {
					"property": "validTimeInterval",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"type": "string",
			"default": "",
			"description": "Deprecated",
			"routing": {
				"send": {
					"property": "version",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Patch"
					]
				}
			}
		},
		{
			"displayName": "PUT /walletobjects/v1/giftCardObject/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Resource Id",
			"name": "resourceId",
			"required": true,
			"description": "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "App Link Data",
			"name": "appLinkData",
			"type": "json",
			"default": "{\n  \"androidAppLinkInfo\": {\n    \"appLogoImage\": {\n      \"contentDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      },\n      \"sourceUri\": {\n        \"localizedDescription\": {}\n      }\n    },\n    \"appTarget\": {\n      \"targetUri\": {\n        \"localizedDescription\": {}\n      }\n    },\n    \"description\": {},\n    \"title\": {}\n  },\n  \"iosAppLinkInfo\": {},\n  \"webAppLinkInfo\": {}\n}",
			"description": "Optional information about the partner app link.",
			"routing": {
				"send": {
					"property": "appLinkData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Balance",
			"name": "balance",
			"type": "json",
			"default": "{}",
			"description": "The card's monetary balance.",
			"routing": {
				"send": {
					"property": "balance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Balance Update Time",
			"name": "balanceUpdateTime",
			"type": "json",
			"default": "{}",
			"description": "The date and time when the balance was last updated. Offset is required. If balance is updated and this property is not provided, system will default to the current time.",
			"routing": {
				"send": {
					"property": "balanceUpdateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Barcode",
			"name": "barcode",
			"type": "json",
			"default": "{\n  \"showCodeText\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  }\n}",
			"description": "The barcode type and value.",
			"routing": {
				"send": {
					"property": "barcode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Card Number",
			"name": "cardNumber",
			"type": "string",
			"default": "",
			"description": "Required. The card's number.",
			"routing": {
				"send": {
					"property": "cardNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Class Id",
			"name": "classId",
			"type": "string",
			"default": "",
			"description": "Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you.",
			"routing": {
				"send": {
					"property": "classId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Class Reference",
			"name": "classReference",
			"type": "json",
			"default": "{\n  \"callbackOptions\": {},\n  \"classTemplateInfo\": {\n    \"cardBarcodeSectionDetails\": {\n      \"firstBottomDetail\": {\n        \"fieldSelector\": {\n          \"fields\": [\n            {}\n          ]\n        }\n      },\n      \"firstTopDetail\": {},\n      \"secondTopDetail\": {}\n    },\n    \"cardTemplateOverride\": {\n      \"cardRowTemplateInfos\": [\n        {\n          \"oneItem\": {\n            \"item\": {\n              \"firstValue\": {},\n              \"secondValue\": {}\n            }\n          },\n          \"threeItems\": {\n            \"endItem\": {},\n            \"middleItem\": {},\n            \"startItem\": {}\n          },\n          \"twoItems\": {\n            \"endItem\": {},\n            \"startItem\": {}\n          }\n        }\n      ]\n    },\n    \"detailsTemplateOverride\": {\n      \"detailsItemInfos\": [\n        {\n          \"item\": {}\n        }\n      ]\n    },\n    \"listTemplateOverride\": {\n      \"firstRowOption\": {\n        \"fieldOption\": {}\n      },\n      \"secondRowOption\": {},\n      \"thirdRowOption\": {}\n    }\n  },\n  \"heroImage\": {\n    \"contentDescription\": {\n      \"defaultValue\": {},\n      \"translatedValues\": [\n        {}\n      ]\n    },\n    \"sourceUri\": {\n      \"localizedDescription\": {}\n    }\n  },\n  \"homepageUri\": {\n    \"localizedDescription\": {}\n  },\n  \"imageModulesData\": [\n    {\n      \"mainImage\": {}\n    }\n  ],\n  \"infoModuleData\": {\n    \"labelValueRows\": [\n      {\n        \"columns\": [\n          {\n            \"localizedLabel\": {},\n            \"localizedValue\": {}\n          }\n        ]\n      }\n    ]\n  },\n  \"linksModuleData\": {\n    \"uris\": [\n      {}\n    ]\n  },\n  \"localizedCardNumberLabel\": {},\n  \"localizedEventNumberLabel\": {},\n  \"localizedIssuerName\": {},\n  \"localizedMerchantName\": {},\n  \"localizedPinLabel\": {},\n  \"locations\": [\n    {}\n  ],\n  \"messages\": [\n    {\n      \"displayInterval\": {\n        \"end\": {},\n        \"start\": {}\n      },\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"programLogo\": {},\n  \"redemptionIssuers\": [\n    null\n  ],\n  \"review\": {},\n  \"securityAnimation\": {},\n  \"textModulesData\": [\n    {\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"wordMark\": {}\n}",
			"description": "A copy of the inherited fields of the parent class. These fields are retrieved during a GET.",
			"routing": {
				"send": {
					"property": "classReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Disable Expiration Notification",
			"name": "disableExpirationNotification",
			"type": "boolean",
			"default": true,
			"description": "Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers.",
			"routing": {
				"send": {
					"property": "disableExpirationNotification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Event Number",
			"name": "eventNumber",
			"type": "string",
			"default": "",
			"description": "The card's event number, an optional field used by some gift cards.",
			"routing": {
				"send": {
					"property": "eventNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Grouping Info",
			"name": "groupingInfo",
			"type": "json",
			"default": "{}",
			"description": "Information that controls how passes are grouped together.",
			"routing": {
				"send": {
					"property": "groupingInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Has Linked Device",
			"name": "hasLinkedDevice",
			"type": "boolean",
			"default": true,
			"description": "Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information.",
			"routing": {
				"send": {
					"property": "hasLinkedDevice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Has Users",
			"name": "hasUsers",
			"type": "boolean",
			"default": true,
			"description": "Indicates if the object has users. This field is set by the platform.",
			"routing": {
				"send": {
					"property": "hasUsers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Hero Image",
			"name": "heroImage",
			"type": "json",
			"default": "{\n  \"contentDescription\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"sourceUri\": {\n    \"localizedDescription\": {}\n  }\n}",
			"description": "Wrapping type for Google hosted images. Next ID: 7",
			"routing": {
				"send": {
					"property": "heroImage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Image Modules Data",
			"name": "imageModulesData",
			"type": "json",
			"default": "[\n  {\n    \"mainImage\": {\n      \"contentDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      },\n      \"sourceUri\": {\n        \"localizedDescription\": {}\n      }\n    }\n  }\n]",
			"description": "Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.",
			"routing": {
				"send": {
					"property": "imageModulesData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Info Module Data",
			"name": "infoModuleData",
			"type": "json",
			"default": "{\n  \"labelValueRows\": [\n    {\n      \"columns\": [\n        {\n          \"localizedLabel\": {\n            \"defaultValue\": {},\n            \"translatedValues\": [\n              {}\n            ]\n          },\n          \"localizedValue\": {}\n        }\n      ]\n    }\n  ]\n}",
			"description": "Deprecated. Use textModulesData instead.",
			"routing": {
				"send": {
					"property": "infoModuleData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "string",
			"default": "",
			"description": "Identifies what kind of resource this is. Value: the fixed string `\"walletobjects#giftCardObject\"`.",
			"routing": {
				"send": {
					"property": "kind",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Links Module Data",
			"name": "linksModuleData",
			"type": "json",
			"default": "{\n  \"uris\": [\n    {\n      \"localizedDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      }\n    }\n  ]\n}",
			"description": "Links module data. If links module data is also defined on the class, both will be displayed.",
			"routing": {
				"send": {
					"property": "linksModuleData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Locations",
			"name": "locations",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Note: This field is currently not supported to trigger geo notifications.",
			"routing": {
				"send": {
					"property": "locations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Messages",
			"name": "messages",
			"type": "json",
			"default": "[\n  {\n    \"displayInterval\": {\n      \"end\": {},\n      \"start\": {}\n    },\n    \"localizedBody\": {\n      \"defaultValue\": {},\n      \"translatedValues\": [\n        {}\n      ]\n    },\n    \"localizedHeader\": {}\n  }\n]",
			"description": "An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.",
			"routing": {
				"send": {
					"property": "messages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Pass Constraints",
			"name": "passConstraints",
			"type": "json",
			"default": "{}",
			"description": "Container for any constraints that may be placed on passes.",
			"routing": {
				"send": {
					"property": "passConstraints",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Pin",
			"name": "pin",
			"type": "string",
			"default": "",
			"description": "The card's PIN.",
			"routing": {
				"send": {
					"property": "pin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Rotating Barcode",
			"name": "rotatingBarcode",
			"type": "json",
			"default": "{\n  \"showCodeText\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"totpDetails\": {\n    \"parameters\": [\n      {}\n    ]\n  }\n}",
			"description": "The rotating barcode type and value.",
			"routing": {
				"send": {
					"property": "rotatingBarcode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Smart Tap Redemption Value",
			"name": "smartTapRedemptionValue",
			"type": "string",
			"default": "",
			"description": "The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported.",
			"routing": {
				"send": {
					"property": "smartTapRedemptionValue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"type": "options",
			"default": "STATE_UNSPECIFIED",
			"description": "Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the \"Expired passes\" section.",
			"options": [
				{
					"name": "STATE UNSPECIFIED",
					"value": "STATE_UNSPECIFIED"
				},
				{
					"name": "ACTIVE",
					"value": "ACTIVE"
				},
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "COMPLETED",
					"value": "COMPLETED"
				},
				{
					"name": "Completed",
					"value": "completed"
				},
				{
					"name": "EXPIRED",
					"value": "EXPIRED"
				},
				{
					"name": "Expired",
					"value": "expired"
				},
				{
					"name": "INACTIVE",
					"value": "INACTIVE"
				},
				{
					"name": "Inactive",
					"value": "inactive"
				}
			],
			"routing": {
				"send": {
					"property": "state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Text Modules Data",
			"name": "textModulesData",
			"type": "json",
			"default": "[\n  {\n    \"localizedBody\": {\n      \"defaultValue\": {},\n      \"translatedValues\": [\n        {}\n      ]\n    },\n    \"localizedHeader\": {}\n  }\n]",
			"description": "Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.",
			"routing": {
				"send": {
					"property": "textModulesData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Valid Time Interval",
			"name": "validTimeInterval",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"description": "The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed.",
			"routing": {
				"send": {
					"property": "validTimeInterval",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"type": "string",
			"default": "",
			"description": "Deprecated",
			"routing": {
				"send": {
					"property": "version",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Update"
					]
				}
			}
		},
		{
			"displayName": "POST /walletobjects/v1/giftCardObject/{resourceId}/addMessage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Addmessage"
					]
				}
			}
		},
		{
			"displayName": "Resource Id",
			"name": "resourceId",
			"required": true,
			"description": "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Addmessage"
					]
				}
			}
		},
		{
			"displayName": "Message",
			"name": "message",
			"type": "json",
			"default": "{\n  \"displayInterval\": {\n    \"end\": {},\n    \"start\": {}\n  },\n  \"localizedBody\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"localizedHeader\": {}\n}",
			"description": "A message that will be displayed with a Valuable",
			"routing": {
				"send": {
					"property": "message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Giftcardobject"
					],
					"operation": [
						"Walletobjects Giftcardobject Addmessage"
					]
				}
			}
		},
];
