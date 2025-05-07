import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image src="/static/logo-ngang.png" alt="logo" width={240} height={100} />
    </div>
  );
}
