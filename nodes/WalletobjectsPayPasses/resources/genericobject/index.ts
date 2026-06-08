import type { INodeProperties } from 'n8n-workflow';

export const genericobjectDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Genericobject"
					]
				}
			},
			"options": [
				{
					"name": "Walletobjects Genericobject List",
					"value": "Walletobjects Genericobject List",
					"action": "Walletobjects Genericobject List",
					"description": "Returns a list of all generic objects for a given issuer ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/walletobjects/v1/genericObject"
						}
					}
				},
				{
					"name": "Walletobjects Genericobject Insert",
					"value": "Walletobjects Genericobject Insert",
					"action": "Walletobjects Genericobject Insert",
					"description": "Inserts a generic object with the given ID and properties.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/walletobjects/v1/genericObject"
						}
					}
				},
				{
					"name": "Walletobjects Genericobject Get",
					"value": "Walletobjects Genericobject Get",
					"action": "Walletobjects Genericobject Get",
					"description": "Returns the generic object with the given object ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/walletobjects/v1/genericObject/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Genericobject Patch",
					"value": "Walletobjects Genericobject Patch",
					"action": "Walletobjects Genericobject Patch",
					"description": "Updates the generic object referenced by the given object ID. This method supports patch semantics.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/walletobjects/v1/genericObject/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Genericobject Update",
					"value": "Walletobjects Genericobject Update",
					"action": "Walletobjects Genericobject Update",
					"description": "Updates the generic object referenced by the given object ID.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/walletobjects/v1/genericObject/{{$parameter[\"resourceId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /walletobjects/v1/genericObject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject List"
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject List"
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject List"
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject List"
					]
				}
			}
		},
		{
			"displayName": "POST /walletobjects/v1/genericObject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Insert"
					]
				}
			}
		},
		{
			"displayName": "App Link Data",
			"name": "appLinkData",
			"type": "json",
			"default": "{\n  \"androidAppLinkInfo\": {\n    \"appLogoImage\": {\n      \"contentDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      },\n      \"sourceUri\": {\n        \"localizedDescription\": {}\n      }\n    },\n    \"appTarget\": {\n      \"targetUri\": {\n        \"localizedDescription\": {}\n      }\n    },\n    \"description\": {},\n    \"title\": {}\n  },\n  \"iosAppLinkInfo\": {},\n  \"webAppLinkInfo\": {}\n}",
			"description": "Information about the partner app link. The maximum number of these fields displayed is 10.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Barcode",
			"name": "barcode",
			"type": "json",
			"default": "{\n  \"showCodeText\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  }\n}",
			"description": "The barcode type and value. If pass does not have a barcode, we can allow the issuer to set Barcode.alternate_text and display just that.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Card Title",
			"name": "cardTitle",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Required. The header of the pass. This is usually the Business name such as \"XXX Gym\", \"AAA Insurance\". This field is required and appears in the header row at the very top of the pass.",
			"routing": {
				"send": {
					"property": "cardTitle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Class Id",
			"name": "classId",
			"type": "string",
			"default": "",
			"description": "Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Generic Type",
			"name": "genericType",
			"type": "options",
			"default": "GENERIC_TYPE_UNSPECIFIED",
			"description": "Specify which `GenericType` the card belongs to. Deprecated.",
			"options": [
				{
					"name": "GENERIC TYPE UNSPECIFIED",
					"value": "GENERIC_TYPE_UNSPECIFIED"
				}
			],
			"routing": {
				"send": {
					"property": "genericType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Insert"
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Insert"
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Header",
			"name": "header",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Required. The title of the pass, such as \"50% off coupon\" or \"Library card\" or \"Voucher\". This field is required and appears in the title row of the pass detail view.",
			"routing": {
				"send": {
					"property": "header",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Insert"
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Hex Background Color",
			"name": "hexBackgroundColor",
			"type": "string",
			"default": "",
			"description": "The background color for the card. If not set, the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used and if logo is not set, a color would be chosen by Google.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Image Modules Data",
			"name": "imageModulesData",
			"type": "json",
			"default": "[\n  {\n    \"mainImage\": {\n      \"contentDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      },\n      \"sourceUri\": {\n        \"localizedDescription\": {}\n      }\n    }\n  }\n]",
			"description": "Image module data. Only one of the image from class and one from object level will be rendered when both set.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Links Module Data",
			"name": "linksModuleData",
			"type": "json",
			"default": "{\n  \"uris\": [\n    {\n      \"localizedDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      }\n    }\n  ]\n}",
			"description": "Links module data. If `linksModuleData` is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Insert"
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Notifications",
			"name": "notifications",
			"type": "json",
			"default": "{\n  \"expiryNotification\": {},\n  \"upcomingNotification\": {}\n}",
			"description": "Indicates if the object needs to have notification enabled. We support only one of ExpiryNotification/UpcomingNotification. `expiryNotification` takes precedence over `upcomingNotification`. In other words if `expiryNotification` is set, we ignore the `upcomingNotification` field.",
			"routing": {
				"send": {
					"property": "notifications",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Insert"
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Rotating Barcode",
			"name": "rotatingBarcode",
			"type": "json",
			"default": "{\n  \"showCodeText\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"totpDetails\": {\n    \"parameters\": [\n      {}\n    ]\n  }\n}",
			"description": "The rotating barcode settings/details.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Insert"
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Insert"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"type": "options",
			"default": "STATE_UNSPECIFIED",
			"description": "The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the \"Expired passes\" section. If this is not provided, the object would be considered `ACTIVE`.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Subheader",
			"name": "subheader",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "The title label of the pass, such as location where this pass can be used. Appears right above the title in the title row in the pass detail view.",
			"routing": {
				"send": {
					"property": "subheader",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Text Modules Data",
			"name": "textModulesData",
			"type": "json",
			"default": "[\n  {\n    \"localizedBody\": {\n      \"defaultValue\": {},\n      \"translatedValues\": [\n        {}\n      ]\n    },\n    \"localizedHeader\": {}\n  }\n]",
			"description": "Text module data. If `textModulesData` is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Insert"
					]
				}
			}
		},
		{
			"displayName": "Valid Time Interval",
			"name": "validTimeInterval",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"description": "The time period this object will be considered valid or usable. When the time period is passed, the object will be considered expired, which will affect the rendering on user's devices.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Insert"
					]
				}
			}
		},
		{
			"displayName": "GET /walletobjects/v1/genericObject/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Get"
					]
				}
			}
		},
		{
			"displayName": "Resource Id",
			"name": "resourceId",
			"required": true,
			"description": "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Get"
					]
				}
			}
		},
		{
			"displayName": "PATCH /walletobjects/v1/genericObject/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Resource Id",
			"name": "resourceId",
			"required": true,
			"description": "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Patch"
					]
				}
			}
		},
		{
			"displayName": "App Link Data",
			"name": "appLinkData",
			"type": "json",
			"default": "{\n  \"androidAppLinkInfo\": {\n    \"appLogoImage\": {\n      \"contentDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      },\n      \"sourceUri\": {\n        \"localizedDescription\": {}\n      }\n    },\n    \"appTarget\": {\n      \"targetUri\": {\n        \"localizedDescription\": {}\n      }\n    },\n    \"description\": {},\n    \"title\": {}\n  },\n  \"iosAppLinkInfo\": {},\n  \"webAppLinkInfo\": {}\n}",
			"description": "Information about the partner app link. The maximum number of these fields displayed is 10.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Barcode",
			"name": "barcode",
			"type": "json",
			"default": "{\n  \"showCodeText\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  }\n}",
			"description": "The barcode type and value. If pass does not have a barcode, we can allow the issuer to set Barcode.alternate_text and display just that.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Card Title",
			"name": "cardTitle",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Required. The header of the pass. This is usually the Business name such as \"XXX Gym\", \"AAA Insurance\". This field is required and appears in the header row at the very top of the pass.",
			"routing": {
				"send": {
					"property": "cardTitle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Class Id",
			"name": "classId",
			"type": "string",
			"default": "",
			"description": "Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Generic Type",
			"name": "genericType",
			"type": "options",
			"default": "GENERIC_TYPE_UNSPECIFIED",
			"description": "Specify which `GenericType` the card belongs to. Deprecated.",
			"options": [
				{
					"name": "GENERIC TYPE UNSPECIFIED",
					"value": "GENERIC_TYPE_UNSPECIFIED"
				}
			],
			"routing": {
				"send": {
					"property": "genericType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Patch"
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Patch"
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Header",
			"name": "header",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Required. The title of the pass, such as \"50% off coupon\" or \"Library card\" or \"Voucher\". This field is required and appears in the title row of the pass detail view.",
			"routing": {
				"send": {
					"property": "header",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Patch"
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Hex Background Color",
			"name": "hexBackgroundColor",
			"type": "string",
			"default": "",
			"description": "The background color for the card. If not set, the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used and if logo is not set, a color would be chosen by Google.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Image Modules Data",
			"name": "imageModulesData",
			"type": "json",
			"default": "[\n  {\n    \"mainImage\": {\n      \"contentDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      },\n      \"sourceUri\": {\n        \"localizedDescription\": {}\n      }\n    }\n  }\n]",
			"description": "Image module data. Only one of the image from class and one from object level will be rendered when both set.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Links Module Data",
			"name": "linksModuleData",
			"type": "json",
			"default": "{\n  \"uris\": [\n    {\n      \"localizedDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      }\n    }\n  ]\n}",
			"description": "Links module data. If `linksModuleData` is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Patch"
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Notifications",
			"name": "notifications",
			"type": "json",
			"default": "{\n  \"expiryNotification\": {},\n  \"upcomingNotification\": {}\n}",
			"description": "Indicates if the object needs to have notification enabled. We support only one of ExpiryNotification/UpcomingNotification. `expiryNotification` takes precedence over `upcomingNotification`. In other words if `expiryNotification` is set, we ignore the `upcomingNotification` field.",
			"routing": {
				"send": {
					"property": "notifications",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Patch"
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Rotating Barcode",
			"name": "rotatingBarcode",
			"type": "json",
			"default": "{\n  \"showCodeText\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"totpDetails\": {\n    \"parameters\": [\n      {}\n    ]\n  }\n}",
			"description": "The rotating barcode settings/details.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Patch"
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Patch"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"type": "options",
			"default": "STATE_UNSPECIFIED",
			"description": "The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the \"Expired passes\" section. If this is not provided, the object would be considered `ACTIVE`.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Subheader",
			"name": "subheader",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "The title label of the pass, such as location where this pass can be used. Appears right above the title in the title row in the pass detail view.",
			"routing": {
				"send": {
					"property": "subheader",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Text Modules Data",
			"name": "textModulesData",
			"type": "json",
			"default": "[\n  {\n    \"localizedBody\": {\n      \"defaultValue\": {},\n      \"translatedValues\": [\n        {}\n      ]\n    },\n    \"localizedHeader\": {}\n  }\n]",
			"description": "Text module data. If `textModulesData` is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Patch"
					]
				}
			}
		},
		{
			"displayName": "Valid Time Interval",
			"name": "validTimeInterval",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"description": "The time period this object will be considered valid or usable. When the time period is passed, the object will be considered expired, which will affect the rendering on user's devices.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Patch"
					]
				}
			}
		},
		{
			"displayName": "PUT /walletobjects/v1/genericObject/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Update"
					]
				}
			}
		},
		{
			"displayName": "Resource Id",
			"name": "resourceId",
			"required": true,
			"description": "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Update"
					]
				}
			}
		},
		{
			"displayName": "App Link Data",
			"name": "appLinkData",
			"type": "json",
			"default": "{\n  \"androidAppLinkInfo\": {\n    \"appLogoImage\": {\n      \"contentDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      },\n      \"sourceUri\": {\n        \"localizedDescription\": {}\n      }\n    },\n    \"appTarget\": {\n      \"targetUri\": {\n        \"localizedDescription\": {}\n      }\n    },\n    \"description\": {},\n    \"title\": {}\n  },\n  \"iosAppLinkInfo\": {},\n  \"webAppLinkInfo\": {}\n}",
			"description": "Information about the partner app link. The maximum number of these fields displayed is 10.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Update"
					]
				}
			}
		},
		{
			"displayName": "Barcode",
			"name": "barcode",
			"type": "json",
			"default": "{\n  \"showCodeText\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  }\n}",
			"description": "The barcode type and value. If pass does not have a barcode, we can allow the issuer to set Barcode.alternate_text and display just that.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Update"
					]
				}
			}
		},
		{
			"displayName": "Card Title",
			"name": "cardTitle",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Required. The header of the pass. This is usually the Business name such as \"XXX Gym\", \"AAA Insurance\". This field is required and appears in the header row at the very top of the pass.",
			"routing": {
				"send": {
					"property": "cardTitle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Update"
					]
				}
			}
		},
		{
			"displayName": "Class Id",
			"name": "classId",
			"type": "string",
			"default": "",
			"description": "Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Update"
					]
				}
			}
		},
		{
			"displayName": "Generic Type",
			"name": "genericType",
			"type": "options",
			"default": "GENERIC_TYPE_UNSPECIFIED",
			"description": "Specify which `GenericType` the card belongs to. Deprecated.",
			"options": [
				{
					"name": "GENERIC TYPE UNSPECIFIED",
					"value": "GENERIC_TYPE_UNSPECIFIED"
				}
			],
			"routing": {
				"send": {
					"property": "genericType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Update"
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Update"
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Update"
					]
				}
			}
		},
		{
			"displayName": "Header",
			"name": "header",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Required. The title of the pass, such as \"50% off coupon\" or \"Library card\" or \"Voucher\". This field is required and appears in the title row of the pass detail view.",
			"routing": {
				"send": {
					"property": "header",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Update"
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Update"
					]
				}
			}
		},
		{
			"displayName": "Hex Background Color",
			"name": "hexBackgroundColor",
			"type": "string",
			"default": "",
			"description": "The background color for the card. If not set, the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used and if logo is not set, a color would be chosen by Google.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Update"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Update"
					]
				}
			}
		},
		{
			"displayName": "Image Modules Data",
			"name": "imageModulesData",
			"type": "json",
			"default": "[\n  {\n    \"mainImage\": {\n      \"contentDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      },\n      \"sourceUri\": {\n        \"localizedDescription\": {}\n      }\n    }\n  }\n]",
			"description": "Image module data. Only one of the image from class and one from object level will be rendered when both set.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Update"
					]
				}
			}
		},
		{
			"displayName": "Links Module Data",
			"name": "linksModuleData",
			"type": "json",
			"default": "{\n  \"uris\": [\n    {\n      \"localizedDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      }\n    }\n  ]\n}",
			"description": "Links module data. If `linksModuleData` is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Update"
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Update"
					]
				}
			}
		},
		{
			"displayName": "Notifications",
			"name": "notifications",
			"type": "json",
			"default": "{\n  \"expiryNotification\": {},\n  \"upcomingNotification\": {}\n}",
			"description": "Indicates if the object needs to have notification enabled. We support only one of ExpiryNotification/UpcomingNotification. `expiryNotification` takes precedence over `upcomingNotification`. In other words if `expiryNotification` is set, we ignore the `upcomingNotification` field.",
			"routing": {
				"send": {
					"property": "notifications",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Update"
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Update"
					]
				}
			}
		},
		{
			"displayName": "Rotating Barcode",
			"name": "rotatingBarcode",
			"type": "json",
			"default": "{\n  \"showCodeText\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"totpDetails\": {\n    \"parameters\": [\n      {}\n    ]\n  }\n}",
			"description": "The rotating barcode settings/details.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Update"
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Update"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"type": "options",
			"default": "STATE_UNSPECIFIED",
			"description": "The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the \"Expired passes\" section. If this is not provided, the object would be considered `ACTIVE`.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Update"
					]
				}
			}
		},
		{
			"displayName": "Subheader",
			"name": "subheader",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "The title label of the pass, such as location where this pass can be used. Appears right above the title in the title row in the pass detail view.",
			"routing": {
				"send": {
					"property": "subheader",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Update"
					]
				}
			}
		},
		{
			"displayName": "Text Modules Data",
			"name": "textModulesData",
			"type": "json",
			"default": "[\n  {\n    \"localizedBody\": {\n      \"defaultValue\": {},\n      \"translatedValues\": [\n        {}\n      ]\n    },\n    \"localizedHeader\": {}\n  }\n]",
			"description": "Text module data. If `textModulesData` is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Update"
					]
				}
			}
		},
		{
			"displayName": "Valid Time Interval",
			"name": "validTimeInterval",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"description": "The time period this object will be considered valid or usable. When the time period is passed, the object will be considered expired, which will affect the rendering on user's devices.",
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
						"Genericobject"
					],
					"operation": [
						"Walletobjects Genericobject Update"
					]
				}
			}
		},
];
