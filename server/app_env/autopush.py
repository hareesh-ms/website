# Copyright 2023 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from server.app_env import _base


class Config(_base.Config):
  GOOGLE_ANALYTICS_TAG_ID = 'G-Y6ZXZ9JK3H'
  GCS_BUCKET = 'datcom-website-autopush-resources'
  LOG_QUERY = True
  SHOW_TOPIC = True
  SHOW_SUSTAINABILITY = True
  USE_LLM = True
  HIDE_DEBUG = False
  USE_MEMCACHE = False
  ENABLE_BQ = True
  LOG_DC_REQUEST_PAYLOAD = True
  LOG_DC_REQUEST_PAYLOAD_PERCENTAGE = 100
