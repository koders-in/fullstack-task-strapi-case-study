import CaseStudyCard from "../ui/case-study-card";
import { useStore } from "../../store/case-studies.store";
export default function CaseStudy() {
  const { isLoading, isFetching, isError, data: _data } = useStore();
  if (isLoading || isFetching || isError || !_data) return <>Loading</>;

  const { data } = _data;
  return (
    <div className=" w-full p-2 sm:p-5 xl:p-0 xl:w-[1200px] z-10 flex flex-col gap-4">
      <div className="w-full flex justify-between items-center">
        <h2 className="font-semibold text-2xl">Read about more Case Studies</h2>
        <div className="bg-white px-2 py-1 hidden md:block  text-sm rounded-full border border-[#d8d8d8]">
          View All Case Studies
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data?.slice(0, Math.min(data.length, 2)).map((ele) => (
          <CaseStudyCard key={ele.id} {...ele} />
        ))}
      </div>
      <div className="bg-white px-2 py-1 block md:hidden w-fit mx-auto  text-sm rounded-full border border-[#d8d8d8]">
        View All Case Studies
      </div>
    </div>
  );
}
