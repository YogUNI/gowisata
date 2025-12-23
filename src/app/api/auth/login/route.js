import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function GET() {
  return Response.json({ message: "Login route OK" });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { username, password } = body;

    if (!username || !password) {
      return Response.json({ error: "Username and password required" }, { status: 400 });
    }

    const admin = await prisma.admin.findUnique({
      where: { username },
    });

    if (!admin) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    const isValid = await bcrypt.compare(password, admin.password);
    if (!isValid) {
      return Response.json({ error: "Incorrect password" }, { status: 401 });
    }

    const token = jwt.sign(
      {
        id: admin.id,
        role: admin.role,
        username: admin.username,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return new Response(JSON.stringify({ message: "Login success" }), {
      status: 200,
      headers: {
        "Set-Cookie": `token=${token}; Path=/; HttpOnly; Max-Age=604800; Secure; SameSite=Strict`,
        "Content-Type": "application/json",
      },
    });

  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}