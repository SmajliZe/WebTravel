import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Morate unijeti naslov! "),
    postText: Yup.string().required("Morate unijeti text! "),
    username: Yup.string()
      .min(3)
      .max(15)
      .required("Username mora imati izmedju 3 do 15 karaktera! "),
  });
  let history = useNavigate();
  const onSubmit = (data) => {
    axios.post("http://localhost:3333/posts", data).then((response) => {
      history("/");
    });
  };

  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label className="plainText">Title: </label>
          <ErrorMessage name="title" component="span" />
          <Field autocomplete="off" id="inputTitle" name="title" />
          <label className="plainText">Post: </label>
          <ErrorMessage name="postText" component="span" />
          <Field
            type="textbox"
            className="box"
            autocomplete="off"
            id="inputPostText"
            name="postText"
          />
          <label className="plainText">Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field autocomplete="off" id="inputUsername" name="username" />

          <button type="submit"> Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
