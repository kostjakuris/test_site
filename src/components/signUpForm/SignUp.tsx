import { useFormik } from "formik";
import { Routes, Route } from "react-router-dom";
import "./signUpForm.min.css";
import { useState, useEffect } from "react";
import { validate } from "../input/InputValidation";
import Input from "../input/Input";
import SignIn from "../signInForm/SignIn";
import { FormData } from "../input/inputVariables";
import axios from "axios";

const SignUp = () => {
  const [hidePassword, setHidePassword] = useState(false);
  const [hideRePassword, setHideRePassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
      country: "",
      town: "",
      password: "",
      rePassword: "",
      adress: "",
    },
    validate,

    onSubmit: (values: FormData) => {
      console.log(formik.values);
      onSubmit();
    },
  });
  async function onSubmit() {
    try {
      const respons = await axios.post("http://intern-project-backend.atwebpages.com/api/auth/register", {
        name: "Regional",
        surname: "Admin",
        email: "RegionalAdmin1@gmail.com",
        role: "regional_admin",
        password: "zaqxsw228",
        country: "USA",
        city: "Dnipro",
        address: "123 Main Street",
        phone_number: "+1 (555) 123-4567",
      });
      return respons;
    } catch (e: any) {
      return e.message;
    }
  }

  return (
    <main className="main">
      <Routes>
        <Route path="/SignIn.tsx" element={<SignIn />} />
      </Routes>
      <div className="main-content">
        <div className="form-wrapper-signUp ">
          <form onSubmit={formik.handleSubmit}>
            <h2 className="form-wrapper-signUp__title">Sign Up</h2>
            <p className="form-wrapper-signUp__info">Please enter your details to continue</p>
            <div className="signUp__form">
              <div className="left__form">
                <div className=" form__firstname ">
                  <Input
                    id={"firstname"}
                    name={"firstname"}
                    type={"text"}
                    placeholder={"Firstname"}
                    className={"form--signUp firstName"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstname}
                    touched={formik.touched.firstname}
                    errors={formik.errors.firstname}
                  />
                </div>

                <div className=" form__email-signUp ">
                  <Input
                    id={"email"}
                    name={"email"}
                    type={"email"}
                    placeholder={"Email"}
                    className={"form--signUp email"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    touched={formik.touched.email}
                    errors={formik.errors.email}
                  />
                </div>

                <div className=" form__country ">
                  <Input
                    id={"country"}
                    name={"country"}
                    type={"text"}
                    placeholder={"Country"}
                    className={"form--signUp country"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.country}
                    touched={formik.touched.country}
                    errors={formik.errors.country}
                  />
                </div>

                <div className=" form__password-signUp ">
                  <Input
                    id={"password"}
                    name={"password"}
                    type={hidePassword ? "text" : "password"}
                    placeholder={"Password"}
                    className={"form--signUp password"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    touched={formik.touched.password}
                    errors={formik.errors.password}
                  />
                  <span
                    className={hidePassword ? "hiding__icon-signUp disabled" : "hiding__icon-signUp"}
                    onClick={() => setHidePassword((prev) => !prev)}
                  >
                    <img src="img/mdi_eye.jpg" alt="eye" />
                  </span>
                </div>
                <div className=" form__adress ">
                  <Input
                    id={"adress"}
                    name={"adress"}
                    type={"text"}
                    placeholder={"Adress"}
                    className={"form--signUp adress"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.adress}
                    touched={formik.touched.adress}
                    errors={formik.errors.adress}
                  />
                </div>
              </div>

              <div className="right__form">
                <div className=" form__lastname">
                  <Input
                    id={"lastname"}
                    name={"lastname"}
                    type={"text"}
                    placeholder={"Lastname"}
                    className={"form--signUp lastName"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastname}
                    touched={formik.touched.lastname}
                    errors={formik.errors.lastname}
                  />
                </div>

                <div className=" form__phoneNumber ">
                  <Input
                    id={"phoneNumber"}
                    name={"phoneNumber"}
                    type={"tel"}
                    placeholder={"Phone number"}
                    className={"form--signUp phoneNumber"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                    touched={formik.touched.phoneNumber}
                    errors={formik.errors.phoneNumber}
                  />
                </div>

                <div className=" form__town ">
                  <Input
                    id={"town"}
                    name={"town"}
                    type={"text"}
                    placeholder={"Town"}
                    className={"form--signUp town"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.town}
                    touched={formik.touched.town}
                    errors={formik.errors.town}
                  />
                </div>

                <div className=" form__rePassword-signUp ">
                  <Input
                    id={"rePassword"}
                    name={"rePassword"}
                    type={hideRePassword ? "text" : "password"}
                    placeholder={"Re-password"}
                    className={"form--signUp rePassword"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.rePassword}
                    touched={formik.touched.rePassword}
                    errors={formik.errors.rePassword}
                  />
                  <span
                    className={hideRePassword ? "hiding__icon-signUp disabled" : "hiding__icon-signUp"}
                    //* prev-prevState(состояние до активации setState(предидущее состояние))
                    onClick={() => setHideRePassword((prev) => !prev)}
                  >
                    <img src="img/mdi_eye.jpg" alt="eye" />
                  </span>
                </div>
              </div>
            </div>

            <button className="submit__button-signUp" type="submit" onClick={(e) => e.preventDefault}>
              Sign Up
            </button>
          </form>
          <div className="account__info-signUp">
            <p className="account__info-signUp-text">
              Already have an account?
              <a href="/SignIn.tsx" className="account__info-link">
                Sign In
              </a>
            </p>
          </div>
        </div>

        <div className="form-wrapper-signUp--mobile ">
          <form onSubmit={formik.handleSubmit}>
            <h2 className="form-wrapper-signUp__title">Sign Up</h2>
            <p className="form-wrapper-signUp__info">Please enter your details to continue</p>
            <div className="signUp__form">
              <div className=" form__firstname ">
                <Input
                  id={"firstname"}
                  name={"firstname"}
                  type={"text"}
                  placeholder={"Firstname"}
                  className={"form--signUp firstName"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstname}
                  touched={formik.touched.firstname}
                  errors={formik.errors.firstname}
                />
              </div>

              <div className=" form__lastname">
                <Input
                  id={"lastname"}
                  name={"lastname"}
                  type={"text"}
                  placeholder={"Lastname"}
                  className={"form--signUp lastName"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastname}
                  touched={formik.touched.lastname}
                  errors={formik.errors.lastname}
                />
              </div>

              <div className=" form__email-signUp ">
                <Input
                  id={"email"}
                  name={"email"}
                  type={"email"}
                  placeholder={"Email"}
                  className={"form--signUp email"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  touched={formik.touched.email}
                  errors={formik.errors.email}
                />
              </div>

              <div className=" form__phoneNumber ">
                <Input
                  id={"phoneNumber"}
                  name={"phoneNumber"}
                  type={"tel"}
                  placeholder={"Phone number"}
                  className={"form--signUp phoneNumber"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                  touched={formik.touched.phoneNumber}
                  errors={formik.errors.phoneNumber}
                />
              </div>

              <div className=" form__adress ">
                <Input
                  id={"adress"}
                  name={"adress"}
                  type={"text"}
                  placeholder={"Adress"}
                  className={"form--signUp adress"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.adress}
                  touched={formik.touched.adress}
                  errors={formik.errors.adress}
                />
              </div>

              <div className=" form__country ">
                <Input
                  id={"country"}
                  name={"country"}
                  type={"text"}
                  placeholder={"Country"}
                  className={"form--signUp country"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                  touched={formik.touched.country}
                  errors={formik.errors.country}
                />
              </div>
              <div className=" form__town ">
                <Input
                  id={"town"}
                  name={"town"}
                  type={"text"}
                  placeholder={"Town"}
                  className={"form--signUp town"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.town}
                  touched={formik.touched.town}
                  errors={formik.errors.town}
                />
              </div>

              <div className=" form__password-signUp ">
                <Input
                  id={"password"}
                  name={"password"}
                  type={hidePassword ? "text" : "password"}
                  placeholder={"Password"}
                  className={"form--signUp password"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  touched={formik.touched.password}
                  errors={formik.errors.password}
                />
                <span
                  className={hidePassword ? "hiding__icon-signUp disabled" : "hiding__icon-signUp"}
                  onClick={() => setHidePassword((prev) => !prev)}
                >
                  <img src="img/mdi_eye.jpg" alt="eye" />
                </span>
              </div>

              <div className=" form__rePassword-signUp ">
                <Input
                  id={"rePassword"}
                  name={"rePassword"}
                  type={hideRePassword ? "text" : "password"}
                  placeholder={"Re-password"}
                  className={"form--signUp rePassword"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.rePassword}
                  touched={formik.touched.rePassword}
                  errors={formik.errors.rePassword}
                />
                <span
                  className={hideRePassword ? "hiding__icon-signUp disabled" : "hiding__icon-signUp"}
                  onClick={() => setHideRePassword((prev) => !prev)}
                >
                  <img src="img/mdi_eye.jpg" alt="eye" />
                </span>
              </div>
            </div>

            <button className="submit__button-signUp" type="submit" onClick={(e) => e.preventDefault}>
              Sign Up
            </button>
          </form>
          <div className="account__info-signUp">
            <p className="account__info-signUp-text">
              Already have an account?
              <a href="/SignIn.tsx" className="account__info-signUp-link">
                Sign In
              </a>
            </p>
          </div>
        </div>
        <aside className="aside-content--signUp">
          <div className="img__wrapper">
            <img className="aside__img" src="img/twemoji_battery.jpg" alt="batery" />
          </div>
        </aside>
      </div>
    </main>
  );
};

export default SignUp;
