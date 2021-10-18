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

export class AppAndInstanceConditionEvaluatorAppOrInstance {
    'id'?: string;
    'name'?: string;
    'type'?: AppAndInstanceConditionEvaluatorAppOrInstance.TypeEnum;

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
            "name": "type",
            "baseName": "type",
            "type": "AppAndInstanceConditionEvaluatorAppOrInstance.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return AppAndInstanceConditionEvaluatorAppOrInstance.attributeTypeMap;
    }
}

export namespace AppAndInstanceConditionEvaluatorAppOrInstance {
    export enum TypeEnum {
        AppType = <any> 'APP_TYPE',
        App = <any> 'APP'
    }
}
