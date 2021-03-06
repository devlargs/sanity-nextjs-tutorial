import { useEffect } from "react";

import { useSWRPages } from "swr";
import { useGetMovies } from "action";
import { Col } from "react-bootstrap";
import CardItem from "components/CardItem";
import CardListItem from "components/CardListItem";
import CardItemBlank from "components/CardItemBlank";
import CardListItemBlank from "components/CardListItemBlank";

export const useGetMoviesPages = ({ movies, filter }) => {
  useEffect(() => {
    window.__pagination__init = true;
  }, []);

  return useSWRPages(
    "index-page",
    ({ offset, withSWR }) => {
      let initialData = !offset && movies;

      if (typeof window !== "undefined" && window.__pagination__init) {
        initialData = null;
      }

      const { data: paginateMovies } = withSWR(
        useGetMovies({ offset, filter }, initialData)
      );

      if (!paginateMovies) {
        return Array(3)
          .fill(0)
          .map((_, i) =>
            !filter.view.list ? (
              <Col key={`${i}-item`} md="4">
                <CardItemBlank />
              </Col>
            ) : (
              <Col key={`${i}-list`} md="10">
                <CardListItemBlank />
              </Col>
            )
          );
      }
      return paginateMovies.map((movie) =>
        !filter.view.list ? (
          <Col key={`${movie.slug}-item`} md="4">
            <CardItem
              title={movie.title}
              popularity={movie.popularity}
              image={movie.poster}
              date={movie.releaseDate}
              director={movie.director}
              overview={movie.overview}
              link={{
                href: "/movie/[slug]",
                as: `/movie/${movie.slug}`,
              }}
            />
          </Col>
        ) : (
          <Col key={`${movie.slug}-list`} md="10">
            <CardListItem
              title={movie.title}
              popularity={movie.popularity}
              date={movie.releaseDate}
              director={movie.director}
              link={{
                href: "/movie/[slug]",
                as: `/movie/${movie.slug}`,
              }}
            />
          </Col>
        )
      );
    },
    //compute offset
    (SWR, index) => {
      if (SWR.data && SWR.data.length === 0) {
        return null;
      }
      return (index + 1) * 6;
    },
    [filter]
  );
};
