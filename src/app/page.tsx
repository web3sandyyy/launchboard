"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import InitialPage from "@/components/InitialPage";
import SearchResults from "@/components/SearchResults";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [showSearchResults, setShowSearchResults] = useState(false);
  return (
    <div className="min-h-[100dvh] w-full flex flex-col md:flex-row bg-blackTwo">
      <Sidebar />
      <div className="flex-grow max-h-full flex">
        <AnimatePresence>
          {showSearchResults ? (
            <SearchResults />
          ) : (
            <InitialPage setShowSearchResults={setShowSearchResults} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
