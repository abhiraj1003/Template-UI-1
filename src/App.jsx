import React from 'react';
import Header from './components/Navbar';
import HeaderCarousel from './Pages/HeaderCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Marquee from './Pages/Marquee';
import PlacementSection from './Pages/PlacementSection';
import Keypoints from './Pages/Keypoints';
import PopCourses from './Pages/PopCourses';
import FeedbackAndReviews from './Pages/FeedbacksandReviews';


function App() {
  return (
    <div className="App">
      <Marquee />
      <Header />
      <HeaderCarousel />
      <Marquee />
      <Keypoints />
      <PopCourses />
      <PlacementSection />
      <FeedbackAndReviews />
      
      
    </div>
  );
}

export default App;
