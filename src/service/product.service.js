import { auth } from "@/auth";
import headerToken from "@/lib/headerToken";

export async function getAllProductService() {
  const headers = await headerToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`, {
    headers,
  });
  const result = await res.json();
  console.log(result);
  return result;
}
