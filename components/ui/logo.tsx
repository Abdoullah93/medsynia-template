import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center gap-3" aria-label="MedSyn'IA">
      <Image src={logo} alt="MedSyn'IA Logo" width={32} height={32} />
      <span className="font-semibold text-lg text-gray-200">MedSyn'IA</span>
      </Link>
  );
}
