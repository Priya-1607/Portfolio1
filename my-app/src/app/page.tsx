"use client"

import Intro from "@/components/Intro/intro";
import Image from "next/image";
import { useEffect } from 'react';
import Aboutpage from "./about/page";
import IntroBack from "@/components/IntroBackground/IntroBack";
import { Provider } from 'react-redux';
import {store} from './../redux/store'
import { useDispatch, useSelector } from 'react-redux';
import { setPortfolioData } from './../redux/rootSlice';
import axios from 'axios'
export default function Home() {
  const dispatch=useDispatch();
  const getPortfolioData = async () => {
    try {
      // /get-portfolio-data
      const response = await axios.get('/api/portfolio/get-portfolio-data');
      dispatch(setPortfolioData(response.data));
      console.log("jejhjhds1111",setPortfolioData(response.data))
    } catch (error) {
      console.log("Error fetching portfolio data:", error);
    }
  };

  useEffect(() => {
    getPortfolioData();
  }, []);
  return (
   
   <>
    
   <IntroBack/>
 
   </>
  );
}
