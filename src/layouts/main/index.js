import { useEffect } from "react";
import PropTypes from "prop-types";
// material
import { Box, Fab } from "@mui/material";
//
import MainNavbar from "./MainNavbar";
import MobileAppbar from "./MobileAppbar";
import Footer from "./Footer";
import Link from "src/utils/link";
// ----------------------------------------------------------------------

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default function MainLayout({ children }) {
  return (
    <>
      <MainNavbar />
      <MobileAppbar />
      <Box sx={{ my: { lg: 4, md: 4, sm: 0, xs: 0 } }} />
      <Box sx={{ mb: 0 }}>{children}</Box>
      {/* <Link href={`https://wa.me/923035501602`} target="_blank">
        <Fab
          color="default"
          aria-label="whats-app"
          sx={{
            bgcolor: "success.main",
            color: "#fff",
            position: "fixed",
            bottom: 20,
            left: 20,
            zIndex: 100,
            "&:hover": {
              bgcolor: "success.dark",
            },
            svg: {
              fontSize: 40,
            },
            display: { md: "flex", xs: "none" },
          }}
        >
          <WhatsAppIcon />
        </Fab>
      </Link> */}
      {/* <Footer /> */}
    </>
  );
}
