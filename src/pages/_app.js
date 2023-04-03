import TransitionLayout from "../components/Layouts/TransitionLayout";
import Theme from "../utils/Theme";
import "../styles/globals.css";
import "animate.css";
import "swiper/css/bundle";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const { query, push } = useRouter();
  useEffect(() => {
    if (query.id) {
      const section = document.getElementById(`${query.id}`);
      section.classList.add("show");
    } else {
      const section = document.getElementById("home");
      section.classList.add("show");
      push(`/?id=home`);
    }
  }, [query.id, push]);
  return (
    <Theme>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <TransitionLayout>
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </TransitionLayout>
    </Theme>
  );
}
