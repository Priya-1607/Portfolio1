"use client"

import React, { useState, useEffect } from 'react';
import './project.css'
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
interface Experience {
    company: string;
    description: string;
    period: string;
    title: string;
   
}
const words = ["React", "JavaScript", "CSS", "HTML", "Animation"];

const cards = [
    { id: 1, content:'https://media.licdn.com/dms/image/v2/C4E0BAQFP_oSKSARMrA/company-logo_200_200/company-logo_200_200/0/1633933254815?e=2147483647&v=beta&t=jgWloUdOMDA1DLR6e3zj81oT_4jreBDEY5Zm2WOnNnY', projectName: 'Writo Tech', skill:'HTML5,CSS,Reactjs,Javascript,Tailwind CSS, Materia ui',discription:'Teaching platform for providing mentorship and teaching about website design'},
    { id: 2, content: 'https://play-lh.googleusercontent.com/BrbGS9IJWcAF2DCYlaECjljtx7MrYyU5Th1mu8YIpvQyg5YYYZCPrHosbJTnRIAihA=w1052-h592-rw', projectName: 'DCLUTTER',skill:'HTML5,CSS,Reactjs,Javascript,Tailwind CSS',discription:'PWA for raw material and cut down paperwork by 75%.Designed and api integration for modules are Sales Report,Add Quotation,Order List,Add Sales in Reactjs,Add Quotation,Order List,Add Sales in Reactjs' },
    { id: 3, content: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fonline-shopping-background&psig=AOvVaw27heJtY8WIVdX2kx2yM-Hw&ust=1732190506375000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjynfHu6okDFQAAAAAdAAAAABAY', projectName: 'Fantastic style',skill:'HTML5,CSS,Reactjs,Javascript,Tailwind CSS',discription:'Shopping website we can buy Products add to Cart delete items from Cart' },
    { id: 4, content: 'Card 3 Content', projectName: 'Fantastic style',skill:'HTML5,CSS,Reactjs,Javascript,Tailwind CSS',discription:'Shopping website we can buy Products add to Cart delete items from Cart' },
    // Add more cards as needed
  ];
  
function Experience() {

    const [currentCard, setCurrentCard] = useState(cards[0]);

    const handleScroll = (e) => {
      const scrollTop = e.target.scrollTop;
      const cardHeight = 200; // Adjust based on your card height
      const index = Math.floor(scrollTop / cardHeight);
      if (index < cards.length) {
        setCurrentCard(cards[index]);
      }
    };
  
    // new ScrollCarousel(".my-carousel", {slideSelector: ".my-slide"});
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
            Explore
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
    //     <Card
    //     sx={{
    //       width: 343,
    //       maxWidth: "100%",
    //       borderRadius: "12px",
    //       padding: 1.5,
    //       boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    //     }}
    //   >
    //     <CardMedia
    //       image={
    //         "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
    //       }
    //       sx={{
    //         borderRadius: "6px",
    //         width: "100%",
    //         height: 0,
    //         paddingBottom: "min(75%, 240px)",
    //         backgroundColor: "rgba(0,0,0,0.08)",
    //       }}
    //     />
    //     <CardContent>
    //       <Info useStyles={getInfoN04Styles}>
    //         <InfoEyebrow>Kesha</InfoEyebrow>
    //         <InfoTitle>Inner Varnika</InfoTitle>
    //         <InfoSubtitle>
    //           That year, collection of songs, review melodies, memories full, this
    //           is a long and warm journey
    //         </InfoSubtitle>
    //       </Info>
    //     </CardContent>
    //   </Card>
  
  






      




        // <div className="word-container">
    
        // <div className="static-word">
        //   Static Word
        // </div>
  
       
    //     <div className="word-swipe">
    //       <span className="word">{words[currentWordIndex]}</span>
    //     </div>
    //   </div>
    
        // <SectionTitle title="Experience" /> 
        //  <div className='flex py-10'>
        //         <div className='flex flex-col gap-5 border-l-2 border-[#008000] w-1/2'>

        //             {experiences?.map((experience: any, index: number) => (
        //                 <div onClick={() => {
        //                     setSelectItemIndex(index);
        //                 }} className='cursor-pointer'>
        //                     <div className='p-5 gap-10'>
        //                         <h1 className={`text-xl ${selectItemIndex === index ? "text-tertiary border-[#2AAA8A] border-l-4 -ml-1" : "text-white"}`}>
        //                             {experience.period}
        //                         </h1>
        //                     </div>
        //                 </div>
        //             ))} 

                    
        //         </div>
        //         <div className='flex flex-col gap-5'>
        //             <h1 className='text-secondary text-xl'>{experiences[selectItemIndex].title}</h1>
        //             <p className='text-white'>
        //                 I always fancy I see people walking in these numerous paths and arbors, but John has cautioned me not to give way to fancy in the least. He says that with my imaginative power and habit of story-making a nervous weakness like mine is sure to lead to all manner of excited fancies and that I ought to use my will and good sense to check the tendency. So I try.
        //             </p>


        //         </div>
        //     </div> 


        
    );
}

export default Experience;



// import React from 'react'
// import SectionTitle from '@/components/SectionTitle'
// import { useState } from 'react'
// import { useSelector } from 'react-redux';
// function Experience() {
//     const [selectItemIndex, setSelectItemIndex] = React.useState(0);
//     const {portfolioData} = useSelector((state) => state.root);
//     if (!portfolioData) {
//       return <div>Loading...</div>; // or return a loading indicator
//       console.log("portfolioData",portfolioData);
//     }
//     const { experiences } = portfolioData;
//     const { company,description,period,title} = experiences || {};
//   return (
//     <div>  <div>
//     <SectionTitle title="Experience" />
//     <div className='flex py-10'>
//         <div className='flex flex-col gap-5 border-l-2 border-[#008000] w-1/2'>
//             {
//                 experience?.map((experience, index) => (
//                     <div onClick={() => {
//                         setSelectItemIndex(index)
//                     }}
//                         className='cursor-pointer'>
//                         <div className='p-5 gap-10'>
//                             <h1 className={`text-xl ${selectItemIndex === index ? "text-tertiary border-[#2AAA8A] border-l-4 -ml-1" : "text-white"}`}>{experience.period}

//                             </h1>
//                         </div>
//                     </div>
//                 ))
//             }
//         </div>
//         <div className='flex flex-col gap-5'>
//             <h1 className='text-secondary text-xl'>{experience[selectItemIndex].title}</h1>
//             <p className='text-white'>
//               I always fancy I see people walking in these numerous paths and arbors, but John has cautioned me not to give way to fancy in the least. He says that with my imaginative power and habit of story-making a nervous weakness like mine is sure to lead to all manner of excited fancies and that I ought to use my will and good sense to check the tendency. So I try.
//             </p>
//         </div>

//     </div>
// </div></div>
//   )
// }

// export default Experience