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

export class PasswordPolicyRecoveryFactorSettings {
    'status'?: PasswordPolicyRecoveryFactorSettings.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "PasswordPolicyRecoveryFactorSettings.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return PasswordPolicyRecoveryFactorSettings.attributeTypeMap;
    }
}

export namespace PasswordPolicyRecoveryFactorSettings {
    export enum StatusEnum {
        Active = <any> 'ACTIVE',
        Inactive = <any> 'INACTIVE'
    }
}
