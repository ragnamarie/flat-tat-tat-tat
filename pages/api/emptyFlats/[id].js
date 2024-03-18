import dbConnect from "../../../db/dbConnect";
import EmptyFlat from "../../../db/models/EmptyFlat";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const emptyFlat = await EmptyFlat.findOne({ _id: id });

    if (!emptyFlat) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(emptyFlat);
  } else if (request.method === "PUT") {
    try {
      const { isConfirmedEmpty } = request.body;

      // Update the empty flat with the provided id
      const updatedEmptyFlat = await EmptyFlat.findByIdAndUpdate(
        id,
        { isConfirmedEmpty },
        { new: true }
      );

      if (!updatedEmptyFlat) {
        return response.status(404).json({ status: "Not Found" });
      }

      response.status(200).json(updatedEmptyFlat);
    } catch (error) {
      response.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    response.status(405).json({ error: "Method Not Allowed" });
  }
}
