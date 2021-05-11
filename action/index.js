import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGetMovies = ({ offset }, initialData) =>
  useSWR(`/api/movies?offset=${offset || 0}`, fetcher, { initialData });
