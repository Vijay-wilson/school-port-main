// lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create a dummy client if environment variables are not available (for SSR)
// This prevents the app from crashing during build/SSR
const createSupabaseClient = () => {
  if (!supabaseUrl || !supabaseKey) {
    // Return a dummy client for SSR/build time
    // The actual client will be created on the client side
    return null;
  }
  return createClient(supabaseUrl, supabaseKey);
};

export const supabase = createSupabaseClient();

// Export a function to get the client (useful for dynamic imports)
export const getSupabaseClient = () => {
  if (typeof window === "undefined") {
    // Server-side: return null
    return null;
  }

  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    console.warn(
      "Supabase env vars are missing on the client. Ensure .env.local is set and dev server restarted."
    );
    return null;
  }

  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
};
