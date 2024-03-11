// import React, { useState } from "react";
// import { styles } from "../styles/style";
// // import { GoogleMap, LoadScript } from "react-google-maps-api";

// // const MapContainer = () => {
// //     const mapStyles = {
// //       height: "50vh",  // Set the height of the map container
// //       width: "100%",   // Set the width of the map container
// //     };

// //     return (
// //       <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
// //         <GoogleMap
// //           mapContainerStyle={mapStyles}
// //           zoom={15}
// //           center={{ lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }}  // Replace with your desired coordinates
// //         />
// //       </LoadScript>
// //     );
// //   };

// const contact = () => {

//   const [mobileNumber, setMobileNumber] = useState("");

//   const handleMobileNumberChange = (e: { target: { value: any; }; }) => {
//     const enteredNumber = e.target.value;

//     // Check if the entered number has more than 10 digits
//     if (enteredNumber.length > 10) {
//       alert("Mobile number cannot be greater than 10 digits");
//     } else {
//       // Update the state with the entered number
//       setMobileNumber(enteredNumber);
//     }
//   return (
//     <div className="text-black dark:text-white ">
//       <br />
//       <h1 className={`${styles.title} 800px:!text-[45px]`}>
//         Contact <span className="text-gradient">us</span>
//       </h1>
//       <div className="m-[10%] mt-[1%] w-[80%] pt-[.4%] p-[5%] border 10px  ">
//         <h1 className={`${styles.title}`}>Join to ELearning</h1>
//         <form
//         //   onSubmit={}
//         >
//           <div className="mb-3">
//             <label className={`${styles.label}`} htmlFor="email">
//               Enter your Name
//             </label>
//             <input
//               type="text"
//               name=""
//               // value={}
//               // onChange={}
//               id="name"
//               placeholder="johndoe"
//               className={` ${styles.input}`}
//             />
//           </div>
//           <div className="mb-3">
//             <label className={`${styles.label}`} htmlFor="email">
//               Enter your Email
//             </label>
//             <input
//               type="email"
//               name=""
//               //   value={values.email}
//               //   onChange={handleChange}
//               id="email"
//               placeholder="loginmail@gmail.com"
//               className={` ${styles.input}`}
//             />
//             {/* {errors.email && touched.email && (
//           <span className="text-red-500 pt-2 block">{errors.email}</span>
//         )} */}
//           </div>

//           <div className="mb-3">
//       <label className={`${styles.label}`} htmlFor="mobile">
//         Enter your Mobile Number
//       </label>
//       <input
//         type="number"
//         name="mobile"
//         value={mobileNumber}
//         onChange={handleMobileNumberChange}
//         id="mobile"
//         placeholder="Enter your Mobile Number"
//         className={` ${styles.input}`}
//         max={9999999999} // Set max value to 10 digits
//       />
//     </div>

//           <div className="mb-3">
//             <label className={`${styles.label}`} htmlFor="message">
//               Enter your message
//             </label>
//             <textarea
//               name="message"
//               // value={}
//               // onChange={}
//               id="message"
//               rows={8}
//               cols={30}
//               placeholder="Write your message here..."
//               className={`${styles.input} !h-min py-2`}
//             />
//           </div>

//           <div className="w-[200px]  flex justify-center items-center mt-5">
//             <input
//               type="submit"
//               value=" submit"
//               className={`${styles.button}`}
//             />
//           </div>
//           <br />
//         </form>
//         <br />
//       </div>
//     </div>
//   );
// };

// export default contact;

import React, { useState } from "react";
import { styles } from "../styles/style";
import Link from "next/link";

const Contact = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleMobileNumberChange = (e: { target: { value: any } }) => {
    const enteredNumber = e.target.value;

    // Check if the entered number has more than 10 digits
    if (enteredNumber.length > 10) {
      alert("Mobile number cannot be greater than 10 digits");
    } else {
      // Update the state with the entered number
      setMobileNumber(enteredNumber);
    }
  };

  return (
    <div className="text-black dark:text-white ">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        Contact <span className="text-gradient">us</span>
      </h1>
      <div className="flex border 10px m-[2%]">
      <div className=" mt-[1%] w-[50%] pt-[.4%] p-[5%]  ">
        <h1 className={`${styles.title}`}>Join ELearning</h1>
        <form>
          <div className="mb-3">
            <label className={`${styles.label}`} htmlFor="name">
              Enter your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="johndoe"
              className={`${styles.input}`}
            />
          </div>
          <div className="mb-3">
            <label className={`${styles.label}`} htmlFor="email">
              Enter your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="loginmail@gmail.com"
              className={`${styles.input}`}
            />
          </div>

          <div className="mb-3">
            <label className={`${styles.label}`} htmlFor="mobile">
              Enter your Mobile Number
            </label>
            <input
              type="number"
              name="mobile"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              id="mobile"
              placeholder="Enter your Mobile Number"
              className={`${styles.input}`}
              max={9999999999} // Set max value to 10 digits
            />
          </div>

          <div className="mb-3">
            <label className={`${styles.label}`} htmlFor="message">
              Enter your message
            </label>
            <textarea
              name="message"
              id="message"
              rows={8}
              cols={30}
              placeholder="Write your message here..."
              className={`${styles.input} !h-min py-2`}
            />
          </div>

          <div className="w-[200px]  flex justify-center items-center mt-5">
            <input
              type="submit"
              value="Submit"
              className={`${styles.button}`}
            />
          </div>
          <br />
        </form>
        <br />
      </div>
      <div className="m-[1%] mt-[1%] w-[50%] pt-[.4%] p-[5%]   ">

      <div className="w-[95%] 800px:w-full 800px:max-w-[85%] mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black dark:text-white">About</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black dark:text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/courses"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="/course-dashboard"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Course Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black dark:text-white">Social Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://www.youtube.com/channel/"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Youtube
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.github.com/"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  github
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] font-[600] text-black dark:text-white pb-3">Contact Info</h3>
            <p className="text-base text-black dark:text-gray-300 dark:hover:text-white pb-2">
            Call Us: 1-885-665-2022
            </p>
           
            <p className="text-base text-black dark:text-gray-300 dark:hover:text-white pb-2">
            Address: +7011 Vermont Ave, Los Angeles, CA 90044
            </p>
         
            <p className="text-base text-black dark:text-gray-300 dark:hover:text-white  pb-2">
            Mail Us: hello@elearning.com
            </p>
            
          </div>
        </div>
        <br />
        <p className="text-center text-black dark:text-white">
          Copyright © 2023 Elearning | All Rights Reserved
        </p>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
