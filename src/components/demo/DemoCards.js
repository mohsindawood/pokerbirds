import React from "react";
import Link from "src/utils/link";
import Container from "@mui/material/Container";
import Image from 'next/image'
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Stack
} from "@mui/material";
export default function DemoCards({ data }) {
  return (
    <>
      {/* <Card sx={{
      boxShadow: 'none',
      border: 1,
      borderColor: theme => theme.palette.divider,
      borderRadius: 1
    }}>
      <CardContent sx={{ p: 0, pb: '0 !important' }}>
        <Stack alignItems="center" direction='row' spacing={{ xs: 2, md: 7 }}>
          <Box position='relative' width={200} height={150}
            sx={{
              background: theme => theme.palette.gradients.primary,
              '&:before': {
                content: "''",
                position: 'absolute',
                width: 80,
                height: 'calc(100% + 100px)',
                background: 'linear-gradient(to right bottom, rgb(0, 116, 249), rgb(5, 8, 159) 226%)',
                right: -8,
                top: -12,
                transform: 'rotate(12deg)'
              }
            }}
          >
            <Image
              src={data.img}
              alt="magentoassist"
              placeholder="blur"
              blurDataURL={data.img}
              layout="fill"
            />
          </Box>
          <Stack alignItems='center' p={1}>
            <Typography
              gutterBottom
              variant="h4"
              color="text.primary"
              sx={{
                span: {
                  fontWeight: "400",
                },
              }}
            >
              {data.title}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                textTransform: "lowercase",
                fontWeight: "500",
                px: { md: 7, xs: 2 }
              }}
              component={Link}
              href={data.link}
              target="_blank"
            >
              View Demo
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card > */}
      <Box>
        <Card sx={{
          boxShadow: 'none',
          border: 1,
          borderColor: theme => theme.palette.divider,
          borderRadius: 1
        }}>
          <CardContent sx={{ p: 0, pb: '0 !important' }}>
            <Stack alignItems="center" direction='row'>
              <Grid container alignItems="center" spacing={{ xs: 2, md: 7 }}>
                <Grid item xs={12} sm={5}>
                  <Box
                    sx={{
                      position: 'relative',
                      background: theme => theme.palette.gradients.primary,
                      zIndex: 0,
                      width: "100%",
                      '&:before': {
                        content: "''",
                        position: 'absolute',
                        width: { xs: 60, sm: 80 },
                        height: { xs: 'calc(100% + 250px)', sm: 'calc(100% + 100px)' },
                        background: 'linear-gradient(to right bottom, rgb(0, 116, 249), rgb(5, 8, 159) 226%)',
                        right: { xs: 162, sm: -8 },
                        top: { xs: -53, sm: -12 },
                        transform: { xs: 'rotate(95deg)', sm: 'rotate(12deg)' },
                        zIndex: -1,
                      },
                      img: {
                        maxWidth: "200px",
                        display: "flex",
                        mx: "auto",
                      }
                    }}
                  >
                    <img src={data.img} alt="magentoassist" />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Stack alignItems='center' p={1} sx={{
                    mt: { xs: 3, sm: 0 },
                    mb: { xs: 2, sm: 0 },
                  }}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      color="text.primary"
                      sx={{
                        span: {
                          fontWeight: "400",
                        },
                      }}
                    >
                      {data.title}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        textTransform: "lowercase",
                        fontWeight: "500",
                        px: { md: 7, xs: 2 }
                      }}
                      component={Link}
                      href={data.link}
                      target="_blank"
                    >
                      View Demo
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </CardContent>
        </Card >
      </Box>
    </>
  );
}
