export default {
  isLoggedIn: false,
  showDashboardType:null,
  userLocation:{
    startlng:null,
    startlat:null,
    endlng:null,
    endlat:null,
    endlat:null,
    country:null
  },
  parkCoordinates:{lng:null,lat:null},
  userTowRequest:{
    
    ContactPhone: "",
    Destination:"",
    Address: "",
    Country: "",
    Region: "",
    RoleType: "customer",
    FullName: "",
    Address: "",
    Email: "",
    Phone: "",
    Website: "",
    PaymentMethod: "",
    Currency: "",
    VehicleNumber:"",
    SerialNumber:"",
    VehicleMake:"",
    VehicleColor:"",
    VehicleModel:"",
    LicensePlate:"",
    VehicleModelYear: "",
    Insured:"",
    PicUrl:"",
    Description:"",
    longitude:"",
    latitude:"",
    IncidentLocation:"",
    Destination:"",
    TowRequestPrice:"",
    TowRequestDate: "",
    TowRequestStatus:"",
    Comment:"",
  },
  
  
  
  user:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : {},
  error: null,
  loading: false,
};
