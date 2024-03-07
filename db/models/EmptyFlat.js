import mongoose from "mongoose";

const { Schema } = mongoose;

const emptyFlatSchema = new Schema({
  street: { type: String, required: true },
  zip: { type: String, required: true },
  apartment: { type: String, required: true },
  namesOnDoorbell: { type: String, required: true },
  report: { type: String, required: true },
});

const EmptyFlat =
  mongoose.models.EmptyFlat || mongoose.model("EmptyFlat", emptyFlatSchema);

export default EmptyFlat;
