import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/chakra" className="border">
        Chakra UI
      </Link>
      <Link href="radix" className="border">
        Radix UI
      </Link>
      <Link href="flowbite" className="border">
        Flowbite
      </Link>
      <Link href="daisy" className="border">
        Daisy UI
      </Link>
      <Link href="shadcn" className="border">
        ShadCn
      </Link>
    </main>
  );
}
