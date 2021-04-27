import PageLayout from "components/PageLayout";
import { getMovieBySlug } from "lib/api";
import { useRouter } from "next/router";

const MovieDetail = (movie) => {
  return (
    <PageLayout>
      <h1>Hello! {movie?.slug} </h1>
    </PageLayout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const movie = await getMovieBySlug(params.slug);
  return {
    props: { movie },
  };
};

export default MovieDetail;
