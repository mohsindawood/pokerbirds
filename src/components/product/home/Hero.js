import React from "react";
import dynamic from "next/dynamic";
// material
import { useTheme, alpha } from "@mui/material/styles";
import { Container, Paper, Button, Box, Typography, Grid } from "@mui/material";
// hooks
import { useRouter } from "next/router";
import Link from "src/utils/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import {
  MotionInView,
  varFadeInUp,
  varFadeInDown,
} from "src/components/animate";
const AnimationText = dynamic(() => import("src/components/AnimationText"));

export default function Banner({ isHome }) {
  const theme = useTheme();
  const { push } = useRouter();

  return (
    <Box sx={{ position: "relative" }}>
      <Paper
        sx={{
          pt: 9,
          pb: { xs: 11, md: 16 },
          borderRadius: 0,
          zIndex: 0,
          position: "relative",
          "--bs-primary-rgb": " 13, 110, 253",

          "--bs-body-bg-rgb": " 194, 232, 253",
          "--bs-body-bg-rgbaa": " 243, 248, 251",
          "--bd-violet-rgb": " 112.520718, 44.062154,249.437846",
          "--bd-accent-rgb": " 255, 228, 132",
          "--bd-pink-rgb": " 214, 51, 132",

          backgroundImage:
            theme.palette.mode === "dark"
              ? theme.palette.background.paper
              : `linear-gradient(
                180deg,
                rgba(var(--bs-body-bg-rgb), 0.01),
                rgba(var(--bs-body-bg-rgbaa), 0.8) 85%
              ),
              radial-gradient(
                ellipse at top left,
                rgba(var(--bs-primary-rgb), 0.5),
                transparent 50%
              ),
              radial-gradient(
                ellipse at top right,
                rgba(var(--bd-accent-rgb), 0.5),
                transparent 50%
              ),
              radial-gradient(
                ellipse at center right,
                rgba(var(--bs-body-bg-rgb), 0.5),
                transparent 50%
              ),
              radial-gradient(
                ellipse at bottom right,
                rgba(var(--bd-pink-rgb), 0.5),
                transparent 50%
              ),
              radial-gradient(
                ellipse at bottom center,
                rgba(var(--bd-violet-rgb), 0.5),
                transparent 50%
              ),
              radial-gradient(
                ellipse at center left,
                rgba(var(--bd-pink-rgb), 0.5),
                transparent 50%
              )`,
          transition: theme.transitions.create("all"),
        }}
      >
        <Container>
          {isHome && <Typography
            variant="h2"
            color="text.primary"
            textAlign="center"
            mb={5}
          >
            Our Product
          </Typography>}

          <Grid container spacing={6}>
            <Grid item lg={5} md={5} sx={{ pl: "45px!important" }}>
              <Box
                sx={{
                  [theme.breakpoints.down("md")]: {
                    textAlign: "center",
                    mt: 3,
                  },
                  py: { md: 12, xs: 5 },
                }}
              >
                <MotionInView variants={varFadeInUp}>
                  <Typography
                    variant="h2"
                    color="text.primary"
                    sx={{
                      textTransform: "capitalize",
                      display: "inline-block",
                    }}
                    lineHeight={1}
                    mb={1}
                  >
                    Ecommerce Open Source Script
                  </Typography>
                </MotionInView>
                <AnimationText />
                <MotionInView variants={varFadeInUp}>
                  <Typography
                    sx={{
                      mb: 3,
                      mt: 1,
                      color: (theme) => alpha(theme.palette.text.primary, 0.7),
                    }}
                    variant="body1"
                    gutterBottom
                  >
                    <b>COMMERCEHOPE</b> is an Open Source Reactjs Ecommerce
                    Script gives you the power to create your own ecommerce web
                    application created by Techgater.
                  </Typography>
                </MotionInView>
                <Box>
                  <MotionInView variants={varFadeInDown}>
                    <Button
                      size="large"
                      // href="https://secure.2checkout.com/checkout/buy?merchant=254336791152&currency=USD&tpl=default&dynamic=1&return-type=redirect&return-url=https%3A%2F%2Ftechgater.com%2F&src=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1jrsMeJHqEekBiWZ_eCZyokLHu_OKPIT9%2Fview%3Fusp%3Dsharing&prod=Commercehope+%7C+ReactJS+Ecommerce+Script+With+ChatGPT&price=300&type=digital&qty=1&signature=5b1ff0863564923f365ef4ae28bc5c7ca352a6f19e1bf36d74805e7830fa9231"
                      href="pricing"
                      component={Link}
                      variant="contained"
                      endIcon={<ArrowForwardIosIcon size="small" />}
                      sx={{ svg: { fontSize: "15px !important" } }}
                    >
                      Pricing Plans
                    </Button>
                    <Button
                      size="large"
                      color="warning"
                      onClick={() => push(isHome ? "/product" : "/demo")}
                      variant="contained"
                      endIcon={<ArrowForwardIosIcon size="small" />}
                      sx={{ svg: { fontSize: "15px !important" }, ml: 1 }}
                    >
                      {isHome ? "View Details" : "Live Preview"}
                    </Button>
                  </MotionInView>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              lg={7}
              md={7}
              sm={12}
              xs={12}
              sx={{
                position: "relative",
                pr: 5,
                display: { xs: "none", md: "block" },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px",
                  // boxShadow: (theme) => theme.shadows[24],
                  span: {
                    borderRadius: "12px",
                  },
                  // "& .desktop": {

                  // },
                }}
              >
                <Image
                  preority
                  src="/img/commercehope-app-desktop.png"
                  alt="commercehope hero illustration, next js react js ecommerce script commerce hope desktop"
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL="/img/commercehope-app-desktop.png"
                  className="desktop"
                />
              </Box>

              <Box
                sx={{
                  span: {
                    position: "absolute!important",
                    bottom: "-30px",
                    right: "-12px",
                    boxShadow: (theme) => theme.shadows[24],
                    borderRadius: "8px",
                  },
                }}
              >
                <Image
                  preority
                  src="/img/commercehope-mobile-app.png"
                  alt="commercehope hero illustration, next js react js ecommerce script, commercehope mobile"
                  layout="fixed"
                  width={200}
                  height={374}
                  objectFit="contain"
                  className="mobile"
                  placeholder="blur"
                  blurDataURL="/img/commercehope-mobile-app.png"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>

      {/* <Box
        component="svg"
        xmlns="http://www.w3.org/2000/svg"
        id="wave"
        viewBox="0 0 1440 210"
        version="1.1"
        sx={{ position: "absolute", bottom: 0 }}
      >
        <path
          fill="#3C455C"
          d="M0,63L80,80.5C160,98,320,133,480,129.5C640,126,800,84,960,87.5C1120,91,1280,140,1440,154C1600,168,1760,147,1920,140C2080,133,2240,140,2400,143.5C2560,147,2720,147,2880,122.5C3040,98,3200,49,3360,24.5C3520,0,3680,0,3840,28C4000,56,4160,112,4320,122.5C4480,133,4640,98,4800,91C4960,84,5120,105,5280,108.5C5440,112,5600,98,5760,94.5C5920,91,6080,98,6240,105C6400,112,6560,119,6720,126C6880,133,7040,140,7200,150.5C7360,161,7520,175,7680,175C7840,175,8000,161,8160,143.5C8320,126,8480,105,8640,80.5C8800,56,8960,28,9120,17.5C9280,7,9440,14,9600,31.5C9760,49,9920,77,10080,94.5C10240,112,10400,119,10560,122.5C10720,126,10880,126,11040,115.5C11200,105,11360,84,11440,73.5L11520,63L11520,210L11440,210C11360,210,11200,210,11040,210C10880,210,10720,210,10560,210C10400,210,10240,210,10080,210C9920,210,9760,210,9600,210C9440,210,9280,210,9120,210C8960,210,8800,210,8640,210C8480,210,8320,210,8160,210C8000,210,7840,210,7680,210C7520,210,7360,210,7200,210C7040,210,6880,210,6720,210C6560,210,6400,210,6240,210C6080,210,5920,210,5760,210C5600,210,5440,210,5280,210C5120,210,4960,210,4800,210C4640,210,4480,210,4320,210C4160,210,4000,210,3840,210C3680,210,3520,210,3360,210C3200,210,3040,210,2880,210C2720,210,2560,210,2400,210C2240,210,2080,210,1920,210C1760,210,1600,210,1440,210C1280,210,1120,210,960,210C800,210,640,210,480,210C320,210,160,210,80,210L0,210Z"
        />
      </Box> */}
    </Box>
  );
}
