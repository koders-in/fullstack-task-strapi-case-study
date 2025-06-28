import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Password from "../components/Password";
import { useParams } from "react-router-dom";
import axios from "axios";
import Advertisement from "../components/Advertisement";
import CaseStudyCard from "../components/CaseStudyCard";
import { Link } from "lucide-react";
import Newsletter from "../components/Newsletter";
function CaseStudy() {
  const { slug } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  useEffect(() => {
    axios
      .get(
        `http://localhost:1337/api/case-studies?filters[Slug][$eq]=${slug}&populate[companyInfo][populate]=CompanyLogo&populate=CardImage&[populate]=PublisherImage&populate[ContentSection][populate]=Subsections`
      )
      .then((res) => {
        if (res.data.data.length > 0) {
          setCaseStudy(res.data.data[0]);
        }
      })
      .catch((err) => {
        console.error("Error fetching case study:", err);
      });
  }, [slug]);

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

  const info = caseStudy?.companyInfo;
  const logoUrl = info?.CompanyLogo?.url
    ? `http://localhost:1337${info.CompanyLogo.url}`
    : "";
  const publisherImg = caseStudy?.PublisherImage?.url
    ? `http://localhost:1337${caseStudy.PublisherImage.url}`
    : "";
  console.log(otherCaseStudies);
  return (
    <div className="w-screen min-h-screen flex flex-col overflow-x-hidden ">
      {/* Top */}
      <div className=" w-full bg-black flex justify-center pb-35  ">
        <div className="w-[80%] h-full flex flex-col gap-5">
          <NavBar />
          <div className="w-full text-white flex flex-col justify-center items-center gap-4">
            {/* Publisher Image */}
            {publisherImg && (
              <img
                src={publisherImg}
                alt="publisher"
                className="w-15 h-15 rounded-full object-cover"
              />
            )}

            {/* Publisher Name and Company */}
            {caseStudy?.PublisherName &&
              caseStudy?.companyInfo?.CompanyName && (
                <div className="bg-[#f5f2f228] rounded-xl px-2 text-sm py-0.5">
                  {caseStudy.PublisherName}, @
                  {caseStudy.companyInfo.CompanyName}
                </div>
              )}

            {/* Case Study Title */}
            {caseStudy?.Title && (
              <h1 className="text-3xl font-bold text-center">
                {caseStudy.Title}
              </h1>
            )}
          </div>
        </div>
      </div>
      {/* Btm */}
      <div className="w-full flex flex-col  justify-center items-center bg-white">
        {/* Case study */}
        <div className="w-[80%] h-full border-none flex flex-col gap-4  ">
          <div className="w-full flex gap-10 -mt-23 items-start ">
            {/* left company-info */}
            <div className="w-[280px]  bg-white shadow-md border border-gray-200 rounded-lg p-4 flex flex-col gap-3">
              {/* Company Logo + Name */}
              <div className="flex items-center gap-3 mb-2">
                {logoUrl && (
                  <img
                    src={logoUrl}
                    alt="Company Logo"
                    className="w-10 h-10 object-contain"
                  />
                )}
                <p className="text-lg font-semibold text-gray-700">
                  {info?.CompanyName}
                </p>
              </div>

              {/* About Brand */}
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  About Brand
                </p>
                <p className="text-sm text-gray-700">
                  {info?.AboutBrand?.[0]?.children?.[0]?.text ||
                    "Not available"}
                </p>
              </div>

              {/* Company Size */}
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Company Size
                </p>
                <p className="text-sm text-gray-700">{info?.CompanySize}</p>
              </div>

              {/* Industry */}
              <div>
                <p className="text-sm font-semibold text-gray-600">Industry</p>
                <p className="text-sm text-gray-700">{info?.Industry}</p>
              </div>

              {/* Headquarters */}
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Headquarters
                </p>
                <p className="text-sm text-gray-700">{info?.Headquarters}</p>
              </div>

              {/* Founded */}
              <div>
                <p className="text-sm font-semibold text-gray-600">Founded</p>
                <p className="text-sm text-gray-700">{info?.Founded}</p>
              </div>

              {/* Massive Use Cases */}
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Massive Use Cases
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {info?.MassiveUseCases?.map((item, idx) => (
                    <li key={idx}>{item.children?.[0]?.text}</li>
                  ))}
                </ul>
              </div>

              {/* Key Features */}
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Key Features
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {info?.KeyFeatures?.map((item, idx) => (
                    <li key={idx}>{item.children?.[0]?.text}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full md:w-[60%] flex flex-col gap-6">
              {/* Advertisement Section */}
              <Advertisement />

              {/* Case Study Main Content */}
              <div className="flex flex-col gap-6">
                {/* Excerpt / Intro Paragraph */}
                <p className="text-gray-700 text-justify text-md leading-relaxed">
                  {caseStudy?.Excerpt?.[0]?.children?.[0]?.text ||
                    "No intro available."}
                </p>

                {/* Content Sections */}
                {caseStudy?.ContentSection?.map((section, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    {/* Topic Heading */}
                    <h3 className="text-xl font-bold text-gray-800">
                      {section.Heading}
                    </h3>

                    {/* Content Paragraph */}
                    <p className="text-gray-700 text-justify">
                      {section?.Content?.[0]?.children?.[0]?.text}
                    </p>

                    {/* SubTopics (optional) */}
                    {section?.Subsections?.map((sub, idx) => (
                      <div key={idx} className="ml-4">
                        <h4 className="text-md font-semibold text-gray-700">
                          {sub.Subheading}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {sub?.Content?.[0]?.children?.[0]?.text}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}

                {/* Conclusion Box */}
                {caseStudy?.Conclusion?.[0]?.children?.[0]?.text && (
                  <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Conclusion
                    </h3>
                    <p className="text-gray-700">
                      {caseStudy.Conclusion[0].children[0].text}
                    </p>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {caseStudy?.Tags?.split(",").map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Suggested case study */}

          {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
            {otherCaseStudies.slice(0, 2).map((cs, index) => (
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
          </div> */}
          <Newsletter />
          <Password />
        </div>
      </div>
      {/* Footer */}
      <div className="w-full ">
        <Footer />
      </div>
    </div>
  );
}

export default CaseStudy;
