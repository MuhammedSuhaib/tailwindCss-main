import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="bg-[#222222]  font-serif text-2xl">
      <div className="flex justify-between items-center">
        <section className="ml-auto ">
          <nav>
            <ul className="flex list-none space-x-10 	">
              <li  className=" hover:text-indigo-400"><Link href= "#Hero">Home</Link></li>
              <li className=" hover:text-indigo-400"><Link href= "#About">About us</Link></li>
              <li className=" hover:text-indigo-400"> <Link href= "#Services">Services</Link></li>
            </ul>
          </nav>
        </section>

        <section className=" ml-auto mr-4 hover:text-indigo-400  ">
          <img src="/images.webp" alt="Profile" />
            {/* className="w-20 h-20 rounded-full "
            src="/images.webp"
            alt="Profile"
            width={20}
            height={20}
           */}
          <details>
            <summary>
              <>Suhaib</>
            </summary>
            <div className="text-sm text-stone-700 bg-slate-50 list-none rounded-md p-2 " >
           <li>Add another Account</li>
            <li> Switch Account</li>
            <li>Logout</li>
            </div>
          </details>
        </section>
      </div>
    </div>
  );
}

export default Header;
