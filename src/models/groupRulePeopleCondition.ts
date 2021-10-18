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
import { GroupRuleGroupCondition } from './groupRuleGroupCondition';
import { GroupRuleUserCondition } from './groupRuleUserCondition';

export class GroupRulePeopleCondition {
    'groups'?: GroupRuleGroupCondition;
    'users'?: GroupRuleUserCondition;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "groups",
            "baseName": "groups",
            "type": "GroupRuleGroupCondition"
        },
        {
            "name": "users",
            "baseName": "users",
            "type": "GroupRuleUserCondition"
        }    ];

    static getAttributeTypeMap() {
        return GroupRulePeopleCondition.attributeTypeMap;
    }
}

