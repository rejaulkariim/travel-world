"use client";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="mt-16 flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
      <p className="text-gray-600">
        The page you&apos;re looking for does not exist.
      </p>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Go back to the homepage
      </Link>
    </main>
  );
};

export default NotFoundPage;
