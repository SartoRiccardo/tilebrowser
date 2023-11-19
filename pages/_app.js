import "@/styles/globals.css";
import { Luckiest_Guy } from "next/font/google";

const luckiestGuy = Luckiest_Guy({
  weight: ["400"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={luckiestGuy.className}>
      <Component {...pageProps} />
    </div>
  );
}
