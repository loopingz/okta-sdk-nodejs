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

export class JwkUse {
    'use'?: JwkUse.UseEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "use",
            "baseName": "use",
            "type": "JwkUse.UseEnum"
        }    ];

    static getAttributeTypeMap() {
        return JwkUse.attributeTypeMap;
    }
}

export namespace JwkUse {
    export enum UseEnum {
        Sig = <any> 'sig'
    }
}
