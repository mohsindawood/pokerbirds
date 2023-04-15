// material
import { styled } from "@mui/material/styles";
// components
import Page from "src/components/Page";
import { CarouselAnimation } from "src//components/carousel";
import AboutAgency from "src/components/home/AboutAgency";
// import Categories from "src/components/home/categories";
import Location from "src/components/home/Location";
import Statistics from "src/components/home/Statistics";
import OurDesign from "src/components/home/OurDesign";
// import CreativeWork from "src/components/home/CreativeWork";
import OurClients from "src/components/home/OurClients";
import Domains from "src/components/home/Domains";
import Contact from "src/components/get-quote/Contact";
import Testimonials from "src/components/home/Testimonials";
import Hero from "src/components/product/home/Hero";
import Typography from "@mui/material/Typography";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: "100%",
});

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.paper,
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <>
      <RootStyle
        title="Poker Birds - Web Design & Development Agency"
        id="move_top"
      >
        <CarouselAnimation />
        <ContentStyle>
          <AboutAgency />
          <Contact />
          {/* <Hero isHome />
          <OurDesign />
          <Statistics /> */}
          {/* <CreativeWork /> */}
          {/* <OurClients />
          <Domains />
          <Testimonials />
          <Contact />
          <Location /> */}
        </ContentStyle>
      </RootStyle>
    </>
  );
}
