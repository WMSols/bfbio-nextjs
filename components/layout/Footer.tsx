import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Bf Bio Sciences. All rights reserved.</p>
        <Link href="/contact" className="hover:text-foreground">
          Contact
        </Link>
      </div>
    </footer>
  );
}
