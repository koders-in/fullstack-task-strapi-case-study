import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import View from "./pages/view";
import QueryProvider from "./provider/query-provider";
import { CaseStudyStoreProvider } from "./store/case-study.store";
import { CaseStudiesStoreProvider } from "./store/case-studies.store";
function App() {
  return (
    <>
      <QueryProvider>
        <CaseStudiesStoreProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />}></Route>
              <Route
                path="/:id"
                element={
                  <CaseStudyStoreProvider>
                    <View />
                  </CaseStudyStoreProvider>
                }
              ></Route>
            </Routes>
          </BrowserRouter>
        </CaseStudiesStoreProvider>
      </QueryProvider>
    </>
  );
}

export default App;
