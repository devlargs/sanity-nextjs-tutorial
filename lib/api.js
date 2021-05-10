import client from "./sanity";
import imageUrlBuilder from "@sanity/image-url";

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

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export const getAllMovies = async ({ offset = { offset: 0 } }) => {
  const res = await client.fetch(
    `*[_type == "movie"] | order(releaseDate asc) {${movieField}}[${offset}...${
      offset + 3
    }]`
  );
  return res;
};

export const getMovieBySlug = async (slug) => {
  const res = await client
    .fetch(
      `*[_type == "movie" && slug.current == $slug ] {
    ${movieField}}`,
      { slug }
    )
    .then((res) => res?.[0]);
  return res;
};
