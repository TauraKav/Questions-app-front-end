import React, { useState } from "react";
import axios from "axios";
// import TripCard from "../components/tripCard/TripCard";
import styles from "./styles.module.css";
// import Navbar from "../components/navbar/Navbar";
// import Footer from "../components/footer/Footer";

const TripsPage = ({ journeys }) => {
  const [trips, setTrips] = useState (journeys);

  return (
    <> 
    {/* <Navbar/> */}
    
    <div className={styles.tripsWrapper}>
      <div className={styles.tripWrapper}>
      {trips && trips.map((trip) => (
          <div key={trips.id}>
          {/* <TripCard
            id={trip.id}
            country={trip.country}
            imageUrl={trip.image_url}
            date ={trip.date}
            duration ={trip.duration}
           price ={trip.price}/> */}
          </div>
        ))}
        </div>
</div>

{/* <Footer/> */}
</>
    
  )
}

export default TripsPage

export async function getServerSideProps() {
  try {
    const response = await axios.get("https://649316f4428c3d2035d15013.mockapi.io/journeys");

     const { data } = response;

    return { props: { journeys: data } };
  } catch (err) {
    console.log(err);
  }
}