export async function GET() {
  const res = await fetch("https://api.twitch.tv/helix/games/top?first=20", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  console.log(data);

  return Response.json({ data });
}
