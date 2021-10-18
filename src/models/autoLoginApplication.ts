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
import { AutoLoginApplicationSettings } from './autoLoginApplicationSettings';
import { SchemeApplicationCredentials } from './schemeApplicationCredentials';

export class AutoLoginApplication {
    'credentials'?: SchemeApplicationCredentials;
    'settings'?: AutoLoginApplicationSettings;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "credentials",
            "baseName": "credentials",
            "type": "SchemeApplicationCredentials"
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "AutoLoginApplicationSettings"
        }    ];

    static getAttributeTypeMap() {
        return AutoLoginApplication.attributeTypeMap;
    }
}

