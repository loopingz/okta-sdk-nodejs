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
import { AuthorizationServerPolicyRuleActions } from './authorizationServerPolicyRuleActions';
import { AuthorizationServerPolicyRuleConditions } from './authorizationServerPolicyRuleConditions';

export class AuthorizationServerPolicyRule {
    'created'?: Date;
    'id'?: string;
    'name'?: string;
    'lastUpdated'?: Date;
    'priority'?: number;
    'status'?: AuthorizationServerPolicyRule.StatusEnum;
    'system'?: boolean;
    'type'?: AuthorizationServerPolicyRule.TypeEnum;
    'conditions'?: AuthorizationServerPolicyRuleConditions;
    'actions'?: AuthorizationServerPolicyRuleActions;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
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
            "name": "lastUpdated",
            "baseName": "lastUpdated",
            "type": "Date"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "AuthorizationServerPolicyRule.StatusEnum"
        },
        {
            "name": "system",
            "baseName": "system",
            "type": "boolean"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "AuthorizationServerPolicyRule.TypeEnum"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "AuthorizationServerPolicyRuleConditions"
        },
        {
            "name": "actions",
            "baseName": "actions",
            "type": "AuthorizationServerPolicyRuleActions"
        }    ];

    static getAttributeTypeMap() {
        return AuthorizationServerPolicyRule.attributeTypeMap;
    }
}

export namespace AuthorizationServerPolicyRule {
    export enum StatusEnum {
        Active = <any> 'ACTIVE',
        Inactive = <any> 'INACTIVE'
    }
    export enum TypeEnum {
        ResourceAccess = <any> 'RESOURCE_ACCESS'
    }
}
