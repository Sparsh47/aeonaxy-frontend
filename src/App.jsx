import React, { Suspense, lazy, useEffect } from "react";
import { UseContext } from "./customHooks/useContext";
import { questionData, cardData } from "./formData/data";
import Page from "./Page";
import Progress from "./components/Misc/Progress";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faStar, faChevronLeft);

const Page1 = lazy(() => import("./components/pageComponents/Page1"));
const Page2 = lazy(() => import("./components/pageComponents/Page2"));
const Page3 = lazy(() => import("./components/pageComponents/Page3"));
const Page4 = lazy(() => import("./components/pageComponents/Page4"));
const Page5 = lazy(() => import("./components/pageComponents/Page5"));
const Page6 = lazy(() => import("./components/pageComponents/Page6"));
const Page7 = lazy(() => import("./components/pageComponents/Page7"));

function App() {
  const { page, setPage, start } = UseContext();

  const pageComponents = {
    1: Page1,
    2: Page2,
    3: Page3,
    4: Page4,
    5: Page5,
    6: Page6,
    7: Page7,
  };

  let data;

  if (page === 1) {
    data = cardData[0];
  } else if (page === 2) {
    data = cardData[1];
  } else if (page === 4) {
    data = cardData[2];
  }

  useEffect(() => {
    if (page === 6) {
      var interval = setTimeout(() => {
        setPage(7);
      }, 3000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [page]);

  const renderPage = () => {
    const PageComponent = pageComponents[page];
    return PageComponent ? (
      <Page
        Child={PageComponent}
        textData={questionData[page - 1]}
        cardData={data}
      />
    ) : (
      <div>Page not found</div>
    );
  };

  const handlePaginationForward = () => {
    setPage((prev) => prev + 1);
  };

  const handlePaginationBackward = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <div className="w-full flex flex-col justify-center gap-10 items-center">
      {page > 5 ? null : (
        <div className="flex flex-row items-center justify-center gap-5 w-full mt-20">
          {page <= 1 ? null : (
            <button onClick={handlePaginationBackward}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          )}
          <Progress />
        </div>
      )}
      <Suspense fallback={<div>Loading...</div>}>{renderPage()}</Suspense>
      {page >= 6 ? null : (
        <button
          className="bg-black text-white rounded-lg font-medium w-[100px] md:w-[220px] md:h-[60px] text-sm md:text-lg py-2 md:px-5 md:py-2 disabled:bg-gray-200 mb-5"
          onClick={handlePaginationForward}
          disabled={!start}
        >
          Continue
        </button>
      )}
    </div>
  );
}

export default App;
