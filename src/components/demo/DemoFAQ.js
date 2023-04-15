import React from "react";
import Container from "@mui/material/Container";
import { Typography, Divider, Grid, Box } from "@mui/material";

const faq = [
  {
    question: "How can I test the TECHGATER demo?",
    answer:
      "Please click on above provided details for Client Dashboard and Client Application in order to check the features in real-time.",
  },
  {
    question: "Do you charge for testing?",
    answer:
      "Not at all, we offer free application testing. There are no charges for testing. You can test this ecommerce application anytime by visiting the demo page.",
  },
  {
    question: "May I test the application on my hosting?",
    answer:
      "Sorry, we do not offer to test on your hosting. You can test the entire application on our server. Once you are satisfied, you can purchase and install it on your website. We will provide complete support.",
  },
  {
    question: "What is included in the application?",
    answer:
      "We have added all the features for running your business, and you are free to test the entire application from back-end to front-end.",
  },
  {
    question: "Is your application responsive?",
    answer:
      "Yes, our all themes and user-interface are 99% responsive and optimized for desktop PC, laptop, tablet or phone device. We will recommend you open the demo on your mobile, tablet and laptop to experience.",
  },
];

export default function DemoFAQ() {
  return (
    <Box my={3}>
      <Container>
        <Typography
          variant="h4"
          color="text.primary"
          sx={{ textAlign: "center", mt: 7, mb: 2 }}
        >
          FAQ
        </Typography>
        <Divider />
        <Grid container spacing={2}>
          {faq.map((v, index) => (
            <Grid item key={Math.random()} lg={6} md={6} sm={12} xs={12}>
              <Box my={2}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  {v.question}
                </Typography>
                <Typography variant="body1" color="text.primary" sx={{ minHeight: 80 }}>
                  {v.answer}
                </Typography>
              </Box>
              <Divider />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
