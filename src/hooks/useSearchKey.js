import { useContext } from "react";
import { SearchKeyContext } from "../context/SearchKeyContext";


export default function useSearchKey() {
  const context = useContext(SearchKeyContext);

  if (context === undefined) {
    throw new Error("useSearchKkey must be used within a CartProvider");
  }

  return context;
}