import type { INodeProperties } from 'n8n-workflow';

export const loyaltyobjectDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyobject"
					]
				}
			},
			"options": [
				{
					"name": "Walletobjects Loyaltyobject List",
					"value": "Walletobjects Loyaltyobject List",
					"action": "Walletobjects Loyaltyobject List",
					"description": "Returns a list of all loyalty objects for a given issuer ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/walletobjects/v1/loyaltyObject"
						}
					}
				},
				{
					"name": "Walletobjects Loyaltyobject Insert",
					"value": "Walletobjects Loyaltyobject Insert",
					"action": "Walletobjects Loyaltyobject Insert",
					"description": "Inserts an loyalty object with the given ID and properties.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/walletobjects/v1/loyaltyObject"
						}
					}
				},
				{
					"name": "Walletobjects Loyaltyobject Get",
					"value": "Walletobjects Loyaltyobject Get",
					"action": "Walletobjects Loyaltyobject Get",
					"description": "Returns the loyalty object with the given object ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/walletobjects/v1/loyaltyObject/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Loyaltyobject Patch",
					"value": "Walletobjects Loyaltyobject Patch",
					"action": "Walletobjects Loyaltyobject Patch",
					"description": "Updates the loyalty object referenced by the given object ID. This method supports patch semantics.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/walletobjects/v1/loyaltyObject/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Loyaltyobject Update",
					"value": "Walletobjects Loyaltyobject Update",
					"action": "Walletobjects Loyaltyobject Update",
					"description": "Updates the loyalty object referenced by the given object ID.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/walletobjects/v1/loyaltyObject/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Loyaltyobject Addmessage",
					"value": "Walletobjects Loyaltyobject Addmessage",
					"action": "Walletobjects Loyaltyobject Addmessage",
					"description": "Adds a message to the loyalty object referenced by the given object ID.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/walletobjects/v1/loyaltyObject/{{$parameter[\"resourceId\"]}}/addMessage"
						}
					}
				},
				{
					"name": "Walletobjects Loyaltyobject Modifylinkedofferobjects",
					"value": "Walletobjects Loyaltyobject Modifylinkedofferobjects",
					"action": "Walletobjects Loyaltyobject Modifylinkedofferobjects",
					"description": "Modifies linked offer objects for the loyalty object with the given ID.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/walletobjects/v1/loyaltyObject/{{$parameter[\"resourceId\"]}}/modifyLinkedOfferObjects"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /walletobjects/v1/loyaltyObject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject List"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject List"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject List"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject List"
					]
				}
			}
		},
		{
			"displayName": "POST /walletobjects/v1/loyaltyObject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"type": "string",
			"default": "",
			"description": "The loyalty account identifier. Recommended maximum length is 20 characters.",
			"routing": {
				"send": {
					"property": "accountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Account Name",
			"name": "accountName",
			"type": "string",
			"default": "",
			"description": "The loyalty account holder name, such as \"John Smith.\" Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "accountName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Class Reference",
			"name": "classReference",
			"type": "json",
			"default": "{\n  \"callbackOptions\": {},\n  \"classTemplateInfo\": {\n    \"cardBarcodeSectionDetails\": {\n      \"firstBottomDetail\": {\n        \"fieldSelector\": {\n          \"fields\": [\n            {}\n          ]\n        }\n      },\n      \"firstTopDetail\": {},\n      \"secondTopDetail\": {}\n    },\n    \"cardTemplateOverride\": {\n      \"cardRowTemplateInfos\": [\n        {\n          \"oneItem\": {\n            \"item\": {\n              \"firstValue\": {},\n              \"secondValue\": {}\n            }\n          },\n          \"threeItems\": {\n            \"endItem\": {},\n            \"middleItem\": {},\n            \"startItem\": {}\n          },\n          \"twoItems\": {\n            \"endItem\": {},\n            \"startItem\": {}\n          }\n        }\n      ]\n    },\n    \"detailsTemplateOverride\": {\n      \"detailsItemInfos\": [\n        {\n          \"item\": {}\n        }\n      ]\n    },\n    \"listTemplateOverride\": {\n      \"firstRowOption\": {\n        \"fieldOption\": {}\n      },\n      \"secondRowOption\": {},\n      \"thirdRowOption\": {}\n    }\n  },\n  \"discoverableProgram\": {\n    \"merchantSigninInfo\": {\n      \"signinWebsite\": {\n        \"localizedDescription\": {\n          \"defaultValue\": {},\n          \"translatedValues\": [\n            {}\n          ]\n        }\n      }\n    },\n    \"merchantSignupInfo\": {\n      \"signupSharedDatas\": [\n        null\n      ],\n      \"signupWebsite\": {}\n    }\n  },\n  \"heroImage\": {\n    \"contentDescription\": {},\n    \"sourceUri\": {\n      \"localizedDescription\": {}\n    }\n  },\n  \"homepageUri\": {},\n  \"imageModulesData\": [\n    {\n      \"mainImage\": {}\n    }\n  ],\n  \"infoModuleData\": {\n    \"labelValueRows\": [\n      {\n        \"columns\": [\n          {\n            \"localizedLabel\": {},\n            \"localizedValue\": {}\n          }\n        ]\n      }\n    ]\n  },\n  \"linksModuleData\": {\n    \"uris\": [\n      {}\n    ]\n  },\n  \"localizedAccountIdLabel\": {},\n  \"localizedAccountNameLabel\": {},\n  \"localizedIssuerName\": {},\n  \"localizedProgramName\": {},\n  \"localizedRewardsTier\": {},\n  \"localizedRewardsTierLabel\": {},\n  \"localizedSecondaryRewardsTier\": {},\n  \"localizedSecondaryRewardsTierLabel\": {},\n  \"locations\": [\n    {}\n  ],\n  \"messages\": [\n    {\n      \"displayInterval\": {\n        \"end\": {},\n        \"start\": {}\n      },\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"programLogo\": {},\n  \"redemptionIssuers\": [\n    null\n  ],\n  \"review\": {},\n  \"securityAnimation\": {},\n  \"textModulesData\": [\n    {\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"wordMark\": {}\n}",
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "string",
			"default": "",
			"description": "Identifies what kind of resource this is. Value: the fixed string `\"walletobjects#loyaltyObject\"`.",
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Linked Offer Ids",
			"name": "linkedOfferIds",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of offer objects linked to this loyalty card. The offer objects must already exist. Offer object IDs should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you.",
			"routing": {
				"send": {
					"property": "linkedOfferIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Loyalty Points",
			"name": "loyaltyPoints",
			"type": "json",
			"default": "{\n  \"balance\": {\n    \"money\": {}\n  },\n  \"localizedLabel\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  }\n}",
			"description": "The loyalty reward points label, balance, and type.",
			"routing": {
				"send": {
					"property": "loyaltyPoints",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Secondary Loyalty Points",
			"name": "secondaryLoyaltyPoints",
			"type": "json",
			"default": "{\n  \"balance\": {\n    \"money\": {}\n  },\n  \"localizedLabel\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  }\n}",
			"description": "The secondary loyalty reward points label, balance, and type. Shown in addition to the primary loyalty points.",
			"routing": {
				"send": {
					"property": "secondaryLoyaltyPoints",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Smart Tap Redemption Value",
			"name": "smartTapRedemptionValue",
			"type": "string",
			"default": "",
			"description": "The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. If this value is not set but the class level fields `enableSmartTap` and `redemptionIssuers` are set up correctly, the `barcode.value` or the `accountId` fields are used as fallback if present.",
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Insert"
					]
				}
			}
		},
		{
			"displayName": "GET /walletobjects/v1/loyaltyObject/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Get"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Get"
					]
				}
			}
		},
		{
			"displayName": "PATCH /walletobjects/v1/loyaltyObject/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"type": "string",
			"default": "",
			"description": "The loyalty account identifier. Recommended maximum length is 20 characters.",
			"routing": {
				"send": {
					"property": "accountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Account Name",
			"name": "accountName",
			"type": "string",
			"default": "",
			"description": "The loyalty account holder name, such as \"John Smith.\" Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "accountName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Class Reference",
			"name": "classReference",
			"type": "json",
			"default": "{\n  \"callbackOptions\": {},\n  \"classTemplateInfo\": {\n    \"cardBarcodeSectionDetails\": {\n      \"firstBottomDetail\": {\n        \"fieldSelector\": {\n          \"fields\": [\n            {}\n          ]\n        }\n      },\n      \"firstTopDetail\": {},\n      \"secondTopDetail\": {}\n    },\n    \"cardTemplateOverride\": {\n      \"cardRowTemplateInfos\": [\n        {\n          \"oneItem\": {\n            \"item\": {\n              \"firstValue\": {},\n              \"secondValue\": {}\n            }\n          },\n          \"threeItems\": {\n            \"endItem\": {},\n            \"middleItem\": {},\n            \"startItem\": {}\n          },\n          \"twoItems\": {\n            \"endItem\": {},\n            \"startItem\": {}\n          }\n        }\n      ]\n    },\n    \"detailsTemplateOverride\": {\n      \"detailsItemInfos\": [\n        {\n          \"item\": {}\n        }\n      ]\n    },\n    \"listTemplateOverride\": {\n      \"firstRowOption\": {\n        \"fieldOption\": {}\n      },\n      \"secondRowOption\": {},\n      \"thirdRowOption\": {}\n    }\n  },\n  \"discoverableProgram\": {\n    \"merchantSigninInfo\": {\n      \"signinWebsite\": {\n        \"localizedDescription\": {\n          \"defaultValue\": {},\n          \"translatedValues\": [\n            {}\n          ]\n        }\n      }\n    },\n    \"merchantSignupInfo\": {\n      \"signupSharedDatas\": [\n        null\n      ],\n      \"signupWebsite\": {}\n    }\n  },\n  \"heroImage\": {\n    \"contentDescription\": {},\n    \"sourceUri\": {\n      \"localizedDescription\": {}\n    }\n  },\n  \"homepageUri\": {},\n  \"imageModulesData\": [\n    {\n      \"mainImage\": {}\n    }\n  ],\n  \"infoModuleData\": {\n    \"labelValueRows\": [\n      {\n        \"columns\": [\n          {\n            \"localizedLabel\": {},\n            \"localizedValue\": {}\n          }\n        ]\n      }\n    ]\n  },\n  \"linksModuleData\": {\n    \"uris\": [\n      {}\n    ]\n  },\n  \"localizedAccountIdLabel\": {},\n  \"localizedAccountNameLabel\": {},\n  \"localizedIssuerName\": {},\n  \"localizedProgramName\": {},\n  \"localizedRewardsTier\": {},\n  \"localizedRewardsTierLabel\": {},\n  \"localizedSecondaryRewardsTier\": {},\n  \"localizedSecondaryRewardsTierLabel\": {},\n  \"locations\": [\n    {}\n  ],\n  \"messages\": [\n    {\n      \"displayInterval\": {\n        \"end\": {},\n        \"start\": {}\n      },\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"programLogo\": {},\n  \"redemptionIssuers\": [\n    null\n  ],\n  \"review\": {},\n  \"securityAnimation\": {},\n  \"textModulesData\": [\n    {\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"wordMark\": {}\n}",
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "string",
			"default": "",
			"description": "Identifies what kind of resource this is. Value: the fixed string `\"walletobjects#loyaltyObject\"`.",
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Linked Offer Ids",
			"name": "linkedOfferIds",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of offer objects linked to this loyalty card. The offer objects must already exist. Offer object IDs should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you.",
			"routing": {
				"send": {
					"property": "linkedOfferIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Loyalty Points",
			"name": "loyaltyPoints",
			"type": "json",
			"default": "{\n  \"balance\": {\n    \"money\": {}\n  },\n  \"localizedLabel\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  }\n}",
			"description": "The loyalty reward points label, balance, and type.",
			"routing": {
				"send": {
					"property": "loyaltyPoints",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Secondary Loyalty Points",
			"name": "secondaryLoyaltyPoints",
			"type": "json",
			"default": "{\n  \"balance\": {\n    \"money\": {}\n  },\n  \"localizedLabel\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  }\n}",
			"description": "The secondary loyalty reward points label, balance, and type. Shown in addition to the primary loyalty points.",
			"routing": {
				"send": {
					"property": "secondaryLoyaltyPoints",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Smart Tap Redemption Value",
			"name": "smartTapRedemptionValue",
			"type": "string",
			"default": "",
			"description": "The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. If this value is not set but the class level fields `enableSmartTap` and `redemptionIssuers` are set up correctly, the `barcode.value` or the `accountId` fields are used as fallback if present.",
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Patch"
					]
				}
			}
		},
		{
			"displayName": "PUT /walletobjects/v1/loyaltyObject/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"type": "string",
			"default": "",
			"description": "The loyalty account identifier. Recommended maximum length is 20 characters.",
			"routing": {
				"send": {
					"property": "accountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
					]
				}
			}
		},
		{
			"displayName": "Account Name",
			"name": "accountName",
			"type": "string",
			"default": "",
			"description": "The loyalty account holder name, such as \"John Smith.\" Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "accountName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
					]
				}
			}
		},
		{
			"displayName": "Class Reference",
			"name": "classReference",
			"type": "json",
			"default": "{\n  \"callbackOptions\": {},\n  \"classTemplateInfo\": {\n    \"cardBarcodeSectionDetails\": {\n      \"firstBottomDetail\": {\n        \"fieldSelector\": {\n          \"fields\": [\n            {}\n          ]\n        }\n      },\n      \"firstTopDetail\": {},\n      \"secondTopDetail\": {}\n    },\n    \"cardTemplateOverride\": {\n      \"cardRowTemplateInfos\": [\n        {\n          \"oneItem\": {\n            \"item\": {\n              \"firstValue\": {},\n              \"secondValue\": {}\n            }\n          },\n          \"threeItems\": {\n            \"endItem\": {},\n            \"middleItem\": {},\n            \"startItem\": {}\n          },\n          \"twoItems\": {\n            \"endItem\": {},\n            \"startItem\": {}\n          }\n        }\n      ]\n    },\n    \"detailsTemplateOverride\": {\n      \"detailsItemInfos\": [\n        {\n          \"item\": {}\n        }\n      ]\n    },\n    \"listTemplateOverride\": {\n      \"firstRowOption\": {\n        \"fieldOption\": {}\n      },\n      \"secondRowOption\": {},\n      \"thirdRowOption\": {}\n    }\n  },\n  \"discoverableProgram\": {\n    \"merchantSigninInfo\": {\n      \"signinWebsite\": {\n        \"localizedDescription\": {\n          \"defaultValue\": {},\n          \"translatedValues\": [\n            {}\n          ]\n        }\n      }\n    },\n    \"merchantSignupInfo\": {\n      \"signupSharedDatas\": [\n        null\n      ],\n      \"signupWebsite\": {}\n    }\n  },\n  \"heroImage\": {\n    \"contentDescription\": {},\n    \"sourceUri\": {\n      \"localizedDescription\": {}\n    }\n  },\n  \"homepageUri\": {},\n  \"imageModulesData\": [\n    {\n      \"mainImage\": {}\n    }\n  ],\n  \"infoModuleData\": {\n    \"labelValueRows\": [\n      {\n        \"columns\": [\n          {\n            \"localizedLabel\": {},\n            \"localizedValue\": {}\n          }\n        ]\n      }\n    ]\n  },\n  \"linksModuleData\": {\n    \"uris\": [\n      {}\n    ]\n  },\n  \"localizedAccountIdLabel\": {},\n  \"localizedAccountNameLabel\": {},\n  \"localizedIssuerName\": {},\n  \"localizedProgramName\": {},\n  \"localizedRewardsTier\": {},\n  \"localizedRewardsTierLabel\": {},\n  \"localizedSecondaryRewardsTier\": {},\n  \"localizedSecondaryRewardsTierLabel\": {},\n  \"locations\": [\n    {}\n  ],\n  \"messages\": [\n    {\n      \"displayInterval\": {\n        \"end\": {},\n        \"start\": {}\n      },\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"programLogo\": {},\n  \"redemptionIssuers\": [\n    null\n  ],\n  \"review\": {},\n  \"securityAnimation\": {},\n  \"textModulesData\": [\n    {\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"wordMark\": {}\n}",
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "string",
			"default": "",
			"description": "Identifies what kind of resource this is. Value: the fixed string `\"walletobjects#loyaltyObject\"`.",
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
					]
				}
			}
		},
		{
			"displayName": "Linked Offer Ids",
			"name": "linkedOfferIds",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of offer objects linked to this loyalty card. The offer objects must already exist. Offer object IDs should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you.",
			"routing": {
				"send": {
					"property": "linkedOfferIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
					]
				}
			}
		},
		{
			"displayName": "Loyalty Points",
			"name": "loyaltyPoints",
			"type": "json",
			"default": "{\n  \"balance\": {\n    \"money\": {}\n  },\n  \"localizedLabel\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  }\n}",
			"description": "The loyalty reward points label, balance, and type.",
			"routing": {
				"send": {
					"property": "loyaltyPoints",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
					]
				}
			}
		},
		{
			"displayName": "Secondary Loyalty Points",
			"name": "secondaryLoyaltyPoints",
			"type": "json",
			"default": "{\n  \"balance\": {\n    \"money\": {}\n  },\n  \"localizedLabel\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  }\n}",
			"description": "The secondary loyalty reward points label, balance, and type. Shown in addition to the primary loyalty points.",
			"routing": {
				"send": {
					"property": "secondaryLoyaltyPoints",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
					]
				}
			}
		},
		{
			"displayName": "Smart Tap Redemption Value",
			"name": "smartTapRedemptionValue",
			"type": "string",
			"default": "",
			"description": "The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. If this value is not set but the class level fields `enableSmartTap` and `redemptionIssuers` are set up correctly, the `barcode.value` or the `accountId` fields are used as fallback if present.",
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Update"
					]
				}
			}
		},
		{
			"displayName": "POST /walletobjects/v1/loyaltyObject/{resourceId}/addMessage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Addmessage"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Addmessage"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Addmessage"
					]
				}
			}
		},
		{
			"displayName": "POST /walletobjects/v1/loyaltyObject/{resourceId}/modifyLinkedOfferObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Modifylinkedofferobjects"
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
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Modifylinkedofferobjects"
					]
				}
			}
		},
		{
			"displayName": "Linked Offer Object Ids",
			"name": "linkedOfferObjectIds",
			"type": "json",
			"default": "{\n  \"addLinkedOfferObjectIds\": [\n    null\n  ],\n  \"removeLinkedOfferObjectIds\": [\n    null\n  ]\n}",
			"description": "The linked offer object ids to add or remove from the object.",
			"routing": {
				"send": {
					"property": "linkedOfferObjectIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyobject"
					],
					"operation": [
						"Walletobjects Loyaltyobject Modifylinkedofferobjects"
					]
				}
			}
		},
];
