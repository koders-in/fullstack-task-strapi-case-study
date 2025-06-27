
import CompanyTitle from "../ui/company-title";
import { Check } from "lucide-react";
import { type Company as CompanyType } from "../../types";
import Markdown from "../ui/markdown";
import { reformImageURL } from "../../utils";
export default function Company(props: CompanyType) {
  const {
    logo,
    id,
    name,
    industry,
    about,
    company_size,
    headquarters,
    use_cases,
    key_features,
    founded,
  } = props;
  return (
    <aside
      key={id}
      className=" xl:w-[300px] h-fit p-6 z-10 space-y-6 border border-[#d8d8d8] rounded-2xl overflow-hidden bg-[#fdfdfd] shadow-md flex flex-col "
    >
      <div className="flex items-center space-x-2">
        <img
          src={reformImageURL(logo.url) || "./logo.webp"}
          alt="Company Logo"
          className="w-8 h-8"
        />
        <h1 className="font-semibold text-lg uppercase">{name}</h1>
      </div>

      <div>
        <h2 className="font-semibold text-sm  mb-2 ">About Brand</h2>
        <Markdown className="text-sm text-gray-700" content={about}></Markdown>
      </div>

      <div className="grid xl:grid-cols-1 sm:grid-cols-2  md:grid-cols-4 grid-cols-1 gap-4">
        <div>
          <span className="font-semibold text-sm  mb-2">Company size</span>
          <p className="font-semibold">{company_size} employees</p>
        </div>

        <div>
          <span className="font-semibold text-sm">Industry</span>
          <div className="mt-1">
            <CompanyTitle> {industry}</CompanyTitle>
          </div>
        </div>

        <div>
          <span className="font-semibold text-sm  mb-2">Headquarters</span>
          <p>{headquarters}</p>
        </div>

        <div>
          <span className="font-semibold text-sm  mb-2">Founded</span>
          <p>{founded}</p>
        </div>
      </div>

      <div className="grid xl:grid-cols-1  sm:grid-cols-2 grid-cols-1 gap-4">
        <div>
          <h3 className="text-sm font-semibold mb-1">Missive use cases</h3>
          <ul className="list-disc ml-1 text-sm text-gray-700 space-y-1">
            {use_cases.map((ele) => {
              return (
                <>
                  <li key={ele.documentId} className="flex gap-1 items-center">
                    <Check className="w-3 h-3" />
                    {ele.label}
                  </li>
                </>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-1">Key features</h3>
          <div className="space-y-2 text-sm">
            {key_features.map((ele) => {
              return (
                <>
                  <span
                    key={ele.documentId}
                    className=" bg-[#f8f8f8] px-2 py-1 rounded-full flex items-center gap-1 font-semibold w-fit "
                  >
                    <Check className="w-3 h-3" /> {ele.label}
                  </span>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
