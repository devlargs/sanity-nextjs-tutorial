import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "lib/api";
import HighlightCode from "./HighlightCode";

const serializer = {
  types: {
    code: ({ node: { language, code } }) => {
      return <HighlightCode language={language}>{code}</HighlightCode>;
    },
    image: ({ node: { asset } }) => {
      return (
        <div className="movie-image">
          <div class="movie-image">
            <img src={urlFor(asset).height(300).fit("max")} />
          </div>
        </div>
      );
    },
  },
};

const MovieContent = ({ content }) => (
  <BlockContent serializers={serializer} blocks={content} />
);

export default MovieContent;
