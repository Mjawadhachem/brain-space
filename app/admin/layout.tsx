// app/admin/layout.tsx
import Link from "next/link";
import { ReactNode } from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className="flex min-h-screen">
        {/* Sidebar */}
        <nav className="w-64 bg-gray-100 p-6 border-r">
          <h2 className="text-xl font-bold mb-6">Control Panel</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/admin">
                <a>🏠 Dashboard</a>
              </Link>
            </li>
            <li>
              <Link href="/admin/pages">
                <a>📄 Pages</a>
              </Link>
            </li>
            <li>
              <Link href="/admin/modules">
                <a>🔧 Modules</a>
              </Link>
            </li>
            {/* add more links as you build them */}
            <li>
              <form action="/api/auth/signout" method="post">
                <button className="mt-6 text-red-600">Sign Out</button>
              </form>
            </li>
          </ul>
        </nav>

        {/* Main content */}
        <main className="flex-1 p-8 bg-white">{children}</main>
      </body>
    </html>
  );
}
