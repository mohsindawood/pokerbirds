import React from "react";
import Link from "src/utils/link";
import {
  Typography,
  Breadcrumbs,
  Stack,
  Link as RouterLink,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CircleIcon from "@mui/icons-material/Circle";
export default function OurLeaders() {
  const theme = useTheme();
  return (
    <Stack
      justifyContent="center"
      sx={{
        background: theme => theme.palette.gradients.primary,
        padding: "40px 0px 40px 0px",
        textAlign: "center",
        zIndex: 0,
        minHeight: 250,

      }}
    >
      <Breadcrumbs
        separator={<CircleIcon />}
        aria-label="breadcrumb"
        sx={{
          display: "flex",
          justifyContent: "center",
          svg: { fontSize: "8px", fill: theme.palette.common.white },
          'a': {
            color: theme.palette.common.white,
          },


        }}
      >
        <RouterLink
          component={Link}
          underline="none"
          href="/"
        >
          Home
        </RouterLink>
        <Typography
          color="common.white"
        >
          Demo
        </Typography>
      </Breadcrumbs>
      <Typography variant="h3" color="common.white">
        Demo
      </Typography>
    </Stack>
  );
}
