import { GetAllCaseStudy } from "../actions/case-study";
import { useQuery } from "@tanstack/react-query";
import React, { createContext, useContext } from "react";
import { type CaseStudyPaginatedResponse } from "../types";
type CaseStudiesStoreContextType = ReturnType<typeof useCaseStudyQuery>;

const CaseStudiesStoreContext =
  createContext<CaseStudiesStoreContextType | null>(null);

function useCaseStudyQuery() {
  return useQuery<CaseStudyPaginatedResponse>({
    queryKey: ["case-studies"],
    queryFn: async () => await GetAllCaseStudy(),
    staleTime: 1000 * 60 * 60 * 24,
  });
}

export const CaseStudiesStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const store = useCaseStudyQuery();

  return (
    <CaseStudiesStoreContext.Provider value={store}>
      {children}
    </CaseStudiesStoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(CaseStudiesStoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
