import { FormEvent, useState } from "react";
import { CharacterStatus, SearchFormValue } from "../models";

interface SearchProps {
  onSubmit: (search: SearchFormValue) => void;
}

export default function Search({ onSubmit }: SearchProps) {
  const [statuses] = useState<CharacterStatus[]>([
    { text: "All status", value: "" },
    { text: "Alive", value: "alive" },
    { text: "Dead", value: "dead" },
    { text: "Unknown", value: "unknown" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [statusValue, setStatus] = useState<CharacterStatus["value"]>("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const search: SearchFormValue = {
      search: inputValue,
      status: statusValue,
    };
    onSubmit(search);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-card mx-auto">
      <div className="flex">
        <label
          htmlFor="search-dropdown"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Status
        </label>
        <select
          onChange={(e) =>
            setStatus(e.target.value as CharacterStatus["value"])
          }
          value={statusValue}
          id="statuses"
          className="py-2.5 px-4 text-sm font-medium text-center text-gray-300 bg-[--bg-black-02] border border-[--orange-01] rounded-s-lg outline-none"
        >
          {statuses.map((s, index) => (
            <option key={index} value={s.value}>
              {s.text}
            </option>
          ))}
        </select>
        <div className="relative w-full">
          <input
            type="search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="block p-2.5 w-full z-20 text-sm text-gray-300 bg-[--bg-black-02] rounded-e-lg border-s-0 border border-[--orange-01] outline-none"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full hover:bg-[--orange-01] text-white rounded-e-lg border border-[--orange-01]"
          >
            Apply
          </button>
        </div>
      </div>
    </form>
  );
}
