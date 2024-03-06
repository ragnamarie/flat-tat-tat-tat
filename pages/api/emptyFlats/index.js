import dbConnect from "../../../db/dbConnect";
import EmptyFlat from "../../../db/models/EmptyFlat";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const emptyFlats = await EmptyFlat.find();
    console.log(emptyFlats);
    return response.status(200).json(emptyFlats);
  }

  if (request.method === "POST") {
    try {
      const emptyFlats = request.body;
      console.log(emptyFlats);
      await EmptyFlat.create(emptyFlats);

      response.status(201).json({ status: "Flat created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
