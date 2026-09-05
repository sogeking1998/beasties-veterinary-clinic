import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
export const alt = "Beasties Veterinary Clinic";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/images/beasties-logo.jpg"));
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 55, background: "#fffafb", padding: 65, fontFamily: "sans-serif" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`data:image/jpeg;base64,${logo.toString("base64")}`} width={350} height={350} alt="Beasties Veterinary Clinic logo" style={{ borderRadius: "50%" }} />
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ fontSize: 54, fontWeight: 800, color: "#302b32", lineHeight: 1.1 }}>Beasties Veterinary Clinic</div>
        <div style={{ fontSize: 30, color: "#a93670", marginTop: 25 }}>Little paws. Extraordinary care.</div>
        <div style={{ fontSize: 22, color: "#736975", marginTop: 25 }}>Poblacion 4, Lactason St. · Est. 2023</div>
      </div>
    </div>, size
  );
}
