import AuthorIntro from "components/AuthorIntro";
import CardItem from "components/CardItem";
import CardListItem from "components/CardListItem";
import PageLayout from "components/PageLayout";
import { getAllMovies } from "lib/api";
import { Row, Col } from "react-bootstrap";

export default function Home({ movie }) {
  return (
    <PageLayout>
      <div className="movie-detail-page">
        <Row>
          <Col md="8">
            <AuthorIntro />
          </Col>
        </Row>
        <hr />
        <Row className="mb-5">
          <Col md="10">
            <CardListItem />
          </Col>
          {movie.map((movie) => (
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
          ))}
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
