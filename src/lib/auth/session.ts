import { jwtVerify, SignJWT } from "jose";

const sessionCookie = "roboclub_session";

function getAuthSecret() {
  const secret = process.env.AUTH_SECRET;

  if (!secret) {
    throw new Error("AUTH_SECRET is not configured");
  }

  return new TextEncoder().encode(secret);
}

export async function createSessionToken({
  userId,
  role,
}: {
  userId: string;
  role: string;
}) {
  return new SignJWT({ userId, role })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getAuthSecret());
}

export async function verifySessionToken(token: string) {
  return jwtVerify(token, getAuthSecret());
}

export { sessionCookie };
