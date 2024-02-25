import mongoose, { Schema } from "mongoose";

const liveChannelSchema = new Schema(
  {
    title: String,
    img : String,
    description: String,
    live: String,
  },
  {
    timestamps: true,
  }
);

const liveChannel = mongoose.models.liveChannel || mongoose.model("liveChannel", liveChannelSchema);

export default liveChannel;