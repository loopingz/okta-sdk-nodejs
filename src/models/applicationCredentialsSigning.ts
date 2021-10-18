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
import { ApplicationCredentialsSigningUse } from './applicationCredentialsSigningUse';

export class ApplicationCredentialsSigning {
    'kid'?: string;
    'lastRotated'?: Date;
    'nextRotation'?: Date;
    'rotationMode'?: string;
    'use'?: ApplicationCredentialsSigningUse;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "kid",
            "baseName": "kid",
            "type": "string"
        },
        {
            "name": "lastRotated",
            "baseName": "lastRotated",
            "type": "Date"
        },
        {
            "name": "nextRotation",
            "baseName": "nextRotation",
            "type": "Date"
        },
        {
            "name": "rotationMode",
            "baseName": "rotationMode",
            "type": "string"
        },
        {
            "name": "use",
            "baseName": "use",
            "type": "ApplicationCredentialsSigningUse"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationCredentialsSigning.attributeTypeMap;
    }
}

