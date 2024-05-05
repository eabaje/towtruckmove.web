import { React, useState, useContext, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import $ from "jquery";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { GlobalContext } from "../context/Provider";
import { signin2 } from "../context/actions/auth/auth.action";
import Layout from "../components/layout/Layout";
import Intro from "../components/main/intro";
import styles from "../styles/Home.module.css";
import Profile from "../components/dashboard/profile";
import myRequest from "../components/dashboard/myRequest";
import SectionOne from "../components/section/SectionOne";
import SectionTwo from "../components/section/SectionTwo";
import SectionThree from "../components/section/SectionThree";
import SectionFour from "../components/section/SectionFour";

function Index() {
  const [showForm, setShowForm] = useState(0);
 
  const router = useRouter();
  // const { login } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    control,
  } = useForm();
  const {
    authDispatch,
    authState: {showDashboardType},
  } = useContext(GlobalContext);

  // const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn);

  const loadJs = () => {
    if (jQuery().appear) {
      jQuery(".to_animate").appear();
      jQuery(".to_animate")
        .filter(":appeared")
        .each(function (index) {
          var self = $(this);
          var animationClass = !self.data("animation")
            ? "fadeInUp"
            : self.data("animation");
          var animationDelay = !self.data("delay") ? 210 : self.data("delay");
          setTimeout(function () {
            self.addClass("animated " + animationClass);
          }, index * animationDelay);
        });

      $("body").on("appear", ".to_animate", function (e, $affected) {
        $($affected).each(function (index) {
          var self = $(this);
          var animationClass = !self.data("animation")
            ? "fadeInUp"
            : self.data("animation");
          var animationDelay = !self.data("delay") ? 210 : self.data("delay");
          setTimeout(function () {
            self.addClass("animated " + animationClass);
          }, index * animationDelay);
        });
      });

      //counters init on scroll
      jQuery(".counter").appear();
      jQuery(".counter")
        .filter(":appeared")
        .each(function (index) {
          if (jQuery(this).hasClass("counted")) {
            return;
          } else {
            jQuery(this).countTo().addClass("counted");
          }
        });
      jQuery("body").on("appear", ".counter", function (e, $affected) {
        jQuery($affected).each(function (index) {
          if (jQuery(this).hasClass("counted")) {
            return;
          } else {
            jQuery(this).countTo().addClass("counted");
          }
        });
      });
    }
  };

  useEffect(() => {
    //let controller = new AbortController();
    if (typeof window !== "undefined") {
      loadJs();
      // $("#sidemenu-nav").metisMenu();
    }
 
  }, []);

  const onSubmit = async (formdata) => {
    signin2(formdata)(authDispatch)((res) => {
      window.location.href = "/home/";
      // history.push("/dashboard");
    })((err) => {
      console.log(`err`, err);
      toast.error(err);
    });
  };
  // console.log(`formdata`, formdata);

  return (
    <>
      <Layout>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
        
       
      </Layout>
    </>
  );
}
export default dynamic(() => Promise.resolve(Index), { ssr: false });
