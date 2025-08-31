// components/SearchBar.jsx
"use client"; // This directive marks it as a Client Component in the App Router

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSearchQuery = searchParams.get("query") || ""; // Get existing query from URL

  const [searchQuery, setSearchQuery] = useState(currentSearchQuery);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    const params = new URLSearchParams(searchParams.toString()); // Create new params object
    if (searchQuery) {
      params.set("query", searchQuery);
    } else {
      params.delete("query"); // Remove query if empty
    }
    router.push(`/?${params.toString()}`); // Navigate with updated search params
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-search-icon lucide-search"
        >
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
