import type { INodeProperties } from 'n8n-workflow';

export const flightclassDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					]
				}
			},
			"options": [
				{
					"name": "Walletobjects Flightclass List",
					"value": "Walletobjects Flightclass List",
					"action": "Walletobjects Flightclass List",
					"description": "Returns a list of all flight classes for a given issuer ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/walletobjects/v1/flightClass"
						}
					}
				},
				{
					"name": "Walletobjects Flightclass Insert",
					"value": "Walletobjects Flightclass Insert",
					"action": "Walletobjects Flightclass Insert",
					"description": "Inserts an flight class with the given ID and properties.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/walletobjects/v1/flightClass"
						}
					}
				},
				{
					"name": "Walletobjects Flightclass Get",
					"value": "Walletobjects Flightclass Get",
					"action": "Walletobjects Flightclass Get",
					"description": "Returns the flight class with the given class ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/walletobjects/v1/flightClass/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Flightclass Patch",
					"value": "Walletobjects Flightclass Patch",
					"action": "Walletobjects Flightclass Patch",
					"description": "Updates the flight class referenced by the given class ID. This method supports patch semantics.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/walletobjects/v1/flightClass/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Flightclass Update",
					"value": "Walletobjects Flightclass Update",
					"action": "Walletobjects Flightclass Update",
					"description": "Updates the flight class referenced by the given class ID.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/walletobjects/v1/flightClass/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Flightclass Addmessage",
					"value": "Walletobjects Flightclass Addmessage",
					"action": "Walletobjects Flightclass Addmessage",
					"description": "Adds a message to the flight class referenced by the given class ID.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/walletobjects/v1/flightClass/{{$parameter[\"resourceId\"]}}/addMessage"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /walletobjects/v1/flightClass",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass List"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass List"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass List"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass List"
					]
				}
			}
		},
		{
			"displayName": "POST /walletobjects/v1/flightClass",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Boarding And Seating Policy",
			"name": "boardingAndSeatingPolicy",
			"type": "json",
			"default": "{}",
			"description": "Policies for boarding and seating. These will inform which labels will be shown to users.",
			"routing": {
				"send": {
					"property": "boardingAndSeatingPolicy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Destination",
			"name": "destination",
			"type": "json",
			"default": "{\n  \"airportNameOverride\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  }\n}",
			"description": "Required. Destination airport.",
			"routing": {
				"send": {
					"property": "destination",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Flight Header",
			"name": "flightHeader",
			"type": "json",
			"default": "{\n  \"carrier\": {\n    \"airlineAllianceLogo\": {\n      \"contentDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      },\n      \"sourceUri\": {\n        \"localizedDescription\": {}\n      }\n    },\n    \"airlineLogo\": {},\n    \"airlineName\": {}\n  },\n  \"operatingCarrier\": {}\n}",
			"description": "Required. Information about the flight carrier and number.",
			"routing": {
				"send": {
					"property": "flightHeader",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Flight Status",
			"name": "flightStatus",
			"type": "options",
			"default": "FLIGHT_STATUS_UNSPECIFIED",
			"description": "Status of this flight. If unset, Google will compute status based on data from other sources, such as FlightStats, etc. Note: Google-computed status will not be returned in API responses.",
			"options": [
				{
					"name": "FLIGHT STATUS UNSPECIFIED",
					"value": "FLIGHT_STATUS_UNSPECIFIED"
				},
				{
					"name": "SCHEDULED",
					"value": "SCHEDULED"
				},
				{
					"name": "Scheduled",
					"value": "scheduled"
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
					"name": "LANDED",
					"value": "LANDED"
				},
				{
					"name": "Landed",
					"value": "landed"
				},
				{
					"name": "CANCELLED",
					"value": "CANCELLED"
				},
				{
					"name": "Cancelled",
					"value": "cancelled"
				},
				{
					"name": "REDIRECTED",
					"value": "REDIRECTED"
				},
				{
					"name": "Redirected",
					"value": "redirected"
				},
				{
					"name": "DIVERTED",
					"value": "DIVERTED"
				},
				{
					"name": "Diverted",
					"value": "diverted"
				}
			],
			"routing": {
				"send": {
					"property": "flightStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "string",
			"default": "",
			"description": "Identifies what kind of resource this is. Value: the fixed string `\"walletobjects#flightClass\"`.",
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Language Override",
			"name": "languageOverride",
			"type": "string",
			"default": "",
			"description": "If this field is present, boarding passes served to a user's device will always be in this language. Represents the BCP 47 language tag. Example values are \"en-US\", \"en-GB\", \"de\", or \"de-AT\".",
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Local Boarding Date Time",
			"name": "localBoardingDateTime",
			"type": "string",
			"default": "",
			"description": "The boarding time as it would be printed on the boarding pass. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. If this is not set, Google will set it based on data from other sources.",
			"routing": {
				"send": {
					"property": "localBoardingDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Local Estimated Or Actual Arrival Date Time",
			"name": "localEstimatedOrActualArrivalDateTime",
			"type": "string",
			"default": "",
			"description": "The estimated time the aircraft plans to reach the destination gate (not the runway) or the actual time it reached the gate. This field should be set if at least one of the below is true: - It differs from the scheduled time. Google will use it to calculate the delay. - The aircraft already arrived at the gate. Google will use it to inform the user that the flight has arrived at the gate. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on arrival airport. If this is not set, Google will set it based on data from other sources.",
			"routing": {
				"send": {
					"property": "localEstimatedOrActualArrivalDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Local Estimated Or Actual Departure Date Time",
			"name": "localEstimatedOrActualDepartureDateTime",
			"type": "string",
			"default": "",
			"description": "The estimated time the aircraft plans to pull from the gate or the actual time the aircraft already pulled from the gate. Note: This is not the runway time. This field should be set if at least one of the below is true: - It differs from the scheduled time. Google will use it to calculate the delay. - The aircraft already pulled from the gate. Google will use it to inform the user when the flight actually departed. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. If this is not set, Google will set it based on data from other sources.",
			"routing": {
				"send": {
					"property": "localEstimatedOrActualDepartureDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Local Gate Closing Date Time",
			"name": "localGateClosingDateTime",
			"type": "string",
			"default": "",
			"description": "The gate closing time as it would be printed on the boarding pass. Do not set this field if you do not want to print it in the boarding pass. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport.",
			"routing": {
				"send": {
					"property": "localGateClosingDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Local Scheduled Arrival Date Time",
			"name": "localScheduledArrivalDateTime",
			"type": "string",
			"default": "",
			"description": "The scheduled time the aircraft plans to reach the destination gate (not the runway). Note: This field should not change too close to the flight time. For updates to departure times (delays, etc), please set `localEstimatedOrActualArrivalDateTime`. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on arrival airport. If this is not set, Google will set it based on data from other sources.",
			"routing": {
				"send": {
					"property": "localScheduledArrivalDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Local Scheduled Departure Date Time",
			"name": "localScheduledDepartureDateTime",
			"type": "string",
			"default": "",
			"description": "Required. The scheduled date and time when the aircraft is expected to depart the gate (not the runway) Note: This field should not change too close to the departure time. For updates to departure times (delays, etc), please set `localEstimatedOrActualDepartureDateTime`. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport.",
			"routing": {
				"send": {
					"property": "localScheduledDepartureDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Origin",
			"name": "origin",
			"type": "json",
			"default": "{\n  \"airportNameOverride\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  }\n}",
			"description": "Required. Origin airport.",
			"routing": {
				"send": {
					"property": "origin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
					]
				}
			}
		},
		{
			"displayName": "View Unlock Requirement",
			"name": "viewUnlockRequirement",
			"type": "options",
			"default": "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED",
			"description": "View Unlock Requirement options for the boarding pass.",
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Insert"
					]
				}
			}
		},
		{
			"displayName": "GET /walletobjects/v1/flightClass/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Get"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Get"
					]
				}
			}
		},
		{
			"displayName": "PATCH /walletobjects/v1/flightClass/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Boarding And Seating Policy",
			"name": "boardingAndSeatingPolicy",
			"type": "json",
			"default": "{}",
			"description": "Policies for boarding and seating. These will inform which labels will be shown to users.",
			"routing": {
				"send": {
					"property": "boardingAndSeatingPolicy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Destination",
			"name": "destination",
			"type": "json",
			"default": "{\n  \"airportNameOverride\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  }\n}",
			"description": "Required. Destination airport.",
			"routing": {
				"send": {
					"property": "destination",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Flight Header",
			"name": "flightHeader",
			"type": "json",
			"default": "{\n  \"carrier\": {\n    \"airlineAllianceLogo\": {\n      \"contentDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      },\n      \"sourceUri\": {\n        \"localizedDescription\": {}\n      }\n    },\n    \"airlineLogo\": {},\n    \"airlineName\": {}\n  },\n  \"operatingCarrier\": {}\n}",
			"description": "Required. Information about the flight carrier and number.",
			"routing": {
				"send": {
					"property": "flightHeader",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Flight Status",
			"name": "flightStatus",
			"type": "options",
			"default": "FLIGHT_STATUS_UNSPECIFIED",
			"description": "Status of this flight. If unset, Google will compute status based on data from other sources, such as FlightStats, etc. Note: Google-computed status will not be returned in API responses.",
			"options": [
				{
					"name": "FLIGHT STATUS UNSPECIFIED",
					"value": "FLIGHT_STATUS_UNSPECIFIED"
				},
				{
					"name": "SCHEDULED",
					"value": "SCHEDULED"
				},
				{
					"name": "Scheduled",
					"value": "scheduled"
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
					"name": "LANDED",
					"value": "LANDED"
				},
				{
					"name": "Landed",
					"value": "landed"
				},
				{
					"name": "CANCELLED",
					"value": "CANCELLED"
				},
				{
					"name": "Cancelled",
					"value": "cancelled"
				},
				{
					"name": "REDIRECTED",
					"value": "REDIRECTED"
				},
				{
					"name": "Redirected",
					"value": "redirected"
				},
				{
					"name": "DIVERTED",
					"value": "DIVERTED"
				},
				{
					"name": "Diverted",
					"value": "diverted"
				}
			],
			"routing": {
				"send": {
					"property": "flightStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "string",
			"default": "",
			"description": "Identifies what kind of resource this is. Value: the fixed string `\"walletobjects#flightClass\"`.",
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Language Override",
			"name": "languageOverride",
			"type": "string",
			"default": "",
			"description": "If this field is present, boarding passes served to a user's device will always be in this language. Represents the BCP 47 language tag. Example values are \"en-US\", \"en-GB\", \"de\", or \"de-AT\".",
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Local Boarding Date Time",
			"name": "localBoardingDateTime",
			"type": "string",
			"default": "",
			"description": "The boarding time as it would be printed on the boarding pass. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. If this is not set, Google will set it based on data from other sources.",
			"routing": {
				"send": {
					"property": "localBoardingDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Local Estimated Or Actual Arrival Date Time",
			"name": "localEstimatedOrActualArrivalDateTime",
			"type": "string",
			"default": "",
			"description": "The estimated time the aircraft plans to reach the destination gate (not the runway) or the actual time it reached the gate. This field should be set if at least one of the below is true: - It differs from the scheduled time. Google will use it to calculate the delay. - The aircraft already arrived at the gate. Google will use it to inform the user that the flight has arrived at the gate. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on arrival airport. If this is not set, Google will set it based on data from other sources.",
			"routing": {
				"send": {
					"property": "localEstimatedOrActualArrivalDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Local Estimated Or Actual Departure Date Time",
			"name": "localEstimatedOrActualDepartureDateTime",
			"type": "string",
			"default": "",
			"description": "The estimated time the aircraft plans to pull from the gate or the actual time the aircraft already pulled from the gate. Note: This is not the runway time. This field should be set if at least one of the below is true: - It differs from the scheduled time. Google will use it to calculate the delay. - The aircraft already pulled from the gate. Google will use it to inform the user when the flight actually departed. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. If this is not set, Google will set it based on data from other sources.",
			"routing": {
				"send": {
					"property": "localEstimatedOrActualDepartureDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Local Gate Closing Date Time",
			"name": "localGateClosingDateTime",
			"type": "string",
			"default": "",
			"description": "The gate closing time as it would be printed on the boarding pass. Do not set this field if you do not want to print it in the boarding pass. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport.",
			"routing": {
				"send": {
					"property": "localGateClosingDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Local Scheduled Arrival Date Time",
			"name": "localScheduledArrivalDateTime",
			"type": "string",
			"default": "",
			"description": "The scheduled time the aircraft plans to reach the destination gate (not the runway). Note: This field should not change too close to the flight time. For updates to departure times (delays, etc), please set `localEstimatedOrActualArrivalDateTime`. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on arrival airport. If this is not set, Google will set it based on data from other sources.",
			"routing": {
				"send": {
					"property": "localScheduledArrivalDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Local Scheduled Departure Date Time",
			"name": "localScheduledDepartureDateTime",
			"type": "string",
			"default": "",
			"description": "Required. The scheduled date and time when the aircraft is expected to depart the gate (not the runway) Note: This field should not change too close to the departure time. For updates to departure times (delays, etc), please set `localEstimatedOrActualDepartureDateTime`. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport.",
			"routing": {
				"send": {
					"property": "localScheduledDepartureDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Origin",
			"name": "origin",
			"type": "json",
			"default": "{\n  \"airportNameOverride\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  }\n}",
			"description": "Required. Origin airport.",
			"routing": {
				"send": {
					"property": "origin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
					]
				}
			}
		},
		{
			"displayName": "View Unlock Requirement",
			"name": "viewUnlockRequirement",
			"type": "options",
			"default": "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED",
			"description": "View Unlock Requirement options for the boarding pass.",
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Patch"
					]
				}
			}
		},
		{
			"displayName": "PUT /walletobjects/v1/flightClass/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
					]
				}
			}
		},
		{
			"displayName": "Boarding And Seating Policy",
			"name": "boardingAndSeatingPolicy",
			"type": "json",
			"default": "{}",
			"description": "Policies for boarding and seating. These will inform which labels will be shown to users.",
			"routing": {
				"send": {
					"property": "boardingAndSeatingPolicy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
					]
				}
			}
		},
		{
			"displayName": "Destination",
			"name": "destination",
			"type": "json",
			"default": "{\n  \"airportNameOverride\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  }\n}",
			"description": "Required. Destination airport.",
			"routing": {
				"send": {
					"property": "destination",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
					]
				}
			}
		},
		{
			"displayName": "Flight Header",
			"name": "flightHeader",
			"type": "json",
			"default": "{\n  \"carrier\": {\n    \"airlineAllianceLogo\": {\n      \"contentDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      },\n      \"sourceUri\": {\n        \"localizedDescription\": {}\n      }\n    },\n    \"airlineLogo\": {},\n    \"airlineName\": {}\n  },\n  \"operatingCarrier\": {}\n}",
			"description": "Required. Information about the flight carrier and number.",
			"routing": {
				"send": {
					"property": "flightHeader",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
					]
				}
			}
		},
		{
			"displayName": "Flight Status",
			"name": "flightStatus",
			"type": "options",
			"default": "FLIGHT_STATUS_UNSPECIFIED",
			"description": "Status of this flight. If unset, Google will compute status based on data from other sources, such as FlightStats, etc. Note: Google-computed status will not be returned in API responses.",
			"options": [
				{
					"name": "FLIGHT STATUS UNSPECIFIED",
					"value": "FLIGHT_STATUS_UNSPECIFIED"
				},
				{
					"name": "SCHEDULED",
					"value": "SCHEDULED"
				},
				{
					"name": "Scheduled",
					"value": "scheduled"
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
					"name": "LANDED",
					"value": "LANDED"
				},
				{
					"name": "Landed",
					"value": "landed"
				},
				{
					"name": "CANCELLED",
					"value": "CANCELLED"
				},
				{
					"name": "Cancelled",
					"value": "cancelled"
				},
				{
					"name": "REDIRECTED",
					"value": "REDIRECTED"
				},
				{
					"name": "Redirected",
					"value": "redirected"
				},
				{
					"name": "DIVERTED",
					"value": "DIVERTED"
				},
				{
					"name": "Diverted",
					"value": "diverted"
				}
			],
			"routing": {
				"send": {
					"property": "flightStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "string",
			"default": "",
			"description": "Identifies what kind of resource this is. Value: the fixed string `\"walletobjects#flightClass\"`.",
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
					]
				}
			}
		},
		{
			"displayName": "Language Override",
			"name": "languageOverride",
			"type": "string",
			"default": "",
			"description": "If this field is present, boarding passes served to a user's device will always be in this language. Represents the BCP 47 language tag. Example values are \"en-US\", \"en-GB\", \"de\", or \"de-AT\".",
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
					]
				}
			}
		},
		{
			"displayName": "Local Boarding Date Time",
			"name": "localBoardingDateTime",
			"type": "string",
			"default": "",
			"description": "The boarding time as it would be printed on the boarding pass. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. If this is not set, Google will set it based on data from other sources.",
			"routing": {
				"send": {
					"property": "localBoardingDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
					]
				}
			}
		},
		{
			"displayName": "Local Estimated Or Actual Arrival Date Time",
			"name": "localEstimatedOrActualArrivalDateTime",
			"type": "string",
			"default": "",
			"description": "The estimated time the aircraft plans to reach the destination gate (not the runway) or the actual time it reached the gate. This field should be set if at least one of the below is true: - It differs from the scheduled time. Google will use it to calculate the delay. - The aircraft already arrived at the gate. Google will use it to inform the user that the flight has arrived at the gate. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on arrival airport. If this is not set, Google will set it based on data from other sources.",
			"routing": {
				"send": {
					"property": "localEstimatedOrActualArrivalDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
					]
				}
			}
		},
		{
			"displayName": "Local Estimated Or Actual Departure Date Time",
			"name": "localEstimatedOrActualDepartureDateTime",
			"type": "string",
			"default": "",
			"description": "The estimated time the aircraft plans to pull from the gate or the actual time the aircraft already pulled from the gate. Note: This is not the runway time. This field should be set if at least one of the below is true: - It differs from the scheduled time. Google will use it to calculate the delay. - The aircraft already pulled from the gate. Google will use it to inform the user when the flight actually departed. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. If this is not set, Google will set it based on data from other sources.",
			"routing": {
				"send": {
					"property": "localEstimatedOrActualDepartureDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
					]
				}
			}
		},
		{
			"displayName": "Local Gate Closing Date Time",
			"name": "localGateClosingDateTime",
			"type": "string",
			"default": "",
			"description": "The gate closing time as it would be printed on the boarding pass. Do not set this field if you do not want to print it in the boarding pass. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport.",
			"routing": {
				"send": {
					"property": "localGateClosingDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
					]
				}
			}
		},
		{
			"displayName": "Local Scheduled Arrival Date Time",
			"name": "localScheduledArrivalDateTime",
			"type": "string",
			"default": "",
			"description": "The scheduled time the aircraft plans to reach the destination gate (not the runway). Note: This field should not change too close to the flight time. For updates to departure times (delays, etc), please set `localEstimatedOrActualArrivalDateTime`. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on arrival airport. If this is not set, Google will set it based on data from other sources.",
			"routing": {
				"send": {
					"property": "localScheduledArrivalDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
					]
				}
			}
		},
		{
			"displayName": "Local Scheduled Departure Date Time",
			"name": "localScheduledDepartureDateTime",
			"type": "string",
			"default": "",
			"description": "Required. The scheduled date and time when the aircraft is expected to depart the gate (not the runway) Note: This field should not change too close to the departure time. For updates to departure times (delays, etc), please set `localEstimatedOrActualDepartureDateTime`. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport.",
			"routing": {
				"send": {
					"property": "localScheduledDepartureDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
					]
				}
			}
		},
		{
			"displayName": "Origin",
			"name": "origin",
			"type": "json",
			"default": "{\n  \"airportNameOverride\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  }\n}",
			"description": "Required. Origin airport.",
			"routing": {
				"send": {
					"property": "origin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
					]
				}
			}
		},
		{
			"displayName": "View Unlock Requirement",
			"name": "viewUnlockRequirement",
			"type": "options",
			"default": "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED",
			"description": "View Unlock Requirement options for the boarding pass.",
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Update"
					]
				}
			}
		},
		{
			"displayName": "POST /walletobjects/v1/flightClass/{resourceId}/addMessage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Addmessage"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Addmessage"
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
						"Flightclass"
					],
					"operation": [
						"Walletobjects Flightclass Addmessage"
					]
				}
			}
		},
];
