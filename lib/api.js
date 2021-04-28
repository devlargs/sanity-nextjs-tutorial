import client from "./sanity";

const movieField = `
    title,
    releaseDate,
    externalId,
    popularity,
    castMembers,
    crewMembers, 
    'slug': slug.current,
    'poster': poster.asset->url ,
    'director': director->{name, 'image': image.asset->url},
    overview[]{...,  'asset': asset->}`;

export const getAllMovies = async () => {
  const res = await client.fetch(`*[_type == "movie"]{${movieField}}`);
  console.log(res);
  return res;
};

export const getMovieBySlug = async (slug) => {
  const res = await client
    .fetch(
      `*[_type == "movie" && slug.current == $slug ] {
    ${movieField}
   
  }`,
      { slug }
    )
    .then((res) => res?.[0]);
  return res;
};
