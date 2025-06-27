import CaseStudyAxios from "../../api";
import {
  type CaseStudyPaginatedResponse,
  type CaseStudyResponse,
} from "../../types";

export const GetAllCaseStudy = async () => {
  try {
    const res = await CaseStudyAxios.get(
      "/?populate[tags][fields][0]=label&populate[assets][fields][0]=url&populate[company][fields][0]=industry&populate[company][fields][1]=name&populate[company][populate][2]=logo"
    );
    return res.data as CaseStudyPaginatedResponse;
  } catch (err) {
    return {
      data: [],
      meta: { pagination: null },
    } as CaseStudyPaginatedResponse;
  }
};

export const GetCaseStudy = async (id: string) => {
  try {
    const res = await CaseStudyAxios.get(
      id +
        "/?populate[company][populate][0]=logo&populate[company][populate][1]=key_features&populate[company][populate][2]=use_cases&populate[case_study_user][fields][0]=id&populate[case_study_user][fields][1]=name&populate[case_study_user][fields][2]=email&populate[case_study_user][fields][3]=position&populate[tags][populate]=*&populate[case_study_user][populate][4]=profile_pic"
    );
    return res.data as CaseStudyResponse;
  } catch (err) {
    return null;
  }
};
