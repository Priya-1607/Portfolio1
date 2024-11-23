"use client"; // Add this line at the very top

import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Info, InfoEyebrow, InfoSubtitle, InfoTitle } from "../../components/Card/info-basic";
import { useTheme } from "@mui/material/styles";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function CardBlog() {
  const theme = useTheme();

  return (
    <Card
      sx={{

        width:"100rem",
        margin: "auto",
        borderRadius: theme.spacing(2), // 16px
        transition: "0.3s",
        boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
        position: "relative",
        maxWidth: 1000,
        overflow: "initial",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: theme.spacing(2),
        [theme.breakpoints.up("md")]: {
          flexDirection: "row",
          paddingTop: theme.spacing(2),
        },
      }}
    >
      <CardMedia
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png"
        sx={{
        
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: theme.spacing(-3),
          height: 0,
          paddingBottom: "48%",
          borderRadius: theme.spacing(2),
          backgroundColor: "#fff",
          position: "relative",
          [theme.breakpoints.up("md")]: {
          width:'30rem',
            marginLeft: theme.spacing(-3),
            marginTop: 0,
            transform: "translateX(-8px)",
          },
          "&:after": {
            content: '" "',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
            borderRadius: theme.spacing(2),
            opacity: 0.5,
          },
        }}
      />
      <CardContent>
        <Info
          useStyles={() => ({
            eyebrow: {
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: 12,
              marginBottom: "0.875em",
              display: "inline-block",
            },
            title: {
              fontSize: 20,
              
              fontWeight: "bold",
              marginBottom: "0.35em",
              fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
            },
            subtitle: {
              marginBottom: theme.spacing(2),
              fontSize: "0.8rem",
              letterSpacing: "0.00938em",
              fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
            },
          })}
        > 
        <Typography variant="h2" gutterBottom color="#F76034">
        GET IN TOUCH
</Typography>
        <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '30ch' } }}
        noValidate
        autoComplete="off"
      >
           <TextField fullWidth label="Name" id="fullWidth" />
          <TextField fullWidth label="Phone Number" id="fullWidth" />
          <TextField fullWidth label="Email" id="fullWidth" />
          <TextField fullWidth label="Email" id="fullWidth" />
          </Box>
          <Box sx={{m:5}}>
          <InfoSubtitle>
            Git is a distributed version control system. Every dev has a working copy of the code and...
          </InfoSubtitle>
          </Box>
        </Info>
        <Box sx={{display:'flex',
            justifyContent:'center'}}>
        <Button
       
          sx={{
            backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
            boxShadow: "0px 4px 32px rgba(252, 56, 56, 0.4)",
            borderRadius: 100,
            paddingLeft: 3,
            paddingRight: 3,
            color: "#ffffff",
            
          }}
        >
          Read more
        </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
