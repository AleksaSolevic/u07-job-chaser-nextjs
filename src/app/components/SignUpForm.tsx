import Link from "next/link";

export default function SignUpForm() {
  return (
    <div className=" sign-up-container flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Sign Up
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border border-gray-300 rounded-lg mb-3 text-gray-900 placeholder-gray-700 focus:ring-2 focus:ring-green-500"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg mb-3 text-gray-900 placeholder-gray-700 focus:ring-2 focus:ring-green-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-gray-900 placeholder-gray-700 focus:ring-2 focus:ring-green-500"
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-all duration-300"
        >
          Sign Up
        </button>

        <p className="mt-4 text-center text-gray-700">
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>
      </form>

      <Link
        href="/"
        className="absolute bottom-0 text-gray-600 hover:text-gray-900 transition"
      >
        Back to Job-chaser?
      </Link>
    </div>
  );
}
