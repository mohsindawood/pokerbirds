import React from "react";
import Image from "next/image";
import { Box, Container, Typography, Grid } from "@mui/material";
import {
  MotionInView,
  varFadeInUp,
  varFadeInDown,
} from "src/components/animate";

export default function Domains() {
  const data = [
    {
      icon: "data-management.png",
      heading: "Latest Technologies",
      description:
        "COMMERCEHOPE is developed with lastest technologies such as Reactjs, Nextjs, MUI, MongoDB and Mongoose.",
    },

    {
      icon: "browser.png",
      heading: "Open Source",
      description:
        "COMMERCEHOPE is an fully open source product can be installed with personal domain.",
    },
    {
      icon: "color-palette.png",
      heading: "Color presets",
      description:
        "COMMERCEHOPE has 6 theme colors can be changed by user. This makes a website modern.",
    },
    {
      icon: "night-mode.png",
      heading: "Dark Mode",
      description:
        "COMMERCEHOPE consists on dark and light mode that can be changed by user.",
    },
    {
      icon: "responsive.png",
      heading: "Responsive Design",
      description:
        "COMMERCEHOPE is a pixel perfect web application designed responsive for all devices",
    },
    {
      icon: "seo.png",
      heading: "SEO Friendly",
      description:
        "Nextjs privides SEO for ranking website and products on top of page. ",
    },
    {
      icon: "payment.png",
      heading: "Payment Gateways",
      description:
        "COMMERCEHOPE consists on stripe payment method where admin can receive and withdraw payments.",
    },
    {
      icon: "security.png",
      heading: "Security",
      description:
        "We take security seriously and back our product with a Security Bounty Program to encourage responsible disclosure by researchers.",
    },
    {
      icon: "brush.png",
      heading: "Customization",
      description:
        "A flexible and powerful templating engine and many built-in options allow you to fully customize the system to your needs.",
    },
  ];
  return (
    <Box
      sx={{
        py: 8,
      }}
    >
      <Container>
        <MotionInView variants={varFadeInUp}>
          <Typography
            variant="h6"
            color="primary.main"
            sx={{ textAlign: "center", fontWeight: 500, mb: 1 }}
          >
            KEY FEATURES
          </Typography>
        </MotionInView>
        <MotionInView variants={varFadeInUp}>
          <Typography
            variant="h2"
            color="text.primary"
            sx={{ textAlign: "center", lineHeight: 1 }}
          >
            Most Probably Included
          </Typography>

          <Typography
            variant="h2"
            color="text.primary"
            sx={{ mb: 5, textAlign: "center" }}
          >
            Best Features Ever
          </Typography>
        </MotionInView>
        <Grid container spacing={6}>
          {data.map((v) => (
            <Grid key={Math.random()} item md={4} sm={6} xs={12}>
              <MotionInView variants={varFadeInDown}>
                <Grid
                  container
                  spacing={1}
                  sx={{
                    textAlign: { xs: "center", sm: "left" },
                    justifyContent: { xs: "center", sm: "left" },
                  }}
                >
                  <Grid key={Math.random()} item xs={12} sm={12} md={2}>
                    <Image
                      src={"/icons/" + v.icon}
                      width={40}
                      height={40}
                      layout="fixed"
                      alt={
                        v.icon +
                        " icon reactjs mongodb ecommerce script || commercehope"
                      }
                    />
                  </Grid>
                  <Grid key={Math.random()} item xs={12} sm={12} md={10}>
                    <Typography variant="subtitle1" color="text.primary">
                      {v.heading}
                    </Typography>
                    <Typography color="text.secondary" mt={0.6} fontSize={12}>
                      {v.description}
                    </Typography>
                  </Grid>
                </Grid>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
