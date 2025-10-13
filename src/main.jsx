import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { LanguageProvider } from "./LanguageContext"; // 👈 Thêm dòng này

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>   {/* 👈 Bọc App bằng Provider */}
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);
