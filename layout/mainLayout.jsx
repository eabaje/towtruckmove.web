import React from "react";

import { useContext, useState } from "react";
import { GlobalContext } from "../context/Provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { signout } from "../context/actions/auth/auth.action";
import $ from "jquery";
//import "./js/theme";
import Header from "../components/header";
import dynamic from "next/dynamic";
import Footer from "../components/footer";
const themeInit = dynamic(() => import("./js/theme"), {
  ssr: false,
});
//import "./jquery-ui.min.js";
const MainLayout = ({ children }) => {
  const {
    authState: { user, isLoggedIn },
  } = useContext(GlobalContext);

  // const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn);
  // const [authLoaded, setAuthLoaded] = React.useState(false);
  // // const [user, setUser] = useState({});

  // const getUser = async () => {
  //   try {
  //     // setUser(JSON.parse(localStorage.getItem("user")));
  //     if (user) {
  //       setAuthLoaded(true);

  //       setIsAuthenticated(true);
  //     } else {
  //       setAuthLoaded(true);

  //       setIsAuthenticated(false);

  //       window.location = "/signin";
  //     }
  //   } catch (error) {}
  // };
  const a = 1;
  const queryClient = new QueryClient();
  React.useEffect(() => {
    // let controller = new AbortController();
    //
    // getUser();
    // return () => controller?.abort();
    if (typeof window !== "undefined") {
      //  themeInit;
      var navbarInit = function navbarInit() {
        var Selector = {
          NAVBAR: "[data-navbar-on-scroll]",
          NAVBAR_COLLAPSE: ".navbar-collapse",
          NAVBAR_TOGGLER: ".navbar-toggler",
        };
        var ClassNames = {
          COLLAPSED: "collapsed",
        };
        var Events = {
          SCROLL: "scroll",
          SHOW_BS_COLLAPSE: "show.bs.collapse",
          HIDE_BS_COLLAPSE: "hide.bs.collapse",
          HIDDEN_BS_COLLAPSE: "hidden.bs.collapse",
        };
        var DataKey = {
          NAVBAR_ON_SCROLL: "navbar-light-on-scroll",
        };
        var navbar = document.querySelector(Selector.NAVBAR); // responsive nav collapsed
        console.log("navbar", navbar);
        navbar?.addEventListener("click", function (e) {
          if (
            e.target.classList.contains("nav-link") &&
            window.innerWidth < utils.getBreakpoint(navbar)
          ) {
            navbar.querySelector(Selector.NAVBAR_TOGGLER).click();
          }
        });
        if (navbar) {
          var windowHeight = window.innerHeight;
          var html = document.documentElement;
          var navbarCollapse = navbar.querySelector(Selector.NAVBAR_COLLAPSE);
          var allColors = _objectSpread(
            _objectSpread({}, utils.colors),
            utils.grays
          );
          var name = utils.getData(navbar, DataKey.NAVBAR_ON_SCROLL);
          var colorName = Object.keys(allColors).includes(name)
            ? name
            : "white";
          var color = allColors[colorName];
          var bgClassName = "bg-".concat(colorName);
          var shadowName = "shadow-transition";
          var colorRgb = utils.hexToRgb(color);
          var _window$getComputedSt = window.getComputedStyle(navbar),
            backgroundImage = _window$getComputedSt.backgroundImage;
          var transition = "background-color 0.35s ease";
          navbar.style.backgroundImage = "none"; // Change navbar background color on scroll
          window.addEventListener(Events.SCROLL, function () {
            var scrollTop = html.scrollTop;
            var alpha = (scrollTop / windowHeight) * 1.5; // Add class on scroll
            navbar.classList.add("backdrop");
            if (alpha === 0) {
              navbar.classList.remove("backdrop");
            }
            alpha >= 1 && (alpha = 1);
            navbar.style.backgroundColor = "rgba("
              .concat(colorRgb[0], ", ")
              .concat(colorRgb[1], ", ")
              .concat(colorRgb[2], ", ")
              .concat(alpha, ")");
            navbar.style.backgroundImage =
              alpha > 0 || utils.hasClass(navbarCollapse, "show")
                ? backgroundImage
                : "none";
            alpha > 0 || utils.hasClass(navbarCollapse, "show")
              ? navbar.classList.add(shadowName)
              : navbar.classList.remove(shadowName);
          }); // Toggle bg class on window resize
          utils.resize(function () {
            var breakPoint = utils.getBreakpoint(navbar);
            if (window.innerWidth > breakPoint) {
              navbar.style.backgroundImage = html.scrollTop
                ? backgroundImage
                : "none";
              navbar.style.transition = "none";
            } else if (
              !utils.hasClass(
                navbar.querySelector(Selector.NAVBAR_TOGGLER),
                ClassNames.COLLAPSED
              )
            ) {
              navbar.classList.add(bgClassName);
              navbar.classList.add(shadowName);
              navbar.style.backgroundImage = backgroundImage;
            }
            if (window.innerWidth <= breakPoint) {
              navbar.style.transition = utils.hasClass(navbarCollapse, "show")
                ? transition
                : "none";
            }
          });
          navbarCollapse.addEventListener(Events.SHOW_BS_COLLAPSE, function () {
            navbar.classList.add(bgClassName);
            navbar.classList.add(shadowName);
            navbar.style.backgroundImage = backgroundImage;
            navbar.style.transition = transition;
          });
          navbarCollapse.addEventListener(Events.HIDE_BS_COLLAPSE, function () {
            navbar.classList.remove(bgClassName);
            navbar.classList.remove(shadowName);
            !html.scrollTop && (navbar.style.backgroundImage = "none");
          });
          navbarCollapse.addEventListener(
            Events.HIDDEN_BS_COLLAPSE,
            function () {
              navbar.style.transition = "none";
            }
          );
        }
      };
      // navbarInit();
    }
  }, [a]);
  console.log(`User`, user);
  // console.log("themeInit", themeInit);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <main class="main" id="top">
          <Header />

          <ToastContainer position="top-center" />

          {children}

          <Footer />
        </main>
      </QueryClientProvider>
    </>
  );
};

//export default MainLayout;

export default dynamic(() => Promise.resolve(MainLayout), { ssr: false });
