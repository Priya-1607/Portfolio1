import React from 'react'
// import { Button } from "@/components/ui/button"
import Button from "@mui/material/Button";
import { useSelector } from 'react-redux';
import { TypeAnimation } from 'react-type-animation';
import "./intro.css"
import Footer from '../Footer/footer';
interface IntroData {
  firstName?: string;
  lastName?: string;
  welcomeText?: string;
  description?: string;
  caption?: string;
  description1?: string;
  description2?: string;
  skills?: string[];
}

interface PortfolioData {
  intro?: IntroData;
}

interface RootState {
  root: {
    portfolioData?: PortfolioData;
  };
}

function Intro() {
  // const {portfolioData} = useSelector((state) => state.root);
  // console.log("portfolioData",portfolioData);
  // if (!portfolioData) {
  //   return <div>Loading...</div>; // or return a loading indicator
  //   console.log("portfolioData",portfolioData);
  // }
  const rootState = useSelector((state: RootState) => state); // Get the entire state for debugging
  console.log("Redux State:", rootState); // Log it to verify structure

  // const { portfolioData } = useSelector((state: RootState) => state.root);
  const { portfolioData } = useSelector((state: RootState) => state.root || {}); 
  // if (!portfolioData) {
  //   console.log("portfolioData1111", portfolioData);
  //   return <div>Loading...</div>; // Display a loading indicator
  // }
  // const { intro } = portfolioData;
  console.log("portfolioData",portfolioData);
  
  // Check if intro exists before destructuring its properties
  // const { firstName, lastName, welcomeText, description, caption } = intro || {};

  return (
    <>

    <div className='back'>
    <div className='mainHeadingnew'>
    <div className='mainHeading'>
      <div className='heading'>
     <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
    
    </h1>
    <div className='secHeading'>
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl secHeading">
     Every app is special
    </h1>
    </div>
    </div>
    <div className='para scroll-pl-6 snap-x'>
<TypeAnimation

      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Mern Stack Developer MongoDB',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Mern Stack Developer Express', 
        1000,
        'Mern Stack Developer React',
        1000,
        'Mern Stack Developer Node',
        1000
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block',marginLeft:'1rem'}}
      repeat={Infinity}
    
    />
     </div>
</div>
    </div>
    <div className='pra2'>
    <h1 className='text-7xl text-secondary font-semibold'>Priya Singh</h1>
   
   
    </div>
   <div className='mainHeadingnew'>
    <div className='par1'>   <h3 className='text-white font-semibold'>Experience is the name everyone gives to their mistakes.</h3></div>
   

    <div className='btn'>
    {/* <Button variant="outline">Outline</Button> */}
    {/* <Button variant="outline" className='btnsec'>Outline</Button> */}
    <div className='jkl'>
    
    <Button
       
       sx={{
         backgroundImage: "linear-gradient(147deg, #ffffff 0%, #ffffff 74%)",
         boxShadow: "0px 4px 32px rgba(252, 56, 56, 0.4)",
         borderRadius: 100,
         paddingLeft: 3,
         paddingRight: 3,
         color: 'black',
         
       }}
     >
       Get Cv
     </Button>

     </div>

     
     <div className='jklo'>
     <Button
       
       sx={{
         backgroundImage: "linear-gradient(147deg, #ffffff 0%, #ffffff 74%)",
         boxShadow: "0px 4px 32px rgba(252, 56, 56, 0.4)",
         borderRadius: 100,
         paddingLeft: 3,
         paddingRight: 3,  color: 'black', 
         
       }}
     >
       Hire Me
     </Button>
     </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Intro

