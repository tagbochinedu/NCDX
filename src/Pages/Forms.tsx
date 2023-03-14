import React, { useState } from "react";
import FirstFormPage from "../Components/FirstFormPage";
import SecondFormPage from "../Components/SecondFormPage";
import ThirdFormPage from "../Components/ThirdFormPage";

const Form: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [firstCheck, setFirstCheck] = useState(false);
  const [secondCheck, setSecondCheck] = useState(false);
  const [thirdCheck, setThirdCheck] = useState(false);

  const handleNext = () => {
    if (currentStep === 1 && firstCheck) {
      return setCurrentStep(currentStep + 1);
    } else if (currentStep === 2 && secondCheck) {
      return setCurrentStep(currentStep + 1);
    } else if (currentStep === 3 && thirdCheck) {
      return setCurrentStep(currentStep + 1);
    } else {
      alert("Some Input Fields are empty. Fill them before moving on");
    }
    console.log(currentStep, firstCheck);
  };

  const handlePrev = () => {
    if (currentStep === 1) {
      return;
    } else if (currentStep >1) {
      console.log(currentStep, firstCheck);
      setFirstCheck(false);
      return setCurrentStep(currentStep - 1);
    } else if (currentStep === 3 && secondCheck) {
      setSecondCheck(false);
      return setCurrentStep(currentStep - 1);
    } else if (currentStep > 3 && thirdCheck) {
      setThirdCheck(false);
      return setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // handle form submission here
  };

  return (
    <div className=" px-5 py-5 md:py-10 lg:py-20 min-h-[78vh]">
      <div className="flex items-center justify-center">
        <div
          className={`w-6 h-6 rounded-full border-4 ${
            currentStep === 1 ? "border-[#d5edca]" : "hidden"
          }`}
        />
        <svg
          className={`w-7 h-7 fill-green ${
            currentStep > 1 ? "block" : "hidden"
          }`}
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="CheckCircleIcon"
        >
          <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"></path>
        </svg>

        <div
          className={`w-24 lg:w-[400px] mx-1 h-1  ${
            currentStep >= 2 ? "bg-green" : "bg-[#d5edca]"
          }`}
        />
        <div
          className={`w-6 h-6 rounded-full border-4 ${
            currentStep < 3 ? "border-[#d5edca]" : "hidden"
          }`}
        />
        <svg
          className={`w-7 h-7 fill-green ${
            currentStep >= 3 ? "block" : "hidden"
          }`}
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="CheckCircleIcon"
        >
          <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"></path>
        </svg>

        <div
          className={`w-24 lg:w-[400px] mx-1 h-1  ${
            currentStep >= 3 ? "bg-green" : "bg-[#d5edca]"
          }`}
        />
        <div
          className={`w-6 h-6 rounded-full border-4 ${
            currentStep <= 3 ? "border-[#d5edca]" : "hidden"
          }`}
        />
        <svg
          className={`w-7 h-7 fill-green ${
            currentStep > 3 ? "block" : "hidden"
          }`}
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="CheckCircleIcon"
        >
          <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"></path>
        </svg>
      </div>
      <form
        onSubmit={(e: any) => {
          handleSubmit(e);
        }}
        className="p-4 md:p-8 drop-shadow-xl rounded-xl md:rounded-3xl mx-16 bg-white mt-5"
      >
        <div className={currentStep === 1 ? "block" : "hidden"}>
          {
            <FirstFormPage
              mystate={(a: boolean) => {
                setFirstCheck(a);
              }}
            />
          }
        </div>
        <div className={currentStep === 2 ? "block" : "hidden"}>
          {
            <SecondFormPage
              mystate={(a: boolean) => {
                setSecondCheck(a);
              }}
            />
          }
        </div>
        <div className={currentStep === 3 ? "block" : "hidden"}>
          {
            <ThirdFormPage
              mystate={(a: boolean) => {
                setThirdCheck(a);
              }}
            />
          }
        </div>
        <div className={currentStep > 3 ? "block mb-6" : "hidden"}>
          <p className="text-md md:text-lg text-logo">
            All steps are completed!
          </p>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handlePrev}
            className={`bg-white px-6 py-2 rounded-lg ${
              currentStep >= 1
                ? " border border-lgr text-lgr"
                : "border border-logo text-logo"
            } ${currentStep > 3 ? "hidden" : "block"}`}
          >
            BACK
          </button>
          <button
            type="button"
            onClick={handleNext}
            className={`bg-green text-white px-6 py-2 rounded-lg ${
              currentStep < 3 ? "" : "hidden"
            }`}
          >
            NEXT
          </button>
          <button
            type="button"
            onClick={handleNext}
            className={`bg-green text-white px-6 py-2 rounded-lg ${
              currentStep === 3 ? "" : "hidden"
            }`}
          >
            SUBMIT
          </button>
          <button
            type="button"
            onClick={() => {
              setCurrentStep(1);
              setFirstCheck(false);
              setSecondCheck(false);
              setThirdCheck(false);
            }}
            className={`bg-green text-white px-6 py-2 rounded-lg ml-auto ${
              currentStep > 3 ? "" : "hidden"
            }`}
          >
            RESET
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
