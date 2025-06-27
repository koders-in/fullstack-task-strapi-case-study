
import type { CaseStudy } from "../../types";
import { reformImageURL } from "../../utils";
export default function Hero(props: CaseStudy) {
  const { title, case_study_user, company } = props;
  const { profile_pic, name, position } = case_study_user;
  const { name: _name } = company;
  return (
    <div className="flex flex-col items-center justify-center z-10  text-white px-4 text-center space-y-6">
      <img
        src={reformImageURL(profile_pic.url) ?reformImageURL(profile_pic.url) : "/avatar.webp"}
        alt={name}
        className="w-20 h-20 rounded-full"
      />
      <div className="bg-[#2c2c2c] px-3 py-1 rounded-full text-sm font-medium text-gray-300">
        {name}, {position} @{_name}
      </div>
      <h2 className="text-4xl sm:text-3xl md:text-4xl font-semibold max-w-2xl leading-snug">
        “{title}”
      </h2>
      <div className="text-sm text-gray-400 space-x-1">
        <span>Customers</span>
        <span>{">"}</span>
        <span className="text-white">{_name}</span>
      </div>
    </div>
  );
}
