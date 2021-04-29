import PageLayout from "components/PageLayout";
import { getAllMovies, getMovieBySlug, urlFor } from "lib/api";
import { Row, Col } from "react-bootstrap";
import MovieHeader from "components/MovieHeader";
import MovieContent from "components/MovieContent";

const MovieDetail = ({ movie }) => {
  console.log(movie);
  return (
    <PageLayout className="movie-detail-page">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <MovieHeader
            title={movie.title}
            popularity={movie.popularity}
            image={urlFor(movie.poster).height(700).url()}
            director={movie.director}
            date={movie.releaseDate}
          />
          <hr />
          <MovieContent content={movie.overview} />
        </Col>
      </Row>
    </PageLayout>
  );
};

export const getStaticProps = async ({ params }) => {
  const movie = await getMovieBySlug(params?.slug);
  return {
    props: { movie },
  };
};

export const getStaticPaths = async () => {
  const movie = await getAllMovies();
  const paths = movie.map((q) => ({ params: { slug: q.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default MovieDetail;
