import { SearchBarProps } from "../../../types/types";
import Image from "next/image";
export default function SearchBar({
  searchTerm,
  setSearchTerm,
}: SearchBarProps) {
  return (
    <>
      <div className="search-bar">
        <Image src="/logo.jpg" width={100} height={100} alt="Logo" />

        <input
          className="input"
          type="text"
          placeholder="Search for a job..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </>
  );
}
