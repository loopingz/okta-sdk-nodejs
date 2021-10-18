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
import { DomainResponse } from './domainResponse';

export class DomainListResponse {
    'domains'?: Array<DomainResponse>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "domains",
            "baseName": "domains",
            "type": "Array<DomainResponse>"
        }    ];

    static getAttributeTypeMap() {
        return DomainListResponse.attributeTypeMap;
    }
}

