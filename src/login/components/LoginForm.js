import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState } from "react";

export default function LoginForm({ setSubmitted }) {
  const supabaseClient = useSupabaseClient();

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event) {
    setIsLoading(true);
    event.preventDefault();

    const email = event.target.elements.email.value;
    const { error } = supabaseClient.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: false,
        emailRedirectTo: window.location.origin,
      },
    });

    if (error) {
      setError(error.massage);
      setIsLoading(false);
    } else {
      setError("");
      setIsLoading(false);
      setSubmitted(email);
    }
  }

  return (
    <form onSubmit={onSubmit} className="content-grid home-hero">
      {error && (
        <div className="danger" role="alert">
          {error}
        </div>
      )}
      <h1>Welcome back</h1>
      <div className="email-input">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" autoComplete="email" />
      </div>
      <button disabled={isLoading} type="submit" className="large-button">
        <div className="large-button-text">
          {isLoading ? "Loading..." : "Login"}
        </div>
      </button>
    </form>
  );
}
