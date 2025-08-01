import type { Metadata } from "next";
import "./styles.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Read Only Blog",
  description: "The layout of blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="top-nav">
          <div className="nav-text-large">My App</div>
          <ul className="nav-list">
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/users">Users</Link>
            </li>
            <li>
              <Link href="/todos">Todos</Link>
            </li>
          </ul>
        </nav>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
