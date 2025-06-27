import type { CaseStudy } from "../../types";

import Markdown from "../ui/markdown";

export default function Study(props: CaseStudy) {
  const { description, tags, summary, conclusion } = props;
  return (
    <div className="z-10 flex-1 flex flex-col items-center gap-2">
      <div className=" px-5 py-6 flex flex-col gap-4 md:flex-row items-center justify-between w-full border border-[#d8d8d8] rounded-2xl overflow-hidden bg-[#fdfdfd] shadow-md">
        <div className="flex flex-col md:items-start items-center">
          <h2 className="font-semibold">Boost your Internet Security</h2>
          <p className="text-sm text-gray-600 text-center dm:text-left">
            Store and manage your digital passwords with just a click of a
            button
          </p>
        </div>
        <button className="bg-[#2f70fd] text-white text-sm font-medium py-3 px-6 w-[200px] rounded-lg border border-white/20">
          For Family Plan
        </button>
      </div>
      <p className="p-3  opacity-90">{summary}</p>
      <Markdown className="px-3 rounded-2xl" content={description}></Markdown>

      <div className="bg-white p-3 my-2">
        <h2 className="font-semibold mb-2">
          <span className="bg-blue-500  ">|</span> Conclusion
        </h2>
        <p className="text-sm">{conclusion}</p>
      </div>
      <div className="flex justify-between items-center w-full">
        <h2 className="font-semibold">Tags</h2>
        <div className="flex gap-2">
          {tags.map((ele) => {
            return (
              <>
                <div
                  key={ele.documentId}
                  className="bg-white px-2 py-1  text-sm rounded-full border border-[#d8d8d8]"
                >
                  {ele.label}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
