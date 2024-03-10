"use client";
import React, { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { styles } from "../../../app/styles/style";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { toast } from "react-hot-toast";

type Props = {
  setRoute: (route: string) => void;
};

const schema = Yup.object().shape({
  name: Yup.string().required("Please enter your name!"),
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email!"),
  password: Yup.string().required("Please enter your password!").min(6),
});

const Signup: FC<Props> = ({ setRoute }) => {
  const [show, setShow] = useState(false);
  // here i am ading some new usestate for the  Make Password Strength Indicator
  const [passwordStrength, setPasswordStrength] = useState(0);

  const [register,{data,error,isSuccess}] = useRegisterMutation(); 

  useEffect(() => {
   if(isSuccess){
      const message = data?.message || "Registration successful";
      toast.success(message);
      setRoute("Verification");
   }
   if(error){
    if("data" in error){
      const errorData = error as any;
      toast.error(errorData.data.message);
    }
   }
  }, [isSuccess, error, data?.message, setRoute]);
  

  const formik = useFormik({
    initialValues: { name: "", email: "",phoneNumber:" " , password: "" },
    validationSchema: schema,
    onSubmit: async ({name, email, phoneNumber, password }) => {
      const data = {
        name,email, phoneNumber, password
      };
      await register(data);
    },
  });



  
  const checkPasswordStrength = (password: string | any[]) => {
    // You can implement your own logic to determine password strength.
    // For example, check for minimum length, presence of special characters, numbers, etc.
    let strength = 0;

    // Check for minimum length
    if (password.length <= 6) {
      strength = 1; // Weak
    } else if (password.length <= 8) {
      strength = 2; // Medium
    } else {
      strength = 3; // Strong
    }

    setPasswordStrength(strength);
  };

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="w-full">
      <h1 className={`${styles.title}`}>Join to ELearning</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className={`${styles.label}`} htmlFor="email">
            Enter your Name
          </label>
          <input
            type="text"
            name=""
            value={values.name}
            onChange={handleChange}
            id="name"
            placeholder="johndoe"
            className={`${errors.name && touched.name && "border-red-500"} ${
              styles.input
            }`}
          />
          {errors.name && touched.name && (
            <span className="text-red-500 pt-2 block">{errors.name}</span>
          )}
        </div>
        <label className={`${styles.label}`} htmlFor="email">
          Enter your Email
        </label>
        <input
          type="email"
          name=""
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="loginmail@gmail.com"
          className={`${errors.email && touched.email && "border-red-500"} ${
            styles.input
          }`}
        />
        {errors.email && touched.email && (
          <span className="text-red-500 pt-2 block">{errors.email}</span>
        )}

          <div className="mb-3">
          <label className={`${styles.label}`} htmlFor="email">
            Enter your Mobile number
          </label>
          <input
            type="number"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
            id="number"
            placeholder="Enter your Number"
            className={`${errors.phoneNumber && touched.phoneNumber && "border-red-500"} ${
              styles.input
            }`}
          />
          {errors.name && touched.name && (
            <span className="text-red-500 pt-2 block">{errors.phoneNumber}</span>
          )}
        </div>



        {/* <div className="w-full mt-5 relative mb-1">
          <label className={`${styles.label}`} htmlFor="email">
            Enter your password
          </label>
          <input
            type={!show ? "password" : "text"}
            name="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="password!@%"
            className={`${
              errors.password && touched.password && "border-red-500"
            } ${styles.input}`}
          />
          {!show ? (
            <AiOutlineEyeInvisible
              className="absolute bottom-3 right-2 z-1 cursor-pointer"
              size={20}
              onClick={() => setShow(true)}
            />
          ) : (
            <AiOutlineEye
              className="absolute bottom-3 right-2 z-1 cursor-pointer"
              size={20}
              onClick={() => setShow(false)}
            />
          )}
        </div>
        {errors.password && touched.password && (
          <span className="text-red-500 pt-2 block">{errors.password}</span>
        )} */}

            <div className="w-full mt-5 relative mb-1">
            <label className={`${styles.label}`} htmlFor="password">
              Enter your password
            </label>
            <input
              type={!show ? "password" : "text"}
              name="password"
              value={values.password}
              onChange={(e) => {
                handleChange(e);
                checkPasswordStrength(e.target.value);
              }}
              id="password"
              placeholder="password!@%"
              className={`${
                errors.password && touched.password && "border-red-500"
              } ${styles.input}`}
            />
            {!show ? (
              <AiOutlineEyeInvisible
                className="absolute bottom-3 right-2 z-1 cursor-pointer"
                size={20}
                onClick={() => setShow(true)}
              />
            ) : (
              <AiOutlineEye
                className="absolute bottom-3 right-2 z-1 cursor-pointer"
                size={20}
                onClick={() => setShow(false)}
              />
            )}
          </div>
          {errors.password && touched.password && (
            <span className="text-red-500 pt-2 block">{errors.password}</span>
          )}

          {/* Password Strength Indicator */}
          {values.password && (
            <div className="mt-2">
              <div className="bg-gray-200 h-2 rounded">
                <div
                  className={`${
                    passwordStrength === 1
                      ? "bg-red-500"
                      : passwordStrength === 2
                      ? "bg-orange-500"
                      : "bg-green-500"
                  } h-2 rounded`}
                  style={{ width: `${(passwordStrength / 3) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs mt-1">
                Password Strength:{" "}
                {passwordStrength === 1
                  ? "Weak"
                  : passwordStrength === 2
                  ? "Medium"
                  : "Strong"}
              </p>
            </div>
          )}




        
        <div className="w-full mt-5">
          <input type="submit" value="Sign Up" className={`${styles.button}`} />
        </div>
        <br />
        <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">
          Or join with
        </h5>
        <div className="flex items-center justify-center my-3">
          <FcGoogle size={30} className="cursor-pointer mr-2" />
          <AiFillGithub size={30} className="cursor-pointer ml-2" />
        </div>
        <h5 className="text-center pt-4 font-Poppins text-[14px]">
          Already have an account?{" "}
          <span
            className="text-[#2190ff] pl-1 cursor-pointer"
            onClick={() => setRoute("Login")}
          >
            Sign in
          </span>
        </h5>
      </form>
      <br />
    </div>
  );
};

export default Signup;
