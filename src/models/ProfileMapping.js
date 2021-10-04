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
const ProfileMappingSource = require('./ProfileMappingSource');

/**
 * @class ProfileMapping
 * @extends Resource
 * @property { hash } _links
 * @property { string } id
 * @property { hash } properties
 * @property { ProfileMappingSource } source
 * @property { ProfileMappingSource } target
 */
class ProfileMapping extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson['_links']) {
      this['_links'] = resourceJson['_links'];
    }
    if (resourceJson && resourceJson['id']) {
      this['id'] = resourceJson['id'];
    }
    if (resourceJson && resourceJson['properties']) {
      this['properties'] = resourceJson['properties'];
    }
    if (resourceJson && resourceJson['source']) {
      this['source'] = new ProfileMappingSource(resourceJson['source']);
    }
    if (resourceJson && resourceJson['target']) {
      this['target'] = new ProfileMappingSource(resourceJson['target']);
    }
  }

  /**
   * @returns {Promise<ProfileMapping>}
   */
  update() {
    return this.httpClient.updateProfileMapping(this.id, this);
  }
}

module.exports = ProfileMapping;
