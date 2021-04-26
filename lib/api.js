import client from "./sanity";

const movieField = `title,
    'slug': slug.current, overview, releaseDate, externalId, popularity, poster, castMembers, crewMembers`;

export async function getAllMovies() {
  const results = await client.fetch(`*[_type == "movie"]{${movieField}}`);
  return results;
}
