// 'use client';

// import React from 'react'
// import "./about.css"
// import { useDispatch,useSelector } from 'react-redux';
// import Footer from '@/components/Footer/footer'
// // import {RootState}  from '../../redux/store'
// import { Provider } from 'react-redux';
// import axios from 'axios';
// import {store} from '../../redux/store'
// import { useEffect } from 'react';
// import { setPortfolioData } from '@/redux/rootSlice';
// interface AboutData {
//   description1?: string;
//   description2?: string;
//   skills?: string[];
// }

// interface PortfolioData {
//   about?: AboutData;
// }

// interface RootState {
//   root: {
//     portfolioData?: PortfolioData;
//   };
// }
// function Aboutpage() {

//   // const {portfolioData}=useSelector((state)=>state.root)
//   const dispatch=useDispatch();
// const getPortfolioData= async ()=>{
//   try {
//     const response=await axios.get('api/portfolio/get-portfolio-data')
//   dispatch(setPortfolioData(response.data))

  
//   } catch (error) {
//     console.log("error");
//   }
// }
//   useEffect(()=>{
//     getPortfolioData()
//   },[])

//   const rootState = useSelector((state: RootState) => state); // Get the entire state for debugging
//   console.log("Redux State:", rootState); // Log it to verify structure

//   // const { portfolioData } = useSelector((state: RootState) => state.root);
//   const { portfolioData } = useSelector((state: RootState) => state.root || {}); 
//   if (!portfolioData) {
//     console.log("portfolioData1111", portfolioData);
//     return <div>Loading...</div>; // Display a loading indicator
//   }

//   const { about } = portfolioData;
//   const { description1, description2, skills } = about || {};

//   // const rootState = useSelector((state: RootState) => state); // Get the entire state for debugging
//   // console.log("Redux State:", rootState); // Log it to verify structure

//   // const { portfolioData } = useSelector((state: RootState) => state.root || {}); // Adjust based on actual structure

//   // if (!portfolioData) {
//   //   console.log("portfolioData is undefined");
//   //   return <div>Loading...</div>; // Return a fallback component if data is missing
//   // }


  
//   return (<>
//    <Provider store={store}>
//     <div><h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mainHeading top-head">
//       About
//     </h1>
//     <pre>{JSON.stringify(portfolioData, null, 2)}</pre>
// <div className='mainDiv'>
//     <div className='firstDiv'>
//     <small className="text-sm font-medium leading-none">
//     {description1}
//         </small><br/>
//         <small className="text-sm font-medium leading-none">
//         {description2}
       
//         </small>
//       </div>
//       <div className='secondDiv'>
//       <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
//       Here are a few technologies  I've been workink with recently
//       </h4>
//       {skills.map((skills:any, index:any) => (
//     <div className='border border-tertiary py-3 px-10 gap-2' key={index}>
//                             <h1 className='text-tertiary space-3 h-xl'>{skills}</h1></div>
//                         ))}
//       </div>
//       </div>
//     </div>
//     </Provider>
//     </>
//   )
// }

// export default Aboutpage



// 'use client';

// import React, { useEffect } from 'react';
// import "./about.css";
// import { useDispatch, useSelector } from 'react-redux';
// import Footer from '@/components/Footer/footer';
// import axios from 'axios';
// import { setPortfolioData } from '@/redux/rootSlice';

// interface Intro {
//   welcomeText: string;
//   firstName: string;
//   lastName: string;
//   caption: string;
//   description: string;
// }

// interface AboutData {
//   description1: string;
//   description2: string;
//   skills: string[];
// }

// interface Project {
//   _id: string;
//   title: string;
//   img: string;
//   link: string;
//   description: string;
// }

// interface Experience {
//   _id: string;
//   company: string;
//   title: string;
//   period: string;
//   description: string;
// }

// interface PortfolioData {
//   intro: Intro;
//   about: AboutData;
//   projects: Project[];
//   experiences: Experience[];
// }

// interface RootState {
//   root: {
//     portfolioData?: PortfolioData | null;
//   };
// }

// function Aboutpage() {
//   const dispatch = useDispatch();

//   const getPortfolioData = async () => {
//     try {
//       const response = await axios.get('/api/portfolio/get-portfolio-data');
//       dispatch(setPortfolioData(response.data)); // Dispatching fetched data
//       console.log("Fetched Portfolio Data:", response.data.intro.caption);
//     } catch (error) {
//       console.error("Error fetching portfolio data:", error);
//     }
//   };

//   useEffect(() => {
//     getPortfolioData();
//   }, []);

//   const portfolioData = useSelector((state: RootState) => state.root?.portfolioData || null);

//   console.log("portfolioData1www11", portfolioData);
  
// if (!portfolioData) {
//   return <div>Loading...</div>;
// }
// const { intro, about, projects, experiences } = portfolioData;
// const { description1, description2, skills } = about;

// // Destructure safely with default values

// //   const { portfolioData } = useSelector((state: RootState) => state.root || {});
// // console.log("portfolioData111",portfolioData)
  
// //   if (!portfolioData) {
// //     return <div>Loading...</div>;
// //   }

// //   const { about } = portfolioData;
// //   const { description1='', description2='', skills = [] } = about || {};

//   return (
//     <div>
//       <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mainHeading top-head">
//         About
//       </h1>
//       <div className='mainDiv'>
//         <div className='firstDiv'>
//           <small className="text-sm font-medium leading-none">{}</small><br/>
//           <small className="text-sm font-medium leading-none">{description2}</small>
//         </div>
//         <div className='secondDiv'>
//           <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
//             Here are a few technologies I've been working with recently
//           </h4>
//           {skills.map((skill, index) => (
//             <div className='border border-tertiary py-3 px-10 gap-2' key={index}>
//               <h1 className='text-tertiary space-3 h-xl'>{skill}</h1>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Aboutpage;

'use client';

import React, { useEffect } from 'react';
import "./about.css";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setPortfolioData } from '@/redux/rootSlice';

interface Intro {
  welcomeText: string;
  firstName: string;
  lastName: string;
  caption: string;
  description: string;
}

interface AboutData {
  description1: string;
  description2: string;
  skills: string[];
}

interface Project {
  _id: string;
  title: string;
  img: string;
  link: string;
  description: string;
}

interface Experience {
  _id: string;
  company: string;
  title: string;
  period: string;
  description: string;
}

interface PortfolioData {
  intro: Intro;
  about: AboutData;
  projects: Project[];
  experiences: Experience[];
}

interface RootState {
  root: {
    portfolioData?: PortfolioData | null;
  };
}

function Aboutpage() {
  const dispatch = useDispatch();

  // Fetch portfolio data
  const getPortfolioData = async () => {
    try {
      const response = await axios.get('/api/portfolio/get-portfolio-data');
      dispatch(setPortfolioData(response.data));
    } catch (error) {
      console.error("Error fetching portfolio data:", error);
    }
  };

  useEffect(() => {
    getPortfolioData();
  }, []);


  const portfolioData = useSelector((state) => {
    console.log("Redux State:", state); // Log the entire state
    return state.root?.portfolioData || null;
});

console.log("Portfolio Data:", portfolioData); // Log portfolioData

// if (!portfolioData) {
//     return <div>Loading...</div>;
// }

// const { about } = portfolioData;
// const { description1 = '', description2 = '', skills = [] } = about || {};

// console.log("Description1:", description1);
// console.log("Description2:", description2);


// https://bobaekang.com/images/blog/20201108_1.PNG

  return (
    <div className='home'>
       <div className="container">
       <div className="content">
      <h1 className="text-4xl font-extrabold kk">About</h1>

      {/* Introduction Section */}
     
      {/* About Section */}
      <div>
        {/* <h2>About Me</h2> */}
        <p className='gg'>
        🚀 Passionate Full Stack Developer | 2 Years of Experience
        Greetings! 👋 As a seasoned Full Stack Developer, I bring a versatile skill set encompassing the <br/> entire MERN (MongoDB, Express.js, React, Node.js) stack. 💻 My expertise extends to Nest.js, Redux, Next.js, and I thrive on writing efficient and  <br/> maintainable code  using modern JavaScript (ES6).
        </p>
        <p className='gg'>In the backend realm, I wield the power of Node.js and Express.js, coupled with MongoDB to create robust and scalable solutions. 🚀 On the frontend, I craft <br/>engaging user interfaces with React.js, manage state seamlessly with Redux, and explore the possibilities of Next.js. The magic of ES6, JavaScript, HTML,  <br/>and CSSis where I build the foundation of visually appealing and responsive designs. 

My journey is driven by a passion for bringing ideas to life and delivering <br/> high-quality solutions. 🌐 Let's connect and explore how my skills can contribute to the success of your projects.<br/> 🤝 Excited about the possibilities that lie ahead! 🚀</p>
   
        {/* <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul> */}
      </div>

      {/* Projects Section */}
      <div>
    
        {/* {projects.map((project) => (
          <div key={project._id}>
            <h3>{project.title}</h3>
            <img src={project.img} alt={project.title} />
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))} */}
      </div>

      {/* Experiences Section */}
      <div>
    
        {/* {experiences.map((exp) => (
          <div key={exp._id}>
            <h3>{exp.title} at {exp.company}</h3>
            <p>{exp.period}</p>
            <p>{exp.description}</p>
          </div>
        ))} */}
      </div>
      </div>
      </div>
    </div>
  );
}

export default Aboutpage;
