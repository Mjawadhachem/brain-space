import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login", // redirect here if not signed in
  },
});

export const config = {
  matcher: ["/admin/:path*"],
};
