import { NextResponse } from 'next/server';

export async function GET() {
  const manifest = {
    accountAssociation: {
      header: "eyJmaWQiOjI4NDcxMywidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDBDN2FmZDk5OEY1MDY5ZkM1RTMxZWVmREM2RkZBODdlMzExYWIyM0MifQ",
      payload: "eyJkb21haW4iOiJtaW5kZ2FtZS1vbWVnYS52ZXJjZWwuYXBwIn0",
      signature: "MHhjYzAzNGUxMjk3MzUxZDMzM2Y1NTVjZWZiNjBiNGU2MDIzN2ZlYWU1YjgxYWU4OTAyNGZmNDc1OWE4Mjc0NzYxNTIyMjdjMTIyZGVkOTUzN2YzYzA5MjUzY2I1NjMxMTA3M2NkM2ViMjkyY2VkOTYzNmI4NzNkMGE0ZjVmZGFjNTFi"
    },
    frame: {
      version: "1",
      name: "BRAIN.exe!",
      iconUrl: "https://mindgame-omega.vercel.app/splash.png",
      homeUrl: "https://mindgame-omega.vercel.app",
      imageUrl: "https://mindgame-omega.vercel.app/image.png",
      buttonTitle: "Test Memory!",
      splashImageUrl: "https://mindgame-omega.vercel.app/splash.png",
      splashBackgroundColor: "#ffd753",
      webhookUrl: "https://api.neynar.com/f/app/1a6c0738-43e3-4629-8d0c-305f05bf120c/event"
    }
  };

  return NextResponse.json(manifest);
}