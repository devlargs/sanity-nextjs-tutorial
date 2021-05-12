import { getPaginatedMovies } from "lib/api";

export default async function getMovies(req, res) {
  const offset = parseInt(req.query.offset || 0, 10);
  const releaseDate = req.query.releaseDate || "desc";
  const data = await getPaginatedMovies({ offset, releaseDate });
  res.status(200).json(data);
}
