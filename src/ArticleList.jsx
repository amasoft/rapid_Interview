import React, { useState } from "react";
import axios from "axios";
import { Form } from "react-router-dom";

const ArticleList = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });
  const [error, setError] = useState({
    nameErr: "",
    emailArr: "",
    textArr: "",
  });
  const [success, setSuccess] = useState();
  const [errorData, setErrordata] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    console.log("form data ", formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name === "") {
      setError((prevState) => ({
        ...prevState,
        nameErr: "Name cannot be blank",
      }));
      return;
    }
    if (formData.email === "") {
      setError((prevState) => ({
        ...prevState,
        emailArr: "Email cannot be blank",
      }));
      return;
    }
    if (formData.text === "") {
      setError((prevState) => ({
        ...prevState,
        textArr: "Text Field cannot be blank",
      }));
      return;
    }

    setError({
      nameErr: "",
      emailArr: "",
      textArr: "",
    });

    try {
      // Make a POST request
      (formData.postId = 1), (formData.id = 9);

      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/comments",
        formData
      );
      setSuccess("Data Added Successfully!");
      // Handle the response as needed
      console.log("Post request successful:", response.data);
    } catch (error) {
      // Handle errors
      setErrordata("Error Adding data!");

      console.error("Error making POST request:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      {error.nameErr && <small style={{ color: "red" }}>{error.nameErr}</small>}
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      {error.emailArr && (
        <small style={{ color: "red" }}>{error.emailArr}</small>
      )}
      <br />
      <label>
        Text:
        <textarea
          name="text"
          value={formData.text}
          onChange={handleChange}
        ></textarea>
      </label>
      <br />
      {error.textArr && <small style={{ color: "red" }}>{error.textArr}</small>}
      <br />
      {success && <small style={{ color: "green" }}>{success}</small>}
      {errorData && <small style={{ color: "red" }}>{errorData}</small>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ArticleList;
