import Link from "next/link";

export default function PromoCard() {
  return (
    <section>
      <div>
        <div>
          <h4>Get Instant Access</h4>
          <p style={{ frontSize: "1rem" }}>
            Access This product plus dozens of others when you subscribe.
          </p>
        </div>
      </div>
      <Link href="/pricing" className="primary button">
        Purchase
      </Link>
    </section>
  );
}
