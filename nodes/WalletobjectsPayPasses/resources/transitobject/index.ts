import type { INodeProperties } from 'n8n-workflow';

export const transitobjectDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					]
				}
			},
			"options": [
				{
					"name": "Walletobjects Transitobject List",
					"value": "Walletobjects Transitobject List",
					"action": "Walletobjects Transitobject List",
					"description": "Returns a list of all transit objects for a given issuer ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/walletobjects/v1/transitObject"
						}
					}
				},
				{
					"name": "Walletobjects Transitobject Insert",
					"value": "Walletobjects Transitobject Insert",
					"action": "Walletobjects Transitobject Insert",
					"description": "Inserts an transit object with the given ID and properties.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/walletobjects/v1/transitObject"
						}
					}
				},
				{
					"name": "Walletobjects Transitobject Get",
					"value": "Walletobjects Transitobject Get",
					"action": "Walletobjects Transitobject Get",
					"description": "Returns the transit object with the given object ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/walletobjects/v1/transitObject/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Transitobject Patch",
					"value": "Walletobjects Transitobject Patch",
					"action": "Walletobjects Transitobject Patch",
					"description": "Updates the transit object referenced by the given object ID. This method supports patch semantics.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/walletobjects/v1/transitObject/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Transitobject Update",
					"value": "Walletobjects Transitobject Update",
					"action": "Walletobjects Transitobject Update",
					"description": "Updates the transit object referenced by the given object ID.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/walletobjects/v1/transitObject/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Transitobject Addmessage",
					"value": "Walletobjects Transitobject Addmessage",
					"action": "Walletobjects Transitobject Addmessage",
					"description": "Adds a message to the transit object referenced by the given object ID.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/walletobjects/v1/transitObject/{{$parameter[\"resourceId\"]}}/addMessage"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /walletobjects/v1/transitObject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject List"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject List"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject List"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject List"
					]
				}
			}
		},
		{
			"displayName": "POST /walletobjects/v1/transitObject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Activation Status",
			"name": "activationStatus",
			"type": "json",
			"default": "{}",
			"description": "The activation status of the object. This field includes activation status if valuable supports activation.",
			"routing": {
				"send": {
					"property": "activationStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Class Reference",
			"name": "classReference",
			"type": "json",
			"default": "{\n  \"activationOptions\": {},\n  \"callbackOptions\": {},\n  \"classTemplateInfo\": {\n    \"cardBarcodeSectionDetails\": {\n      \"firstBottomDetail\": {\n        \"fieldSelector\": {\n          \"fields\": [\n            {}\n          ]\n        }\n      },\n      \"firstTopDetail\": {},\n      \"secondTopDetail\": {}\n    },\n    \"cardTemplateOverride\": {\n      \"cardRowTemplateInfos\": [\n        {\n          \"oneItem\": {\n            \"item\": {\n              \"firstValue\": {},\n              \"secondValue\": {}\n            }\n          },\n          \"threeItems\": {\n            \"endItem\": {},\n            \"middleItem\": {},\n            \"startItem\": {}\n          },\n          \"twoItems\": {\n            \"endItem\": {},\n            \"startItem\": {}\n          }\n        }\n      ]\n    },\n    \"detailsTemplateOverride\": {\n      \"detailsItemInfos\": [\n        {\n          \"item\": {}\n        }\n      ]\n    },\n    \"listTemplateOverride\": {\n      \"firstRowOption\": {\n        \"fieldOption\": {}\n      },\n      \"secondRowOption\": {},\n      \"thirdRowOption\": {}\n    }\n  },\n  \"customCarriageLabel\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"customCoachLabel\": {},\n  \"customConcessionCategoryLabel\": {},\n  \"customConfirmationCodeLabel\": {},\n  \"customDiscountMessageLabel\": {},\n  \"customFareClassLabel\": {},\n  \"customFareNameLabel\": {},\n  \"customOtherRestrictionsLabel\": {},\n  \"customPlatformLabel\": {},\n  \"customPurchaseFaceValueLabel\": {},\n  \"customPurchasePriceLabel\": {},\n  \"customPurchaseReceiptNumberLabel\": {},\n  \"customRouteRestrictionsDetailsLabel\": {},\n  \"customRouteRestrictionsLabel\": {},\n  \"customSeatLabel\": {},\n  \"customTicketNumberLabel\": {},\n  \"customTimeRestrictionsLabel\": {},\n  \"customTransitTerminusNameLabel\": {},\n  \"customZoneLabel\": {},\n  \"heroImage\": {\n    \"contentDescription\": {},\n    \"sourceUri\": {\n      \"localizedDescription\": {}\n    }\n  },\n  \"homepageUri\": {\n    \"localizedDescription\": {}\n  },\n  \"imageModulesData\": [\n    {\n      \"mainImage\": {}\n    }\n  ],\n  \"infoModuleData\": {\n    \"labelValueRows\": [\n      {\n        \"columns\": [\n          {\n            \"localizedLabel\": {},\n            \"localizedValue\": {}\n          }\n        ]\n      }\n    ]\n  },\n  \"linksModuleData\": {\n    \"uris\": [\n      {}\n    ]\n  },\n  \"localizedIssuerName\": {},\n  \"locations\": [\n    {}\n  ],\n  \"logo\": {},\n  \"messages\": [\n    {\n      \"displayInterval\": {\n        \"end\": {},\n        \"start\": {}\n      },\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"redemptionIssuers\": [\n    null\n  ],\n  \"review\": {},\n  \"securityAnimation\": {},\n  \"textModulesData\": [\n    {\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"transitOperatorName\": {},\n  \"watermark\": {},\n  \"wordMark\": {}\n}",
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Concession Category",
			"name": "concessionCategory",
			"type": "options",
			"default": "CONCESSION_CATEGORY_UNSPECIFIED",
			"description": "The concession category for the ticket.",
			"options": [
				{
					"name": "CONCESSION CATEGORY UNSPECIFIED",
					"value": "CONCESSION_CATEGORY_UNSPECIFIED"
				},
				{
					"name": "ADULT",
					"value": "ADULT"
				},
				{
					"name": "Adult",
					"value": "adult"
				},
				{
					"name": "CHILD",
					"value": "CHILD"
				},
				{
					"name": "Child",
					"value": "child"
				},
				{
					"name": "SENIOR",
					"value": "SENIOR"
				},
				{
					"name": "Senior",
					"value": "senior"
				}
			],
			"routing": {
				"send": {
					"property": "concessionCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Concession Category",
			"name": "customConcessionCategory",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom concession category to use when `concessionCategory` does not provide the right option. Both `concessionCategory` and `customConcessionCategory` may not be set.",
			"routing": {
				"send": {
					"property": "customConcessionCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Ticket Status",
			"name": "customTicketStatus",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom status to use for the ticket status value when `ticketStatus` does not provide the right option. Both `ticketStatus` and `customTicketStatus` may not be set.",
			"routing": {
				"send": {
					"property": "customTicketStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Device Context",
			"name": "deviceContext",
			"type": "json",
			"default": "{}",
			"description": "Device context associated with the object.",
			"routing": {
				"send": {
					"property": "deviceContext",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Hex Background Color",
			"name": "hexBackgroundColor",
			"type": "string",
			"default": "",
			"description": "The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.",
			"routing": {
				"send": {
					"property": "hexBackgroundColor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Passenger Names",
			"name": "passengerNames",
			"type": "string",
			"default": "",
			"description": "The name(s) of the passengers the ticket is assigned to. The above `passengerType` field is meant to give Google context on this field.",
			"routing": {
				"send": {
					"property": "passengerNames",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Passenger Type",
			"name": "passengerType",
			"type": "options",
			"default": "PASSENGER_TYPE_UNSPECIFIED",
			"description": "The number of passengers.",
			"options": [
				{
					"name": "PASSENGER TYPE UNSPECIFIED",
					"value": "PASSENGER_TYPE_UNSPECIFIED"
				},
				{
					"name": "SINGLE PASSENGER",
					"value": "SINGLE_PASSENGER"
				},
				{
					"name": "Single Passenger",
					"value": "singlePassenger"
				},
				{
					"name": "MULTIPLE PASSENGERS",
					"value": "MULTIPLE_PASSENGERS"
				},
				{
					"name": "Multiple Passengers",
					"value": "multiplePassengers"
				}
			],
			"routing": {
				"send": {
					"property": "passengerType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Purchase Details",
			"name": "purchaseDetails",
			"type": "json",
			"default": "{\n  \"ticketCost\": {\n    \"discountMessage\": {\n      \"defaultValue\": {},\n      \"translatedValues\": [\n        {}\n      ]\n    },\n    \"faceValue\": {},\n    \"purchasePrice\": {}\n  }\n}",
			"description": "Purchase details for this ticket.",
			"routing": {
				"send": {
					"property": "purchaseDetails",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Ticket Leg",
			"name": "ticketLeg",
			"type": "json",
			"default": "{\n  \"destinationName\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"fareName\": {},\n  \"originName\": {},\n  \"ticketSeat\": {\n    \"customFareClass\": {},\n    \"seatAssignment\": {}\n  },\n  \"ticketSeats\": [\n    {}\n  ],\n  \"transitOperatorName\": {},\n  \"transitTerminusName\": {}\n}",
			"description": "A single ticket leg contains departure and arrival information along with boarding and seating information. If more than one leg is to be specified then use the `ticketLegs` field instead. Both `ticketLeg` and `ticketLegs` may not be set.",
			"routing": {
				"send": {
					"property": "ticketLeg",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Ticket Legs",
			"name": "ticketLegs",
			"type": "json",
			"default": "[\n  {\n    \"destinationName\": {\n      \"defaultValue\": {},\n      \"translatedValues\": [\n        {}\n      ]\n    },\n    \"fareName\": {},\n    \"originName\": {},\n    \"ticketSeat\": {\n      \"customFareClass\": {},\n      \"seatAssignment\": {}\n    },\n    \"ticketSeats\": [\n      {}\n    ],\n    \"transitOperatorName\": {},\n    \"transitTerminusName\": {}\n  }\n]",
			"description": "Each ticket may contain one or more legs. Each leg contains departure and arrival information along with boarding and seating information. If only one leg is to be specified then use the `ticketLeg` field instead. Both `ticketLeg` and `ticketLegs` may not be set.",
			"routing": {
				"send": {
					"property": "ticketLegs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Ticket Number",
			"name": "ticketNumber",
			"type": "string",
			"default": "",
			"description": "The number of the ticket. This is a unique identifier for the ticket in the transit operator's system.",
			"routing": {
				"send": {
					"property": "ticketNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Ticket Restrictions",
			"name": "ticketRestrictions",
			"type": "json",
			"default": "{\n  \"otherRestrictions\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"routeRestrictions\": {},\n  \"routeRestrictionsDetails\": {},\n  \"timeRestrictions\": {}\n}",
			"description": "Information about what kind of restrictions there are on using this ticket. For example, which days of the week it must be used, or which routes are allowed to be taken.",
			"routing": {
				"send": {
					"property": "ticketRestrictions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Ticket Status",
			"name": "ticketStatus",
			"type": "options",
			"default": "TICKET_STATUS_UNSPECIFIED",
			"description": "The status of the ticket. For states which affect display, use the `state` field instead.",
			"options": [
				{
					"name": "TICKET STATUS UNSPECIFIED",
					"value": "TICKET_STATUS_UNSPECIFIED"
				},
				{
					"name": "USED",
					"value": "USED"
				},
				{
					"name": "Used",
					"value": "used"
				},
				{
					"name": "REFUNDED",
					"value": "REFUNDED"
				},
				{
					"name": "Refunded",
					"value": "refunded"
				},
				{
					"name": "EXCHANGED",
					"value": "EXCHANGED"
				},
				{
					"name": "Exchanged",
					"value": "exchanged"
				}
			],
			"routing": {
				"send": {
					"property": "ticketStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Trip Id",
			"name": "tripId",
			"type": "string",
			"default": "",
			"description": "This id is used to group tickets together if the user has saved multiple tickets for the same trip.",
			"routing": {
				"send": {
					"property": "tripId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Trip Type",
			"name": "tripType",
			"type": "options",
			"default": "TRIP_TYPE_UNSPECIFIED",
			"description": "Required. The type of trip this transit object represents. Used to determine the pass title and/or which symbol to use between the origin and destination.",
			"options": [
				{
					"name": "TRIP TYPE UNSPECIFIED",
					"value": "TRIP_TYPE_UNSPECIFIED"
				},
				{
					"name": "ROUND TRIP",
					"value": "ROUND_TRIP"
				},
				{
					"name": "Round Trip",
					"value": "roundTrip"
				},
				{
					"name": "ONE WAY",
					"value": "ONE_WAY"
				},
				{
					"name": "One Way",
					"value": "oneWay"
				}
			],
			"routing": {
				"send": {
					"property": "tripType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Insert"
					]
				}
			}
		},
		{
			"displayName": "GET /walletobjects/v1/transitObject/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Get"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Get"
					]
				}
			}
		},
		{
			"displayName": "PATCH /walletobjects/v1/transitObject/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Activation Status",
			"name": "activationStatus",
			"type": "json",
			"default": "{}",
			"description": "The activation status of the object. This field includes activation status if valuable supports activation.",
			"routing": {
				"send": {
					"property": "activationStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Class Reference",
			"name": "classReference",
			"type": "json",
			"default": "{\n  \"activationOptions\": {},\n  \"callbackOptions\": {},\n  \"classTemplateInfo\": {\n    \"cardBarcodeSectionDetails\": {\n      \"firstBottomDetail\": {\n        \"fieldSelector\": {\n          \"fields\": [\n            {}\n          ]\n        }\n      },\n      \"firstTopDetail\": {},\n      \"secondTopDetail\": {}\n    },\n    \"cardTemplateOverride\": {\n      \"cardRowTemplateInfos\": [\n        {\n          \"oneItem\": {\n            \"item\": {\n              \"firstValue\": {},\n              \"secondValue\": {}\n            }\n          },\n          \"threeItems\": {\n            \"endItem\": {},\n            \"middleItem\": {},\n            \"startItem\": {}\n          },\n          \"twoItems\": {\n            \"endItem\": {},\n            \"startItem\": {}\n          }\n        }\n      ]\n    },\n    \"detailsTemplateOverride\": {\n      \"detailsItemInfos\": [\n        {\n          \"item\": {}\n        }\n      ]\n    },\n    \"listTemplateOverride\": {\n      \"firstRowOption\": {\n        \"fieldOption\": {}\n      },\n      \"secondRowOption\": {},\n      \"thirdRowOption\": {}\n    }\n  },\n  \"customCarriageLabel\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"customCoachLabel\": {},\n  \"customConcessionCategoryLabel\": {},\n  \"customConfirmationCodeLabel\": {},\n  \"customDiscountMessageLabel\": {},\n  \"customFareClassLabel\": {},\n  \"customFareNameLabel\": {},\n  \"customOtherRestrictionsLabel\": {},\n  \"customPlatformLabel\": {},\n  \"customPurchaseFaceValueLabel\": {},\n  \"customPurchasePriceLabel\": {},\n  \"customPurchaseReceiptNumberLabel\": {},\n  \"customRouteRestrictionsDetailsLabel\": {},\n  \"customRouteRestrictionsLabel\": {},\n  \"customSeatLabel\": {},\n  \"customTicketNumberLabel\": {},\n  \"customTimeRestrictionsLabel\": {},\n  \"customTransitTerminusNameLabel\": {},\n  \"customZoneLabel\": {},\n  \"heroImage\": {\n    \"contentDescription\": {},\n    \"sourceUri\": {\n      \"localizedDescription\": {}\n    }\n  },\n  \"homepageUri\": {\n    \"localizedDescription\": {}\n  },\n  \"imageModulesData\": [\n    {\n      \"mainImage\": {}\n    }\n  ],\n  \"infoModuleData\": {\n    \"labelValueRows\": [\n      {\n        \"columns\": [\n          {\n            \"localizedLabel\": {},\n            \"localizedValue\": {}\n          }\n        ]\n      }\n    ]\n  },\n  \"linksModuleData\": {\n    \"uris\": [\n      {}\n    ]\n  },\n  \"localizedIssuerName\": {},\n  \"locations\": [\n    {}\n  ],\n  \"logo\": {},\n  \"messages\": [\n    {\n      \"displayInterval\": {\n        \"end\": {},\n        \"start\": {}\n      },\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"redemptionIssuers\": [\n    null\n  ],\n  \"review\": {},\n  \"securityAnimation\": {},\n  \"textModulesData\": [\n    {\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"transitOperatorName\": {},\n  \"watermark\": {},\n  \"wordMark\": {}\n}",
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Concession Category",
			"name": "concessionCategory",
			"type": "options",
			"default": "CONCESSION_CATEGORY_UNSPECIFIED",
			"description": "The concession category for the ticket.",
			"options": [
				{
					"name": "CONCESSION CATEGORY UNSPECIFIED",
					"value": "CONCESSION_CATEGORY_UNSPECIFIED"
				},
				{
					"name": "ADULT",
					"value": "ADULT"
				},
				{
					"name": "Adult",
					"value": "adult"
				},
				{
					"name": "CHILD",
					"value": "CHILD"
				},
				{
					"name": "Child",
					"value": "child"
				},
				{
					"name": "SENIOR",
					"value": "SENIOR"
				},
				{
					"name": "Senior",
					"value": "senior"
				}
			],
			"routing": {
				"send": {
					"property": "concessionCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Concession Category",
			"name": "customConcessionCategory",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom concession category to use when `concessionCategory` does not provide the right option. Both `concessionCategory` and `customConcessionCategory` may not be set.",
			"routing": {
				"send": {
					"property": "customConcessionCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Ticket Status",
			"name": "customTicketStatus",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom status to use for the ticket status value when `ticketStatus` does not provide the right option. Both `ticketStatus` and `customTicketStatus` may not be set.",
			"routing": {
				"send": {
					"property": "customTicketStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Device Context",
			"name": "deviceContext",
			"type": "json",
			"default": "{}",
			"description": "Device context associated with the object.",
			"routing": {
				"send": {
					"property": "deviceContext",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Hex Background Color",
			"name": "hexBackgroundColor",
			"type": "string",
			"default": "",
			"description": "The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.",
			"routing": {
				"send": {
					"property": "hexBackgroundColor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Passenger Names",
			"name": "passengerNames",
			"type": "string",
			"default": "",
			"description": "The name(s) of the passengers the ticket is assigned to. The above `passengerType` field is meant to give Google context on this field.",
			"routing": {
				"send": {
					"property": "passengerNames",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Passenger Type",
			"name": "passengerType",
			"type": "options",
			"default": "PASSENGER_TYPE_UNSPECIFIED",
			"description": "The number of passengers.",
			"options": [
				{
					"name": "PASSENGER TYPE UNSPECIFIED",
					"value": "PASSENGER_TYPE_UNSPECIFIED"
				},
				{
					"name": "SINGLE PASSENGER",
					"value": "SINGLE_PASSENGER"
				},
				{
					"name": "Single Passenger",
					"value": "singlePassenger"
				},
				{
					"name": "MULTIPLE PASSENGERS",
					"value": "MULTIPLE_PASSENGERS"
				},
				{
					"name": "Multiple Passengers",
					"value": "multiplePassengers"
				}
			],
			"routing": {
				"send": {
					"property": "passengerType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Purchase Details",
			"name": "purchaseDetails",
			"type": "json",
			"default": "{\n  \"ticketCost\": {\n    \"discountMessage\": {\n      \"defaultValue\": {},\n      \"translatedValues\": [\n        {}\n      ]\n    },\n    \"faceValue\": {},\n    \"purchasePrice\": {}\n  }\n}",
			"description": "Purchase details for this ticket.",
			"routing": {
				"send": {
					"property": "purchaseDetails",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Ticket Leg",
			"name": "ticketLeg",
			"type": "json",
			"default": "{\n  \"destinationName\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"fareName\": {},\n  \"originName\": {},\n  \"ticketSeat\": {\n    \"customFareClass\": {},\n    \"seatAssignment\": {}\n  },\n  \"ticketSeats\": [\n    {}\n  ],\n  \"transitOperatorName\": {},\n  \"transitTerminusName\": {}\n}",
			"description": "A single ticket leg contains departure and arrival information along with boarding and seating information. If more than one leg is to be specified then use the `ticketLegs` field instead. Both `ticketLeg` and `ticketLegs` may not be set.",
			"routing": {
				"send": {
					"property": "ticketLeg",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Ticket Legs",
			"name": "ticketLegs",
			"type": "json",
			"default": "[\n  {\n    \"destinationName\": {\n      \"defaultValue\": {},\n      \"translatedValues\": [\n        {}\n      ]\n    },\n    \"fareName\": {},\n    \"originName\": {},\n    \"ticketSeat\": {\n      \"customFareClass\": {},\n      \"seatAssignment\": {}\n    },\n    \"ticketSeats\": [\n      {}\n    ],\n    \"transitOperatorName\": {},\n    \"transitTerminusName\": {}\n  }\n]",
			"description": "Each ticket may contain one or more legs. Each leg contains departure and arrival information along with boarding and seating information. If only one leg is to be specified then use the `ticketLeg` field instead. Both `ticketLeg` and `ticketLegs` may not be set.",
			"routing": {
				"send": {
					"property": "ticketLegs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Ticket Number",
			"name": "ticketNumber",
			"type": "string",
			"default": "",
			"description": "The number of the ticket. This is a unique identifier for the ticket in the transit operator's system.",
			"routing": {
				"send": {
					"property": "ticketNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Ticket Restrictions",
			"name": "ticketRestrictions",
			"type": "json",
			"default": "{\n  \"otherRestrictions\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"routeRestrictions\": {},\n  \"routeRestrictionsDetails\": {},\n  \"timeRestrictions\": {}\n}",
			"description": "Information about what kind of restrictions there are on using this ticket. For example, which days of the week it must be used, or which routes are allowed to be taken.",
			"routing": {
				"send": {
					"property": "ticketRestrictions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Ticket Status",
			"name": "ticketStatus",
			"type": "options",
			"default": "TICKET_STATUS_UNSPECIFIED",
			"description": "The status of the ticket. For states which affect display, use the `state` field instead.",
			"options": [
				{
					"name": "TICKET STATUS UNSPECIFIED",
					"value": "TICKET_STATUS_UNSPECIFIED"
				},
				{
					"name": "USED",
					"value": "USED"
				},
				{
					"name": "Used",
					"value": "used"
				},
				{
					"name": "REFUNDED",
					"value": "REFUNDED"
				},
				{
					"name": "Refunded",
					"value": "refunded"
				},
				{
					"name": "EXCHANGED",
					"value": "EXCHANGED"
				},
				{
					"name": "Exchanged",
					"value": "exchanged"
				}
			],
			"routing": {
				"send": {
					"property": "ticketStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Trip Id",
			"name": "tripId",
			"type": "string",
			"default": "",
			"description": "This id is used to group tickets together if the user has saved multiple tickets for the same trip.",
			"routing": {
				"send": {
					"property": "tripId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Trip Type",
			"name": "tripType",
			"type": "options",
			"default": "TRIP_TYPE_UNSPECIFIED",
			"description": "Required. The type of trip this transit object represents. Used to determine the pass title and/or which symbol to use between the origin and destination.",
			"options": [
				{
					"name": "TRIP TYPE UNSPECIFIED",
					"value": "TRIP_TYPE_UNSPECIFIED"
				},
				{
					"name": "ROUND TRIP",
					"value": "ROUND_TRIP"
				},
				{
					"name": "Round Trip",
					"value": "roundTrip"
				},
				{
					"name": "ONE WAY",
					"value": "ONE_WAY"
				},
				{
					"name": "One Way",
					"value": "oneWay"
				}
			],
			"routing": {
				"send": {
					"property": "tripType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Patch"
					]
				}
			}
		},
		{
			"displayName": "PUT /walletobjects/v1/transitObject/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
					]
				}
			}
		},
		{
			"displayName": "Activation Status",
			"name": "activationStatus",
			"type": "json",
			"default": "{}",
			"description": "The activation status of the object. This field includes activation status if valuable supports activation.",
			"routing": {
				"send": {
					"property": "activationStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
					]
				}
			}
		},
		{
			"displayName": "Class Reference",
			"name": "classReference",
			"type": "json",
			"default": "{\n  \"activationOptions\": {},\n  \"callbackOptions\": {},\n  \"classTemplateInfo\": {\n    \"cardBarcodeSectionDetails\": {\n      \"firstBottomDetail\": {\n        \"fieldSelector\": {\n          \"fields\": [\n            {}\n          ]\n        }\n      },\n      \"firstTopDetail\": {},\n      \"secondTopDetail\": {}\n    },\n    \"cardTemplateOverride\": {\n      \"cardRowTemplateInfos\": [\n        {\n          \"oneItem\": {\n            \"item\": {\n              \"firstValue\": {},\n              \"secondValue\": {}\n            }\n          },\n          \"threeItems\": {\n            \"endItem\": {},\n            \"middleItem\": {},\n            \"startItem\": {}\n          },\n          \"twoItems\": {\n            \"endItem\": {},\n            \"startItem\": {}\n          }\n        }\n      ]\n    },\n    \"detailsTemplateOverride\": {\n      \"detailsItemInfos\": [\n        {\n          \"item\": {}\n        }\n      ]\n    },\n    \"listTemplateOverride\": {\n      \"firstRowOption\": {\n        \"fieldOption\": {}\n      },\n      \"secondRowOption\": {},\n      \"thirdRowOption\": {}\n    }\n  },\n  \"customCarriageLabel\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"customCoachLabel\": {},\n  \"customConcessionCategoryLabel\": {},\n  \"customConfirmationCodeLabel\": {},\n  \"customDiscountMessageLabel\": {},\n  \"customFareClassLabel\": {},\n  \"customFareNameLabel\": {},\n  \"customOtherRestrictionsLabel\": {},\n  \"customPlatformLabel\": {},\n  \"customPurchaseFaceValueLabel\": {},\n  \"customPurchasePriceLabel\": {},\n  \"customPurchaseReceiptNumberLabel\": {},\n  \"customRouteRestrictionsDetailsLabel\": {},\n  \"customRouteRestrictionsLabel\": {},\n  \"customSeatLabel\": {},\n  \"customTicketNumberLabel\": {},\n  \"customTimeRestrictionsLabel\": {},\n  \"customTransitTerminusNameLabel\": {},\n  \"customZoneLabel\": {},\n  \"heroImage\": {\n    \"contentDescription\": {},\n    \"sourceUri\": {\n      \"localizedDescription\": {}\n    }\n  },\n  \"homepageUri\": {\n    \"localizedDescription\": {}\n  },\n  \"imageModulesData\": [\n    {\n      \"mainImage\": {}\n    }\n  ],\n  \"infoModuleData\": {\n    \"labelValueRows\": [\n      {\n        \"columns\": [\n          {\n            \"localizedLabel\": {},\n            \"localizedValue\": {}\n          }\n        ]\n      }\n    ]\n  },\n  \"linksModuleData\": {\n    \"uris\": [\n      {}\n    ]\n  },\n  \"localizedIssuerName\": {},\n  \"locations\": [\n    {}\n  ],\n  \"logo\": {},\n  \"messages\": [\n    {\n      \"displayInterval\": {\n        \"end\": {},\n        \"start\": {}\n      },\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"redemptionIssuers\": [\n    null\n  ],\n  \"review\": {},\n  \"securityAnimation\": {},\n  \"textModulesData\": [\n    {\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"transitOperatorName\": {},\n  \"watermark\": {},\n  \"wordMark\": {}\n}",
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
					]
				}
			}
		},
		{
			"displayName": "Concession Category",
			"name": "concessionCategory",
			"type": "options",
			"default": "CONCESSION_CATEGORY_UNSPECIFIED",
			"description": "The concession category for the ticket.",
			"options": [
				{
					"name": "CONCESSION CATEGORY UNSPECIFIED",
					"value": "CONCESSION_CATEGORY_UNSPECIFIED"
				},
				{
					"name": "ADULT",
					"value": "ADULT"
				},
				{
					"name": "Adult",
					"value": "adult"
				},
				{
					"name": "CHILD",
					"value": "CHILD"
				},
				{
					"name": "Child",
					"value": "child"
				},
				{
					"name": "SENIOR",
					"value": "SENIOR"
				},
				{
					"name": "Senior",
					"value": "senior"
				}
			],
			"routing": {
				"send": {
					"property": "concessionCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Concession Category",
			"name": "customConcessionCategory",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom concession category to use when `concessionCategory` does not provide the right option. Both `concessionCategory` and `customConcessionCategory` may not be set.",
			"routing": {
				"send": {
					"property": "customConcessionCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Ticket Status",
			"name": "customTicketStatus",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom status to use for the ticket status value when `ticketStatus` does not provide the right option. Both `ticketStatus` and `customTicketStatus` may not be set.",
			"routing": {
				"send": {
					"property": "customTicketStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
					]
				}
			}
		},
		{
			"displayName": "Device Context",
			"name": "deviceContext",
			"type": "json",
			"default": "{}",
			"description": "Device context associated with the object.",
			"routing": {
				"send": {
					"property": "deviceContext",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
					]
				}
			}
		},
		{
			"displayName": "Hex Background Color",
			"name": "hexBackgroundColor",
			"type": "string",
			"default": "",
			"description": "The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.",
			"routing": {
				"send": {
					"property": "hexBackgroundColor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
					]
				}
			}
		},
		{
			"displayName": "Passenger Names",
			"name": "passengerNames",
			"type": "string",
			"default": "",
			"description": "The name(s) of the passengers the ticket is assigned to. The above `passengerType` field is meant to give Google context on this field.",
			"routing": {
				"send": {
					"property": "passengerNames",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
					]
				}
			}
		},
		{
			"displayName": "Passenger Type",
			"name": "passengerType",
			"type": "options",
			"default": "PASSENGER_TYPE_UNSPECIFIED",
			"description": "The number of passengers.",
			"options": [
				{
					"name": "PASSENGER TYPE UNSPECIFIED",
					"value": "PASSENGER_TYPE_UNSPECIFIED"
				},
				{
					"name": "SINGLE PASSENGER",
					"value": "SINGLE_PASSENGER"
				},
				{
					"name": "Single Passenger",
					"value": "singlePassenger"
				},
				{
					"name": "MULTIPLE PASSENGERS",
					"value": "MULTIPLE_PASSENGERS"
				},
				{
					"name": "Multiple Passengers",
					"value": "multiplePassengers"
				}
			],
			"routing": {
				"send": {
					"property": "passengerType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
					]
				}
			}
		},
		{
			"displayName": "Purchase Details",
			"name": "purchaseDetails",
			"type": "json",
			"default": "{\n  \"ticketCost\": {\n    \"discountMessage\": {\n      \"defaultValue\": {},\n      \"translatedValues\": [\n        {}\n      ]\n    },\n    \"faceValue\": {},\n    \"purchasePrice\": {}\n  }\n}",
			"description": "Purchase details for this ticket.",
			"routing": {
				"send": {
					"property": "purchaseDetails",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
					]
				}
			}
		},
		{
			"displayName": "Ticket Leg",
			"name": "ticketLeg",
			"type": "json",
			"default": "{\n  \"destinationName\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"fareName\": {},\n  \"originName\": {},\n  \"ticketSeat\": {\n    \"customFareClass\": {},\n    \"seatAssignment\": {}\n  },\n  \"ticketSeats\": [\n    {}\n  ],\n  \"transitOperatorName\": {},\n  \"transitTerminusName\": {}\n}",
			"description": "A single ticket leg contains departure and arrival information along with boarding and seating information. If more than one leg is to be specified then use the `ticketLegs` field instead. Both `ticketLeg` and `ticketLegs` may not be set.",
			"routing": {
				"send": {
					"property": "ticketLeg",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
					]
				}
			}
		},
		{
			"displayName": "Ticket Legs",
			"name": "ticketLegs",
			"type": "json",
			"default": "[\n  {\n    \"destinationName\": {\n      \"defaultValue\": {},\n      \"translatedValues\": [\n        {}\n      ]\n    },\n    \"fareName\": {},\n    \"originName\": {},\n    \"ticketSeat\": {\n      \"customFareClass\": {},\n      \"seatAssignment\": {}\n    },\n    \"ticketSeats\": [\n      {}\n    ],\n    \"transitOperatorName\": {},\n    \"transitTerminusName\": {}\n  }\n]",
			"description": "Each ticket may contain one or more legs. Each leg contains departure and arrival information along with boarding and seating information. If only one leg is to be specified then use the `ticketLeg` field instead. Both `ticketLeg` and `ticketLegs` may not be set.",
			"routing": {
				"send": {
					"property": "ticketLegs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
					]
				}
			}
		},
		{
			"displayName": "Ticket Number",
			"name": "ticketNumber",
			"type": "string",
			"default": "",
			"description": "The number of the ticket. This is a unique identifier for the ticket in the transit operator's system.",
			"routing": {
				"send": {
					"property": "ticketNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
					]
				}
			}
		},
		{
			"displayName": "Ticket Restrictions",
			"name": "ticketRestrictions",
			"type": "json",
			"default": "{\n  \"otherRestrictions\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"routeRestrictions\": {},\n  \"routeRestrictionsDetails\": {},\n  \"timeRestrictions\": {}\n}",
			"description": "Information about what kind of restrictions there are on using this ticket. For example, which days of the week it must be used, or which routes are allowed to be taken.",
			"routing": {
				"send": {
					"property": "ticketRestrictions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
					]
				}
			}
		},
		{
			"displayName": "Ticket Status",
			"name": "ticketStatus",
			"type": "options",
			"default": "TICKET_STATUS_UNSPECIFIED",
			"description": "The status of the ticket. For states which affect display, use the `state` field instead.",
			"options": [
				{
					"name": "TICKET STATUS UNSPECIFIED",
					"value": "TICKET_STATUS_UNSPECIFIED"
				},
				{
					"name": "USED",
					"value": "USED"
				},
				{
					"name": "Used",
					"value": "used"
				},
				{
					"name": "REFUNDED",
					"value": "REFUNDED"
				},
				{
					"name": "Refunded",
					"value": "refunded"
				},
				{
					"name": "EXCHANGED",
					"value": "EXCHANGED"
				},
				{
					"name": "Exchanged",
					"value": "exchanged"
				}
			],
			"routing": {
				"send": {
					"property": "ticketStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
					]
				}
			}
		},
		{
			"displayName": "Trip Id",
			"name": "tripId",
			"type": "string",
			"default": "",
			"description": "This id is used to group tickets together if the user has saved multiple tickets for the same trip.",
			"routing": {
				"send": {
					"property": "tripId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
					]
				}
			}
		},
		{
			"displayName": "Trip Type",
			"name": "tripType",
			"type": "options",
			"default": "TRIP_TYPE_UNSPECIFIED",
			"description": "Required. The type of trip this transit object represents. Used to determine the pass title and/or which symbol to use between the origin and destination.",
			"options": [
				{
					"name": "TRIP TYPE UNSPECIFIED",
					"value": "TRIP_TYPE_UNSPECIFIED"
				},
				{
					"name": "ROUND TRIP",
					"value": "ROUND_TRIP"
				},
				{
					"name": "Round Trip",
					"value": "roundTrip"
				},
				{
					"name": "ONE WAY",
					"value": "ONE_WAY"
				},
				{
					"name": "One Way",
					"value": "oneWay"
				}
			],
			"routing": {
				"send": {
					"property": "tripType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Update"
					]
				}
			}
		},
		{
			"displayName": "POST /walletobjects/v1/transitObject/{resourceId}/addMessage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Addmessage"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Addmessage"
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
						"Transitobject"
					],
					"operation": [
						"Walletobjects Transitobject Addmessage"
					]
				}
			}
		},
];
