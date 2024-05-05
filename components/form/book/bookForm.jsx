import React, { useState, useContext, useEffect, useRef } from "react";
//import { IMG_URL } from "../../../constants";
import { useForm, Controller } from "react-hook-form";

import { Country, State } from "country-state-city";

import { fetchData } from "../../../helpers/query";

import { GlobalContext } from "../../../context/Provider";
import {
  editUser,
  resetPassword,
  updateCompany,
} from "../../../context/actions/user/user.action";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../../context/updateAction";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";
import { usePaystackPayment } from "react-paystack";
import { Public_Key } from "../../../constants";
import { createPayment } from "../../../context/actions/payment/payment.action";

// import findNearestLocation from 'map-nearest-location';
import Geocode from "react-geocode";
import AutoCompletePlace from "./autoCompletePlaceApi";
import Input from "../../formInput/Input";
import SelectInput from "../../formInput/SelectInput";
import InputTwo from "../../formInput/InputTwo";
import { CAR_TYPE } from "../../../constants/enum";
import AutoCompletePlaceSimple from "./autoCompletePlaceApi";
import { listParksByLocation } from "../../../context/actions/park/park.action";
import { MAX_DISTANCE } from "../../../../towtruckmove.backend/constants";
import { brands } from "../../../constants/car";
import LookUpSelectInput from "../../formInput/LookUpSelectInput";
import { cars } from "../../../constants/car-list";

const BookForm = (props) => {
  // const { userId, companyId } = query;
  Geocode.setApiKey("AIzaSyBaQA46GMqNm3kBMpDeTs4G4fi7dK1tfao");
  // const isSingleMode = !userId;
  const [formStep, setFormStep] = useState(0);
  const [profile, setProfile] = useState({});
  const [companyInfo, setCompanyInfo] = useState({});

  // const isAddMode = !userId;

  const [IsEdit, setEdit] = useState(false);
  const [country, setCountry] = useState("");
  // const [companyId, setcompanyId] = useState("");
  const [email, setEmail] = useState("");
  const [countries, setCountries] = useState([]);
  const [Region, setRegion] = useState([]);
  const [City, setCity] = useState([]);
  const [CarType, setCarType] = useState(null);
  const [picFile, setpicFile] = useState(null);
  const [docFile, setdocFile] = useState(null);
  const [selCity, setselCity] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [selRegion, setselRegion] = useState("");
  const [value, setValues] = useState("");
  const [visibilityImage, setVisibilityImage] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showBilling, setShowBilling] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showReference, setShowReference] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [amt, setAmt] = useState(0);
  const [myLocation, setMylocation] = useState(null);
  const [myPosition, setMyPosition] = useState(null);
  const [nearestLocation, setNearestLocation] = useState(null);
  const [status, setStatus] = useState(null);
  const [myCountryInfo, setmyCountryInfo] = useState({
    ip: "",
    countryName: "",
    country: "",
    city: "",
    timezone: ""
  });
  
  const {
    authDispatch,
    authState: { userLocation },
    parkDispatch,
    parkState: { parks },
    towRequestDispatch,
    towRequestState: { towRequests,createTowRequest },
  } = useContext(GlobalContext);


  const googleButton = useRef(null);
  
  
  useEffect(() => {
    getLocation();
    getCarBrand();
  }, []);

  

  const config = {
    reference: new Date().getTime(),
   // email: user?.Email,
    amount: amt * 100,
    publicKey: Public_Key,
  };

  //const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    //log in payment
    const formPayment = {
      UserId: user?.UserId,
      PaymentSessionId: reference.trans,
      ReferenceId: reference.reference,
      OrderStatus: ORDER_STATUS.find((item) => item.text === "Processed").value,
      PaymentMethod: subscribeUser.User?.PaymentMethod,
      TotalPrice: amt * 100,

      PaymentDate: new Date(),
    };

    createPayment(formPayment)(paymentDispatch)((res) => {
      //   console.log("formdata@CreatePayment", formPost);
      isAddMode
        ? createUserSubscription(formPost)
        : subscriptionChange
        ? UpgradeUserSubscription(formPost)
        : UpdateUserSubscription(userSubscriptionId, formPost);
    })((err) => {
      toast.error(err);
    });
  };



  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
         
          getAddressByCoordinate(position);

          setMylocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          toast.error("Unable to retrieve your location");
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };


  const  getCarBrand = async() => {
    const url = 'https://www.carqueryapi.com/api/0.3/?cmd=getMakes&min_year=2000'
    const headers = {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    try {

      const data = await fetch(url, headers)

      const items = await data.text()
  
      console.log(JSON.parse(items.slice(2, -2)))
      const {res} = await axios.get(`https://www.carqueryapi.com/api/0.3/?cmd=getMakes&min_year=2000`);

      if (res) {
        setCarType(res);
        
       
      }
    } catch (err) {
      toast.error(err);
     // enqueueSnackbar(getError(err), { variant: "error" });
     //
    }




  }



  const getAddressByCoordinate = (position) => {
   // alert(position.coords.latitude);

    Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
      (response) => {
       // alert(response);
        setMyPosition(response.results[0].formatted_address);

        const address = response.results[0].formatted_address;

      //  toast.success(address);
        console.log(address);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  





  const { control:ctrFindpark, handleSubmit:handleFindPark,
  } = useForm({
     mode: 'onTouched'
 });
  

  const {
    register:frmFindPark,
    formState: { errFindPark },
    handleSubmit: findParkHandler,
  } = useForm();

  const {
    register: frmSelectTow,
    formState: { errors: errSelectTow },
    handleSubmit: selectTowHandler,
    watch,
  } = useForm({
   // resolver: yupResolver(validationSchema),
  });
  const {
    register: frmFinish,
    formState: { errors: errFrmFinsih },
    handleSubmit: finishHandler,
  } = useForm();
  const {
    register: register4,
    formState: { errors: errors4 },
    handleSubmit: handleFinish,
  } = useForm();
  //{   resolver: yupResolver(validationSchema),
  // }
  const password = useRef({});
  password.current = watch("password", "");

  const completeFormStep = () => {
    setFormStep((formStep) => formStep + 1);
  };
  const goBack = () => {
    setFormStep((formStep) => formStep - 1);
  };



 

 
    const calculateDistance = () => {
      const lat1 = 40.7128; // Latitude of location 1
      const lon1 = -74.0060; // Longitude of location 1
      const lat2 = 34.0522; // Latitude of location 2
      const lon2 = -118.2437; // Longitude of location 2
  
      const R = 6371; // Radius of the Earth in kilometers
      const dLat = toRadians(lat2 - lat1);
      const dLon = toRadians(lon2 - lon1);
  
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) *
          Math.cos(toRadians(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c;
  
      console.log(`Distance between the locations: ${distance.toFixed(2)} km`);
    };
  
    const toRadians = (angle) => {
      return (angle * Math.PI) / 180;
    };
  
   
  


 
 // Get parks function
  const onSubmitfindPark = (data) => {
    actions.updateAction(data);
   
    listParksByLocation(myLocation.lng,myLocation.lat,MAX_DISTANCE)(parkDispatch);
    // props.history.push("./step2");
  };

 


 


  const onSubmitselectTow = (data) => {
   
    updateUserTowRequest(data)
    completeFormStep();
    // props.history.push("./step2");
  };

  const onSubmitfinish = (data) => {
    actions.updateAction(data);
    completeFormStep();
    // props.history.push("./step2");
  };
  const onSubmitSubscribe = async (data) => {
    actions.updateAction(data);
    state.companyUser.PaymentMethod = paymentMethod;
    state.companyUser.Currency = currency;
    state.companyUser.CompanyType = data.RoleType;

    setLoading(true);
    setDisabled(true);
    try {
      const res = await axios.post(`${API_URL}auth/signup`, state.companyUser);

      if (res) {
        setLoading(false);
        setDisabled(false);
        // history.push(LOG_IN);
        completeFormStep();
        //  window.open(LOG_IN, "_blank");

        // window.location.href = LOG_IN;
      }
    } catch (err) {
      setLoading(false);
      enqueueSnackbar(getError(err), { variant: "error" });
    }

  }

console.log('Cartype',CarType);

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => {
    return (
      <div className="input-group mb-3">
        <input
          ref={ref}
          type="text"
          className="form-control datepicker"
          value={value}
          onClick={onClick}
          placeholder="Click to enter date"
          required
        />
        <div className="input-group-append">
          <span className="input-group-text" style={{ height: "54px" }}>
            <i className="fa fa-calendar"></i>
          </span>
        </div>
      </div>
    );
  });
  // CustomInput.displayName = "CustomInput";
   console.log("ShowProfile", cars);
  return (
    <>
      <div className="pt-5">
        <nav>
          <div className="nav nav-tabs voyage-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              <i className="fas fa-map-marker-alt"></i>
            </button>
            <button
              className="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              {" "}
              <i className="fas fa-truck"></i>
            </button>
            <button
              className="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              {" "}
              <i className="fas fa-file-invoice"></i>
            </button>
          </div>
          <div className="tab-content" id="nav-tabContent">
            <div
              className={
                formStep === 0 ? "tab-pane fade show active" : "tab-pane fade"
              }
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <form className="row g-4 mt-5" onSubmit={findParkHandler(onSubmitfindPark)}>
               
               
          <Input isHidden={true} name='RoleType' value="carrier" control={ctrFindpark}/>  

          <Input isHidden={true} name='UserId' value={props.UserId} control={ctrFindpark}/>  
         
  
           <Input label='Full Name' name='FullName'  control={ctrFindpark}
                rules={{ required: 'Your Contact Name  required' }} icon={'fas fa-car'} />  
        
        
        <Input label='Phone' name='Phone' control={ctrFindpark}
                rules={{ required: 'Your Contact Name  required' }} icon={'fas fa-phone'} /> 

          <AutoCompletePlaceSimple label='From Where'name={"FromWhere"} control={ctrFindpark} icon={'fas fa-map-marker-alt'}
                 locationType={'origin'}   countryCode={userLocation?.country}/>

            <AutoCompletePlaceSimple label='To Where' name={"ToWhere"} control={ctrFindpark} icon={'fas fa-map-marker-alt'}
                 locationType={'destination'}   countryCode={userLocation?.country}/> 
            
            <LookUpSelectInput 
            sourceData={cars} 
            primaryData={cars.brand} 
            filters={cars.model
             } 
            labelParent={"Vehicle Brand"} 
            labelChild={"Vehicle Model"}
            idParent={'VehicleType'}
            idChild={'Model'}
            />
            <SelectInput 
            classHeadName="col-sm-6 col-md-6 col-xl-6 form-builder-item"
            label='vehicle Type'name={"VehicleType"} option={CAR_TYPE} control={ctrFindpark}/> 
           <SelectInput 
            classHeadName="col-sm-6 col-md-6 col-xl-6 form-builder-item"
            label='Vehicle Brand'name={"ModelType"} option2={brands} control={ctrFindpark}/>   
            <Input
            classHeadName="col-sm-6 col-md-6 col-xl-6"
            
            label='Vehicle License No' name='VehicleNo' control={ctrFindpark}
                rules={{ required: 'Your Vehicle License Number required' }} icon={'fas fa-car'} />  
            
          


                
                
                <div className="col-12 col-xl-10 col-lg-12 d-grid mt-6">
                  <button className="btn btn-secondary" type="submit">
                    Get Nearest Towing Truck
                  </button>
                </div>
              </form>
            </div>
            <div
              className={
                formStep === 1 ? "tab-pane fade show active" : "tab-pane fade"
              }
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <form className="row g-4 mt-5" onSubmit={selectTowHandler(onSubmitselectTow)}>
                <div className="col-sm-12 col-md-12 col-xl-12">
                  <div className="input-group-icon">
                    <label
                      className="form-label visually-hidden"
                      for="inputPersonOne"
                    >
                      Preferred Park
                    </label>
                    <select
                      className="form-select form-voyage-select input-box"
                      name="VehicleType"
                  {...frmSelectTow("VehicleType")}   >
                      <option selected="selected">Park List</option>
                      <option>Sedan</option>
                      <option>SUV</option>
                      <option>Truck</option>
                      <option>Articulated Vehicle</option>
                      </select>
                    <span className="nav-link-icon text-800 fs--1 input-box-icon">
                      <i className="fas fa-truck"> </i>
                    </span>
                  </div>
                </div>

                <div className="col-12 d-grid mt-6">
                  <button className="btn btn-secondary" type="submit">
                    Choose Tow Service
                  </button>
                </div>
              </form>
            </div>
            <div
              className={
                formStep === 2 ? "tab-pane fade show active" : "tab-pane fade"
              }
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <form className="row g-4 mt-5"  onSubmit={finishHandler(onSubmitfinish)}>
                <div className="col-12">
                  <div className="input-group-icon">
                    <input
                      className="form-control input-box form-voyage-control"
                      id="Credicard"
                      type="date"
                    />
                    <span className="nav-link-icon text-800 fs--1 input-box-icon">
                      <i className="fas fa-calendar"></i>
                    </span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-group-icon">
                    <input
                      className="form-control input-box form-voyage-control"
                      id="inputDateSix"
                      type="date"
                    />
                    <span className="nav-link-icon text-800 fs--1 input-box-icon">
                      <i className="fas fa-calendar"></i>
                    </span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-group-icon">
                    <label
                      className="form-label visually-hidden"
                      for="inputPeopleThree"
                    >
                      Person
                    </label>
                    <select
                      className="form-select form-voyage-select input-box"
                      name="inputPeopleThree"
                   {...frmFinish("inputPeopleThree")}    >
                      <option selected="selected">2 Adults</option>
                      <option>2 Adults 1 children</option>
                      <option>2 Adults 2 children</option>
                     </select>
                    <span className="nav-link-icon text-800 fs--1 input-box-icon">
                      <i className="fas fa-user"> </i>
                    </span>
                  </div>
                </div>
                <div className="col-12 d-grid mt-6">
                  <button className="btn btn-secondary" type="submit">
                    Search Packages
                  </button>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>

   
    </>
  );
};
//Login.layout = "main";

//export default AddEditProfile;

export default dynamic(() => Promise.resolve(BookForm), { ssr: false });
