import type { INodeProperties } from 'n8n-workflow';

export const eventticketclassDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					]
				}
			},
			"options": [
				{
					"name": "Walletobjects Eventticketclass List",
					"value": "Walletobjects Eventticketclass List",
					"action": "Walletobjects Eventticketclass List",
					"description": "Returns a list of all event ticket classes for a given issuer ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/walletobjects/v1/eventTicketClass"
						}
					}
				},
				{
					"name": "Walletobjects Eventticketclass Insert",
					"value": "Walletobjects Eventticketclass Insert",
					"action": "Walletobjects Eventticketclass Insert",
					"description": "Inserts an event ticket class with the given ID and properties.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/walletobjects/v1/eventTicketClass"
						}
					}
				},
				{
					"name": "Walletobjects Eventticketclass Get",
					"value": "Walletobjects Eventticketclass Get",
					"action": "Walletobjects Eventticketclass Get",
					"description": "Returns the event ticket class with the given class ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/walletobjects/v1/eventTicketClass/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Eventticketclass Patch",
					"value": "Walletobjects Eventticketclass Patch",
					"action": "Walletobjects Eventticketclass Patch",
					"description": "Updates the event ticket class referenced by the given class ID. This method supports patch semantics.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/walletobjects/v1/eventTicketClass/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Eventticketclass Update",
					"value": "Walletobjects Eventticketclass Update",
					"action": "Walletobjects Eventticketclass Update",
					"description": "Updates the event ticket class referenced by the given class ID.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/walletobjects/v1/eventTicketClass/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Eventticketclass Addmessage",
					"value": "Walletobjects Eventticketclass Addmessage",
					"action": "Walletobjects Eventticketclass Addmessage",
					"description": "Adds a message to the event ticket class referenced by the given class ID.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/walletobjects/v1/eventTicketClass/{{$parameter[\"resourceId\"]}}/addMessage"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /walletobjects/v1/eventTicketClass",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass List"
					]
				}
			}
		},
		{
			"displayName": "Issuer Id",
			"name": "issuerId",
			"description": "The ID of the issuer authorized to list classes.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "issuerId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass List"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass List"
					]
				}
			}
		},
		{
			"displayName": "Token",
			"name": "token",
			"description": "Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.",
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass List"
					]
				}
			}
		},
		{
			"displayName": "POST /walletobjects/v1/eventTicketClass",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Allow Multiple Users Per Object",
			"name": "allowMultipleUsersPerObject",
			"type": "boolean",
			"default": true,
			"description": "Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead.",
			"routing": {
				"send": {
					"property": "allowMultipleUsersPerObject",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Callback Options",
			"name": "callbackOptions",
			"type": "json",
			"default": "{}",
			"description": "Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback.",
			"routing": {
				"send": {
					"property": "callbackOptions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Class Template Info",
			"name": "classTemplateInfo",
			"type": "json",
			"default": "{\n  \"cardBarcodeSectionDetails\": {\n    \"firstBottomDetail\": {\n      \"fieldSelector\": {\n        \"fields\": [\n          {}\n        ]\n      }\n    },\n    \"firstTopDetail\": {},\n    \"secondTopDetail\": {}\n  },\n  \"cardTemplateOverride\": {\n    \"cardRowTemplateInfos\": [\n      {\n        \"oneItem\": {\n          \"item\": {\n            \"firstValue\": {},\n            \"secondValue\": {}\n          }\n        },\n        \"threeItems\": {\n          \"endItem\": {},\n          \"middleItem\": {},\n          \"startItem\": {}\n        },\n        \"twoItems\": {\n          \"endItem\": {},\n          \"startItem\": {}\n        }\n      }\n    ]\n  },\n  \"detailsTemplateOverride\": {\n    \"detailsItemInfos\": [\n      {\n        \"item\": {}\n      }\n    ]\n  },\n  \"listTemplateOverride\": {\n    \"firstRowOption\": {\n      \"fieldOption\": {}\n    },\n    \"secondRowOption\": {},\n    \"thirdRowOption\": {}\n  }\n}",
			"description": "Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display.",
			"routing": {
				"send": {
					"property": "classTemplateInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Confirmation Code Label",
			"name": "confirmationCodeLabel",
			"type": "options",
			"default": "CONFIRMATION_CODE_LABEL_UNSPECIFIED",
			"description": "The label to use for the confirmation code value (`eventTicketObject.reservationInfo.confirmationCode`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `confirmationCodeLabel` and `customConfirmationCodeLabel` may not be set. If neither is set, the label will default to \"Confirmation Code\", localized. If the confirmation code field is unset, this label will not be used.",
			"options": [
				{
					"name": "CONFIRMATION CODE LABEL UNSPECIFIED",
					"value": "CONFIRMATION_CODE_LABEL_UNSPECIFIED"
				},
				{
					"name": "CONFIRMATION CODE",
					"value": "CONFIRMATION_CODE"
				},
				{
					"name": "Confirmation Code",
					"value": "confirmationCode"
				},
				{
					"name": "CONFIRMATION NUMBER",
					"value": "CONFIRMATION_NUMBER"
				},
				{
					"name": "Confirmation Number",
					"value": "confirmationNumber"
				},
				{
					"name": "ORDER NUMBER",
					"value": "ORDER_NUMBER"
				},
				{
					"name": "Order Number",
					"value": "orderNumber"
				},
				{
					"name": "RESERVATION NUMBER",
					"value": "RESERVATION_NUMBER"
				},
				{
					"name": "Reservation Number",
					"value": "reservationNumber"
				}
			],
			"routing": {
				"send": {
					"property": "confirmationCodeLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Country Code",
			"name": "countryCode",
			"type": "string",
			"default": "",
			"description": "Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale.",
			"routing": {
				"send": {
					"property": "countryCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Confirmation Code Label",
			"name": "customConfirmationCodeLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the confirmation code value (`eventTicketObject.reservationInfo.confirmationCode`) on the card detail view. This should only be used if the default \"Confirmation Code\" label or one of the `confirmationCodeLabel` options is not sufficient. Both `confirmationCodeLabel` and `customConfirmationCodeLabel` may not be set. If neither is set, the label will default to \"Confirmation Code\", localized. If the confirmation code field is unset, this label will not be used.",
			"routing": {
				"send": {
					"property": "customConfirmationCodeLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Gate Label",
			"name": "customGateLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the gate value (`eventTicketObject.seatInfo.gate`) on the card detail view. This should only be used if the default \"Gate\" label or one of the `gateLabel` options is not sufficient. Both `gateLabel` and `customGateLabel` may not be set. If neither is set, the label will default to \"Gate\", localized. If the gate field is unset, this label will not be used.",
			"routing": {
				"send": {
					"property": "customGateLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Row Label",
			"name": "customRowLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the row value (`eventTicketObject.seatInfo.row`) on the card detail view. This should only be used if the default \"Row\" label or one of the `rowLabel` options is not sufficient. Both `rowLabel` and `customRowLabel` may not be set. If neither is set, the label will default to \"Row\", localized. If the row field is unset, this label will not be used.",
			"routing": {
				"send": {
					"property": "customRowLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Seat Label",
			"name": "customSeatLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the seat value (`eventTicketObject.seatInfo.seat`) on the card detail view. This should only be used if the default \"Seat\" label or one of the `seatLabel` options is not sufficient. Both `seatLabel` and `customSeatLabel` may not be set. If neither is set, the label will default to \"Seat\", localized. If the seat field is unset, this label will not be used.",
			"routing": {
				"send": {
					"property": "customSeatLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Section Label",
			"name": "customSectionLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the section value (`eventTicketObject.seatInfo.section`) on the card detail view. This should only be used if the default \"Section\" label or one of the `sectionLabel` options is not sufficient. Both `sectionLabel` and `customSectionLabel` may not be set. If neither is set, the label will default to \"Section\", localized. If the section field is unset, this label will not be used.",
			"routing": {
				"send": {
					"property": "customSectionLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Date Time",
			"name": "dateTime",
			"type": "json",
			"default": "{\n  \"customDoorsOpenLabel\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  }\n}",
			"description": "The date & time information of the event.",
			"routing": {
				"send": {
					"property": "dateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Enable Smart Tap",
			"name": "enableSmartTap",
			"type": "boolean",
			"default": true,
			"description": "Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.",
			"routing": {
				"send": {
					"property": "enableSmartTap",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Event Id",
			"name": "eventId",
			"type": "string",
			"default": "",
			"description": "The ID of the event. This ID should be unique for every event in an account. It is used to group tickets together if the user has saved multiple tickets for the same event. It can be at most 64 characters. If provided, the grouping will be stable. Be wary of unintentional collision to avoid grouping tickets that should not be grouped. If you use only one class per event, you can simply set this to the `classId` (with or without the issuer ID portion). If not provided, the platform will attempt to use other data to group tickets (potentially unstable).",
			"routing": {
				"send": {
					"property": "eventId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Event Name",
			"name": "eventName",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Required. The name of the event, such as \"LA Dodgers at SF Giants\".",
			"routing": {
				"send": {
					"property": "eventName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Fine Print",
			"name": "finePrint",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "The fine print, terms, or conditions of the ticket.",
			"routing": {
				"send": {
					"property": "finePrint",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Gate Label",
			"name": "gateLabel",
			"type": "options",
			"default": "GATE_LABEL_UNSPECIFIED",
			"description": "The label to use for the gate value (`eventTicketObject.seatInfo.gate`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `gateLabel` and `customGateLabel` may not be set. If neither is set, the label will default to \"Gate\", localized. If the gate field is unset, this label will not be used.",
			"options": [
				{
					"name": "GATE LABEL UNSPECIFIED",
					"value": "GATE_LABEL_UNSPECIFIED"
				},
				{
					"name": "GATE",
					"value": "GATE"
				},
				{
					"name": "Gate",
					"value": "gate"
				},
				{
					"name": "DOOR",
					"value": "DOOR"
				},
				{
					"name": "Door",
					"value": "door"
				},
				{
					"name": "ENTRANCE",
					"value": "ENTRANCE"
				},
				{
					"name": "Entrance",
					"value": "entrance"
				}
			],
			"routing": {
				"send": {
					"property": "gateLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Homepage Uri",
			"name": "homepageUri",
			"type": "json",
			"default": "{\n  \"localizedDescription\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  }\n}",
			"description": "The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object).",
			"routing": {
				"send": {
					"property": "homepageUri",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Issuer Name",
			"name": "issuerName",
			"type": "string",
			"default": "",
			"description": "Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "issuerName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "string",
			"default": "",
			"description": "Identifies what kind of resource this is. Value: the fixed string `\"walletobjects#eventTicketClass\"`.",
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Links Module Data",
			"name": "linksModuleData",
			"type": "json",
			"default": "{\n  \"uris\": [\n    {\n      \"localizedDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      }\n    }\n  ]\n}",
			"description": "Links module data. If links module data is also defined on the object, both will be displayed.",
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Localized Issuer Name",
			"name": "localizedIssuerName",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "localizedIssuerName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Logo",
			"name": "logo",
			"type": "json",
			"default": "{\n  \"contentDescription\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"sourceUri\": {\n    \"localizedDescription\": {}\n  }\n}",
			"description": "Wrapping type for Google hosted images. Next ID: 7",
			"routing": {
				"send": {
					"property": "logo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Multiple Devices And Holders Allowed Status",
			"name": "multipleDevicesAndHoldersAllowedStatus",
			"type": "options",
			"default": "STATUS_UNSPECIFIED",
			"description": "Identifies whether multiple users and devices will save the same object referencing this class.",
			"options": [
				{
					"name": "STATUS UNSPECIFIED",
					"value": "STATUS_UNSPECIFIED"
				},
				{
					"name": "MULTIPLE HOLDERS",
					"value": "MULTIPLE_HOLDERS"
				},
				{
					"name": "Multiple Holders",
					"value": "multipleHolders"
				},
				{
					"name": "ONE USER ALL DEVICES",
					"value": "ONE_USER_ALL_DEVICES"
				},
				{
					"name": "One User All Devices",
					"value": "oneUserAllDevices"
				},
				{
					"name": "ONE USER ONE DEVICE",
					"value": "ONE_USER_ONE_DEVICE"
				},
				{
					"name": "One User One Device",
					"value": "oneUserOneDevice"
				}
			],
			"routing": {
				"send": {
					"property": "multipleDevicesAndHoldersAllowedStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Redemption Issuers",
			"name": "redemptionIssuers",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.",
			"routing": {
				"send": {
					"property": "redemptionIssuers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Review",
			"name": "review",
			"type": "json",
			"default": "{}",
			"description": "The review comments set by the platform when a class is marked `approved` or `rejected`.",
			"routing": {
				"send": {
					"property": "review",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Review Status",
			"name": "reviewStatus",
			"type": "options",
			"default": "REVIEW_STATUS_UNSPECIFIED",
			"description": "Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`.",
			"options": [
				{
					"name": "REVIEW STATUS UNSPECIFIED",
					"value": "REVIEW_STATUS_UNSPECIFIED"
				},
				{
					"name": "UNDER REVIEW",
					"value": "UNDER_REVIEW"
				},
				{
					"name": "Under Review",
					"value": "underReview"
				},
				{
					"name": "APPROVED",
					"value": "APPROVED"
				},
				{
					"name": "Approved",
					"value": "approved"
				},
				{
					"name": "REJECTED",
					"value": "REJECTED"
				},
				{
					"name": "Rejected",
					"value": "rejected"
				},
				{
					"name": "DRAFT",
					"value": "DRAFT"
				},
				{
					"name": "Draft",
					"value": "draft"
				}
			],
			"routing": {
				"send": {
					"property": "reviewStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Row Label",
			"name": "rowLabel",
			"type": "options",
			"default": "ROW_LABEL_UNSPECIFIED",
			"description": "The label to use for the row value (`eventTicketObject.seatInfo.row`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `rowLabel` and `customRowLabel` may not be set. If neither is set, the label will default to \"Row\", localized. If the row field is unset, this label will not be used.",
			"options": [
				{
					"name": "ROW LABEL UNSPECIFIED",
					"value": "ROW_LABEL_UNSPECIFIED"
				},
				{
					"name": "ROW",
					"value": "ROW"
				},
				{
					"name": "Row",
					"value": "row"
				}
			],
			"routing": {
				"send": {
					"property": "rowLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Seat Label",
			"name": "seatLabel",
			"type": "options",
			"default": "SEAT_LABEL_UNSPECIFIED",
			"description": "The label to use for the seat value (`eventTicketObject.seatInfo.seat`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `seatLabel` and `customSeatLabel` may not be set. If neither is set, the label will default to \"Seat\", localized. If the seat field is unset, this label will not be used.",
			"options": [
				{
					"name": "SEAT LABEL UNSPECIFIED",
					"value": "SEAT_LABEL_UNSPECIFIED"
				},
				{
					"name": "SEAT",
					"value": "SEAT"
				},
				{
					"name": "Seat",
					"value": "seat"
				}
			],
			"routing": {
				"send": {
					"property": "seatLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Section Label",
			"name": "sectionLabel",
			"type": "options",
			"default": "SECTION_LABEL_UNSPECIFIED",
			"description": "The label to use for the section value (`eventTicketObject.seatInfo.section`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `sectionLabel` and `customSectionLabel` may not be set. If neither is set, the label will default to \"Section\", localized. If the section field is unset, this label will not be used.",
			"options": [
				{
					"name": "SECTION LABEL UNSPECIFIED",
					"value": "SECTION_LABEL_UNSPECIFIED"
				},
				{
					"name": "SECTION",
					"value": "SECTION"
				},
				{
					"name": "Section",
					"value": "section"
				},
				{
					"name": "THEATER",
					"value": "THEATER"
				},
				{
					"name": "Theater",
					"value": "theater"
				}
			],
			"routing": {
				"send": {
					"property": "sectionLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Security Animation",
			"name": "securityAnimation",
			"type": "json",
			"default": "{}",
			"description": "Optional information about the security animation. If this is set a security animation will be rendered on pass details.",
			"routing": {
				"send": {
					"property": "securityAnimation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Venue",
			"name": "venue",
			"type": "json",
			"default": "{\n  \"address\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"name\": {}\n}",
			"description": "Event venue details.",
			"routing": {
				"send": {
					"property": "venue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "View Unlock Requirement",
			"name": "viewUnlockRequirement",
			"type": "options",
			"default": "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED",
			"description": "View Unlock Requirement options for the event ticket.",
			"options": [
				{
					"name": "VIEW UNLOCK REQUIREMENT UNSPECIFIED",
					"value": "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED"
				},
				{
					"name": "UNLOCK NOT REQUIRED",
					"value": "UNLOCK_NOT_REQUIRED"
				},
				{
					"name": "UNLOCK REQUIRED TO VIEW",
					"value": "UNLOCK_REQUIRED_TO_VIEW"
				}
			],
			"routing": {
				"send": {
					"property": "viewUnlockRequirement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Word Mark",
			"name": "wordMark",
			"type": "json",
			"default": "{\n  \"contentDescription\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"sourceUri\": {\n    \"localizedDescription\": {}\n  }\n}",
			"description": "Wrapping type for Google hosted images. Next ID: 7",
			"routing": {
				"send": {
					"property": "wordMark",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Insert"
					]
				}
			}
		},
		{
			"displayName": "GET /walletobjects/v1/eventTicketClass/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Get"
					]
				}
			}
		},
		{
			"displayName": "Resource Id",
			"name": "resourceId",
			"required": true,
			"description": "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Get"
					]
				}
			}
		},
		{
			"displayName": "PATCH /walletobjects/v1/eventTicketClass/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Resource Id",
			"name": "resourceId",
			"required": true,
			"description": "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Allow Multiple Users Per Object",
			"name": "allowMultipleUsersPerObject",
			"type": "boolean",
			"default": true,
			"description": "Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead.",
			"routing": {
				"send": {
					"property": "allowMultipleUsersPerObject",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Callback Options",
			"name": "callbackOptions",
			"type": "json",
			"default": "{}",
			"description": "Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback.",
			"routing": {
				"send": {
					"property": "callbackOptions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Class Template Info",
			"name": "classTemplateInfo",
			"type": "json",
			"default": "{\n  \"cardBarcodeSectionDetails\": {\n    \"firstBottomDetail\": {\n      \"fieldSelector\": {\n        \"fields\": [\n          {}\n        ]\n      }\n    },\n    \"firstTopDetail\": {},\n    \"secondTopDetail\": {}\n  },\n  \"cardTemplateOverride\": {\n    \"cardRowTemplateInfos\": [\n      {\n        \"oneItem\": {\n          \"item\": {\n            \"firstValue\": {},\n            \"secondValue\": {}\n          }\n        },\n        \"threeItems\": {\n          \"endItem\": {},\n          \"middleItem\": {},\n          \"startItem\": {}\n        },\n        \"twoItems\": {\n          \"endItem\": {},\n          \"startItem\": {}\n        }\n      }\n    ]\n  },\n  \"detailsTemplateOverride\": {\n    \"detailsItemInfos\": [\n      {\n        \"item\": {}\n      }\n    ]\n  },\n  \"listTemplateOverride\": {\n    \"firstRowOption\": {\n      \"fieldOption\": {}\n    },\n    \"secondRowOption\": {},\n    \"thirdRowOption\": {}\n  }\n}",
			"description": "Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display.",
			"routing": {
				"send": {
					"property": "classTemplateInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Confirmation Code Label",
			"name": "confirmationCodeLabel",
			"type": "options",
			"default": "CONFIRMATION_CODE_LABEL_UNSPECIFIED",
			"description": "The label to use for the confirmation code value (`eventTicketObject.reservationInfo.confirmationCode`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `confirmationCodeLabel` and `customConfirmationCodeLabel` may not be set. If neither is set, the label will default to \"Confirmation Code\", localized. If the confirmation code field is unset, this label will not be used.",
			"options": [
				{
					"name": "CONFIRMATION CODE LABEL UNSPECIFIED",
					"value": "CONFIRMATION_CODE_LABEL_UNSPECIFIED"
				},
				{
					"name": "CONFIRMATION CODE",
					"value": "CONFIRMATION_CODE"
				},
				{
					"name": "Confirmation Code",
					"value": "confirmationCode"
				},
				{
					"name": "CONFIRMATION NUMBER",
					"value": "CONFIRMATION_NUMBER"
				},
				{
					"name": "Confirmation Number",
					"value": "confirmationNumber"
				},
				{
					"name": "ORDER NUMBER",
					"value": "ORDER_NUMBER"
				},
				{
					"name": "Order Number",
					"value": "orderNumber"
				},
				{
					"name": "RESERVATION NUMBER",
					"value": "RESERVATION_NUMBER"
				},
				{
					"name": "Reservation Number",
					"value": "reservationNumber"
				}
			],
			"routing": {
				"send": {
					"property": "confirmationCodeLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Country Code",
			"name": "countryCode",
			"type": "string",
			"default": "",
			"description": "Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale.",
			"routing": {
				"send": {
					"property": "countryCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Confirmation Code Label",
			"name": "customConfirmationCodeLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the confirmation code value (`eventTicketObject.reservationInfo.confirmationCode`) on the card detail view. This should only be used if the default \"Confirmation Code\" label or one of the `confirmationCodeLabel` options is not sufficient. Both `confirmationCodeLabel` and `customConfirmationCodeLabel` may not be set. If neither is set, the label will default to \"Confirmation Code\", localized. If the confirmation code field is unset, this label will not be used.",
			"routing": {
				"send": {
					"property": "customConfirmationCodeLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Gate Label",
			"name": "customGateLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the gate value (`eventTicketObject.seatInfo.gate`) on the card detail view. This should only be used if the default \"Gate\" label or one of the `gateLabel` options is not sufficient. Both `gateLabel` and `customGateLabel` may not be set. If neither is set, the label will default to \"Gate\", localized. If the gate field is unset, this label will not be used.",
			"routing": {
				"send": {
					"property": "customGateLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Row Label",
			"name": "customRowLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the row value (`eventTicketObject.seatInfo.row`) on the card detail view. This should only be used if the default \"Row\" label or one of the `rowLabel` options is not sufficient. Both `rowLabel` and `customRowLabel` may not be set. If neither is set, the label will default to \"Row\", localized. If the row field is unset, this label will not be used.",
			"routing": {
				"send": {
					"property": "customRowLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Seat Label",
			"name": "customSeatLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the seat value (`eventTicketObject.seatInfo.seat`) on the card detail view. This should only be used if the default \"Seat\" label or one of the `seatLabel` options is not sufficient. Both `seatLabel` and `customSeatLabel` may not be set. If neither is set, the label will default to \"Seat\", localized. If the seat field is unset, this label will not be used.",
			"routing": {
				"send": {
					"property": "customSeatLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Section Label",
			"name": "customSectionLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the section value (`eventTicketObject.seatInfo.section`) on the card detail view. This should only be used if the default \"Section\" label or one of the `sectionLabel` options is not sufficient. Both `sectionLabel` and `customSectionLabel` may not be set. If neither is set, the label will default to \"Section\", localized. If the section field is unset, this label will not be used.",
			"routing": {
				"send": {
					"property": "customSectionLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Date Time",
			"name": "dateTime",
			"type": "json",
			"default": "{\n  \"customDoorsOpenLabel\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  }\n}",
			"description": "The date & time information of the event.",
			"routing": {
				"send": {
					"property": "dateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Enable Smart Tap",
			"name": "enableSmartTap",
			"type": "boolean",
			"default": true,
			"description": "Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.",
			"routing": {
				"send": {
					"property": "enableSmartTap",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Event Id",
			"name": "eventId",
			"type": "string",
			"default": "",
			"description": "The ID of the event. This ID should be unique for every event in an account. It is used to group tickets together if the user has saved multiple tickets for the same event. It can be at most 64 characters. If provided, the grouping will be stable. Be wary of unintentional collision to avoid grouping tickets that should not be grouped. If you use only one class per event, you can simply set this to the `classId` (with or without the issuer ID portion). If not provided, the platform will attempt to use other data to group tickets (potentially unstable).",
			"routing": {
				"send": {
					"property": "eventId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Event Name",
			"name": "eventName",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Required. The name of the event, such as \"LA Dodgers at SF Giants\".",
			"routing": {
				"send": {
					"property": "eventName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Fine Print",
			"name": "finePrint",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "The fine print, terms, or conditions of the ticket.",
			"routing": {
				"send": {
					"property": "finePrint",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Gate Label",
			"name": "gateLabel",
			"type": "options",
			"default": "GATE_LABEL_UNSPECIFIED",
			"description": "The label to use for the gate value (`eventTicketObject.seatInfo.gate`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `gateLabel` and `customGateLabel` may not be set. If neither is set, the label will default to \"Gate\", localized. If the gate field is unset, this label will not be used.",
			"options": [
				{
					"name": "GATE LABEL UNSPECIFIED",
					"value": "GATE_LABEL_UNSPECIFIED"
				},
				{
					"name": "GATE",
					"value": "GATE"
				},
				{
					"name": "Gate",
					"value": "gate"
				},
				{
					"name": "DOOR",
					"value": "DOOR"
				},
				{
					"name": "Door",
					"value": "door"
				},
				{
					"name": "ENTRANCE",
					"value": "ENTRANCE"
				},
				{
					"name": "Entrance",
					"value": "entrance"
				}
			],
			"routing": {
				"send": {
					"property": "gateLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Homepage Uri",
			"name": "homepageUri",
			"type": "json",
			"default": "{\n  \"localizedDescription\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  }\n}",
			"description": "The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object).",
			"routing": {
				"send": {
					"property": "homepageUri",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Issuer Name",
			"name": "issuerName",
			"type": "string",
			"default": "",
			"description": "Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "issuerName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "string",
			"default": "",
			"description": "Identifies what kind of resource this is. Value: the fixed string `\"walletobjects#eventTicketClass\"`.",
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Links Module Data",
			"name": "linksModuleData",
			"type": "json",
			"default": "{\n  \"uris\": [\n    {\n      \"localizedDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      }\n    }\n  ]\n}",
			"description": "Links module data. If links module data is also defined on the object, both will be displayed.",
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Localized Issuer Name",
			"name": "localizedIssuerName",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "localizedIssuerName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Logo",
			"name": "logo",
			"type": "json",
			"default": "{\n  \"contentDescription\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"sourceUri\": {\n    \"localizedDescription\": {}\n  }\n}",
			"description": "Wrapping type for Google hosted images. Next ID: 7",
			"routing": {
				"send": {
					"property": "logo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Multiple Devices And Holders Allowed Status",
			"name": "multipleDevicesAndHoldersAllowedStatus",
			"type": "options",
			"default": "STATUS_UNSPECIFIED",
			"description": "Identifies whether multiple users and devices will save the same object referencing this class.",
			"options": [
				{
					"name": "STATUS UNSPECIFIED",
					"value": "STATUS_UNSPECIFIED"
				},
				{
					"name": "MULTIPLE HOLDERS",
					"value": "MULTIPLE_HOLDERS"
				},
				{
					"name": "Multiple Holders",
					"value": "multipleHolders"
				},
				{
					"name": "ONE USER ALL DEVICES",
					"value": "ONE_USER_ALL_DEVICES"
				},
				{
					"name": "One User All Devices",
					"value": "oneUserAllDevices"
				},
				{
					"name": "ONE USER ONE DEVICE",
					"value": "ONE_USER_ONE_DEVICE"
				},
				{
					"name": "One User One Device",
					"value": "oneUserOneDevice"
				}
			],
			"routing": {
				"send": {
					"property": "multipleDevicesAndHoldersAllowedStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Redemption Issuers",
			"name": "redemptionIssuers",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.",
			"routing": {
				"send": {
					"property": "redemptionIssuers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Review",
			"name": "review",
			"type": "json",
			"default": "{}",
			"description": "The review comments set by the platform when a class is marked `approved` or `rejected`.",
			"routing": {
				"send": {
					"property": "review",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Review Status",
			"name": "reviewStatus",
			"type": "options",
			"default": "REVIEW_STATUS_UNSPECIFIED",
			"description": "Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`.",
			"options": [
				{
					"name": "REVIEW STATUS UNSPECIFIED",
					"value": "REVIEW_STATUS_UNSPECIFIED"
				},
				{
					"name": "UNDER REVIEW",
					"value": "UNDER_REVIEW"
				},
				{
					"name": "Under Review",
					"value": "underReview"
				},
				{
					"name": "APPROVED",
					"value": "APPROVED"
				},
				{
					"name": "Approved",
					"value": "approved"
				},
				{
					"name": "REJECTED",
					"value": "REJECTED"
				},
				{
					"name": "Rejected",
					"value": "rejected"
				},
				{
					"name": "DRAFT",
					"value": "DRAFT"
				},
				{
					"name": "Draft",
					"value": "draft"
				}
			],
			"routing": {
				"send": {
					"property": "reviewStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Row Label",
			"name": "rowLabel",
			"type": "options",
			"default": "ROW_LABEL_UNSPECIFIED",
			"description": "The label to use for the row value (`eventTicketObject.seatInfo.row`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `rowLabel` and `customRowLabel` may not be set. If neither is set, the label will default to \"Row\", localized. If the row field is unset, this label will not be used.",
			"options": [
				{
					"name": "ROW LABEL UNSPECIFIED",
					"value": "ROW_LABEL_UNSPECIFIED"
				},
				{
					"name": "ROW",
					"value": "ROW"
				},
				{
					"name": "Row",
					"value": "row"
				}
			],
			"routing": {
				"send": {
					"property": "rowLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Seat Label",
			"name": "seatLabel",
			"type": "options",
			"default": "SEAT_LABEL_UNSPECIFIED",
			"description": "The label to use for the seat value (`eventTicketObject.seatInfo.seat`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `seatLabel` and `customSeatLabel` may not be set. If neither is set, the label will default to \"Seat\", localized. If the seat field is unset, this label will not be used.",
			"options": [
				{
					"name": "SEAT LABEL UNSPECIFIED",
					"value": "SEAT_LABEL_UNSPECIFIED"
				},
				{
					"name": "SEAT",
					"value": "SEAT"
				},
				{
					"name": "Seat",
					"value": "seat"
				}
			],
			"routing": {
				"send": {
					"property": "seatLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Section Label",
			"name": "sectionLabel",
			"type": "options",
			"default": "SECTION_LABEL_UNSPECIFIED",
			"description": "The label to use for the section value (`eventTicketObject.seatInfo.section`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `sectionLabel` and `customSectionLabel` may not be set. If neither is set, the label will default to \"Section\", localized. If the section field is unset, this label will not be used.",
			"options": [
				{
					"name": "SECTION LABEL UNSPECIFIED",
					"value": "SECTION_LABEL_UNSPECIFIED"
				},
				{
					"name": "SECTION",
					"value": "SECTION"
				},
				{
					"name": "Section",
					"value": "section"
				},
				{
					"name": "THEATER",
					"value": "THEATER"
				},
				{
					"name": "Theater",
					"value": "theater"
				}
			],
			"routing": {
				"send": {
					"property": "sectionLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Security Animation",
			"name": "securityAnimation",
			"type": "json",
			"default": "{}",
			"description": "Optional information about the security animation. If this is set a security animation will be rendered on pass details.",
			"routing": {
				"send": {
					"property": "securityAnimation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Venue",
			"name": "venue",
			"type": "json",
			"default": "{\n  \"address\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"name\": {}\n}",
			"description": "Event venue details.",
			"routing": {
				"send": {
					"property": "venue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "View Unlock Requirement",
			"name": "viewUnlockRequirement",
			"type": "options",
			"default": "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED",
			"description": "View Unlock Requirement options for the event ticket.",
			"options": [
				{
					"name": "VIEW UNLOCK REQUIREMENT UNSPECIFIED",
					"value": "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED"
				},
				{
					"name": "UNLOCK NOT REQUIRED",
					"value": "UNLOCK_NOT_REQUIRED"
				},
				{
					"name": "UNLOCK REQUIRED TO VIEW",
					"value": "UNLOCK_REQUIRED_TO_VIEW"
				}
			],
			"routing": {
				"send": {
					"property": "viewUnlockRequirement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Word Mark",
			"name": "wordMark",
			"type": "json",
			"default": "{\n  \"contentDescription\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"sourceUri\": {\n    \"localizedDescription\": {}\n  }\n}",
			"description": "Wrapping type for Google hosted images. Next ID: 7",
			"routing": {
				"send": {
					"property": "wordMark",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Patch"
					]
				}
			}
		},
		{
			"displayName": "PUT /walletobjects/v1/eventTicketClass/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Resource Id",
			"name": "resourceId",
			"required": true,
			"description": "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Allow Multiple Users Per Object",
			"name": "allowMultipleUsersPerObject",
			"type": "boolean",
			"default": true,
			"description": "Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead.",
			"routing": {
				"send": {
					"property": "allowMultipleUsersPerObject",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Callback Options",
			"name": "callbackOptions",
			"type": "json",
			"default": "{}",
			"description": "Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback.",
			"routing": {
				"send": {
					"property": "callbackOptions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Class Template Info",
			"name": "classTemplateInfo",
			"type": "json",
			"default": "{\n  \"cardBarcodeSectionDetails\": {\n    \"firstBottomDetail\": {\n      \"fieldSelector\": {\n        \"fields\": [\n          {}\n        ]\n      }\n    },\n    \"firstTopDetail\": {},\n    \"secondTopDetail\": {}\n  },\n  \"cardTemplateOverride\": {\n    \"cardRowTemplateInfos\": [\n      {\n        \"oneItem\": {\n          \"item\": {\n            \"firstValue\": {},\n            \"secondValue\": {}\n          }\n        },\n        \"threeItems\": {\n          \"endItem\": {},\n          \"middleItem\": {},\n          \"startItem\": {}\n        },\n        \"twoItems\": {\n          \"endItem\": {},\n          \"startItem\": {}\n        }\n      }\n    ]\n  },\n  \"detailsTemplateOverride\": {\n    \"detailsItemInfos\": [\n      {\n        \"item\": {}\n      }\n    ]\n  },\n  \"listTemplateOverride\": {\n    \"firstRowOption\": {\n      \"fieldOption\": {}\n    },\n    \"secondRowOption\": {},\n    \"thirdRowOption\": {}\n  }\n}",
			"description": "Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display.",
			"routing": {
				"send": {
					"property": "classTemplateInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Confirmation Code Label",
			"name": "confirmationCodeLabel",
			"type": "options",
			"default": "CONFIRMATION_CODE_LABEL_UNSPECIFIED",
			"description": "The label to use for the confirmation code value (`eventTicketObject.reservationInfo.confirmationCode`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `confirmationCodeLabel` and `customConfirmationCodeLabel` may not be set. If neither is set, the label will default to \"Confirmation Code\", localized. If the confirmation code field is unset, this label will not be used.",
			"options": [
				{
					"name": "CONFIRMATION CODE LABEL UNSPECIFIED",
					"value": "CONFIRMATION_CODE_LABEL_UNSPECIFIED"
				},
				{
					"name": "CONFIRMATION CODE",
					"value": "CONFIRMATION_CODE"
				},
				{
					"name": "Confirmation Code",
					"value": "confirmationCode"
				},
				{
					"name": "CONFIRMATION NUMBER",
					"value": "CONFIRMATION_NUMBER"
				},
				{
					"name": "Confirmation Number",
					"value": "confirmationNumber"
				},
				{
					"name": "ORDER NUMBER",
					"value": "ORDER_NUMBER"
				},
				{
					"name": "Order Number",
					"value": "orderNumber"
				},
				{
					"name": "RESERVATION NUMBER",
					"value": "RESERVATION_NUMBER"
				},
				{
					"name": "Reservation Number",
					"value": "reservationNumber"
				}
			],
			"routing": {
				"send": {
					"property": "confirmationCodeLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Country Code",
			"name": "countryCode",
			"type": "string",
			"default": "",
			"description": "Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale.",
			"routing": {
				"send": {
					"property": "countryCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Confirmation Code Label",
			"name": "customConfirmationCodeLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the confirmation code value (`eventTicketObject.reservationInfo.confirmationCode`) on the card detail view. This should only be used if the default \"Confirmation Code\" label or one of the `confirmationCodeLabel` options is not sufficient. Both `confirmationCodeLabel` and `customConfirmationCodeLabel` may not be set. If neither is set, the label will default to \"Confirmation Code\", localized. If the confirmation code field is unset, this label will not be used.",
			"routing": {
				"send": {
					"property": "customConfirmationCodeLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Gate Label",
			"name": "customGateLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the gate value (`eventTicketObject.seatInfo.gate`) on the card detail view. This should only be used if the default \"Gate\" label or one of the `gateLabel` options is not sufficient. Both `gateLabel` and `customGateLabel` may not be set. If neither is set, the label will default to \"Gate\", localized. If the gate field is unset, this label will not be used.",
			"routing": {
				"send": {
					"property": "customGateLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Row Label",
			"name": "customRowLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the row value (`eventTicketObject.seatInfo.row`) on the card detail view. This should only be used if the default \"Row\" label or one of the `rowLabel` options is not sufficient. Both `rowLabel` and `customRowLabel` may not be set. If neither is set, the label will default to \"Row\", localized. If the row field is unset, this label will not be used.",
			"routing": {
				"send": {
					"property": "customRowLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Seat Label",
			"name": "customSeatLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the seat value (`eventTicketObject.seatInfo.seat`) on the card detail view. This should only be used if the default \"Seat\" label or one of the `seatLabel` options is not sufficient. Both `seatLabel` and `customSeatLabel` may not be set. If neither is set, the label will default to \"Seat\", localized. If the seat field is unset, this label will not be used.",
			"routing": {
				"send": {
					"property": "customSeatLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Section Label",
			"name": "customSectionLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the section value (`eventTicketObject.seatInfo.section`) on the card detail view. This should only be used if the default \"Section\" label or one of the `sectionLabel` options is not sufficient. Both `sectionLabel` and `customSectionLabel` may not be set. If neither is set, the label will default to \"Section\", localized. If the section field is unset, this label will not be used.",
			"routing": {
				"send": {
					"property": "customSectionLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Date Time",
			"name": "dateTime",
			"type": "json",
			"default": "{\n  \"customDoorsOpenLabel\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  }\n}",
			"description": "The date & time information of the event.",
			"routing": {
				"send": {
					"property": "dateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Enable Smart Tap",
			"name": "enableSmartTap",
			"type": "boolean",
			"default": true,
			"description": "Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.",
			"routing": {
				"send": {
					"property": "enableSmartTap",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Event Id",
			"name": "eventId",
			"type": "string",
			"default": "",
			"description": "The ID of the event. This ID should be unique for every event in an account. It is used to group tickets together if the user has saved multiple tickets for the same event. It can be at most 64 characters. If provided, the grouping will be stable. Be wary of unintentional collision to avoid grouping tickets that should not be grouped. If you use only one class per event, you can simply set this to the `classId` (with or without the issuer ID portion). If not provided, the platform will attempt to use other data to group tickets (potentially unstable).",
			"routing": {
				"send": {
					"property": "eventId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Event Name",
			"name": "eventName",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Required. The name of the event, such as \"LA Dodgers at SF Giants\".",
			"routing": {
				"send": {
					"property": "eventName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Fine Print",
			"name": "finePrint",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "The fine print, terms, or conditions of the ticket.",
			"routing": {
				"send": {
					"property": "finePrint",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Gate Label",
			"name": "gateLabel",
			"type": "options",
			"default": "GATE_LABEL_UNSPECIFIED",
			"description": "The label to use for the gate value (`eventTicketObject.seatInfo.gate`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `gateLabel` and `customGateLabel` may not be set. If neither is set, the label will default to \"Gate\", localized. If the gate field is unset, this label will not be used.",
			"options": [
				{
					"name": "GATE LABEL UNSPECIFIED",
					"value": "GATE_LABEL_UNSPECIFIED"
				},
				{
					"name": "GATE",
					"value": "GATE"
				},
				{
					"name": "Gate",
					"value": "gate"
				},
				{
					"name": "DOOR",
					"value": "DOOR"
				},
				{
					"name": "Door",
					"value": "door"
				},
				{
					"name": "ENTRANCE",
					"value": "ENTRANCE"
				},
				{
					"name": "Entrance",
					"value": "entrance"
				}
			],
			"routing": {
				"send": {
					"property": "gateLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Homepage Uri",
			"name": "homepageUri",
			"type": "json",
			"default": "{\n  \"localizedDescription\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  }\n}",
			"description": "The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object).",
			"routing": {
				"send": {
					"property": "homepageUri",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Issuer Name",
			"name": "issuerName",
			"type": "string",
			"default": "",
			"description": "Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "issuerName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "string",
			"default": "",
			"description": "Identifies what kind of resource this is. Value: the fixed string `\"walletobjects#eventTicketClass\"`.",
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Links Module Data",
			"name": "linksModuleData",
			"type": "json",
			"default": "{\n  \"uris\": [\n    {\n      \"localizedDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      }\n    }\n  ]\n}",
			"description": "Links module data. If links module data is also defined on the object, both will be displayed.",
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Localized Issuer Name",
			"name": "localizedIssuerName",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "localizedIssuerName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Logo",
			"name": "logo",
			"type": "json",
			"default": "{\n  \"contentDescription\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"sourceUri\": {\n    \"localizedDescription\": {}\n  }\n}",
			"description": "Wrapping type for Google hosted images. Next ID: 7",
			"routing": {
				"send": {
					"property": "logo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Multiple Devices And Holders Allowed Status",
			"name": "multipleDevicesAndHoldersAllowedStatus",
			"type": "options",
			"default": "STATUS_UNSPECIFIED",
			"description": "Identifies whether multiple users and devices will save the same object referencing this class.",
			"options": [
				{
					"name": "STATUS UNSPECIFIED",
					"value": "STATUS_UNSPECIFIED"
				},
				{
					"name": "MULTIPLE HOLDERS",
					"value": "MULTIPLE_HOLDERS"
				},
				{
					"name": "Multiple Holders",
					"value": "multipleHolders"
				},
				{
					"name": "ONE USER ALL DEVICES",
					"value": "ONE_USER_ALL_DEVICES"
				},
				{
					"name": "One User All Devices",
					"value": "oneUserAllDevices"
				},
				{
					"name": "ONE USER ONE DEVICE",
					"value": "ONE_USER_ONE_DEVICE"
				},
				{
					"name": "One User One Device",
					"value": "oneUserOneDevice"
				}
			],
			"routing": {
				"send": {
					"property": "multipleDevicesAndHoldersAllowedStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Redemption Issuers",
			"name": "redemptionIssuers",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.",
			"routing": {
				"send": {
					"property": "redemptionIssuers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Review",
			"name": "review",
			"type": "json",
			"default": "{}",
			"description": "The review comments set by the platform when a class is marked `approved` or `rejected`.",
			"routing": {
				"send": {
					"property": "review",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Review Status",
			"name": "reviewStatus",
			"type": "options",
			"default": "REVIEW_STATUS_UNSPECIFIED",
			"description": "Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`.",
			"options": [
				{
					"name": "REVIEW STATUS UNSPECIFIED",
					"value": "REVIEW_STATUS_UNSPECIFIED"
				},
				{
					"name": "UNDER REVIEW",
					"value": "UNDER_REVIEW"
				},
				{
					"name": "Under Review",
					"value": "underReview"
				},
				{
					"name": "APPROVED",
					"value": "APPROVED"
				},
				{
					"name": "Approved",
					"value": "approved"
				},
				{
					"name": "REJECTED",
					"value": "REJECTED"
				},
				{
					"name": "Rejected",
					"value": "rejected"
				},
				{
					"name": "DRAFT",
					"value": "DRAFT"
				},
				{
					"name": "Draft",
					"value": "draft"
				}
			],
			"routing": {
				"send": {
					"property": "reviewStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Row Label",
			"name": "rowLabel",
			"type": "options",
			"default": "ROW_LABEL_UNSPECIFIED",
			"description": "The label to use for the row value (`eventTicketObject.seatInfo.row`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `rowLabel` and `customRowLabel` may not be set. If neither is set, the label will default to \"Row\", localized. If the row field is unset, this label will not be used.",
			"options": [
				{
					"name": "ROW LABEL UNSPECIFIED",
					"value": "ROW_LABEL_UNSPECIFIED"
				},
				{
					"name": "ROW",
					"value": "ROW"
				},
				{
					"name": "Row",
					"value": "row"
				}
			],
			"routing": {
				"send": {
					"property": "rowLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Seat Label",
			"name": "seatLabel",
			"type": "options",
			"default": "SEAT_LABEL_UNSPECIFIED",
			"description": "The label to use for the seat value (`eventTicketObject.seatInfo.seat`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `seatLabel` and `customSeatLabel` may not be set. If neither is set, the label will default to \"Seat\", localized. If the seat field is unset, this label will not be used.",
			"options": [
				{
					"name": "SEAT LABEL UNSPECIFIED",
					"value": "SEAT_LABEL_UNSPECIFIED"
				},
				{
					"name": "SEAT",
					"value": "SEAT"
				},
				{
					"name": "Seat",
					"value": "seat"
				}
			],
			"routing": {
				"send": {
					"property": "seatLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Section Label",
			"name": "sectionLabel",
			"type": "options",
			"default": "SECTION_LABEL_UNSPECIFIED",
			"description": "The label to use for the section value (`eventTicketObject.seatInfo.section`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `sectionLabel` and `customSectionLabel` may not be set. If neither is set, the label will default to \"Section\", localized. If the section field is unset, this label will not be used.",
			"options": [
				{
					"name": "SECTION LABEL UNSPECIFIED",
					"value": "SECTION_LABEL_UNSPECIFIED"
				},
				{
					"name": "SECTION",
					"value": "SECTION"
				},
				{
					"name": "Section",
					"value": "section"
				},
				{
					"name": "THEATER",
					"value": "THEATER"
				},
				{
					"name": "Theater",
					"value": "theater"
				}
			],
			"routing": {
				"send": {
					"property": "sectionLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Security Animation",
			"name": "securityAnimation",
			"type": "json",
			"default": "{}",
			"description": "Optional information about the security animation. If this is set a security animation will be rendered on pass details.",
			"routing": {
				"send": {
					"property": "securityAnimation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Venue",
			"name": "venue",
			"type": "json",
			"default": "{\n  \"address\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"name\": {}\n}",
			"description": "Event venue details.",
			"routing": {
				"send": {
					"property": "venue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "View Unlock Requirement",
			"name": "viewUnlockRequirement",
			"type": "options",
			"default": "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED",
			"description": "View Unlock Requirement options for the event ticket.",
			"options": [
				{
					"name": "VIEW UNLOCK REQUIREMENT UNSPECIFIED",
					"value": "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED"
				},
				{
					"name": "UNLOCK NOT REQUIRED",
					"value": "UNLOCK_NOT_REQUIRED"
				},
				{
					"name": "UNLOCK REQUIRED TO VIEW",
					"value": "UNLOCK_REQUIRED_TO_VIEW"
				}
			],
			"routing": {
				"send": {
					"property": "viewUnlockRequirement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "Word Mark",
			"name": "wordMark",
			"type": "json",
			"default": "{\n  \"contentDescription\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"sourceUri\": {\n    \"localizedDescription\": {}\n  }\n}",
			"description": "Wrapping type for Google hosted images. Next ID: 7",
			"routing": {
				"send": {
					"property": "wordMark",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Update"
					]
				}
			}
		},
		{
			"displayName": "POST /walletobjects/v1/eventTicketClass/{resourceId}/addMessage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Addmessage"
					]
				}
			}
		},
		{
			"displayName": "Resource Id",
			"name": "resourceId",
			"required": true,
			"description": "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Addmessage"
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
						"Eventticketclass"
					],
					"operation": [
						"Walletobjects Eventticketclass Addmessage"
					]
				}
			}
		},
];
