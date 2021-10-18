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
import { Scope } from './scope';

export class TrustedOrigin {
    'links'?: { [key: string]: object; };
    'created'?: Date;
    'createdBy'?: string;
    'id'?: string;
    'lastUpdated'?: Date;
    'lastUpdatedBy'?: string;
    'name'?: string;
    'origin'?: string;
    'scopes'?: Array<Scope>;
    'status'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "links",
            "baseName": "_links",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
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
            "type": "Date"
        },
        {
            "name": "lastUpdatedBy",
            "baseName": "lastUpdatedBy",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "origin",
            "baseName": "origin",
            "type": "string"
        },
        {
            "name": "scopes",
            "baseName": "scopes",
            "type": "Array<Scope>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TrustedOrigin.attributeTypeMap;
    }
}

