import Image from "next/image";
import Link from "next/link";
import Logo from "src/core/components/Logo";
import LoginForm from "src/login/components/LoginForm";
import login from "../../public/assets/login.png";
import { useState } from "react";
import LoginSubmitted from "src/login/components/LoginSubmitted";

export default function LoginPage() {
  const [submitted, setSubmitted] = useState("");
  return (
    <div className="grid-halves h-screen">
      <div className="border-right bg-offwhite">
        <div className="column-padding">
          <div className="tablet-centered">
            <Link href="/" className="logo-container">
              <Logo styles={{ width: 150 }} />
            </Link>
            {submitted ? (
              <LoginSubmitted submitted={submitted} />
            ) : (
              <LoginForm setSubmitted={setSubmitted} />
            )}
          </div>
        </div>
      </div>
      <div className="border-right bg-navy">
        <Image src={login} alt="login" className="callout-image" />
      </div>
    </div>
  );
}
