import { GetCaseStudy } from "../actions/case-study";
import { useQuery } from "@tanstack/react-query";
import React, { createContext, useContext } from "react";
import { useParams } from "react-router-dom";
type CaseStudyStoreContextType = ReturnType<typeof useCaseStudyQuery>;

const CaseStudyStoreContext = createContext<CaseStudyStoreContextType | null>(
  null
);

function useCaseStudyQuery() {
  const params = useParams();
  const id = params.id;
  return useQuery({
    queryKey: ["case-studies-" + id],
    queryFn: async () => {
      if (!id) return null;
      return await GetCaseStudy(id);
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 60 * 24,
  });
}

export const CaseStudyStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const store = useCaseStudyQuery();

  return (
    <CaseStudyStoreContext.Provider value={store}>
      {children}
    </CaseStudyStoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(CaseStudyStoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
