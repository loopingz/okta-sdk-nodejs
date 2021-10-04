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
const ApplicationVisibilityHide = require('./ApplicationVisibilityHide');

/**
 * @class ApplicationVisibility
 * @extends Resource
 * @property { hash } appLinks
 * @property { boolean } autoLaunch
 * @property { boolean } autoSubmitToolbar
 * @property { ApplicationVisibilityHide } hide
 */
class ApplicationVisibility extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson['appLinks']) {
      this['appLinks'] = resourceJson['appLinks'];
    }
    if (resourceJson && resourceJson['autoLaunch']) {
      this['autoLaunch'] = resourceJson['autoLaunch'];
    }
    if (resourceJson && resourceJson['autoSubmitToolbar']) {
      this['autoSubmitToolbar'] = resourceJson['autoSubmitToolbar'];
    }
    if (resourceJson && resourceJson['hide']) {
      this['hide'] = new ApplicationVisibilityHide(resourceJson['hide']);
    }
  }

}

module.exports = ApplicationVisibility;
