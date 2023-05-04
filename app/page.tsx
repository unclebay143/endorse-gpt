"use client";
import { useState } from "react";
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
  const isDarkMode = JSON.parse(window.localStorage.getItem("isDarkMode")!);
  const [darkMode, setDarkMode] = useState<boolean>(isDarkMode);
  const __isWriteNoteMode = JSON.parse(
    window.localStorage.getItem("isWriteNoteMode")!
  );
  const [isWriteNoteMode, setIsWriteNoteMode] =
    useState<boolean>(__isWriteNoteMode);
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
