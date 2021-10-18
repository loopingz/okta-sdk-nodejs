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
import { AppAndInstancePolicyRuleCondition } from './appAndInstancePolicyRuleCondition';
import { AppInstancePolicyRuleCondition } from './appInstancePolicyRuleCondition';
import { BeforeScheduledActionPolicyRuleCondition } from './beforeScheduledActionPolicyRuleCondition';
import { ClientPolicyCondition } from './clientPolicyCondition';
import { ContextPolicyRuleCondition } from './contextPolicyRuleCondition';
import { DevicePolicyRuleCondition } from './devicePolicyRuleCondition';
import { GrantTypePolicyRuleCondition } from './grantTypePolicyRuleCondition';
import { GroupPolicyRuleCondition } from './groupPolicyRuleCondition';
import { IdentityProviderPolicyRuleCondition } from './identityProviderPolicyRuleCondition';
import { MDMEnrollmentPolicyRuleCondition } from './mDMEnrollmentPolicyRuleCondition';
import { OAuth2ScopesMediationPolicyRuleCondition } from './oAuth2ScopesMediationPolicyRuleCondition';
import { PasswordPolicyAuthenticationProviderCondition } from './passwordPolicyAuthenticationProviderCondition';
import { PlatformPolicyRuleCondition } from './platformPolicyRuleCondition';
import { PolicyNetworkCondition } from './policyNetworkCondition';
import { PolicyPeopleCondition } from './policyPeopleCondition';
import { PolicyRuleAuthContextCondition } from './policyRuleAuthContextCondition';
import { RiskPolicyRuleCondition } from './riskPolicyRuleCondition';
import { RiskScorePolicyRuleCondition } from './riskScorePolicyRuleCondition';
import { UserIdentifierPolicyRuleCondition } from './userIdentifierPolicyRuleCondition';
import { UserPolicyRuleCondition } from './userPolicyRuleCondition';
import { UserStatusPolicyRuleCondition } from './userStatusPolicyRuleCondition';

export class PolicyRuleConditions {
    'app'?: AppAndInstancePolicyRuleCondition;
    'apps'?: AppInstancePolicyRuleCondition;
    'authContext'?: PolicyRuleAuthContextCondition;
    'authProvider'?: PasswordPolicyAuthenticationProviderCondition;
    'beforeScheduledAction'?: BeforeScheduledActionPolicyRuleCondition;
    'clients'?: ClientPolicyCondition;
    'context'?: ContextPolicyRuleCondition;
    'device'?: DevicePolicyRuleCondition;
    'grantTypes'?: GrantTypePolicyRuleCondition;
    'groups'?: GroupPolicyRuleCondition;
    'identityProvider'?: IdentityProviderPolicyRuleCondition;
    'mdmEnrollment'?: MDMEnrollmentPolicyRuleCondition;
    'network'?: PolicyNetworkCondition;
    'people'?: PolicyPeopleCondition;
    'platform'?: PlatformPolicyRuleCondition;
    'risk'?: RiskPolicyRuleCondition;
    'riskScore'?: RiskScorePolicyRuleCondition;
    'scopes'?: OAuth2ScopesMediationPolicyRuleCondition;
    'userIdentifier'?: UserIdentifierPolicyRuleCondition;
    'userStatus'?: UserStatusPolicyRuleCondition;
    'users'?: UserPolicyRuleCondition;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "app",
            "baseName": "app",
            "type": "AppAndInstancePolicyRuleCondition"
        },
        {
            "name": "apps",
            "baseName": "apps",
            "type": "AppInstancePolicyRuleCondition"
        },
        {
            "name": "authContext",
            "baseName": "authContext",
            "type": "PolicyRuleAuthContextCondition"
        },
        {
            "name": "authProvider",
            "baseName": "authProvider",
            "type": "PasswordPolicyAuthenticationProviderCondition"
        },
        {
            "name": "beforeScheduledAction",
            "baseName": "beforeScheduledAction",
            "type": "BeforeScheduledActionPolicyRuleCondition"
        },
        {
            "name": "clients",
            "baseName": "clients",
            "type": "ClientPolicyCondition"
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "ContextPolicyRuleCondition"
        },
        {
            "name": "device",
            "baseName": "device",
            "type": "DevicePolicyRuleCondition"
        },
        {
            "name": "grantTypes",
            "baseName": "grantTypes",
            "type": "GrantTypePolicyRuleCondition"
        },
        {
            "name": "groups",
            "baseName": "groups",
            "type": "GroupPolicyRuleCondition"
        },
        {
            "name": "identityProvider",
            "baseName": "identityProvider",
            "type": "IdentityProviderPolicyRuleCondition"
        },
        {
            "name": "mdmEnrollment",
            "baseName": "mdmEnrollment",
            "type": "MDMEnrollmentPolicyRuleCondition"
        },
        {
            "name": "network",
            "baseName": "network",
            "type": "PolicyNetworkCondition"
        },
        {
            "name": "people",
            "baseName": "people",
            "type": "PolicyPeopleCondition"
        },
        {
            "name": "platform",
            "baseName": "platform",
            "type": "PlatformPolicyRuleCondition"
        },
        {
            "name": "risk",
            "baseName": "risk",
            "type": "RiskPolicyRuleCondition"
        },
        {
            "name": "riskScore",
            "baseName": "riskScore",
            "type": "RiskScorePolicyRuleCondition"
        },
        {
            "name": "scopes",
            "baseName": "scopes",
            "type": "OAuth2ScopesMediationPolicyRuleCondition"
        },
        {
            "name": "userIdentifier",
            "baseName": "userIdentifier",
            "type": "UserIdentifierPolicyRuleCondition"
        },
        {
            "name": "userStatus",
            "baseName": "userStatus",
            "type": "UserStatusPolicyRuleCondition"
        },
        {
            "name": "users",
            "baseName": "users",
            "type": "UserPolicyRuleCondition"
        }    ];

    static getAttributeTypeMap() {
        return PolicyRuleConditions.attributeTypeMap;
    }
}

