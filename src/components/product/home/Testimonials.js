import React from "react";
import dynamic from "next/dynamic";
import { Container, Box, Typography, Paper } from "@mui/material";
import { MotionInView, varFadeInUp } from "src/components/animate";
const CarouselCenterMode = dynamic(
  () => import("src/components/carousel/CarouselCenterMode"),
  {
    suspense: true,
  }
);
export default function Testimonials() {
  return (
    <Paper>
      <Container>
        <MotionInView variants={varFadeInUp}>
          <Typography
            variant="h2"
            textAlign="center"
            color="text.primary"
            sx={{
              pt: { lg: 8, md: 8, sm: 8, xs: 8 },
              mb: { lg: 4, md: 4, sm: 0, xs: 0 },
            }}
          >
            Testimonials
          </Typography>
        </MotionInView>
        <CarouselCenterMode />
        <Box p={4} />
      </Container>
    </Paper>
  );
}
