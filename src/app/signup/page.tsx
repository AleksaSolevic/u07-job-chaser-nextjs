import Link from "next/link";

export default function SignUp() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Sign Up</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded mb-2"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-2"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-2"
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          Sign Up
        </button>

        <p className="mt-2 text-center">
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-500">
            Sign In
          </Link>
        </p>
        <Link href="/"> Back to Job-chaser?</Link>
      </form>
    </div>
  );
}
