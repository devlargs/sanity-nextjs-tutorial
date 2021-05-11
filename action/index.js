import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGetMovies = ({ offset, filter }, initialData) => {
  return useSWR(
    `/api/movies?offset=${offset || 0} &releaseDate=${
      filter.releaseDate.asc ? "asc" : "desc"
    }`,
    fetcher,
    { initialData }
  );
};
