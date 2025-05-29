'use server';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import type { User, SupabaseClient } from '@supabase/supabase-js';

type RequireAuthResult = {
  supabase: SupabaseClient;
  user: User;
  role: string;
  full_name: string;
};

export async function requireAuth(allowedRoles?: string[]): Promise<RequireAuthResult> {
  // Create a Supabase client configured for server components
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  // Get the currently authenticated user
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  // Fetch the user's profile including role and full name
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('role, full_name')
    .eq('id', user.id)
    .single();

  // Redirect if no profile found or role is not allowed
  if (!profile || (allowedRoles && !allowedRoles.includes(profile.role))) {
    redirect('/not-authorized');
  }

  // Return the supabase client, user info, role, and full name
  return {
    supabase,
    user,
    role: profile.role,
    full_name: profile.full_name,
  };
}