/**
 * Okta API
 * Allows customers to easily access the Okta API
 *
 * The version of the OpenAPI document: 2.7.0
 * Contact: devex-public@okta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '.';
import { GroupSchemaDefinitions } from './groupSchemaDefinitions';
import { UserSchemaProperties } from './userSchemaProperties';

export class GroupSchema {
    '$schema'?: string;
    'links'?: { [key: string]: object; };
    'created'?: string;
    'definitions'?: GroupSchemaDefinitions;
    'description'?: string;
    'id'?: string;
    'lastUpdated'?: string;
    'name'?: string;
    'properties'?: UserSchemaProperties;
    'title'?: string;
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "$schema",
            "baseName": "$schema",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "string"
        },
        {
            "name": "definitions",
            "baseName": "definitions",
            "type": "GroupSchemaDefinitions"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "lastUpdated",
            "baseName": "lastUpdated",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "UserSchemaProperties"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GroupSchema.attributeTypeMap;
    }
}

