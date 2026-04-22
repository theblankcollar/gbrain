import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "blankcollar — the definition";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f5f5f5",
          color: "#000000",
          padding: 72,
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 20,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#6b6b6b",
              marginBottom: 16,
            }}
          >
            noun · /ˈblaŋk-ˌkä-lər/
          </div>
          <div style={{ fontSize: 128, fontWeight: 700, lineHeight: 1, letterSpacing: -2 }}>
            blank·collar
          </div>
        </div>
        <div
          style={{
            fontSize: 36,
            lineHeight: 1.3,
            maxWidth: 1000,
            color: "#1a1a1a",
          }}
        >
          The worker of the AI era — a generalist, empowered by machines, operating as a one-person company.
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
          }}
        >
          <div style={{ color: "#6b6b6b", fontStyle: "italic" }}>blankcollar.com</div>
          <div style={{ color: "#fa2bb8", fontWeight: 600 }}>#blankcollar</div>
        </div>
      </div>
    ),
    size,
  );
}
