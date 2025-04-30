import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-[90%] mx-auto py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-end gap-6">
          <Image src="/TomadachiLogo.png" alt="logo" width={100} height={100} />
          <p className="text-sm font-semibold">&copy; {new Date().getFullYear()} Tomadachi</p>
        </div>

        <div className="flex items-center gap-4 underline text-sm">
          <Link href={"/contact"}>Report A Problem</Link>
          <Link href={"#"}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
};

export default Footer
