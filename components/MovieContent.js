import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "lib/api";
import HighlightCode from "./HighlightCode";

const serializer = {
  types: {
    code: ({ node: { language, code } }) => {
      return <HighlightCode language={language}>{code}</HighlightCode>;
    },
    image: ({ node: { asset, alt, position = "center" } }) => {
      return (
        <div className={`movie-image movie-image-${position}`}>
          <img src={urlFor(asset).height(300).fit("max").url()} />
          <div className="movie-alt">{alt}</div>
        </div>
      );
    },
  },
};

const MovieContent = ({ content }) => (
  <BlockContent serializers={serializer} blocks={content} />
);

export default MovieContent;
