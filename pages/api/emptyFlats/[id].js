import dbConnect from "../../../db/dbConnect";
import EmptyFlat from "../../../db/models/EmptyFlat";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const emptyFlat = await EmptyFlat.findOne({ id: id });

    if (!emptyFlat) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(emptyFlat);
  }
}