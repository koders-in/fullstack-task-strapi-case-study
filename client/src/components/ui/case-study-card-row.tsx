import CompanyTitle from "./company-title";
import { type CaseStudyGeneral } from "../../types";
import { reformImageURL } from "../../utils";
import { useNavigate } from "react-router-dom";
export default function CaseStudyCardRow(props: CaseStudyGeneral) {
  const navigate = useNavigate();
  const { title, summary, company, documentId, assets } = props;
  return (
    <div
      onClick={() => navigate("/" + documentId)}
      className="flex items-center  rounded-2xl overflow-hidden bg-[#fdfdfd] shadow-md"
    >
      {assets && assets[0] && assets[0].url ? (
        <>
          <img
            className="w-1/2 h-[400px] bg-[#ededed]"
            src={reformImageURL(assets[0].url)}
            alt={title.slice(0, 10)}
          ></img>
        </>
      ) : (
        <>
          <div className="w-1/2 h-[400px] bg-[#ededed]"></div>
        </>
      )}

      <div className="w-1/2 h-[400px] flex flex-col px-5 pt-6 gap-5">
        <CompanyTitle>Software Development Firm</CompanyTitle>

        <h2 className="font-bold text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
        </h2>

        <p className="text-black/75">{summary}</p>

        <div className="flex gap-2 items-center mt-10 text-black/75">
          <img
            src={reformImageURL(company.logo.url) || ""}
            alt=""
            className="w-12 h-12"
          />
          <p className="font-semibold text-lg !m-0 !p-0  uppercase">
            Company Title
          </p>
        </div>
      </div>
    </div>
  );
}
