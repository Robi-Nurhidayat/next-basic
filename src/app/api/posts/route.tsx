import Posts from "@/app/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request: any) => {
  try {
    await connect();
    const posts: any = await Posts.find();

    return new NextResponse(posts, { status: 200 });
  } catch (err: any) {}
  return new NextResponse("It works", { status: 500 });
};
