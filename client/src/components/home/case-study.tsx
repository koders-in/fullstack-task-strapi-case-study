import CaseStudyCardRow from "../ui/case-study-card-row";
import CaseStudyCard from "../ui/case-study-card";
import { useStore } from "../../store/case-studies.store";
export default function CaseStudy() {
  const { data: _data, isFetching, isError, isLoading } = useStore();
  if (isError || isLoading || isFetching || !_data) return <></>;
  const { data } = _data;
  return (
    <div className=" w-full p-2 sm:p-5 xl:p-0 xl:w-[1200px]  z-10 flex flex-col gap-4">
      <div className="hidden lg:block">
        {data && data.length > 0 ? (
          <CaseStudyCardRow {...data[0]}></CaseStudyCardRow>
        ) : (
          <></>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="block lg:hidden">
          {data && data.length > 0 ? (
            <>
              <CaseStudyCard {...data[0]}></CaseStudyCard>
            </>
          ) : (
            <></>
          )}
        </div>
        {}
        {data.slice(1).map((ele) => (
          <CaseStudyCard key={ele.id} {...ele} />
        ))}
      </div>
    </div>
  );
}
