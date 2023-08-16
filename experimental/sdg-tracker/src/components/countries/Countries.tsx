/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Layout } from "antd";
import { useCallback } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  QUERY_PARAM_PLACE,
  QUERY_PARAM_VARIABLE,
  ROOT_SDG_VARIABLE_GROUP,
} from "../../utils/constants";
import AppFooter from "../layout/AppFooter";
import AppHeader from "../layout/AppHeader";
import AppLayout from "../layout/AppLayout";
import AppLayoutContent from "../layout/AppLayoutContent";
import AppSidebar from "../layout/AppSidebar";
import CountriesContent from "./CountriesContent";

const DEFAULT_PLACE = "country/IRL";

const Countries = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const placeDcid = searchParams.get(QUERY_PARAM_PLACE) || DEFAULT_PLACE;
  const variableDcid =
    searchParams.get(QUERY_PARAM_VARIABLE) || ROOT_SDG_VARIABLE_GROUP;

  /**
   * Update selected variable URL parameter
   */
  const setVariableDcid = useCallback(
    (variableDcid: string) => {
      const searchParams = new URLSearchParams(location.search);
      searchParams.set(QUERY_PARAM_VARIABLE, variableDcid);
      navigate(location.pathname + "?" + searchParams.toString());
    },
    [location]
  );

  /**
   * Update selected place URL parameter
   */
  const setPlaceDcid = useCallback(
    (placeDcid: string) => {
      const searchParams = new URLSearchParams(location.search);
      searchParams.set(QUERY_PARAM_PLACE, placeDcid);
      navigate(location.pathname + "?" + searchParams.toString());
    },
    [location]
  );

  return (
    <AppLayout>
      <AppHeader selected="countries" />
      <AppLayoutContent style={{ display: "flex", flexDirection: "column" }}>
        <Layout style={{ height: "100%", flexGrow: 1, flexDirection: "row" }}>
          <AppSidebar
            variableDcid={variableDcid}
            setVariableDcid={setVariableDcid}
          />
          <Layout style={{ overflow: "auto" }}>
            <CountriesContent
              variableDcids={[variableDcid]}
              placeDcid={placeDcid}
              setPlaceDcid={setPlaceDcid}
            />
          </Layout>
        </Layout>
      </AppLayoutContent>
      <AppFooter />
    </AppLayout>
  );
};
export default Countries;