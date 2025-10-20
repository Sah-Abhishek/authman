import axios from "axios";

let API = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  }
})

// ========================
// Configuration
// ========================


/** 
* Initialise or update the api Configuration
* should be called once by the user of the package
* @param {object} config - configuration options,
* @param {object} config.baseURL - baseURL of the backend
* @param {object} [cnfig.headers] - optional custom headers
 **/


export const configureAuthService = (config = {}) => {
  const { baseURL = "http://localhost:3000", headers = {} } = config;

  API = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      ...headers
    }
  })
}

// Signup

export const signup = async (endPoint, data) => {
  try {
    // console.log("The api ws hit in the authservice.js");
    const res = await API.post(endPoint, data);

    return res.data;
  } catch (error) {
    throw handleError(error);
  }
}

// Login

export const login = async (endPoint, data, rememberMe = false) => {
  // console.log("This is the rememberMe variable: ", rememberMe);
  try {
    const res = await API.post(endPoint, data);
    const storage = rememberMe ? localStorage : sessionStorage;
    if (res?.data?.token) {
      storage.setItem("auth_token", res.data.token);
    }
    if (res?.data?.user) {
      storage.setItem("user", JSON.stringify(res.data.user));
    }
    return res.data;
  } catch (error) {
    throw handleError(error);
  }
}

//Logout
export const logout = () => {
  localStorage.removeItem("auth_token");
  localStorage.removeItem("user");
  sessionStorage.removeItem("auth_token");
  sessionStorage.removeItem("user");
};


export const handleError = (error) => {
  if (error.response) {
    return new Error(error.response.data.message || "Server Error");
  } else if (error.request) {
    return new Error("No response from the server")
  } else {
    return new Error(error.message);
  }
}
