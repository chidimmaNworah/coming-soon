import Link from "next/link";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home } from "lucide-react";

export default function Custom404() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | AgeGroupNG"
        description="The page you're looking for doesn't exist."
      />
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 dark:from-black dark:via-dark-950 dark:to-black pt-20">
        <div className="container text-center text-white py-20">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-9xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Page Not Found
            </h2>
            <p className="text-xl text-dark-300 mb-8">
              Sorry, the page you're looking for doesn't exist or has been
              moved.
            </p>
            <Link href="/" className="btn btn-primary inline-flex items-center">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
