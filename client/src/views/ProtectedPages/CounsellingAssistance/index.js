import React from 'react';
import './CounsellingStyle.css';


const Index = (props) => {
  return (
    // <h1>Counselling Assistance</h1>
    <div class="content">
      

      <div class="content-body">
        <div class="content-head">
        {/* <h1> Counselling Assistance </h1> */}
      </div>

        {/* Basic Information Section */}
        <div class="info">
          <span class='info-head'> Basic Information </span>
          <div class="input-boxes">
            <input type="text" class="input-text" name="Fname" placeholder="First name"></input> <br></br>
            <input type="text" name="Lname" placeholder="Last name"></input> <br></br>
            <input type="text" name="Program" placeholder="Program"></input> <br></br>
            <input type="date" name="Year" placeholder="Year"></input> <br></br>
            <input type="text" name="Address" placeholder="Address"></input> <br></br>
            <input type="text" name="Phone" placeholder="Phone"></input> <br></br>
            <input type="text" name="Email" placeholder="Email"></input> <br></br>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr class="line"></hr>

        {/* Description Section */}
        <div class="descriptionBox">
          <span class="description" > Description </span>
          <div class="input-section">
            <textarea class="text-box" rows="12" cols="70" placeholder="Your message">

            </textarea>
          </div>
          <span class="send-btn">
            <input type="button" value="send" name="send"></input>
          </span>
        </div>
        </div>
    </div>
  )
}

export default Index;