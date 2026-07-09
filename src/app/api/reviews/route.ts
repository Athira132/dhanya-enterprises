import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: "API credentials not configured. Falling back to local static reviews." },
      { status: 400 }
    );
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;
    const res = await fetch(url, { next: { revalidate: 3600 } }); // Cache for 1 hour
    const data = await res.json();

    if (data.status !== "OK") {
      return NextResponse.json(
        { error: data.error_message || "Google Places API error status" },
        { status: 500 }
      );
    }

    return NextResponse.json(data.result.reviews || []);
  } catch (error) {
    console.error("Google Reviews API route error:", error);
    return NextResponse.json(
      { error: "Failed to fetch google reviews from API endpoint." },
      { status: 500 }
    );
  }
}
