import { useState } from "react";
interface Check {
  mystate: any;
}
const FirstFormPage = ({ mystate }: Check) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  if (
    email.trim() !== "" &&
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) &&
    password.trim().length > 0 &&
    confirmPassword.trim() === password &&
    username.trim() !== ""
  ) {
    mystate(true);
  }

  return (
    <div className="">
      <h6 className="text-logo text-sm font-semibold">Account Details</h6>
      <p className="text-lgr text-xs font-light mb-6">
        Enter your Account Details
      </p>
      <div className="md:flex">
        <div className="relative z-0 mb-6 group md:mr-3 w-full md:w-6/12">
          <input
            type="text"
            name="floating_email"
            id="floating_email"
            className="block py-3 px-3 rounded-md px-0 w-full text-sm text-logo bg-transparent border-[1px] border-lgr appearance-none dark:text-logo dark:border-lgr dark:focus:border-green focus:outline-none focus:ring-0 focus:border-green peer"
            placeholder=" "
            required
            onChange={(e: any) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium bg-white px-2 -z-10 absolute text-sm text-lgr dark:text-logo duration-300 transform -translate-y-[22px] scale-75 top-3 left-2 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-green peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] peer-focus:left-2"
          >
            Username
          </label>
        </div>
        <div className="relative z-0 mb-6 group md:ml-3 w-full md:w-6/12">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-3 px-3 rounded-md px-0 w-full text-sm text-logo bg-transparent border-[1px] border-lgr appearance-none dark:text-logo dark:border-lgr dark:focus:border-green focus:outline-none focus:ring-0 focus:border-green peer"
            placeholder=" "
            required
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium bg-white px-2 -z-10 absolute text-sm text-lgr dark:text-logo duration-300 transform -translate-y-[22px] scale-75 top-3 left-2 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-green peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] peer-focus:left-2"
          >
            Email
          </label>
        </div>
      </div>
      <div className="md:flex">
        <div className="relative z-0 mb-6 group md:mr-3 w-full md:w-6/12">
          <input
            type={showPassword ? "text" : "password"}
            name="floating_email"
            id="floating_email"
            className="block py-3 px-3 rounded-md px-0 w-full text-sm text-logo bg-transparent border-[1px] border-lgr appearance-none dark:text-logo dark:border-lgr dark:focus:border-green focus:outline-none focus:ring-0 focus:border-green peer"
            placeholder=" "
            required
            onChange={(e: any) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <svg
            className={`w-5 h-5 fill-lgr absolute right-3 top-[14px] ${
              showPassword ? "" : "hidden"
            }`}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="EyeOutlineIcon"
          >
            <path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path>
          </svg>
          <svg
            className={`w-5 h-5 fill-lgr absolute right-3 top-[14px] ${
              !showPassword ? "" : "hidden"
            }`}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="EyeOffOutlineIcon"
          >
            <path d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"></path>
          </svg>
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium bg-white px-2 -z-10 absolute text-sm text-lgr dark:text-logo duration-300 transform -translate-y-[22px] scale-75 top-3 left-2 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-green peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] peer-focus:left-2"
          >
            Password
          </label>
        </div>
        <div className="relative z-0 mb-6 group md:ml-3 w-full md:w-6/12">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="floating_email"
            id="floating_email"
            className="block py-3 px-3 rounded-md px-0 w-full text-sm text-logo bg-transparent border-[1px] border-lgr appearance-none dark:text-logo dark:border-lgr dark:focus:border-green focus:outline-none focus:ring-0 focus:border-green peer"
            placeholder=" "
            required
            onChange={(e: any) => {
              setConfirmPassword(e.target.value);
            }}
            value={confirmPassword}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium bg-white px-2 -z-10 absolute text-sm text-lgr dark:text-logo duration-300 transform -translate-y-[22px] scale-75 top-3 left-2 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-green peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] peer-focus:left-2"
          >
            Confirm Password
          </label>
          <svg
            className={`w-5 h-5 fill-lgr absolute right-3 top-[14px] ${
              showConfirmPassword ? "" : "hidden"
            }`}
            onClick={() => {
              setShowConfirmPassword(!showConfirmPassword);
            }}
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="EyeOutlineIcon"
          >
            <path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path>
          </svg>
          <svg
            className={`w-5 h-5 fill-lgr absolute right-3 top-[14px] ${
              !showConfirmPassword ? "" : "hidden"
            }`}
            onClick={() => {
              setShowConfirmPassword(!showConfirmPassword);
            }}
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="EyeOffOutlineIcon"
          >
            <path d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FirstFormPage;
