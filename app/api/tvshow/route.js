
import connectMongoDB from "@/lib/mongodb";

import tvShow from "@/models/tvShow";
import { NextResponse } from "next/server";


export async function POST(request){
    const {title,img,description,live,episodeDate}= await request.json();
    await connectMongoDB();

    await tvShow.create({title,img,description,live,episodeDate});

    return NextResponse.json({message:'tvshow created'},{status:201})
}

export async function GET() {
    await connectMongoDB();
    const tvShows = await tvShow.find();
    return NextResponse.json({ tvShows });
  }

  export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await tvShow.findByIdAndDelete(id);
    return NextResponse.json({ message: "tvShow deleted" }, { status: 200 });
  }