import React from "react";

interface Check {
  mystate: any;
}
const ThirdFormPage = ({ mystate }: Check) => {
  const [twitter, setTwitter] = React.useState("");
  const [facebook, setFacebook] = React.useState("");
  const [google, setGoogle] = React.useState("");
  const [linkedin, setLinkedin] = React.useState("");

  if (
    twitter.trim() !== "" &&
    facebook.trim() !== "" &&
    google.trim() !== "" &&
    linkedin.trim() !== ""
  ) {
    mystate(true);
  }

  return (
    <div className="">
      <h6 className="text-logo text-sm font-semibold">Social Links</h6>
      <p className="text-lgr text-xs font-light mb-6">Add Social Links</p>
      <div className="md:flex">
        <div className="relative z-0 mb-6 group md:mr-3 md:w-6/12">
          <input
            type="url"
            name="floating_email"
            id="floating_email"
            className="block py-3 px-3 rounded-md px-0 w-full text-sm text-logo bg-transparent border-[1px] border-lgr appearance-none dark:text-logo dark:border-lgr dark:focus:border-green focus:outline-none focus:ring-0 focus:border-green peer"
            placeholder=" "
            required
            onChange={(e: any) => {
              setTwitter(e.target.value);
            }}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium bg-white px-2 -z-10 absolute text-sm text-lgr dark:text-logo duration-300 transform -translate-y-[22px] scale-75 top-3 left-2 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-green peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] peer-focus:left-2"
          >
            Twitter
          </label>
        </div>
        <div className="relative z-0 mb-6 group md:ml-3 md:w-6/12">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-3 px-3 rounded-md px-0 w-full text-sm text-logo bg-transparent border-[1px] border-lgr appearance-none dark:text-logo dark:border-lgr dark:focus:border-green focus:outline-none focus:ring-0 focus:border-green peer"
            placeholder=" "
            required
            onChange={(e: any) => {
              setFacebook(e.target.value);
            }}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium bg-white px-2 -z-10 absolute text-sm text-lgr dark:text-logo duration-300 transform -translate-y-[22px] scale-75 top-3 left-2 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-green peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] peer-focus:left-2"
          >
            Facebook
          </label>
        </div>
      </div>
      <div className="md:flex">
        <div className="relative z-0 mb-6 group md:mr-3 md:w-6/12">
          <input
            type="url"
            name="floating_email"
            id="floating_email"
            className="block py-3 px-3 rounded-md px-0 w-full text-sm text-logo bg-transparent border-[1px] border-lgr appearance-none dark:text-logo dark:border-lgr dark:focus:border-green focus:outline-none focus:ring-0 focus:border-green peer"
            placeholder=" "
            required
            onChange={(e: any) => {
              setGoogle(e.target.value);
            }}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium bg-white px-2 -z-10 absolute text-sm text-lgr dark:text-logo duration-300 transform -translate-y-[22px] scale-75 top-3 left-2 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-green peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] peer-focus:left-2"
          >
            Google+
          </label>
        </div>
        <div className="relative z-0 mb-6 group md:ml-3 md:w-6/12">
          <input
            type="url"
            name="floating_email"
            id="floating_email"
            className="block py-3 px-3 rounded-md px-0 w-full text-sm text-logo bg-transparent border-[1px] border-lgr appearance-none dark:text-logo dark:border-lgr dark:focus:border-green focus:outline-none focus:ring-0 focus:border-green peer"
            placeholder=" "
            required
            onChange={(e: any) => {
              setLinkedin(e.target.value);
            }}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium bg-white px-2 -z-10 absolute text-sm text-lgr dark:text-logo duration-300 transform -translate-y-[22px] scale-75 top-3 left-2 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-green peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] peer-focus:left-2"
          >
            LinkedIn
          </label>
        </div>
      </div>
    </div>
  );
};

export default ThirdFormPage;
