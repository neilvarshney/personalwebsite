import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description: "Error 404",
};

export default function NotFound() {
  return (
    <section>
      <p className="flex justify-center text-6xl font-black mt-100">
        Error 404
      </p>
      <p className="flex justify-center mt-10">
        Oops! The page you're looking for doesn't seem to exist.
      </p>
    </section>
  );
}
