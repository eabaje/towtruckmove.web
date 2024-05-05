import React, { useState, useContext, useEffect } from "react";
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
import { toast } from "react-toastify";
import dynamic from "next/dynamic";
import CoupleForm from "./coupleForm";
import ChildForm from "./childForm";
import ParentForm from "./parentForm";
import SchoolForm from "./schoolForm";

const AddEditProfile = ({ query }) => {
  // const { userId, companyId } = query;

  // const isSingleMode = !userId;

  const [profile, setProfile] = useState({});
  const [companyInfo, setCompanyInfo] = useState({});

  // const isAddMode = !userId;

  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  // const [companyId, setcompanyId] = useState("");
  const [email, setEmail] = useState("");
  const [countries, setCountries] = useState([]);
  const [Region, setRegion] = useState([]);
  const [City, setCity] = useState([]);
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
  // const [showProfile, setShowProfile] = useState(false);

  function onChange(event) {
    setValues(event.target.value);
    // state.companyUser.Specilaization =
    //   event.target.options[event.target.selectedIndex].text;
    // console.log(
    //   "value:",
    //   event.target.options[event.target.selectedIndex].text
    //);
  }

  // Messages
  const required = "This field is required";
  const maxLength = "Your input exceed maximum length";

  // Error Component
  const errorMessage = (error) => {
    return (
      <p className="invalid-feedback" style={{ color: "red" }}>
        {error}
      </p>
    );
  };

  const popupCloseHandler = (e) => {
    PopUpClose()(userDispatch);
    // setVisibility(e);
  };

  const selectCountry = async (e) => {
    setCountry((country) => e.target.value);

    setRegion((Region = State.getStatesOfCountry(e.target.value)));
  };
  const SelectGender = async (e) => {
    e.target.value !== null && setGender(e.target.value);
  };
  const popupCloseHandlerImage = (e) => {
    setVisibilityImage(e);
  };
  const onChangePicHandler = async (e) => {
    setpicFile((picFile) => e.target.files[0]);
  };
  const changePassword = async () => {
    setShowPassword(!showPassword);
  };
  const changeAccount = async () => {
    setShowProfile(!showProfile);
  };
  const changeCompany = async () => {
    setShowCompany(!showCompany);
  };
  const changeBilling = async () => {
    setShowBilling(!showBilling);
  };
  const changeReference = async () => {
    setShowReference(!showReference);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    control,
  } = useForm();

  const {
    userDispatch,
    userState: { User: data, loading, popUpOverLay: open },
  } = useContext(GlobalContext);
  const {
    authState: { user },
  } = useContext(GlobalContext);

  const getCompany = (companyId) => {
    fetchData(
      "user/findCompany",
      companyId
    )((company) => {
      console.log("company", company);
      setCompanyInfo(company);
      const fields2 = [
        "CompanyName",
        "ContactEmail",
        "ContactPhone",
        "Address",
        "Region",
        "Country",
        "CompanyType",
        "Specialization",
        "RoleType",
        "Website",
      ];
      fields2.forEach((field2) => setValue2(field2, company[field2]));
    })((err) => {
      toast.error(err);
    });
  };

  useEffect(() => {
    setCountries((countries) => (countries = Country.getAllCountries()));
    // fetchData(
    //   "user/findOne",
    //   userId
    // )((user) => {
    //   setProfile(user);
    //   getCompany(user.CompanyId);
    //   const fields = [
    //     "FullName",
    //     "Email",
    //     "DOB",
    //     "Address",
    //     "City",
    //     "Country",
    //     "Phone",
    //     "PicUrl",
    //   ];
    //   fields.forEach((field) => setValue(field, user[field]));
    //   setEmail(user["Email"]);
    //   // setcompanyId(user["CompanyId"]);
    //   setPickUpRegion(
    //     (pickUpRegion) =>
    //       (pickUpRegion = State.getStatesOfCountry(user["Country"]))
    //   );

    //   setselpickUpRegion(user["Region"]);
    // })((err) => {
    //   toast.error(err);
    // });
  }, []);

  function onSubmit(formdata) {
    // console.log(`formdata`, formdata);
    return isAddMode ? null : UpdateDriver(formdata);
  }

  const UpdateDriver = (data) => {
    editUser(data)(userDispatch)((res) => {
      //  console.log(`data`, data);
      toast.success(`Updated  Driver-${res.data.DriverName} successfully`);
    })((err) => {
      toast.error(err);
    });
  };

  function onChangePassword(formdata) {
    formdata.Email = profile?.Email;
    // console.log("fromPasword", formdata);
    resetPassword(formdata)(userDispatch)((res) => {
      toast.success(`Updated  Password successfully`);
    })((err) => {
      toast.error(err);
    });
  }

  function onChangeCompany(formdata) {
    updateCompany(formdata, formdata.CompanyId)(userDispatch)((res) => {
      toast.success(`Updated  Company Profile successfully`);
    })((err) => {
      toast.error(err);
    });
  }

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
  CustomInput.displayName = "CustomInput";
  console.log("ShowProfile", showProfile);
  return (
    <>
      <div class="page-banner-box">
        <h3>Profile Update</h3>
      </div>

      <div class="account-setting-list-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="profile-information-tab"
              data-bs-toggle="tab"
              href="#profile-information"
              role="tab"
              aria-controls="profile-information"
            >
              My Profile
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              id="spouse-tab"
              data-bs-toggle="tab"
              href="#spouse"
              role="tab"
              aria-controls="spouse"
            >
              Spouse
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              id="child-tab"
              data-bs-toggle="tab"
              href="#child"
              role="tab"
              aria-controls="child"
            >
              Children
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              id="sibling-tab"
              data-bs-toggle="tab"
              href="#sibling"
              role="tab"
              aria-controls="sibling"
            >
              Siblings
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              id="paternal-tab"
              data-bs-toggle="tab"
              href="#paternal"
              role="tab"
              aria-controls="message"
            >
              Paternal
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              id="maternal-tab"
              data-bs-toggle="tab"
              href="#maternal"
              role="tab"
              aria-controls="maternal"
            >
              Maternal
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="school-tab"
              data-bs-toggle="tab"
              href="#school"
              role="tab"
              aria-controls="school"
            >
              Schools
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="place-tab"
              data-bs-toggle="tab"
              href="#place"
              role="tab"
              aria-controls="place"
            >
              Places lived
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="work-tab"
              data-bs-toggle="tab"
              href="#work"
              role="tab"
              aria-controls="work"
            >
              My Work
            </a>
          </li>
        </ul>
      </div>

      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="profile-information"
          role="tabpanel"
        >
          <form class="account-setting-form" onSubmit={handleSubmit(onSubmit)}>
            <h3>Profile Information</h3>

            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                    name="FirstName"
                    {...register("FirstName")}
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Middle Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Middle name"
                    name="MiddleName"
                    {...register("MiddleName")}
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                    name="LastName"
                    {...register("LastName")}
                  />
                </div>
              </div>

              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Maiden Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Maiden Name"
                    name="MaidenName"
                    {...register("MaidenName")}
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Age Category</label>
                  <select
                    class="form-select"
                    name="Sex"
                    {...register("Age", {
                      required: true,
                    })}
                  >
                    <option value=""></option>
                    <option value="<18">{"<18"}</option>
                    <option value="18-30">18-30</option>
                    <option value="31-40">31-40</option>
                    <option value="41-50">41-50</option>
                    <option value="51-60">51-60</option>
                    <option value="61 and above">61 and above</option>
                  </select>
                </div>
              </div>

              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    name="Email"
                    {...register("Email")}
                  />
                </div>
              </div>
              {/* <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Backup Email</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Backup email"
                    {...register("FirstName")}
                  />
                </div>
              </div> */}
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Date of Birth</label>
                  <Controller
                    name={"DOB"}
                    control={control}
                    // defaultValue={new Date()}
                    render={({ field: { onChange, value } }) => {
                      return (
                        <DatePicker
                          wrapperclassName="datePicker"
                          className="ui-datepicker"
                          onChange={onChange}
                          selected={value}
                          yearDropdownItemNumber={100}
                          // dateFormat="dd-MM-yyyy"
                          scrollableYearDropdown={true}
                          showYearDropdown
                          showMonthDropdown
                          placeholderText="Enter date"
                          customInput={<CustomInput />}
                        />
                      );
                    }}
                  />
                  {/* <input
                    type="text"
                    class="form-control"
                    placeholder="Date of birth"
                    id="datepicker"
                    name="DOB"
                    {...register("DOB")}
                  /> */}
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Phone No:</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Phone no"
                    name="Mobile"
                    {...register("Mobile")}
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Gender</label>
                  <select
                    class="form-select"
                    name="Sex"
                    onchange={SelectGender}
                    {...register("Sex", {
                      required: true,
                    })}
                  >
                    <option selected="0">Gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Occupation</label>
                  <select
                    class="form-select"
                    name="Occupation"
                    {...register("Occupation", {
                      required: true,
                    })}
                  >
                    <option selected="1">Occupation</option>
                    <option value="2">Software Developer</option>
                    <option value="3">Biomedical Engineer</option>
                    <option value="4">Civil Engineer</option>
                    <option value="5">General Practitioner</option>
                    <option value="6">Structural Engineer</option>
                    <option value="7">Pharmacy Technician</option>
                    <option value="8">Mechanical Engineer</option>
                    <option value="9">Petroleum Engineer</option>
                    <option value="10">Technician</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Employment Status</label>
                  <select
                    class="form-select"
                    name="EmploymentStatus"
                    {...register("EmploymentStatus", {
                      required: true,
                    })}
                  >
                    <option selected="0">Employment Status</option>
                    <option value="2">Employed</option>
                    <option value="3">Entrepreneur</option>
                    <option value="4">Unemployed</option>
                  </select>
                </div>
              </div>

              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Relation Status</label>
                  <select
                    class="form-select"
                    name="MaritalStatus"
                    {...register("MaritalStatus", {
                      required: true,
                    })}
                  >
                    <option selected="0">Relation Status</option>
                    <option value="1">Married</option>
                    <option value="2">Unmarried</option>
                    <option value="3">Single</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Blood Group</label>
                  <select
                    class="form-select"
                    name="BloodGroup"
                    {...register("BloodGroup", {
                      required: true,
                    })}
                  >
                    <option selected="1">Blood Group</option>
                    <option value="2">A+</option>
                    <option value="3">A-</option>
                    <option value="4">B+</option>
                    <option value="5">B-</option>
                    <option value="6">O+</option>
                    <option value="7">O-</option>
                    <option value="8">AB+</option>
                    <option value="9">AB-</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Website</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Website"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Language</label>
                  <select
                    class="form-select"
                    name="Language"
                    {...register("Language", {
                      required: true,
                    })}
                  >
                    <option selected="1">Language</option>
                    <option value="2">English</option>
                    <option value="3">Portuguese</option>
                    <option value="4">Japanese</option>
                    <option value="5">Russian</option>
                    <option value="6">Javanese</option>
                    <option value="7">Gujarati</option>
                    <option value="8">Yoruba</option>
                    <option value="9">Polish</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    name="Address"
                    class="form-control"
                    placeholder="Address"
                    {...register("Address", {
                      required: true,
                    })}
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>City</label>

                  <select
                    name="City"
                    className="form-control"
                    // readOnly={readOnly}
                    id="City"
                    {...register("City", {
                      required: true,
                    })}
                  >
                    <option value=""> Select City </option>
                    {City.map((item) => (
                      <option
                        key={item.isoCode}
                        selected={selCity === item.isoCode}
                        value={item.isoCode}
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>State</label>

                  <select
                    name="State"
                    className="form-select"
                    id="State"
                    {...register("State", {
                      required: true,
                    })}
                  >
                    <option value=""> Select Region/State </option>
                    {Region.map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Country</label>
                  <select
                    name="Country"
                    className="form-select"
                    {...register("Country")}
                    onChange={selectCountry}
                  >
                    <option value="">Select Country</option>
                    {countries.map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div class="col-lg-12 col-md-12">
                <button type="submit" class="default-btn">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>

        <div class="tab-pane fade" id="spouse" role="tabpanel">
          <CoupleForm
            sex={gender}
            relationType={"sp"}
            UserId={user.UserId}
            title={"Spousal Information"}
          />
        </div>

        <div class="tab-pane fade" id="child" role="tabpanel">
          <ChildForm
            title={"Children Information"}
            relationType={"ch"}
            UserId={user.UserId}
          />
        </div>

        <div class="tab-pane fade" id="sibling" role="tabpanel">
          <ChildForm
            title={"Sibling Information"}
            relationType={"sib"}
            UserId={user.UserId}
          />
        </div>

        <div class="tab-pane fade" id="paternal" role="tabpanel">
          <ParentForm title={"Paternal Information"} UserId={user.UserId} />
        </div>

        <div class="tab-pane fade" id="maternal" role="tabpanel">
          <ParentForm title={"Maternal Information"} UserId={user.UserId} />
        </div>

        <div class="tab-pane fade" id="school" role="tabpanel">
          <SchoolForm
            title={"School Information"}
            UserId={user.UserId}
            formTypeName={"School Name"}
            formTypeControl={"SchoolName"}
            relationType={"sch"}
          />
        </div>

        <div class="tab-pane fade" id="place" role="tabpanel">
          <SchoolForm
            title={"Places lived"}
            UserId={user.UserId}
            formTypeName={"Place lived"}
            formTypeControl={"NeighborhoodName"}
            relationType={"pl"}
          />
        </div>
        <div class="tab-pane fade" id="work" role="tabpanel">
          <SchoolForm
            title={"Work History"}
            UserId={user.UserId}
            formTypeName={"Neighbourhood"}
            formTypeControl={"Neighbourhood"}
            relationType={"wk"}
          />
        </div>
      </div>
    </>
  );
};
//Login.layout = "main";

//export default AddEditProfile;

export default dynamic(() => Promise.resolve(AddEditProfile), { ssr: false });
