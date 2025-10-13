import { createContext, useContext, useState } from "react";

// Tạo Context để chia sẻ ngôn ngữ toàn app
const LanguageContext = createContext();

// Provider bọc quanh toàn bộ ứng dụng
export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => localStorage.getItem("lang") || "KO");

  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem("lang", lang); // Lưu ngôn ngữ vào localStorage
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook tiện dụng
export function useLanguage() {
  return useContext(LanguageContext);
}
