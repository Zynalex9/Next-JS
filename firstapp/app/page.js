import { getServerSession } from "next-auth";
import Toast from "./components/Toast";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div style={{ padding: "20px" }}>
      <h1>Hello {session ? session.user.name : "World"}</h1>
      <Toast />
    </div>
  );
}
