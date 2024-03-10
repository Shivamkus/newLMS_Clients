import React from "react";
import { styles } from "../styles/style";
// import { GoogleMap, LoadScript } from "react-google-maps-api";

// const MapContainer = () => {
//     const mapStyles = {
//       height: "50vh",  // Set the height of the map container
//       width: "100%",   // Set the width of the map container
//     };
  
//     return (
//       <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
//         <GoogleMap
//           mapContainerStyle={mapStyles}
//           zoom={15}
//           center={{ lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }}  // Replace with your desired coordinates
//         />
//       </LoadScript>
//     );
//   };


const contact = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        Contact <span className="text-gradient">us</span>
      </h1>
      <div className="w-[50%]">
      <h1 className={`${styles.title}`}>Join to ELearning</h1>
      <form 
    //   onSubmit={}
      >
        <div className="mb-3">
          <label className={`${styles.label}`} htmlFor="email">
            Enter your Name
          </label>
          <input
            type="text"
            name=""
            // value={}
            // onChange={}
            id="name"
            placeholder="johndoe" 
            className={` ${
                styles.input
              }`}
          />
        
        </div>
        <label className={`${styles.label}`} htmlFor="email">
          Enter your Email
        </label>
        <input
          type="email"
          name=""
        //   value={values.email}
        //   onChange={handleChange}
          id="email"
          placeholder="loginmail@gmail.com"
          className={` ${
            styles.input
          }`}
        />
        {/* {errors.email && touched.email && (
          <span className="text-red-500 pt-2 block">{errors.email}</span>
        )} */}

<div className="mb-3">
  <label className={`${styles.label}`} htmlFor="message">
    Enter your message
  </label>
  <textarea
    name="message"
    // value={}
    // onChange={}
    id="message"
    placeholder="Write your message here..." 
    className={`${
      styles.input
    }`}
  />
</div>




        




        
        <div className="w-full mt-5">
          <input type="submit" value="Sign Up" className={`${styles.button}`} />
        </div>
        <br />
        
      </form>
      <br />
    </div>
  
      
    </div>

  );
};

export default contact;
