import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Provider from "./auth/Provider";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Provider>
          <NavBar />
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
