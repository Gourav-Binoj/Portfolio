import "./globals.css";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Gourav Binoj — Portfolio",
  description: "Gourav Binoj — AI/ML, real-time systems and full-stack projects."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Loader />
        <div id="site">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}