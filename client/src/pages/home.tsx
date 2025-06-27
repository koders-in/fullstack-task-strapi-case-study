import Header from "../components/common/header";
import Hero from "../components/home/hero";
import Summary from "../components/common/summary";
import CaseStudy from "../components/home/case-study";
import Footer from "../components/common/footer";
import Pricing from "../components/home/pricing";
import Testimonial from "../components/home/testimonial";
import { useStore } from "../store/case-studies.store";
import Loading from "./loading";
export default function Home() {
  const { isLoading, isFetching } = useStore();
  if (isFetching || isLoading) return <Loading />;
  return (
    <>
      <div className=" flex flex-col relative gap-8 sm:gap-12 lg:gap-16 items-center ">
        <div className="h-[550px] bg-[#1e1e1e] absolute top-0 left-0 w-full z-0 "></div>
        <Header></Header>
        <Hero></Hero>
        <CaseStudy></CaseStudy>
        <Pricing></Pricing>
        <Testimonial></Testimonial>
        <Summary></Summary>
        <Footer></Footer>
      </div>
    </>
  );
}
