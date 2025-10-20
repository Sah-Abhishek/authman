
import React, { useState } from "react";
import { Eye, EyeOff, LogIn } from "lucide-react";

const Login = ({
  onSubmit,
  heading = "Welcome Back",
  subheading = "Sign in to your account to continue",
  fields = [
    { name: "email", type: "email", label: "Email" },
  ],
}) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

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

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit?.(formData, rememberMe);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
      <div className="w-full max-w-3xl mx-auto py-16 px-10 md:px-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            {heading}
          </h1>
          <p className="text-lg text-gray-500 font-light">{subheading}</p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
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
                className={`w-full px-4 py-3 border-2 rounded-xl text-gray-800 transition-all duration-200 font-medium
                  focus:outline-none
                  ${submitted && errors[field.name]
                    ? "border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200"
                    : "border-gray-200 bg-gray-50 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 hover:border-gray-300"
                  }`}
              />
              {submitted && errors[field.name] && (
                <p className="text-red-600 text-xs mt-2 font-semibold flex items-center gap-1">
                  <span>✕</span> {errors[field.name]}
                </p>
              )}
            </div>
          ))}

          {/* Password Field */}
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
                placeholder="Enter your password"
                className={`w-full px-4 py-3 border-2 rounded-xl text-gray-800 transition-all duration-200 font-medium pr-12
                  focus:outline-none
                  ${submitted && errors.password
                    ? "border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200"
                    : "border-gray-200 bg-gray-50 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 hover:border-gray-300"
                  }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600 transition-colors duration-200"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {submitted && errors.password && (
              <p className="text-red-600 text-xs mt-2 font-semibold flex items-center gap-1">
                <span>✕</span> {errors.password}
              </p>
            )}
          </div>

          {/* Remember & Forgot Password */}
          <div className="flex items-center justify-between mt-2">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                className="accent-indigo-600 h-4 w-4"
                name="remember"
                value={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            <a
              href="/forgot-password"
              className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold text-lg py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-indigo-500/30 shadow-lg shadow-indigo-200 mt-8 flex items-center justify-center gap-2"
          >
            <LogIn size={22} />
            Sign In
          </button>

          {/* Signup Redirect */}
          <p className="text-center text-gray-600 text-sm mt-6">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
            >
              Create one
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
