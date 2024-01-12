import React from "react";
import { Fragment, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

import { useTranslation } from "react-i18next";

export const MainLayout = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Box>
        <Typography style={{ textAlign: "center" }} variant="h4">
          {t("layout:main:title")}
        </Typography>
        <Suspense>
          <Outlet />
        </Suspense>
      </Box>
    </Fragment>
  );
};
