// src/lib/auth/requireAuth.ts

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

type AuthUser = {
  user: any;
  role: string;
  full_name: string;
};

export async function requireAuth(): Promise<AuthUser> {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          const cookie = cookieStore.get(name);
          return cookie?.value ?? '';
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.id) {
    redirect('/login');
  }

  const { data: profile } = await supabase
    .from('user_profiles')
    .select('full_name, role')
    .eq('id', user.id)
    .single();

  return {
    user,
    role: profile?.role || 'guest',
    full_name: profile?.full_name || user.email,
  };
}