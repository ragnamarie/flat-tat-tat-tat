import mongoose from "mongoose";

const { Schema } = mongoose;

const emptyFlatSchema = new Schema({
  address: { type: String, required: true },
  apartment: { type: String, required: true },
  name: { type: String, required: true },
});

const EmptyFlat =
  mongoose.models.EmptyFlat || mongoose.model("EmptyFlat", emptyFlatSchema);

export default EmptyFlat;
