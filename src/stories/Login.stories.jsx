
// src/stories/Login.stories.jsx
import React from "react";
import Login from "../components/Login";
import { configureAuthService, login } from "../utils/authService";

export default {
  title: "Auth/Login",
  component: Login,
  parameters: {
    layout: "centered",
  },
};

configureAuthService({ baseURL: "http://localhost:3000" })
const handleSignup = async () => {


}

const Template = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: async (formData, rememberMe) => {
    try {
      // Call your authService function
      const response = await login("/auth/login", formData, rememberMe);
      console.log("Login success:", response);
      alert("Login successful!");
    } catch (error) {
      console.error("Login failed:", error.message);
      alert(`Login failed: ${error.message}`);
    }
  },
  fields: [{ name: "email", type: "email", label: "Email" }],
};
