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

export class SecurePasswordStoreApplicationSettingsApplication {
    'optionalField1'?: string;
    'optionalField1Value'?: string;
    'optionalField2'?: string;
    'optionalField2Value'?: string;
    'optionalField3'?: string;
    'optionalField3Value'?: string;
    'passwordField'?: string;
    'url'?: string;
    'usernameField'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "optionalField1",
            "baseName": "optionalField1",
            "type": "string"
        },
        {
            "name": "optionalField1Value",
            "baseName": "optionalField1Value",
            "type": "string"
        },
        {
            "name": "optionalField2",
            "baseName": "optionalField2",
            "type": "string"
        },
        {
            "name": "optionalField2Value",
            "baseName": "optionalField2Value",
            "type": "string"
        },
        {
            "name": "optionalField3",
            "baseName": "optionalField3",
            "type": "string"
        },
        {
            "name": "optionalField3Value",
            "baseName": "optionalField3Value",
            "type": "string"
        },
        {
            "name": "passwordField",
            "baseName": "passwordField",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "usernameField",
            "baseName": "usernameField",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SecurePasswordStoreApplicationSettingsApplication.attributeTypeMap;
    }
}

