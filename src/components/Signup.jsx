// src/components/Signup.jsx
import React, { useState } from "react";

const Signup = ({
  onSubmit,
  fields = [],
  heading = "Create Account",
  subheading = "Join us today and start your journey",
}) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    fields.forEach((field) => {
      const value = formData[field.name]?.trim() || "";
      if (!value) {
        newErrors[field.name] = `${field.label || field.name} is required`;
      } else if (field.type === "email" && !/\S+@\S+\.\S+/.test(value)) {
        newErrors[field.name] = "Please enter a valid email address";
      }
    });

    const password = formData.password || "";
    const confirmPassword = formData.confirmPassword || "";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (password && confirmPassword && password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = (e) => {
    // console.log("onSubmit was hit");
    e.preventDefault();
    setSubmitted(true);
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      onSubmit?.(formData);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
      {/* Outer container for full width look */}
      <div className="w-full bg-white border border-gray-200 shadow-sm">
        {/* Header */}
        <div className="text-center pt-12 pb-8 px-6 border-b border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            {heading}
          </h1>
          <p className="text-lg text-gray-500">{subheading}</p>
        </div>

        {/* Form Section */}
        <div className="max-w-6xl mx-auto w-full p-8 md:p-14">
          <form onSubmit={handleSubmit} className="space-y-7">
            {/* Dynamic Fields */}
            {fields.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-semibold text-gray-700 mb-2 capitalize"
                >
                  {field.label || field.name}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  placeholder={`Enter your ${field.name}`}
                  className={`w-full px-4 py-3 border-2 rounded-xl text-gray-800 font-medium transition-all duration-200
                    focus:outline-none
                    ${submitted && errors[field.name]
                      ? "border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200"
                      : "border-gray-200 bg-gray-50 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 hover:border-gray-300"
                    }`}
                />
                {submitted && errors[field.name] && (
                  <p className="text-red-600 text-sm mt-2 font-semibold">
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}

            {/* Password Fields */}
            <div className="space-y-6">
              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password || ""}
                    onChange={handleChange}
                    placeholder="Minimum 6 characters"
                    className={`w-full px-4 py-3 border-2 rounded-xl text-gray-800 font-medium pr-12 transition-all duration-200
                      ${submitted && errors.password
                        ? "border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200"
                        : "border-gray-200 bg-gray-50 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 hover:border-gray-300"
                      }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600 transition"
                  >
                    {showPassword ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                      : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    }
                  </button>
                </div>
                {submitted && errors.password && (
                  <p className="text-red-600 text-sm mt-2 font-semibold">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword || ""}
                    onChange={handleChange}
                    placeholder="Re-enter your password"
                    className={`w-full px-4 py-3 border-2 rounded-xl text-gray-800 font-medium pr-12 transition-all duration-200
                      ${submitted && errors.confirmPassword
                        ? "border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200"
                        : "border-gray-200 bg-gray-50 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 hover:border-gray-300"
                      }`}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600 transition"
                  >
                    {showConfirmPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    )}
                  </button>
                </div>
                {submitted && errors.confirmPassword && (
                  <p className="text-red-600 text-sm mt-2 font-semibold">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold text-lg py-4 px-6 rounded-xl transition-transform duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-indigo-500/30 shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
              >
                Create My Account
              </button>
            </div>

            {/* Footer */}
            <p className="text-center text-gray-600 text-sm mt-6">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                Sign in here
              </a>
            </p>
          </form>
        </div>

        {/* Trust Badges */}
        <div className="bg-gray-50 py-6 border-t border-gray-100 flex items-center justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>Secure & Encrypted</span>
          </div>
          <div className="h-3 w-px bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>Privacy Protected</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
