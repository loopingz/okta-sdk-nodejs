/*!
 * Copyright (c) 2017-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const TokenAuthorizationServerPolicyRuleActionInlineHook = require('./TokenAuthorizationServerPolicyRuleActionInlineHook');

/**
 * @class TokenAuthorizationServerPolicyRuleAction
 * @extends Resource
 * @property { integer } accessTokenLifetimeMinutes
 * @property { TokenAuthorizationServerPolicyRuleActionInlineHook } inlineHook
 * @property { integer } refreshTokenLifetimeMinutes
 * @property { integer } refreshTokenWindowMinutes
 */
class TokenAuthorizationServerPolicyRuleAction extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson['accessTokenLifetimeMinutes']) {
      this['accessTokenLifetimeMinutes'] = resourceJson['accessTokenLifetimeMinutes'];
    }
    if (resourceJson && resourceJson['inlineHook']) {
      this['inlineHook'] = new TokenAuthorizationServerPolicyRuleActionInlineHook(resourceJson['inlineHook']);
    }
    if (resourceJson && resourceJson['refreshTokenLifetimeMinutes']) {
      this['refreshTokenLifetimeMinutes'] = resourceJson['refreshTokenLifetimeMinutes'];
    }
    if (resourceJson && resourceJson['refreshTokenWindowMinutes']) {
      this['refreshTokenWindowMinutes'] = resourceJson['refreshTokenWindowMinutes'];
    }
  }

}

module.exports = TokenAuthorizationServerPolicyRuleAction;
