import { NextResponse } from "next/server";

export default function middleware(req)

{

  let verify = req.cookies.get("loggedin");

  let url = req.url

  if(!verify && url.includes('http://localhost:3002/'))
    {

    return NextResponse.redirect("http://localhost:3001/");

    }

  if(verify && url=== "http://localhost:3001")
    {

    return NextResponse.redirect("http://localhost:3002");

  }

}

