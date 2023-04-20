import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import FirstFormPage from "../Components/FirstFormPage";
import SecondFormPage from "../Components/SecondFormPage";
import ThirdFormPage from "../Components/ThirdFormPage";
import Clickable from "../Components/ReusableComponents/Clickable";

const Form: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [firstCheck, setFirstCheck] = useState(false);
  const [secondCheck, setSecondCheck] = useState(false);
  const [thirdCheck, setThirdCheck] = useState(false);

  const handleNext = () => {
    if (currentStep <= 3) {
      if (currentStep === 1 && firstCheck) {
        return setCurrentStep(currentStep + 1);
      } else if (currentStep === 2 && secondCheck) {
        return setCurrentStep(currentStep + 1);
      } else if (currentStep === 3 && thirdCheck) {
        return setCurrentStep(currentStep + 1);
      } else {
        alert("Some input fields are empty. Fill them before moving on");
      }
    } else {
      setCurrentStep(1);
      setFirstCheck(false);
      setSecondCheck(false);
      setThirdCheck(false);
    }
  };

  const handlePrev = () => {
    if (currentStep === 1) {
      return;
    } else if (currentStep > 1) {
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

  const styles = {
    container: {
      marginTop: {
        xs: '50px', md: '0px'
      },
      padding: { xs: "20px" },
      height: "70vh",
      display: "flex",
      alignItems: "center",
    },
    stepperCircle: {
      width: "24px",
      height: "24px",
      borderRadius: "100px",
      borderWidth: "4px",
      borderColor: "#d5edca",
    },
    stepperLength: {
      width: {
        xs: "50px",
        sm:'200px',
        xl: "400px",
      },
      marginLeft: "4px",
      marginRight: "4px",
      height: "4px",
    },
  };

  return (
    <Box component="div" sx={styles.container}>
      <Box component="div" sx={{ width: "100%" }}>
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="div"
            sx={{
              ...styles.stepperCircle,
              display: currentStep === 1 ? "block" : "none",
            }}
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

          <Box
            component="div"
            sx={{
              ...styles.stepperLength,
              backgroundColor: currentStep >= 2 ? "primary.main" : "#d5edca",
            }}
          />
          <Box
            component="div"
            sx={{
              ...styles.stepperCircle,
              display: currentStep < 3 ? "block" : "none",
            }}
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
          <Box
            component="div"
            sx={{
              ...styles.stepperLength,
              backgroundColor: currentStep >= 3 ? "primary.main" : "#d5edca",
            }}
          />

          <Box
            component="div"
            sx={{
              ...styles.stepperCircle,
              display: currentStep <= 3 ? "block" : "none",
            }}
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
        </Box>
        <form
          onSubmit={(e: any) => {
            handleSubmit(e);
          }}
          className="p-4 md:p-8 drop-shadow-xl rounded-xl md:rounded-3xl bg-white mt-5"
        >
          <Box
            component="div"
            sx={{ display: currentStep === 1 ? "block" : "none" }}
          >
            {
              <FirstFormPage
                mystate={(a: boolean) => {
                  setFirstCheck(a);
                }}
              />
            }
          </Box>
          <Box
            component="div"
            sx={{ display: currentStep === 2 ? "block" : "none" }}
          >
            {
              <SecondFormPage
                mystate={(a: boolean) => {
                  setSecondCheck(a);
                }}
              />
            }
          </Box>
          <Box
            component="div"
            sx={{ display: currentStep === 3 ? "block" : "none" }}
          >
            {
              <ThirdFormPage
                mystate={(a: boolean) => {
                  setThirdCheck(a);
                }}
              />
            }
          </Box>
          <Box
            component="div"
            sx={{ display: currentStep > 3 ? "block" : "none" }}
          >
            <Typography
              variant="subtitle1"
              component="p"
              sx={{
                fontSize: {
                  sm: "16px",
                  md: "18px",
                },
                color: "#626477",
              }}
            >
              All steps are completed!
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", justifyContent: "space-between", marginTop: '20px' }}
          >
            <Clickable
              variant="outlined"
              styling={{
                backgroundColor: "white",
                paddingLeft: "24px",
                paddingRight: "24px",
                paddingTop: "8px",
                paddingBottom: "8px",
                borderRadius: "8px",
                borderWidth: "2px",
                borderColor: currentStep >= 1 ? "#B6B6C0" : "#626477",
                color: currentStep >= 1 ? "#B6B6C0" : "#626477",
                "&:hover": {
                  color: "primary.main",
                },
              }}
              onClick={handlePrev}
              disableElevation={false}
              size="medium"
            >
              BACK
            </Clickable>
            <Clickable
              variant="contained"
              styling={{
                color: "white",
                paddingLeft: "24px",
                paddingRight: "24px",
                paddingTop: "8px",
                paddingBottom: "8px",
                borderRadius: "8px",
              }}
              onClick={handleNext}
              disableElevation={false}
              size="medium"
            >
              {currentStep < 3
                ? "NEXT"
                : currentStep === 3
                ? "SUBMIT"
                : "RESET"}
            </Clickable>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Form;
