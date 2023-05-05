import React from 'react';
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="items-grid">
      <div class="hometext">
      <h2>Bring your<br></br>home to life.</h2>
      <p>Elevate your living space with a touch of nature.
       <br></br> We offer a range of easy-care houseplants.
      </p><br></br>
      <div class="white">
      <Link to="/about">Browse plants</Link>
      </div>
      <br></br></div>
      <img width="50%" src="https://user-images.githubusercontent.com/118732445/203775030-f6d39588-6b73-42eb-a396-d50098078501.jpg" alt="" />
    </div>
  )
}