import { useState } from "react";
import AuthorIntro from "components/AuthorIntro";
import FilteringMenu from "components/FilteringMenu";
import PageLayout from "components/PageLayout";
import { getAllMovies } from "lib/api";
import { Row, Col } from "react-bootstrap";
import { useGetMoviesPages } from "action/pagination";

export default function Home({ movies }) {
  const [filter, setFilter] = useState({
    view: { list: 0 },
  });

  const {
    pages,
    isLoadingMore,
    isReachingEnd,
    loadMoreMovies,
  } = useGetMoviesPages({
    movies,
    filter,
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
        <Row className="mb-5">{pages}</Row>
      </div>
    </PageLayout>
  );
}

export const getStaticProps = async () => {
  const movies = await getAllMovies({ offset: 0 });
  return {
    props: {
      movies,
    },
  };
};
