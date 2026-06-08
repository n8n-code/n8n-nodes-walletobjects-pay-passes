import type { INodeProperties } from 'n8n-workflow';

export const loyaltyclassDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					]
				}
			},
			"options": [
				{
					"name": "Walletobjects Loyaltyclass List",
					"value": "Walletobjects Loyaltyclass List",
					"action": "Walletobjects Loyaltyclass List",
					"description": "Returns a list of all loyalty classes for a given issuer ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/walletobjects/v1/loyaltyClass"
						}
					}
				},
				{
					"name": "Walletobjects Loyaltyclass Insert",
					"value": "Walletobjects Loyaltyclass Insert",
					"action": "Walletobjects Loyaltyclass Insert",
					"description": "Inserts an loyalty class with the given ID and properties.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/walletobjects/v1/loyaltyClass"
						}
					}
				},
				{
					"name": "Walletobjects Loyaltyclass Get",
					"value": "Walletobjects Loyaltyclass Get",
					"action": "Walletobjects Loyaltyclass Get",
					"description": "Returns the loyalty class with the given class ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/walletobjects/v1/loyaltyClass/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Loyaltyclass Patch",
					"value": "Walletobjects Loyaltyclass Patch",
					"action": "Walletobjects Loyaltyclass Patch",
					"description": "Updates the loyalty class referenced by the given class ID. This method supports patch semantics.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/walletobjects/v1/loyaltyClass/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Loyaltyclass Update",
					"value": "Walletobjects Loyaltyclass Update",
					"action": "Walletobjects Loyaltyclass Update",
					"description": "Updates the loyalty class referenced by the given class ID.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/walletobjects/v1/loyaltyClass/{{$parameter[\"resourceId\"]}}"
						}
					}
				},
				{
					"name": "Walletobjects Loyaltyclass Addmessage",
					"value": "Walletobjects Loyaltyclass Addmessage",
					"action": "Walletobjects Loyaltyclass Addmessage",
					"description": "Adds a message to the loyalty class referenced by the given class ID.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/walletobjects/v1/loyaltyClass/{{$parameter[\"resourceId\"]}}/addMessage"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /walletobjects/v1/loyaltyClass",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass List"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass List"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass List"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass List"
					]
				}
			}
		},
		{
			"displayName": "POST /walletobjects/v1/loyaltyClass",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Account Id Label",
			"name": "accountIdLabel",
			"type": "string",
			"default": "",
			"description": "The account ID label, such as \"Member ID.\" Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "accountIdLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Account Name Label",
			"name": "accountNameLabel",
			"type": "string",
			"default": "",
			"description": "The account name label, such as \"Member Name.\" Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "accountNameLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Discoverable Program",
			"name": "discoverableProgram",
			"type": "json",
			"default": "{\n  \"merchantSigninInfo\": {\n    \"signinWebsite\": {\n      \"localizedDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      }\n    }\n  },\n  \"merchantSignupInfo\": {\n    \"signupSharedDatas\": [\n      null\n    ],\n    \"signupWebsite\": {}\n  }\n}",
			"description": "Information about how a class may be discovered and instantiated from within the Android Pay app. This is done by searching for a loyalty or gift card program and scanning or manually entering.",
			"routing": {
				"send": {
					"property": "discoverableProgram",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Enable Smart Tap",
			"name": "enableSmartTap",
			"type": "boolean",
			"default": true,
			"description": "Identifies whether this class supports Smart Tap. The `redemptionIssuers` and one of object level `smartTapRedemptionLevel`, barcode.value`, or `accountId` fields must also be set up correctly in order for a pass to support Smart Tap.",
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "string",
			"default": "",
			"description": "Identifies what kind of resource this is. Value: the fixed string `\"walletobjects#loyaltyClass\"`.",
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Localized Account Id Label",
			"name": "localizedAccountIdLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Translated strings for the account_id_label. Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "localizedAccountIdLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Localized Account Name Label",
			"name": "localizedAccountNameLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Translated strings for the account_name_label. Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "localizedAccountNameLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Localized Program Name",
			"name": "localizedProgramName",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Translated strings for the program_name. The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "localizedProgramName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Localized Rewards Tier",
			"name": "localizedRewardsTier",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Translated strings for the rewards_tier. Recommended maximum length is 7 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "localizedRewardsTier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Localized Rewards Tier Label",
			"name": "localizedRewardsTierLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Translated strings for the rewards_tier_label. Recommended maximum length is 9 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "localizedRewardsTierLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Localized Secondary Rewards Tier",
			"name": "localizedSecondaryRewardsTier",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Translated strings for the secondary_rewards_tier.",
			"routing": {
				"send": {
					"property": "localizedSecondaryRewardsTier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Localized Secondary Rewards Tier Label",
			"name": "localizedSecondaryRewardsTierLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Translated strings for the secondary_rewards_tier_label.",
			"routing": {
				"send": {
					"property": "localizedSecondaryRewardsTierLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Program Logo",
			"name": "programLogo",
			"type": "json",
			"default": "{\n  \"contentDescription\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"sourceUri\": {\n    \"localizedDescription\": {}\n  }\n}",
			"description": "Wrapping type for Google hosted images. Next ID: 7",
			"routing": {
				"send": {
					"property": "programLogo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Program Name",
			"name": "programName",
			"type": "string",
			"default": "",
			"description": "Required. The program name, such as \"Adam's Apparel\". The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "programName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Redemption Issuers",
			"name": "redemptionIssuers",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and one of object level `smartTapRedemptionValue`, barcode.value`, or `accountId` fields must also be set up correctly in order for a pass to support Smart Tap.",
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Rewards Tier",
			"name": "rewardsTier",
			"type": "string",
			"default": "",
			"description": "The rewards tier, such as \"Gold\" or \"Platinum.\" Recommended maximum length is 7 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "rewardsTier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Rewards Tier Label",
			"name": "rewardsTierLabel",
			"type": "string",
			"default": "",
			"description": "The rewards tier label, such as \"Rewards Tier.\" Recommended maximum length is 9 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "rewardsTierLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Secondary Rewards Tier",
			"name": "secondaryRewardsTier",
			"type": "string",
			"default": "",
			"description": "The secondary rewards tier, such as \"Gold\" or \"Platinum.\"",
			"routing": {
				"send": {
					"property": "secondaryRewardsTier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
					]
				}
			}
		},
		{
			"displayName": "Secondary Rewards Tier Label",
			"name": "secondaryRewardsTierLabel",
			"type": "string",
			"default": "",
			"description": "The secondary rewards tier label, such as \"Rewards Tier.\"",
			"routing": {
				"send": {
					"property": "secondaryRewardsTierLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
					]
				}
			}
		},
		{
			"displayName": "View Unlock Requirement",
			"name": "viewUnlockRequirement",
			"type": "options",
			"default": "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED",
			"description": "View Unlock Requirement options for the loyalty card.",
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Insert"
					]
				}
			}
		},
		{
			"displayName": "GET /walletobjects/v1/loyaltyClass/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Get"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Get"
					]
				}
			}
		},
		{
			"displayName": "PATCH /walletobjects/v1/loyaltyClass/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Account Id Label",
			"name": "accountIdLabel",
			"type": "string",
			"default": "",
			"description": "The account ID label, such as \"Member ID.\" Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "accountIdLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Account Name Label",
			"name": "accountNameLabel",
			"type": "string",
			"default": "",
			"description": "The account name label, such as \"Member Name.\" Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "accountNameLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Discoverable Program",
			"name": "discoverableProgram",
			"type": "json",
			"default": "{\n  \"merchantSigninInfo\": {\n    \"signinWebsite\": {\n      \"localizedDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      }\n    }\n  },\n  \"merchantSignupInfo\": {\n    \"signupSharedDatas\": [\n      null\n    ],\n    \"signupWebsite\": {}\n  }\n}",
			"description": "Information about how a class may be discovered and instantiated from within the Android Pay app. This is done by searching for a loyalty or gift card program and scanning or manually entering.",
			"routing": {
				"send": {
					"property": "discoverableProgram",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Enable Smart Tap",
			"name": "enableSmartTap",
			"type": "boolean",
			"default": true,
			"description": "Identifies whether this class supports Smart Tap. The `redemptionIssuers` and one of object level `smartTapRedemptionLevel`, barcode.value`, or `accountId` fields must also be set up correctly in order for a pass to support Smart Tap.",
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "string",
			"default": "",
			"description": "Identifies what kind of resource this is. Value: the fixed string `\"walletobjects#loyaltyClass\"`.",
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Localized Account Id Label",
			"name": "localizedAccountIdLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Translated strings for the account_id_label. Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "localizedAccountIdLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Localized Account Name Label",
			"name": "localizedAccountNameLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Translated strings for the account_name_label. Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "localizedAccountNameLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Localized Program Name",
			"name": "localizedProgramName",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Translated strings for the program_name. The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "localizedProgramName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Localized Rewards Tier",
			"name": "localizedRewardsTier",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Translated strings for the rewards_tier. Recommended maximum length is 7 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "localizedRewardsTier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Localized Rewards Tier Label",
			"name": "localizedRewardsTierLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Translated strings for the rewards_tier_label. Recommended maximum length is 9 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "localizedRewardsTierLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Localized Secondary Rewards Tier",
			"name": "localizedSecondaryRewardsTier",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Translated strings for the secondary_rewards_tier.",
			"routing": {
				"send": {
					"property": "localizedSecondaryRewardsTier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Localized Secondary Rewards Tier Label",
			"name": "localizedSecondaryRewardsTierLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Translated strings for the secondary_rewards_tier_label.",
			"routing": {
				"send": {
					"property": "localizedSecondaryRewardsTierLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Program Logo",
			"name": "programLogo",
			"type": "json",
			"default": "{\n  \"contentDescription\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"sourceUri\": {\n    \"localizedDescription\": {}\n  }\n}",
			"description": "Wrapping type for Google hosted images. Next ID: 7",
			"routing": {
				"send": {
					"property": "programLogo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Program Name",
			"name": "programName",
			"type": "string",
			"default": "",
			"description": "Required. The program name, such as \"Adam's Apparel\". The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "programName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Redemption Issuers",
			"name": "redemptionIssuers",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and one of object level `smartTapRedemptionValue`, barcode.value`, or `accountId` fields must also be set up correctly in order for a pass to support Smart Tap.",
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Rewards Tier",
			"name": "rewardsTier",
			"type": "string",
			"default": "",
			"description": "The rewards tier, such as \"Gold\" or \"Platinum.\" Recommended maximum length is 7 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "rewardsTier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Rewards Tier Label",
			"name": "rewardsTierLabel",
			"type": "string",
			"default": "",
			"description": "The rewards tier label, such as \"Rewards Tier.\" Recommended maximum length is 9 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "rewardsTierLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Secondary Rewards Tier",
			"name": "secondaryRewardsTier",
			"type": "string",
			"default": "",
			"description": "The secondary rewards tier, such as \"Gold\" or \"Platinum.\"",
			"routing": {
				"send": {
					"property": "secondaryRewardsTier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
					]
				}
			}
		},
		{
			"displayName": "Secondary Rewards Tier Label",
			"name": "secondaryRewardsTierLabel",
			"type": "string",
			"default": "",
			"description": "The secondary rewards tier label, such as \"Rewards Tier.\"",
			"routing": {
				"send": {
					"property": "secondaryRewardsTierLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
					]
				}
			}
		},
		{
			"displayName": "View Unlock Requirement",
			"name": "viewUnlockRequirement",
			"type": "options",
			"default": "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED",
			"description": "View Unlock Requirement options for the loyalty card.",
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Patch"
					]
				}
			}
		},
		{
			"displayName": "PUT /walletobjects/v1/loyaltyClass/{resourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
					]
				}
			}
		},
		{
			"displayName": "Account Id Label",
			"name": "accountIdLabel",
			"type": "string",
			"default": "",
			"description": "The account ID label, such as \"Member ID.\" Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "accountIdLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
					]
				}
			}
		},
		{
			"displayName": "Account Name Label",
			"name": "accountNameLabel",
			"type": "string",
			"default": "",
			"description": "The account name label, such as \"Member Name.\" Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "accountNameLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
					]
				}
			}
		},
		{
			"displayName": "Discoverable Program",
			"name": "discoverableProgram",
			"type": "json",
			"default": "{\n  \"merchantSigninInfo\": {\n    \"signinWebsite\": {\n      \"localizedDescription\": {\n        \"defaultValue\": {},\n        \"translatedValues\": [\n          {}\n        ]\n      }\n    }\n  },\n  \"merchantSignupInfo\": {\n    \"signupSharedDatas\": [\n      null\n    ],\n    \"signupWebsite\": {}\n  }\n}",
			"description": "Information about how a class may be discovered and instantiated from within the Android Pay app. This is done by searching for a loyalty or gift card program and scanning or manually entering.",
			"routing": {
				"send": {
					"property": "discoverableProgram",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
					]
				}
			}
		},
		{
			"displayName": "Enable Smart Tap",
			"name": "enableSmartTap",
			"type": "boolean",
			"default": true,
			"description": "Identifies whether this class supports Smart Tap. The `redemptionIssuers` and one of object level `smartTapRedemptionLevel`, barcode.value`, or `accountId` fields must also be set up correctly in order for a pass to support Smart Tap.",
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "string",
			"default": "",
			"description": "Identifies what kind of resource this is. Value: the fixed string `\"walletobjects#loyaltyClass\"`.",
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
					]
				}
			}
		},
		{
			"displayName": "Localized Account Id Label",
			"name": "localizedAccountIdLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Translated strings for the account_id_label. Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "localizedAccountIdLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
					]
				}
			}
		},
		{
			"displayName": "Localized Account Name Label",
			"name": "localizedAccountNameLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Translated strings for the account_name_label. Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "localizedAccountNameLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
					]
				}
			}
		},
		{
			"displayName": "Localized Program Name",
			"name": "localizedProgramName",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Translated strings for the program_name. The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "localizedProgramName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
					]
				}
			}
		},
		{
			"displayName": "Localized Rewards Tier",
			"name": "localizedRewardsTier",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Translated strings for the rewards_tier. Recommended maximum length is 7 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "localizedRewardsTier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
					]
				}
			}
		},
		{
			"displayName": "Localized Rewards Tier Label",
			"name": "localizedRewardsTierLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Translated strings for the rewards_tier_label. Recommended maximum length is 9 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "localizedRewardsTierLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
					]
				}
			}
		},
		{
			"displayName": "Localized Secondary Rewards Tier",
			"name": "localizedSecondaryRewardsTier",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Translated strings for the secondary_rewards_tier.",
			"routing": {
				"send": {
					"property": "localizedSecondaryRewardsTier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
					]
				}
			}
		},
		{
			"displayName": "Localized Secondary Rewards Tier Label",
			"name": "localizedSecondaryRewardsTierLabel",
			"type": "json",
			"default": "{\n  \"defaultValue\": {},\n  \"translatedValues\": [\n    {}\n  ]\n}",
			"description": "Translated strings for the secondary_rewards_tier_label.",
			"routing": {
				"send": {
					"property": "localizedSecondaryRewardsTierLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
					]
				}
			}
		},
		{
			"displayName": "Program Logo",
			"name": "programLogo",
			"type": "json",
			"default": "{\n  \"contentDescription\": {\n    \"defaultValue\": {},\n    \"translatedValues\": [\n      {}\n    ]\n  },\n  \"sourceUri\": {\n    \"localizedDescription\": {}\n  }\n}",
			"description": "Wrapping type for Google hosted images. Next ID: 7",
			"routing": {
				"send": {
					"property": "programLogo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
					]
				}
			}
		},
		{
			"displayName": "Program Name",
			"name": "programName",
			"type": "string",
			"default": "",
			"description": "Required. The program name, such as \"Adam's Apparel\". The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "programName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
					]
				}
			}
		},
		{
			"displayName": "Redemption Issuers",
			"name": "redemptionIssuers",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and one of object level `smartTapRedemptionValue`, barcode.value`, or `accountId` fields must also be set up correctly in order for a pass to support Smart Tap.",
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
					]
				}
			}
		},
		{
			"displayName": "Rewards Tier",
			"name": "rewardsTier",
			"type": "string",
			"default": "",
			"description": "The rewards tier, such as \"Gold\" or \"Platinum.\" Recommended maximum length is 7 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "rewardsTier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
					]
				}
			}
		},
		{
			"displayName": "Rewards Tier Label",
			"name": "rewardsTierLabel",
			"type": "string",
			"default": "",
			"description": "The rewards tier label, such as \"Rewards Tier.\" Recommended maximum length is 9 characters to ensure full string is displayed on smaller screens.",
			"routing": {
				"send": {
					"property": "rewardsTierLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
					]
				}
			}
		},
		{
			"displayName": "Secondary Rewards Tier",
			"name": "secondaryRewardsTier",
			"type": "string",
			"default": "",
			"description": "The secondary rewards tier, such as \"Gold\" or \"Platinum.\"",
			"routing": {
				"send": {
					"property": "secondaryRewardsTier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
					]
				}
			}
		},
		{
			"displayName": "Secondary Rewards Tier Label",
			"name": "secondaryRewardsTierLabel",
			"type": "string",
			"default": "",
			"description": "The secondary rewards tier label, such as \"Rewards Tier.\"",
			"routing": {
				"send": {
					"property": "secondaryRewardsTierLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
					]
				}
			}
		},
		{
			"displayName": "View Unlock Requirement",
			"name": "viewUnlockRequirement",
			"type": "options",
			"default": "VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED",
			"description": "View Unlock Requirement options for the loyalty card.",
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Update"
					]
				}
			}
		},
		{
			"displayName": "POST /walletobjects/v1/loyaltyClass/{resourceId}/addMessage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Addmessage"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Addmessage"
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
						"Loyaltyclass"
					],
					"operation": [
						"Walletobjects Loyaltyclass Addmessage"
					]
				}
			}
		},
];
