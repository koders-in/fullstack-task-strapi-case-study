import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import SecurityImg from "../assets/data-security-best-practices.png";
import NexaLogo from "../assets/nexatech.png";
import CaseStudyCard from "../components/CaseStudyCard";
import Price from "../components/Price";
import Footer from "../components/Footer";
import Password from "../components/Password";
import axios from "axios";
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";

function Home() {
  //  mokeData
  const data = {
    tag: "Digital Bank Services",
    heading: "VerdeBank: Protecting Financial Data with Seamless Security",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas inventore omnis temporibus atque, facilis maxime voluptate harum recusandae deserunt aliquid, enim, maiores molestias et eligendi placeat numquam ut! Magni, eum?",
  };

  const [caseStudies, setCaseStudies] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost:1337/api/case-studies?populate[companyInfo][populate]=CompanyLogo&populate=CardImage"
      )
      .then((res) => {
        setCaseStudies(res.data.data);
      })
      .catch((err) => {
        console.error(
          "Error fetching case studies:",
          err.response?.data || err.message
        );
      });
  }, []);
  const otherCaseStudies = caseStudies.filter((cs) => cs.TopCaseStudy !== true);
  const topCaseStudy = caseStudies.find((cs) => cs.TopCaseStudy === true);
  // console.log(otherCaseStudies);
  return (
    <div className="w-screen min-h-screen flex flex-col overflow-x-hidden ">
      {/* Top */}
      <div className=" w-full bg-black flex justify-center pb-35  ">
        <div className="w-[80%] h-full flex flex-col gap-5">
          <NavBar />
          <div className="w-full text-white flex flex-col justify-center items-center gap-4 ">
            <div className=" bg-[#f5f2f228] rounded-xl px-2 text-sm py-0.5 ">
              Case Studies
            </div>
            <h1 className="text-5xl font-bold ">Brands choose Defendia</h1>
            <p className=" break-words w-[600px] text-md text-center">
              defendia provides Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ducimus incidunt itaque quaerat sequi expedita
              deleniti commodi ipsam
            </p>
            <div className=" flex  justify-between items-center gap-5 ">
              <Button
                bgColor="bg-blue-600"
                textColor="text-white"
                label="Get Family Plan"
              />
              <Button
                bgColor="bg-blue-600"
                textColor="text-white"
                label="Get Premium Plan"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Btm */}
      <div className="w-full flex flex-col  justify-center items-center bg-white">
        {/* Case study */}
        <div className="w-[80%] h-full border-none flex flex-col gap-4  ">
          {/* Top case STudy */}
          {topCaseStudy && (
            <Link
              to={`/case-study/${topCaseStudy.Slug}`}
              className="no-underline text-inherit"
            >
              <div className="w-full border -mt-28 z-50 border-gray-200 shadow rounded-md bg-white flex flex-col md:flex-row cursor-pointer hover:shadow-lg transition">
                {/* Left Side Image */}
                <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
                  <img
                    src={`http://localhost:1337${topCaseStudy.CardImage?.url}`}
                    alt="case study"
                    className="w-full max-w-[400px] rounded-md shadow-md"
                  />
                </div>

                {/* Right Side Content */}
                <div className="w-full md:w-1/2 px-6 py-4 flex flex-col gap-4">
                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap">
                    {topCaseStudy.Tags?.split(",").map((tag, idx) => (
                      <div
                        key={idx}
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-xl text-sm font-medium"
                      >
                        {tag.trim()}
                      </div>
                    ))}
                  </div>

                  {/* Heading */}
                  <h2 className="text-2xl font-bold text-gray-800">
                    {topCaseStudy.Title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 text-justify">
                    {topCaseStudy.Excerpt?.[0]?.children?.[0]?.text ||
                      "No description available"}
                  </p>

                  {/* Company */}
                  {topCaseStudy.companyInfo && (
                    <div className="flex items-center gap-3 mt-2">
                      <img
                        src={`http://localhost:1337${topCaseStudy.companyInfo.CompanyLogo?.url}`}
                        alt="company logo"
                        className="w-9 h-9 object-contain"
                      />
                      <span className="text-lg font-semibold text-gray-500">
                        {topCaseStudy.companyInfo.CompanyName}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          )}

          {/* Suggested case study */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
            {otherCaseStudies.slice(0, 4).map((cs, index) => (
              <Link to={`/case-study/${cs.Slug}`} key={index}>
                <CaseStudyCard
                  tag={otherCaseStudies[0]?.Tags?.split(",")[0]?.trim()}
                  heading={
                    cs.Excerpt?.[0]?.children
                      ? cs.Excerpt[0].children
                          .map((child) => child.text)
                          .join("")
                      : "No excerpt available"
                  }
                  description={
                    cs.Conclusion?.[0]?.children
                      ? cs.Conclusion[0].children
                          .map((child) => child.text)
                          .join("")
                      : "No conclusion available"
                  }
                />
              </Link>
            ))}
          </div>

          {/* Horizontal line */}
          <div className="w-ull h-px bg-gray-200 my-8"></div>

          <Price />
          <Testimonials />
          <Password />
        </div>
      </div>
      {/* fOOTER */}
      <div className="w-full ">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
