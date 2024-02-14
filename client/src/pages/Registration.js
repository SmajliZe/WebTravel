import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

function Registration() {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3)
      .max(15)
      .required("Username mora imati izmedju 3 do 15 karaktera! "),
    password: Yup.string().min(4).max(15).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3333/auth/register", data).then(() => {
      console.log(data);
    });
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <h1 className="plainText">REGISTRATION</h1>
          <ErrorMessage name="username" component="span" />
          <Field
            autoComplete="off"
            id="inputUsername"
            name="username"
            placeholder="Username"
          />

          <ErrorMessage name="password" component="span" />
          <Field
            autoComplete="off"
            type="password"
            id="inputPassword"
            name="password"
            placeholder="Password"
          />

          <button type="submit">
            <Link className="link" to="/login">
              Register
            </Link>
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;
