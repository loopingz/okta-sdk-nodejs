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
import { PasswordPolicyRecoveryEmailProperties } from './passwordPolicyRecoveryEmailProperties';

export class PasswordPolicyRecoveryEmail {
    'properties'?: PasswordPolicyRecoveryEmailProperties;
    'status'?: PasswordPolicyRecoveryEmail.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "properties",
            "baseName": "properties",
            "type": "PasswordPolicyRecoveryEmailProperties"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PasswordPolicyRecoveryEmail.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return PasswordPolicyRecoveryEmail.attributeTypeMap;
    }
}

export namespace PasswordPolicyRecoveryEmail {
    export enum StatusEnum {
        Active = <any> 'ACTIVE',
        Inactive = <any> 'INACTIVE'
    }
}
