import React from "react";
import Image from "next/image";
import DemoFAQ from "src/components/demo/DemoFAQ";
import { Grid, Typography, Container, Card, Box, Button } from "@mui/material";
import DashboardImage from "../public/img/dashboard-commercehope.png";
import ClientImage from "../public/img/commercehope-client-app.png";
export default function Demo() {
  return (
    <Box pt={10}>
      {/* <Typography
        variant="h6"
        color="primary"
        sx={{
          fontWeight: 400,
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        WE ARE AWESOME
      </Typography>
      <Typography
        variant="h2"
        color="text.primary"
        sx={{ mb: { md: 5, xs: 2 }, textAlign: "center" }}
      >
        Live Preview
      </Typography>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Card sx={{ textAlign: "center", p: 3 }}>
              <Box
                position="relative"
                sx={{
                  width: 300,
                  height: 200,
                  mx: "auto",
                }}
              >
                <Image
                  src={ClientImage}
                  alt="commercehope app esktop"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
              <Typography variant="h3" color="text.primary">
                Front-end
              </Typography>
              <Typography variant="body1" color="text.secondary">
                The Front-end Application is designed for users to buy products
                online.
              </Typography>
              <a
                href="https://app.commercehope.com"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ my: 2 }}
                >
                  View Demo
                </Button>
              </a>
            </Card>
          </Grid>
          <Grid item md={6} xs={12}>
            <Card sx={{ textAlign: "center", p: 3, mb: 5 }}>
              <Box
                position="relative"
                sx={{
                  width: 300,
                  height: 200,
                  mx: "auto",
                }}
              >
                <Image
                  src={DashboardImage}
                  alt="commercehope app esktop"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
              <Typography variant="h3" color="text.primary">
                Admin Dashboard
              </Typography>
              <Typography variant="body1" color="text.secondary">
                The Admin Dashboard is Designed for the admin to manage products
                and sales.
              </Typography>
              <a
                href="https://dashboard.commercehope.com/dashboard"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ my: 2 }}
                >
                  View Demo
                </Button>
              </a>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <DemoFAQ /> */}
    </Box>
  );
}
