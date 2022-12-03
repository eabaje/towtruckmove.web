import { React, useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { GlobalContext } from "../../../context/Provider";
import { registerUser } from "../../../context/actions/auth/auth.action";

export default function RegisterForm() {
  //**************************FORM FUNCTIONS ************* */

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    control,
  } = useForm();
  const {
    authDispatch,
    authState: { isLoggedIn, loading },
  } = useContext(GlobalContext);

  function onSubmit(formdata) {
    // console.log(`formdata`, formdata);
    registerUser(formdata)(authDispatch)((res) => {
      if (res) {
        toast.success(
          `Congratulations!You have created an account successfully.You will be redirected to your timeline`
        );
        setTimeout(() => {
          toast.dismiss();
          router.reload(`/home/?userId=${res.data.UserId}`);
        }, 5000);
      }
    })((error) => {
      toast.error(error);
    });
  }

  // *************************END FORM FUNCTIONS***********************
  return (
    <div className="register-form">
      <h2>Register</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control-input"
            {...register("FirstName")}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control-input"
            {...register("LastName")}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control-input"
            {...register("Email")}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control-input"
            {...register("Password")}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control-input"
            {...register("ConfirmPassword")}
            required
          />
        </div>

        <div className="remember-me-wrap">
          <p>
            <input type="checkbox" id="test1" />
            <label htmlFor="test1">
              I Accept The <a href="privacy.html">Privacy</a>
            </label>
          </p>
        </div>
        <button type="submit" className="default-btn">
          {loading && <i className="fa fa-spinner fa-spin"></i>}Register
        </button>
        {/* <div className="or-text">
          <span>Or</span>
        </div>
        <button type="submit" className="google-btn">
          Log In with Google
        </button> */}
      </form>
    </div>
  );
}
