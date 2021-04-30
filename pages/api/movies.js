import { getAllMovies } from "lib/api";

export default async function getMovies(req, res) {
  const data = await getAllMovies();
  res.status(200).json(data);
}
