import React from "react";
import ContactImage from "../../Assets/output-onlinejpgtools (1).jpg";
import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";
function ContactForm() {
  //formik logics
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      message: "",
    },
    //validate form
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 letter or less.")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid Email Address")
        .required("Email Address is required"),
      message: Yup.string().required("Message is required"),
    }),
    //submit Form
    onSubmit: (values) => {
      console.log(values);
    },
  });
  // console.log(formik.values);
  return (
    <>
      <div className="py-10">
        <h2 className="text-4xl font-semibold text-black pb-5">
          Let's Connect!
        </h2>
        <p className="text-black">
          Feel free to drop us a message via this form.<br></br>We will get back
          you as soon as possible!
        </p>
      </div>
      <div className="lg:px-40 px-5 mb-20 lg:flex">
        <div className="flex-1 lg:pr-20">
          {/* {form start} */}
          <form onSubmit={formik.handleSubmit}>
            {/* {name input} */}
            <div className="bg-white px-4 sm:p-6 mb-3">
              <label
                htmlFor="name"
                className={
                  "block text-md text-left font-medium " +
                  (formik.errors.name ? "text-red-400" : "text-gray-700")
                }
              >
                {formik.errors.name ? formik.errors.name : "Name"}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                className="mt-3 block w-full py-1 px-3 rounded-md border border-gray-200 shadow-md"
              />
            </div>
            {/* {email input} */}
            <div className="bg-white px-4 sm:p-6  mb-3">
              <label
                htmlFor="email"
                className={
                  "block text-md text-left font-medium " +
                  (formik.errors.email ? "text-red-400" : "text-gray-700")
                }
              >
                {formik.errors.email ? formik.errors.email : "Email Address"}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="mt-3 block w-full py-1 px-3 rounded-md border border-gray-200 shadow-md"
              />
            </div>
            {/* {phone input} */}
            <div className="bg-white px-4 sm:p-6  mb-3">
              <label
                htmlFor="phone"
                className="block text-md text-left font-medium text-gray-700"
              >
                Phone Number (Optional)
              </label>
              <input
                type="number"
                name="number"
                id="number"
                value={formik.values.number}
                onChange={formik.handleChange}
                className="mt-3 block w-full py-1 px-3 rounded-md border border-gray-200 shadow-md"
              />
            </div>
            {/* {message input} */}
            <div className="bg-white px-4 sm:p-6  mb-3">
              <label
                htmlFor="message"
                className={
                  "block text-md text-left font-medium " +
                  (formik.errors.message ? "text-red-400" : "text-gray-700")
                }
              >
                {formik.errors.message ? formik.errors.message : "Message"}
              </label>
              <textarea
                type="text"
                name="message"
                id="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                className="mt-3 block w-full py-1 px-3 rounded-md border border-gray-200 shadow-md"
              />
            </div>

            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 py-2 px-6 text-md font-medium text-white shadow-sm hover:bg-black focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1 lg:pt-10">
          <img src={ContactImage} />
        </div>
      </div>
    </>
  );
}

export default ContactForm;
