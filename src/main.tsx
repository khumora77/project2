import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react"; // ClerkProvider importi
import App from "./app/App";
import "./index.css";
import "./i18n";
import { ThemeProvider } from "./components/providers/theme-provider";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY; // .env fayldan olinadi

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={clerkPubKey}>
      <ThemeProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </ThemeProvider>
    </ClerkProvider>
  </BrowserRouter>
);
