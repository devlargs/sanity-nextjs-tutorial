import client from "./sanity";

const movieField = `
    title,
    overview,
    releaseDate,
    externalId,
    popularity,
    castMembers,
    crewMembers, 
    'slug': slug.current,
    'poster': poster.asset->url ,
    'director': director->{name, 'image': image.asset->url}`;

export async function getAllMovies() {
  const results = await client.fetch(`*[_type == "movie"]{${movieField}}`);
  return results;
}
