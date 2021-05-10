import { useSWRPages } from "swr";
import { useGetMovies } from "action";
import CardItem from "components/CardItem";
import CardListItem from "components/CardListItem";
import { Col } from "react-bootstrap";

export const useGetMoviesPages = ({ movies: initialData, filter }) => {
  return useSWRPages(
    "index-page",
    ({ offset, withSWR }) => {
      const { data: movies } = withSWR(useGetMovies(initialData));
      console.log(movies);
      console.log("Here");

      if (!movies) {
        return "Loading...";
      }
      return movies.map((movie) =>
        !filter.view.list ? (
          <Col key={movie.slug} md="4">
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
          <Col md="10">
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
      return 0;
    },
    []
  );
};
