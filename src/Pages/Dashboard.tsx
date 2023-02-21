import React, { useState } from "react";
import Radar from "../Components/Radar";
import BarChart from "../Components/BarChart";
import NegativeBarChart from "../Components/NegativeBarChart";

const Dashboard: React.FC = () => {
  return (
    <div className="md:flex flex-wrap w-full pb-10 ">
      <div className="md:w-6/12 lg:w-4/12">
        <div className="m-4 rounded-lg bg-white p-5 drop-shadow-lg">
          <div className="flex justify-between">
            <div className="bg-[#E3F8FE] py-2 px-2 rounded-md">
              <svg
                className="w-6 h-6 fill-[#47C6F9]"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="LinkIcon"
              >
                <path d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"></path>
              </svg>
            </div>
            <div className="flex">
              <p className="text-green text-sm">+122% </p>
              <svg
                className="w-6 h-6 fill-green ml-1"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ChevronUpIcon"
              >
                <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"></path>
              </svg>
            </div>
          </div>
          <div className="mt-10 mb-7">
            <p className="text-logo font-medium text-lg">168.1k</p>
            <p className="text-lgr text-sm">Total XXX</p>
          </div>
          <div className="bg-lgr2 py-0.5 px-2 text-lgr text-xs rounded-full max-w-fit">
            Last One Year
          </div>
        </div>
      </div>
      <div className="md:w-6/12 lg:w-4/12">
        <div className="m-4 rounded-lg bg-white p-5 drop-shadow-lg">
          <div className="flex justify-between">
            <div className="bg-[#ECFBE5] py-2 px-2 rounded-md">
              <svg
                className="w-6 h-6 fill-[#6AD025]"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="CurrencyUsdIcon"
              >
                <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"></path>
              </svg>
            </div>
            <div className="flex">
              <p className="text-green text-sm">+38% </p>
              <svg
                className="w-6 h-6 fill-green ml-1"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ChevronUpIcon"
              >
                <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"></path>
              </svg>
            </div>
          </div>
          <div className="mt-10 mb-7">
            <p className="text-logo font-medium text-lg">$22.5k</p>
            <p className="text-lgr text-sm">Total ABC</p>
          </div>
          <div className="bg-lgr2 py-0.5 px-2 text-lgr text-xs rounded-full max-w-fit">
            Last Six Months
          </div>
        </div>
      </div>
      <div className="md:w-6/12 lg:w-4/12">
        <div className="m-4 rounded-lg bg-white px-5 pt-5 drop-shadow-lg">
          <div className="flex justify-start items-center">
            {" "}
            <p className="text-logo font-medium text-lg">$67.2k</p>
            <p className="text-red-500 text-sm ml-2">-20% </p>
          </div>
          <BarChart />
        </div>
      </div>
      <div className="md:w-full lg:w-8/12">
        <div className="m-4 rounded-lg bg-white drop-shadow-lg md:flex">
          <div className="md:w-7/12 border-r-[1px] p-5 border-lgr2">
            <p className="text-logo font-medium text-lg">Total XXX</p>
            <NegativeBarChart />
          </div>
          <div className="md:w-5/12 p-5">
            <p className="text-logo font-medium text-lg">Report</p>
            <p className="text-lgr text-sm mb-10">
              Last month transactions $200k
            </p>
            <div className="flex">
              <div className="w-6/12 flex flex-col items-center justify-center border-r-lgr2 border-r-[1px]">
                <div className="bg-[#ECFBE5] py-2 px-2 rounded-md mb-4 ">
                  <svg
                    className="w-6 h-6 fill-green ml-1"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="TrendingUpIcon"
                  >
                    <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"></path>
                  </svg>
                </div>
                <p className="text-lgr font-light text-lg">This Week</p>
                <p className="text-logo font-bold text-xl">+69.42%</p>
              </div>
              <div className="w-6/12 flex flex-col items-center justify-center">
                <div className="bg-[#ECFBE5] py-2 px-2 rounded-md mb-4 ">
                  <svg
                    className="w-6 h-6 fill-green ml-1"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="TrendingDownIcon"
                  >
                    <path d="M16,18L18.29,15.71L13.41,10.83L9.41,14.83L2,7.41L3.41,6L9.41,12L13.41,8L19.71,14.29L22,12V18H16Z"></path>
                  </svg>
                </div>
                <p className="text-lgr font-light text-lg">Last Week</p>
                <p className="text-logo font-bold text-xl">-5%</p>
              </div>
            </div>
            <div className="flex justify-evenly items-center py-4 mt-4 border-t-[1px] border-t-lgr2">
              <div className="flex flex-col justify-center items-center">
                <p className="text-lgr font-light text-lg">Last Week</p>
                <p className="text-logo font-bold text-xl">-5%</p>
              </div>
              <div className="">
                <button className="bg-green px-4 py-2.5 rounded-lg text-white font-medium">
                  VIEW REPORT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-6/12 lg:w-4/12">
        <div className="m-4 rounded-lg bg-white p-5 drop-shadow-lg">
          <p className="text-logo font-medium text-lg">FX Radar</p>
          <Radar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
