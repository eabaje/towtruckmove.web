import { useRef, useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../../context/Provider";

const AutoCompletePlaceSimple = (props) => {

  const [myLocation, setMyLocation] = useState(null);

  const {
    authDispatch,
    authState: { userLocation },
   
  } = useContext(GlobalContext);


  const autoCompleteRef = useRef();

  const inputRef = useRef();
  const options = {
    componentRestrictions: { country:props?.countryCode?.toLowerCase() },
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["establishment"],
  };

  useEffect(() => {


    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );

    autoCompleteRef.current.addListener("place_changed", async function () {
      const place = await autoCompleteRef.current.getPlace();
      setMyLocation(place);

     if(props.locationType=="origin"){

      userLocation.startlat=place.geometry.location.lat();
      userLocation.startlng=place.geometry.location.lng()
      

     }else{

      userLocation.endlat=place.geometry.location.lat();
      userLocation.endlng=place.geometry.location.lng()

     }

      console.log({ place });
      console.log({ userLocation });
      
    });
  }, []);
  return (
    <>
      <input type="text" ref={inputRef} name={props.name} {...props} />

     

    </>
  );
};
export default AutoCompletePlaceSimple;
