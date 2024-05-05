import { useRef, useEffect, useMemo, useState, useContext } from "react";
import { UseControllerProps, useController,Controller } from 'react-hook-form'
import LookUpHdInput from "./LookUpHdInput";
import { GlobalContext } from "../../context/Provider";



const AutoCompletePlace = (props) => {
 // alert(props.countryCode);
const {fieldState, field,control} = useController({...props, defaultValue: ''})
const [myLocation, setMyLocation] = useState(null); 
const [myCountryInfo, setmyCountryInfo] = useState({
  ip: "",
  countryName: "",
  country: "",
  city: "",
  timezone: ""
});

const autoCompleteRef = useRef();
const inputRef = useRef();
// Some code in the next example.

//   const options = useMemo(
//     () => ({
//     componentRestrictions: { country: props.countryCode?.toLowerCase() },
//     fields: ["address_components", "geometry", "icon", "name"],
//     types: ["establishment"],
//   }),
//   []
// )
const options = {
  componentRestrictions: { country: props.countryCode?.toLowerCase() },
  fields: ["address_components", "geometry", "icon", "name"],
  types: ["establishment"],
};

const {
  authDispatch,
  authState: { userCoordinates },
} = useContext(GlobalContext);


//  const getGeoInfo = () => {
//   axios
//     .get("https://ipapi.co/json/")
//     .then((response) => {
//       let data = response.data;
//       setmyCountryInfo({
//         ...myCountryInfo,
//         ip: data.ip,
//         countryName: data.country_name,
//         countryCode: data.country_calling_code,
//         city: data.city,
//         timezone: data.timezone
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// useEffect(() => {
//   getGeoInfo();
// }, []);   {...props}  {...field}

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );

    autoCompleteRef.current.addListener("place_changed", async function () {
      const place = await autoCompleteRef.current.getPlace();
      setMyLocation(place);
     
      console.log('latitude',place.geometry.location.lat());
      console.log('Longitude',place.geometry.location.lng());
    //  console.log('UserLocation', place?.geometry?.location ); 
      userCoordinates.lat=place.geometry.location.lat();
      userCoordinates.lng=place.geometry.location.lng()
      console.log('Coordinates',userCoordinates);
    });
  }, [props.countryCode,userCoordinates]);

  //console.log('FormattedLocation',props.countryCode?.toLowerCase())
  return (
    <>




    <div className={props.classHeadName?props.classHeadName:"col-sm-12 col-md-12 col-xl-12"}>
     
     <div className={props.isHidden ? 'visually-hidden' :'input-group-icon'} >
              {props.showLabel && (
                <label
                    className="form-label visually-hidden"
                    htmlFor={field.name} 
                >
                {props.label}
                </label>
             )}  
      <input type="text"  
       {...props}
       {...field}
       ref={inputRef} 
      name={props.name}
       placeholder={props.label}
       className="form-control input-box form-voyage-control"
       color={fieldState.error ? 'failure' : !fieldState.isDirty ? '' : 'success'}
       
      />
       {/* {props.Longitude && (
          <Controller
        render={({ field }) => <input {...field} />}
        name="Longitude"
        control={control}
        defaultValue={myLocation?.Longitude}
      />     
       
       )}

      {props.Latitude && (
     
        <Controller
        render={({ field }) => <input {...field} />}
        name="Latitude"
        control={control}
        defaultValue={myLocation?.Latitude}
      />
      )} */}
        <span className="nav-link-icon text-800 fs--1 input-box-icon">
                    <i className={props.icon}> </i>
                </span>
             </div>

      </div>
    </>
  );
};
export default AutoCompletePlace;
