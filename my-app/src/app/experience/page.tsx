"use client"

import React, { useState, useEffect } from 'react';
import './experience.css'
import { useSelector } from 'react-redux';
import SectionTitle from '@/components/SectionTitle';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Info, InfoEyebrow, InfoSubtitle, InfoTitle } from "../../info/info-basic";
import { getInfoN04Styles } from '../info-n04/info-n04'
import Box from "@mui/material/Box";

import CardActionArea from "@mui/material/CardActionArea";

import Typography from "@mui/material/Typography";
import writoTech from '../../../public/image/Screenshot 2024-11-20 at 5.06.44 PM.png'
const words = ["React", "JavaScript", "CSS", "HTML", "Animation"];

const cards = [
    { id: 1, content:'https://exchange4media.gumlet.io/news-photo/131010-130097-125512-116705-timesinternet-edited.webp', projectName: 'Times Internet(pay Roll on Alleviate technologies pvt. ltd)', skill:'HTML5,CSS,Reactjs,Javascript,Tailwind CSS, Materia ui',discription:'Created many websites like Mandinews ,Dainik Haryana News,Hrnews18,Newzfastindia,Haryana News Hub'},
    { id: 2, content: 'https://play-lh.googleusercontent.com/BrbGS9IJWcAF2DCYlaECjljtx7MrYyU5Th1mu8YIpvQyg5YYYZCPrHosbJTnRIAihA=w1052-h592-rw', projectName: 'Bucle Labs Pvt Ltd',skill:'HTML5,CSS,Reactjs,Javascript,Tailwind CSS',discription:'PWA for raw material and cut down paperwork by 75%.Designed and api integration for modules are Sales Report,Add Quotation,Order List,Add Sales in Reactjs,Add Quotation,Order List,Add Sales in Reactjs' },
    { id: 3, content: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fonline-shopping-background&psig=AOvVaw27heJtY8WIVdX2kx2yM-Hw&ust=1732190506375000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjynfHu6okDFQAAAAAdAAAAABAY', projectName: 'Myclick India Pvt Ltd',skill:'HTML5,CSS,Reactjs,Javascript,Tailwind CSS',discription:'Shopping website we can buy Products add to Cart delete items from Cart' },
    { id: 4, content: 'Card 3 Content', projectName: 'Fantastic style',skill:'HTML5,CSS,Reactjs,Javascript,Tailwind CSS',discription:'Shopping website we can buy Products add to Cart delete items from Cart' },
    // Add more cards as needed
  ];
  
function Experiencepage() {
    const [currentCard, setCurrentCard] = useState(cards[0]);

    const handleScroll = (e) => {
      const scrollTop = e.target.scrollTop;
      const cardHeight = 200; // Adjust based on your card height
      const index = Math.floor(scrollTop / cardHeight);
      if (index < cards.length) {
        setCurrentCard(cards[index]);
      }
    };
  return (
    <div className="app">
    {/* <div className="fixed-container">
    <h2>Fixed Container</h2>
     
      <p>{currentCard.content}</p>
    </div> */}


    <div className="scrollable-container" onScroll={handleScroll}>
      {cards.map((card) => (



        <div >
  <Card   key={card.id} className="card" style={{ height: '30rem' }}
    sx={{
      maxWidth: 504,
  
      margin: "auto",
      borderRadius: 0,
      position: "relative",
    }}
  >
    <CardMedia
      image={
          card.content
      }
      sx={{
        position: "absolute",
        width:'100%',
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 0,
        backgroundColor: "rgba(0, 0, 0, 0.08)",
        backgroundPosition: "center",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        transition: "0.3s",
      }}
    />
    <CardActionArea>
      <CardContent sx={{ p: 3 }}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          minHeight={360}
          color={"common.white"}
          textAlign={"center"}
          sx={{
            "& h2": {
              color: "#fff",
              letterSpacing: "2px",
              fontSize: "2.15rem",
              fontWeight: 700,
              lineHeight: 1.45,
              fontFamily: "'Playfair Display',serif",
              mb: "1.275rem",
            },
          }}
        >
         {card.content}
        </Box>
        <Typography
          variant={"overline"}
          sx={{
            display: "block",
            textAlign: "center",
            color: "#fff",
            letterSpacing: "3px",
            fontWeight: 200,
            fontSize: 12,
          }}
        >
       
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>





{/* 
             <Card
            key={card.id} className="card" style={{ height: '200px' }}
     sx={{
       width: 343,
       maxWidth: "100%",
       borderRadius: "12px",
       padding: 1.5,
       boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
      }}
    >
     <CardMedia
       image={
        "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
        }
       sx={{
           borderRadius: "6px",
           width: "100%",
           height: 0,
           paddingBottom: "min(75%, 240px)",
           backgroundColor: "rgba(0,0,0,0.08)",
         }}
       />
       <CardContent>


       <Info useStyles={getInfoN04Styles}>
       {card.content}
      </Info>
     
     </CardContent>
    </Card>  */}





        </div>
      ))}
    </div>
    <div className='jjj'>
     
      <p>{currentCard.projectName}</p>
      <p>{currentCard.skill}</p>
      <p>{currentCard.discription}</p>
    </div>
  </div>
  )
}

export default Experiencepage