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
import { LogGeolocation } from './logGeolocation';

export class LogGeographicalContext {
    'city'?: string;
    'country'?: string;
    'geolocation'?: LogGeolocation;
    'postalCode'?: string;
    'state'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "geolocation",
            "baseName": "geolocation",
            "type": "LogGeolocation"
        },
        {
            "name": "postalCode",
            "baseName": "postalCode",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return LogGeographicalContext.attributeTypeMap;
    }
}

