import React from "react";
import PricingCard from "../src/components/pricing/pricingCard";
import { Container, Grid, Box, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const data = [
  {
    plan: "basic",
    price: 500,
    features: [
      { item: "Basic Support", active: true },
      { item: "Web Based Application", active: true },
      { item: "Mulitple Admins", active: true },
      { item: "100% Opensource-Code", active: true },
      { item: "Free Installation", active: true },
      { item: "Progressive Web App", active: false },
      { item: "SEO Support", active: false },
      { item: "Customization", active: false },
      { item: "Domain and Hosting", active: false },
      { item: "Lifetime free updates", active: false },
    ],
  },
  {
    plan: "enterprise",
    price: 1000,

    features: [
      { item: "Basic Support", active: true },
      { item: "Web Based Application", active: true },
      { item: "Mulitple Admins", active: true },
      { item: "100% Opensource-Code", active: true },
      { item: "Free Installation", active: true },
      { item: "Progressive Web App", active: true },
      { item: "SEO Support", active: true },
      { item: "Customization", active: true },
      { item: "Domain and Hosting", active: true },
      { item: "Lifetime free updates", active: true },
    ],
  },
  {
    plan: "startup",
    price: 700,
    features: [
      { item: "Basic Support", active: true },
      { item: "Web Based Application", active: true },
      { item: "Mulitple Admins", active: true },
      { item: "100% Opensource-Code", active: true },
      { item: "Free Installation", active: true },
      { item: "Progressive Web App", active: true },
      { item: "SEO Support", active: true },
      { item: "Customization", active: true },
      { item: "Domain and Hosting", active: false },
      { item: "Lifetime free updates", active: false },
    ],
  },
];
export default function PricingPage() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      {/* <Box py={12}>
        <Container>
          <Typography
            variant="h2"
            color="text.primary"
            pb={8}
            textAlign="center"
          >
            Pricing Plans
          </Typography>
          <Box
            sx={{
              display: {
                sm: "block",
                xs: "none",
              },
            }}
          >
            <Grid
              container
              // {...(isMobile && { spacing: 3 })}
              spacing={2}
              justifyContent="center"
            >
              {data.map((currentCard, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <PricingCard data={currentCard} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: {
                sm: "none",
                xs: "block",
              },
            }}
          >
            <TabContext value={value}>
              <Box sx={{ mb: 2 }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  centered
                >
                  <Tab label="Basic" value="1" />
                  <Tab label="Startup" value="2" />
                  <Tab label="Enterprise" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                {" "}
                <PricingCard data={data[0]} />
              </TabPanel>
              <TabPanel value="2">
                {" "}
                <PricingCard data={data[2]} />
              </TabPanel>
              <TabPanel value="3">
                {" "}
                <PricingCard data={data[1]} />
              </TabPanel>
            </TabContext>
          </Box>
        </Container>
      </Box> */}
    </Box>
  );
}
