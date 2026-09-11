import connectionMongodb from "@/libs/mongodb";
import Topic from "@/model/topic";
import { NextResponse } from "next/server";


export async function POST(request) {
   
  const {title, description} = await request.json();

  await connectionMongodb();
  await Topic.create({title, description});
  return NextResponse.json({message: "Topic Created"}, {status:200})
}

export async function GET(){
  await connectionMongodb();
  const topics = await Topic.find();
  return NextResponse.json({topics})

}

export async function DELETE(request){
    await connectionMongodb();

  const id = request.nextUrl.searchParams.get("id");
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({message : "deleted"}, {status:200})
 }