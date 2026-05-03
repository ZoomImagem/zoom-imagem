import { NextResponse } from "next/server";

const PLACE_ID = process.env.GOOGLE_PLACE_ID!;
const API_KEY = process.env.GOOGLE_API_KEY!;

export async function GET() {
  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}`,
      {
        headers: {
          "X-Goog-Api-Key": API_KEY,
          "X-Goog-FieldMask": "displayName,rating,userRatingCount,reviews",
        },
        next: { revalidate: 3600 },
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.log("Google API error:", JSON.stringify(data, null, 2));
      return NextResponse.json({ error: data }, { status: 400 });
    }

    return NextResponse.json({
      name: data.displayName?.text,
      rating: data.rating,
      user_ratings_total: data.userRatingCount,
      reviews: (data.reviews ?? []).map((r: any) => ({
        author_name: r.authorAttribution?.displayName,
        profile_photo_url: r.authorAttribution?.photoUri,
        rating: r.rating,
        text: r.text?.text,
        relative_time_description: r.relativePublishTimeDescription,
      })),
    });
  } catch (err) {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}