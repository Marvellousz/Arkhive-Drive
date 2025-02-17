import { SignInButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <>
      <SignInButton forceRedirectUrl={"/drive"}>
        <button
          type="submit"
          className="border border-neutral-700 bg-neutral-800 text-white transition-colors hover:bg-neutral-700 px-4 py-2 text-lg rounded-md"
        >
          Sign In
        </button>
      </SignInButton>
      <footer className="mt-16 text-sm text-neutral-500">
        © {new Date().getFullYear()} Arkhive Drive. All rights reserved.
      </footer>
    </>
  );
}
