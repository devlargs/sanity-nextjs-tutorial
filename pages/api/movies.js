import { getAllMovies } from "lib/api";

export default async function getMovies(req, res) {
  const offset = parseInt(req.query.offset || 0, 10);
  const data = await getAllMovies({ offset });
  res.status(200).json(data);
}
