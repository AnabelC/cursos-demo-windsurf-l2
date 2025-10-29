import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          DevPortfolio
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
