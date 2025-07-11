import React, { useState } from "react";
import Header from "../Header/Header";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) {
          return "This field is required";
        }
        return "";

      case "email":
        if (!value.trim()) {
          return "This field is required";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return "Please enter a valid email address";
        }
        return "";

      case "password":
        if (!value) {
          return "This field is required";
        }
        if (value.length < 6) {
          return "Password must be at least 6 characters";
        }
        return "";

      case "confirmPassword":
        if (!value) {
          return "This field is required";
        }
        if (value !== formData.password) {
          return "Passwords do not match";
        }
        return "";

      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Real-time validation
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }

    // Special case for confirm password when password changes
    if (name === "password" && touched.confirmPassword) {
      const confirmError = validateField(
        "confirmPassword",
        formData.confirmPassword
      );
      setErrors((prev) => ({
        ...prev,
        confirmPassword: confirmError,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    const newTouched = {};

    Object.keys(formData).forEach((key) => {
      newTouched[key] = true;
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setTouched(newTouched);
    setErrors(newErrors);

    // If no errors, form is valid
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      console.log("Form data:", formData);
    }
  };

  const getFieldStatus = (fieldName) => {
    if (!touched[fieldName]) return "default";
    return errors[fieldName] ? "error" : "success";
  };

  const getFieldClasses = (fieldName) => {
    const status = getFieldStatus(fieldName);
    const baseClasses =
      "w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2";

    switch (status) {
      case "error":
        return `${baseClasses} border-red-500 bg-red-50 focus:ring-red-200`;
      case "success":
        return `${baseClasses} border-green-500 bg-green-50 focus:ring-green-200`;
      default:
        return `${baseClasses} border-gray-300 bg-gray-50 focus:ring-blue-200 focus:border-blue-500`;
    }
  };

  return (
    <div className="w-full h-full">
      <Header />
      <div className="py-8 px-4">
        <div className=" mx-auto">
          {/* Navigation */}
          <div className="mb-8">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Forms</span>
              <span>›</span>
              <span className="text-gray-900 font-medium">Validation</span>
            </nav>
          </div>

          {/* Form Examples */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Validation Wrong */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Validation Wrong
              </h2>

              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="William Robbie"
                    className="w-full px-4 py-3 rounded-lg border border-red-500 bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-200"
                    readOnly
                  />
                  <p className="mt-2 text-sm text-red-600">
                    This field is required
                  </p>
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Type"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    readOnly
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    readOnly
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    readOnly
                  />
                </div>

                <button
                  type="button"
                  className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Submit
                </button>
              </div>
            </div>

            {/* Validation Complete */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Validation Complete
              </h2>

              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="William Robbie"
                    className="w-full px-4 py-3 rounded-lg border border-green-500 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-200"
                    readOnly
                  />
                  <p className="mt-2 text-sm text-green-600">Looks Good!</p>
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Type"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    readOnly
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    readOnly
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    readOnly
                  />
                </div>

                <button
                  type="button"
                  className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Interactive Validation Form
            </h2>

            <div onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getFieldClasses("name")}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                )}
                {getFieldStatus("name") === "success" && (
                  <p className="mt-2 text-sm text-green-600">Looks Good!</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getFieldClasses("email")}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
                {getFieldStatus("email") === "success" && (
                  <p className="mt-2 text-sm text-green-600">Looks Good!</p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getFieldClasses("password")}
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                )}
                {getFieldStatus("password") === "success" && (
                  <p className="mt-2 text-sm text-green-600">Looks Good!</p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getFieldClasses("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.confirmPassword}
                  </p>
                )}
                {getFieldStatus("confirmPassword") === "success" && (
                  <p className="mt-2 text-sm text-green-600">Looks Good!</p>
                )}
              </div>

              <button
                onClick={handleSubmit}
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
