"use client"
import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "../../constants"
import Button from "./Button"
import { useState } from "react"
import { useSession, signIn, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pathname=usePathname();

  return (
    <nav className="
     shadow-lg flexBetween max-container padding-container z-30  py-5 sticky top-0 bg-white ">
      <Link href='/'>
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex ">
  
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className={`regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-50 link ${pathname===link.href ? 'text-green-50 font-extrabold':''}`} >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
                {session ? (
                    <Link href="/login" onClick={()=>signOut()}>
                    <Button
                      type="button"
                      title="Sign Out"
                      icon="/user.svg"
                      variant="btn_dark_green"
                    />
                  </Link>
                ) : (
                  <Link href="/login" onClick={()=>signIn()}>
                  <Button
                    type="button"
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green"
                  />
                </Link>
                )}
            </div>
      <div className="lg:hidden">
          <Image
            src={isMenuOpen?"cross.svg":"menu.svg"}
            alt={isMenuOpen?"cross":"menu"}
            height={32}
            width={32}
            className="cursor-pointer"
            onClick={handleMenuToggle}
          />
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden">
          <ul className="flex flex-col items-center p-4 gap-4">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className="regular-16 text-gray-700 cursor-pointer transition-all hover:font-bold" onClick={handleMenuToggle}>
                {link.label}
              </Link>
            ))}

            <Link href="/login" onClick={handleMenuToggle}>
              <Button
                type="button"
                title="Login"
                icon="/user.svg"
                variant="btn_dark_green"
              />
            </Link>
          </ul>
        </div>
      )}

    </nav>
  )
}
