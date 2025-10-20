// src/stories/Signup.stories.jsx
import React from "react";
import Signup from "../components/Signup";
import { signup } from "../utils/authService";

export default {
  title: "Auth/Signup",
  component: Signup,
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <Signup {...args} />;

export const Default = Template.bind({});
Default.args = {
  fields: [
    { name: "email", type: "email" },
    { name: "firstName", type: "text" },
    { name: "lastName", type: "text" },
    { name: "Age", type: "text" },
    { name: "mobileNumber", type: "tel" },
  ],
  heading: "Signup",
  subheading: "Create your account",
  onSubmit: async (data) => {
    try {
      console.log("The button was hit");
      const res = await signup("/auth/signup", data);
      console.log("This is the response", res);

    } catch (error) {

    }
  }

};
