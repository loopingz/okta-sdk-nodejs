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

export class DomainLinks {
    'certificate'?: object;
    'self'?: object;
    'verify'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "certificate",
            "baseName": "certificate",
            "type": "object"
        },
        {
            "name": "self",
            "baseName": "self",
            "type": "object"
        },
        {
            "name": "verify",
            "baseName": "verify",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return DomainLinks.attributeTypeMap;
    }
}

