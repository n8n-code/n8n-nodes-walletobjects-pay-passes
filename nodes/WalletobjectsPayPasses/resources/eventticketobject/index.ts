import type { INodeProperties } from 'n8n-workflow';

export const eventticketobjectDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketobject"
					]
				}
			},
			"options": [
				{
					"name": "Walletobjects Eventticketobject List",
					"value": "Walletobjects Eventticketobject List",
					"action": "Walletobjects Eventticketobject List",
					"description": "Returns a list of all event ticket objects for a given issuer ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/walletobjects/v1/eventTicketObject"
						}
					}
				},
				{
					"name": "Walletobjects Eventticketobject Insert",
					"value": "Walletobjects Eventticketobject Insert",
					"action": "Walletobjects Eventticketobject Insert",
					"description": "Inserts an event ticket object with the given ID and properties.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/walletobjects/v1/eventTicketObject"
						}
					}
				},
				{
					"name": "Walletobjects Eventticketobject Get",
					"value": "Walletobjects Eventticketobject Get",
					"action": "Walletobjects Eventticketobject Get",
					"description": "Returns the event ticket object with the given object ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/walletobjects/v1/eventTicketObject/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Eventticketobject Patch",
					"value": "Walletobjects Eventticketobject Patch",
					"action": "Walletobjects Eventticketobject Patch",
					"description": "Updates the event ticket object referenced by the given object ID. This method supports patch semantics.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/walletobjects/v1/eventTicketObject/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Eventticketobject Update",
					"value": "Walletobjects Eventticketobject Update",
					"action": "Walletobjects Eventticketobject Update",
					"description": "Updates the event ticket object referenced by the given object ID.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/walletobjects/v1/eventTicketObject/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Eventticketobject Addmessage",
					"value": "Walletobjects Eventticketobject Addmessage",
					"action": "Walletobjects Eventticketobject Addmessage",
					"description": "Adds a message to the event ticket object referenced by the given object ID.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/walletobjects/v1/eventTicketObject/{{$parameter[\"resourceId\"]}}/addMessage"
						}
					}
				},
				{
					"name": "Walletobjects Eventticketobject Modifylinkedofferobjects",
					"value": "Walletobjects Eventticketobject Modifylinkedofferobjects",
					"action": "Walletobjects Eventticketobject Modifylinkedofferobjects",
					"description": "Modifies linked offer objects for the event ticket object with the given ID.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/walletobjects/v1/eventTicketObject/{{$parameter[\"resourceId\"]}}/modifyLinkedOfferObjects"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /walletobjects/v1/eventTicketObject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject List"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject List"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject List"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject List"
					]
				}
			}
		},
		{
			"displayName": "POST /walletobjects/v1/eventTicketObject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Class Reference",
			"name": "classReference",
			"type": "json",
			"default": "{\n  \"callbackOptions\": {},\n  \"classTemplateInfo\": {\n    \"cardBarcodeSectionDetails\": {\n      \"firstBottomDetail\": {\n        \"fieldSelector\": {\n          \"fields\": [\n            {}\n          ]\n        }\n      },\n      \"firstTopDetail\": {},\n      \"secondTopDetail\": {}\n    },\n    \"cardTemplateOverride\": {\n      \"cardRowTemplateInfos\": [\n        {\n          \"oneItem\": {\n            \"item\": {\n              \"firstValue\": {},\n              \"secondValue\": {}\n            }\n          },\n          \"threeItems\": {\n            \"endItem\": {},\n            \"middleItem\": {},\n            \"startItem\": {}\n          },\n          \"twoItems\": {\n            \"endItem\": {},\n            \"startItem\": {}\n          }\n        }\n      ]\n    },\n    \"detailsTemplateOverride\": {\n      \"detailsItemInfos\": [\n        {\n          \"item\": {}\n        }\n      ]\n    },\n    \"listTemplateOverride\": {\n      \"firstRowOption\": {\n        \"fieldOption\": {}\n      },\n      \"secondRowOption\": {},\n      \"thirdRowOption\": {}\n    }\n  },\n  \"customConfirmationCodeLabel\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"customGateLabel\": {},\n  \"customRowLabel\": {},\n  \"customSeatLabel\": {},\n  \"customSectionLabel\": {},\n  \"dateTime\": {\n    \"customDoorsOpenLabel\": {}\n  },\n  \"eventName\": {},\n  \"finePrint\": {},\n  \"heroImage\": {\n    \"contentDescription\": {},\n    \"sourceUri\": {\n      \"localizedDescription\": {}\n    }\n  },\n  \"homepageUri\": {\n    \"localizedDescription\": {}\n  },\n  \"imageModulesData\": [\n    {\n      \"mainImage\": {}\n    }\n  ],\n  \"infoModuleData\": {\n    \"labelValueRows\": [\n      {\n        \"columns\": [\n          {\n            \"localizedLabel\": {},\n            \"localizedValue\": {}\n          }\n        ]\n      }\n    ]\n  },\n  \"linksModuleData\": {\n    \"uris\": [\n      {}\n    ]\n  },\n  \"localizedIssuerName\": {},\n  \"locations\": [\n    {}\n  ],\n  \"logo\": {},\n  \"messages\": [\n    {\n      \"displayInterval\": {\n        \"end\": {},\n        \"start\": {}\n      },\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"redemptionIssuers\": [\n    null\n  ],\n  \"review\": {},\n  \"securityAnimation\": {},\n  \"textModulesData\": [\n    {\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"venue\": {\n    \"address\": {},\n    \"name\": {}\n  },\n  \"wordMark\": {}\n}",
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Face Value",
			"name": "faceValue",
			"type": "json",
			"default": "{}",
			"description": "The face value of the ticket, matching what would be printed on a physical version of the ticket.",
			"routing": {
				"send": {
					"property": "faceValue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "string",
			"default": "",
			"description": "Identifies what kind of resource this is. Value: the fixed string `\"walletobjects#eventTicketObject\"`.",
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Linked Offer Ids",
			"name": "linkedOfferIds",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of offer objects linked to this event ticket. The offer objects must already exist. Offer object IDs should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you.",
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Reservation Info",
			"name": "reservationInfo",
			"type": "json",
			"default": "{}",
			"description": "Reservation details for this ticket. This is expected to be shared amongst all tickets that were purchased in the same order.",
			"routing": {
				"send": {
					"property": "reservationInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Seat Info",
			"name": "seatInfo",
			"type": "json",
			"default": "{\n  \"gate\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"row\": {},\n  \"seat\": {},\n  \"section\": {}\n}",
			"description": "Seating details for this ticket.",
			"routing": {
				"send": {
					"property": "seatInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Ticket Holder Name",
			"name": "ticketHolderName",
			"type": "string",
			"default": "",
			"description": "Name of the ticket holder, if the ticket is assigned to a person. E.g. \"John Doe\" or \"Jane Doe\".",
			"routing": {
				"send": {
					"property": "ticketHolderName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Ticket Number",
			"name": "ticketNumber",
			"type": "string",
			"default": "",
			"description": "The number of the ticket. This can be a unique identifier across all tickets in an issuer's system, all tickets for the event (e.g. XYZ1234512345), or all tickets in the order (1, 2, 3, etc.).",
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Ticket Type",
			"name": "ticketType",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "The type of the ticket, such as \"Adult\" or \"Child\", or \"VIP\" or \"Standard\".",
			"routing": {
				"send": {
					"property": "ticketType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Insert"
					]
				}
			}
		},
		{
			"displayName": "GET /walletobjects/v1/eventTicketObject/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Get"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Get"
					]
				}
			}
		},
		{
			"displayName": "PATCH /walletobjects/v1/eventTicketObject/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Class Reference",
			"name": "classReference",
			"type": "json",
			"default": "{\n  \"callbackOptions\": {},\n  \"classTemplateInfo\": {\n    \"cardBarcodeSectionDetails\": {\n      \"firstBottomDetail\": {\n        \"fieldSelector\": {\n          \"fields\": [\n            {}\n          ]\n        }\n      },\n      \"firstTopDetail\": {},\n      \"secondTopDetail\": {}\n    },\n    \"cardTemplateOverride\": {\n      \"cardRowTemplateInfos\": [\n        {\n          \"oneItem\": {\n            \"item\": {\n              \"firstValue\": {},\n              \"secondValue\": {}\n            }\n          },\n          \"threeItems\": {\n            \"endItem\": {},\n            \"middleItem\": {},\n            \"startItem\": {}\n          },\n          \"twoItems\": {\n            \"endItem\": {},\n            \"startItem\": {}\n          }\n        }\n      ]\n    },\n    \"detailsTemplateOverride\": {\n      \"detailsItemInfos\": [\n        {\n          \"item\": {}\n        }\n      ]\n    },\n    \"listTemplateOverride\": {\n      \"firstRowOption\": {\n        \"fieldOption\": {}\n      },\n      \"secondRowOption\": {},\n      \"thirdRowOption\": {}\n    }\n  },\n  \"customConfirmationCodeLabel\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"customGateLabel\": {},\n  \"customRowLabel\": {},\n  \"customSeatLabel\": {},\n  \"customSectionLabel\": {},\n  \"dateTime\": {\n    \"customDoorsOpenLabel\": {}\n  },\n  \"eventName\": {},\n  \"finePrint\": {},\n  \"heroImage\": {\n    \"contentDescription\": {},\n    \"sourceUri\": {\n      \"localizedDescription\": {}\n    }\n  },\n  \"homepageUri\": {\n    \"localizedDescription\": {}\n  },\n  \"imageModulesData\": [\n    {\n      \"mainImage\": {}\n    }\n  ],\n  \"infoModuleData\": {\n    \"labelValueRows\": [\n      {\n        \"columns\": [\n          {\n            \"localizedLabel\": {},\n            \"localizedValue\": {}\n          }\n        ]\n      }\n    ]\n  },\n  \"linksModuleData\": {\n    \"uris\": [\n      {}\n    ]\n  },\n  \"localizedIssuerName\": {},\n  \"locations\": [\n    {}\n  ],\n  \"logo\": {},\n  \"messages\": [\n    {\n      \"displayInterval\": {\n        \"end\": {},\n        \"start\": {}\n      },\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"redemptionIssuers\": [\n    null\n  ],\n  \"review\": {},\n  \"securityAnimation\": {},\n  \"textModulesData\": [\n    {\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"venue\": {\n    \"address\": {},\n    \"name\": {}\n  },\n  \"wordMark\": {}\n}",
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Face Value",
			"name": "faceValue",
			"type": "json",
			"default": "{}",
			"description": "The face value of the ticket, matching what would be printed on a physical version of the ticket.",
			"routing": {
				"send": {
					"property": "faceValue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "string",
			"default": "",
			"description": "Identifies what kind of resource this is. Value: the fixed string `\"walletobjects#eventTicketObject\"`.",
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Linked Offer Ids",
			"name": "linkedOfferIds",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of offer objects linked to this event ticket. The offer objects must already exist. Offer object IDs should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you.",
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Reservation Info",
			"name": "reservationInfo",
			"type": "json",
			"default": "{}",
			"description": "Reservation details for this ticket. This is expected to be shared amongst all tickets that were purchased in the same order.",
			"routing": {
				"send": {
					"property": "reservationInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Seat Info",
			"name": "seatInfo",
			"type": "json",
			"default": "{\n  \"gate\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"row\": {},\n  \"seat\": {},\n  \"section\": {}\n}",
			"description": "Seating details for this ticket.",
			"routing": {
				"send": {
					"property": "seatInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Ticket Holder Name",
			"name": "ticketHolderName",
			"type": "string",
			"default": "",
			"description": "Name of the ticket holder, if the ticket is assigned to a person. E.g. \"John Doe\" or \"Jane Doe\".",
			"routing": {
				"send": {
					"property": "ticketHolderName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Ticket Number",
			"name": "ticketNumber",
			"type": "string",
			"default": "",
			"description": "The number of the ticket. This can be a unique identifier across all tickets in an issuer's system, all tickets for the event (e.g. XYZ1234512345), or all tickets in the order (1, 2, 3, etc.).",
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Ticket Type",
			"name": "ticketType",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "The type of the ticket, such as \"Adult\" or \"Child\", or \"VIP\" or \"Standard\".",
			"routing": {
				"send": {
					"property": "ticketType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Patch"
					]
				}
			}
		},
		{
			"displayName": "PUT /walletobjects/v1/eventTicketObject/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
					]
				}
			}
		},
		{
			"displayName": "Class Reference",
			"name": "classReference",
			"type": "json",
			"default": "{\n  \"callbackOptions\": {},\n  \"classTemplateInfo\": {\n    \"cardBarcodeSectionDetails\": {\n      \"firstBottomDetail\": {\n        \"fieldSelector\": {\n          \"fields\": [\n            {}\n          ]\n        }\n      },\n      \"firstTopDetail\": {},\n      \"secondTopDetail\": {}\n    },\n    \"cardTemplateOverride\": {\n      \"cardRowTemplateInfos\": [\n        {\n          \"oneItem\": {\n            \"item\": {\n              \"firstValue\": {},\n              \"secondValue\": {}\n            }\n          },\n          \"threeItems\": {\n            \"endItem\": {},\n            \"middleItem\": {},\n            \"startItem\": {}\n          },\n          \"twoItems\": {\n            \"endItem\": {},\n            \"startItem\": {}\n          }\n        }\n      ]\n    },\n    \"detailsTemplateOverride\": {\n      \"detailsItemInfos\": [\n        {\n          \"item\": {}\n        }\n      ]\n    },\n    \"listTemplateOverride\": {\n      \"firstRowOption\": {\n        \"fieldOption\": {}\n      },\n      \"secondRowOption\": {},\n      \"thirdRowOption\": {}\n    }\n  },\n  \"customConfirmationCodeLabel\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"customGateLabel\": {},\n  \"customRowLabel\": {},\n  \"customSeatLabel\": {},\n  \"customSectionLabel\": {},\n  \"dateTime\": {\n    \"customDoorsOpenLabel\": {}\n  },\n  \"eventName\": {},\n  \"finePrint\": {},\n  \"heroImage\": {\n    \"contentDescription\": {},\n    \"sourceUri\": {\n      \"localizedDescription\": {}\n    }\n  },\n  \"homepageUri\": {\n    \"localizedDescription\": {}\n  },\n  \"imageModulesData\": [\n    {\n      \"mainImage\": {}\n    }\n  ],\n  \"infoModuleData\": {\n    \"labelValueRows\": [\n      {\n        \"columns\": [\n          {\n            \"localizedLabel\": {},\n            \"localizedValue\": {}\n          }\n        ]\n      }\n    ]\n  },\n  \"linksModuleData\": {\n    \"uris\": [\n      {}\n    ]\n  },\n  \"localizedIssuerName\": {},\n  \"locations\": [\n    {}\n  ],\n  \"logo\": {},\n  \"messages\": [\n    {\n      \"displayInterval\": {\n        \"end\": {},\n        \"start\": {}\n      },\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"redemptionIssuers\": [\n    null\n  ],\n  \"review\": {},\n  \"securityAnimation\": {},\n  \"textModulesData\": [\n    {\n      \"localizedBody\": {},\n      \"localizedHeader\": {}\n    }\n  ],\n  \"venue\": {\n    \"address\": {},\n    \"name\": {}\n  },\n  \"wordMark\": {}\n}",
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
					]
				}
			}
		},
		{
			"displayName": "Face Value",
			"name": "faceValue",
			"type": "json",
			"default": "{}",
			"description": "The face value of the ticket, matching what would be printed on a physical version of the ticket.",
			"routing": {
				"send": {
					"property": "faceValue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "string",
			"default": "",
			"description": "Identifies what kind of resource this is. Value: the fixed string `\"walletobjects#eventTicketObject\"`.",
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
					]
				}
			}
		},
		{
			"displayName": "Linked Offer Ids",
			"name": "linkedOfferIds",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of offer objects linked to this event ticket. The offer objects must already exist. Offer object IDs should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you.",
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
					]
				}
			}
		},
		{
			"displayName": "Reservation Info",
			"name": "reservationInfo",
			"type": "json",
			"default": "{}",
			"description": "Reservation details for this ticket. This is expected to be shared amongst all tickets that were purchased in the same order.",
			"routing": {
				"send": {
					"property": "reservationInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
					]
				}
			}
		},
		{
			"displayName": "Seat Info",
			"name": "seatInfo",
			"type": "json",
			"default": "{\n  \"gate\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"row\": {},\n  \"seat\": {},\n  \"section\": {}\n}",
			"description": "Seating details for this ticket.",
			"routing": {
				"send": {
					"property": "seatInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
					]
				}
			}
		},
		{
			"displayName": "Ticket Holder Name",
			"name": "ticketHolderName",
			"type": "string",
			"default": "",
			"description": "Name of the ticket holder, if the ticket is assigned to a person. E.g. \"John Doe\" or \"Jane Doe\".",
			"routing": {
				"send": {
					"property": "ticketHolderName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
					]
				}
			}
		},
		{
			"displayName": "Ticket Number",
			"name": "ticketNumber",
			"type": "string",
			"default": "",
			"description": "The number of the ticket. This can be a unique identifier across all tickets in an issuer's system, all tickets for the event (e.g. XYZ1234512345), or all tickets in the order (1, 2, 3, etc.).",
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
					]
				}
			}
		},
		{
			"displayName": "Ticket Type",
			"name": "ticketType",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "The type of the ticket, such as \"Adult\" or \"Child\", or \"VIP\" or \"Standard\".",
			"routing": {
				"send": {
					"property": "ticketType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Update"
					]
				}
			}
		},
		{
			"displayName": "POST /walletobjects/v1/eventTicketObject/{resourceId}/addMessage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Addmessage"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Addmessage"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Addmessage"
					]
				}
			}
		},
		{
			"displayName": "POST /walletobjects/v1/eventTicketObject/{resourceId}/modifyLinkedOfferObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Modifylinkedofferobjects"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Modifylinkedofferobjects"
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
						"Eventticketobject"
					],
					"operation": [
						"Walletobjects Eventticketobject Modifylinkedofferobjects"
					]
				}
			}
		},
];
