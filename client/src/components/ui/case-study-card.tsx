import type { CaseStudyGeneral } from "../../types";
import CompanyTitle from "./company-title";
import { reformImageURL } from "../../utils";
import { useNavigate } from "react-router-dom";
export default function CaseStudyCard(props: CaseStudyGeneral) {
  const navigate = useNavigate();
  const { title, summary, documentId, company, assets } = props;
  return (
    <div
      onClick={() => navigate("/" + documentId)}
      className="flex items-center flex-col  rounded-2xl overflow-hidden bg-[#fdfdfd] shadow-md"
    >
      {assets && assets[0] && assets[0].url ? (
        <>
          <img
            className="w-full h-[250px] md:h-[300px]  xl:h-[400px] bg-[#ededed]"
            src={reformImageURL(assets[0].url)}
            alt={title.slice(0, 10)}
          ></img>
        </>
      ) : (
        <>
          <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] bg-[#ededed]"></div>
        </>
      )}

      <div className="flex flex-col px-5 pt-6 gap-3">
        <CompanyTitle>{company.industry}</CompanyTitle>

        <h2 className="font-bold text-lg">{title}</h2>

        <p className="text-black/75 mb-5 text-sm md:text-base">{summary}</p>
      </div>
    </div>
  );
}
