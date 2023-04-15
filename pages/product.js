import dynamic from "next/dynamic";
// material
import { styled } from "@mui/material/styles";
// components
import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
// import Countdown from "react-countdown";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  MotionInView,
  varFadeInLeft,
  varFadeInDown,
  varFadeInRight,
} from "src/components/animate";
const Page = dynamic(() => import("src/components/Page"));
const AppTools = dynamic(() => import("src/components/product/home/AppTools"));
const Hero = dynamic(() => import("src/components/product/home/Hero"));
const Technologies = dynamic(() =>
  import("src/components/product/home/Technologies")
);
const Features = dynamic(() => import("src/components/product/home/Features"));
// const Testimonials = dynamic(
//   () => import("src/components/product/home/Testimonials"),
//   {
//     suspense: true,
//   }
// );

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: "100%",
});

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.neutral,
}));

// ----------------------------------------------------------------------
const ResponsiveComponent = () => {
  const theme = useTheme();
  const btnSizes = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container fixed>
      <Grid container spacing={5}>
        <Grid item md={6} xs={12}>
          <Image
            alt="responsive commercehope app illustration, nextjs ecommerce"
            src="/img/responsive-commerce-app.svg"
            placeholder="blur"
            blurDataURL="/img/responsive-commerce-app.svg"
            layout="responsive"
            width="100%"
            height="100%"
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Stack
            direction="column"
            justifyContent="center"
            sx={{ height: 1, textAlign: { xs: "center", sm: "left" } }}
          >
            <MotionInView variants={varFadeInDown}>
              <Typography
                variant="subtitle1"
                color="primary.main"
                lineHeight={1}
                sx={{ fontWeight: 500 }}
              >
                RESPONSIVE
              </Typography>
            </MotionInView>
            <MotionInView variants={varFadeInDown}>
              <Typography variant="h2" color="text.primary">
                Super Responsive
              </Typography>
            </MotionInView>
            <MotionInView variants={varFadeInDown}>
              <Typography variant="body1" color="text.primary" mt={2} mb={4}>
                Commercehope is providing high-end mobile first responsive web
                app with Progresive Web App. Commercehope Client and Admin app
                is fully responsive for all devices and browser compatible
                however it makes great user experience.
              </Typography>
            </MotionInView>
            <MotionInView variants={varFadeInRight}>
              <Button
                variant="contained"
                color="primary"
                size={btnSizes ? "small" : "large"}
                sx={{ maxWidth: 200, mx: { xs: "auto", sm: "0px" } }}
              >
                View More
              </Button>
            </MotionInView>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

const SEOComponent = () => {
  const theme = useTheme();
  const btnSize = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          pt: { lg: 7, md: 3, xs: 3 },
          bgcolor: (theme) => theme.palette.background.neutral,
        }}
      >
        <Container fixed sx={{ mb: 8 }}>
          <Grid container spacing={5} direction="row-reverse">
            <Grid item md={6} xs={12}>
              <Image
                alt="SEO commercehope app illustration, nextjs ecommerce"
                src="/img/Fast-loading-commercehope-app.svg"
                placeholder="blur"
                blurDataURL="/img/Fast-loading-commercehope-app.svg"
                layout="responsive"
                width="100%"
                height="100%"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Stack
                direction="column"
                justifyContent="center"
                sx={{ height: 1, textAlign: { xs: "center", sm: "left" } }}
              >
                <MotionInView variants={varFadeInDown}>
                  <Typography
                    variant="subtitle1"
                    lineHeight={1}
                    color="primary.main"
                    sx={{ fontWeight: 500 }}
                  >
                    SEARCH ENGINE OPTIMIZATION
                  </Typography>
                </MotionInView>
                <MotionInView variants={varFadeInDown}>
                  <Typography variant="h2" color="text.primary">
                    Complete SEO Tool
                  </Typography>
                </MotionInView>
                <MotionInView variants={varFadeInDown}>
                  <Typography
                    variant="body1"
                    color="text.primary"
                    mt={2}
                    mb={4}
                  >
                    Commerce Hope is an React js Next js Open Source Ecommerce
                    Script that consists on a complete SEO tool to grow and
                    measures your Ecommerce web application rankings. Commerce
                    Hope generate the static pages after adding the products.
                    This makes your products SEO and users can search and find
                    your products.
                  </Typography>
                </MotionInView>
                <MotionInView variants={varFadeInLeft}>
                  <Button
                    variant="contained"
                    color="primary"
                    size={btnSize ? "small" : "large"}
                    sx={{ maxWidth: 200, mx: { xs: "auto", sm: "0px" } }}
                  >
                    View More
                  </Button>
                </MotionInView>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default function LandingPage() {
  const theme = useTheme();
  return (
    <>
      {/* <RootStyle title="COMMERCEHOPE Open Source Reactjs Ecommerce Software">
        <Hero />
        <ContentStyle>
          <Features />
          <AppTools />
          <ResponsiveComponent />
          <SEOComponent />
          <Technologies />
          <Testimonials />
        </ContentStyle>
      </RootStyle> */}
    </>
  );
}

export async function getServerSideProps({ res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {},
  };
}
