export type Asset = {
  id: number;
  documentId: string;
  url: string;
};
export type Tag = {
  id: number;
  documentId: string;
  label: string;
};

export type CaseStudyGeneral = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  conclusion: string;
  summary: string;
  tags: Tag[];
  assets: Asset[];
  company: {
    id: number;
    name: string;
    documentId: string;
    industry: string;
    logo: Media;
  };
};

export type CaseStudyPaginatedResponse = {
  data: CaseStudyGeneral[];
  meta: {
    pagination: any;
  };
};
export type CaseStudyResponse = {
  data: CaseStudy;
  meta: any;
};

export type CaseStudy = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  conclusion: string;
  summary: string;
  publishedAt: string;
  company: Company;
  case_study_user: CaseStudyUser;
  tags: Tag[];
};

export type Company = {
  id: number;
  documentId: string;
  name: string;
  about: string;
  company_size: string;
  industry: string;
  headquarters: string;
  founded: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  logo: Media;
  key_features: Feature[];
  use_cases: UseCase[];
};

export type CaseStudyUser = {
  id: number;
  documentId: string;
  name: string;
  email: string;
  position: string;
  profile_pic: Media;
};

export type UseCase = {
  id: number;
  documentId: string;
  label: string;
};

export type Feature = {
  id: number;
  documentId: string;
  label: string;
};

export type Media = {
  id: number;
  documentId: string;
  name: string;
  url: string;
  previewUrl: string | null;
};

// http://localhost:1337/api/case-studies?populate[tags][fields][0]=label&populate[assets][fields][0]=url&populate[company][fields][0]=industry

// localhost:1337/api/case-studies/flhgfb2y6l5s5yhx30h5yu9e?populate[company][populate][0]=logo&populate[company][populate][1]=key_features&populate[company][populate][2]=use_cases&populate[case_study_user][fields][0]=id&populate[case_study_user][fields][1]=name&populate[case_study_user][fields][2]=email&populate[case_study_user][fields][3]=position&populate[tags][populate]=*&populate[case_study_user][populate][4]=profile_pic
