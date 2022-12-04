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
  // const {
  //   authDispatch,
  //   authState: { isLoggedIn, loading },
  // } = useContext(GlobalContext);

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
    // user===null &&  history.push(`sigin`)
    //  setUser(JSON.parse(localStorage.getItem("user")));
    //  return () => controller?.abort();
  }, []);

  const onSubmit = async (formdata) => {
    signin2(formdata)(authDispatch)((res) => {
      // res.user.isConfirmed === true
      //   ? res.user.isActivated === true
      //     ? router.push(`/dashboard/`)
      //     : res.user.roles === "carrier"
      //     ? (window.location.href = `/carrier/`)
      //     : res.user.roles === "shipper"
      //     ? (window.location.href = `/shipment/`)
      //     : (window.location.href = `/user/user-profile/?userId=${res.user.UserId}&companyId=${res.user.CompanyId}`)
      //   : (window.location.href = `/user/user-profile/?userId=${res.user.UserId}&companyId=${res.user.CompanyId}`);

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
        <Intro />
      </Layout>
    </>
  );
}
export default dynamic(() => Promise.resolve(Index), { ssr: false });
