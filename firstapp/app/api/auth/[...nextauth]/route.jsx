import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
const Handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        })
    ]
});
export { Handler as GET, Handler as POST };
