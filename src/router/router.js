import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "../pages/home/home";
import OnKeeper from "../pages/service/onkeeper";
import Mes from "../pages/service/mes";
import Monitoring from "../pages/service/monitoring";
import Haccp from "../pages/service/haccp";
import Spc from "../pages/service/spc";
import Ems from "../pages/service/ems";
import Notice from "../pages/newsroom/notice";
import CardNews from "../pages/newsroom/card_news";
import LocationMap from "../pages/company/location-map";
import brandCi from "../pages/company/brand_ci";
import ConstrucExample from "../pages/service/construc-example";

export default function Router() {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/onkeeper", element: <OnKeeper /> },
    { path: "/mes", element: <Mes /> },
    { path: "/monitoring", element: <Monitoring /> },
    { path: "/HACCP", element: <Haccp /> },
    { path: "/SPC", element: <Spc /> },
    { path: "/EMS", element: <Ems /> },
    { path: "/notice", element: <Notice /> },
    { path: "/cardnews", element: <CardNews /> },
    { path: "/construc-example", element: <ConstrucExample /> },
    { path: "/location-map", element: <LocationMap /> },
    { path: "/brand_ci", element: <brandCi /> },
  ]);
}
