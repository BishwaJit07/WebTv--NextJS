import mongoose, { Schema } from "mongoose";

const tvShowSchema = new Schema(
  {
    title: String,
    img : String,
    description: String,
    live: String,
    episodeDate:String,
  },
  {
    timestamps: true,
  }
);

const tvShow = mongoose.models.tvShow || mongoose.model("tvShow", tvShowSchema);

export default tvShow;