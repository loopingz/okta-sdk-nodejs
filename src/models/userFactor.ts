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
import { FactorProvider } from './factorProvider';
import { FactorStatus } from './factorStatus';
import { FactorType } from './factorType';
import { VerifyFactorRequest } from './verifyFactorRequest';

export class UserFactor {
    'embedded'?: { [key: string]: object; };
    'links'?: { [key: string]: object; };
    'created'?: Date;
    'factorType'?: FactorType;
    'id'?: string;
    'lastUpdated'?: Date;
    'provider'?: FactorProvider;
    'status'?: FactorStatus;
    'verify'?: VerifyFactorRequest;

    static discriminator: string | undefined = "factorType";

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "embedded",
            "baseName": "_embedded",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "factorType",
            "baseName": "factorType",
            "type": "FactorType"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "lastUpdated",
            "baseName": "lastUpdated",
            "type": "Date"
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "FactorProvider"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "FactorStatus"
        },
        {
            "name": "verify",
            "baseName": "verify",
            "type": "VerifyFactorRequest"
        }    ];

    static getAttributeTypeMap() {
        return UserFactor.attributeTypeMap;
    }
}

