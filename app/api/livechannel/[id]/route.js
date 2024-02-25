
import connectMongoDB from "@/lib/mongodb";
import liveChannel from "@/models/liveChannel";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description ,newImg:img , newLive: live } = await request.json();
  await connectMongoDB();
  await liveChannel.findByIdAndUpdate(id, { title,img,live, description });
  return NextResponse.json({ message: "liveChannel updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const LiveChannel = await liveChannel.findOne({ _id: id });
  return NextResponse.json({ LiveChannel }, { status: 200 });
}