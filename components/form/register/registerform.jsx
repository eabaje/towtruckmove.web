import { React, useState, useContext, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { GlobalContext } from "../../../context/Provider";
import { registerPark, registerUser } from "../../../context/actions/auth/auth.action";
import InputTwo from "../../formInput/InputTwo";
import { CAR_TYPE } from "../../../constants/enum";
import Geocode from "react-geocode";
import AutoCompletePlace from "../../formInput/AutoCompletePlace";
import SelectInputTwo from "../../formInput/SelectInputTwo";
import CustomButton from "../../formInput/customButton";
import { useEffect } from "react";
import axios from "axios";
import SelectInput from "../../formInput/SelectInput";
import Input from "../../formInput/Input";

export default function RegisterForm() {

  
  //**************************FORM FUNCTIONS ************* */
  const [myLocation, setMylocation] = useState(null);
  const [myPosition, setMyPosition] = useState(null);
  const [place, setPlace] = useState(null);
  const [nearestLocation, setNearestLocation] = useState(null);
  const [myCountryInfo, setmyCountryInfo] = useState({
    ip: "",
    countryName: "",
    country: "",
    city: "",
    timezone: ""
  });
  
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  //   setValue,
  //   control,
  // } = useForm();
  const {
    authDispatch,
    authState: { loading,userLocation,parkCoordinates,userTowRequest },
  } = useContext(GlobalContext);

 
  const { control:ctrFindpark, handleSubmit:handleFindPark,reset
  } = useForm({
     mode: 'onTouched'
 });

// const { control:ctrSelectPark, handleSubmit:handleSelectPark,
//    } = useForm({
//      mode: 'onTouched'
//  });

// const { control:ctrFinish, handleSubmit:handleFinish,
//    } = useForm({
//      mode: 'onTouched'
//  });
 
 

useEffect(() => {
 // getGeoInfo();
  let defaultValues = {};
  defaultValues.RoleType = "carrier";
  // defaultValues.Longitude = userCoordinates?.lng;
  // defaultValues.Latitude = userCoordinates?.lat;
 

  reset({ ...defaultValues });
  console.log('Coordinates',parkCoordinates);
}, []);

 
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


  function onSubmit(formdata) {

    const carrier = {
      CompanyName: formdata.CompanyName,
      CarrierType: formdata.CarrierType,
      RoleType: formdata.RoleType,
      FullName: formdata.FullName,
      ParkName: formdata.ParkName,
      Longitude: userCoordinates?.lng,
      Latitude: userCoordinates?.lat,
      Phone: formdata.Phone,
      Address: formdata.Address,
      City: formdata.City ,
      Country: userLocation.country,
      // AboutUs: req.body.AboutUs,
      // ServiceDescription: req.body.ServiceDescription,
      // Rating: req.body.Rating,
      // Licensed: req.body.Licensed ? req.body.Licensed : false,
      // CompanyId: req.body.CompanyId,
      // CarrierDocs: req.body.CarrierDocs
    };
   
   
     console.log(`formdata`, carrier);
     
     registerUser(formdata)(authDispatch)((res) => {
      if (res) {
        toast.success(
          `Congratulations! You have created an account successfully.`//You will be redirected to your timeline
        );
        setTimeout(() => {
          toast.dismiss();
        //  router.reload(`/home/?userId=${res.data.UserId}`);
        }, 5000);
      }
    })((error) => {
      toast.error(error);
    });
  }
  console.log('FormattedLocation',userLocation)
  // *************************END FORM FUNCTIONS***********************
  return (<>
    <section class="fw-main-row  ds section_padding_top_0 section_padding_bottom_0 columns_padding_15 parallax fullwidth-section section_flex сargo-hook" style={{backgroundImage:`url(http://webdesign-finder.com/towy/wp-content/uploads/2016/07/quote.jpg)`}} >
    <div class="container-fluid">
      <div class="row">
        <div class="fw-column col-xs-12 col-md-6 text-center mini-text has-bg-color cs" >
  
    <div class="fw-column-inner padding_40">
  
    <div class="fw-divider-space " style={{paddingTop: "40px"}}></div>
  <div class="  text-center">
    <h3 class=" section_header ">
    <span class=" thin text-uppercase">
      Join <strong>OUR TEAM</strong>	</span>
    </h3>
    <p class="  paragraph">
    <span class="  text-uppercase">
      FAST AND COURTEOUS SPECIALISTS	</span>
    </p>
  </div>
  
    <div class="fw-divider-zebra"><hr class="zebra_bg divider_center"/></div>
  
  
  
    <div class="fw-divider-space  hidden-sm hidden-xs" style={{paddingTop: "70px"}}></div>
  <div class="text-block">
    <p>Doner hamburger elit magna fatback salami. Picanha ad reprehenderit anim pancetta alcatra ham tempor meatloaf shankle do sunt drumstick. Venison bresaola laboris, jowl do labore pastrami magna voluptate fatback sed cow. In beef ribs shankle hamburger beef, ea turkey cupim venison Jowl pig ut biltong sint do capicola ham.</p></div>
  
  
    <div class="fw-divider-space  hidden-sm hidden-xs" style={{paddingTop: "80px"}}></div>
  <a href="#" target="_self"
     class="theme_button color2 ">
    <span>Apply today</span>
  </a>
  
    <div class="fw-divider-space " style={{paddingTop: "40px"}}></div>
      </div>
  </div>
  <div class="fw-column col-xs-12 col-md-6 text-center mini-form has-bg-color ds" >
  
    <div class="fw-column-inner padding_40">
  
    <div class="fw-divider-space " style={{paddingTop: "40px"}}></div>
  <div class="  text-center">
    <h3 class=" section_header ">
    <span class=" thin text-uppercase">
      Get a <strong class="highlight">quote</strong>	</span>
    </h3>
    <p class="  paragraph">
    <span class="lightfont  ">
      DELIVERS THE BEST	</span>
    </p>
  </div>
  
    <div class="fw-divider-zebra"><hr class="zebra_bg divider_center"/></div>
  
  
  
    <div class="fw-divider-space " style={{paddingTop: "40px"}}></div>
  <div class="form-wrapper  columns_padding_15">
                    <form
                      encType="multipart/form-data"
                      onSubmit={handleFindPark(onSubmit)}
                    >
      
     
     
      <div class="wrap-forms">
    <div class="row"></div> {parkCoordinates?.lng}<div class="row">
    <InputTwo isHidden={true} name='RoleType'  control={ctrFindpark}/>  

   
    {/* {props.Longitude && (
        <LookUpHdInput name={'Longitude'} value={myLocation?.Longitude}{...props}  {...field}/>
       
       )}

      {props.Latitude && (
      <LookUpHdInput  name={'Latitude'} value={myLocation?.Latitude}{...props}  {...field} />

      )} */}

   {/* <InputTwo isHidden={true} name='Latitude'  control={ctrFindpark}/>  value='carrier'
   <InputTwo isHidden={true} name='Longitude'  control={ctrFindpark}/>   */}
    <Input
    
    classHeadName="col-sm-12 col-md-12 col-xl-12 form-builder-item"
    
    label='Full Name' name='FullName' control={ctrFindpark}
                rules={{ required: 'Your Contact Name  required' }} icon={'fas fa-user'} />  
     <Input label='Email' name='Email' control={ctrFindpark}  classHeadName="col-sm-6 col-md-6 col-xl-12 form-builder-item"
                rules={{ required: 'Your Email  required' }} icon={'fas fa-envelope'} /> 
    <Input label='Phone' name='Phone' control={ctrFindpark}
                rules={{ required: 'Your Email  required' }} icon={'fas fa-phone'} /> 
     <Input label='Park Name' name='ParkName' control={ctrFindpark}
                rules={{ required: 'Park Name  required' }} icon={'fas fa-location-dot'} />
    <Input label='Company Name' name='CompanyName' control={ctrFindpark}
                rules={{ required: 'Company Name  required' }} icon={'fas fa-car'} />
    
    <AutoCompletePlace 
    classHeadName="col-sm-6 col-md-6 col-xl-6"
    
    label='Park Address' name={"Address"} control={ctrFindpark} icon={'fas fa-map-marker-alt'}
      countryCode={userLocation.country} />
 
    <InputTwo  name='Longitude'    control={ctrFindpark}/>  
    <InputTwo  name='Latitude'      control={ctrFindpark}/>  
   
    <SelectInput 
    classHeadName="col-sm-6 col-md-6 col-xl-6"
    label='vehicle Type'name={"FleetType"} option={CAR_TYPE} control={ctrFindpark}/> 

    
 <div class="row"></div></div><div class="wrap-forms topmargin_10">
    <div class="row">
      <div class="col-sm-12">
                <CustomButton loading={loading} isAddMode={"true"} />
                <input class="theme_button wide_button" type="reset" value="Clear" />
            </div>
    </div>
  </div>
  </div>
  </form>
  
  </div>
  
    <div class="fw-divider-space " style={{paddingTop: "40px"}}></div>
      </div>
  </div>
      </div>
    </div>
  </section>
  
  
  </>
  );
}
