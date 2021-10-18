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
import { CAPTCHAInstanceLink } from './cAPTCHAInstanceLink';

export class CAPTCHAInstance {
    'id'?: string;
    'name'?: string;
    'secretKey'?: string;
    'siteKey'?: string;
    'type'?: CAPTCHAInstance.TypeEnum;
    'link'?: CAPTCHAInstanceLink;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "secretKey",
            "baseName": "secretKey",
            "type": "string"
        },
        {
            "name": "siteKey",
            "baseName": "siteKey",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CAPTCHAInstance.TypeEnum"
        },
        {
            "name": "link",
            "baseName": "_link",
            "type": "CAPTCHAInstanceLink"
        }    ];

    static getAttributeTypeMap() {
        return CAPTCHAInstance.attributeTypeMap;
    }
}

export namespace CAPTCHAInstance {
    export enum TypeEnum {
        Hcaptcha = <any> 'HCAPTCHA',
        RecaptchaV2 = <any> 'RECAPTCHA_V2'
    }
}
