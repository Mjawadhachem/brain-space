// app/admin/page.tsx
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Welcome, {session?.user?.name}
      </h1>

      <p className="mb-6">What would you like to manage today?</p>
      <div className="grid grid-cols-2 gap-4">
        <Link href="/admin/pages">
          <a className="p-4 border rounded hover:bg-gray-50">📄 Manage Pages</a>
        </Link>
        <Link href="/admin/modules">
          <a className="p-4 border rounded hover:bg-gray-50">
            🔧 Manage Modules
          </a>
        </Link>
        {/* add more cards for other content types */}
      </div>
    </div>
  );
}
