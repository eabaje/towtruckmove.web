import React, { useState, useContext, useEffect } from "react";
//import { IMG_URL } from "../../../constants";
import { useForm, Controller } from "react-hook-form";

import { Country, State } from "country-state-city";

import { fetchData } from "../../../helpers/query";

import { GlobalContext } from "../../../context/Provider";
import {
  AddSchoolPlaceWork,
  editUser,
  resetPassword,
  updateCompany,
} from "../../../context/actions/user/user.action";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomButton from "../../../components/button/customButton";
import ImageUpload from "../../../components/upload/uploadImage";
//import "../../../styles/form.module.css";
// import { SPECIALIZATION_TYPE } from "../../../constants/enum";
// import CustomPopup from "../../../components/popup/popup.component";
// import UpdateUserFileUpload from "../../../components/upload/edit-user-file-upload";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";

const SchoolForm = (props) => {
  // const { userId, companyId } = query;

  // const isSingleMode = !userId;

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
  const [startDate, setStartDate] = useState(new Date());
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

  const handleChangeRaw = (date) => {
    const newRaw = new Date(date.currentTarget.value);
    if (newRaw instanceof Date && !isNaN(newRaw)) {
      setStartDate(newRaw);
    }
  };
  const [rowsData, setRowsData] = useState([]);

  const addTableRows = () => {
    const rowsInput = {
      SchoolName: "",
      Address: "",
      City: "",
      State: "",
      Country: "",
      YearFrom: "",
      YearTo: "",
    };
    setRowsData([...rowsData, rowsInput]);
  };

  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
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
    userState: { data, loading, error, popUpOverLay: open },
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
      fields2.forEach((field2) => setValue(field2, company[field2]));
    })((err) => {
      toast.error(err);
    });
  };

  useEffect(() => {
    addTableRows();
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
    AddSchoolPlaceWork(formdata)(userDispatch);
    //  console.log(`data`, data);
    if (data) {
      toast.success(`Your entry was saved successfully`);
    }
    if (error) {
      toast.error(err);
    }

    // props.relationType === "sch"
    //   ? "School Info"
    //   : props.relationType === "wk"
    //   ? "Work Info"
    //   : props.relationType === "pl"
    //   ? "Place Lived"
    //   : "Info";
  }

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
      <form class="account-setting-form" onSubmit={handleSubmit(onSubmit)}>
        <h3>{props.title ? props.title : "School Information"}</h3>

        <input
          type="hidden"
          name="RelationType"
          value={props.relationType}
          className="form-control"
          {...register("RelationType")}
        />
        <input
          type="hidden"
          name="UserId"
          value={props.UserId}
          className="form-control"
          {...register("UserId")}
        />

        <div class="row">
          <div className="form-group row">
            <div className="col-md-12">
              <div className="col-md-12 alert alert-success ">
                <h6 style={{ textAlign: "right" }}>
                  {" "}
                  {/* <a
                                href="javascript:void()"
                                className=" right"
                                onClick={addTableRows}
                              >
                                + Add Vehicle
                              </a> */}
                  <button
                    type="button"
                    className=" default-btn"
                    onClick={addTableRows}
                  >
                    + Add{" "}
                    {props.relationType === "sch"
                      ? "School Info"
                      : props.relationType === "wk"
                      ? "Work Info"
                      : props.relationType === "pl"
                      ? "Place Lived"
                      : "Info"}
                  </button>
                </h6>
              </div>
            </div>
          </div>
          {rowsData.map((child, index) => (
            <>
              {index === 1 && (
                <div className="form-group row">
                  <div
                    className="col-md-12 alert alert-success"
                    style={{ textAlign: "right" }}
                  ></div>
                </div>
              )}
              <div id={index} class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>
                      {props.formTypeName
                        ? props.formTypeName
                        : "Name of School"}
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder={
                        props.formTypeName
                          ? props.formTypeName
                          : "Name of School"
                      }
                      id={`child[${index}].${
                        props.formTypeControl
                          ? props.formTypeControl
                          : "SchoolName"
                      }`}
                      name={`child[${index}].${
                        props.formTypeControl
                          ? props.formTypeControl
                          : "SchoolName"
                      }`}
                      {...register(
                        `child[${index}].${
                          props.formTypeControl
                            ? props.formTypeControl
                            : "SchoolName"
                        }`
                      )}
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Address"
                      id={`child[${index}].Address`}
                      name={`child[${index}].Address`}
                      {...register(`child[${index}].Address`, {
                        required: true,
                      })}
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>From Year </label>

                    <Controller
                      name={`child[${index}].YearFrom`}
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
                            dateFormat="yyyy"
                            scrollableYearDropdown={true}
                            showYearDropdown
                            placeholderText="Enter date"
                            customInput={<CustomInput />}
                            onChangeRaw={(e) => handleChangeRaw(e)}
                            // onChange={(date: Date | null) => {
                            //   setStartDate(date);
                            // }}
                          />
                        );
                      }}
                    />
                  </div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>To Year</label>
                    <Controller
                      name={`child[${index}].YearTo`}
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
                            placeholderText="Enter date"
                            customInput={<CustomInput />}
                            onChangeRaw={(e) => handleChangeRaw(e)}
                            // onChange={(date: Date | null) => {
                            //   setStartDate(date);
                            // }}
                          />
                        );
                      }}
                    />
                    {/* <DatePicker
                      selected={startDate}
                      customInput={<CustomInput />}
                      onChange={(date) => setStartDate(date)}
                    /> */}
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>City</label>

                    <select
                      className="form-control"
                      // readOnly={readOnly}

                      id={`child[${index}].City`}
                      name={`child[${index}].City`}
                      {...register(`child[${index}].City`, {
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
                      className="form-select"
                      id={`child[${index}].State`}
                      name={`child[${index}].State`}
                      {...register(`child[${index}].State`, {
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
                      className="form-select"
                      id={`child[${index}].Country`}
                      name={`child[${index}].Country`}
                      {...register(`child[${index}].Country`, {
                        required: true,
                      })}
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
                {index > 0 && (
                  <div className="form-group row">
                    <div
                      className="col-md-12 alert alert-success"
                      style={{ textAlign: "right" }}
                    >
                      <button
                        type="button"
                        className="btn btn-outline-danger right"
                        onClick={() => deleteTableRows(index)}
                      >
                        x
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ))}

          <div class="col-lg-12 col-md-12">
            <button type="submit" class="default-btn">
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
//Login.layout = "main";

//export default AddEditProfile;

export default dynamic(() => Promise.resolve(SchoolForm), { ssr: false });
