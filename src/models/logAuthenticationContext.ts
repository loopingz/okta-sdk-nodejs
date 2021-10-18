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
import { LogAuthenticationProvider } from './logAuthenticationProvider';
import { LogCredentialProvider } from './logCredentialProvider';
import { LogCredentialType } from './logCredentialType';
import { LogIssuer } from './logIssuer';

export class LogAuthenticationContext {
    'authenticationProvider'?: LogAuthenticationProvider;
    'authenticationStep'?: number;
    'credentialProvider'?: LogCredentialProvider;
    'credentialType'?: LogCredentialType;
    'externalSessionId'?: string;
    '_interface'?: string;
    'issuer'?: LogIssuer;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "authenticationProvider",
            "baseName": "authenticationProvider",
            "type": "LogAuthenticationProvider"
        },
        {
            "name": "authenticationStep",
            "baseName": "authenticationStep",
            "type": "number"
        },
        {
            "name": "credentialProvider",
            "baseName": "credentialProvider",
            "type": "LogCredentialProvider"
        },
        {
            "name": "credentialType",
            "baseName": "credentialType",
            "type": "LogCredentialType"
        },
        {
            "name": "externalSessionId",
            "baseName": "externalSessionId",
            "type": "string"
        },
        {
            "name": "_interface",
            "baseName": "interface",
            "type": "string"
        },
        {
            "name": "issuer",
            "baseName": "issuer",
            "type": "LogIssuer"
        }    ];

    static getAttributeTypeMap() {
        return LogAuthenticationContext.attributeTypeMap;
    }
}

