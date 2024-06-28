import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "../../constants"
import Button from "./Button"

export default function Navbar() {
  return (
    <nav className="
     shadow-md flexBetween max-container padding-container relative z-30 py-5">
      <Link href='/'>
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex ">
          {/* mapping the nav-links from the constants */}
          {NAV_LINKS.map((link)=>(
            <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
          <Link
            href="/login"
          >
          <Button 
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
            />
          </Link>
        </div>
        <Image
          src="menu.svg"
          alt="menu"
          height={32}
          width={32}
          className="inline-block cursor-pointer lg:hidden"
        />
    </nav>
  )
}
