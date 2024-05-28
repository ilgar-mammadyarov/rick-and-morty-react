import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Search from "./components/Search";
import {
  CharacterApiDto,
  CharacterInfoApiDto,
  CharacterResultApiDto,
  SearchFormValue,
} from "./models";
import { fetchCharacters } from "./api";
import Card from "./components/Card";
import Pagination from "./components/Pagination";

export default function App() {
  const [characters, setCharacters] = useState<CharacterResultApiDto[]>([]);
  const [pageInfo, setPageInfo] = useState<CharacterInfoApiDto | null>(null);
  const [search, setSearch] = useState<SearchFormValue>({
    search: "",
    status: "",
  });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const response = await fetchCharacters(search);
    setResponse(response);
  };

  const handleSearch = async (data: SearchFormValue) => {
    setSearch(data);
    searchCharacters(data);
  };

  const searchCharacters = async (searchParams: SearchFormValue) => {
    setCurrentPage(1);
    const response = await fetchCharacters(searchParams);
    setResponse(response);
  };

  const changePage = async (page: number) => {
    setCurrentPage(page);
    const response = await fetchCharacters(search, page);
    setResponse(response);
  };

  const setResponse = (response: CharacterApiDto | null) => {
    if (response) {
      setCharacters(response.results);
      setPageInfo(response.info);
    } else {
      setCharacters([]);
      setPageInfo(null);
    }
  };

  return (
    <main className="flex flex-col">
      <Header />
      <Hero />

      <section className="grow-1 bg-[--bg-black-01] p-6 sm:py-20 sm:px-0">
        <Search onSubmit={handleSearch} />

        <div className="flex flex-col gap-y-6 py-6">
          {characters.map((character, index) => (
            <Card character={character} key={index} />
          ))}
        </div>

        <Pagination
          page={currentPage}
          characterCount={characters.length}
          lastPage={pageInfo?.pages ?? 0}
          onPageChange={changePage}
        />
      </section>
    </main>
  );
}
