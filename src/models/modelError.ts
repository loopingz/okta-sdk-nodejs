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
import { ErrorErrorCauses } from './errorErrorCauses';

export class ModelError {
    /**
    * An Okta code for this type of error
    */
    'errorCode'?: string;
    /**
    * A short description of what caused this error. Sometimes this contains dynamically-generated information about your specific error.
    */
    'errorSummary'?: string;
    /**
    * An Okta code for this type of error
    */
    'errorLink'?: string;
    /**
    * A unique identifier for this error. This can be used by Okta Support to help with troubleshooting.
    */
    'errorId'?: string;
    'errorCauses'?: Array<ErrorErrorCauses>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errorCode",
            "baseName": "errorCode",
            "type": "string"
        },
        {
            "name": "errorSummary",
            "baseName": "errorSummary",
            "type": "string"
        },
        {
            "name": "errorLink",
            "baseName": "errorLink",
            "type": "string"
        },
        {
            "name": "errorId",
            "baseName": "errorId",
            "type": "string"
        },
        {
            "name": "errorCauses",
            "baseName": "errorCauses",
            "type": "Array<ErrorErrorCauses>"
        }    ];

    static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }
}

