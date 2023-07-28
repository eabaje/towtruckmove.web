import React, { useEffect } from "react";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/actions/userActions";
//import { signOut } from "next-auth/client";
import LoginHooks from "../form/book/login";
import { useSession, signIn, signOut } from "next-auth/react";
import popupCenter from "../popup/popUpCenter";

const Header = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  };

  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };
  const dispatch = useDispatch();

  // const { user, loading } = useSelector((state) => state.loadedUser);

  // useEffect(() => {
  //   if (!user) {
  //     dispatch(loadUser());
  //   }
  // }, [dispatch, user]);

  const logoutHandler = () => {
    signOut();
  };
  const popupCenter = (url, title) => {
    const dualScreenLeft = window.screenLeft ?? window.screenX;
    const dualScreenTop = window.screenTop ?? window.screenY;

    const width =
      window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;

    const height =
      window.innerHeight ??
      document.documentElement.clientHeight ??
      screen.height;

    const systemZoom = width / window.screen.availWidth;

    const left = (width - 500) / 2 / systemZoom + dualScreenLeft;
    const top = (height - 550) / 2 / systemZoom + dualScreenTop;

    const newWindow = window.open(
      url,
      title,
      `width=${500 / systemZoom},height=${550 / systemZoom
      },top=${top},left=${left}`
    );

    newWindow?.focus();
  };
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block"
      data-navbar-on-scroll="data-navbar-on-scroll"
    >
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <img
            class="d-inline-block"
            src="assets/img/gallery/logo.png"
            width="50"
            alt="logo"
          />
          <span class="fw-bold text-primary ms-2">TowTruckMove</span>
        </a>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mx-auto pt-2 pt-lg-0 font-base">
            <li class="nav-item px-2">
              <a
                class="nav-link fw-medium active"
                aria-current="page"
                href="#destinations"
              >
                <span class="nav-link-icon text-800 me-1 fas fa-map-marker-alt"></span>
                <span class="nav-link-text">Park Locations </span>
              </a>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link" href="#flights">
                {" "}
                <span class="nav-link-icon text-800 me-1 fas fa-info"></span>
                <span class="nav-link-text">About Us</span>
              </a>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link" href="#hotels">
                {" "}
                <span class="nav-link-icon text-800 me-1 fas fa-wrench"></span>
                <span class="nav-link-text">Services</span>
              </a>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link" href="#activities">
                <span class="nav-link-icon text-800 me-1 fas fa-bolt"></span>
                <span class="nav-link-text">Activities</span>
              </a>
            </li>

             <li class="nav-item px-2">
              <a class="nav-link" href="#register">
                <span class="nav-link-icon text-800 me-1 fas fa-bolt"></span>
                <span class="nav-link-text">Be a Tow Trucker</span>
              </a>
            </li>
          </ul>
          <form>
            <button class="btn text-800 order-1 order-lg-0 me-2" type="button">
              
            </button>
           
            {/* {loading && <div className={styles.title}>Loading...</div>} */}

            {session && (
              <>
                <p style={{ marginBottom: "10px" }}>
                  {" "}
                  Welcome, {session.user.name ?? session.user.email}
                </p>{" "}
                <br />
                {/* <img src={session.user.image} alt="" className={styles.avatar} /> */}
                <a
                  href="javascript:void();"
                  onClick={handleSignout}
                  className="btn-signin"
                >
                  Sign out
                </a>
              </>
            )}
            {!session &&  <button onClick={() => popupCenter("/signIn", "Tow Truck Move")} >
              Sign In with Google
           </button>}
           
       
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
