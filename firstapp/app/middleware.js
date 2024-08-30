import middleware from "next-auth/middleware";
export default middleware;

export const config = {
  matcher: ["/portfolio/:id*"],
};

console.log("Middleware is running");
