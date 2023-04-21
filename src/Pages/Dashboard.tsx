import React, { useState } from "react";
import Radar from "../Components/Radar";
import BarChart from "../Components/BarChart";
import NegativeBarChart from "../Components/NegativeBarChart";
import BoxWrapper from "../Components/ReusableComponents/Container";
import { Typography, Box } from "@mui/material";
import Clickable from "../Components/ReusableComponents/Clickable";

const Dashboard: React.FC = () => {
  const Styles = {
    container: {
      display: {
        md: "flex",
      },
      flexWrap: "wrap",
      width: "100%",
      paddingBottom: "40px",
      justifyContent: 'space-between'
    },
    firstRow: { width: { md: "50%", lg: "33%" } },
    innerFirstRow: { display: "flex", justifyContent: "space-between" },
    iconContainer: { padding: "8px", borderRadius: "6px" },
    normalStyles: {
      m: "16px",
      p: "20px",
    },
    barChart: {
      m: "16px",
      paddingTop: "20px",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    negativeBarChart: {
      display: "block",
      "@media(min-width: 640px)": {
        display: "flex",
      },
      m: "16px",
    },
  };

  return (
    <Box component="div" sx={Styles.container}>
      <Box component="div" sx={Styles.firstRow}>
        <BoxWrapper styling={Styles.normalStyles}>
          <Box component="div" sx={Styles.innerFirstRow}>
            <Box
              component="div"
              sx={{ ...Styles.iconContainer, backgroundColor: "#E3F8FE" }}
            >
              <svg
                className="w-6 h-6 fill-[#47C6F9]"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="LinkIcon"
              >
                <path d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"></path>
              </svg>
            </Box>
            <Box component="div" sx={{ display: "flex" }}>
              <Typography
                variant="subtitle1"
                component="p"
                sx={{ color: "#72E028", fontSize: "14px" }}
              >
                +122%{" "}
              </Typography>
              <svg
                className="w-6 h-6 fill-green ml-1"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ChevronUpIcon"
              >
                <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"></path>
              </svg>
            </Box>
          </Box>
          <Box component="div" sx={{ marginTop: "40px", marginBottom: "28px" }}>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ color: "#626477", fontWeight: "700", fontSize: "18px" }}
            >
              168.1k
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ color: "#B6B6C0", fontSize: "14px" }}
            >
              Total XXX
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#EDEFF1",
              paddingTop: "2px",
              paddingBottom: "2px",
              paddingLeft: "8px",
              paddingRight: "8px",
              color: "#B6B6C0",
              fontSize: "12px",
              borderRadius: "50px",
              maxWidth: "fit-content",
            }}
          >
            Last One Year
          </Box>
        </BoxWrapper>
      </Box>
      <Box component="div" sx={Styles.firstRow}>
        <BoxWrapper styling={Styles.normalStyles}>
          <Box component="div" sx={Styles.innerFirstRow}>
            <Box
              component="div"
              sx={{ ...Styles.iconContainer, backgroundColor: "#ECFBE5" }}
            >
              <svg
                className="w-6 h-6 fill-[#6AD025]"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="CurrencyUsdIcon"
              >
                <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"></path>
              </svg>
            </Box>
            <Box component="div" sx={{ display: "flex" }}>
              <Typography
                variant="subtitle1"
                component="p"
                sx={{ color: "#72E028", fontSize: "14px" }}
              >
                +38%{" "}
              </Typography>
              <svg
                className="w-6 h-6 fill-green ml-1"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ChevronUpIcon"
              >
                <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"></path>
              </svg>
            </Box>
          </Box>
          <Box component="div" sx={{ marginTop: "40px", marginBottom: "28px" }}>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ color: "#626477", fontWeight: "700", fontSize: "18px" }}
            >
              $22.5k
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ color: "#B6B6C0", fontSize: "14px" }}
            >
              Total ABC
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#EDEFF1",
              paddingTop: "2px",
              paddingBottom: "2px",
              paddingLeft: "8px",
              paddingRight: "8px",
              color: "#B6B6C0",
              fontSize: "12px",
              borderRadius: "50px",
              maxWidth: "fit-content",
            }}
          >
            Last Six Months
          </Box>
        </BoxWrapper>
      </Box>
      <Box component="div" sx={Styles.firstRow}>
        <BoxWrapper styling={Styles.barChart}>
          <Box component="div" sx={Styles.innerFirstRow}>
            {" "}
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ color: "#626477", fontWeight: "700", fontSize: "18px" }}
            >
              $67.2k
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ color: "rgb(239 68 68)", fontSize: "14px" }}
            >
              -20%{" "}
            </Typography>
          </Box>
          <BarChart />
        </BoxWrapper>
      </Box>
      <Box component="div" sx={{ width: { md: "100%", lg: "66.5%" } }}>
        <BoxWrapper styling={Styles.negativeBarChart}>
          <Box
            component="div"
            sx={{
              width: { sm: "60%", md: "58%" },
              borderRightWidth: "1px",
              padding: "20px",
              borderColor: "#EDEFF1",
            }}
          >
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ color: "#626477", fontWeight: "700", fontSize: "18px" }}
            >
              Total XXX
            </Typography>

            <NegativeBarChart />
          </Box>
          <Box
            component="div"
            sx={{ width: { sm: "40%", md: "42%" }, padding: "20px" }}
          >
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ color: "#626477", fontWeight: "700", fontSize: "18px" }}
            >
              Report
            </Typography>

            <Typography
              variant="subtitle1"
              component="p"
              sx={{ color: "#B6B6C0", fontSize: "14px", marginBottom: "14px" }}
            >
              Last month transactions $200k
            </Typography>
            <Box component="div" sx={{ display: "flex" }}>
              <Box
                component="div"
                sx={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "#EDEFF1",
                  borderRightWidth: "1px",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    ...Styles.iconContainer,
                    backgroundColor: "#ECFBE5",
                    marginBottom: "16px",
                  }}
                >
                  <svg
                    className="w-6 h-6 fill-green ml-1"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="TrendingUpIcon"
                  >
                    <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"></path>
                  </svg>
                </Box>
                <Typography
                  variant="subtitle1"
                  component="p"
                  sx={{ color: "#B6B6C0", fontWeight: "300", fontSize: "18px" }}
                  className="text-lgr font-light text-lg"
                >
                  This Week
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  sx={{ color: "#626477", fontWeight: "700", fontSize: "20px" }}
                  className="text-logo font-bold text-xl"
                >
                  +69.42%
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    ...Styles.iconContainer,
                    backgroundColor: "#ECFBE5",
                    marginBottom: "16px",
                  }}
                >
                  <svg
                    className="w-6 h-6 fill-green ml-1"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="TrendingDownIcon"
                  >
                    <path d="M16,18L18.29,15.71L13.41,10.83L9.41,14.83L2,7.41L3.41,6L9.41,12L13.41,8L19.71,14.29L22,12V18H16Z"></path>
                  </svg>
                </Box>
                <Typography
                  variant="subtitle1"
                  component="p"
                  sx={{ color: "#B6B6C0", fontWeight: "300", fontSize: "18px" }}
                  className="text-lgr font-light text-lg"
                >
                  Last Week
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  sx={{ color: "#626477", fontWeight: "700", fontSize: "20px" }}
                  className="text-logo font-bold text-xl"
                >
                  -5%
                </Typography>
              </Box>
            </Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                paddingTop: "16px",
                paddingBottom: "16px",
                marginTop: "16px",
                borderTopWidth: "1px",
                borderColor: "#EDEFF1",
              }}
            >
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="subtitle1"
                  component="p"
                  sx={{ color: "#B6B6C0", fontWeight: "300", fontSize: "18px" }}
                >
                  Last Week
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  sx={{ color: "#626477", fontWeight: "700", fontSize: "20px" }}
                >
                  -5%
                </Typography>
              </Box>
              <Box component="div">
                <Clickable
                  variant="contained"
                  styling={{
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    borderRadius: "8px",
                    color: "white",
                    fontWeight: "500",
                  }}
                  disableElevation={false}
                  size="medium"
                >
                  VIEW REPORT
                </Clickable>
              </Box>
            </Box>
          </Box>
        </BoxWrapper>
      </Box>
      <Box component="div" sx={{ width: { md: "50%", lg: "33%" } }}>
        <BoxWrapper styling={Styles.normalStyles}>
          <Typography
            variant="subtitle1"
            component="p"
            sx={{ color: "#626477", fontWeight: "700", fontSize: "18px" }}
          >
            FX Radar
          </Typography>

          <Radar />
        </BoxWrapper>
      </Box>
    </Box>
  );
};

export default Dashboard;
