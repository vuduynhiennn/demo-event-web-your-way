import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/static/logo-ngang.png" alt="logo" width={240} height={100} />
    </Link>
  );
}
