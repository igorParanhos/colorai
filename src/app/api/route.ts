import { NextRequest, NextResponse } from "next/server";

const getColorName = (color: string) => {
  return color;
};

export async function GET(req: NextRequest) {
  const color = req.nextUrl.searchParams.get("color") || "";
  const colorName = getColorName(color);

  return NextResponse.json({ colorName }, { status: 200 });
}

export async function HEAD(request: NextRequest) {}

export async function POST(request: NextRequest) {}

export async function PUT(request: NextRequest) {}

export async function DELETE(request: NextRequest) {}

export async function PATCH(request: NextRequest) {}

export async function OPTIONS(request: NextRequest) {}