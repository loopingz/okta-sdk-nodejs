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
import { GroupSchemaBaseProperties } from './groupSchemaBaseProperties';

export class GroupSchemaBase {
    'id'?: string;
    'properties'?: GroupSchemaBaseProperties;
    'required'?: Array<string>;
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "GroupSchemaBaseProperties"
        },
        {
            "name": "required",
            "baseName": "required",
            "type": "Array<string>"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GroupSchemaBase.attributeTypeMap;
    }
}

