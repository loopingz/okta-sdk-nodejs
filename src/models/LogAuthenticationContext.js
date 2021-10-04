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
const LogIssuer = require('./LogIssuer');

/**
 * @class LogAuthenticationContext
 * @extends Resource
 * @property { LogAuthenticationProvider } authenticationProvider
 * @property { integer } authenticationStep
 * @property { LogCredentialProvider } credentialProvider
 * @property { LogCredentialType } credentialType
 * @property { string } externalSessionId
 * @property { string } interface
 * @property { LogIssuer } issuer
 */
class LogAuthenticationContext extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson['authenticationProvider']) {
      this['authenticationProvider'] = resourceJson['authenticationProvider'];
    }
    if (resourceJson && resourceJson['authenticationStep']) {
      this['authenticationStep'] = resourceJson['authenticationStep'];
    }
    if (resourceJson && resourceJson['credentialProvider']) {
      this['credentialProvider'] = resourceJson['credentialProvider'];
    }
    if (resourceJson && resourceJson['credentialType']) {
      this['credentialType'] = resourceJson['credentialType'];
    }
    if (resourceJson && resourceJson['externalSessionId']) {
      this['externalSessionId'] = resourceJson['externalSessionId'];
    }
    if (resourceJson && resourceJson['interface']) {
      this['interface'] = resourceJson['interface'];
    }
    if (resourceJson && resourceJson['issuer']) {
      this['issuer'] = new LogIssuer(resourceJson['issuer']);
    }
  }

}

module.exports = LogAuthenticationContext;
