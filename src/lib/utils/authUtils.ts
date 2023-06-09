import type { Cookies } from "@sveltejs/kit";

export const setAuthToken = ({cookies, token}:{token: string, cookies: Cookies}) => {
    cookies.set('AuthorizationToken', `Bearer ${token}`, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24,
      path: '/'
    });
  };