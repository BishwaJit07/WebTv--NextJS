import connectMongoDB from "@/lib/mongodb";

import tvShow from "@/models/tvShow";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description ,newImg:img , newLive: live ,newEpisodeDate:episodeDate } = await request.json();
  await connectMongoDB();
  await tvShow.findByIdAndUpdate(id, { title,img,live, description,episodeDate });
  return NextResponse.json({ message: "tvShow updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const TvShow = await tvShow.findOne({ _id: id });
  return NextResponse.json({ TvShow }, { status: 200 });
}