import Link from "next/link";

export function Navigation() {
  const rand = Math.ceil(Math.random() * 1000);
  return (
    <div className="flex flex-row bg-white text-black py-2 justify-center underline uppercase gap-2 w-full">
      <Link href="/" className="hover:font-medium">
        Home
      </Link>
      <Link href={`/?param=${rand}`} className="hover:font-medium">
        Rand
      </Link>
    </div>
  );
}
