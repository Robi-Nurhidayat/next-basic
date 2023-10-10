import Posts from "@/app/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request: any, { params }: any) => {
  const { id } = params;
  try {
    await connect();
    const post: any = await Posts.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err: any) {}
  return new NextResponse("It works", { status: 500 });
};
