import Image from "next/image";
import confetti from "../../public/assets/confetti.png";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="section bg-pink h-screen">
      <div className="container">
        <div className="section-intro welcome">
          <Image
            src={confetti}
            height={200}
            width={200}
            alt="confetti"
            className="confetti"
          />
          <h3>{`You're in!`}</h3>
          <p>
            you can access evrything on this site. <br /> Ready to get started?
          </p>
          <Link href="/login" className="large-button">
            <div className="large-button-text">Get Started</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
