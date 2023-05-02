"use client";
import { useState } from "react";
import Header from "./components/header";
import Form from "./components/form";
import Footer from "./components/footer";
import MaxWidthWrapper from "./components/max-width-wrapper";
import ThemeWrapper from "./components/theme-wrapper";
import RecommendationTemplateSection from "./recommendation-template";
import ResponseCardLoader from "./components/loader/response-card-loader";

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isGeneratingResponse, setIsGeneratingResponse] =
    useState<boolean>(false);

  const handleGenerate = () => {
    setIsGeneratingResponse(true);

    setTimeout(() => {
      setIsGeneratingResponse(false);
    }, 4000);
  };
  return (
    <main className={`${darkMode ? "dark" : ""}`}>
      <ThemeWrapper>
        <MaxWidthWrapper>
          <div className='flex flex-col justify-between min-h-screen'>
            <div>
              <Header darkMode={darkMode} setDarkMode={setDarkMode} />
              {isGeneratingResponse ? (
                <ResponseCardLoader count={2} />
              ) : (
                <>
                  <Form handleSubmit={handleGenerate} />
                  <RecommendationTemplateSection />
                </>
              )}
            </div>
            <Footer />
          </div>
        </MaxWidthWrapper>
      </ThemeWrapper>
    </main>
  );
}
