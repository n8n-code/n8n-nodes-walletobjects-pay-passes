import type { INodeProperties } from 'n8n-workflow';

export const transitclassDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					]
				}
			},
			"options": [
				{
					"name": "Walletobjects Transitclass List",
					"value": "Walletobjects Transitclass List",
					"action": "Walletobjects Transitclass List",
					"description": "Returns a list of all transit classes for a given issuer ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/walletobjects/v1/transitClass"
						}
					}
				},
				{
					"name": "Walletobjects Transitclass Insert",
					"value": "Walletobjects Transitclass Insert",
					"action": "Walletobjects Transitclass Insert",
					"description": "Inserts a transit class with the given ID and properties.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/walletobjects/v1/transitClass"
						}
					}
				},
				{
					"name": "Walletobjects Transitclass Get",
					"value": "Walletobjects Transitclass Get",
					"action": "Walletobjects Transitclass Get",
					"description": "Returns the transit class with the given class ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/walletobjects/v1/transitClass/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Transitclass Patch",
					"value": "Walletobjects Transitclass Patch",
					"action": "Walletobjects Transitclass Patch",
					"description": "Updates the transit class referenced by the given class ID. This method supports patch semantics.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/walletobjects/v1/transitClass/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Transitclass Update",
					"value": "Walletobjects Transitclass Update",
					"action": "Walletobjects Transitclass Update",
					"description": "Updates the transit class referenced by the given class ID.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/walletobjects/v1/transitClass/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Transitclass Addmessage",
					"value": "Walletobjects Transitclass Addmessage",
					"action": "Walletobjects Transitclass Addmessage",
					"description": "Adds a message to the transit class referenced by the given class ID.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/walletobjects/v1/transitClass/{{$parameter[\"resourceId\"]}}/addMessage"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /walletobjects/v1/transitClass",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass List"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass List"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass List"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass List"
					]
				}
			}
		},
		{
			"displayName": "POST /walletobjects/v1/transitClass",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Activation Options",
			"name": "activationOptions",
			"type": "json",
			"default": "{}",
			"description": "ActivationOptions for the class",
			"routing": {
				"send": {
					"property": "activationOptions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Carriage Label",
			"name": "customCarriageLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the carriage value (`transitObject.ticketLeg.carriage`).",
			"routing": {
				"send": {
					"property": "customCarriageLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Coach Label",
			"name": "customCoachLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the coach value (`transitObject.ticketLeg.ticketSeat.coach`).",
			"routing": {
				"send": {
					"property": "customCoachLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Concession Category Label",
			"name": "customConcessionCategoryLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the transit concession category value (`transitObject.concessionCategory`).",
			"routing": {
				"send": {
					"property": "customConcessionCategoryLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Confirmation Code Label",
			"name": "customConfirmationCodeLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the confirmation code value (`transitObject.purchaseDetails.confirmationCode`).",
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Discount Message Label",
			"name": "customDiscountMessageLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the transit discount message value (`transitObject.purchaseDetails.ticketCost.discountMessage`).",
			"routing": {
				"send": {
					"property": "customDiscountMessageLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Fare Class Label",
			"name": "customFareClassLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the fare class value (`transitObject.ticketLeg.ticketSeat.fareClass`).",
			"routing": {
				"send": {
					"property": "customFareClassLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Fare Name Label",
			"name": "customFareNameLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the transit fare name value (`transitObject.ticketLeg.fareName`).",
			"routing": {
				"send": {
					"property": "customFareNameLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Other Restrictions Label",
			"name": "customOtherRestrictionsLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the other restrictions value (`transitObject.ticketRestrictions.otherRestrictions`).",
			"routing": {
				"send": {
					"property": "customOtherRestrictionsLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Platform Label",
			"name": "customPlatformLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the boarding platform value (`transitObject.ticketLeg.platform`).",
			"routing": {
				"send": {
					"property": "customPlatformLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Purchase Face Value Label",
			"name": "customPurchaseFaceValueLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the purchase face value (`transitObject.purchaseDetails.ticketCost.faceValue`).",
			"routing": {
				"send": {
					"property": "customPurchaseFaceValueLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Purchase Price Label",
			"name": "customPurchasePriceLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the purchase price value (`transitObject.purchaseDetails.ticketCost.purchasePrice`).",
			"routing": {
				"send": {
					"property": "customPurchasePriceLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Purchase Receipt Number Label",
			"name": "customPurchaseReceiptNumberLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the purchase receipt number value (`transitObject.purchaseDetails.purchaseReceiptNumber`).",
			"routing": {
				"send": {
					"property": "customPurchaseReceiptNumberLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Route Restrictions Details Label",
			"name": "customRouteRestrictionsDetailsLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the route restrictions details value (`transitObject.ticketRestrictions.routeRestrictionsDetails`).",
			"routing": {
				"send": {
					"property": "customRouteRestrictionsDetailsLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Route Restrictions Label",
			"name": "customRouteRestrictionsLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the route restrictions value (`transitObject.ticketRestrictions.routeRestrictions`).",
			"routing": {
				"send": {
					"property": "customRouteRestrictionsLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Seat Label",
			"name": "customSeatLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the seat location value (`transitObject.ticketLeg.ticketSeat.seat`).",
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Ticket Number Label",
			"name": "customTicketNumberLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the ticket number value (`transitObject.ticketNumber`).",
			"routing": {
				"send": {
					"property": "customTicketNumberLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Time Restrictions Label",
			"name": "customTimeRestrictionsLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the time restrictions details value (`transitObject.ticketRestrictions.timeRestrictions`).",
			"routing": {
				"send": {
					"property": "customTimeRestrictionsLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Transit Terminus Name Label",
			"name": "customTransitTerminusNameLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the transit terminus name value (`transitObject.ticketLeg.transitTerminusName`).",
			"routing": {
				"send": {
					"property": "customTransitTerminusNameLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Custom Zone Label",
			"name": "customZoneLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the boarding zone value (`transitObject.ticketLeg.zone`).",
			"routing": {
				"send": {
					"property": "customZoneLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Enable Single Leg Itinerary",
			"name": "enableSingleLegItinerary",
			"type": "boolean",
			"default": true,
			"description": "Controls the display of the single-leg itinerary for this class. By default, an itinerary will only display for multi-leg trips.",
			"routing": {
				"send": {
					"property": "enableSingleLegItinerary",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Language Override",
			"name": "languageOverride",
			"type": "string",
			"default": "",
			"description": "If this field is present, transit tickets served to a user's device will always be in this language. Represents the BCP 47 language tag. Example values are \"en-US\", \"en-GB\", \"de\", or \"de-AT\".",
			"routing": {
				"send": {
					"property": "languageOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Transit Operator Name",
			"name": "transitOperatorName",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "The name of the transit operator.",
			"routing": {
				"send": {
					"property": "transitOperatorName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Transit Type",
			"name": "transitType",
			"type": "options",
			"default": "TRANSIT_TYPE_UNSPECIFIED",
			"description": "Required. The type of transit this class represents, such as \"bus\".",
			"options": [
				{
					"name": "TRANSIT TYPE UNSPECIFIED",
					"value": "TRANSIT_TYPE_UNSPECIFIED"
				},
				{
					"name": "BUS",
					"value": "BUS"
				},
				{
					"name": "Bus",
					"value": "bus"
				},
				{
					"name": "RAIL",
					"value": "RAIL"
				},
				{
					"name": "Rail",
					"value": "rail"
				},
				{
					"name": "TRAM",
					"value": "TRAM"
				},
				{
					"name": "Tram",
					"value": "tram"
				},
				{
					"name": "FERRY",
					"value": "FERRY"
				},
				{
					"name": "Ferry",
					"value": "ferry"
				},
				{
					"name": "OTHER",
					"value": "OTHER"
				},
				{
					"name": "Other",
					"value": "other"
				}
			],
			"routing": {
				"send": {
					"property": "transitType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "View Unlock Requirement",
			"name": "viewUnlockRequirement",
			"type": "options",
			"default": "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED",
			"description": "View Unlock Requirement options for the transit ticket.",
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Watermark",
			"name": "watermark",
			"type": "json",
			"default": "{\n  \"contentDescription\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"sourceUri\": {\n    \"localizedDescription\": {}\n  }\n}",
			"description": "Wrapping type for Google hosted images. Next ID: 7",
			"routing": {
				"send": {
					"property": "watermark",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Insert"
					]
				}
			}
		},
		{
			"displayName": "GET /walletobjects/v1/transitClass/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Get"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Get"
					]
				}
			}
		},
		{
			"displayName": "PATCH /walletobjects/v1/transitClass/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Activation Options",
			"name": "activationOptions",
			"type": "json",
			"default": "{}",
			"description": "ActivationOptions for the class",
			"routing": {
				"send": {
					"property": "activationOptions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Carriage Label",
			"name": "customCarriageLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the carriage value (`transitObject.ticketLeg.carriage`).",
			"routing": {
				"send": {
					"property": "customCarriageLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Coach Label",
			"name": "customCoachLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the coach value (`transitObject.ticketLeg.ticketSeat.coach`).",
			"routing": {
				"send": {
					"property": "customCoachLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Concession Category Label",
			"name": "customConcessionCategoryLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the transit concession category value (`transitObject.concessionCategory`).",
			"routing": {
				"send": {
					"property": "customConcessionCategoryLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Confirmation Code Label",
			"name": "customConfirmationCodeLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the confirmation code value (`transitObject.purchaseDetails.confirmationCode`).",
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Discount Message Label",
			"name": "customDiscountMessageLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the transit discount message value (`transitObject.purchaseDetails.ticketCost.discountMessage`).",
			"routing": {
				"send": {
					"property": "customDiscountMessageLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Fare Class Label",
			"name": "customFareClassLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the fare class value (`transitObject.ticketLeg.ticketSeat.fareClass`).",
			"routing": {
				"send": {
					"property": "customFareClassLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Fare Name Label",
			"name": "customFareNameLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the transit fare name value (`transitObject.ticketLeg.fareName`).",
			"routing": {
				"send": {
					"property": "customFareNameLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Other Restrictions Label",
			"name": "customOtherRestrictionsLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the other restrictions value (`transitObject.ticketRestrictions.otherRestrictions`).",
			"routing": {
				"send": {
					"property": "customOtherRestrictionsLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Platform Label",
			"name": "customPlatformLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the boarding platform value (`transitObject.ticketLeg.platform`).",
			"routing": {
				"send": {
					"property": "customPlatformLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Purchase Face Value Label",
			"name": "customPurchaseFaceValueLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the purchase face value (`transitObject.purchaseDetails.ticketCost.faceValue`).",
			"routing": {
				"send": {
					"property": "customPurchaseFaceValueLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Purchase Price Label",
			"name": "customPurchasePriceLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the purchase price value (`transitObject.purchaseDetails.ticketCost.purchasePrice`).",
			"routing": {
				"send": {
					"property": "customPurchasePriceLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Purchase Receipt Number Label",
			"name": "customPurchaseReceiptNumberLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the purchase receipt number value (`transitObject.purchaseDetails.purchaseReceiptNumber`).",
			"routing": {
				"send": {
					"property": "customPurchaseReceiptNumberLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Route Restrictions Details Label",
			"name": "customRouteRestrictionsDetailsLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the route restrictions details value (`transitObject.ticketRestrictions.routeRestrictionsDetails`).",
			"routing": {
				"send": {
					"property": "customRouteRestrictionsDetailsLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Route Restrictions Label",
			"name": "customRouteRestrictionsLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the route restrictions value (`transitObject.ticketRestrictions.routeRestrictions`).",
			"routing": {
				"send": {
					"property": "customRouteRestrictionsLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Seat Label",
			"name": "customSeatLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the seat location value (`transitObject.ticketLeg.ticketSeat.seat`).",
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Ticket Number Label",
			"name": "customTicketNumberLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the ticket number value (`transitObject.ticketNumber`).",
			"routing": {
				"send": {
					"property": "customTicketNumberLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Time Restrictions Label",
			"name": "customTimeRestrictionsLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the time restrictions details value (`transitObject.ticketRestrictions.timeRestrictions`).",
			"routing": {
				"send": {
					"property": "customTimeRestrictionsLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Transit Terminus Name Label",
			"name": "customTransitTerminusNameLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the transit terminus name value (`transitObject.ticketLeg.transitTerminusName`).",
			"routing": {
				"send": {
					"property": "customTransitTerminusNameLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Custom Zone Label",
			"name": "customZoneLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the boarding zone value (`transitObject.ticketLeg.zone`).",
			"routing": {
				"send": {
					"property": "customZoneLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Enable Single Leg Itinerary",
			"name": "enableSingleLegItinerary",
			"type": "boolean",
			"default": true,
			"description": "Controls the display of the single-leg itinerary for this class. By default, an itinerary will only display for multi-leg trips.",
			"routing": {
				"send": {
					"property": "enableSingleLegItinerary",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Language Override",
			"name": "languageOverride",
			"type": "string",
			"default": "",
			"description": "If this field is present, transit tickets served to a user's device will always be in this language. Represents the BCP 47 language tag. Example values are \"en-US\", \"en-GB\", \"de\", or \"de-AT\".",
			"routing": {
				"send": {
					"property": "languageOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Transit Operator Name",
			"name": "transitOperatorName",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "The name of the transit operator.",
			"routing": {
				"send": {
					"property": "transitOperatorName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Transit Type",
			"name": "transitType",
			"type": "options",
			"default": "TRANSIT_TYPE_UNSPECIFIED",
			"description": "Required. The type of transit this class represents, such as \"bus\".",
			"options": [
				{
					"name": "TRANSIT TYPE UNSPECIFIED",
					"value": "TRANSIT_TYPE_UNSPECIFIED"
				},
				{
					"name": "BUS",
					"value": "BUS"
				},
				{
					"name": "Bus",
					"value": "bus"
				},
				{
					"name": "RAIL",
					"value": "RAIL"
				},
				{
					"name": "Rail",
					"value": "rail"
				},
				{
					"name": "TRAM",
					"value": "TRAM"
				},
				{
					"name": "Tram",
					"value": "tram"
				},
				{
					"name": "FERRY",
					"value": "FERRY"
				},
				{
					"name": "Ferry",
					"value": "ferry"
				},
				{
					"name": "OTHER",
					"value": "OTHER"
				},
				{
					"name": "Other",
					"value": "other"
				}
			],
			"routing": {
				"send": {
					"property": "transitType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "View Unlock Requirement",
			"name": "viewUnlockRequirement",
			"type": "options",
			"default": "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED",
			"description": "View Unlock Requirement options for the transit ticket.",
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Watermark",
			"name": "watermark",
			"type": "json",
			"default": "{\n  \"contentDescription\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"sourceUri\": {\n    \"localizedDescription\": {}\n  }\n}",
			"description": "Wrapping type for Google hosted images. Next ID: 7",
			"routing": {
				"send": {
					"property": "watermark",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Patch"
					]
				}
			}
		},
		{
			"displayName": "PUT /walletobjects/v1/transitClass/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "Activation Options",
			"name": "activationOptions",
			"type": "json",
			"default": "{}",
			"description": "ActivationOptions for the class",
			"routing": {
				"send": {
					"property": "activationOptions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Carriage Label",
			"name": "customCarriageLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the carriage value (`transitObject.ticketLeg.carriage`).",
			"routing": {
				"send": {
					"property": "customCarriageLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Coach Label",
			"name": "customCoachLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the coach value (`transitObject.ticketLeg.ticketSeat.coach`).",
			"routing": {
				"send": {
					"property": "customCoachLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Concession Category Label",
			"name": "customConcessionCategoryLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the transit concession category value (`transitObject.concessionCategory`).",
			"routing": {
				"send": {
					"property": "customConcessionCategoryLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Confirmation Code Label",
			"name": "customConfirmationCodeLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the confirmation code value (`transitObject.purchaseDetails.confirmationCode`).",
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Discount Message Label",
			"name": "customDiscountMessageLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the transit discount message value (`transitObject.purchaseDetails.ticketCost.discountMessage`).",
			"routing": {
				"send": {
					"property": "customDiscountMessageLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fare Class Label",
			"name": "customFareClassLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the fare class value (`transitObject.ticketLeg.ticketSeat.fareClass`).",
			"routing": {
				"send": {
					"property": "customFareClassLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fare Name Label",
			"name": "customFareNameLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the transit fare name value (`transitObject.ticketLeg.fareName`).",
			"routing": {
				"send": {
					"property": "customFareNameLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Other Restrictions Label",
			"name": "customOtherRestrictionsLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the other restrictions value (`transitObject.ticketRestrictions.otherRestrictions`).",
			"routing": {
				"send": {
					"property": "customOtherRestrictionsLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Platform Label",
			"name": "customPlatformLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the boarding platform value (`transitObject.ticketLeg.platform`).",
			"routing": {
				"send": {
					"property": "customPlatformLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Purchase Face Value Label",
			"name": "customPurchaseFaceValueLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the purchase face value (`transitObject.purchaseDetails.ticketCost.faceValue`).",
			"routing": {
				"send": {
					"property": "customPurchaseFaceValueLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Purchase Price Label",
			"name": "customPurchasePriceLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the purchase price value (`transitObject.purchaseDetails.ticketCost.purchasePrice`).",
			"routing": {
				"send": {
					"property": "customPurchasePriceLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Purchase Receipt Number Label",
			"name": "customPurchaseReceiptNumberLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the purchase receipt number value (`transitObject.purchaseDetails.purchaseReceiptNumber`).",
			"routing": {
				"send": {
					"property": "customPurchaseReceiptNumberLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Route Restrictions Details Label",
			"name": "customRouteRestrictionsDetailsLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the route restrictions details value (`transitObject.ticketRestrictions.routeRestrictionsDetails`).",
			"routing": {
				"send": {
					"property": "customRouteRestrictionsDetailsLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Route Restrictions Label",
			"name": "customRouteRestrictionsLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the route restrictions value (`transitObject.ticketRestrictions.routeRestrictions`).",
			"routing": {
				"send": {
					"property": "customRouteRestrictionsLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Seat Label",
			"name": "customSeatLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the seat location value (`transitObject.ticketLeg.ticketSeat.seat`).",
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Ticket Number Label",
			"name": "customTicketNumberLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the ticket number value (`transitObject.ticketNumber`).",
			"routing": {
				"send": {
					"property": "customTicketNumberLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Time Restrictions Label",
			"name": "customTimeRestrictionsLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the time restrictions details value (`transitObject.ticketRestrictions.timeRestrictions`).",
			"routing": {
				"send": {
					"property": "customTimeRestrictionsLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Transit Terminus Name Label",
			"name": "customTransitTerminusNameLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the transit terminus name value (`transitObject.ticketLeg.transitTerminusName`).",
			"routing": {
				"send": {
					"property": "customTransitTerminusNameLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Zone Label",
			"name": "customZoneLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "A custom label to use for the boarding zone value (`transitObject.ticketLeg.zone`).",
			"routing": {
				"send": {
					"property": "customZoneLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "Enable Single Leg Itinerary",
			"name": "enableSingleLegItinerary",
			"type": "boolean",
			"default": true,
			"description": "Controls the display of the single-leg itinerary for this class. By default, an itinerary will only display for multi-leg trips.",
			"routing": {
				"send": {
					"property": "enableSingleLegItinerary",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "Language Override",
			"name": "languageOverride",
			"type": "string",
			"default": "",
			"description": "If this field is present, transit tickets served to a user's device will always be in this language. Represents the BCP 47 language tag. Example values are \"en-US\", \"en-GB\", \"de\", or \"de-AT\".",
			"routing": {
				"send": {
					"property": "languageOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "Transit Operator Name",
			"name": "transitOperatorName",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "The name of the transit operator.",
			"routing": {
				"send": {
					"property": "transitOperatorName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "Transit Type",
			"name": "transitType",
			"type": "options",
			"default": "TRANSIT_TYPE_UNSPECIFIED",
			"description": "Required. The type of transit this class represents, such as \"bus\".",
			"options": [
				{
					"name": "TRANSIT TYPE UNSPECIFIED",
					"value": "TRANSIT_TYPE_UNSPECIFIED"
				},
				{
					"name": "BUS",
					"value": "BUS"
				},
				{
					"name": "Bus",
					"value": "bus"
				},
				{
					"name": "RAIL",
					"value": "RAIL"
				},
				{
					"name": "Rail",
					"value": "rail"
				},
				{
					"name": "TRAM",
					"value": "TRAM"
				},
				{
					"name": "Tram",
					"value": "tram"
				},
				{
					"name": "FERRY",
					"value": "FERRY"
				},
				{
					"name": "Ferry",
					"value": "ferry"
				},
				{
					"name": "OTHER",
					"value": "OTHER"
				},
				{
					"name": "Other",
					"value": "other"
				}
			],
			"routing": {
				"send": {
					"property": "transitType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "View Unlock Requirement",
			"name": "viewUnlockRequirement",
			"type": "options",
			"default": "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED",
			"description": "View Unlock Requirement options for the transit ticket.",
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "Watermark",
			"name": "watermark",
			"type": "json",
			"default": "{\n  \"contentDescription\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"sourceUri\": {\n    \"localizedDescription\": {}\n  }\n}",
			"description": "Wrapping type for Google hosted images. Next ID: 7",
			"routing": {
				"send": {
					"property": "watermark",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Update"
					]
				}
			}
		},
		{
			"displayName": "POST /walletobjects/v1/transitClass/{resourceId}/addMessage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Addmessage"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Addmessage"
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
						"Transitclass"
					],
					"operation": [
						"Walletobjects Transitclass Addmessage"
					]
				}
			}
		},
];
