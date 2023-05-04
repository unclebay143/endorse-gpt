"use client";
import { useEffect, useState } from "react";
import Header from "./components/header";
import Form from "./components/form";
import Footer from "./components/footer";
import MaxWidthWrapper from "./components/max-width-wrapper";
import ThemeWrapper from "./components/theme-wrapper";
import RecommendationTemplateSection from "./recommendation-template";
import ResponseCardLoader from "./components/loader/response-card-loader";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import FormModeToggle from "./components/form-mode-toggle";
import NoteForm from "./components/note-form";

export default function Home() {
  //theme
  const [isDarkModeInitialized, setIsDarkModeInitialized] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  //form mode
  const [isWriteNoteModeInitialized, setIsWriteNoteModeInitialized] =
    useState(false);
  const [isWriteNoteMode, setIsWriteNoteMode] = useState<boolean>(false);

  const [isGeneratingResponse, setIsGeneratingResponse] =
    useState<boolean>(false);

  const handleGenerate = () => {
    setIsGeneratingResponse(true);
    nprogress.start();
    setTimeout(() => {
      setIsGeneratingResponse(false);
      nprogress.done();
    }, 4000);
  };

  const handleFormModeChange = (_isWriteNoteMode: boolean) => {
    setIsWriteNoteMode(_isWriteNoteMode);
    localStorage.setItem("isWriteNoteMode", JSON.stringify(_isWriteNoteMode));
  };

  useEffect(() => {
    const isDarkModeFromLocalStorage = JSON.parse(
      localStorage.getItem("isDarkMode") || "false"
    );

    const isWriteNoteModeFromLocalStorage = JSON.parse(
      localStorage.getItem("isWriteNoteMode") || "false"
    );

    setIsDarkMode(isDarkModeFromLocalStorage);
    setIsWriteNoteMode(isWriteNoteModeFromLocalStorage);
    setIsDarkModeInitialized(true);
    setIsWriteNoteModeInitialized(true);
  }, []);

  if (!isDarkModeInitialized || !isWriteNoteModeInitialized) {
    return null; // or a loading spinner or anything else to show
  }

  return (
    <main className={`${isDarkMode ? "dark" : ""}`}>
      <ThemeWrapper>
        <MaxWidthWrapper>
          <div className='flex flex-col justify-between min-h-screen'>
            <div>
              <Header darkMode={isDarkMode} setDarkMode={setIsDarkMode} />
              {isGeneratingResponse ? (
                <ResponseCardLoader count={2} />
              ) : (
                <>
                  <FormModeToggle
                    mode={isWriteNoteMode}
                    handleFormModeChange={handleFormModeChange}
                  />

                  {isWriteNoteMode ? (
                    <NoteForm handleSubmit={handleGenerate} />
                  ) : (
                    <Form handleSubmit={handleGenerate} />
                  )}
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
