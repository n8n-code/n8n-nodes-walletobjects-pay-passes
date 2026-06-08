import type { INodeProperties } from 'n8n-workflow';

export const offerobjectDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Offerobject"
					]
				}
			},
			"options": [
				{
					"name": "Walletobjects Offerobject List",
					"value": "Walletobjects Offerobject List",
					"action": "Walletobjects Offerobject List",
					"description": "Returns a list of all offer objects for a given issuer ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/walletobjects/v1/offerObject"
						}
					}
				},
				{
					"name": "Walletobjects Offerobject Insert",
					"value": "Walletobjects Offerobject Insert",
					"action": "Walletobjects Offerobject Insert",
					"description": "Inserts an offer object with the given ID and properties.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/walletobjects/v1/offerObject"
						}
					}
				},
				{
					"name": "Walletobjects Offerobject Get",
					"value": "Walletobjects Offerobject Get",
					"action": "Walletobjects Offerobject Get",
					"description": "Returns the offer object with the given object ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/walletobjects/v1/offerObject/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Offerobject Patch",
					"value": "Walletobjects Offerobject Patch",
					"action": "Walletobjects Offerobject Patch",
					"description": "Updates the offer object referenced by the given object ID. This method supports patch semantics.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/walletobjects/v1/offerObject/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Offerobject Update",
					"value": "Walletobjects Offerobject Update",
					"action": "Walletobjects Offerobject Update",
					"description": "Updates the offer object referenced by the given object ID.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/walletobjects/v1/offerObject/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Offerobject Addmessage",
					"value": "Walletobjects Offerobject Addmessage",
					"action": "Walletobjects Offerobject Addmessage",
					"description": "Adds a message to the offer object referenced by the given object ID.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/walletobjects/v1/offerObject/{{$parameter[\"resourceId\"]}}/addMessage"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /walletobjects/v1/offerObject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject List"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject List"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject List"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject List"
					]
				}
			}
		},
		{
			"displayName": "POST /walletobjects/v1/offerObject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Insert"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Insert"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Insert"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Class Reference",
			"name": "classReference",
			"type": "json",
			"default": "{\n  \"callbackOptions\": {},\n  \"classTemplateInfo\": {\n    \"cardBarcodeSectionDetails\": {\n      \"firstBottomDetail\": {\n        \"fieldSelector\": {\n          \"fields\": [\n            {}\n          ]\n        }\n      },\n      \"firstTopDetail\": {},\n      \"secondTopDetail\": {}\n    },\n    \"cardTemplateOverride\": {\n      \"cardRowTemplateInfos\": [\n        {\n          \"oneItem\": {\n            \"item\": {\n              \"firstValue\": {},\n              \"secondValue\": {}\n            }\n          },\n          \"threeItems\": {\n            \"endItem\": {},\n            \"middleItem\": {},\n            \"startItem\": {}\n          },\n          \"twoItems\": {\n            \"endItem\": {},\n            \"startItem\": {}\n          }\n        }\n      ]\n    },\n    \"detailsTemplateOverride\": {\n      \"detailsItemInfos\": [\n        {\n          \"item\": {}\n        }\n      ]\n    },\n    \"listTemplateOverride\": {\n      \"firstRowOption\": {\n        \"fieldOption\": {}\n      },\n      \"secondRowOption\": {},\n      \"thirdRowOption\": {}\n    }\n  },\n  \"helpUri\": {\n    \"localizedDescription\": {\n      \"defaultValue\": {},\n      \"translatedValues\": [\n        {}\n      ]\n    }\n  },\n  \"heroImage\": {\n    \"contentDescription\": {},\n    \"sourceUri\": {\n      \"localizedDescription\": {}\n    }\n  },\n  \"homepageUri\": {},\n  \"imageModulesData\": [\n    {\n      \"mainImage\": {}\n    }\n  ],\n  \"infoModuleData\": {\n    \"labelValueRows\": [\n      {\n        \"columns\": [\n          {\n            \"localizedLabel\": {},\n            \"localizedValue\": {}\n          }\n        ]\n      }\n    ]\n  },\n  \"linksModuleData\": {\n    \"uris\": [\n      {}\n    ]\n  },\n  \"localizedDetails\": {},\n  \"localizedFinePrint\": {},\n  \"localizedIssuerName\": {},\n  \"localizedProvider\": {},\n  \"localizedShortTitle\": {},\n  \"localizedTitle\": {},\n  \"locations\": [\n    {}\n  ],\n  \"messages\": [\n    {\n      \"displayInterval\": {\n        \"end\": {},\n        \"start\": {}\n      },\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"redemptionIssuers\": [\n    null\n  ],\n  \"review\": {},\n  \"securityAnimation\": {},\n  \"textModulesData\": [\n    {\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"titleImage\": {},\n  \"wordMark\": {}\n}",
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Insert"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Insert"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Insert"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Insert"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Insert"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Insert"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Insert"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Insert"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "string",
			"default": "",
			"description": "Identifies what kind of resource this is. Value: the fixed string `\"walletobjects#offerObject\"`.",
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Insert"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Insert"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Insert"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Insert"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Insert"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Insert"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Insert"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Insert"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Insert"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Insert"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Insert"
					]
				}
			}
		},
		{
			"displayName": "GET /walletobjects/v1/offerObject/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Get"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Get"
					]
				}
			}
		},
		{
			"displayName": "PATCH /walletobjects/v1/offerObject/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Patch"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Patch"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Patch"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Patch"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Class Reference",
			"name": "classReference",
			"type": "json",
			"default": "{\n  \"callbackOptions\": {},\n  \"classTemplateInfo\": {\n    \"cardBarcodeSectionDetails\": {\n      \"firstBottomDetail\": {\n        \"fieldSelector\": {\n          \"fields\": [\n            {}\n          ]\n        }\n      },\n      \"firstTopDetail\": {},\n      \"secondTopDetail\": {}\n    },\n    \"cardTemplateOverride\": {\n      \"cardRowTemplateInfos\": [\n        {\n          \"oneItem\": {\n            \"item\": {\n              \"firstValue\": {},\n              \"secondValue\": {}\n            }\n          },\n          \"threeItems\": {\n            \"endItem\": {},\n            \"middleItem\": {},\n            \"startItem\": {}\n          },\n          \"twoItems\": {\n            \"endItem\": {},\n            \"startItem\": {}\n          }\n        }\n      ]\n    },\n    \"detailsTemplateOverride\": {\n      \"detailsItemInfos\": [\n        {\n          \"item\": {}\n        }\n      ]\n    },\n    \"listTemplateOverride\": {\n      \"firstRowOption\": {\n        \"fieldOption\": {}\n      },\n      \"secondRowOption\": {},\n      \"thirdRowOption\": {}\n    }\n  },\n  \"helpUri\": {\n    \"localizedDescription\": {\n      \"defaultValue\": {},\n      \"translatedValues\": [\n        {}\n      ]\n    }\n  },\n  \"heroImage\": {\n    \"contentDescription\": {},\n    \"sourceUri\": {\n      \"localizedDescription\": {}\n    }\n  },\n  \"homepageUri\": {},\n  \"imageModulesData\": [\n    {\n      \"mainImage\": {}\n    }\n  ],\n  \"infoModuleData\": {\n    \"labelValueRows\": [\n      {\n        \"columns\": [\n          {\n            \"localizedLabel\": {},\n            \"localizedValue\": {}\n          }\n        ]\n      }\n    ]\n  },\n  \"linksModuleData\": {\n    \"uris\": [\n      {}\n    ]\n  },\n  \"localizedDetails\": {},\n  \"localizedFinePrint\": {},\n  \"localizedIssuerName\": {},\n  \"localizedProvider\": {},\n  \"localizedShortTitle\": {},\n  \"localizedTitle\": {},\n  \"locations\": [\n    {}\n  ],\n  \"messages\": [\n    {\n      \"displayInterval\": {\n        \"end\": {},\n        \"start\": {}\n      },\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"redemptionIssuers\": [\n    null\n  ],\n  \"review\": {},\n  \"securityAnimation\": {},\n  \"textModulesData\": [\n    {\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"titleImage\": {},\n  \"wordMark\": {}\n}",
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Patch"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Patch"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Patch"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Patch"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Patch"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Patch"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Patch"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Patch"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "string",
			"default": "",
			"description": "Identifies what kind of resource this is. Value: the fixed string `\"walletobjects#offerObject\"`.",
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Patch"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Patch"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Patch"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Patch"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Patch"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Patch"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Patch"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Patch"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Patch"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Patch"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Patch"
					]
				}
			}
		},
		{
			"displayName": "PUT /walletobjects/v1/offerObject/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Update"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Update"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Update"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Update"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Update"
					]
				}
			}
		},
		{
			"displayName": "Class Reference",
			"name": "classReference",
			"type": "json",
			"default": "{\n  \"callbackOptions\": {},\n  \"classTemplateInfo\": {\n    \"cardBarcodeSectionDetails\": {\n      \"firstBottomDetail\": {\n        \"fieldSelector\": {\n          \"fields\": [\n            {}\n          ]\n        }\n      },\n      \"firstTopDetail\": {},\n      \"secondTopDetail\": {}\n    },\n    \"cardTemplateOverride\": {\n      \"cardRowTemplateInfos\": [\n        {\n          \"oneItem\": {\n            \"item\": {\n              \"firstValue\": {},\n              \"secondValue\": {}\n            }\n          },\n          \"threeItems\": {\n            \"endItem\": {},\n            \"middleItem\": {},\n            \"startItem\": {}\n          },\n          \"twoItems\": {\n            \"endItem\": {},\n            \"startItem\": {}\n          }\n        }\n      ]\n    },\n    \"detailsTemplateOverride\": {\n      \"detailsItemInfos\": [\n        {\n          \"item\": {}\n        }\n      ]\n    },\n    \"listTemplateOverride\": {\n      \"firstRowOption\": {\n        \"fieldOption\": {}\n      },\n      \"secondRowOption\": {},\n      \"thirdRowOption\": {}\n    }\n  },\n  \"helpUri\": {\n    \"localizedDescription\": {\n      \"defaultValue\": {},\n      \"translatedValues\": [\n        {}\n      ]\n    }\n  },\n  \"heroImage\": {\n    \"contentDescription\": {},\n    \"sourceUri\": {\n      \"localizedDescription\": {}\n    }\n  },\n  \"homepageUri\": {},\n  \"imageModulesData\": [\n    {\n      \"mainImage\": {}\n    }\n  ],\n  \"infoModuleData\": {\n    \"labelValueRows\": [\n      {\n        \"columns\": [\n          {\n            \"localizedLabel\": {},\n            \"localizedValue\": {}\n          }\n        ]\n      }\n    ]\n  },\n  \"linksModuleData\": {\n    \"uris\": [\n      {}\n    ]\n  },\n  \"localizedDetails\": {},\n  \"localizedFinePrint\": {},\n  \"localizedIssuerName\": {},\n  \"localizedProvider\": {},\n  \"localizedShortTitle\": {},\n  \"localizedTitle\": {},\n  \"locations\": [\n    {}\n  ],\n  \"messages\": [\n    {\n      \"displayInterval\": {\n        \"end\": {},\n        \"start\": {}\n      },\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"redemptionIssuers\": [\n    null\n  ],\n  \"review\": {},\n  \"securityAnimation\": {},\n  \"textModulesData\": [\n    {\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"titleImage\": {},\n  \"wordMark\": {}\n}",
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Update"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Update"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Update"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Update"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Update"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Update"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Update"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Update"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Update"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "string",
			"default": "",
			"description": "Identifies what kind of resource this is. Value: the fixed string `\"walletobjects#offerObject\"`.",
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Update"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Update"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Update"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Update"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Update"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Update"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Update"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Update"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Update"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Update"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Update"
					]
				}
			}
		},
		{
			"displayName": "POST /walletobjects/v1/offerObject/{resourceId}/addMessage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Addmessage"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Addmessage"
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
						"Offerobject"
					],
					"operation": [
						"Walletobjects Offerobject Addmessage"
					]
				}
			}
		},
];
