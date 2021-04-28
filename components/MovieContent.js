import BlockContent from "@sanity/block-content-to-react";

const serializer = {
  types: {
    code: ({ node: { language, code } }) => (
      <pre data-language={language}>
        <code>{code}</code>
      </pre>
    ),
  },
};

const MovieContent = ({ content }) => (
  <BlockContent serializers={serializer} blocks={content} />
);

export default MovieContent;
