import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGetMovies = (initialData) =>
  useSWR(`/api/movies`, fetcher, { initialData });
