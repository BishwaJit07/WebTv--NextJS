
import connectMongoDB from "@/lib/mongodb";
import liveChannel from "@/models/liveChannel";
import { NextResponse } from "next/server";


export async function POST(request){
    const {title,img,description,live}= await request.json();
    await connectMongoDB();

    await liveChannel.create({title,img,description,live});

    return NextResponse.json({message:'channel created'},{status:201})
}

export async function GET() {
    await connectMongoDB();
    const liveChannels = await liveChannel.find();
    return NextResponse.json({ liveChannels });
  }

  export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await liveChannel.findByIdAndDelete(id);
    return NextResponse.json({ message: "liveChannel deleted" }, { status: 200 });
  }