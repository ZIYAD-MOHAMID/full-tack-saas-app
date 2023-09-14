import Link from "next/link";

export default function LoginSubmitted({ submitted }) {
  return (
    <div className="content-grid home-hero">
      <h1>Link sent!</h1>
      <p>Check your email ({submitted}) to finish logging in.</p>
      <Link href="/">Go Back {`->`}</Link>
    </div>
  );
}
