import { useState } from "react";
import AuthorIntro from "components/AuthorIntro";
import CardItem from "components/CardItem";
import CardListItem from "components/CardListItem";
import FilteringMenu from "components/FilteringMenu";
import PageLayout from "components/PageLayout";
import { getAllMovies } from "lib/api";
import { Row, Col } from "react-bootstrap";

export default function Home({ movie }) {
  const [filter, setFilter] = useState({
    view: { list: 0 },
  });
  return (
    <PageLayout>
      <div className="movie-detail-page">
        <AuthorIntro />
        <FilteringMenu
          filter={filter}
          onChange={(option, value) => {
            setFilter({ ...filter, [option]: value });
          }}
        />
        <hr />
        <Row className="mb-5">
          {movie.map((movie) =>
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
                <CardListItem />
              </Col>
            )
          )}
        </Row>
      </div>
    </PageLayout>
  );
}

export const getStaticProps = async () => {
  const movie = await getAllMovies();
  return {
    props: {
      movie,
    },
  };
};
