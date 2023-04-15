import * as React from "react";
import Link from "src/utils/link";
import { useRouter } from "next/router";
import Logo from "../../components/Logo";
import { useTheme, alpha, styled } from "@mui/material/styles";
import MobileMenu from "./MenuMobile";
// material
import { NoSsr, Button, Box, AppBar, Toolbar, Container } from "@mui/material";
import Settings from "../../components/settings";
const APP_BAR_DESKTOP = 55;
const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_DESKTOP,
}));

export default function SimpleBottomNavigation() {
  const theme = useTheme();
  const { pathname, push } = useRouter();
  const [open, setOpen] = React.useState(false);
  return (
    <AppBar
      sx={{
        backdropFilter: open ? "none" : "blur(20px)",
        bgcolor: alpha(theme.palette.background.paper, 0.72),
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
      }}
    >
      <ToolbarStyle disableGutters>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{
            bgcolor: "#fff",
            height: "150px",
            width: 150,
            position: "relative",
            img: {
              height: "100px",
              position: "absolute",
              objectFit: "contain", top: "30%",
              left: 0
            }
          }}>
            <img src="/logo.png" alt="logo" width="100%" />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              size="small"
              sx={{ mr: 1 }}
              variant="contained"
              onClick={() => push("/get-quote")}
              color="primary"
            >
              Get a Quate
            </Button>
            <MobileMenu />
          </Box>
          <Box
            sx={{
              bgcolor: "background.paper",
              border: `1px solid ${theme.palette.background.default}`,
              position: "fixed",
              top: 68,
              right: -1,
              padding: "3px 8px 3px 3px",
              borderRadius: "27px 0 0 27px",
            }}
          >
            <NoSsr>
              <Settings setIsOpen={(v) => setOpen(v)} />
            </NoSsr>
          </Box>
        </Container>
      </ToolbarStyle>
    </AppBar>
  );
}
