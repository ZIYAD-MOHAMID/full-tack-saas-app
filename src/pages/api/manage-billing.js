import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { SITE_URL } from "src/core/utils";
export default async function handler(req, res) {
  const supabaseServerClient =
    createPagesServerClient <
    Database >
    {
      req,
      res,
    };
  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();
  if (!user) {
    return res.status(401).send("Unauthorized");
  }
  await supabaseServerClient
    .from("profile")
    .select("stripe_customer_id")
    .eq("user_id")
    .single();
  const session = await strinpe.billingPortal.sessions.create({
    customer: profile.strinpe_customer_id,
    return_url: SITE_URL,
  });
  res.send({ url: session.url });
}

// res.status(200).json({ name: user?.name ?? "" });
