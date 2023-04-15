import Image from "next/image";
import React from "react";
import {
  Container,
  Typography,
  Grid,
  CardContent,
  Card,
  Paper,
} from "@mui/material";
import { MotionInView, varFadeInDown } from "src/components/animate";
const technologies = [
  {
    name: "React",
    image: "reactjs.png",
    description:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. React is efficient, easy to use, and plays well with other libraries such as Redux.",
  },
  {
    name: "Next.js",
    image: "nextjs.png",
    description:
      "Next.js is a JavaScript framework for building efficient and accessible websites and apps. It is a framework that is actively maintained by the open source community. It is a minimalistic framework that is designed for the modern web. It is a framework that is actively maintained by the open source community. It is a minimalistic framework that is designed for the modern web.",
  },
  {
    name: "Material-UI",
    image: "mui.png",
    description:
      "Material-UI is a collection of Material Design components and React components that implement the Material Design specification. Material-UI is an open source project, MIT licensed.",
  },
  {
    name: "Redux",
    image: "redux.png",
    description:
      "Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. ",
  },
  {
    name: "MongoDB",
    image: "mongodb.png",
    description:
      "MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL).",
  },
  {
    name: "Mongoose",
    image: "mongoose.png",
    description:
      "Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. It provides a mechanism for creating models that are easy to use, and to extend and modify.",
  },
  {
    name: "Cloudinary",
    image: "cloudinary.png",
    description:
      "Cloudinary is a cloud image hosting service that allows you to upload, store, and serve images, videos, and other media assets. It is a free service that allows you to upload, store, and serve images, videos, and other media assets. It is a free service that allows you to upload, store, and serve images, videos, and other media assets.",
  },
  {
    name: "Stripe",
    image: "stripe.png",
    description:
      "Cloudinary is a cloud image hosting service that allows you to upload, store, and serve images, videos, and other media assets. It is a free service that allows you to upload, store, and serve images, videos, and other media assets. It is a free service that allows you to upload, store, and serve images, videos, and other media assets.",
  },
];

export default function Technologies() {
  return (
    <Paper sx={{ pb: 8 }}>
      <Container>
        <MotionInView variants={varFadeInDown}>
          <Typography
            variant="h2"
            textAlign="center"
            color="text.primary"
            sx={{
              pt: { lg: 8, md: 8, sm: 8, xs: 8 },
              mb: { lg: 4, md: 4, sm: 0, xs: 0 },
            }}
          >
            Technologies
          </Typography>
        </MotionInView>
        <Grid container spacing={2}>
          {technologies.map(({ name, image, description }) => (
            <Grid key={Math.random()} item xs={12} sm={6} md={3}>
              <MotionInView variants={varFadeInDown}>
                <Card
                  sx={{
                    bgcolor: "background.neutral",
                    minHeight: 218,
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  <CardContent>
                    <Image
                      src={`/brand/${image}`}
                      alt={
                        name +
                        " " +
                        "next js react js ecommerce script || commercehope"
                      }
                      objectFit="contain"
                      width={name === "Mongoose" ? 80 : 40}
                      height={40}
                      layout="fixed"
                    />

                    <Typography gutterBottom variant="h5" component="h2" mt={1}>
                      {name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {description.slice(0, 100)}{" "}
                      {description.length > 100 && "..."}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Paper>
  );
}
