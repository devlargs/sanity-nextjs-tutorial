import PageLayout from "components/PageLayout";
import { getAllMovies, getMovieBySlug, urlFor } from "lib/api";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { Row, Col } from "react-bootstrap";
import MovieHeader from "components/MovieHeader";
import MovieContent from "components/MovieContent";

const MovieDetail = ({ movie }) => {
  const router = useRouter();

  if (!router.isFallback && !movie?.slug) {
    return <ErrorPage statusCode="404" />;
  }

  if (router.isFallback) {
    return <PageLayout className="movie-detail-page">Loading...</PageLayout>;
  }

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
          {movie.overview && <MovieContent content={movie.overview} />}
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
  const paths = movie?.map((q) => ({ params: { slug: q.slug } }));
  return {
    paths,
    fallback: true,
  };
};

export default MovieDetail;
