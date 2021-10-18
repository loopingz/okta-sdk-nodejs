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
import { PasswordCredential } from './passwordCredential';

export class ChangePasswordRequest {
    'newPassword'?: PasswordCredential;
    'oldPassword'?: PasswordCredential;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "newPassword",
            "baseName": "newPassword",
            "type": "PasswordCredential"
        },
        {
            "name": "oldPassword",
            "baseName": "oldPassword",
            "type": "PasswordCredential"
        }    ];

    static getAttributeTypeMap() {
        return ChangePasswordRequest.attributeTypeMap;
    }
}

