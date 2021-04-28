import client from "./sanity";

const movieField = `
    title,
    releaseDate,
    externalId,
    popularity,
    castMembers,
    crewMembers, 
    'slug': slug.current,
    'overview' : overview[0].children[0].text,
    'poster': poster.asset->url ,
    'director': director->{name, 'image': image.asset->url}`;

export const getAllMovies = async () => {
  const res = await client.fetch(`*[_type == "movie"]{${movieField}}`);
  return res;
};

export const getMovieBySlug = async (slug) => {
  const res = await client.fetch(
    `*[_type == "movie" && slug.current == $slug ] {
    ${movieField}
  }`,
    { slug }
  );
  return res[0];
};
