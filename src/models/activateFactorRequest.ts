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

export class ActivateFactorRequest {
    'attestation'?: string;
    'clientData'?: string;
    'passCode'?: string;
    'registrationData'?: string;
    'stateToken'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attestation",
            "baseName": "attestation",
            "type": "string"
        },
        {
            "name": "clientData",
            "baseName": "clientData",
            "type": "string"
        },
        {
            "name": "passCode",
            "baseName": "passCode",
            "type": "string"
        },
        {
            "name": "registrationData",
            "baseName": "registrationData",
            "type": "string"
        },
        {
            "name": "stateToken",
            "baseName": "stateToken",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ActivateFactorRequest.attributeTypeMap;
    }
}

