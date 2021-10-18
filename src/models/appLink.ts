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

export class AppLink {
    'appAssignmentId'?: string;
    'appInstanceId'?: string;
    'appName'?: string;
    'credentialsSetup'?: boolean;
    'hidden'?: boolean;
    'id'?: string;
    'label'?: string;
    'linkUrl'?: string;
    'logoUrl'?: string;
    'sortOrder'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "appAssignmentId",
            "baseName": "appAssignmentId",
            "type": "string"
        },
        {
            "name": "appInstanceId",
            "baseName": "appInstanceId",
            "type": "string"
        },
        {
            "name": "appName",
            "baseName": "appName",
            "type": "string"
        },
        {
            "name": "credentialsSetup",
            "baseName": "credentialsSetup",
            "type": "boolean"
        },
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "linkUrl",
            "baseName": "linkUrl",
            "type": "string"
        },
        {
            "name": "logoUrl",
            "baseName": "logoUrl",
            "type": "string"
        },
        {
            "name": "sortOrder",
            "baseName": "sortOrder",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AppLink.attributeTypeMap;
    }
}

