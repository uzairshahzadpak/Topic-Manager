import connectionMongodb from "@/libs/mongodb";
import Topic from "@/model/topic";
import { NextResponse } from "next/server";



export async function PUT(request, {params}){
  const {id} = await params;
  
  const {newTitle : title, newDescription : description} = await request.json();

  await connectionMongodb();

   await Topic.findByIdAndUpdate(id, {title, description});

   return NextResponse.json({message : "Topic Updated"}, {status : 200})
}

export async function GET(request, {params}){
  const {id} = await params ;

  await connectionMongodb();
  const topic = await Topic.findOne({_id: id});

  return NextResponse.json({topic}, {status:200});


}