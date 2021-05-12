import { useState } from "react";
import AuthorIntro from "components/AuthorIntro";
import FilteringMenu from "components/FilteringMenu";
import PageLayout from "components/PageLayout";
import { getPaginatedMovies } from "lib/api";
import { Row, Button } from "react-bootstrap";
import { useGetMoviesPages } from "action/pagination";

export default function Home({ movies }) {
  const [filter, setFilter] = useState({
    view: { list: 0 },
    releaseDate: { asc: 0 },
  });

  const { pages, isLoadingMore, isReachingEnd, loadMore } = useGetMoviesPages({
    movies,
    filter,
  });
  return (
    <PageLayout>
      <AuthorIntro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => {
          setFilter({ ...filter, [option]: value });
        }}
      />
      <hr />
      <div style={{ textAlign: "center" }}>
        <Row className="mb-5">{pages}</Row>
        <Button
          variant="secondary"
          size="lg"
          onClick={loadMore}
          disabled={isReachingEnd || isLoadingMore}
        >
          {isLoadingMore
            ? "..."
            : isReachingEnd
            ? "No more movies"
            : "More Movies"}
        </Button>
      </div>
    </PageLayout>
  );
}

export const getStaticProps = async () => {
  const movies = await getPaginatedMovies({ offset: 0, releaseDate: "desc" });
  return {
    props: {
      movies,
    },
  };
};
