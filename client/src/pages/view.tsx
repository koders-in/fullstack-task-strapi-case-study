import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Hero from "../components/view/hero";
import Company from "../components/view/company";
import Study from "../components/view/study";
import Newsletter from "../components/view/newsletter";
import Summary from "../components/common/summary";
import CaseStudy from "../components/view/case-study";
import { useStore } from "../store/case-study.store";
import Loading from "./loading";
export default function View() {
  const { data: _data, isFetching, isError, isLoading } = useStore();
  if (isError || isLoading || isFetching || !_data) return <Loading />;
  const { data } = _data;
  return (
    <div className=" flex flex-col relative gap-8 sm:gap-12 lg:gap-16 items-center">
      <div className="h-[550px] bg-[#1e1e1e] absolute top-0 left-0 w-full z-0 "></div>
      <Header></Header>
      <Hero {...data}></Hero>
      <div className=" w-full p-2 sm:p-5 xl:p-0 xl:w-[1200px]  z-10 flex gap-4 flex-col-reverse xl:flex-row">
        <Company {...data.company}></Company>
        <Study {...data}></Study>
      </div>
      <div className="w-full p-2 sm:p-5 xl:p-0 xl:w-[1200px]">
        <Newsletter></Newsletter>
      </div>
      <CaseStudy></CaseStudy>
      <Summary></Summary>
      <Footer></Footer>
      {/*
       */}
    </div>
  );
}
