'use strict'

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function AdminAbout() {
  const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const onSubmit = async (event:any) => {
    event.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());
    try {
      const response = await axios.post("/update-about", {
        ...values,
        _id: portfolioData.about._id,
      });
      if (response.data.success) {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
    
      {/* <form onSubmit={onSubmit} initialValues={portfolioData.about}> */}
        <div className='bakground'>
          <div className="mb-3">
          <div className="container">
          <div className="content">
            <label htmlFor="welcomeText" className="form-label new1">About</label>
            <input type="text" className="form-control" id="lotti-url" placeholder="lotti-url" name="lotti-url" />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description1" placeholder="description" name="description1" />
          </div>
          
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description2" placeholder="Description" name="description2" />
          </div>
          <div>
            <button type="submit">SAVE</button>
          </div>
          </div>
          </div>
        </div>
      {/* </form> */}
    </>
  );
}

export default AdminAbout;
